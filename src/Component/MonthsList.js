import React, { useState, useEffect } from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MonthsList() {
  const location = useLocation();
  const detailspage = useNavigate();
  const [documents,setDocuments] = useState([]);
  const [monthreport,setMonthReport] = useState();
  const [dealname, setDealName] = useState();
  const DocumentHandler = () => {
    let MonthsReport=[];
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    //console.log(location?.state);
    for(let i=0; i<location?.state?.length; i++){
      const id=location.state[i].ID;
      console.log(id);
      axios.post("https://investmentportal.herokuapp.com/getdocuments",{id}).then(function(data){
        console.log(data);
        setDealName(data?.data?.data?.Deals?.display_value)
        if(data?.data?.data?.Access_Type === "Private"){
          for(let k=0; k<data?.data?.data?.User?.length; k++){
            if(data?.data?.data?.User[k]?.ID === userInfo.id){
              const filename = data.data.data.Documents;
              const fileformat = filename.split(".")[1];
              MonthsReport.push(data.data.data.MonthOfReport);
              setDocuments(olddata=>[...olddata,{"Id":data.data.data.ID,"DocumentName":data.data.data.DocumentName,"DownloadLink":data.data.data.Documents,"FormatType":fileformat,"ReportDate":data.data.data.CreatedDateTime,"MonthReport":data.data.data.MonthOfReport}]);
            }
          }
          
        }else if(data?.data?.data?.Access_Type === "Global"){
          const filename = data.data.data.Documents;
          const fileformat = filename.split(".")[1];
          MonthsReport.push(data.data.data.MonthOfReport);
          setDocuments(olddata=>[...olddata,{"Id":data.data.data.ID,"DocumentName":data.data.data.DocumentName,"DownloadLink":data.data.data.Documents,"FormatType":fileformat,"ReportDate":data.data.data.CreatedDateTime,"MonthReport":data.data.data.MonthOfReport}]);
        }
        // for(let k=0; k<data?.data?.data?.User?.length; k++){
        //   if(data?.data?.data?.AccessType === "Private"){

        //   }
        //   // if(data?.data?.data?.User[k]?.ID === userInfo.id){
        //   //   const filename = data.data.data.Documents
        //   //   const fileformat = filename.split(".")[1];
        //   //   //console.log(fileformat);
        //   //   MonthsReport.push(data.data.data.MonthOfReport);
        //   //   setDocuments(olddata=>[...olddata,{"Id":data.data.data.ID,"DocumentName":data.data.data.DocumentName,"DownloadLink":data.data.data.Documents,"FormatType":fileformat,"ReportDate":data.data.data.CreatedDateTime,"MonthReport":data.data.data.MonthOfReport}]);
        //   // }
        // }
        //console.log("MONTH REPORT: ",MonthsReport);
        return MonthsReport;
      }).then(MonthsReport=>{
        //console.log(MonthsReport);
        const withoutDuplicates_MonthsReport= [...new Set(MonthsReport)];
        //console.log(withoutDuplicates_MonthsReport);
        setMonthReport(withoutDuplicates_MonthsReport);
        // var MonthsReport_filter = documents?.filter(function(el){
        //   return el.MonthOfReport === unique_issuername[index];
        // })
      })
    }
    
  }
  
  useEffect(()=>{
    DocumentHandler();
    console.log(location);
  },[])
  return (
    <div>
      <TopHeader></TopHeader>
      <Menu></Menu>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
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
                  Welcome, {dealname}
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
                  <h3> Issuser Name </h3>
                  <span>{monthreport?.length} Search Results</span>

                  <table className="table text-white mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Month</th>
                        <th scope="col">Product Title</th>
                        <th scope="col">Deal Administrator</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {monthreport?.map((data,index)=>{
                        var months_list_filter = documents?.filter(function(el){
                          return el.MonthReport === monthreport[index];
                        })
                        return(
                          <tr onClick={()=>{
                            
                            console.log(months_list_filter);
                            detailspage("/details",{state:{months_list_filter}})}} >
                          <th scope="row" style={{cursor:"pointer"}}> {data} </th>
                          <td>Other </td>
                          <td>--</td>
                          <td>
                          {" "}
                          <i className="bi bi-arrow-up-right-square"> </i>{" "}
                          </td>
                          </tr>
                        )
                      })}
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

      <Footer></Footer>
    </div>
  );
}
