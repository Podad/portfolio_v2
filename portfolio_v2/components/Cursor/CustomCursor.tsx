"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const HOVERABLE_ELEMENTS = ["A", "BUTTON"];
const HOVER_CLASS = "cursor-hover";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((mouse: MouseEvent) => {
    const target = mouse.target as HTMLElement;
    const shouldHover =
      HOVERABLE_ELEMENTS.includes(target.tagName) ||
      target.classList.contains(HOVER_CLASS);
    setIsHovering(shouldHover);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleMouseMove, handleMouseOver]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 border-2 border-[#00d4ff] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.2,
        }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#00d4ff] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  );
}
