import React from "react";
import { useTrucksListContext } from "../searchBar/index";
import "./styles/truck.css";

export default function TrucksName() {
  const trucks = useTrucksListContext();
  return (
    <div className="truck-frame">
      {trucks
        ? trucks.map((truck) => {
            return (
              <div className="truck-name" key={truck.name}>
                <div>{truck.name}</div>
              </div>
            );
          })
        : null}
    </div>
  );
}
