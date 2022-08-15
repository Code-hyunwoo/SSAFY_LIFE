import * as React from "react";
import { motion, useTime, useTransform } from "framer-motion";
import "./framer.css";


export default function Rotatemotion() {
  const time = useTime();
  const rotate = useTransform(time, [0, 1500], [0, 360], { clamp: false });

  return (
    <div className="example-container">
      <motion.div style={{ rotate }} />
    </div>
  );
};

