export default function NewsCard({ news }) {
    return (
      <div className="group flex cursor-pointer gap-4">
        <img
          src={news.image}
          alt={news.title}
          className="h-20 w-20 rounded-lg object-cover transition group-hover:scale-105"
        />
  
        <div className="flex flex-col justify-between">
          <h4 className="line-clamp-2 font-semibold transition group-hover:text-primary">
            {news.title}
          </h4>
  
          <span className="text-sm text-muted-foreground">
            {news.time}
          </span>
        </div>
      </div>
    );
  }