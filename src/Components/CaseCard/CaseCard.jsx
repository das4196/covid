import React from "react";
import { useState, useContext, useEffect } from "react";
import "./CaseCard.css";
import "react-table-6/react-table.css";
import { CaseDisplay } from "./CaseDisplay";

import { DataContext } from "../../ContextAPI/DataContext";

function CaseCard() {
  const { city, setCityId, cityName, setCityName } = useContext(DataContext);

  const [totalCases, setTotalCases] = useState(0);
  const [activeCases, setActiveCases] = useState(0);

  const handlechange = (index) => {
    setTotalCases(city[index].totalCases);
    setActiveCases(city[index].activeCases);
    setCityName(city[index].cityName);
    setCityId(city[index].cityId);
  };

  useEffect(() => {
    if (city[12] !== undefined && totalCases === 0) {
      handlechange(12);
    }
  }, [city]);
  return (
    <div className="parent-container">
      <div className="card-container">
        {/* card for choosing city and displaying live */}

        <div className="card city-select" styles="width: 18rem;">
          <div className="spinners-text">
            <div className="spinner-grow spinner-grow" role="status"></div>
            <p>Live</p>
          </div>

          {/* //Dropdown for selecting cities */}

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose City
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {city.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      value={item.cityName}
                      onClick={() => handlechange(index)}
                    >
                      {item.cityName}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* card for displaying cases */}
        <CaseDisplay totalCases={totalCases} activeCases={activeCases} />
      </div>{" "}
      {/* displaying selected city name */}
      <div className="city-title">
        <h6 className="card-title-show-city">City : {cityName}</h6>
      </div>
    </div>
  );
}

export default CaseCard;
