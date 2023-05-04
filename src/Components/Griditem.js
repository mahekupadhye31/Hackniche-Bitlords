import { Button } from '@mui/material'
import React from 'react'
import axios from 'axios'

function Griditem(props) {
    let imgurl = "http://127.0.0.1:8000"
    let token = localStorage.getItem("Token");
    console.log(token)

    const deletee=(title)=>{
        console.log("you clicked deleted")
       // var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();

var config = {
  method: 'delete',
maxBodyLength: Infinity,
  url: `http://127.0.0.1:8000/blog/blogdetail/${title}/`,
  headers: { 
    'Authorization': 'Token '+token, 
    'Cookie': 'csrftoken=CL9F2B4Csic4i8aKWfSdfJKNSwoevUrQ; sessionid=4or759omow7gdv8nffx4pvl6y3bv2hkj', 
    //...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  alert("It is deleted")
})
.catch(function (error) {
  console.log(error);
  alert("Not deleted ERROR")
});

    }
    
  return (

       <div>
        <div className="card sm-3 my-4" style={{width:"400px",height:"525px"}}>
          <img
            src={imgurl+props.picture}
            className="card-img-top"
            alt="..."
            height="250px"
            width="150px"
          />
          <div className="card-body">
            <h5 className="card-title">
              {props.title}{" "}
              {/* <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
                {props.content}
              </span> */}
            </h5>
            <p className="card-text">{props.content}</p>
            <p className="card-text">
              <small className="text-muted">
                Uploaded by: {props.author ? props.author : "Unknown"}
                {/* {new Date(props.updated_on).toGMTString()} */}
              </small>
            </p>
            {/* <a href={props.newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a> */}
            <br/>
            <Button onClick={()=>deletee(props.title)}>Delete</Button>
          </div>
        </div>
      </div>
      
  )
}

export default Griditem