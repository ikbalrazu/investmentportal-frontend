import React,{useState,useEffect} from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const loginpage = useNavigate();
  const [userinfo, setUserInfo] = useState();
  const [filedata,setFileData] = useState();
  const [documentname,setDocumentName] = useState();
  const [documentdata, setDocumentData] = useState();
  const FileData = (e) => {
    console.log(e.target.files[0]);
    setFileData(e.target.files[0]);
  }

  const UploadFileHandler = async(e) => {
    //let formData = new FormData();
    // formData.append("file", filename);
    // console.log(formData);
    

    e.preventDefault();

    //handle file data from the state before sending
    const data = new FormData();
    data.append('featuredImage', filedata);
    data.append('id',documentname);

    await axios.post("http://localhost:5000/uploadfile",data).then(function(data){
      console.log(data);
    })

    // await axios.post("http://localhost:5000/postdocuments",data).then(function(data){
    //   console.log(data.data.data.ID);
    // })

    // fetch("http://localhost:5000/multerupload",{
    //   method: "POST",
    //   body: data,
    // })
    // .then((result)=>{
    //   console.log("File sent successfully");
    //   console.log(result);
    // })
    // .catch((err)=>{
    //   console.log(err.message);
    // })
     
  }

  const AllDocuments = () =>{
    axios.post("http://localhost:5000/getalldocuments").then(function(data){
      console.log(data);
      console.log(data.data.data[0].Documents);
      setDocumentData(data.data.data);
    })
  }

  const AllDeals = () =>{
    axios.post("http://localhost:5000/getalldeals").then(function(data){
      console.log(data);
      console.log(data.data.data[0].Documents);
      setDocumentData(data.data.data);
    })
  }

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
  }, []);

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
                className="py-5 mt-4"
                style={{
                  backgroundColor: "#232323",
                  padding: 20,
                }}
              >
                <h5 className="text-start py-1" style={{ color: "#00ADEE" }}>
                  {" "}
                  Search{" "}
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

            {/* File Section Start  */}
            <section>
              <div
                className="py-5 mt-4"
                style={{
                  backgroundColor: "#232323",
                  padding: 10,
                }}
              >
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
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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
          </div>

          {/*  For Your Information End  */}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
