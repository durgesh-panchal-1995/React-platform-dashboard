// src/components/Card.js
import React from "react";

const Card = ({ title, value, subtitle }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-value">{value}</p>
        {subtitle && <small className="card-subtitle">{subtitle}</small>}
      </div>
    </div>
  );
};

export default Card;