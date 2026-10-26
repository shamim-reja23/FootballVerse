import { Link } from "react-router-dom";

const tacticalArticles = [
  {
    id: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVPwaqhzyBDz5Q8UYNotxyTSSE43OVUY1gxXjwnJDdVdiKgpNRIdixz6ll_ndReRVKiBKgnVkARba2muSfs0-60_nkTrLtzHynd6_FozQk-N-uNsAtNaxd6FX6dLOD2nERP4AVjku8LxgRynv-t1sY3XemDmHShTNYpDAqJ3zB3xx5FJn8rCm5mFU5azTTr24r4F_aEpKRRDV46KpDVoQZhRF6SZqxtc_vxWqzwCB5FIX_rG4FAHd5",
    imageAlt: "Football tactics board illustrating pressing traps and player positioning",
    tag: "Field Geometry",
    metric: "xT: +0.44/90",
    metricColor: "text-primary",
    category: "Press Resistance",
    title:
      "How Rodri Manipulates Half-Spaces Under Maximum Duress",
    excerpt:
      "Examining body shape angles and scanning intervals that afford the midfielder 1.8 extra seconds on ball possession.",
    author: "Liam Tharme",
    readTime: "7 min",
    slug: "/news/rodri-half-space-analysis",
  },
  {
    id: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqWDhHm3MaMT6CxFg6MtfBXoPtqskVCc_YXwYMq6VCOYerWK3bycLlGxWWR5rWE364yR2S0NRSUygzMSRW0KuA8eAoKhO6PVa5Fqk3-WbF2PwceAd6nJ_l_LDLbOt1UF235DhR9Wg5tFUnpHKYSpxiVAKYWz8K7osIQu4_9yaO5bnnHcabeZPvCn6CSzpjuaOM0iz8W4dam3UUCp2nPNb045zF4YleBYJTwcF0_3-inWBnWgfYaPyC",
    imageAlt: "Football analytics visualization showing pressing intensity and expected threat zones",
    tag: "Heatmap Metric",
    metric: "PPDA: 7.2",
    metricColor: "text-tertiary",
    category: "High-Line Risk",
    title:
      "Ange Postecoglou's Offside Trap: Mathematical Gamble or Calculated System?",
    excerpt:
      "Breaking down Tottenham's 48-meter defensive line against rapid transition forwards with high expected goals against.",
    author: "Mark Carey",
    readTime: "5 min",
    slug: "/news/postecoglou-offside-trap",
  },
  {
    id: 3,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJu2962LzRk7vFuswR7-3LZEBH5MGvVTsRj8txX4_jBCekMBXkhEF3bBuFKQ7rIyRaEqrxpWpyqMXkiD7IL1x2elYZFXMvS0pKLoMF0fQqs8D2ftZQfZdyjNMrRlveLfT-4f6iA0nmfhDV-8m25XoGFb1B5I5lrlCMi3lSQM0bfOTXX_M8lHXScQ7pc3N6nOulJK6AfLbciVWi1QJqXz25UCTKt6E0xWjrJA7Djj8_XE7CSYIKsgLz",
    imageAlt: "Football set-piece analysis visualizing ball trajectory into the penalty area",
    tag: "Set Piece Routine",
    metric: "xG/Corner: 0.14",
    metricColor: "text-primary",
    category: "Set-Piece Design",
    title:
      "Nicolas Jover’s Inswinging Corner Philosophy at Arsenal",
    excerpt:
      "How zonal screen blocks on opposing goalkeepers engineered 16 league goals from dead-ball scenarios this campaign.",
    author: "Sam Tighe",
    readTime: "6 min",
    slug: "/news/arsenal-inswinging-corners",
  },
];

function TacticalArticleCard({ article }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-border/10 p-3 rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
      {/* Article image */}
      <Link
        to={article.slug}
        className="relative h-44 overflow-hidden bg-[#eaedff]"
        aria-label={`Read ${article.title}`}
      >
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-2 top-2 rounded bg-secondary/90 px-2 py-0.5 font-jakarta text-[10px] font-semibold text-white/80">
          {article.tag}
        </span>

        <span
          className={`absolute bottom-2 right-2 flex items-center gap-1 rounded bg-white/90 px-2 py-0.5 font-jakarta text-[10px] font-bold backdrop-blur-sm ${article.metricColor}`}
        >
          {article.metric}
        </span>
      </Link>

      {/* Article content */}
      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <p className="mb-1 font-jakarta text-[10px] font-bold uppercase tracking-wider text-primary/80">
            {article.category}
          </p>

          <h3 className="mb-2 font-jakarta text-base font-bold leading-snug text-on-surface transition-colors group-hover:text-emerald-700">
            <Link to={article.slug}>
              {article.title}
            </Link>
          </h3>

          <p className="line-clamp-2 font-jakarta text-xs text-primary/80">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between gap-3 border-t border-border/50 pt-3 text-xs text-primary/80">
          <span className="font-jakarta text-xs font-medium text-primary/80">
            {article.author}
          </span>

          <span className="shrink-0">{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default function TacticalBreakdowns() {
  return (
    <section className="flex flex-col gap-3">
      {/* Section header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1">
          <span className="h-6 w-2.5 rounded-full bg-emerald-800" />

          <h2 className="font-jakarta text-[28px] font-extrabold tracking-tight text-primary">
            Tactical Breakdowns
          </h2>
        </div>

        <Link
          to="/news/analysis"
          className="flex shrink-0 items-center gap-1 font-jakarta text-xs font-extrabold text-emerald-800 "
        >
          <span className="hidden sm:inline hover:underline">View All Tactics</span>
          <span className="sm:hidden">View All</span>

          <span className="material-symbols-outlined text-base!">
            arrow_forward
          </span>
        </Link>
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {tacticalArticles.map((article) => (
          <TacticalArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </section>
  );
}
