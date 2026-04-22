"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const technologies = [
  {
    name: "React",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
    description: "Создание динамичных интерфейсов с современными паттернами",
    category: "Фронтенд",
  },
  {
    name: "Unity",
    icon: "🎮",
    color: "from-gray-400 to-gray-600",
    description: "Разработка игр и интерактивных приложений",
    category: "Геймдев",
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "from-green-400 to-emerald-500",
    description: "Масштабируемые бэкенд-сервисы и API",
    category: "Бэкенд",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    color: "from-orange-400 to-amber-500",
    description: "Проектирование и оптимизация баз данных",
    category: "База данных",
  },
  {
    name: "Tailwind",
    icon: "🎨",
    color: "from-teal-400 to-cyan-500",
    description: "Быстрая разработка UI с utility-first CSS",
    category: "Фронтенд",
  },
  {
    name: "Arduino",
    icon: "🔌",
    color: "from-blue-400 to-indigo-500",
    description: "IoT-прототипирование и работа с железом",
    category: "Железо",
  },
];

export function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="tech" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Технологии</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Универсальный набор инструментов от веб-разработки до
            прототипирования железа
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={cn(
                "glass rounded-2xl p-6 glass-hover cursor-pointer group relative overflow-hidden",
                hoveredIndex === index && "glow-accent"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                  tech.color
                )}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold mb-1 group-hover:text-foreground transition-colors">
                  {tech.name}
                </h3>

                {/* Category badge */}
                <span className="text-xs text-muted-foreground/70 glass px-2 py-1 rounded-full inline-block mb-3">
                  {tech.category}
                </span>

                {/* Description - shows on hover */}
                <p
                  className={cn(
                    "text-sm text-muted-foreground transition-all duration-300",
                    hoveredIndex === index
                      ? "opacity-100 max-h-20"
                      : "opacity-0 max-h-0 overflow-hidden"
                  )}
                >
                  {tech.description}
                </p>
              </div>

              {/* Corner accent */}
              <div
                className={cn(
                  "absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-bl rounded-bl-full",
                  tech.color
                )}
                style={{ filter: "blur(20px)" }}
              />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[
            { label: "Лет опыта", value: "5+" },
            { label: "Проектов выполнено", value: "50+" },
            { label: "Учеников обучено", value: "100+" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
