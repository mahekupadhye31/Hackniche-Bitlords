import React, { useState,useEffect } from 'react'
import './App.css'
import Soldierboy from './soldierboy.png'
import {
    Link, useNavigate
  } from "react-router-dom";
import Validation from './Validation';
import {Box,TextField,Typography,Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Menu } from '@mui/icons-material';
import axios from 'axios';
import Otp from './Otp';


function Signup() {
  const [otp,setOtp] = useState("");
  const [displayy,setDisplayy]=useState(false)

    const [inpval,setInpval]=useState({
        firstname:"",lastname:'', email:"",password:"",phone_number:'',isveteran:''
   
     })
     const [vet,setVet] = useState("")
     const handlevetchange=(e)=>{
        setVet(e.target.value)
        
     }
     const getvetval=()=>{
        if(vet==="yes"){
            console.log(true)
        }
        else if(vet==='no'){
            console.log(false)
        }
     }
     const getdata=(e)=>{
     const {value,name}= e.target;
       setInpval(()=>{
         return {
           ...inpval,
           [name]:value
         }
       })
   
     }
     const [data,setData]=useState([])
     
     const addData=(e)=>{
       e.preventDefault();
        if(vet==="yes"){
            console.log(true)
            setBolvet(true)
        }
        else if(vet==='no'){
            console.log(false)
            setBolvet(false)
        }
       const {firstname,lastname,email,password,phone_number}=inpval;
       setErrors(Validation(inpval));
               setDataIsCorrect(true);
               const newRecords={...inpval, id:new Date().getTime().toString()};
               setRecords([...records,newRecords])
   
                // localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
                var data = JSON.stringify({
                  "email": inpval.email,
                  "password": inpval.password,
                  "password2": inpval.password,
                  "soldier": bolvet
                });
                
                var config = {
                  method: 'post',
                maxBodyLength: Infinity,
                  url: 'http://127.0.0.1:8000/user/register/',
                  headers: { 
                    'Content-Type': 'application/json'
                  },
                  data : data
                };
                
                axios(config)
                .then(function (response) {
                  console.log(JSON.stringify(response.data));
                  alert("Success")
                  setDisplayy(true)
                })
                .catch(function (error) {
                  console.log(error);
                  alert("console dekh")
                });
   
   
   
     }
   
     const [isSignup,setIsSignup]= useState(false);
     const [inputs,setInputs]=useState({
               firstname:"",lastname:'', email:"",password:"",phone_number:''
   
     });
     const [bolvet,setBolvet] = useState(false)
     const [records,setRecords]=useState([]);
     const handlesubmit=(e)=>{
               e.preventDefault();
               if(selectedOption){
                    console.log("true")
                    
               }
               else{
                console.log("false")
                
               }
    
               setErrors(Validation(inputs));
               setDataIsCorrect(true);
               const newRecords={...inputs, id:new Date().getTime().toString()};
               setRecords([...records,newRecords])

               //lets add signup API
             //var axios = require('axios');


       
   
     }
     
     const resetstate=()=>{
       setIsSignup(!isSignup);
   
       setInputs({firstname:'',lastname:'',email:'',password:'',phone_number:'',})
       setErrors({firstname:'',lastname:'',email:'',password:'',phone_number:'',})
      
     }
     const [errors,setErrors]=useState({});

     const [selectedOption,setSelectedOption]=useState(false)
     const handleoptionchange=(e)=>{
        setSelectedOption(e.target.value);

     }
     
     const [dataIsCorrect, setDataIsCorrect]=useState(false);
   
     useEffect(()=>{
       if(Object.keys(errors).length===0 && dataIsCorrect) {
   
   
       }
      },[errors]);
      
        const container = document.querySelector(".container");

        const handleClick=()=>{
            container.classList.add("sign-up-mode")

        } 
  return (
        
    <>
    {
      displayy?(<Otp/>):(
        <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
        <form  style={
          {color:"#4d84e2",
           maxWidth:"600px",
          }}
          onSubmit={handlesubmit}
          >
      
            <Typography variant="h4" style={{color:"#5a5a5a"}} textAlign="center">
             <strong>Sign Up</strong>
            </Typography>
            <TextField 
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  < PersonIcon/>
                </InputAdornment>
              ),
            }}
             className="TextField-with-border-radius" autoComplete="off" fullWidth onChange={getdata} name="firstname" margin="normal" type={'text'} variant="outlined" placeholder="First Name" value={inpval.firstname}/>
            { errors.firstname && <p className="error">{errors.firstname}</p>}

             <TextField 
             id="input-with-icon-textfield"
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   < PersonIcon/>
                 </InputAdornment>
               ),
             }}className="TextField-with-border-radius" fullWidth onChange={getdata} name="lastname" margin="normal" type={'text'} variant="outlined" placeholder="Last Name" value={inpval.lastname}/>
            {errors.lastname && <p className="error">{errors.lastname}</p>}

            <TextField 
             id="input-with-icon-textfield"
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   < EmailIcon/>
                 </InputAdornment>
               ),
             }}
             className="TextField-with-border-radius" fullWidth onChange={getdata} value={inpval.email} name="email" margin="normal" type={'email'} variant="outlined" placeholder="Email"/>
            {errors.email && <p className="error">{errors.email}</p>} 

            <TextField
             id="input-with-icon-textfield"
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   < LockIcon/>
                 </InputAdornment>
               ),
             }}
               className="TextField-with-border-radius" fullWidth onChange={getdata} value={inpval.password} name="password" margin="normal" type={'password'} variant="outlined" placeholder="Password"/>
            {errors.password && <p className="error">{errors.password}</p>}

            <TextField 
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  < PhoneIcon/>
                </InputAdornment>
              ),
            }}
             className="TextField-with-border-radius" fullWidth onChange={getdata} value={inpval.phone_number} name="phone_number" margin="normal" type={'phone_number'} variant="outlined" placeholder="Phone No."/>
            {errors.phone_number && <p className="error">{errors.phone_number}</p>}

            <FormControl  fullWidth margin="normal" >
                {/* <InputLabel id="demo-simple-select-label"  name="isveteran">Are You a Veteran?</InputLabel> */}
                <select
                  id="yesNoSelect"
                  textAlign="center"
                  justifyContent="center"
                  sx={{borderRadius:"30px"}}
                  value={vet}
                  label="isveteran"
                  onChange={handlevetchange}
                  name="isveteran"

                >
                  <option value="">Are you a veteran?</option>  
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {/* <button onClick={getvetval}>Check</button> */}
            </FormControl> 
        
            {/* {errors.isveteran && <p className="error">{errors.isveteran}</p>} */}
             
  

            <Button  className="btn" onClick={addData} onChange={resetstate} type="submit" variant="contained" sx={{borderRadius:"30px", marginTop:"5px"}}>
              Sign up
            </Button>
 
      </form>
        
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            
            <p style={{color:"black"}}>
              "For the veteran, thank you for bravely doing what you’re called to do so we can safely do what we’re free to do."
            </p>
            <h4>One of us ?</h4>
                <Link to='/Signin' 
                style={{textDecoration:"none"}}
                > <button className="btn transparent"   id="sign-in-btn"> Sign in</button>
                </Link> 
          </div>
          <img src={Soldierboy} className="image" alt="" />
        </div>
         
      </div>
    </div>
      )
    }
    
    </>
  
  
  )
}

export default Signup
