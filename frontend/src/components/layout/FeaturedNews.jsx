import { useState } from "react";
import { Link } from "react-router-dom";

const featuredStories = [
  {
    id: 1,
    category: "Tactical Spotlight",
    tag: "Matchday 11 Deep Dive",
    readTime: "6 min read",
    publishedAt: "24m ago",
    title:
      "How Arteta’s Inverted Double-Pivot Overwhelmed Chelsea in the London Derby",
    excerpt:
      "By pinning Chelsea’s double-six with layered interior rotations, Martin Ødegaard and Declan Rice created unmatched spatial overload, yielding 3.12 xG and suffocating rapid transitions.",
    author: "Michael Cox",
    role: "Senior Tactical Analyst",
    authorImage: "/admin.png",
    image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ngdjbafv3twathukjbq2",
    slug: "/news/arteta-inverted-double-pivot",
  },
  {
    id: 2,
    category: "Transfer Watch",
    tag: "Transfer Analysis",
    readTime: "5 min read",
    publishedAt: "42m ago",
    title: "The Transfer Moves That Could Shape the Next Premier League Season",
    excerpt:
      "A closer look at the recruitment strategies, squad gaps and emerging targets that could define the next transfer window.",
    author: "Football Desk",
    role: "News & Analysis",
    authorImage: "/admin.png",
    image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ngdjbafv3twathukjbq2",
    slug: "/news/premier-league-transfer-analysis",
  },
  {
    id: 3,
    category: "Match Analysis",
    tag: "Tactical Breakdown",
    readTime: "8 min read",
    publishedAt: "1h ago",
    title: "Why Midfield Control Is Becoming Football’s Decisive Advantage",
    excerpt:
      "From pressing traps to positional rotations, discover how teams are finding new ways to control the middle of the pitch.",
    author: "Football Desk",
    role: "Tactical Analysis",
    authorImage: "/admin.png",
    image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ngdjbafv3twathukjbq2",
    slug: "/news/midfield-control-analysis",
  },
  {
    id: 4,
    category: "Data Stories",
    tag: "Numbers Behind the Game",
    readTime: "7 min read",
    publishedAt: "2h ago",
    title: "What the Numbers Really Tell Us About Modern Attacking Football",
    excerpt:
      "Expected goals, shot locations and chance creation reveal a deeper story behind the scoreline.",
    author: "Football Desk",
    role: "Data Analyst",
    authorImage: "admin.png",
    image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ngdjbafv3twathukjbq2",
    slug: "/news/modern-attacking-football-data",
  },
];

function StoryBadge({ children, featured = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-jakarta text-[10px] font-bold uppercase tracking-wide ${
        featured
          ? "bg-[#62ff96] text-primary "
          : "bg-secondary/80 text-white backdrop-blur-sm"
      }`}
    >
      {featured && (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-live" />
      )}
      {children}
    </span>
  );
}

function StoryPagination({ index, total, onPrevious, onNext }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-secondary/70 px-2 py-1 backdrop-blur-md">
      <button
        type="button"
        aria-label="Previous story"
        onClick={onPrevious}
        className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors hover:bg-secondary"
      >
        <span className="material-symbols-outlined">
          chevron_left
        </span>
      </button>

      <span className="whitespace-nowrap font-jakarta text-[10px] font-semibold tracking-wider text-white">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </span>

      <button
        type="button"
        aria-label="Next story"
        onClick={onNext}
        className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors hover:bg-secondary"
      >
        <span className="material-symbols-outlined">
          chevron_right
        </span>
      </button>
    </div>
  );
}

export default function FeaturedNews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const story = featuredStories[activeIndex];
  const total = featuredStories.length;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section className="group relative flex min-h-115 flex-col justify-end overflow-hidden rounded-xl shadow-sm md:min-h-130 lg:col-span-8">
      {/* Background image */}
      <img
        key={story.image}
        src={story.image}
        alt={story.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Image overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/60 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-secondary/80 via-transparent to-transparent" />

      {/* Story content */}
      <div className="relative z-10 flex flex-col gap-2 p-3 text-white/80 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <StoryBadge featured>{story.category}</StoryBadge>

          <StoryBadge>{story.tag}</StoryBadge>

          <span className="font-jakarta font-bold text-[10px] text-white/80">
            {story.readTime}
          </span>

          <span className="text-white/50">•</span>

          <span className="font-jakarta text-[10px] font-bold text-white/80">
            {story.publishedAt}
          </span>
        </div>

        <Link to={story.slug} className="block w-fit">
          <h1 className="max-w-2xl font-jakarta text-4xl font-extrabold leading-tight drop-shadow-sm transition-colors group-hover:text-emerald-300">
            {story.title}
          </h1>
        </Link>

        <p className="hidden max-w-2xl font-jakarta text-sm font-medium text-white/90 sm:block">
          {story.excerpt}
        </p>

        {/* Author and pagination */}
        <div className="mt-1 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-space-sm">
          <div className="flex items-center gap-2">
            <img
              src={story.authorImage}
              alt={story.author}
              className="h-9 w-9 rounded-full object-cover shadow-inner"
            />

            <div>
              <p className="font-jakarta text-xs font-bold text-white">
                {story.author}
              </p>

              <p className="font-jakarta text-xs text-white/70">
                {story.role}
              </p>
            </div>
          </div>

          <StoryPagination
            index={activeIndex}
            total={total}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        </div>
      </div>
    </section>
  );
}
