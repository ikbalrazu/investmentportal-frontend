import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div
      className="mt-3"
      style={{
        backgroundColor: "#232323",
        width: "100% ",
        bottom:'0px !important',
      }}
    >
      <div className="container py-5">
        <div className="row d-flex align-items-center ">
          <div className="col-lg-4 col-md-4 col-12 col-sm-12">
            <div>
              <p className="text-white text-start">
                {" "}
                AMAL Trustees Pty Limited
              </p>
              <div
                className=" text-start"
                style={{
                  color: "#999999",
                }}
              >
                ABN 98 609 737 064 <br />
                Australian Financial Services Licence 483459 <br />
                Australian Credit Licence 483459 <br />
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-8 col-12 col-sm-12">
            <div className="text-white text-start ">Legal</div>

            <div
              class="d-flex flex-row"
              style={{
                color: "#999999",
              }}
            >
              <div class="p-2 ">
                <a className="text-decoration-none legal_btn" href="#">
                  {" "}
                  Terms of Use{" "}
                </a>
              </div>
              <div class="p-2 ">
                <a className="text-decoration-none legal_btn" href="#">
                  {" "}
                  Privacy Notice{" "}
                </a>
              </div>
              <div class="p-2 ">
                <a className="text-decoration-none legal_btn" href="#">
                  {" "}
                  Disclaimer{" "}
                </a>
              </div>

              <div class="p-2 ">
                <a className="text-decoration-none legal_btn" href="#">
                  {" "}
                  Cookie Policy{" "}
                </a>
              </div>
            </div>

            <div
              style={{
                color: "#999999",
              }}
            >
              <p className="text-start">
                © 2022 The Bank of New York Mellon Corporation. All Rights
                Reserved.
              </p>

              <div className="text-start text-justify">
                Products and services are provided by various subsidiaries of
                The Bank of New York Mellon Corporation. CUSIP identifiers have
                been provided by CUSIP Global Services, managed on behalf of the
                American Bankers Association by Standard & Poor's. The CUSIP
                Database, © 2022 American Bankers Association. "CUSIP" is a
                registered trademark of the American Bankers Association.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
