import React, { useState, useEffect } from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const location = useLocation();
  const [documents,setDocuments] = useState([]);
  //const [accessdocuments,setAccessDocuments] = useState();
  // console.log(location.state);
  // console.log(location.state[0].ID);

  const AllDocumentsById = () =>{
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    for(let i=0; i<location?.state?.length; i++){
      const id=location.state[i].ID;
      //const id = "3963856000000894007"
      
      axios.post("https://investmentportal.herokuapp.com/getdocuments",{id}).then(function(data){
        console.log(data);
        //setDocuments(olddata=>[...olddata,{"document":data.data.data}]);
        //console.log(data.data.data.User);
        for(let k=0;k<data.data.data.User.length;k++){
          if(data.data.data.User[k].ID === userInfo.id){
            console.log("matched",data.data.data.ID)
            console.log("Documents Link", data.data.data.Documents);
            const filename = data.data.data.Documents
            const fileformat = filename.split(".")[1];
            //console.log(fileformat);
            setDocuments(olddata=>[...olddata,{"Id":data.data.data.ID,"DocumentName":data.data.data.DocumentName,"DownloadLink":data.data.data.Documents,"FormatType":fileformat,"ReportDate":data.data.data.CreatedDateTime}]);
          }

        }

      }).catch(function(error){
        console.log(error);
      })
    }
    

    // axios.post("http://localhost:5000/getdocuments").then(function(data){
    //   console.log(data);
    // }
  };

  const ShowDocumentData = () => {
    console.log(documents);
  }

  useEffect(()=>{
    AllDocumentsById();
  },[]);

  return (
    <div>
      <TopHeader></TopHeader>

      <Menu> </Menu>

      {/*  Breadcrumb start  */}

      <div className="container mt-5 mb-5">
        <nav aria-label="breadcrumb">
          <ol
            class="breadcrumb"
            style={{
              color: "white",
              fontSize: 25,
            }}
          >
            <li class="breadcrumb-item">Home</li>
            <li class="breadcrumb-item">Library</li>
            <li class="breadcrumb-item" aria-current="page">
              Data
            </li>
          </ol>
        </nav>

        {/* Details Section Start  */}

        <div style={{ backgroundColor: "white", padding: 30 }}>
          <p>
            Reports Added to the Download Center will be stored for batch
            download. Reports Added to a Deal Portfolio will be automatically
            delivered via email according to the individual Portfolio setup.
          </p>
          {/* <button onClick={AllDocumentsById}>check documents</button>
          <button onClick={ShowDocumentData}>Show Data</button> */}
          <div>
            <h5>Reports</h5>
            <div
              style={{
                overflowX: "auto",
              }}
            >
              <table class="table">
                <thead>
                  
                    <tr>
                    <th scope="col">Available Reports</th>
                    <th scope="col">Format Type</th>
                    <th scope="col">Download</th>
                    <th scope="col">Historical Reports</th>
                    <th scope="col">Report Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Deal Status</th>
                    <th scope="col"> Portfolio </th>
                    <th scope="col">Publish Date</th>
                    </tr>
                  
                </thead>
                <tbody>
                {documents?.map((data,index)=>(
                  <tr>
                    <th scope="row">{data.DocumentName}</th>
                    <td>{data.FormatType}</td>
                    <td><a href={`https://creator.zoho.com${data.DownloadLink}`}>Download</a></td>
                    <td>View</td>
                    <td> {data.ReportDate}</td>
                    <td>Payment Date</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{data.ReportDate}</td>
                  </tr>
                ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Details Section End  */}

      {/*  Breadcrumb End   */}

      <Footer> </Footer>
    </div>
  );
};

export default Details;
