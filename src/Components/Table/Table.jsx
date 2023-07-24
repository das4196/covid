import React, { useContext, useEffect, useState } from "react";
import "./Table.css";
import ReactTable from "react-table-6";

import { DataContext } from "../../ContextAPI/DataContext";
import { Export } from "../Export/Export";

const Table = () => {
  //Getting current date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  //Context values
  const { tableData, setDateFrom, setDateTo, cityName, setFileName } =
    useContext(DataContext);

  // initializing the state variables

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTo, setSelectedDateTo] = useState(null);
  const [error, setError] = useState("");

  const columns = [
    { Header: "Date", accessor: "date" },
    { Header: "Total Cases", accessor: "totalCases" },
    { Header: "Active Cases", accessor: "activeCases" },
    { Header: "Recovered", accessor: "recovered" },
  ];

  //Generating table and details on button click also checking all possible error conditions
  const handlechangedate = () => {
    if (selectedDateTo < selectedDate) {
      setError("Incorrect format , please select a valid date");
    } else if (selectedDate > today) {
      setError("Selected date is in future!");
    } else if (selectedDateTo && selectedDate) {
      setDateFrom(selectedDate);
      setDateTo(selectedDateTo);
      setError("");
    } else {
      setError("Please select a From and to dates");
    }
  };
  // Setting intial value
  useEffect(() => {
    setFileName(`${cityName}.csv`);
  }, [cityName]);

  return (
    <div className="table-container">
      <div className="date">
        <div className="date-main">
          <h4>Choose the dates to generate customised results </h4>
          {/* date input from and to */}
          <input
            type="date"
            className="input-from"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <input
            type="date"
            className="input-to"
            onChange={(e) => setSelectedDateTo(e.target.value)}
          />
        </div>
        {error ? (
          <h5 style={{ color: "red", marginTop: "1rem" }}>{error}</h5>
        ) : (
          <></>
        )}
        <button
          type="button"
          className="btn btn-primary btn-sm requestbutton"
          id="generate-button"
          onClick={handlechangedate}
        >
          Generate
        </button>
      </div>

      {/* // React table to show items. */}
      <ReactTable
        data={tableData}
        columns={columns}
        style={{ textAlign: "center" }}
        pageSize={8}
      />
      <Export />
    </div>
  );
};

export default Table;
