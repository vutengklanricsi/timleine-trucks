import React, { useEffect, useState, createContext } from "react";
import "./styles/fetchData.css";
import axios from "axios";
import SearchBar from "../searchBar/index";

export const TrucksOrdersContext = createContext();

export default function ListOfData() {

  const url = "/recruitment/trucktimeline.json";
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios;
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      return request;
    }
    fetchData();
  }, [url]);
  return (
    <div>
      <TrucksOrdersContext.Provider value={data}>
        <SearchBar />
      </TrucksOrdersContext.Provider>
    </div>
  );
}
