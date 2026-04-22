"use client";

import { Hero } from "@/components/portfolio/hero";
import { TechStack } from "@/components/portfolio/tech-stack";
import { Projects } from "@/components/portfolio/projects";
import { Teaching } from "@/components/portfolio/teaching";
import { Experience } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { Navbar } from "@/components/portfolio/navbar";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Teaching />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
