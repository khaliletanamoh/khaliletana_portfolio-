
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal, hero } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="animate-fade-up">
            <p className="eyebrow">{hero.eyebrow}</p>

            <h1 className="heading max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
              {personal.name}
              <br />
              <span className="gradient-text">
                {hero.title}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              {hero.description}
            </p>

            <p className="mt-5 text-sm font-medium text-gray-300">
              {personal.role}
              <span className="mx-3 text-teal-400">/</span>
              {personal.location}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">
                {hero.primaryButton}
                <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="btn btn-outline">
                {hero.secondaryButton}
                <Mail size={17} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <span className="text-xs uppercase tracking-widest text-gray-500">
                Connect
              </span>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-400 transition hover:text-white"
              >
                <Github size={20} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-400 transition hover:text-white"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Send email"
                className="text-gray-400 transition hover:text-teal-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Visual identity panel */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-blue-500/20 to-teal-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101622] p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
                  Personal Portfolio
                </span>

                <span className="h-2 w-2 rounded-full bg-teal-400" />
              </div>

              <div className="my-14">
                <p className="font-[var(--font-space)] text-8xl font-bold tracking-tighter text-white/10">
                  KE
                </p>

                <h2 className="mt-5 text-3xl font-bold">
                  Engineering
                  <br />
                  <span className="gradient-text">Meets Technology.</span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  Combining systematic thinking, creativity, and technology
                  to explore practical solutions.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Based in</span>
                  <span className="text-gray-200">{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="mt-20 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 transition hover:text-teal-400"
        >
          Discover more
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
