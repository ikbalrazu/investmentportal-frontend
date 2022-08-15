import React, {useEffect, useState, useRef, useContext} from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import LoginTopHeader from "../Sheard/LoginTopHeader";
import './EmailOTPVerify.css';
import { AppContext } from "../context/Context";

const EmailOTPVerify = () => {
    const locatiion = useLocation();
    const dashboard = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const [randomotp,setRandomOtp] = useState();
    const [otp,setOtp] = useState();
    //const [dealsid,setDealsId] = useState([]);

    const {setDealsId,deals} = useContext(AppContext);

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
            //console.log(locatiion?.state?.Deals_Allowed_for_Access);

            

            localStorage.setItem(
                "userinfo",
                JSON.stringify({
                  id: locatiion?.state?.ID,
                  name: locatiion?.state?.Name.display_value,
                  email: locatiion?.state?.Email,
                  userstatus: locatiion?.state?.UserStatus,
                })
            );

            //localStorage.setItem("dealsinfo", JSON.stringify({deals: locatiion?.state?.Deals_Allowed_for_Access,}))

            for(let i=0; i<locatiion?.state?.Deals_Allowed_for_Access?.length; i++){
                //console.log(locatiion?.state?.Deals_Allowed_for_Access[i]?.ID);
                setDealsId(olddata =>[...olddata,locatiion?.state?.Deals_Allowed_for_Access[i]?.ID]);
            }

            dashboard("/home");
        }else{
            alertmsg.current.style.color = "red";
            setMSG("Please check your email again as the OTP you have entered is incorrect.");
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
    },[deals]);

    return(
        <div>
            <LoginTopHeader></LoginTopHeader>
            <h1 style={{color:"green"}}>We have sent your registered email a one time code, please check your email and enter in the code here that you receive.</h1>
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