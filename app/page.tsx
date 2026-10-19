import Image from "next/image";
import { site } from "@/data/site";

const BLOG = "https://khalilettanamoh.blogspot.com";
const h2 = "mb-6 text-2xl font-semibold tracking-tight";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

type Post = { title: string; url: string; date: string };

async function getPosts(limit = 3): Promise<Post[]> {
  try {
    const res = await fetch(
      `${BLOG}/feeds/posts/default?alt=json&max-results=${limit}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data = await res.json();
    const entries = data?.feed?.entry ?? [];

    return entries.map((e: any) => ({
      title: e.title?.$t ?? "Untitled",
      url:
        e.link?.find((l: any) => l.rel === "alternate")?.href ??
        BLOG,
      date: (e.published?.$t ?? "").slice(0, 10),
    }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-2xl space-y-20 px-5 py-16 sm:py-24">
      <header>
        {site.photo && (
          <Image
            src={site.photo}
            alt={site.name}
            width={160}
            height={160}
            priority
            className="mb-6 h-28 w-28 rounded-full border border-line object-cover sm:h-36 sm:w-36"
          />
        )}

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m {site.name}.
        </h1>

        <p className="mt-2 text-xl text-muted">{site.role}</p>
        <p className="mt-6 max-w-prose">{site.bio}</p>

        <nav
          className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
          aria-label="Social links"
        >
          {site.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...ext}
              className="underline decoration-line underline-offset-4 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <section>
        <h2 className={h2}>Stack</h2>
        <dl className="space-y-3">
          {Object.entries(site.stack).map(([group, items]) => (
            <div
              key={group}
              className="flex flex-col gap-1 sm:flex-row sm:gap-6"
            >
              <dt className="w-24 shrink-0 text-muted">{group}</dt>
              <dd>{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className={h2}>Projects</h2>
        <ul className="space-y-10">
          {site.projects.map((p) => (
            <li key={p.title}>
              <a href={p.href} {...ext} className="group block">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    width={1200}
                    height={750}
                    className="mb-4 aspect-[16/10] w-full rounded-md border border-line object-cover object-top"
                  />
                )}

                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold group-hover:text-accent">
                    {p.title}
                  </h3>
                  <span className="text-sm text-muted">{p.period}</span>
                </div>

                <p className="mt-1">{p.text}</p>
                <p className="mt-1 text-sm text-muted">
                  {p.tags.join(", ")}
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
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-lg border border-line px-5 py-3 font-medium hover:text-accent"
        >
          Subscribe on YouTube →
        </a>
      </section>

      <section>
        <h2 className={h2}>Latest from the blog</h2>

        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map((p) => (
              <li key={p.url}>
                <a href={p.url} {...ext} className="group block">
                  <h3 className="font-semibold group-hover:text-accent">
                    {p.title}
                  </h3>

                  {p.date && (
                    <p className="text-sm text-muted">
                      {new Date(p.date).toLocaleDateString("en-US", {
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

      <section>
        <h2 className={h2}>Experience</h2>
        <ol className="space-y-6 border-l border-line pl-5">
          {site.experience.map((e) => (
            <li key={e.title}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold">{e.title}</h3>
                <span className="text-sm text-muted">{e.period}</span>
              </div>
              <p className="mt-1 text-muted">{e.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className={h2}>Achievements</h2>
        <ul className="space-y-4">
          {site.achievements.map((a) => (
            <li key={a.title}>
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-muted">{a.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-line pt-8">
        <h2 className={h2}>Want to work together?</h2>
        <a
          href={`mailto:${site.email}`}
          className="text-xl text-accent underline underline-offset-4"
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
