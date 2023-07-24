import React, { useEffect, useContext, useState } from "react";
import Axios from "axios";
import { DataContext } from "../../ContextAPI/DataContext";

function Fetch() {
  const [cityInfections, setCityInfections] = useState([]);
  const [filteredInfections, setFilteredInfections] = useState([]);

  // Data contexts
  const { cityId, setCity, dateFrom, dateTo, setTableData } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      if (cityId === 1) {
        try {
          const response = await Axios.get(
            `https://covid-karlsruhe.onrender.com/cityId1`
          );
           setCityInfections(response.data);
          
        } catch (err) {
          alert("Page not found try again later");
        }
      } else if (cityId === 2) {
        try {
          const response = await Axios.get(
            `https://covid-karlsruhe.onrender.com/cityId2`
          );
           setCityInfections(response.data);
          
        } catch (err) {
          alert("Page not found try again later");
        } // Set data for cityId 2
      } else if (cityId === 3) {
        try {
          const response = await Axios.get(
            `https://covid-karlsruhe.onrender.com/cityId3`
          );
           setCityInfections(response.data);
          
        } catch (err) {
          alert("Page not found try again later");
        } // Set data for cityId 3
      } else if (cityId === 4) {
        try {
          const response = await Axios.get(
            `https://covid-karlsruhe.onrender.com/cityId4`
          );
           setCityInfections(response.data);
          
        } catch (err) {
          alert("Page not found try again later");
        } // Set data for cityId 4
      } else {
        try {
          const response = await Axios.get(
            `https://covid-karlsruhe.onrender.com/cityId5`
          );
           setCityInfections(response.data);
          
        } catch (err) {
          alert("Page not found try again later");
        } // Set default data
      }
    };

    fetchData();
  }, [cityId]);

  useEffect(() => {
    // Filter data when date range changes
    const filtered = cityInfections.filter(
      (infection) => infection.date >= dateFrom && infection.date <= dateTo
    );
    setFilteredInfections(filtered);
  }, [cityInfections, dateFrom, dateTo]);

  const getarticle = async () => {
    const data = [];

    filteredInfections.forEach((item) =>
      data.push({
        date: item.date,
        totalCases: item.totalCases,
        activeCases: item.activeCases,
        recovered: item.totalCases - item.activeCases,
      })
    );
    setTableData(data);
  };

  useEffect(() => {
    getarticle();
  }, [filteredInfections, setTableData]);

  // Fetching latest infection data
  const getTotal = async () => {
    try {
      const response = await Axios.get(`https://covid-karlsruhe.onrender.com/city`);
      setCity(response.data);
    } catch (err) {
      alert("Page not found try again later");
    }
  };

  useEffect(() => {
    getTotal();
  }, []);

  return <></>; // Your JSX component should return something here
}

export default Fetch;
