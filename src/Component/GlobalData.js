import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable, { createTheme } from "react-data-table-component";


const GlobalData = () => {
  const [documents, setDocuments] = useState([]);
  const [monthreport, setMonthReport] = useState();

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
      selector: (row) => row.MonthReport,
    },
    {
      name: "Download",
      cell: (row) => (
        <button
          onClick={handleButtonClick}
          name={`https://creator.zoho.com.au${row.DownloadLink}`}
          className="btn btn-primary py-1"
        >
          Download
        </button>
      ),
    },
  ];

  const handleButtonClick = async(state) => {
    let link = state.target.name;

    const accesstoken = await axios
      .get(
        "https://investmentportal.herokuapp.com/accesstoken"
      )

    console.log(accesstoken?.data);

    await axios.get(`${link}`, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accesstoken}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    })
    .then(function (response) {
    console.log(response);
    
    //res.status(200).json(response);
    }).catch(function(error){
      console.log(error);
    })

    // alert(link);
  };

  const AllGlobalDocuments = async () => {
    let MonthsReport = [];
    await axios
      .get("https://investmentportal.herokuapp.com/allglobaldocuments")
      .then(function (data) {
        //console.log(data);
        for (let i = 0; i < data?.data?.data?.length; i++) {
          const filename = data?.data?.data[i]?.Documents;
          const fileformat = filename?.split(".")[1];
          MonthsReport.push(data.data.data[i].MonthOfReport);
          setDocuments((olddata) => [
            ...olddata,
            {
              Id: data.data.data[i].ID,
              DocumentName: data.data.data[i].DocumentName,
              DownloadLink: data.data.data[i].Documents,
              FormatType: fileformat,
              ReportDate: data.data.data[i].CreatedDateTime,
              MonthReport: data.data.data[i].MonthOfReport,
            },
          ]);
        }
        return MonthsReport;
      })
      .then((MonthsReport) => {
        //console.log(MonthsReport);
        const withoutDuplicates_MonthsReport = [...new Set(MonthsReport)];
        //console.log(withoutDuplicates_MonthsReport);
        setMonthReport(withoutDuplicates_MonthsReport);
        // var MonthsReport_filter = documents?.filter(function(el){
        //   return el.MonthOfReport === unique_issuername[index];
        // })
      });
    // console.log(data);
    // setGlobalDocuments(data?.data?.data);
  };

  useEffect(() => {
    AllGlobalDocuments();
  }, []);

  return (
    <div className=" mb-3 mt-5">
      <DataTable
        title="Global Documents"
        columns={columns}
        data={documents}
        theme="solarized"
        pagination
      />
    </div>
  );
};

export default GlobalData;
