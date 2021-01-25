import React, { useState, createContext, useContext } from "react";
import { useContextData } from "../listOfData/index";
import Fuse from "fuse.js";
import { Row, Col, Container } from "react-bootstrap";

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
        <Container>
          <Row>
            <Col>
              <h1 className="title">Truck Timeline</h1>
            </Col>
            <Col>
              <input
                type="text"
                value={query}
                onChange={({ target }) => setQuery(target.value)}
              />
            </Col>
          </Row>
        </Container>

        {children}
      </OrdersListContext.Provider>
    </TrucksListContext.Provider>
  );
}
