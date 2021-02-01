import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

export const TrucksOrdersContext = createContext();

export function useContextData() {
  return useContext(TrucksOrdersContext);
}

export default function ListOfData({ children }) {
  const [data, setData] = useState();
  const url = "/recruitment/trucktimeline.json";

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
    <TrucksOrdersContext.Provider value={data}>
      {children}
    </TrucksOrdersContext.Provider>
  );
}
