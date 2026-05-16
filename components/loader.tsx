"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import DrawN from "./drawN";



export default function Loader({ children, }: {
    children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".loader-text", {
      opacity: 0,
      y: 40,
      duration: 1,
    });

    setTimeout(() => {
      gsap.to(".loader", {
        opacity: 0,
        duration: 1,
        onComplete: () => setLoading(false),
      });
    }, 2500);
  }, []);

  if (loading) {
    return (
      <div className="loader fixed inset-0 bg-black flex items-center justify-center z-9999">
        {/* <h1 className="loader-text text-white text-5xl font-black tracking-widest">
          PLEASE WAIT...
        </h1> */}
        <DrawN/>
      </div>
    );
  }

  return children;
}