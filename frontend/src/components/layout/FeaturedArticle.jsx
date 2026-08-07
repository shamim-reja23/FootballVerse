import { Clock } from "lucide-react";
import { Button } from "../ui/button";

export default function FeaturedArticle({ article }) {
  return (
    <article className="group">
      <div className="relative mb-6 aspect-video overflow-hidden rounded-xl w-full">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105 border-2"
        />

        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase text-primary-foreground tracking-widest">
          {article.tag}
        </span>
      </div>

      <div className="space-y-4 ">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold leading-tight tracking-tight transition group-hover:underline decoration-1 underline-offset-4 cursor-pointer">
          {article.title}
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-6">
          <Button className="rounded-lg bg-primary px-5 py-2.5 text-primary-foreground cursor-pointer">
            Read Article
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={16} />
            {article.readTime}
          </div>
        </div>
      </div>
    </article>
  );
}