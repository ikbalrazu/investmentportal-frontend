import React from "react";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import ConfirmSetUserPassword from "./ConfirmSetUserPassword";
import classes from "./home.module.css";

const General = () => {
  return (
    <div>
      <TopHeader />
      <Menu></Menu>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <h3 className="text-white text-start"> General </h3>
            {/* <p className="text-start text-white"> xxx </p> */}
          </div>

          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{
                      color: "#61dafb",
                      fontSize: 25,
                    }}
                  >
                    Personal Alerts
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-start text-white">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    &nbsp; Please email me when a new document has been uploaded
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                    style={{
                      color: "#61dafb",
                      fontSize: 25,
                    }}
                  >
                    Default & Personal Links
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-start text-white">
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                      }}
                    >
                      <li>
                        <i
                          style={{
                            paddingRight: 15,
                            color: "#00adee",
                          }}
                          class="bi bi-arrow-right-circle-fill"
                        ></i>
                        <a
                          className={classes.default_and_personal_link}
                          href="https://www.amal.com.au/trustee-services"
                        >
                          AMAL Trustee Services
                        </a>
                      </li>

                      <li>
                        <i
                          style={{
                            paddingRight: 15,
                            color: "#00adee",
                          }}
                          class="bi bi-arrow-right-circle-fill"
                        ></i>
                        <a
                          className={classes.default_and_personal_link}
                          href="https://www.amal.com.au/"
                        >
                          AMAL Asset Management
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                    style={{
                      color: "#61dafb",
                      fontSize: 25,
                    }}
                  >
                    User Profile
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-start text-white">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>First Name : </p>
                        <p>Email : </p>
                        <p> Company :</p>
                        <p> Role : </p>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>Last Name :</p>
                        <p> Phone : </p>
                        <p> Company Role : </p>
                        <p> Deals : </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                  style={{
                    color: "#61dafb",
                    fontSize:25

                  }}
                >
                  Chnage Password
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text-start text-white">
                  Details to go here
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
