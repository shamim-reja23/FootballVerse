export default function NewsCard({ news }) {
    return (
      <div className="group flex cursor-pointer gap-4">
        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h4 className="line-clamp-2 font-heading font-semibold leading-snug ">
            {news.title}
          </h4>
  
          <span className="text-sm text-muted-foreground">
            {news.time}
          </span>
        </div>
      </div>
    );
  }