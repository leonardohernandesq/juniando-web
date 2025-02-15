"use client";

import { useState, useEffect } from "react";
import ArrowUp from "@/components/icons/arrow-up";

export default function BubblePosts() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY >= 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={scrollTop}
      className={`w-10 h-10 bg-bubble-yellow rounded-full flex items-center justify-center cursor-pointer fixed top-3/4 right-14 z-20 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp />
    </div>
  );
}
