import React from "react";
import { Doughnut } from "react-chartjs-2";
import './rating.css'
export default function CardRating({ heading, textValue }: any) {
  const finData = [
    { name: "Available", value: 50 },
    { name: "Unavailable", value: 20 },
    { name: "Occupied", value: 10 },
    { name: "Reserved", value: 5 },
    { name: "Faulted", value: 2 },
  ];
  const chartData = {
    labels: ["Available", "Faulted", "Unavailable", "Occupied"],
    datasets: [
      {
        label: "Total",
        data:
          finData?.length > 0
            ? [
                finData[0]?.value,
                finData[1]?.value,
                finData[2]?.value,
                finData[4]?.value,
              ]
            : [],
        backgroundColor: ["#C3E6C8", "#F09A65", "#F5D699", "#C2C2C2"],
        hoverOffset: 4,
        spacing: 0,
        weight: 3,
      },
    ],
  };

  const options = {
    cutout: "65%",
    plugins: {
      title: {
        display: false,
        text: "Doughnut Chart",
        color: "blue",
        font: {
          size: 14,
        },
        padding: {
          top: 0,
          bottom: 0,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
      spacing: 1,
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 0,
      },
    },
  };
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart: any) => {
      const { width, height, ctx } = chart;
      const text: any =  textValue ; // Calculate total percentage
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 12px Arial"; // Customize font
      ctx.fillStyle = "#000"; // Customize color
      ctx.fillText(text, width / 2, height / 2);
      ctx.restore();
    },
  };
  return (
    <div className="rating-cont">
      <div className="doughtnut">
        <Doughnut
          data={chartData}
          options={options}
          plugins={[centerTextPlugin]}
        />
      </div>
      <div>{heading}</div>
    </div>
  );
}
