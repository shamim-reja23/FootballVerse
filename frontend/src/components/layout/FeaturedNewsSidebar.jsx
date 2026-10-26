import { Link } from "react-router-dom";

const supportingStories = [
  {
    id: 1,
    category: "Transfer Radar",
    time: "1h ago",
    title:
      "Real Madrid intensify talks for Alphonso Davies ahead of summer window",
    excerpt:
      "Verbal framework reached over wage structures. Bayern Munich hold final extension summit at Säbener Straße.",
    meta: "High Confidence (85%)",
    metaIcon: "check_circle",
    metaColor: "text-primary",
    badgeStyle: "bg-[#62ff96]/50 text-primary font-bold",
    readTime: "4 min read",
    slug: "/news/real-madrid-alphonso-davies",
  },
  {
    id: 2,
    category: "Telemetry Preview",
    time: "2h ago",
    title:
      "Champions League Matchday 4: Defensive fragility models & xG forecasts",
    excerpt:
      "Algorithmic simulations identify critical rest-defense lapses in PSG’s midfield build-up ahead of Milan clash.",
    meta: "Model v4.8 Applied",
    metaIcon: "analytics",
    metaColor: "text-primary",
    badgeStyle: "bg-[#cce5ff] text-primary font-bold",
    readTime: "5 min read",
    slug: "/news/champions-league-xg-forecasts",
  },
  {
    id: 3,
    category: "Injury Wire",
    time: "3h ago",
    title:
      "Kevin De Bruyne returns to full team training before top-of-table clash",
    excerpt:
      "Pep Guardiola confirms midfielder completed 90 minutes of small-sided drills with high GPS acceleration scores.",
    meta: "Confirmed Medical Clearance",
    metaIcon: "verified",
    metaColor: "text-primary",
    badgeStyle: "bg-[#e2e7ff] text-primary font-bold",
    readTime: "3 min read",
    slug: "/news/kevin-de-bruyne-training-return",
  },
];

function SupportingStoryCard({ story }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md border border-border/10">
      <div>
        <div className="mb-1 flex items-center justify-between gap-2">
          <span
            className={`rounded-full px-2 py-0.5 font-jakarta text-[10px] font-bold uppercase tracking-wider ${story.badgeStyle}`}
          >
            {story.category}
          </span>

          <span className="shrink-0 font-jakarta text-xs text-outline">
            {story.time}
          </span>
        </div>

        <Link to={story.slug} className="block">
          <h2 className="mb-1 font-jakarta text-xl font-bold text-primary transition-colors group-hover:text-live">
            {story.title}
          </h2>
        </Link>

        <p className="line-clamp-2 font-jakarta text-xs text-primary/80">
          {story.excerpt}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 font-jakarta text-xs text-primary/80">
        <span
          className={`flex items-center gap-1 font-jakarta text-[10px] font-bold ${story.metaColor}`}
        >
          <span className="material-symbols-outlined text-base! text-emerald-700">
            {story.metaIcon}
          </span>
          {story.meta}
        </span>

        <span className="shrink-0">{story.readTime}</span>
      </div>
    </article>
  );
}

export default function FeaturedNewsSidebar() {
  return (
    <div className="flex flex-col gap-3 lg:col-span-4">
      {supportingStories.map((story) => (
        <SupportingStoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}
