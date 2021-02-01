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

  const data = trucksOrders ? trucksOrders : null;

  console.log(data);
  // const filteredOrders = [];
  // const findOrder = trucksOrders
  //   ? trucksOrders.map((truckOrder) => {
  //       return truckOrder.map((item) => {
  //         return orders.map((order) => {
  //           if (order.id === item) {
  //             return filteredOrders.push(order);
  //           }
  //         });
  //       });
  //     })
  //   : null;

  // const dateFrom = filteredOrders.map((order) => {
  //   return order.from;
  // });

  // var orderedDatesFrom = dateFrom.sort(function (a, b) {
  //   return Date.parse(a) - Date.parse(b);
  // });
  // console.log(orderedDatesFrom[0]);

  // const dateTo = filteredOrders.map((order) => {
  //   return order.to;
  // });

  // var orderedDatesTo = dateTo.sort(function (a, b) {
  //   return Date.parse(a) - Date.parse(b);
  // });

  // const last_order = orderedDatesTo[orderedDatesTo.length -1]
  // console.log(last_order);

  return (
    <div>
      <div></div>
    </div>
  );
}
