import React, { useState } from 'react'
import axios from 'axios';
import Signin from './Signin';

function Otp() {
    const [success1,setSuccess1]=useState(false)
    const mail = prompt("ENter your mail")
    const opt = prompt("Enter your opt :");
    const numtp = parseInt(opt)
    //var axios = require('axios');
var data = JSON.stringify({
    "code": numtp,
    "email": mail
  });
  
  var config = {
    method: 'post',
  maxBodyLength: Infinity,
    url: 'http://127.0.0.1:8000/user/register/verify/',
    headers: { 
      'Content-Type': 'application/json'  
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    alert("Logged in")
    setSuccess1(true)
    console.log("here is it "+response.data.soldier)
  })
  .catch(function (error) {
    console.log(error);
    alert("Bhai yaar nhi plz")
  });
  return (
    <>
    {
        success1?(<Signin/>):(
            <div>
        <h1>THis is opt verification page</h1>
    </div>
        )
    }
    
    </>
  )
}

export default Otp
