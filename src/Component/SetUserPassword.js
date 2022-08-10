import React, { useState } from "react";
import LoginTopHeader from "../Sheard/LoginTopHeader";
import axios from "axios";

const SetUserPassword = () => {
    const [password,setPassword] = useState();
    const [confirmpassword,setConfirmPassword] = useState();

    const id = "01622869685";
    const email = "iqbalraju123@gmail.com";

    const PasswordHandler = () => {
        axios.post("https://investmentportal.herokuapp.com/setuserpassword",{id,email}).then(function(data){
            console.log(data);
        })

    }

    return(
        <div>
            <LoginTopHeader></LoginTopHeader>
            <button onClick={PasswordHandler}>send link</button>
        </div>
    )
}

export default SetUserPassword;