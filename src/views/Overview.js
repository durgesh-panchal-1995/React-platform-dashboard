// src/views/Overview.js
import React from "react";
import Card from "../Components/Card";
import ChartCard from "../Components/ChartCard";
import TableCard from "../Components/TableCard";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Overview = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Revenue Trend" },
    },
    scales: { y: { beginAtZero: true } },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue (₹ in Lakh)",
        data: [8.2, 9.1, 9.8, 10.5, 11.2, 12.5],
        borderColor: "#4ca9ff",
        backgroundColor: "rgba(76, 169, 255, 0.1)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="view">
      <h1>Overview</h1>

      <div className="card-grid">
        <Card title="Total Revenue" value="₹ 12.5 L" subtitle="Last 6 months" />
        <Card title="Total Users" value="8,240" />
        <Card title="Total Orders" value="1,450" />
      </div>

      <ChartCard title="Revenue Trend">
        <Line options={options} data={data} />
      </ChartCard>

      <TableCard title="Recent Orders">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Amount (₹)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>#1001</td><td>2,450</td><td>Delivered</td></tr>
            <tr><td>#1002</td><td>1,200</td><td>Pending</td></tr>
            <tr><td>#1003</td><td>3,700</td><td>Delivered</td></tr>
            <tr><td>#1004</td><td>980</td><td>Processing</td></tr>
          </tbody>
        </table>
      </TableCard>
    </div>
  );
};

export default Overview;