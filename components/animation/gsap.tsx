"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section() {
  useEffect(() => {
    gsap.from(".box", {
      scrollTrigger: ".box",
      y: 100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="box h-40 w-full bg-blue-500"></div>
  );
}