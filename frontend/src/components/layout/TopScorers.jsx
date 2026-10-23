const scorersData = [
    {
      id: 1,
      name: "Erling Haaland",
      club: "Man City",
      goals: 11,
    },
    {
      id: 2,
      name: "Cole Palmer",
      club: "Chelsea",
      goals: 7,
    },
    {
      id: 3,
      name: "Bukayo Saka",
      club: "Arsenal",
      goals: 6,
    },
  ];

const TopScorers = ({
    scorers = scorersData,
    season = "2024/25",
  }) => {
    return (
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500 text-[18px]">
              military_tech
            </span>
  
            <span className="font-label-caps text-[12px] uppercase text-[#0F172A] tracking-wider font-extrabold">
              Top Scorers
            </span>
          </div>
  
          <span className="font-label-caps text-[11px] text-slate-500 uppercase font-bold">
            {season}
          </span>
        </div>
  
        {/* Scorer List */}
        <div className="flex flex-col gap-2">
          {scorers.map((player, index) => {
            const isTopScorer = index === 0;
  
            const initials = player.name
              .split(" ")
              .map((name) => name[0])
              .join("");
  
            return (
              <div
                key={player.id}
                className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isTopScorer
                    ? "bg-emerald-50/60 border border-emerald-100 hover:bg-emerald-50"
                    : "hover:bg-slate-50"
                }`}
              >
                {/* Player Info */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`font-tabular-stat text-tabular-stat font-bold w-4 shrink-0 ${
                      isTopScorer
                        ? "text-emerald-600"
                        : "text-slate-400"
                    }`}
                  >
                    {index + 1}
                  </span>
  
                  {/* Player Initials */}
                  <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-label-caps text-blue-700 font-bold text-xs shrink-0">
                    {initials}
                  </div>
  
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`font-body-sm text-body-sm ${
                        isTopScorer
                          ? "font-bold"
                          : "font-semibold"
                      } text-[#0F172A] truncate`}
                    >
                      {player.name}
                    </span>
  
                    <span className="font-label-caps text-[11px] text-slate-500">
                      {player.club}
                    </span>
                  </div>
                </div>
  
                {/* Goal Count */}
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <span
                    className={`font-headline-md text-headline-md ${
                      isTopScorer
                        ? "font-extrabold text-emerald-600"
                        : "font-bold text-[#0F172A]"
                    }`}
                  >
                    {player.goals}
                  </span>
  
                  <span className="font-label-caps text-[11px] text-slate-400 font-bold">
                    G
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default TopScorers;