import { Link } from "react-router-dom";

const leagues = [
  {
    id: "premier-league",
    name: "Premier League",
    country: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    matches: 6,
  },
  {
    id: "champions-league",
    name: "Champions League",
    country: "Europe",
    flag: "🇪🇺",
    matches: 4,
  },
  {
    id: "la-liga",
    name: "La Liga",
    country: "Spain",
    flag: "🇪🇸",
    matches: 5,
  },
  {
    id: "serie-a",
    name: "Serie A",
    country: "Italy",
    flag: "🇮🇹",
    matches: 4,
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    country: "Germany",
    flag: "🇩🇪",
    matches: 5,
  },
  {
    id: "ligue-1",
    name: "Ligue 1",
    country: "France",
    flag: "🇫🇷",
    matches: 3,
  },
  {
    id: "indian-super-league",
    name: "Indian Super League",
    country: "India",
    flag: "🇮🇳",
    matches: 2,
  },
];

export default function TopLeagues() {
  return (
    <div className="flex flex-col gap-1.5">
      {leagues.map((league) => (
        <Link
          key={league.id}
          to={`/league/${league.id}`}
          className="flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-slate-50 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-md bg-slate-100 border border-slate-200/60 flex items-center justify-center text-sm shadow-2xs">
              {league.flag}
            </span>

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#0F172A] group-hover:text-[#059669] transition-colors leading-snug">
                {league.name}
              </span>

              <span className="uppercase text-[11px] text-slate-400">
                {league.country}
              </span>
            </div>
          </div>

          <span
            className={`font-badge-status text-[11px] px-2 py-0.5 rounded-full font-bold border ${
              league.matches > 0
                ? "bg-emerald-50 text-[#059669] border-emerald-200"
                : "bg-slate-100 text-slate-600 border-slate-200"
            }`}
          >
            {league.matches}
          </span>
        </Link>
      ))}
    </div>
  );
}
