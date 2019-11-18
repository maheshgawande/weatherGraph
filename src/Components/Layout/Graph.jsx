import React, { useContext } from "react";
import { StationContext } from "Components/StationList";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-annotation";

const Graph = ({ Data, meanValue, labelName, annotation, stationName }) => {
  const [cityInfo] = useContext(StationContext);

  const labels = cityInfo.slice(0, 6).map(data =>
    data.measurement_timestamp_label
      .split("")
      .slice(11, 18)
      .join("")
  );

  const asOnDate = cityInfo.slice(0, 1).map(data =>
    data.measurement_timestamp_label
      .split("")
      .slice(0, 10)
      .join("")
  );

  const newSortedData = Data.map(d => d).sort();
  let minValue = newSortedData[0];
  minValue = minValue - 5 < 0 ? minValue : minValue - 0.5;

  const data = {
    labels: labels,
    datasets: [
      {
        data: Data,
        label: `${labelName} in ${stationName} Chicago city (as on ${asOnDate})`,
        fill: true,
        backgroundColor: "rgba(255,135,0,0.1)",
        lineTension: 0.1,
        borderColor: "rgba(255,135,0,1)",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "bevel",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        responsive: true
      }
    ]
  };
  const options = {
    annotation: {
      annotations: [
        {
          drawTime: "afterDatasetsDraw",
          borderColor: "#333",
          borderDash: [2, 2],
          borderWidth: 2,
          mode: "horizontal",
          type: "line",
          value: meanValue,
          scaleID: "y-axis-0",
          label: {
            backgroundColor: "red",
            fontFamily: "Segoe UI",
            fontSize: 12,
            fontStyle: "bold",
            fontColor: "#fff",
            xPadding: 6,
            yPadding: 6,
            cornerRadius: 4,
            position: "center",
            xAdjust: 0,
            yAdjust: 0,
            enabled: true,
            content: `mean: ${annotation}`
          }
        }
      ]
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: minValue
          }
        }
      ]
    },
    maintainAspectRatio: true
  };

  return <Line data={data} options={options} />;
};

export default Graph;
