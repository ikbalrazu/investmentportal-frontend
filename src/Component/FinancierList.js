import React, { useState, useEffect } from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classes from "./home.module.css";

export default function IssuerList() {
  const location = useLocation();
  const monthlist = useNavigate();
  const [issuerlist, setIssuerList] = useState();
  const [issuername, setIssuerName] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const IssuerList = () => {
    setIssuerList(location?.state?.financier_list_filter);
    for (let i = 0; i < location?.state?.financier_list_filter?.length; i++) {
      setIssuerName(location.state.financier_list_filter[0].Financer);
    }
  };

  useEffect(() => {
    IssuerList();
    //console.log(location?.state.issuer_list_filter.length);
  }, []);
  return (
    <div>
      <TopHeader></TopHeader>
      <Menu></Menu>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            {/* Search Section Start */}
            <section>
              <div
                className=" mt-4"
                style={
                  {
                    // backgroundColor: "#232323",
                    // padding: 20,
                  }
                }
              >
                <h5 className="text-start py-1" style={{ color: "#00ADEE" }}>
                  Wellcome, {userInfo?.name}
                </h5>

                {/* <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control  border-0"
                    placeholder="Search..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append ">
                    <button
                      style={{
                        backgroundColor: "#00ADEE",
                      }}
                      class="btn btn-outline-secondary"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div> */}
              </div>
            </section>
            {/* Search Section End  */}

            {/* File Section tart  */}

            <section
              className="container mt-1"
              style={{
                backgroundColor: "#222222",
                padding: 25,
              }}
            >
              {/* <ul
                className="nav nav-pills mb-3 d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Issuser Name
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Deal Name
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Financer Name
                  </button>
                </li>
              </ul> */}
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active text-white"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <h3> List of Deals for {issuername} </h3>
                  <span>{issuerlist?.length}</span>

                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Deal Name</th>
                        <th scope="col">Financier Name</th>
                        <th scope="col">Product Type</th>
                        <th scope="col">Deal Administrator</th>
                        
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {issuerlist?.map((data, index) => {
                        return (
                          <tr
                            onClick={() =>
                              monthlist("/monthslist", {
                                state: data.ID,
                              })
                            }
                          >
                            <th scope="row"> {data?.DealName} </th>
                            <td>{data?.Financer}</td>
                            <td>{data?.DealType}</td>
                            <td>{data?.Deal_Administrator}</td>
                            
                            <td>
                              {" "}
                              <i className="bi bi-arrow-up-right-square">
                                {" "}
                              </i>{" "}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade text-white"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <h3> Deal Name </h3>
                  <span>4419 Search Results</span>
                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Deal Name</th>
                        <th scope="col">Issuer Name</th>
                        <th scope="col">Product</th>
                        <th scope="col">Contact</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"> Name of Deal </th>
                        <td>Name of Issuer </td>
                        <td>Other </td>
                        <td> Name Name </td>
                        <td>
                          {" "}
                          <i className="bi bi-arrow-up-right-square"> </i>{" "}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"> Name of Deal </th>
                        <td>Name of Issuer </td>
                        <td>Other </td>
                        <td> Name Name </td>
                        <td>
                          {" "}
                          <i className="bi bi-arrow-up-right-square"> </i>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>{" "}
                </div>
                <div
                  className="tab-pane fade text-white"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <h3> Financer Name </h3>
                  <span>4419 Search Results</span>

                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Financer Name</th>
                        <th scope="col">Issuer Name</th>
                        <th scope="col">Product</th>
                        <th scope="col">Contact</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"> Name of Financer </th>
                        <td>Name of Issuer </td>
                        <td>Other </td>
                        <td> Name Name </td>
                        <td>
                          {" "}
                          <i className="bi bi-arrow-up-right-square"> </i>{" "}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"> Name of Financer </th>
                        <td>Name of Issuer </td>
                        <td>Other </td>
                        <td> Name Name </td>
                        <td>
                          {" "}
                          <i className="bi bi-arrow-up-right-square"> </i>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* End table of All content  */}

                {/*
                <h1 style={{color:"white"}}>File Upload</h1>

               <form onSubmit={UploadFileHandler}>
              <input style={{color:"white"}} type="file" name="featuredImage" onChange={FileData}/>
              <label style={{color:"white"}}>Document ID </label>
              <input placeholder="Document id" id="id" onChange={(e)=>setDocumentName(e.target.value)}/>
              <br />
              <br />
              <button type="submit">Submit File</button>
              </form>

              <button onClick={AllDocuments}>Get Documents</button>
              <br/>
              <button onClick={AllDeals}>Get Deals</button> */}
              </div>
            </section>

            {/* File Section End  */}
          </div>

          {/* For Your Information Start  */}
          {/* <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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
          </div> */}

          {/*  For Your Information End  */}
        </div>
      </div>

      <Footer className={ classes.footer }
      ></Footer>
    </div>
  );
}
