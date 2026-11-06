import {
  Github,
  Linkedin,
  ArrowUpRight,
  Mail,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight"
            >
              Khalil <span className="text-teal-400">Etana</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Industrial Engineer and Full-Stack Web Developer
              combining engineering thinking with technology to
              create practical digital solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-3 text-sm text-gray-400"
            >
              <a href="#home" className="hover:text-teal-400">
                Home
              </a>

              <a href="#about" className="hover:text-teal-400">
                About
              </a>

              <a href="#projects" className="hover:text-teal-400">
                Projects
              </a>

              <a href="#experience" className="hover:text-teal-400">
                Experience
              </a>

              <a href="#contact" className="hover:text-teal-400">
                Contact
              </a>
            </nav>
          </div>

          {/* Social links */}
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-teal-400"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-teal-400"
              >
                <Linkedin size={17} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 hover:text-teal-400"
              >
                <Mail size={17} />
                Email
              </a>

              <a
                href={personal.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-teal-400"
              >
                ORCID
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>
            © {currentYear} Khalil Etana. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-teal-400"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
