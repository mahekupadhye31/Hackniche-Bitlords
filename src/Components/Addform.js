import React, { useState } from 'react'
import axios from 'axios';
import { Token } from '@mui/icons-material';
import { Box, TextField, Typography, Button, Container } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import UserIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import CreateIcon from '@mui/icons-material/Create';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PersonIcon from '@mui/icons-material/Person';

function Addform() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('');
    const [image, setImage] = useState('');

    let token = localStorage.getItem("Token");
    console.log(token)

    const handleSubmit = (event) => {
        event.preventDefault();
        //var axios = require('axios');
        var FormData = require('form-data');
        //var fs = require('fs');
        var data = new FormData();
        data.append('picture', (image));
        data.append('title', title);
        data.append('author', author);
        data.append('content', content);
        data.append('status', parseInt(1));

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/blog/bloglist/',
            headers: {
                'Authorization': 'Token ' + token,
                'Cookie': 'csrftoken=CL9F2B4Csic4i8aKWfSdfJKNSwoevUrQ; sessionid=4or759omow7gdv8nffx4pvl6y3bv2hkj',
                //...data.getHeaders()
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert("Added Successfully")
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className='addbody'>
        <Container sx={{minHeight:"93vh"}}>
        <div style={{alignItems:"center",
        justifyContent:"center"}}>

            <form style={
                {

                    color: "#4d84e2",
                    maxWidth: "600px",
                    maxHeight: "650px"
                }}
                onSubmit={handleSubmit}
            >

                <Typography variant="h4" style={{ color: "#5a5a5a" }} textAlign="center" >
                    <strong> Add </strong>
                </Typography>
                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                    className="TextField-with-border-radius" fullWidth value={title} onChange={(event) => setTitle(event.target.value)} margin="normal" type={'text'} variant="outlined" placeholder="Title:" />
                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                    className="TextField-with-border-radius" fullWidth margin="normal" value={author} onChange={(event) => setAuthor(event.target.value)} type={'email'} variant="outlined" placeholder="Email:" />
                <TextField
                    id="outlined-multiline-flexible"

                    multiline
                    maxRows={4}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < CreateIcon />
                            </InputAdornment>
                        ),
                    }}
                    className="TextField-with-border-radius" fullWidth value={content} onChange={(event) => setContent(event.target.value)} margin="normal" type={'text'} variant="outlined" placeholder="Description:" />

                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < FileCopyIcon />
                            </InputAdornment>
                        ),
                    }}
                    className="TextField-with-border-radius" fullWidth margin="normal" onChange={(event) => setImage(event.target.files[0])} type={'file'} variant="outlined" placeholder="Attach image here:" />

                <Button className="btn" type="submit" variant="contained" sx={{ borderRadius: "30px", marginTop: "5px" }}>
                    Submit
                </Button>

            </form>






        </div>
        </Container>
        </div>


    );
}

export default Addform
