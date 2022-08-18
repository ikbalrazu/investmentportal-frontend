import React from "react";
import LoginTopHeader from "../Sheard/LoginTopHeader";
import classes from "./EmailOtp.module.css";

import sucessimg from "../images/sucessimg.png";

const ConfirmSetUserPassword = () => {
  return (
    <div>
      <LoginTopHeader></LoginTopHeader>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-6 text-center">
            <div class="row">
              <div className="col-sm-12 mt-5 ">
                <div className="card text-white bg-dark ">
                  <div className="card-header text-center p-3">
                    <img src={sucessimg} alt="example" style={{ height: 60 }} />
                  </div>
                  <div class="card-body mt-2">
                    <div
                      class="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      Your password has been updated successfully !
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div>
                      <p className="text-white p-3">
                        You can able to &nbsp;
                        <a href="https://investmentportal.netlify.app">
                          <span className={classes.confirm_set_user_signin_btn}>
                            SignIn
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "3rem auto",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "white", margin: "10px" }}>
            Your password has been updated successfully.
          </h1>
        </div>
        <div>
          <p style={{ color: "white" }}>
            You can able to{" "}
            <a href="https://investmentportal.netlify.app">SignIn</a>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default ConfirmSetUserPassword;
