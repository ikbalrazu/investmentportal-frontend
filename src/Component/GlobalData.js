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

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
    header: {
      style: {
        color: "#00adee",
        paddingLeft: "5px",
      },
    },
    headRow: {
      style: {
        fontSize: "15px",
      },
    },
  };

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
  const handleButtonClick = (state) => {
    let link = state.target.name;

    // axios
    //   .get(
    //     `https://creator.zoho.com.au/api/v2/nickprocterau_amaltrustees2/investment-portal/report/All_Documents/9824000000167007/Documents/download`,
    //     {
    //       headers: {
    //         Authorization: `Zoho-oauthtoken 1000.41fd85ed9f132f226a0c8bcac439e299.7f19f5de56f637bc4448264664ae1798`,
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   });

    // alert(link);
  };
  const AllGlobalDocuments = async () => {
    let MonthsReport = [];
    await axios
      .get("https://investmentportal.herokuapp.com/allglobaldocuments")
      .then(function (data) {
        console.log(data);
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
    <section>
      <div
        className=" mt-4"
        style={{
          backgroundColor: "#232323",
          padding: "0 15px",
        }}
      >
        <DataTable
          title="Global Documents"
          columns={columns}
          data={documents}
          theme="solarized"
          pagination
          customStyles={customStyles}
        />
      </div>
    </section>
  );
};

export default GlobalData;
