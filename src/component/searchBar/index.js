import React, { useState, useContext, createContext } from "react";
import { TrucksOrdersContext } from "../listOfData/index";
import Trucks from "../trucksName/index";
import Fuse from "fuse.js";

export const TrucksListContext = createContext();

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const list = useContext(TrucksOrdersContext);

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
    <div>
      <div>
        <input
          type="text"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
      </div>
      <div>
        <TrucksListContext.Provider value={finalResult}>
          <Trucks />
        </TrucksListContext.Provider>
      </div>
    </div>
  );
}
