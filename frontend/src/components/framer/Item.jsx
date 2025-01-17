import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";
import { ReorderIcon } from "./Icon";



export const Item = ({ item }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      className="order_item2"
      value={item}
      id={item}
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
    >
      <span>{item}</span>
      <ReorderIcon dragControls={dragControls} />
    </Reorder.Item>
  );
};
