import React from "react";
import Graph from "../Graph/Graph";
import Table from "../Table/Table";
import CaseCard from "../CaseCard/CaseCard";
import { useContext, useState } from "react";

import Fetch from "../Fetch/Fetch";

import { DataContext } from "../../ContextAPI/DataContext";

function Home() {
  const [city, setCity] = useState([]);
  const [cityId, setCityId] = useState(13);
  const [dateFrom, setDateFrom] = useState("2022-04-01");
  const [dateTo, setDateTo] = useState("2022-06-01");
  const [tableData, setTableData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [filename, setFileName] = useState("default.csv");
  const { cityname } = useContext(DataContext);

  return (
    <DataContext.Provider
      value={{
        cityName,
        setCityName,
        cityId,
        setCityId,
        city,
        setCity,
        dateFrom,
        setDateFrom,
        dateTo,
        setDateTo,
        tableData,
        setTableData,
        filename,
        setFileName,
      }}
    >
      <>
        <Fetch />
        <CaseCard />
        <div className="info-container">
           <Graph /> 
          <Table cityName={cityname} />
        </div>
      </>
    </DataContext.Provider>
  );
}

export default Home;
