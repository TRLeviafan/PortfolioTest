"use client";

import { useState } from "react";
import { ExternalLink, Github, Gamepad2, BookOpen, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Lair",
    subtitle: "Премиум читалка манги и новелл",
    description:
      "Красиво оформленное приложение для чтения с потрясающим glassmorphism UI. Lair предлагает удобную навигацию по главам, офлайн-чтение, настраиваемые темы и среду для чтения без отвлечений для любителей манги и ранобэ.",
    tags: ["React", "TypeScript", "Tailwind CSS", "PWA"],
    icon: BookOpen,
    color: "from-violet-500 to-indigo-600",
    featured: true,
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Echoes of Eternity",
    subtitle: "Action RPG игра",
    description:
      "Захватывающая action RPG на Unity с процедурно генерируемыми подземельями, боевой системой в реальном времени и оригинальным саундтреком. Создана с кастомными шейдерами и оптимизирована для ПК и мобильных платформ.",
    tags: ["Unity", "C#", "Shader Graph", "Procedural Generation"],
    icon: Gamepad2,
    color: "from-amber-500 to-orange-600",
    featured: true,
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "DevHub API",
    subtitle: "Бэкенд для платформы разработчиков",
    description:
      "Мощный бэкенд-сервис на Node.js для платформы совместной разработки. Включает уведомления в реальном времени, OAuth интеграцию, rate limiting и полную документацию API.",
    tags: ["Node.js", "Express", "MySQL", "Redis", "Docker"],
    icon: Layers,
    color: "from-emerald-500 to-teal-600",
    featured: false,
    links: {
      github: "#",
    },
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Избранные проекты</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Подборка проектов, демонстрирующих мой опыт в различных областях
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => {
            const Icon = project.icon;
            const isHovered = hoveredId === project.id;

            return (
              <div
                key={project.id}
                className={cn(
                  "glass rounded-3xl overflow-hidden glass-hover transition-all duration-500",
                  isHovered && "glow"
                )}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Visual Section */}
                  <div
                    className={cn(
                      "md:col-span-2 relative min-h-[200px] md:min-h-[300px] overflow-hidden",
                      "bg-gradient-to-br",
                      project.color
                    )}
                  >
                    {/* Glassmorphism preview for Lair */}
                    {project.id === 1 && (
                      <div className="absolute inset-0 p-6 flex items-center justify-center">
                        <div className="w-full max-w-[240px] space-y-3">
                          {/* Mock UI elements */}
                          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                            <div className="h-2 w-3/4 bg-white/30 rounded mb-2" />
                            <div className="h-2 w-1/2 bg-white/20 rounded" />
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20">
                              <div className="h-20 bg-white/20 rounded mb-2" />
                              <div className="h-2 w-full bg-white/30 rounded" />
                            </div>
                            <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20">
                              <div className="h-20 bg-white/20 rounded mb-2" />
                              <div className="h-2 w-full bg-white/30 rounded" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Game preview for Unity project */}
                    {project.id === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <Gamepad2 className="w-24 h-24 text-white/30" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-white/20 rounded-full animate-ping" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* API preview */}
                    {project.id === 3 && (
                      <div className="absolute inset-0 p-6 flex items-center justify-center">
                        <div className="font-mono text-xs text-white/70 bg-black/20 rounded-lg p-4 backdrop-blur">
                          <div className="text-emerald-300">
                            {"GET /api/v1/users"}
                          </div>
                          <div className="text-white/50 mt-2">
                            {"{"} &quot;status&quot;: 200, ...{"}"}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Icon overlay */}
                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-center">
                    {project.featured && (
                      <span className="text-xs font-medium text-indigo-400 mb-2 uppercase tracking-wider">
                        Избранный проект
                      </span>
                    )}

                    <h3 className="text-2xl md:text-3xl font-bold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 glass rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.links.live && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 border-0"
                        >
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Демо
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="glass glass-hover border-white/20"
                        >
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Код
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
