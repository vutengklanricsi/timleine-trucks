import React from "react";
import "./styles/orders.css";
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
    <div>
      <div>
        {filteredOrders.map((order) => {
          return (
            <div>
              <div key={order.name}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
