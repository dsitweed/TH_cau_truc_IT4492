import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import "./chart.css";

export const LineChart = ({ title = "Chart.js Line Chart" }) => {
  const labels = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
  
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title, // title of chart
        font: {size: 25},
        color: "black",
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "Africa",
        borderColor: "#3e95cd",
        backgroundColor: "black",
        fill: false,
      },
      {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        backgroundColor: "black",
        fill: false,
      },
    ],
  };

  return (
    <div className="chart">
      <Line options={options} data={data} height="100px"/>
    </div>
  );
};

export const BarChart = () => {};

export const PieChart = () => {};
