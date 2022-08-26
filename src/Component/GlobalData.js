import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { defaultDesign } from "./tableDesign.ts";
import { zohoFilenameParserFromDownloadUrl } from "./Helpers/functions";
const GlobalData = () => {
  const [documents, setDocuments] = useState([]);
  const [monthreport, setMonthReport] = useState();

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
          name={row.DownloadLink}
          id={row.Id}
          className="btn btn-primary py-1"
        >
          Download
        </button>
      ),
    },
  ];
  const handleButtonClick = async (state) => {
    let docname = zohoFilenameParserFromDownloadUrl(state.target.name);
    let docid = state.target.id;

    await axios
      .get(
        `http://localhost:5000/w3s/v1/alldocdownload?id=${docid}&filename=${docname}`
      )
      .then(function (response) {
        window.open(response.data);
      });
    // console.log(data);
    // setGlobalDocuments(data?.data?.data);
  };

  // fetch(
  //   "http://localhost:5000/download?filename=1660916233153_V2_Changes_12_Aug_22.docx",
  //   {
  //     method: "GET",
  //     responseType: "blob",
  //     headers: {
  //       Authorization: `Zoho-oauthtoken 1000.2f6f214158da1b12765547588cb58f28.2f9948949725eee4ca97b83689113f81`,
  //     },
  //   }
  // )
  //   .then((response) => response.blob())
  //   .then((arrayBuffer) => {
  // Create blob link to download
  // const url = window.URL.createObjectURL(new Blob([arrayBuffer]));

  // const link = document.createElement("a");
  // link.href = url;
  // link.setAttribute("download", `FileName.docx`);

  // Append to html link element
  // document.body.appendChild(link);

  // Start download
  // window.open(
  //   "http://localhost:3000/67592451-4747-466b-a916-955e9be72a8f"
  // );
  // console.log(url);
  // link.click();

  // Clean up and remove the link
  // link.parentNode.removeChild(link);
  // });

  // axios
  //   .get(
  //     `https://creator.zoho.com.au/api/v2/nickprocterau_amaltrustees2/investment-portal/report/All_Documents/9824000000159029/Documents/download`,
  //     {
  //       headers: {
  //         Authorization: `Zoho-oauthtoken 1000.b7b8da7a047694d1bd378e609fb43e44.aadb3021b76a63b933d7696876cadaeb`,

  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     }
  //   )
  //   .then(function (response) {
  //     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
  //     var fileLink = document.createElement("a");
  //     fileLink.href = fileURL;
  //     fileLink.setAttribute("download", "file.pdf");
  //     // GLOBAL.document = new JSDOM(html).window.document;
  //     // document.body.appendChild(fileLink);
  //     fileLink.click();
  //   });

  // alert(link);
  // console.log(link);
  // };

  const AllGlobalDocuments = async () => {
    let MonthsReport = [];
    await axios
      .get("http://localhost:5000/w3s/v1/allglobaldocuments")
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
          customStyles={defaultDesign}
        />
      </div>
    </section>
  );
};

export default GlobalData;
