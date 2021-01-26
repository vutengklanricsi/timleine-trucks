import React, { useState, createContext, useContext } from "react";
import { useContextData } from "../listOfData/index";
import Fuse from "fuse.js";
import "./styles/searchBar.css";

export const TrucksListContext = createContext();

export const OrdersListContext = createContext();

export function useTrucksListContext() {
  return useContext(TrucksListContext);
}

export function useOrdersListContext() {
  return useContext(OrdersListContext);
}

export default function SearchBar({ children }) {
  const [query, setQuery] = useState("");
  const list = useContextData();
  const trucksProvide = list ? list.trucks : "";
  const ordersProvide = list ? list.orders : "";

  const fuse = new Fuse(trucksProvide, {
    keys: ["name"],
    includeScore: true,
  });

  const result = fuse.search(query);

  const truckData = query
    ? result.map((data) => {
        return data.item;
      })
    : trucksProvide;

  const ordersData = truckData
    ? ordersProvide.map((ordersData) => {
        return ordersData;
      })
    : ordersProvide;

  return (
    <TrucksListContext.Provider value={truckData}>
      <OrdersListContext.Provider value={ordersData}>
        <div className="header-frame">
          <div className="title">
            <h1>Truck Timeline</h1>
          </div>
          <div className="input-frame">
            <input
            className="input-field"
              type="text"
              value={query}
              onChange={({ target }) => setQuery(target.value)}
              placeholder="Truck name"
            />
          </div>
        </div>
        {children}
      </OrdersListContext.Provider>
    </TrucksListContext.Provider>
  );
}
