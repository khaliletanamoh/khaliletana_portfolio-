
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section bg-[#0d121c]">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>

          <h2 className="heading">
            Projects built through
            <span className="gradient-text"> curiosity and practice.</span>
          </h2>

          <p className="section-description">
            A selection of personal projects that reflect my interest
            in engineering, software development, and practical digital
            solutions.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {portfolioData.projects.map((project) => {
            const isGitHub = project.link.includes("github.com");

            return (
              <article
                key={project.number}
                className="card group overflow-hidden p-0"
              >
                <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#17243a] via-[#101a2b] to-[#0b101a]">
                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                  <span className="relative font-[var(--font-space)] text-8xl font-bold tracking-tighter text-white/10 transition duration-500 group-hover:scale-110">
                    {project.number}
                  </span>

                  <span className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-widest text-teal-400">
                    {project.category}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>

                    {isGitHub ? (
                      <Github
                        size={21}
                        className="shrink-0 text-gray-400"
                      />
                    ) : (
                      <ExternalLink
                        size={21}
                        className="shrink-0 text-gray-400"
                      />
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {project.technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition hover:gap-3"
                  >
                    {isGitHub ? "View Repository" : "Visit Live Project"}
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
