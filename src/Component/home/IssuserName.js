import React, { useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { defaultDesign } from "./tableDesign.ts";

const IssuserName = (props) => {
  const IssuerListPage = useNavigate();

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
      name: "Issuer Name",
      sortable: true,
      selector: (row) => row.name,
    },
    {
      name: "Deal Count",
      sortable: true,
      selector: (row) => row.count,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={handleButtonClick}
          name={row.name}
          className="btn btn-primary py-1"
        >
          Details
        </button>
      ),
    },
  ];
  const handleButtonClick = (state) => {
    //console.log(state);
    //let link = state.target.name;
    IssuerListPage("/issuerlist", {
      state: { props },
    });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <DataTable
        title="Issuser Name"
        columns={columns}
        data={props.data}
        theme="solarized"
        pagination
        customStyles={defaultDesign}
      />
    </div>
  );
};

export default IssuserName;
