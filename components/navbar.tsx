
"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#080b12]/90 backdrop-blur-xl">
      <nav className="container flex h-20 items-center justify-between">
        <a
          href="#home"
          className="font-bold tracking-tight text-xl"
          aria-label="Khalil Etana homepage"
          onClick={() => setIsOpen(false)}
        >
          KHALIL<span className="text-teal-400">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition hover:text-teal-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn btn-primary hidden lg:inline-flex"
        >
          Let's Talk <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#080b12] px-6 py-6 lg:hidden"
        >
          <div className="container flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-300 transition hover:text-teal-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href={`mailto:${portfolioData.personal.email}`}
              onClick={() => setIsOpen(false)}
              className="btn btn-primary mt-2"
            >
              Contact Me <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
