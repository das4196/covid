import React, { useContext, useState } from "react";
import { options } from "./options";
import Chart from "react-apexcharts";
import "./Graph.css";
//importing context
import { DataContext } from "../../ContextAPI/DataContext";

const Graph = () => {
  console.log("test");
  //Accessing context value
  const { tableData, dateFrom, dateTo } = useContext(DataContext);
  //creating state variables
  const [chartSelector, setChartSelector] = useState("bar");
  //Creating array values for pushing
  let dates = [];
  let activCasesData = [];
  let totalCasesData = [];
  let recoveredData = [];
  //Pushing data
  tableData.map((item) => {
    dates.push(item.date);
    activCasesData.push(item.activeCases);
    totalCasesData.push(item.totalCases);
    recoveredData.push(item.recovered);
  });
  //Creating options for chart
  const optionsLineAndArea = options("line", dates);
  const optionsBar = options("bar", dates);
  const series = [
    {
      name: "Total Cases",
      data: totalCasesData,
    },
    {
      name: "Recovered Cases",
      data: recoveredData,
    },
    {
      name: "Active Cases",
      data: activCasesData,
    },
  ];
  return (
    <div className="graph-container">
      <p className="card-dates">
        {" "}
        Showing results from &nbsp; <strong>{dateFrom}&nbsp;</strong>
        {""} to&nbsp; <strong>{dateTo}</strong>
      </p>
      {/* containers for buttons */}
      <div className="button-container">
        <button
          className="btn graph-btn bar"
          id="bar"
          onClick={() => {
            setChartSelector("bar");
          }}
        >
          Bar Chart
        </button>
        <button
          className="btn graph-btn area"
          id="line"
          onClick={() => {
            setChartSelector("line");
          }}
        >
          Line Chart
        </button>
        <button
          className="btn graph-btn area"
          id="area"
          onClick={() => {
            setChartSelector("area");
          }}
        >
          Area Chart
        </button>
      </div>
      {/* // Selecting type of chart */}
      {chartSelector === "bar" ? (
        <Chart options={optionsBar} series={series} type="bar" width="100%" />
      ) : (
        <>
          {chartSelector === "line" ? (
            <Chart
              options={optionsLineAndArea}
              series={series}
              type="line"
              width="100%"
            />
          ) : (
            <Chart
              options={optionsLineAndArea}
              series={series}
              type="area"
              width="100%"
              fill="gradient"
            />
          )}
        </>
      )}
    </div>
  );
};
export default Graph;
