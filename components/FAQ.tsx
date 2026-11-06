"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>

          <h2 className="heading">
            Questions?{" "}
            <span className="gradient-text">Let's clarify.</span>
          </h2>

          <p className="section-description">
            A few helpful details about my background, projects, and how to
            get in touch.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {portfolioData.faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article key={item.question} className="card">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span className="font-semibold">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-teal-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="mt-5 border-t border-white/10 pt-5 text-sm leading-7 text-gray-400"
                  >
                    {item.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
