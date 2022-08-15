import "./framer.css";
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function Rectangle() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 600;
    const y = (1 + Math.sin(t / 1000)) * -200;
    const x = (1 + Math.sin(t / 1000)) * 100;
    ref.current.style.transform = `translateX(${x}px) translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="rec_body">
        <div className="rec_container">
        <div className="cube" ref={ref}>
            <div className="side front" />
            <div className="side left" />
            <div className="side right" />
            <div className="side top" />
            <div className="side bottom" />
            <div className="side back" />
        </div>
        </div>
    </div>
  );
}