"use client";

import React, { useEffect } from "react";
import gsap from "gsap";



export default function TextAnimation({
  children,
}: {
  children: React.ReactNode;
})   {
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
      {children}
    </h1>
  );
}