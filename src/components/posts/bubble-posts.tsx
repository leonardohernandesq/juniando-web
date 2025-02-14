"use client";

import React from "react";
import ArrowUp from "@/components/icons/arrow-up";

export default function BubblePosts() {
  const bubbleRef = React.useRef<HTMLDivElement | null>(null);

  function scrollTop() {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  React.useEffect(() => {
    function visibilityBubble() {
      if (bubbleRef.current) {
        if (window.scrollY < 10) {
          bubbleRef.current.classList.remove("flex");
          bubbleRef.current.classList.add("hidden");
        } else {
          bubbleRef.current.classList.add("flex");
          bubbleRef.current.classList.remove("hidden");
        }
      }
    }
    window.addEventListener("scroll", visibilityBubble);

    return () => window.removeEventListener("scroll", visibilityBubble);
  }, []);

  return (
    <div
      onClick={scrollTop}
      ref={bubbleRef}
      className="w-10 h-10 bg-bubble-yellow rounded-full items-center justify-center cursor-pointer fixed top-3/4 right-14 z-20 hidden"
      style={{ animation: "bubble 0.7s ease-in" }}
    >
      <ArrowUp />

      <style>
        {`
          @keyframes bubble {
            from {
              transform: translateY(-15px);
            }
            to {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
