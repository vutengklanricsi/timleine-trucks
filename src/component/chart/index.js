import React from "react";
import TrucksName from "../trucksName/index";
import Orders from "../orders/index";
import "./styles/chart.css";

export default function Chart() {
  return (
    <div className="chart-frame">
      <div className="chart-trucks">
        <TrucksName />
      </div>
      <div className="chart-orders">
        <Orders />
      </div>
    </div>
  );
}
