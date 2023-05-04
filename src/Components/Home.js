import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@mui/material';
import axios from 'axios';
// import * as React from 'react';
import Griditem from './Griditem'
import Addform from './Addform';
import './App.css'

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [blog, setBlog] = useState([])

    const addBlog = () => {
        console.log("button clicked")
    }
    let token = localStorage.getItem("Token");
    console.log(token)



    const getblogdata = () => {
        //var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();

        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/blog/bloglist/',
            headers: {
                'Authorization': "Token " + token,
                'Cookie': 'csrftoken=CL9F2B4Csic4i8aKWfSdfJKNSwoevUrQ; sessionid=4or759omow7gdv8nffx4pvl6y3bv2hkj',
                //...data.getHeaders()
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                let articles = response.data;
                console.log(JSON.stringify(articles));
                // alert("Its done good")
                setBlog(articles)
            })
            .catch(function (error) {
                console.log(error);
                // alert("Noob backend")
            });

    }
    useEffect(
        () => {
            getblogdata();
        }, []
    )
    const [openn, setOpenn] = useState(false)
    const addform = () => {
        console.log("click")
        if (openn === false) {
            setOpenn(true)
        }
        else {
            setOpenn(false)
        }
    }

    return (
        <div className='homemain'>
            <div style={{justifyContent:"center"}}>
            <Button variant='outlined'  sx={{ borderRadius: "30px", marginTop: "5px",color:"black"}} onClick={addform}> Share Your Experience</Button>
            </div>
            
            {
                openn ? (<Addform />) : (
                    <div className='onepar'>
            <div className=" my-4 " >

                <div className="row">
                    {blog.map((element) => {
                        return <div className="col-md-4 mb-3" key={element.updated_on}>
                            <Griditem title={element.title ? element.title.slice(0, 45) : ""} author={element.author ? element.author.slice(0, 88) : ""} picture={element.picture} content={element.content} />
                        </div>
                    }
                    )}
                </div>

            </div>
            
            </div>
                )
            }
            
        </div>
    )
}

export default Home
