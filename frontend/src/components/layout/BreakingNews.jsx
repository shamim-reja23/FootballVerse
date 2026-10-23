import { Link } from "react-router-dom";


const newsData = [
  {
    id: 1,
    category: "Tactical",
    time: "18m ago",
    title: "How Arsenal Broke Chelsea's High Press at Emirates Stadium",
    source: "PitchPulse Analytics",
    image: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/37e2/live/ee752480-b01d-11f0-8261-4d7901038185.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "Reaction",
    time: "42m ago",
    title: 'Ancelotti: "We Controlled Transitions in Critical Moments"',
    source: "Press Conference",
    icon: "sports_soccer",
    league: "La Liga",
  },
  {
    id: 3,
    category: "Telemetry",
    time: "1h ago",
    title: "Matchday 3 Predictions & Expected Goals Telemetry Model",
    source: "PulseData Engine",
    icon: "insights",
    league: "UCL",
  },
  {
    id: 4,
    category: "Confirmed",
    time: "2h ago",
    title: "Alphonso Davies signs contract extension through 2029",
    source: "Bayern Munich • Retained",
    icon: "radar",
    league: "Radar",
  },
];

const BreakingNews = ({ articles = newsData }) => {
  const featuredArticle = articles.find((article) => article.featured);
  const otherArticles = articles.filter((article) => !article.featured);

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#059669] text-[20px]">
            feed
          </span>

          <span className="font-label-caps text-[12px] uppercase text-[#0F172A] tracking-wider font-extrabold">
            Breaking & Analysis
          </span>
        </div>

        <Link
          to="/news"
          className="font-body-sm text-body-sm text-blue-600 hover:text-emerald-600 transition-colors font-semibold flex items-center gap-0.5"
        >
          View All
          <span className="material-symbols-outlined text-[14px]">
            arrow_forward
          </span>
        </Link>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <Link
          to={`/news/${featuredArticle.id}`}
          className="group flex flex-col gap-2"
        >
          <div className="w-full h-40 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
            <span className="text-emerald-600 font-bold uppercase">
              {featuredArticle.category}
            </span>
            <span>•</span>
            <span>{featuredArticle.time}</span>
          </div>

          <h3 className="text-[16px] font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
            {featuredArticle.title}
          </h3>

          <span className="text-[10px] text-slate-400">
            {featuredArticle.source}
          </span>
        </Link>
      )}

      {/* Remaining Articles */}
      <div className="flex flex-col divide-y divide-slate-100 border-t border-slate-100">
        {otherArticles.map((article) => (
          <Link
            key={article.id}
            to={`/news/${article.id}`}
            className="py-3 group flex items-start gap-3"
          >
            <div className="w-14 h-14 rounded-lg shrink-0 border border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-emerald-600">
              <span className="material-symbols-outlined text-[22px]">
                {article.icon}
              </span>
              <span className="font-label-caps text-[9px] font-extrabold uppercase mt-0.5">
                {article.league}
              </span>
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-slate-400 text-[10px] mb-0.5">
                <span className="text-emerald-600 font-bold uppercase">
                  {article.category}
                </span>
                <span>•</span>
                <span>{article.time}</span>
              </div>

              <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug line-clamp-2">
                {article.title}
              </h4>

              <span className="text-[10px] text-slate-400 mt-1">
                {article.source}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;