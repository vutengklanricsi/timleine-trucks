import React, { useState, createContext, useContext } from "react";
import { useContextData } from "../listOfData/index";
import Fuse from "fuse.js";
import "./styles/searchBar.css";
import Input from "../input/index";

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
  const listOfTrucks = list ? list.trucks : "";
  const listOfOrders = list ? list.orders : "";

  const fuse = new Fuse(listOfTrucks, {
    keys: ["name"],
    includeScore: true,
  });

  const result = fuse.search(query);

  const truckData = query
    ? result.map((data) => {
        return data.item;
      })
    : listOfTrucks;

  const ordersData = truckData
    ? listOfOrders.map((ordersData) => {
        return ordersData;
      })
    : listOfOrders;

  return (
    <TrucksListContext.Provider value={truckData}>
      <OrdersListContext.Provider value={ordersData}>
        <Input query={query} setQuery={setQuery} />
        {children}
      </OrdersListContext.Provider>
    </TrucksListContext.Provider>
  );
}
