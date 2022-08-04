import React, {useEffect, useState, useRef} from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import LoginTopHeader from "../Sheard/LoginTopHeader";
import './EmailOTPVerify.css';

const EmailOTPVerify = () => {
    const locatiion = useLocation();
    const dashboard = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const [randomotp,setRandomOtp] = useState();
    const [otp,setOtp] = useState();

    const alertmsg = useRef();
    const [msg, setMSG] = useState();

    const verifyPin = () => {
        // console.log(typeof(randomotp));
        // console.log(typeof(otp));
        if(!otp){
            alertmsg.current.style.color = "red";
            setMSG("Plz enter otp!");
        }


        if(otp === randomotp.toString()){
            //console.log("two factor authentication successfully done");
            localStorage.setItem(
                "userinfo",
                JSON.stringify({
                  id: locatiion?.state?.ID,
                  name: locatiion?.state?.Name.display_value,
                  email: locatiion?.state?.Email,
                  userstatus: locatiion?.state?.UserStatus,
                })
            );
            dashboard("/home");
        }else{
            alertmsg.current.style.color = "red";
            setMSG("Your entered otp is not correct!");
        }
    }

    const sendEmail = () => {
        const email = locatiion?.state?.Email;
        const otpPin = Math.floor(1000 + Math.random() * 9000);
        setRandomOtp(otpPin);
        axios.post("https://investmentportal.herokuapp.com/sendOTPVerificationEmail",{email,otpPin}).then(function(data){
            console.log(data?.data?.message);
            alertmsg.current.style.color = "green";
            setMSG("Plz check your email! We resend otp.");
        })
    }


    useEffect(()=>{
        const email = locatiion?.state?.Email;
        const otpPin = Math.floor(1000 + Math.random() * 9000);
        setRandomOtp(otpPin);
        axios.post("https://investmentportal.herokuapp.com/sendOTPVerificationEmail",{email,otpPin}).then(function(data){
            console.log(data?.data?.message);
        })
    },[]);

    return(
        <div>
            <LoginTopHeader></LoginTopHeader>
            <h1 style={{color:"green"}}>Verify your email otp..... Check your email. We have send otp for verification</h1>
            <div className="content">
                <div>
                <input className="otpinput" type="text" onChange={(e)=>setOtp(e.target.value)} placeholder='Enter pin'/>
                <button className="resendbtn" onClick={sendEmail}>Resend</button>
                </div>
            
            <button className="verifybtn" onClick={verifyPin}>Verify</button>
            <p ref={alertmsg}>{msg}</p>
            </div>
            
        </div>
    )
}
export default EmailOTPVerify;