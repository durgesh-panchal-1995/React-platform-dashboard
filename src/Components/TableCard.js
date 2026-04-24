// src/components/TableCard.js
import React from "react";

const TableCard = ({ title, children }) => {
  return (
    <div className="table-card">
      <h3 className="table-title">{title}</h3>
      <div className="table-wrapper">{children}</div>
    </div>
  );
};

export default TableCard;   