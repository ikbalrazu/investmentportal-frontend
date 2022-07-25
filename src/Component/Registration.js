import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import './registration.css';


const Registration = () => {
  const login = useNavigate();

  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompany] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [picture, setPicture] = useState();
  const [alertmsg, setAlertmsg] = useState();


  const UserRegistration = () => {
    
    if (!firstname || !lastname || !email || !password || !confirmpassword) {
      setAlertmsg("Plz fill up all fields!");
    } else if (password !== confirmpassword) {
      console.log("password not matched");
      setAlertmsg("password not matched!");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setAlertmsg("Invalid Email entered");
    } else if (password.length < 8) {
      setAlertmsg("Password is too short!");
    } else {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var today = new Date();
      var date =
        today.getDate() +
        "-" +
        monthNames[today.getMonth()] +
        "-" +
        today.getFullYear();
      axios
        .post("http://localhost:5000/addrecord", {
          firstname,
          lastname,
          email,
          password,
          date,
        })
        .then(function (data) {
          const userid = data.data.data.ID;
          console.log(data.data.message);
          // console.log(data.data.data.ID);
          if (data.data.message === "Data Added Successfully") {
            console.log(userid);
            setAlertmsg("Your registration created successfully!");
            axios.post("http://localhost:5000/createdeskticket",{
              firstname,
              lastname,
              email,
              userid,
            }).then(function(obj){
              //console.log(obj);
              login("/");
            })
          } else {
            setAlertmsg("Server error! plz try again after sometimes !");
          }
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className=" row">
          <h3 className="text-white text-start mt-5 mb-4">
            {" "}
            Welcome to AMAL Trustees
          </h3>

          {/* Registration all details start  */}

          <section
            className="col-lg-8 col-md-8 col-sm-12 col-12"
            style={{
              backgroundColor: "#00ADEE",
              padding: 20,
            }}
          >
            <div>
              <h2 className="text-white"> Register your details</h2>

              <p className="text-white">
                In order for our team to set up your account, could you please
                complete the following information.
              </p>
            </div>

            <div>
              <div className="row">
                {" "}
                <form>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      class="form-group mt-2"
                      style={{ width: "50%", padding: 5 }}
                    >
                      <input
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                        type="text"
                        class="form-control"
                        id="firstname"
                        aria-describedby="firstname"
                        placeholder="First Name* "
                      />
                    </div>
                    <div
                      class="form-group mt-2"
                      style={{ width: "50%", padding: 5 }}
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        aria-describedby="firstname"
                        placeholder="Last Name* "
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      class="form-group mt-2"
                      style={{ width: "50%", padding: 5 }}
                      
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        aria-describedby="email"
                        placeholder="Email* "
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                      />
                    </div>
                    <div
                      class="form-group mt-2"
                      style={{ width: "50%", padding: 5 }}
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        aria-describedby="phone"
                        placeholder="
                        Phone*"
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div
                      class="form-group mt-2"
                      style={{ width: "100%", padding: 5 }}
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="company"
                        aria-describedby="company*"
                        placeholder="Company"
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div
                      class="form-group mt-2"
                      style={{ width: "100%", padding: 5 }}
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="desls"
                        aria-describedby="deals*"
                        placeholder="Which deals do you require access to?* "
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                      />
                    </div>
                  </div>

                  

                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      class="form-group mt-2"
                      style={{ width: "50%", padding: 5 }}
                    >
                     
                     <select
                    name="productType"
                    id="productType"
                    style={{
                      width: "90%",
                      height: 40,
                      backgroundColor: "transparent",
                      color: "white",
                      
                    }}
                  >
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="volvo"
                    >
                      Company Role{" "}
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="saab"
                    >
                      Issuer{" "}
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="opel"
                      default
                    >
                      Financier
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="audi"
                    >
                      Investor{" "}
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="audi"
                    >
                      Other{" "}
                    </option>
                  </select>
                     
                    </div>

                    <div
                      class="form-group mt-2"
                      style={{ width: "50%", padding: 5 }}
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="jobrole"
                        aria-describedby="jobrole"
                        placeholder="Job Role*"
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                      />
                    </div>
                  </div>


                  <div class="form-group mt-3">
                    <button
                   //   style={{ float: "left", color: "#00ADEE" }}
                      type="button"
                      className="btn btn-primary  mt-2 border-0"
                      id='registetionbutton'
                    >
                      Submit
                    </button>
                  </div>


                </form>
              </div>
            </div>
          </section>

          {/* Registration all details end  */}
        </div>
      </div>
    </div>
  );
};

export default Registration;