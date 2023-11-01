import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { ThemeContext } from "../context/themeContext";

const BarChart = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const chartSeries = [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43, 66, 45, 52, 34, 56, 41],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27, 32, 42, 12, 24, 28, 30],
    },
  ];

  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    colors: ["#727CF5", "#EAEAEA"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: "35%",
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 400,
              colors: selectedTheme === "light" ? ["#ffffff"] : ["#6c757d"],
            },
          },
        },
      },
    },
    xaxis: {
      type: "text",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: true,
        style: {
          colors: selectedTheme === "light" ? "#6c757d" : "#ffffff",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: selectedTheme === "light" ? "#6c757d" : "#ffffff",
        },
      },
    },
    legend: {
      position: "right",
      offsetY: 40,
      labels: {
        colors: selectedTheme === "light" ? "#6c757d" : "#ffffff",
        useSeriesColors: false,
      },
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <Card>
      <Card.Body>
        <p style={{ fontWeight: "700", fontSize: "16px" }}>
          VAT Invoice per year
        </p>
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={300}
        />
      </Card.Body>
    </Card>
  );
};

export default BarChart;
