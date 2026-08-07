import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

export default function LatestNews({ news }) {
  return (
    <aside className="space-y-5">
      <div className="flex items-center justify-between border-b pb-3">
        <h3 className="text-xl font-extrabold font-heading">Latest News</h3>

        <Link
          to="/news"
          className="flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={item.id}>
            <NewsCard news={item} />
            {index !== news.length - 1 && <hr className="mt-4" />}
          </div>
        ))}
      </div>
    </aside>
  );
}