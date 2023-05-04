import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import { padding } from '@mui/system';


const Footer = () => {
  return (
    <div className='footer' style={{backgroundColor:'black',marginBottom:'-16px'}}>
        <Container>
        <div >
        <Typography variant='h5' sx={{color: 'white'}} className>Useful Links</Typography>
        <Button variant="text" href="https://www.india.gov.in/" sx={{color: 'white'}}><KeyboardArrowRightIcon />Digital India Website</Button>
        <Button variant="text" href="https://www.india.gov.in/topics/defence" sx={{color: 'white'}}><KeyboardArrowRightIcon />Digital India Website</Button>
        <Button variant="text" href="https://www.meity.gov.in/" sx={{color: 'white'}}><KeyboardArrowRightIcon />Digital India Website</Button>
        <Button variant="text" href="https://digitalindia.gov.in/" sx={{color: 'white'}}><KeyboardArrowRightIcon />Digital India Website</Button>
        <Button variant="text" href="https://www.india.gov.in/topics/science-technology" sx={{color: 'white'}}><KeyboardArrowRightIcon />Digital India Website</Button>
        <Button variant="text" href="https://www.military.com/veteran-jobs" sx={{color: 'white'}}><KeyboardArrowRightIcon />Digital India Website</Button>
        <Typography variant='h5' sx={{color: 'white'}} className>Social Links</Typography>
        <div className='socialMedia'>
        <a href="https://www.instagram.com/mygovindia/"><InstagramIcon /></a>
        <a href="https://www.facebook.com/MyGovIndia/"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/company/government-of-india-official/?originalSubdomain=in"><LinkedInIcon /></a>
        <p> &copy; Government of India </p>
      </div>

        </div>
        </Container>
    </div>
  )
}

export default Footer