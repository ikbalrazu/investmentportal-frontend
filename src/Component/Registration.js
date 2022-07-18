import React from "react";

import './registration.css';


const Registration = () => {


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
                        placeholder="First Name "
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
                        placeholder="Last Name "
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
                        placeholder="Email "
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
                        Phone"
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
                      Select One{" "}
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
                      First Choice{" "}
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
                      Secound Choice
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
                      Third Choice{" "}
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
                        placeholder="Job Role"
                        style={{ backgroundColor: "#00ADEE", color: "white" }}
                      />
                    </div>
                  </div>


                  <div class="form-group mt-3">
                    <button
                      style={{ float: "left", color: "#00ADEE" }}
                      type="button"
                      className="btn btn-primary bg-white mt-2 border-0"
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
