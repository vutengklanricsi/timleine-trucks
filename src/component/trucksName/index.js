import React, { useContext } from "react";
import { TrucksListContext } from "../searchBar/index";

export default function TrucksName() {
  const trucks = useContext(TrucksListContext);
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
