import React, { useEffect, useState } from "react";
import "./styles/fetchData.css";
import axios from "axios";

export default function TrucksAndOrders() {
  const url = "/recruitment/trucktimeline.json";
  const [trucks, setTrucksData] = useState();
  const [orders, setOrdersData] = useState();

  useEffect(() => {
    async function fetchData() {
        const request = await axios
      axios
        .get(url)
        .then((response) => {
          setOrdersData(response.data.orders);
          setTrucksData(response.data.trucks);
        })
        .catch((error) => {
          console.log(error);
        });
        return request;
    }
    fetchData();
  }, [url]);
  console.log(trucks);
  console.log(orders);
  return (
    <div>
      {trucks.map((truck) => {
        return (
          <div key={truck.name}>
            <div>{truck.name}</div>
          </div>
        );
      })}
    </div>
  );
}
