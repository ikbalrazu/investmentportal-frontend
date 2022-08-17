import React from "react";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";

const General = () => {


    return(
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
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{
                    color: "#61dafb",
                    fontSize:25
                  }}
                >
                  Personal Alerts
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text-start text-white">
                  Details to go here
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{
                    color: "#61dafb",
                    fontSize:25

                  }}
                >
                  Default & Personal Links
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text-start text-white">
                  Details to go here
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={{
                    color: "#61dafb",
                    fontSize:25

                  }}
                >
                  User Profile
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text-start text-white">
                  Details to go here
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
    )
}

export default General;