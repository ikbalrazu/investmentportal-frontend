import React from "react";
import LoginTopHeader from "../Sheard/LoginTopHeader";

const ConfirmSetUserPassword = () => {

    return(
        <div>
        <LoginTopHeader></LoginTopHeader>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{margin:"3rem auto",alignItems:"center",display:"flex",flexDirection:"column"}}>
            <h1 style={{color:"white",margin:"10px"}}>Your password has been updated successfully.</h1>
        </div>
        <div>
            <p style={{color:"white"}}>You can able to <a href="https://investmentportal.netlify.app">SignIn</a></p>
        </div>
        </div>
        </div>
    )
}

export default ConfirmSetUserPassword;