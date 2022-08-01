import React, { useEffect, useState } from "react";
import Footer from "../Sheard/Footer";
import LoginTopHeader from "../Sheard/LoginTopHeader";
import Menu from "../Sheard/Menu";
import { useNavigate } from "react-router-dom";
import { Base64 } from "js-base64";
import axios from "axios";

// All Extranal images
import img1 from "../images/img1.svg";
import img2 from "../images/img2.svg";
import img3 from "../images/img3.svg";

// Styling Extranal css
import "./registration.css";

const Login = () => {
  const registration = useNavigate();
  const forgotpassword = useNavigate();
  const homepage = useNavigate();
  const [userdata, setUserData] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alertmsg, setAlertmsg] = useState();

  const userAllData = () => {
    //Get Record - Detail View
    axios
      .get("https://investmentportal.herokuapp.com/getrecord")
      .then(function (data) {
        //console.log(data.data.data);
        setUserData(data.data.data);
        // localStorage.setItem("userinfo",JSON.stringify(data));
        // setVisiable(true);
      });
  };

  console.log(email);

  const userLogin = () => {
    if (userdata) {
      if (!email || !password) {
        //console.log("plz fill the all fields");
        setAlertmsg("plz fill the all fields");

        // Adding new Messages
        //message.warning("Please fill all the fields !");
      } else {
        for (let i = 0; i < userdata.length; i++) {
          const DecodePass = Base64.decode(userdata[i]?.Password);
          // console.log(userdata[i]?.Email)
          // console.log(userdata[i]?.Password)
          //console.log(DecodePass);
          if (userdata[i]?.Email === email && DecodePass === password) {
            if (userdata[i].UserStatus === "Approved") {
              localStorage.setItem(
                "userinfo",
                JSON.stringify({
                  id: userdata[i].ID,
                  name: userdata[i].Name.display_value,
                  email: userdata[i].Email,
                  userstatus: userdata[i].UserStatus,
                })
              );
              // console.log("");
              // message.success("Successfully login!");
              console.log("Successfully login!");
              registration("/home");
            } else if (userdata[i].UserStatus === "Pending") {
              //message.success("Your request is pending...");
              console.log("Your request is pending...");
            } else {
              //message.success("Please ask an admin to grant permission to this app.");
              console.log(
                "Please ask an admin to grant permission to this app."
              );
            }
          } else {
            setAlertmsg("");
            // setAlertmsg(<Alert message="Incorrect Email and Password" type="warning" showIcon closable />)

            //message.error("Incorrect Email and Password");
          }
        }
      }
    } else {
      // console.log("Server problem. User not found try after sometimes");
      // setAlertmsg("Server problem. User not found try after sometimes");
      //   message.success("Server problem. User not found try after sometimes!");
    }
  };

  const ForgotPassword = () => {
    forgotpassword("/forgotpassword");
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    if (userInfo) {
      homepage("/home");
    }
    userAllData();
  }, []);

  return (
    <div>
      <LoginTopHeader></LoginTopHeader>
      <div className="container">
        <div className=" row ">
          <h3 className="text-white text-start mt-5">
            {" "}
            Welcome to AMAL Trustees
          </h3>

          {/* Login section design  Start */}
          <div className="col-lg-8 col-md-8 col-sm-12 col-12 ">
            {" "}
            <section
              className="p-4 mt-4"
              style={{
                backgroundColor: "#00ADEE",
              }}
            >
              <h3 className="text-white text-start mb-3">Please sign in</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {" "}
                  <form>
                    <div class="form-group mt-2">
                      <input
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                        type="text"
                        class="form-control"
                        id="username"
                        aria-describedby="username"
                        placeholder="User Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="form-group mt-3">
                      <input
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                        type="password"
                        class="form-control"
                        id="password"
                        aria-describedby="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div class="form-group mt-3">
                      <button
                        //  style={{ float: "left", color: "#00ADEE" }}
                        type="button"
                        className="btn btn-primary mt-2 border-0"
                        onClick={userLogin}
                        id="registetionbutton"
                      >
                        Sign In
                      </button>
                    </div>

                    {/* test start  */}
                    <p style={{ marginTop: 5 }}>
                      <a
                        style={{ color: "white" }}
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Forget Password?
                      </a>
                    </p>
                    <div
                      className="collapse"
                      id="collapseExample"
                      style={{
                        marginLeft: 0,
                      }}
                    >
                      <div
                        className="card card-body"
                        style={{
                          backgroundColor: "#00ADEE",
                          border: 0,
                          color: "white",
                          marginTop: "-5px",
                        }}
                      >
                        In order to reset your password, please enter your email
                        address and we will send you a password reset link
                        shortly.
                        <div class="form-group mt-1">
                          <input
                            style={{
                              backgroundColor: "#00ADEE",
                              color: "white",
                            }}
                            type="text"
                            className="form-control"
                            id=""
                            aria-describedby="username"
                            placeholder="User Email"
                            required
                          />
                        </div>
                        <div class="form-group mt-1">
                          <button
                            //  style={{ float: "left", color: "#00ADEE" }}
                            type="submit"
                            className="btn btn-primary mt-2 border-0"
                            id="registetionbutton"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Test end  */}

                    {/* <div class="form-group mt-2">
                  
                  <a  style={{ float: "left", color: "white" }}> 
                    
                    Forget Your Password ?
                    </a> </div> */}
                  </form>
                  <div></div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-white text-start">
                  <h4> Don't have an account? </h4>

                  <div>
                    If you do not already have a User ID and password, please{" "}
                    {/* <a
                      onClick={() => registration("/register")}
                      className="text-white"
                    >
                      register now
                    </a> */}
                    <button
                    style={{ marginTop:5 }}
                      onClick={() => registration("/register")}
                      className="buttonreg"
                    >
                      Register your Details
                    </button>
                   <p style={{
                    marginTop:5,
                   }}> 
                        Once you have completed your registration, you may sign into
                    the website.
                   </p>
                
                  </div>

                  <div className="mt-3">
                    <h4> Contact Us</h4>
                    <span>
                      Email:{" "}
                      <a href=" " style={{ color: "white" }}>
                        {" "}
                        support@amalinvestorportal.com.au{" "}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </section>
            {/* Login section design  End  */}
            {/* Latest News Start */}
            <section
              className="mt-3 text-white text-start"
              style={{
                backgroundColor: "#232323",
                padding: 20,
              }}
            >
              <h3
                style={{
                  color: "#00ADEE",
                }}
              >
                Trustee Services
              </h3>

              <div
                className="row"
                style={{
                  padding: 10,
                }}
              >
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <img src={img1} alt="example" style={{ height: 33 }} />
                  <h4>Funds</h4>

                  <ul>
                    <li>Wholesale Trustee (including Custody).</li>
                    <li>Wholesale Trustee (including Custody).</li>
                  </ul>

                  <div>
                    Includes acting as trustee for credit, property, mortgage,
                    private equity and fixed interest funds.
                  </div>

                  <div class="form-group mt-3">
                    <button
                      style={{ backgroundColor: "white", color: "#00ADEE" }}
                      type="button"
                      className="btn btn-primary  mt-2 border-0"
                    >
                      Discover More
                    </button>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <img src={img3} alt="example" style={{ height: 33 }} />

                  <h4>Agency Services</h4>

                  <ul>
                    <li>Escrow Agent.</li>
                    <li>Paying Agent.</li>
                    <li>
                      Facility Agent and Security Trustee - Syndicated Debt
                      Facilities.
                    </li>
                  </ul>

                  <div>
                    Includes holding assets on trust, holding security on behalf
                    of lenders, managing syndicated facilities, maintaining bank
                    accounts and distributing funds.
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <img src={img2} alt="example" style={{ height: 33 }} />

                  <h3>Structured Finance</h3>
                  <ul>
                    <li>Trustee.</li>
                    <li>Security Trustee.</li>
                    <li>Trust Management.</li>
                    <li>Document Custodian.</li>
                    <li>Issuing and Paying Agent.</li>
                  </ul>

                  <div>
                    Includes securitisation programs for RMBS, CMBS, ABS,
                    corporate finance and trade receivables.
                  </div>
                </div>
              </div>
            </section>
            {/* Latest News End  */}
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <section
              className="mt-4 text-white text-start"
              style={{
                backgroundColor: "#232323",
                padding: 20,
                minHeight: 919,
              }}
            >
              <h3
                style={{
                  color: "#00ADEE",
                }}
              >
                For your Information
              </h3>
              <ul class="list-group mt-3">
                <li
                  class="list-group"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <div>
                    An Article 77 proceeding was recently filed relating to
                    certain GSR RMBS trusts. A Notice entitled "Notice of
                    proceeding re payment waterfalls on GSR RMBS Trusts" has
                    been posted in the Available Documents section of each
                    affected trust's website.
                    <hr />
                  </div>
                </li>
                <li
                  class="list-group"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <div>
                    An Article 77 proceeding was recently filed relating to
                    certain GSR RMBS trusts. A Notice entitled "Notice of
                    proceeding re payment waterfalls on GSR RMBS Trusts" has
                    been posted in the Available Documents section of each
                    affected trust's website.
                    <hr />
                  </div>
                </li>

                <li
                  class="list-group"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <div>
                    An Article 77 proceeding was recently filed relating to
                    certain GSR RMBS trusts. A Notice entitled "Notice of
                    proceeding re payment waterfalls on GSR RMBS Trusts" has
                    been posted in the Available Documents section of each
                    affected trust's website.
                    <hr />
                  </div>
                </li>

                <li
                  class="list-group"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <div>
                    An Article 77 proceeding was recently filed relating to
                    certain GSR RMBS trusts. A Notice entitled "Notice of
                    proceeding re payment waterfalls on GSR RMBS Trusts" has
                    been posted in the Available Documents section of each
                    affected trust's website.
                    <hr />
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Footer section Start */}
      <Footer></Footer>
      {/* Footer section End  */}
    </div>
  );
};

export default Login;
