import React from "react";
import "./styles/orders.css";
import { Row, Col, Container } from "react-bootstrap";
import { useTrucksListContext, useOrdersListContext } from "../searchBar/index";

export default function Orders() {
  const orders = useOrdersListContext();
  const trucks = useTrucksListContext();

  const trucksOrders = trucks
    ? trucks.map((truck) => {
        return truck.assignedOrderId;
      })
    : null;

  const filteredOrders = [];
  const findOrder = trucksOrders
    ? trucksOrders.map((truckOrder) => {
        return truckOrder.map((item) => {
          return orders.map((order) => {
            if (order.id === item) {
              return filteredOrders.push(order);
            }
          });
        });
      })
    : null;

  console.log(filteredOrders);

  return (
    <Container>
      {filteredOrders.map((order) => {
        return (
    
          <Row style={{ width: "41%" }} key={order.name}>
            <Col key={order.name}></Col>
          </Row>
        );
      })}
    </Container>
  );
}
