import React, { useState, createContext, useContext } from "react";
import { useContextData } from "../listOfData/index";
import Fuse from "fuse.js";

export const TrucksListContext = createContext();

export function useTrucksListContext() {
  return useContext(TrucksListContext);
}

export default function SearchBar({ children }) {
  const [query, setQuery] = useState("");
  const list = useContextData();
  console.log(list);
  const trucksProvide = list ? list.trucks : "";

  const fuse = new Fuse(trucksProvide, {
    keys: ["name"],
  });
  const result = fuse.search(query);
  const finalResult = query
    ? result.map((data) => {
        return data.item;
      })
    : trucksProvide;
  return (
    <TrucksListContext.Provider value={finalResult}>
      <div className="">
      <h1 className="title">Truck Timeline</h1>
        <input
          type="text"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
      </div>
      {children}
    </TrucksListContext.Provider>
  );
}
