
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section bg-[#0d121c]">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MY JOURNEY</p>

          <h2 className="heading">
            Building solutions through
            <span className="gradient-text"> engineering and technology.</span>
          </h2>

          <p className="section-description">
            My journey combines Industrial Engineering, software
            development, and continuous learning. I focus on transforming
            ideas into practical digital solutions while developing my
            technical and problem-solving abilities.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <div className="mb-9 flex items-center gap-3">
            <BriefcaseBusiness className="text-teal-400" size={23} />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>

          <div className="space-y-6">
            {portfolioData.experience.map((item, index) => (
              <article
                key={item.role}
                className="card relative"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                      0{index + 1} / {item.period}
                    </span>

                    <h4 className="mt-3 text-xl font-bold">
                      {item.role}
                    </h4>

                    <p className="mt-1 text-sm text-blue-400">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm font-semibold text-teal-400">
            My Approach: Think systematically. Build creatively. Solve practically.
          </p>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="text-teal-400" size={24} />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {portfolioData.education.map((item) => (
              <article key={item.institution} className="card">
                <BookOpen size={25} className="text-blue-400" />

                <h4 className="mt-5 text-lg font-bold">
                  {item.qualification}
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  {item.institution}
                </p>

                <p className="mt-4 text-xs text-teal-400">
                  {item.period}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <Award className="text-teal-400" size={24} />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {portfolioData.certifications.map((certificate, index) => (
              <article key={certificate.credentialUrl} className="card">
                <span className="text-xs font-bold text-teal-400">
                  CERTIFICATE 0{index + 1}
                </span>

                <h4 className="mt-5 text-lg font-bold">
                  {certificate.title}
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  {certificate.provider}
                </p>

                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:gap-3"
                >
                  Verify Certificate
                  <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
