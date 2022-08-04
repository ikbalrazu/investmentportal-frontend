import React,{useEffect, useState} from "react";
import LoginTopHeader from "../Sheard/LoginTopHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ResetPassword.css';

const ResetPassword = () => {
  const [password,setPassword] = useState();
  const [confirmpassword,setConfirmPassword] = useState();
  const [expire, setExpire] = useState();
    const {token} = useParams();

    const ResetPassword = () => {
      if(!password || !confirmpassword){
        console.log("Plz fill up all fields!");
      }else if (password !== confirmpassword) {
        console.log("password not matched!");
      }else if (password.length < 8) {
        console.log("Password is too short!");
      }else{
        axios.post("http://localhost:5000/verifyForgotMail",{token}).then(function(data){
          console.log(data);
          // if(data.data.message === "Data Updated Successfully"){
            
          // }else{
          //   console.log("something wrong! try again later");
          // }
        })
      }
    }

    useEffect(()=>{
      const CheckValidLink = async()=>{
        try{
          const {data} = await axios.post("http://localhost:5000/verifyForgotMail",{token})
          console.log(data?.result);
          if(data?.result === "Link expired"){
            setExpire(true);
          }else{
            setExpire(false);
          }
        }catch(error){
          console.log(error);
        }
      }
      CheckValidLink();
    },[token]);

    return(
        <div className="container">
            <LoginTopHeader></LoginTopHeader>
            <div className="form-content">
              {expire === false &&(
                <>
                <p style={{color:"white",backgroundColor:"blue"}}>Your link will be expire after five minutes from the create.</p>
                <div className="form-group mt-1" style={{width:"50%"}}>
                <input
                  style={{
                    backgroundColor: "#00ADEE",
                    color: "white",
                  }}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id=""
                  aria-describedby="username"
                  placeholder="New Password"
                  required
                  // onChange={(e)=>setResetEmail(e.target.value)}
                />
               </div>
              <div class="form-group mt-1" style={{width:"50%"}}>
                            <input
                              style={{
                                backgroundColor: "#00ADEE",
                                color: "white",
                              }}
                              onChange={(e)=>setConfirmPassword(e.target.value)}
                              type="password"
                              className="form-control"
                              id=""
                              aria-describedby="username"
                              placeholder="Confirm New Password"
                              required
                              // onChange={(e)=>setResetEmail(e.target.value)}
                            />
              </div>
              <div style={{alignItems:"center",marginTop:"10px"}}>
              <button className="resetbtn" onClick={ResetPassword}>Reset Password</button>
              </div>
              </>
              )}

              {expire === true &&(
                <>
                <div className="form-group mt-1" style={{width:"50%"}}>
                <h1 className="expiredlink">Link Expired. Plz try again!</h1>
              </div>
              </>
              )}
            
            
            
            </div>
            
        </div>
    )
}

export default ResetPassword;