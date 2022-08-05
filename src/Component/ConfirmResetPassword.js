import React from "react";
import LoginTopHeader from "../Sheard/LoginTopHeader";

const ConfirmResetPassword = () => {

    return(
        <div>
        <LoginTopHeader></LoginTopHeader>
        <div style={{margin:"3rem auto",alignItems:"center",display:"flex",flexDirection:"column"}}>
            <h1 style={{color:"white",margin:"10px"}}>Congratulations! Successfully Your Password Updated.</h1>
        </div>
        </div>
    )
}
export default ConfirmResetPassword;