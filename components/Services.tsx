
import {
  Code2,
  Settings,
  Lightbulb,
  Brain,
  ArrowUpRight,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

const icons = [
  Code2,
  Settings,
  Lightbulb,
  Brain,
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">WHAT I DO</p>

          <h2 className="heading">
            Combining ideas with
            <span className="gradient-text"> practical solutions.</span>
          </h2>

          <p className="section-description">
            I bring together engineering principles and technology to
            explore useful solutions, improve experiences, and solve
            practical challenges.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {portfolioData.services.map((service, index) => {
            const Icon = icons[index] || Lightbulb;

            return (
              <article
                key={service.number}
                className="card group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-teal-400">
                    {service.number}
                  </span>

                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="text-blue-400 transition group-hover:text-teal-400"
                  />
                </div>

                <h3 className="mt-10 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition hover:gap-3"
                >
                  Discuss a project
                  <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
