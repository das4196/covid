import React from "react";
import { CSVLink } from "react-csv";
import { useContext } from "react";
import { DataContext } from "../../ContextAPI/DataContext";

export const Export = () => {
  //Context values
  const { tableData, filename } = useContext(DataContext);
  return (
    <div>
      {tableData !== undefined ? (
        <CSVLink
          className="btn btn-primary generate"
          data={tableData}
          filename={filename}
          id="export-button"
        >
          Export as CSV
        </CSVLink>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
