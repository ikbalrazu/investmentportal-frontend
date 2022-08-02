import React, { useState, useEffect, useContext } from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import Pagination2 from "./Pagination2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppState } from "../context/Context";
import { AppContext } from "../context/Context";

import "./registration.css";

import classes from "./home.module.css";

export default function Home() {
  const loginpage = useNavigate();
  const IssuerListPage = useNavigate();
  const FinancierListPage = useNavigate();
  const monthlist = useNavigate();
  const [userinfo, setUserInfo] = useState();
  const [dealsdata, setDealsData] = useState();
  // const [issuername, setIssuerName] = useState([]);
  // const [financername, setFinancerName] = useState([]);
  const [unique_issuername, setUniqueIssuerName] = useState();
  const [unique_financiername, setUniqueFinancierName] = useState();
  const { deals, issuername, financername } = useContext(AppContext);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    if (!userInfo) {
      loginpage("/");
    }

    if (userInfo) {
      //console.log(userInfo.id, userInfo.name, userInfo.email);
      setUserInfo({
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
      });
    } else {
      loginpage("/");
    }

    console.log(deals);
    const withoutDuplicates_issuername = [
      ...new Map(
        issuername.map((item) => [JSON.stringify(item), item])
      ).values(),
    ];
    const withoutDuplicates_financiername = [
      ...new Map(
        financername.map((item) => [JSON.stringify(item), item])
      ).values(),
    ];
    console.log(withoutDuplicates_issuername);
    setUniqueIssuerName(withoutDuplicates_issuername);
    setUniqueFinancierName(withoutDuplicates_financiername);
    // const DealsData = async () => {
    //   try{
    //     const data = await axios.post("https://investmentportal.herokuapp.com/getalldeals");
    //     setDealsData(data.data.data);
    //     for(let i=0; i<data.data.data.length; i++){
    //       console.log(data.data.data[i].Issuer_Name);
    //       setIssuerName(preData=>[...preData,data.data.data[i].Issuer_Name]);
    //       setFinancerName(preData=>[...preData,data.data.data[i].Financer]);
    //       console.log(data.data.data[i].Financer);
    //     }
    //     return data.data.data;

    //   }catch(error){
    //     console.log(error);
    //   }

    // }

    // DealsData().then(data=>{
    //   //const withoutDuplicates_issuername = [...new Set(issuername)]; //0, 1
    //   const withoutDuplicates_issuername = [...new Map(issuername?.map(item => [JSON.stringify(item), item])).values()];
    //   console.log(data);
    //   for(let k=0; k<withoutDuplicates_issuername?.length; k++){
    //     console.log(withoutDuplicates_issuername[k]);
    //   }
    // }).catch(console.error);
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
                <h5 className="text-start py-1" style={{ color: "white", marginTop:"0px", marginBottom:"16px", fontSize:"2em", lineHeight:"1em", fontWeight:"300" }}>
                  Welcome, {userinfo?.name}
                </h5>

                <div class="input-group mb-3">
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
                    {/* <button onClick={()=>console.log(unique_issuername)}>show data</button> */}
                  </div>
                </div>
              </div>
            </section>
            {/* Search Section End  */}

            {/* File Section tart  */}

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
                style={{
                  padding: 15,
                }}
              >
                <li className="nav-item" role="presentation" style={{backgroundColor:"#333"}}>
                  <button
                    className={classes.btn}
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    style={{
                      backgroundColor:'#333'
                    }}
                  >
                  Issuser Name
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={classes.btn}
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    style={{
                      backgroundColor:'#333'
                    }}
                  >
                    Deal Name
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={classes.btn}
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    style={{
                      backgroundColor:'#333'
                    }}
                  >
                    Financer Name
                  </button>
                </li>
              </ul>
              <div
                // style={{
                //   backgroundColor: "#232323",
                //   padding: 25,
                // }}
                className="tab-content"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade show active text-white"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  style={{
                    padding: "0px 50px 50px 0px",
                  }}
                >
                  <h3 style={{fontFamily:"Roboto, sans-serif",fontSize:"1.5em",color:"#00adee"}}> Issuser Name </h3>

                  <span style={{color:"#00adee",fontSize:"85%",lineHeight:"1.1em"}}>{unique_issuername?.length} Search Results</span>

                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th scope="col" style={{color:"#00adee",fontSize:"1em"}}>Issuer Name</th>
                        <th scope="col" style={{color:"#00adee",fontSize:"1em"}}>Product Type</th>
                        <th scope="col" style={{color:"#00adee",fontSize:"1em"}}>Deal Count</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {unique_issuername?.map((data, index) => {
                        var issuer_list_filter = deals?.filter(function (el) {
                          return el.Issuer_Name === unique_issuername[index];
                        });
                        return (
                          <tr
                            onClick={() => {
                              console.log(issuer_list_filter);
                              IssuerListPage("/issuerlist", {
                                state: { issuer_list_filter },
                              });
                            }}
                          >
                            <th scope="row" style={{ cursor: "pointer" }}>
                              {" "}
                              {data}{" "}
                            </th>
                            <td>Other </td>
                            <td>{issuer_list_filter?.length}</td>
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
                  <Pagination2></Pagination2>
                </div>
                <div
                  className="tab-pane fade text-white"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  style={{
                    padding: "0px 50px 50px 0px",
                  }}
                >
                  <h3 style={{fontFamily:"Roboto, sans-serif",fontSize:"1.5em",color:"#00adee"}}> Deal Name </h3>
                  <span>{deals?.length} Search Results</span>
                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Deal Name</th>
                        <th scope="col">Issuer Name</th>
                        <th scope="col">Product Type</th>
                        <th scope="col">Deal Administrator</th>
                        <th scope="col">Last Update Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deals?.map((data,index)=>{
                        return(
                          <tr
                          onClick={() =>
                            monthlist("/monthslist", {
                              state: data.Documents,
                            })
                          }
                          >
                          <th scope="row"> {data?.DealName} </th>
                          <td>{data?.Issuer_Name} </td>
                          <td>Other </td>
                          <td> Name Name </td>
                          <td>
                            {" "}
                            <i className="bi bi-arrow-up-right-square"> </i>{" "}
                          </td>
                          </tr>
                        )
                      })}
                      
                    </tbody>
                  </table>{" "}
                </div>
                <div
                  className="tab-pane fade text-white"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <h3 style={{fontFamily:"Roboto, sans-serif",fontSize:"1.5em",color:"#00adee"}}> Financer Name </h3>
                  <span>{unique_financiername?.length} Search Results</span>

                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Financer Name</th>
                        <th scope="col">Deal Count</th>
                      </tr>
                    </thead>
                    <tbody>
                    {unique_financiername?.map((data, index) => {
                        var financier_list_filter = deals?.filter(function (el) {
                          return el.Financer === unique_financiername[index];
                        });
                        return (
                          <tr
                            onClick={() => {
                              console.log(financier_list_filter);
                              FinancierListPage("/financierlist", {
                                state: { financier_list_filter },
                              });
                            }}
                          >
                            <th scope="row" style={{ cursor: "pointer" }}>
                              {" "}
                              {data}{" "}
                            </th>
                            <td>{financier_list_filter?.length}</td>
                            {/* <td>
                              {" "}
                              <i className="bi bi-arrow-up-right-square">
                                {" "}
                              </i>{" "}
                            </td> */}
                          </tr>
                        );
                      })}
                      {/* <tr>
                        <th scope="row"> Name of Financer </th>
                        <td>Name of Issuer </td>
                        <td>Other </td>
                        <td> Name Name </td>
                        <td>
                          {" "}
                          <i className="bi bi-arrow-up-right-square"> </i>{" "}
                        </td>
                      </tr> */}
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
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
