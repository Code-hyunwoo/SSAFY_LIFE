import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./Item";
import "./framer2.css";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function Listorder() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group id="reorder" axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Item className="order_item" key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}
