import React from "react";
import LoginTopHeader from "../Sheard/LoginTopHeader";
import { useParams } from "react-router-dom";

const ResetPassword = () => {

    const {token} = useParams();

    return(
        <div className="container">
            <LoginTopHeader></LoginTopHeader>
            <p style={{color:"white"}}>reset password {token}</p>
            <div>
            <div class="form-group mt-1" style={{width:"50%"}}>
                          <input
                            style={{
                              backgroundColor: "#00ADEE",
                              color: "white",
                            }}
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
                            type="password"
                            className="form-control"
                            id=""
                            aria-describedby="username"
                            placeholder="Confirm New Password"
                            required
                            // onChange={(e)=>setResetEmail(e.target.value)}
                          />
            </div>
            </div>
            
        </div>
    )
}

export default ResetPassword;