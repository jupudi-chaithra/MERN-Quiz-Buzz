import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {UserContext} from '../App'



function Logout() {
    const {state, dispatch} = useContext(UserContext)

    let navigate = useNavigate()
    
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
            credentials: "include"
        }).then((res) => {

            navigate('/')
            dispatch({type:"USER", payload: false})
            // console.log(state)

            if(res.status != 200){
                const error = new Error(res.error)
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    });
    return (
        <div>
            <h1>Logout</h1>
        </div>
  )
}

export default Logout