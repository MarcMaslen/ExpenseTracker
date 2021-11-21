import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const valuePointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxMonth = Math.max(...valuePointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxMonth}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
