import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import LoginTopHeader from "../Sheard/LoginTopHeader";

const EmailOTPVerify = () => {
    const locatiion = useLocation();
    const dashboard = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const [randomotp,setRandomOtp] = useState();
    const [otp,setOtp] = useState();

    const verifyPin = () => {
        // console.log(typeof(randomotp));
        // console.log(typeof(otp));
        if(otp === randomotp.toString()){
            console.log("two factor authentication successfully done");
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
            console.log("Otp is not match! Failed - Try again");
        }
    }

    useEffect(()=>{
        //console.log(locatiion?.state?.Email);
        const email = locatiion?.state?.Email;
        const otpPin = Math.floor(1000 + Math.random() * 9000);
        setRandomOtp(otpPin);
        //console.log(otpPin);
        axios.post("http://localhost:5000/sendOTPVerificationEmail",{email,otpPin}).then(function(data){
            console.log(data?.data?.message);
        })
    },[]);

    return(
        <div>
            <LoginTopHeader></LoginTopHeader>
            <h1 style={{color:"green"}}>Verify your email otp..... Check your email. We have send otp for verification</h1>
            <input type="text" onChange={(e)=>setOtp(e.target.value)} placeholder='Enter pin'/>
            <button onClick={verifyPin}>Verify</button>
        </div>
    )
}
export default EmailOTPVerify;