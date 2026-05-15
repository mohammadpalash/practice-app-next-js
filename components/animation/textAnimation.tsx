"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function TextAnimation() {
  useEffect(() => {
    gsap.from(".word", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
    });
  }, []);

  return (
    <h1 className="text-5xl font-bold flex gap-3">
      <span className="word">Modern</span>
      <span className="word">Next.js</span>
      <span className="word">Website</span>
    </h1>
  );
}