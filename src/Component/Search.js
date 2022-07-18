import React, { useState,useEffect } from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import Pagination2 from "./Pagination2";
import "./search.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const detailspage = useNavigate();
  const [dealsdata,setDealsData] = useState();
  const [documentdata, setDocumentData] = useState();

  const AllDeals = () =>{
    axios.post("https://investmentportal.herokuapp.com/getalldeals").then(function(data){
      console.log(data.data.data);
      setDealsData(data.data.data);
      //console.log(data.data.data[0].Documents);
      setDocumentData(data.data.data);
    })
  }

  const ShowData = () =>{
    console.log("deals data: ",dealsdata);
  }

  useEffect(()=>{
    AllDeals();
  },[]);



  return (
    <div>
      <TopHeader></TopHeader>
      <Menu></Menu>
      {/* Basic Search Section Start */}
      <section className="container">
        <div
          className="py-5 mt-4"
          style={{
            backgroundColor: "#232323 !important",
            padding: 20,
          }}
        >
          <h5 className="text-start py-1" style={{ color: "#00ADEE" }}>
            {" "}
            Search{" "}
          </h5>

          <div className="d-flex justify-content-between align-items-center">
            <div class="input-group ">
              <input
                type="text"
                className="form-control "
                placeholder="Search..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #00ADEE",
                }}
              />
              <div className="input-group-append ">
                <button
                  style={{
                    backgroundColor: "#00ADEE",
                    height: 53,
                    color: "black ",
                  }}
                  class="btn btn-outline-secondary text-dark"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
            <div>
              <div class="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#advanceSearch"
                  style={{
                    fontSize: 20,
                    height: 53,
                    backgroundColor: "#00adee",
                  }}
                ></button>
                {/* </h2> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Search Section End */}

      {/* Advance Search Section Start */}
      <section
        className="mt-3 container"
        style={{
          backgroundColor: "#333333",
        }}
      >
        <div class="mt-3">
          <div class="collapse " id="advanceSearch">
            <div
              class="card card-body border-0"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <h6 className="text-white"> Advanced Search Options</h6>

              <div class="row">
                <div class="col-md-4">
                  <h6 className="font-weight-bold text-white">
                    {" "}
                    Product Type{" "}
                  </h6>
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

                <div class="col-md-4">
                  {" "}
                  <h6 className="font-weight-bold text-white"> Search By</h6>
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

                <div class="col-md-4">
                  <h6 className="font-weight-bold text-white">
                    {" "}
                    Quick Issuer Lookup
                  </h6>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advance Search Section End  */}

      {/* Start table of All content  */}
      {/* <button onClick={AllDeals}>Get all deals</button>
      <button onClick={ShowData}>Show data</button> */}
      <section
        className="container mt-5"
        style={{
          backgroundColor: "#222222",
          padding: 25,
        }}
      >
        <ul
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
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active text-white"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{
              padding : '0px 50px 50px 0px'

            }}
          >
            <h3> Issuser Name </h3>
            <span>{dealsdata?.length} Search Results</span>

            <table className="table text-white mt-3">
              <thead>
                <tr>
                  <th scope="col">Issuer Name</th>
                  <th scope="col">Product Title</th>
                  <th scope="col">Count</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dealsdata?.map((data,index)=>(
                  
                  <tr onClick={()=>detailspage("/details",{state:data.Documents})} >
                  <th scope="row" style={{cursor:"pointer"}}> {data.Issuer_Name} </th>
                  <td>Other </td>
                  <td>1</td>
                  <td>
                    {" "}
                    <i className="bi bi-arrow-up-right-square"> </i>{" "}
                  </td>
                  </tr>
                  
                  
                ))}
                
                
              </tbody>
            </table>
            <Pagination2></Pagination2>
          </div>
          <div
            className="tab-pane fade text-white"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            style={{
              padding : '0px 50px 50px 0px'

            }}
          >
            <h3> Deal Name </h3>
            <span>{dealsdata?.length} Search Results</span>
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
              {dealsdata?.map((data,index)=>(
                <tr>
                <th scope="row"> {data.DealName} </th>
                <td>{data.Issuer_Name} </td>
                <td>Other </td>
                <td> {data.ContactId.display_value} </td>
                <td>
                  {" "}
                  <i className="bi bi-arrow-up-right-square"> </i>{" "}
                </td>
                </tr>
              ))}
                
              </tbody>
            </table>{" "}
            <Pagination2></Pagination2>

          </div>
          <div
            className="tab-pane fade text-white"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            style={{
              padding : '0px 50px 50px 0px'

            }}
          >
            <h3> Financer Name </h3>
            <span>{dealsdata?.length} Search Results</span>

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
                {dealsdata?.map((data,index)=>(
                  <tr>
                  <th scope="row"> {data.Financer} </th>
                  <td>{data.Issuer_Name}</td>
                  <td>Other </td>
                  <td> {data.ContactId.display_value} </td>
                  <td>
                    {" "}
                    <i className="bi bi-arrow-up-right-square"> </i>{" "}
                  </td>
                  </tr>
                ))}
                
              </tbody>
            </table>
        <Pagination2></Pagination2>

            {/* Pagination Start  */}

            {/* Pagination End  */}
          </div>
        </div>
      </section>

      {/* End table of All content  */}
    </div>
  );
};

export default Search;
