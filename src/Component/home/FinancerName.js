import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { useNavigate, useLocation } from "react-router-dom";
import { defaultDesign } from "./tableDesign.ts";

const FinancerName = (props) => {
  const FinancierListPage = useNavigate();

  const columns = [
    {
      name: "Financer Name",
      sortable: true,
      selector: (row) => row?.name,
    },
    {
      name: "Deal Count",
      sortable: true,
      selector: (row) => row?.count,
    },

    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={handleButtonClick}
          name={row?.name}
          className="btn btn-primary py-1"
        >
          Details
        </button>
      ),
    },
  ];
  const handleButtonClick = (state) => {
    // console.log("clicked");
    let link = state.target.name;
    FinancierListPage("/financierlist", {
      state: { link },
    });
    // alert(state.target.name);
  };
  return (
    <div>
      <DataTable
        title="Financer Name"
        columns={columns}
        data={props.data}
        theme="solarized"
        pagination
        customStyles={defaultDesign}
      />
    </div>
  );
};

export default FinancerName;
