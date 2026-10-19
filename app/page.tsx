{/* YouTube Latest Uploads */}
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
