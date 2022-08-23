import React, { useState, useEffect } from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DataTable, { createTheme } from "react-data-table-component";

const Details = () => {
  createTheme(
    "solarized",
    {
      text: {
        primary: "#fff",
        secondary: "#fff",
        disabled: "#fff",
      },
      background: {
        default: "#222222",
      },
      context: {
        background: "#e3f2fd",
        text: "rgba(0, 0, 0, 0.87)",
      },
      divider: {
        default: "#474747",
      },
      button: {
        default: "#fff",
        focus: "#fff",
        hover: "#fff",
        disabled: "#fff",
      },
    },
    "dark"
  );

  const columns = [
    {
      name: "Available Reports",
      sortable: true,
      selector: (row) => row.DocumentName,
    },
    {
      name: "Format Type",
      sortable: true,
      selector: (row) => row.FormatType,
    },
    {
      name: "Report Date",
      sortable: true,
      selector: (row) => row.ReportDate,
    },
    {
      name: "Publish Date",
      sortable: true,
      selector: (row) => row.ReportDate,
    },
    {
      name: "Deal Administrator	",
      sortable: true,
      selector: (row) => row.ReportDate,
    },
    {
      name: "Download",
      cell: (row) => (
        <button
          onClick={handleButtonClick}
          name={row.ReportDate}
          className="btn btn-primary py-1"
        >
          Details
        </button>
      ),
    },
  ];
  const handleButtonClick = (state) => {
    // let link = state.target.name;
    // IssuerListPage("/issuerlist", {
    //   state: { link },
    // });
  };





  const location = useLocation();
  const [documents, setDocuments] = useState([]);
  const [documentslist, setDocumenstList] = useState([]);

  //const [accessdocuments,setAccessDocuments] = useState();


  useEffect(() => {
    //AllDocumentsById();
    console.log(location.state);
    setDocumenstList(location?.state?.months_list_filter);
  }, []);

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

        <div className=" mb-3 mt-5">
          <DataTable
            title="Global Documents"
            columns={columns}
            data={documentslist}
            theme="solarized"
            pagination
          />
        </div>

        {/* Details Section Start  */}

      </div>
      {/* Details Section End  */}

      {/*  Breadcrumb End   */}

      <Footer> </Footer>
    </div>
  );
};

export default Details;
