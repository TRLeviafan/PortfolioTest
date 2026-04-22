"use client";

import { GraduationCap, Users, Award, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: GraduationCap,
    title: "Технический инструктор",
    description:
      "Провожу воркшопы и курсы по веб-разработке, геймдеву и основам программирования для студентов разного уровня.",
  },
  {
    icon: Users,
    title: "Программа менторства",
    description:
      "Индивидуальные сессии, помогающие начинающим разработчикам создать первые проекты и подготовиться к карьере в IT.",
  },
  {
    icon: Award,
    title: "Истории успеха учеников",
    description:
      "С гордостью наблюдаю, как мои ученики получают работу в топовых компаниях и запускают собственные успешные проекты.",
  },
  {
    icon: Code2,
    title: "Разработка программ",
    description:
      "Создаю комплексные учебные планы, сочетающие теорию с практическими проектами для максимального усвоения.",
  },
];

const studentProjects = [
  {
    title: "E-Commerce платформа",
    student: "Саша М.",
    tech: "React, Node.js",
    outcome: "Сейчас Frontend-разработчик в стартапе",
  },
  {
    title: "Мобильная игра",
    student: "Алекс К.",
    tech: "Unity, C#",
    outcome: "Опубликована в Play Store",
  },
  {
    title: "IoT метеостанция",
    student: "Джеймс Л.",
    tech: "Arduino, React",
    outcome: "Победитель регионального хакатона",
  },
];

export function Teaching() {
  return (
    <section id="teaching" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Обучение и менторство</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Помогаю новому поколению разработчиков через образование и
            практическое наставничество
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={cn(
                  "glass rounded-2xl p-8 glass-hover group",
                  index === 0 && "md:row-span-2"
                )}
              >
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110",
                    "bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30"
                  )}
                >
                  <Icon className="w-7 h-7 text-indigo-400" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {index === 0 && (
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="text-4xl font-bold gradient-text mb-2">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Учеников за 5 лет
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Student Projects Showcase */}
        <div className="glass rounded-3xl p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Лучшие проекты учеников
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {studentProjects.map((project) => (
              <div
                key={project.title}
                className="glass rounded-xl p-6 glass-hover group"
              >
                <div className="h-32 glass rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-indigo-500/5 to-violet-500/5 group-hover:from-indigo-500/10 group-hover:to-violet-500/10 transition-all duration-300">
                  <Code2 className="w-12 h-12 text-muted-foreground/30 group-hover:text-indigo-400/50 transition-colors" />
                </div>

                <h4 className="font-semibold mb-1">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  by {project.student}
                </p>
                <div className="text-xs text-indigo-400 mb-3">{project.tech}</div>
                <p className="text-sm text-muted-foreground/80 italic">
                  &quot;{project.outcome}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
