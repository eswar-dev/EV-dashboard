import React from "react";
import Grid from "@mui/material/Grid2";
import CardContent from "../../components/molecules/card-wrapper";
import "./dashboardstyles.css";
import { Doughnut } from "react-chartjs-2";
import { LightTooltip } from "../../components/molecules/lightTooltip";
import { totalConnectorMessages } from "../../utils";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { CiCircleCheck } from "react-icons/ci";
import { PiBatteryCharging } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import { CiCloudOff } from "react-icons/ci";
import CardStatus from "../../components/atoms/card-overall-status";
import CardConnectorTypes from "../../components/atoms/card-connector-types";
import CardRating from "../../components/atoms/card-rating";
import DashboardGraph from "./components/DashboardGraph";

Chart.register(ArcElement, Tooltip, Legend);

export default function DashboardContent() {
  const finData = [
    { name: "Available", value: 50 },
    { name: "Unavailable", value: 20 },
    { name: "Occupied", value: 10 },
    { name: "Reserved", value: 5 },
    { name: "Faulted", value: 2 },
  ];

  const legends = [
    {
      icon: <CiCircleCheck />,
      text: "Available",
      numberText: finData?.length > 0 ? finData[0].value : 0,
    },
    {
      icon: <PiBatteryCharging />,
      text: "Unavailable",
      numberText: finData?.length > 0 ? finData[1].value : 0,
    },
    {
      icon: <MdEventAvailable />,
      text: "coming soon",
      numberText: finData?.length > 0 ? finData[2].value : 0,
    },
    {
      icon: <MdAccessTime />,
      text: "Faulted",
      numberText: finData?.length > 0 ? finData[4].value : 0,
    },
    {
      icon: <MdBlock />,
      text: "out of order",
      numberText: finData?.length > 0 ? finData[4].value : 0,
    },
    {
      icon: <CiCloudOff />,
      text: "Offline",
      numberText: finData?.length > 0 ? finData[4].value : 0,
    },
  ];

  const TotLegends = [
    {
      icon: <CiCircleCheck />,
      text: "Available",
      numberText: finData?.length > 0 ? finData[0].value : 0,
    },
    {
      icon: <PiBatteryCharging />,
      text: "Unavailable",
      numberText: finData?.length > 0 ? finData[1].value : 0,
    },
    {
      icon: <MdEventAvailable />,
      text: "coming soon",
      numberText: finData?.length > 0 ? finData[2].value : 0,
    },
    {
      icon: <MdAccessTime />,
      text: "Faulted",
      numberText: finData?.length > 0 ? finData[4].value : 0,
    },
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
      const text = "20%"; // Calculate total percentage
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 22px Arial"; // Customize font
      ctx.fillStyle = "#000"; // Customize color
      ctx.fillText(text, width / 2, height / 2);
      ctx.restore();
    },
  };

  const TotChartData = {
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
        spacing: 6,
        weight: 5,
      },
    ],
  };

  const TotOptions = {
    plugins: {
      title: {
        display: false,
        text: "Doughnut Chart",
        color: "blue",
        font: {
          size: 34,
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
      spacing: 2,
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
        borderRadius: 10,
      },
    },
  };
  return (
    <Grid container>
      <Grid display={"flex"}>
        <CardContent
          isChargerStatus={true}
          heading={"Charger Status"}
          children={
            <Grid className={"connectorContainerInner"}>
              <div className={"totalChargingConnectorChart"}>
                <Doughnut
                  data={chartData}
                  options={options}
                  plugins={[centerTextPlugin]}
                />
              </div>
              <div className={"legendStatusCard"}>
                {legends.map((item, index) => {
                  return (
                    <LightTooltip
                      title={totalConnectorMessages(index)}
                      key={index}
                    >
                      <Grid
                        data-cy={`legend-${index}`}
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {item.icon}
                          <p className={"statusCardText"}>{item.text}</p>
                        </Grid>
                        <p className={"statusCardNumber"}>{item.numberText}</p>
                      </Grid>
                    </LightTooltip>
                  );
                })}
              </div>
            </Grid>
          }
        />

        <CardContent
          heading={"Overall status"}
          children={
            <Grid container pt={2} className="overall-status">
              <Grid display={"flex"} gap={"15px"}>
                <CardStatus
                  {...{ heading: "Chargers", value: "200k", percent: "11.88%" }}
                />{" "}
                <CardStatus
                  {...{ heading: "Chargers", value: "200k", percent: "11.88%" }}
                />{" "}
                <CardStatus
                  {...{ heading: "Chargers", value: "200k", percent: "11.88%" }}
                />
              </Grid>
              <Grid display={"flex"} gap={"15px"}>
                <CardStatus
                  {...{ heading: "Chargers", value: "200k", percent: "11.88%" }}
                />{" "}
                <CardStatus
                  {...{ heading: "Chargers", value: "200k", percent: "11.88%" }}
                />{" "}
                <CardStatus
                  {...{ heading: "Chargers", value: "200k", percent: "11.88%" }}
                />
              </Grid>
            </Grid>
          }
        />
      </Grid>
      <Grid display={"flex"}>
        <CardContent
          heading={"Total Connectors"}
          children={
            <Grid className={"totConnectors"}>
              <div className={"totalChargingConnectorChart"}>
                <Doughnut
                  data={TotChartData}
                  options={TotOptions}
                  plugins={[centerTextPlugin]}
                />
              </div>
              <div className={"legendStatusCard"}>
                {TotLegends.map((item, index) => {
                  return (
                    <LightTooltip
                      title={totalConnectorMessages(index)}
                      key={index}
                    >
                      <Grid
                        data-cy={`legend-${index}`}
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {item.icon}
                          <p className={"statusCardText"}>{item.text}</p>
                        </Grid>
                        <p className={"statusCardNumber"}>{item.numberText}</p>
                      </Grid>
                    </LightTooltip>
                  );
                })}
              </div>
            </Grid>
          }
        />
        <CardContent
          heading={"Connector Types"}
          children={
            <Grid container pt={2} className="connector-types">
              <Grid display={"flex"} gap={"15px"} flexDirection={"column"}>
                <CardConnectorTypes {...{ value: "200k" }} />{" "}
                <CardConnectorTypes {...{ value: "200k" }} />{" "}
                <CardConnectorTypes {...{ value: "200k" }} />
              </Grid>
              <Grid display={"flex"} gap={"15px"} flexDirection={"column"}>
                <CardConnectorTypes {...{ value: "200k" }} />{" "}
                <CardConnectorTypes {...{ value: "200k" }} />{" "}
                <CardConnectorTypes {...{ value: "200k" }} />
              </Grid>
            </Grid>
          }
        />
        <CardContent
          heading={"Connector Types"}
          children={
            <Grid container pt={2} className="connector-types">
              <Grid display={"flex"} gap={"15px"} flexDirection={"column"}>
                <CardRating {...{ textValue: "4.8", heading: "Maintance" }} />{" "}
                <CardRating
                  {...{ textValue: "4.8", heading: "Accurate Location" }}
                />{" "}
                <CardRating
                  {...{ textValue: "4.8", heading: "Connectivity" }}
                />
              </Grid>
              <Grid display={"flex"} gap={"15px"} flexDirection={"column"}>
                <CardRating {...{ textValue: "4.8", heading: "Pricing" }} />{" "}
                <CardRating
                  {...{ textValue: "4.8", heading: "Faulty Charger" }}
                />{" "}
                <CardRating
                  {...{ textValue: "4.8", heading: "Faulty Charger" }}
                />
              </Grid>
            </Grid>
          }
        />
      </Grid>

      <div style={{ width: "100%", height: "300px" }}>
        <DashboardGraph />
      </div>
    </Grid>
  );
}
