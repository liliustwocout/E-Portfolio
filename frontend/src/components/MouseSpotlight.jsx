import React, { useEffect, useState } from "react";

export default function MouseSpotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handlePointerOver = (e) => {
      if (e.target.closest("button, a, input, textarea, [role='button']")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-1 overflow-hidden transition-opacity duration-500"
      style={{
        background: `radial-gradient(${
          isHovered ? "420px" : "320px"
        } circle at ${pos.x}px ${pos.y}px, rgba(0, 240, 255, 0.07), rgba(147, 51, 234, 0.04) 50%, transparent 80%)`,
      }}
    />
  );
}
