"use client";

import { Briefcase, GraduationCap, Rocket, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    year: "2023 - Настоящее время",
    title: "Senior Software Developer",
    company: "Tech Innovations Inc.",
    description:
      "Руковожу фронтенд-архитектурой и менторю junior-разработчиков. Возглавил миграцию на React 18 и внедрил дизайн-систему.",
    icon: Star,
    type: "work",
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    description:
      "Разрабатывал масштабируемые веб-приложения и RESTful API. Внедрил автоматизированное тестирование, увеличив покрытие кода на 60%.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2020 - 2021",
    title: "Технический преподаватель",
    company: "CodeAcademy Plus",
    description:
      "Разрабатывал и проводил курсы по веб-разработке и геймдеву. Достиг 95% удовлетворённости студентов.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2018 - 2020",
    title: "Junior Developer и Фрилансер",
    company: "Различные клиенты",
    description:
      "Начал профессиональный путь, создавая сайты и небольшие игры для локального бизнеса. Первые шаги в мир технологий.",
    icon: Rocket,
    type: "work",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Опыт работы</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Путь через профессиональный рост и ключевые достижения
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500 opacity-30" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.year}
                  className={cn(
                    "relative flex items-center gap-8",
                    "md:justify-center"
                  )}
                >
                  {/* Content card - alternating sides on desktop */}
                  <div
                    className={cn(
                      "ml-20 md:ml-0 md:w-5/12",
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    )}
                  >
                    <div className="glass rounded-2xl p-6 glass-hover group">
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-2 text-sm text-indigo-400 mb-3">
                        <span className="w-2 h-2 rounded-full bg-indigo-400" />
                        {exp.year}
                      </div>

                      <h3 className="text-xl font-semibold mb-1 group-hover:text-indigo-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground/80 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute left-8 md:left-1/2 -translate-x-1/2",
                      "w-12 h-12 rounded-full glass border-2 border-indigo-500/50",
                      "flex items-center justify-center",
                      "hover:scale-110 hover:border-indigo-400 transition-all duration-300"
                    )}
                  >
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* End cap */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 -bottom-4 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
        </div>
      </div>
    </section>
  );
}
