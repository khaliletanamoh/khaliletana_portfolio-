export type Post = { title: string; url: string; date: string };

const BLOG = "https://khalilettanamoh.blogspot.com";

export async function getPosts(limit = 3): Promise<Post[]> {
  try {
    const res = await fetch(`${BLOG}/feeds/posts/default?alt=json&max-results=${limit}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const entries = data?.feed?.entry ?? [];
    return entries.map((e: any) => ({
      title: e.title?.$t ?? "Untitled",
      url: e.link?.find((l: any) => l.rel === "alternate")?.href ?? BLOG,
      date: (e.published?.$t ?? "").slice(0, 10),
    }));
  } catch {
    return [];
  }
}
