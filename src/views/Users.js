// src/views/Users.js
import React from "react";
import Card from "../Components/Card";
import ChartCard from "../Components/ChartCard";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Users = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
  };

  const data = {
    labels: ["New Users", "Returning Users"],
    datasets: [
      {
        label: "Users",
        data: [324, 7916],
        backgroundColor: ["#4ca9ff", "#ff9933"],
      },
    ],
  };

  return (
    <div className="view">
      <h1>Users Report</h1>

      <div className="card-grid">
        <Card title="New Users" value="324" />
        <Card title="Active Today" value="1,120" />
      </div>

      <ChartCard title="User Types">
        <Pie options={options} data={data} />
      </ChartCard>
    </div>
  );
};

export default Users;