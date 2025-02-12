"use client";

import React from "react";
import ArrowUp from "../icons/arrow-up";

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
          bubbleRef.current.classList.add("opacity-0");
        } else {
          bubbleRef.current.classList.remove("opacity-0");
        }
      }
    }
    window.addEventListener("scroll", visibilityBubble);

    return () => window.removeEventListener("scroll", visibilityBubble);
  }, [bubbleRef]);

  return (
    <div
      onClick={scrollTop}
      ref={bubbleRef}
      className="w-10 h-10 bg-[#FBC139] rounded-full flex items-center justify-center cursor-pointer fixed top-0 opacity-0"
    >
      <ArrowUp />
    </div>
  );
}
