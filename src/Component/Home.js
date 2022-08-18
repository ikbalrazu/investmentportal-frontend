import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import Pagination2 from "./Pagination2";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { AppState } from "../context/Context";
import { AppContext } from "../context/Context";

import "./registration.css";

import classes from "./home.module.css";

export default function Home() {
  const location = useLocation();
  const loginpage = useNavigate();
  const IssuerListPage = useNavigate();
  const FinancierListPage = useNavigate();
  const monthlist = useNavigate();
  const [userinfo, setUserInfo] = useState();
  const [dealsdata, setDealsData] = useState();
  // const [issuername, setIssuerName] = useState([]);
  // const [financername, setFinancerName] = useState([]);

  const [deals,setDeals] = useState([]);
  const [issuername, setIssuerName] = useState([]);
  const [financername, setFinancerName] = useState([]);
  const [loader,setLoader] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));


  const [unique_issuername, setUniqueIssuerName] = useState();
  const [unique_financiername, setUniqueFinancierName] = useState();
  const {  dealsid } = AppState();


  //sessionStorage.setItem('key', JSON.stringify({exp: new Date() + 5, data: data}));

  // const GetToken = () => {
  //   const token = sessionStorage.getItem('access_token');
  //   const tokenl = JSON.parse(token)
  //   //console.log(tokenl.data);
  //   // console.log(tokenl.exp);
  //   let expirationDate = new Date(tokenl.exp);
  //   //console.log(expirationDate);
  //   if(expirationDate > new Date()){
  //     console.log("not expire",tokenl.data);
  //     return tokenl.data;
  //   }else{
  //     console.log("expired");
  //     StoreToken();


  //   }
  // }

  // const StoreToken = async() => {
  //   //console.log(token?.data);
  //   var extratime =  new Date(new Date().getTime() + (60000 * 2));
  //   const accesstoken = await axios.post("http://localhost:5000/accesstokendealsbyid");
  //   //console.log(accesstoken.data);
  //   sessionStorage.setItem('access_token',JSON.stringify({exp: extratime,data: accesstoken.data}))
  //   return accesstoken.data;
  // }

  const GetDeals = async() =>{
    console.log(dealsid);
    try{
      setLoader(true);
      const id = userInfo?.id;
      const data = await axios.post("https://investmentportal.herokuapp.com/getrecordbyid",{id});
      console.log(data?.data?.data?.Deals_Allowed_for_Access?.length);
      for(let i=0; i<data?.data?.data?.Deals_Allowed_for_Access?.length; i++){
        const dealid = data?.data?.data?.Deals_Allowed_for_Access[i]?.ID;
        const res = await axios.post("https://investmentportal.herokuapp.com/getalldealsbyid",{dealid});
        setDeals(preData=>[...preData,res?.data?.data]);
        setIssuerName(preData=>[...preData,res?.data?.data?.Issuer_Name]);
        setFinancerName(preData=>[...preData,res?.data?.data?.Financer]);
        //console.log(res);
        setLoader(true);
      }
      // for(let i=0; i<dealsid?.length; i++){
      //   const dealid = dealsid[i];
      //   const res = await axios.post("https://investmentportal.herokuapp.com/getalldealsbyid",{dealid});
      //   setDeals(preData=>[...preData,res?.data?.data]);
      //   setIssuerName(preData=>[...preData,res?.data?.data?.Issuer_Name]);
      //   setFinancerName(preData=>[...preData,res?.data?.data?.Financer]);
      //   //console.log(res);
      //   setLoader(true);
      // }
      setLoader(false)
    }catch(error){
      console.log(error);
    }

  }

  useLayoutEffect(()=>{
    GetDeals();
  },[])

  useEffect(() => {
    //console.log("deals id",dealsid);
    //console.log(dealsid);
    // console.log(issuername);
    // console.log(financername);
    //const userInfo = JSON.parse(localStorage.getItem("userinfo"));
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

    //console.log(deals);
    const withoutDuplicates_issuername = [
      ...new Map(
        issuername?.map((item) => [JSON.stringify(item), item])
      ).values(),
    ];
    const withoutDuplicates_financiername = [
      ...new Map(
        financername?.map((item) => [JSON.stringify(item), item])
      ).values(),
    ];
    // console.log(withoutDuplicates_issuername);
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
  }, [deals, issuername, financername]);

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
                <h5
                  className="text-start py-1"
                  style={{
                    color: "white",
                    marginTop: "0px",
                    marginBottom: "16px",
                    fontSize: "2em",
                    lineHeight: "1em",
                    fontWeight: "300",
                  }}
                >
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
                <li
                  className="nav-item"
                  role="presentation"
                  style={{ backgroundColor: "#333" }}
                >
                  <button
                    className={`${classes.t} ${classes.tt} `}
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
                    className={`${classes.t} ${classes.tt} `}
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
                    className={`${classes.t} ${classes.tt} `}
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
                  <h3
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1.5em",
                      color: "#00adee",
                    }}
                  >
                    {" "}
                    Issuser Name{" "}
                  </h3>

                  <span
                    style={{
                      color: "#00adee",
                      fontSize: "85%",
                      lineHeight: "1.1em",
                    }}
                  >
                    {unique_issuername?.length} Search Results
                  </span>

                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Issuer Name
                        </th>
                        {/* <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Product Type
                        </th> */}
                        <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Deal Count
                        </th>
                      </tr>
                    </thead>
                    {loader === false &&(
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
                            {/* <td>Other </td> */}
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
                    )}

                    {loader === true &&(
                    <tbody>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    </tbody>
                    )}

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
                  <h3
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1.5em",
                      color: "#00adee",
                    }}
                  >
                    {" "}
                    Deal Name{" "}
                  </h3>
                  <span
                    style={{
                      color: "#00adee",
                      fontSize: "85%",
                      lineHeight: "1.1em",
                    }}
                  >
                    {deals?.length} Search Results
                  </span>
                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Deal Name
                        </th>
                        <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Issuer Name
                        </th>
                        <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Product Type
                        </th>
                        <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Deal Administrator
                        </th>
                        <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Last Update Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {deals?.map((data, index) => {
                        return (
                          <tr
                            onClick={() =>
                              monthlist("/monthslist", {
                                state: data.Documents,
                              })
                            }
                          >
                            <th scope="row"> {data?.DealName} </th>
                            <td>{data?.Issuer_Name} </td>
                            <td>{data?.DealType} </td>
                            <td> Name Name </td>
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
                  </table>{" "}
                </div>
                <div
                  className="tab-pane fade text-white"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <h3
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1.5em",
                      color: "#00adee",
                    }}
                  >
                    {" "}
                    Financer Name{" "}
                  </h3>
                  <span
                    style={{
                      color: "#00adee",
                      fontSize: "85%",
                      lineHeight: "1.1em",
                    }}
                  >
                    {unique_financiername?.length} Search Results
                  </span>

                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Financer Name
                        </th>
                        <th
                          scope="col"
                          style={{ color: "#00adee", fontSize: "1em" }}
                        >
                          Deal Count
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {unique_financiername?.map((data, index) => {
                        var financier_list_filter = deals?.filter(function (
                          el
                        ) {
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
