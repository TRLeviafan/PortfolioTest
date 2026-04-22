"use client";

import { useState } from "react";
import { Send, Github, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{"Свяжитесь со мной"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Есть проект или хотите сотрудничать? Буду рад услышать вас.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Связаться</h3>

              <div className="space-y-6">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Почта</div>
                    <div className="font-medium group-hover:text-indigo-400 transition-colors">
                      hello@example.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Локация</div>
                    <div className="font-medium">Москва, Россия</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-sm text-muted-foreground mb-4">
                  Подписывайтесь
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center glass-hover group"
                  >
                    <Github className="w-5 h-5 group-hover:text-foreground transition-colors" />
                  </a>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center glass-hover group"
                  >
                    <Send className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative card */}
            <div className="glass rounded-3xl p-8 bg-gradient-to-br from-indigo-500/10 to-violet-500/10">
              <Sparkles className="w-8 h-8 text-indigo-400 mb-4" />
              <h4 className="text-lg font-semibold mb-2">
                Открыт для возможностей
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Принимаю фриланс-проекты и предложения о работе.
                Давайте создадим что-то крутое вместе!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className={cn(
                    "w-full px-4 py-3 rounded-xl glass border border-white/10",
                    "bg-white/5 focus:bg-white/10 focus:border-indigo-500/50",
                    "outline-none transition-all duration-300",
                    "placeholder:text-muted-foreground/50"
                  )}
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Почта
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className={cn(
                    "w-full px-4 py-3 rounded-xl glass border border-white/10",
                    "bg-white/5 focus:bg-white/10 focus:border-indigo-500/50",
                    "outline-none transition-all duration-300",
                    "placeholder:text-muted-foreground/50"
                  )}
                  placeholder="ваша.почта@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl glass border border-white/10",
                    "bg-white/5 focus:bg-white/10 focus:border-indigo-500/50",
                    "outline-none transition-all duration-300 resize-none",
                    "placeholder:text-muted-foreground/50"
                  )}
                  placeholder="Расскажите о вашем проекте..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-6 rounded-xl font-medium",
                  "bg-gradient-to-r from-indigo-500 to-violet-500",
                  "hover:from-indigo-600 hover:to-violet-600",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "transition-all duration-300"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Отправка...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Отправлено!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Отправить
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-white/10 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Портфолио. Создано с{" "}
            <span className="gradient-text">React</span> и{" "}
            <span className="gradient-text">Tailwind CSS</span>
          </p>
        </footer>
      </div>
    </section>
  );
}
