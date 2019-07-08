import React from "react";
import "./EmployeeCards.css";

function EmployeeCards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} onClick={props.imageClick}  />
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default EmployeeCards;
