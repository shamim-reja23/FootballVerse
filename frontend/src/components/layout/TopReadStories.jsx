import { Link } from "react-router-dom";

const topStories = [
  {
    title:
      "Arteta reveals the hidden training session drill that altered Arsenal's build-up mechanics",
    views: "92.4k",
    category: "Tactics",
    href: "/news/arteta-arsenal-build-up-mechanics",
  },
  {
    title:
      "Bayern Munich ultimatum: Alphonso Davies given 10 days to sign or face benching",
    views: "78.1k",
    category: "Transfers",
    href: "/news/alphonso-davies-contract-ultimatum",
  },
  {
    title:
      "The data behind Cole Palmer: How spatial intelligence defies simple passing maps",
    views: "65.0k",
    category: "Analytics",
    href: "/news/cole-palmer-spatial-intelligence",
  },
  {
    title:
      "Ruben Amorim's tactical 3-4-2-1 blueprint evaluated against Premier League opposition",
    views: "54.9k",
    category: "Managerial",
    href: "/news/amorim-3421-tactical-blueprint",
  },
  {
    title:
      "Kylian Mbappé’s central striker dilemma: Why Real Madrid’s pressing shape suffers",
    views: "49.2k",
    category: "La Liga",
    href: "/news/mbappe-real-madrid-pressing-shape",
  },
];

function TopStoryItem({ story, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      to={story.href}
      className="group flex items-start gap-3"
    >
      <span className="w-8 mr-2 shrink-0 font-sans font-black text-4xl leading-none text-emerald-800/30 transition-colors group-hover:text-emerald-800">
        {number}
      </span>

      <div className="flex min-w-0 flex-col gap-1">
        <h4 className="font-jakarta text-sm font-extrabold leading-snug text-primary transition-colors group-hover:text-emerald-800">
          {story.title}
        </h4>

        <div className="flex flex-wrap items-center gap-2 font-jakarta text-xs text-primary">
          <span>{story.views} views</span>
          <span aria-hidden="true">•</span>
          <span>{story.category}</span>
        </div>
      </div>
    </Link>
  );
}

export default function TopReadStories() {
  return (
    <section className="rounded-xl bg-white p-5 shadow-sm border border-border/20">
      <div className="mb-3 flex items-center justify-between gap-3 border-b border-border pb-2">
        <h3 className="flex items-center gap-1.5 font-jakarta text-lg font-extrabold text-primary">
          <span className="material-symbols-outlined text-base! text-emerald-800 [font-variation-settings:'FILL'_1]">
            trending_up
          </span>
          Top Read Stories
        </h3>

        <span className="shrink-0 font-jakarta text-[10px] font-semibold uppercase text-primary">
          Past 24 Hours
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {topStories.map((story, index) => (
          <TopStoryItem
            key={story.href}
            story={story}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
