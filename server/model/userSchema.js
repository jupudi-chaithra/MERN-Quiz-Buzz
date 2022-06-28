const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    html:{
        type: Number,
        default: 0
    },
    htmlScore:{
        type: Number,
        default: 0
    },
    css:{
        type: Number,
        default: 0
    },
    cssScore:{
        type: Number,
        default: 0
    },
    js:{
        type: Number,
        default: 0
    },
    jsScore:{
        type: Number,
        default: 0
    },
    bs:{
        type: Number,
        default: 0
    },
    bsScore:{
        type: Number,
        default: 0
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})


//Password hashing
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next()
})

//Token generation
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token: token})
        await this.save()
        return token
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;