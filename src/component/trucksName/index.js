import React from "react";
import { useTrucksListContext } from "../searchBar/index";
import "./styles/truck.css";

export default function TrucksName() {
  const trucks = useTrucksListContext()
  return (
    <div>
      {trucks
        ? trucks.map((truck) => {
            return (
              <div key={truck.name}>
                <div>{truck.name}</div>
              </div>
            );
          })
        : null}
    </div>
  );
}
