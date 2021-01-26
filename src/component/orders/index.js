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
    <div class="chart-wrapper">
      <ul class="chart-values">
        <li>sun</li>
        <li>mon</li>
        <li>tue</li>
        <li>wed</li>
        <li>thu</li>
        <li>fri</li>
        <li>sat</li>
      </ul>
      <ul class="chart-bars">
        <li data-duration="tue½-wed" data-color="#b03532">
          Task
        </li>
        <li data-duration="wed-sat" data-color="#33a8a5">
          Task
        </li>
        <li data-duration="sun-tue" data-color="#30997a">
          Task
        </li>
        <li data-duration="tue½-thu" data-color="#6a478f">
          Task
        </li>
        <li data-duration="mon-tue½" data-color="#da6f2b">
          Task
        </li>
        <li data-duration="wed-wed" data-color="#3d8bb1">
          Task
        </li>
        <li data-duration="thu-fri½" data-color="#e03f3f">
          Task
        </li>
        <li data-duration="mon½-wed½" data-color="#59a627">
          Task
        </li>
        <li data-duration="fri-sat" data-color="#4464a1">
          Task
        </li>
      </ul>
    </div>
  );
}
