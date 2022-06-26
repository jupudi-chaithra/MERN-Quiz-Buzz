const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate =  require("../middleware/authenticate")

require('../db/conn')
const User = require('../model/userSchema')

router.get('/', (req, res) => {
    res.send(`Hello world from the server router.js`)
});

router.post('/register', async(req, res) => {

    const {name, email, password, cpassword} = req.body;
    if(!name || !email || !password || !cpassword){
        return res.status(424).json({error: "This field is required"});
    }

    try{
        const userExists = await User.findOne({email:email})
        const unExists = await User.findOne({name:name});

        if(userExists){
            return res.status(422).json({error: "This email ID is already registered"});
        }else if(unExists){
            return res.status(421).json({error: "This Username is already registered"});
        }
        else if(password != cpassword){
            return res.status(423).json({error: "Enter the confirm password field correctly"});
        }else{
            const user = new User({name, email, password, cpassword})
            const userRegister = await user.save();

            if(userRegister){
                res.status(201).json({message: "User registration successful"})
            }else{
                res.status(500).json({error: "Failed to register"})
            }
        }
    }

    catch(err){
        console.log(err);
    }
    
})

//Login route

router.post('/signin', async(req, res) => {
    try{
        let token;
        const {email, password} = req.body;
        
        if(!email || !password){
            res.status(400).json({error: "Both fields are required"})
        }

        const userLogin = await User.findOne({email: email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if(!isMatch){
                res.status(400).json({error: "Invalid credentials"})
            }else{
                res.json({message: "User signed in successfully"})
            }
        }else{
                res.status(400).json({error: "Invalid credentials"})
        }

    }catch(err){
        console.log(err);
    }
})


//topics
router.get('/topics', authenticate, (req, res) => {
    // console.log('Hello Topics');
    res.send(req.rootUser)
});

//home
router.get('/home', authenticate, (req, res) => {
    // console.log('Hello Home');
    res.send(req.rootUser)
});

//logout
router.get('/logout', (req, res) => {
    // console.log('Hello Logout');
    res.clearCookie('jwtoken', {path:'/'})
    res.status(200).send('User logout')
});
module.exports = router;