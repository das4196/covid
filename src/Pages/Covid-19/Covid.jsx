import React from "react";
import "./Covid.css";
import { covid } from "../../Assets/Covids";

function Covid() {
  return (
    <div className="main-container">
      <h3 className="header-covid">What is Covid-19?</h3>
      <div className="covid-text-video-container">
        <p className="text-cov">{covid}</p>

        {/* Video container */}

        <div className="embed-responsive embed-responsive-21by9 frame">
          <iframe
            title="Covid-19 details"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/D9tTi-CDjDU?rel=0"
            width={"auto"}
            height={"auto"}
          ></iframe>
        </div>
      </div>
      {/* navigation link to content website */}
      <a
        className=" navigation-link"
        href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
      >
        Visit WHO website for more informations{" "}
      </a>
    </div>
  );
}

export default Covid;
