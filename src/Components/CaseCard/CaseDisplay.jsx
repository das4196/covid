import React from "react";

export const CaseDisplay = ({ activeCases, totalCases }) => {
  return (
    <>
      <div className="card" id="totalcard" styles="width: 18rem;">
        <div className="card-body">
          <h3 className="card-title">{totalCases}</h3>
          <h4 className="card-text" id="total">
            Total
          </h4>
        </div>
      </div>

      {/* card for displaying activecases */}

      <div className="card" id="deathcard" styles="width: 18rem;">
        <div className="card-body">
          <h3 className="card-title">{activeCases}</h3>
          <h4 className="card-text" id="active">
            Active
          </h4>
        </div>
      </div>

      {/* card for displaying inactivecases */}

      <div className="card" id="recoveredcard" styles="width: 18rem;">
        <div className="card-body">
          <h3 className="card-title">{totalCases - activeCases}</h3>
          <h4 className="card-text" id="recovered">
            Inactive
          </h4>
        </div>
      </div>
    </>
  );
};
