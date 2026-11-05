import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import CopyButton from "@/components/CopyButton";

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
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.text,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | Khalil Etana`,
      description: project.text,
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

  if (!project) notFound();

  const copyText = [
    project.title,
    project.text,
    `Technologies: ${project.tags.join(", ")}`,
  ].join("\n\n");

  return (
    <main className="mx-auto max-w-2xl space-y-8 px-5 py-16 sm:py-24">
      <Link
        href="/"
        className="text-sm underline decoration-line underline-offset-4 hover:text-accent"
      >
        ← Back to portfolio
      </Link>

      <article>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <CopyButton text={copyText} />
        </div>

        <p className="mt-4 text-lg text-muted">
          {project.text}
        </p>

        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            width={1200}
            height={750}
            priority
            className="mt-8 aspect-[16/10] w-full rounded-md border border-line object-cover object-top"
          />
        )}

        <h2 className="mt-8 text-xl font-semibold">
          Technologies
        </h2>

        <p className="mt-2 text-muted">
          {project.tags.join(", ")}
        </p>
      </article>
    </main>
  );
}
