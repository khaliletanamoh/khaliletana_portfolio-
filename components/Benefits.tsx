
import {
  CheckCircle2,
  ArrowUpRight,
  Lightbulb,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

export default function Benefits() {
  return (
    <section className="section bg-[#0d121c]">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">WHY WORK WITH ME</p>

            <h2 className="heading">
              A mindset focused on
              <span className="gradient-text"> meaningful solutions.</span>
            </h2>

            <p className="section-description">
              I value systematic thinking, practical implementation,
              creativity, and continuous improvement. My goal is to
              connect engineering knowledge with technology to explore
              solutions that address real needs.
            </p>

            <a
              href="#contact"
              className="btn btn-primary mt-8"
            >
              Let's Connect
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="card">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-xl bg-blue-500/10 p-3">
                <Lightbulb
                  size={27}
                  className="text-teal-400"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  What I Bring
                </h3>

                <p className="text-sm text-gray-500">
                  My professional approach
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {portfolioData.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-teal-400"
                  />

                  <p className="text-sm leading-6 text-gray-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 border-t border-white/10 pt-6">
              <p className="text-sm font-medium leading-7 text-gray-400">
                Think systematically. Build creatively. Solve practically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
