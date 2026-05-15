


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import GithubContributions from "@/app/ui/dashboard/githubContribution";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Intro Animation
      const tl = gsap.timeline();

      tl.from(heroRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })
        .from(
          titleRef.current,
          {
            y: 120,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=1"
        )
        .from(
          subtitleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          buttonRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );

      // Scroll Animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Background Parallax
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          scrub: true,
        },
        scale: 1.1,
        y: 100,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
      >
        {/* Background */}
        <div className="hero-bg absolute inset-0">
          {/* <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-40"/> */}

        <Image
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop"
        className="dark:invert object-cover opacity-40"
        alt="Hero Image"
        // width={100}
        // height={100}
        fill={true}
        priority
        >
        </Image>
            
          
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-black tracking-tight leading-none"
          >
            Future of
            <br />
            Digital Experience
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Cinematic storytelling powered by Next.js and GSAP animations.
          </p>

          <button
            ref={buttonRef}
            className="mt-10 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform"
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section
        ref={sectionRef}
        className="min-h-screen py-32 px-6 md:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-20">
            Why It Feels Premium
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10">
              <h3 className="text-3xl font-bold mb-4">Smooth Motion</h3>
              <p className="text-gray-300">
                Ultra-fluid animations with cinematic transitions.
              </p>
            </div>

            <div className="feature-card p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10">
              <h3 className="text-3xl font-bold mb-4">Scroll Storytelling</h3>
              <p className="text-gray-300">
                Engage users with immersive scroll experiences.
              </p>
            </div>

            <div className="feature-card p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10">
              <h3 className="text-3xl font-bold mb-4">Modern Design</h3>
              <p className="text-gray-300">
                Clean UI inspired by Apple-style product websites.
              </p>
            </div>
              
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 text-center px-6">
        <h2 className="text-5xl md:text-7xl font-black max-w-4xl mx-auto leading-tight">
          Build Experiences That Feel Alive
        </h2>

        <button className="mt-10 px-10 py-5 rounded-full bg-white text-black text-xl font-bold hover:scale-105 transition-transform">
          Start Building
        </button>
      </section>
      {/* <GithubContributions/> */}
    </main>
  );
}


