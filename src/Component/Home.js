import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import Pagination2 from "./Pagination2";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { AppState } from "../context/Context";
import { AppContext } from "../context/Context";
import GlobalData from "./GlobalData";
import IssuserName from "./home/IssuserName";
import DealName from "./home/DealName";
import FinancerName from "./home/FinancerName";

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

  const [deals, setDeals] = useState([]);
  //const [dealid,setDealsid] = useState([]);
  const [issuername, setIssuerName] = useState([]);
  const [financername, setFinancerName] = useState([]);
  const [loader, setLoader] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const [unique_issuername, setUniqueIssuerName] = useState();
  const [unique_financiername, setUniqueFinancierName] = useState();

  // New State
  const [issuerList, setIssuerList] = useState([]);
  const [finiceList, setFininceList] = useState([]);


  const GetDeals2 = async () => {
    const id = userInfo?.id;
    let dealid = [];
    try {
      const data = await axios.post(
        "/getrecordbyid",
        { id }
      );

      //console.log(data?.data?.data?.Deals_Allowed_for_Access?.length);
      for (
        let p = 0;
        p < data?.data?.data?.Deals_Allowed_for_Access?.length;
        p++
      ) {
        //setDealsid(preData=>[...preData,data?.data?.data?.Deals_Allowed_for_Access[p].ID]);
        dealid.push(data?.data?.data?.Deals_Allowed_for_Access[p].ID);
        //console.log(data?.data?.data?.Deals_Allowed_for_Access[p].ID);
      }

      const data2 = await axios.post(
        "/dealswithuserid",
        { dealid }
      );

      //console.log("data 2 ", data2?.data?.data);

      let issuerArry = [];
      let issuerAllArry = [];

      let finaceArray = [];
      let finaceAllArray = [];

      data2?.data?.data.map((list) => {
        if (issuerArry.filter((e) => e.name === list.Issuer_Name).length < 1) {
          issuerArry.push({ name: list.Issuer_Name,count: 1, data:list });

        }
        if (issuerArry.filter((e) => e.name === list.Financer).length < 1) {
          finaceArray.push({ name: list.Financer, count: 1, data:list });
        }
        issuerAllArry.push({ name: list.Issuer_Name, count: 1 , data:list});
        finaceAllArray.push({ name: list.Financer, count: 1, data:list });
      });
      issuerArry.map((list) => {
        var filtered = issuerAllArry.filter(function (d) {
          return d.name === list.name;
        });
        // console.log(list, "+++");
        list.count = filtered.length;
        list.data = filtered;
      });
      // console.log("finaceArray", finaceArray);
      // console.log("finaceAllArray", finaceAllArray);

      // Finace array
      finaceArray.map((list) => {
        var filtered = finaceAllArray.filter(function (d) {
          return d.name === list.name;
        });
        // console.log(list, "+++");
        list.count = filtered.length;
        list.data = filtered;
      });

      setFininceList(finaceArray);
      //console.log(finaceArray);

      setIssuerList(issuerArry);
      //console.log(issuerArry);

      // Finace

      //console.log(data2);
      for (let l = 0; l < data2?.data?.data?.length; l++) {
        setDeals((preData) => [...preData, data2?.data?.data[l]]);
        setIssuerName((preData) => [
          ...preData,
          data2?.data?.data[l].Issuer_Name,
        ]);
        setFinancerName((preData) => [
          ...preData,
          data2?.data?.data[l].Financer,
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetDeals2();
  }, []);

  // useEffect(()=>{
  //   const GetDeals = async() =>{
  //     //console.log(dealsid);
  //     try{
  //       setLoader(true);
  //       const id = userInfo?.id;
  //       const data = await axios.post("https://investmentportal.herokuapp.com/getrecordbyid",{id});

  //       console.log(data?.data?.data?.Deals_Allowed_for_Access?.length);
  //       for(let i=0; i<data?.data?.data?.Deals_Allowed_for_Access?.length; i++){
  //         const dealid = data?.data?.data?.Deals_Allowed_for_Access[i]?.ID;
  //         const res = await axios.post("http://localhost:5000/getdealsbyid",{dealid});
  //         console.log(res);
  //         setDeals(preData=>[...preData,res?.data?.data]);
  //         setIssuerName(preData=>[...preData,res?.data?.data?.Issuer_Name]);
  //         setFinancerName(preData=>[...preData,res?.data?.data?.Financer]);
  //         //console.log(res);
  //         setLoader(true);
  //       }

  //       setLoader(false)
  //     }catch(error){
  //       console.log(error);
  //     }

  //   }
  //   GetDeals();
  // },[])

  useEffect(() => {
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
              <ul class="nav nav-pills nav-fill" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    className="nav-link active py-2"
                    id="issuerName-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#issuerName"
                    type="button"
                    role="tab"
                    aria-controls="issuerName"
                    aria-selected="true"
                  >
                    Issuser Name
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    className="nav-link py-2"
                    id="dealName-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#dealName"
                    type="button"
                    role="tab"
                    aria-controls="dealName"
                    aria-selected="false"
                  >
                    Deal Name
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    className="nav-link py-2"
                    id="financerName-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#financerName"
                    type="button"
                    role="tab"
                    aria-controls="financerName"
                    aria-selected="false"
                  >
                    Financer Name
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active text-white"
                  id="issuerName"
                  role="tabpanel"
                  aria-labelledby="issuerName-tab"
                >
                  <IssuserName data={issuerList} />
                </div>
                <div
                  class="tab-pane fade text-white"
                  id="dealName"
                  role="tabpanel"
                  aria-labelledby="dealName-tab"
                >
                  <DealName data={deals} />
                </div>
                <div
                  class="tab-pane fade text-white"
                  id="financerName"
                  role="tabpanel"
                  aria-labelledby="financerName-tab"
                >
                  <FinancerName data={finiceList} />
                </div>
              </div>
            </section>

            <GlobalData />

            {/* File Section End  */}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
