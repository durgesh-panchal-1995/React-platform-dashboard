// src/views/Sales.js
import React from "react";
import Card from "../Components/Card";
import ChartCard from "../Components/ChartCard";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Sales = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Sales (Last 6 Months)" },
    },
    scales: { y: { beginAtZero: true } },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales (₹ in Lakh)",
        data: [1.8, 2.1, 2.4, 2.8, 3.0, 3.2],
        backgroundColor: "#3cb371",
      },
    ],
  };

  return (
    <div className="view">
      <h1>Sales Report</h1>

      <div className="card-grid">
        <Card title="Total Sales" value="₹ 3.2 L" subtitle="Jun 2026" />
        <Card title="Avg. Order Value" value="₹ 1,750" />
      </div>

      <ChartCard title="Monthly Sales">
        <Bar options={options} data={data} />
      </ChartCard>
    </div>
  );
};

export default Sales;