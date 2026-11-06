import {
  Search,
  ClipboardList,
  Code2,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

const processIcons = [
  Search,
  ClipboardList,
  Code2,
  RefreshCw,
];

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">HOW I WORK</p>

          <h2 className="heading">
            From a challenge to a
            <span className="gradient-text"> practical solution.</span>
          </h2>

          <p className="section-description">
            A structured approach helps me understand problems,
            organize ideas, build solutions, and continuously improve
            the results.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.process.map((step, index) => {
            const Icon = processIcons[index] || Search;

            return (
              <article key={step.number} className="card relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-teal-400">
                    {step.number}
                  </span>

                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-blue-400"
                  />
                </div>

                <h3 className="mt-9 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>

                {index !== portfolioData.process.length - 1 && (
                  <ArrowRight
                    size={17}
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-teal-400 lg:block"
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
