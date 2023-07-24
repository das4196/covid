import React from "react";
import { prevention } from "../../Assets/Covids";
import "./Prevention.css";

function Prevention() {
  return (
    <div className="main-container-prevention">
      <h3 className="header-covid">How to prevent Covid-19?</h3>
      <div className="covid-text-video-container">
        <p className="text-cov">{prevention}</p>

        {/* video container */}

        <div className="embed-responsive embed-responsive-21by9 frame">
          <iframe
            title="Covid-19 prevention"
            className="embed-responsive-item"
            src=" https://www.youtube.com/embed/oqFn6AHoJZQ?rel=0"
            width={"auto"}
            height={"auto"}
          ></iframe>
        </div>
      </div>

      {/* Navigation link to website */}
      <a
        className=" navigation-link"
        href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
      >
        Visit WHO website for more informations{" "}
      </a>
    </div>
  );
}

export default Prevention;
