import { portfolioData } from "@/data/portfolio";

export default function Stats() {
  return (
    <section id="about" className="border-y border-white/10 bg-[#0d121c] py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {portfolioData.stats.map((item) => (
            <div
              key={item.number}
              className="flex items-start gap-4"
            >
              <span className="text-sm font-bold text-teal-400">
                {item.number}
              </span>

              <div>
                <p className="text-sm font-semibold text-white">
                  {item.label}
                </p>

                <div className="mt-3 h-px w-10 bg-blue-500/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
