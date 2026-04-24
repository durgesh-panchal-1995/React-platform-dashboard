// src/views/Orders.js
import React from "react";
import TableCard from "../Components/TableCard";

const Orders = () => {
  return (
    <div className="view">
      <h1>Orders Report</h1>

      <TableCard title="Orders List">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Amount (₹)</th>
              <th>Status</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>#1001</td><td>2,450</td><td>Delivered</td><td>Raj</td></tr>
            <tr><td>#1002</td><td>1,200</td><td>Pending</td><td>Sneha</td></tr>
            <tr><td>#1003</td><td>3,700</td><td>Delivered</td><td>Vikas</td></tr>
            <tr><td>#1004</td><td>980</td><td>Processing</td><td>Pooja</td></tr>
          </tbody>
        </table>
      </TableCard>
    </div>
  );
};

export default Orders;