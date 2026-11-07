
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { site } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="section bg-[#0d121c]">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>

          <h2 className="heading">
            Projects built through
            <span className="gradient-text">
              {" "}curiosity and practice.
            </span>
          </h2>

          <p className="section-description">
            A selection of personal projects that reflect my interest
            in engineering, software development, and practical digital
            solutions.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {site.projects.map((project, index) => {
            const isGitHub = project.href.includes("github.com");

            return (
              <article
                key={project.title}
                className="card group overflow-hidden p-0"
              >
                {/* Project image */}
                <div className="relative h-[250px] overflow-hidden border-b border-white/10 bg-[#101a2b]">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    PROJECT 0{index + 1}
                  </span>
                </div>

                {/* Project details */}
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
                    {project.text}
                  </p>

                  {project.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((technology) => (
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
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition hover:gap-3"
                  >
                    {isGitHub
                      ? "View Repository"
                      : "Visit Project"}
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
