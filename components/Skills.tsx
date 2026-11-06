
import {
  Settings,
  Code2,
  Brain,
  ArrowUpRight,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

const skillIcons = [
  Settings,
  Code2,
  Brain,
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MY CAPABILITIES</p>

          <h2 className="heading">
            Knowledge shaped by
            <span className="gradient-text"> learning and practice.</span>
          </h2>

          <p className="section-description">
            My skills reflect the connection between engineering
            knowledge, software development, and continuous personal
            growth.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {portfolioData.skills.map((group, index) => {
            const Icon = skillIcons[index] || Brain;

            return (
              <article key={group.title} className="card">
                <div className="flex items-center justify-between">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-teal-400"
                  />

                  <span className="text-xs font-bold tracking-widest text-gray-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold">
                  {group.title}
                </h3>

                <div className="mt-6 space-y-4">
                  {group.items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 border-b border-white/5 pb-3 text-sm text-gray-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {skill}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:gap-3"
        >
          Discuss my capabilities
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
