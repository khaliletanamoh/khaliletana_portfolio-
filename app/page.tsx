import Image from "next/image";
import { site } from "@/data/site";

const BLOG = "https://khalilettanamoh.blogspot.com";

const h2 = "mb-6 text-2xl font-semibold tracking-tight";

const ext = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

type Post = {
  title: string;
  url: string;
  date: string;
};

async function getPosts(limit = 3): Promise<Post[]> {
  try {
    const response = await fetch(
      `${BLOG}/feeds/posts/default?alt=json&max-results=${limit}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    const entries = data?.feed?.entry ?? [];

    return entries.map((entry: any) => ({
      title: entry.title?.$t ?? "Untitled",
      url:
        entry.link?.find(
          (link: any) => link.rel === "alternate"
        )?.href ?? BLOG,
      date: (entry.published?.$t ?? "").slice(0, 10),
    }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-2xl space-y-20 px-5 py-16 sm:py-24">
      {/* Profile and introduction */}
      <header className="text-center">
        {site.photo && (
          <Image
            src={site.photo}
            alt={site.name}
            width={160}
            height={160}
            priority
            className="mx-auto mb-6 h-28 w-28 rounded-full border border-line object-cover sm:h-36 sm:w-36"
          />
        )}

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m {site.name}.
        </h1>

        <p className="mt-3 text-lg text-muted">
          {site.role}
        </p>

        <p className="mx-auto mt-6 max-w-prose">
          {site.bio}
        </p>

        <nav
          className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3"
          aria-label="Social links"
        >
          {site.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...ext}
              className="underline decoration-line underline-offset-4 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Skills and technology stack */}
      <section id="stack">
        <h2 className={h2}>Stack</h2>

        <dl className="space-y-3">
          {Object.entries(site.stack).map(([group, items]) => (
            <div
              key={group}
              className="flex flex-col gap-1 sm:flex-row sm:gap-6"
            >
              <dt className="w-24 shrink-0 text-muted">
                {group}
              </dt>

              <dd>{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className={h2}>Projects</h2>

        <ul className="space-y-10">
          {site.projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                {...ext}
                className="group block"
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={1200}
                    height={750}
                    className="mb-4 aspect-[16/10] w-full rounded-md border border-line object-cover object-top"
                  />
                )}

                <h3 className="text-lg font-semibold group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mt-1">{project.text}</p>

                <p className="mt-2 text-sm text-muted">
                  {project.tags.join(", ")}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* YouTube latest uploads */}
      <section id="youtube">
        <h2 className={h2}>YouTube Videos</h2>

        <p className="mb-6 text-muted">
          Explore my latest tutorials on web development,
          technology, and engineering.
        </p>

        <div className="aspect-video overflow-hidden rounded-xl border border-line">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/videoseries?list=UU05RqE0qSJojlOcxrX7r4cw"
            title="Khalil Etana Tech - Latest YouTube Uploads"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <a
          href="https://www.youtube.com/@khaliletanatech"
          {...ext}
          className="mt-5 inline-block rounded-lg border border-line px-5 py-3 font-medium hover:text-accent"
        >
          Subscribe on YouTube →
        </a>
      </section>

      {/* Latest blog posts */}
      <section id="blog">
        <h2 className={h2}>Latest from the blog</h2>

        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.url}>
                <a
                  href={post.url}
                  {...ext}
                  className="group block"
                >
                  <h3 className="font-semibold group-hover:text-accent">
                    {post.title}
                  </h3>

                  {post.date && (
                    <p className="text-sm text-muted">
                      {new Date(
                        `${post.date}T12:00:00`
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">
            Read my notes on engineering and technology on the{" "}
            <a
              href={BLOG}
              {...ext}
              className="text-accent underline underline-offset-4"
            >
              blog
            </a>.
          </p>
        )}
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className={h2}>Experience</h2>

        <ol className="space-y-6 border-l border-line pl-5">
          {site.experience.map((item) => (
            <li key={item.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                {item.period && (
                  <span className="text-sm text-muted">
                    {item.period}
                  </span>
                )}
              </div>

              <p className="mt-1 text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Achievements */}
      <section id="achievements">
        <h2 className={h2}>Achievements</h2>

        <ul className="space-y-4">
          {site.achievements.map((item) => (
            <li key={item.title}>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact and footer */}
      <footer className="border-t border-line pt-8">
        <h2 className={h2}>Want to work together?</h2>

        <a
          href={`mailto:${site.email}`}
          className="break-words text-xl text-accent underline underline-offset-4"
        >
          {site.email}
        </a>

        <p className="mt-10 text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </footer>
    </main>
  );
              }
