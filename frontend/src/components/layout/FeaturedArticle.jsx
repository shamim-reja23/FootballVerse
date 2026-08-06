import { Clock } from "lucide-react";

export default function FeaturedArticle({ article }) {
  return (
    <article className="group">
      <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground">
          {article.tag}
        </span>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold leading-tight transition group-hover:text-primary">
          {article.title}
        </h2>

        <p className="text-muted-foreground">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-6">
          <button className="rounded-lg bg-primary px-5 py-2.5 text-primary-foreground">
            Read Article
          </button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={16} />
            {article.readTime}
          </div>
        </div>
      </div>
    </article>
  );
}