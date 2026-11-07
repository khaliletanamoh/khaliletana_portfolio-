
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import CopyButton from "@/app/component/CopyButton";

type Props = {
  params: Promise<{ slug: string }>;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return site.projects.map((project) => ({
    slug: slugify(project.title),
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = site.projects.find(
    (item) => slugify(item.title) === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Khalil Etana",
    };
  }

  return {
    title: `${project.title} | Khalil Etana`,
    description: project.text,
    alternates: {
      canonical: `/product/${slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | Khalil Etana`,
      description: project.text,
      url: `https://khaliletanamoh.com/product/${slug}`,
      images: project.image
        ? [project.image]
        : ["/og-image.png"],
    },
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = site.projects.find(
    (item) => slugify(item.title) === slug
  );

  if (!project) {
    notFound();
  }

  const isGitHub = project.href.includes("github.com");

  const copyText = [
    project.title,
    project.text,
    `Technologies: ${project.tags.join(", ")}`,
    `Project link: ${project.href}`,
  ].join("\n\n");

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-5 py-16 sm:py-24">

      {/* Back navigation */}
      <Link
        href="/#projects"
        className="inline-flex items-center text-sm underline underline-offset-4 transition hover:text-accent"
      >
        ← Back to Projects
      </Link>

      {/* Project content */}
      <article>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
              PROJECT DETAILS
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
          </div>

          <CopyButton text={copyText} />
        </div>

        <p className="mt-5 text-lg leading-8 text-muted">
          {project.text}
        </p>

        {/* Project image */}
        {project.image && (
          <div className="mt-8 overflow-hidden rounded-xl border border-line">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              width={1200}
              height={750}
              priority
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>
        )}

        {/* Technologies */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">
            Technologies Used
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-4 py-2 text-sm text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* External project link */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">
            Explore This Project
          </h2>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
          >
            {isGitHub ? "View GitHub Repository" : "Visit Live Project"}
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </article>

      {/* Footer navigation */}
      <div className="border-t border-line pt-8">
        <Link
          href="/#projects"
          className="text-sm font-semibold text-teal-400 transition hover:underline"
        >
          ← Explore More Projects
        </Link>
      </div>

    </main>
  );
}
