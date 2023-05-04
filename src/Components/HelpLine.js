import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Support1 from './123.jpeg'
import Therapy from './456.jpeg'
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';


function Helpline() {
  return (
    <div style={{paddingLeft: "20px"}}>
    <div>
        <h1 style={{textAlign:"center",color:"#293F66",marginTop:"20px"}}>24/7 confidential crisis support  <CallIcon sx={{color:"black",fontSize:45}} /></h1>
        <h6 style={{textAlign:"center",color:"#A62E24"}}>for Veterans and their Loved Ones</h6>
        <div style={{textAlign:"center"}}>
        <span style={{color:"blue"}} > Call here +91 954721369</span> 
        </div>
        </div>
    <div className=" marketing" style={{marginTop:"80px",marginRight:"25px",}}>
    <div className="row my-10">
      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-img rounded-circle mb-4" width="140" height="140" xmlns= role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <AccessAlarmsIcon sx={{color:"#266BC3",fontSize:120}}/>
        <h2 className="fw-normal">24/7 Support</h2>
        <p>Access free, confidential support 24/7, 365 days a year.</p>
        
      </div>
      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-img rounded-circle  mb-4" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <LiveHelpIcon sx={{color:"#2F6C12",fontSize:120}}/>
        <h2 className="fw-normal">Live Connection</h2>
        <p>Connect with a real person qualified to support Veterans.</p>
        
      </div>
      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-img rounded-circle  mb-4" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <Diversity1Icon sx={{color:"black",fontSize:120}}/>
        <h2 className="fw-normal">Serves Veterans, Their Families, and Friends</h2>
        <p>The Veterans Crisis Line serves Veterans, service members, National Guard and Reserve members, and those who support them.</p>
     
      </div>
      <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1" style={{color:"#293F66"}}>Are you a Veteran in crisis or concerned about one? <span className="text-muted">This is the right place for you.</span></h2>
        <p className="lead">You're not alone—the Veterans Crisis Line is here for you. You don't have to be enrolled in VA benefits or health care to call.</p>
      </div>
      <div className="col-md-5">
        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
        <img src={Support1} alt="no image here" style={{width:500,height:350}}/>
      </div>
    </div>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1" style={{color:"#293F66",marginTop:"10px"}}> How it works? <span className="text-muted">See for yourself. <CrisisAlertIcon sx={{color:"red"}}/></span></h2>
        <p className="lead">
            <ul>
                <li>Available 24/7: Dial 988 then Press 1, chat live, or text 838255. </li>
                <li>A caring, qualified responder will listen and help.</li>
                <li>Your call is free and confidential, and you decide how much information to share.</li>
                <li>Support doesn't end with your conversation. Our responders connect you with resources that can help when you're in distress.</li>
            </ul>
        </p>
      </div>
      <div className="col-md-5 order-md-1">
      <img src={Therapy} alt="no image here" style={{width:500,height:450}}/>
      </div>
    </div>

    <hr className="featurette-divider"/>
  </div>
    </div>
    </div>

  )
}

export default Helpline