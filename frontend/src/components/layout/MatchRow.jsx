function MatchRow({ match, onToggleFavorite }) {
    const isLive = match.status === "live";
    const isFinished = match.status === "finished";
  
    return (
      <div className="px-3 py-2 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors cursor-pointer">
        {/* Favorite button */}
        <button
          type="button"
          aria-label={`Toggle favorite for ${match.homeTeam} vs ${match.awayTeam}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(match.id);
          }}
          className={`shrink-0 ${
            match.isFavorite
              ? "text-amber-500"
              : "text-slate-300 hover:text-amber-500"
          }`}
        >
          <span
            className={`material-symbols-outlined text-lg! ${
              match.isFavorite
                ? "[font-variation-settings:'FILL'_1]"
                : ""
            }`}
          >
            star
          </span>
        </button>
  
        {/* Teams and score */}
        <div className="grid grid-cols-12 items-center flex-1 gap-2 min-w-0">
          <span className="col-span-5 text-right font-jakarta text-sm font-bold text-primary truncate">
            {match.homeTeam}
          </span>
  
          <div
            className={`col-span-2 flex items-center justify-center gap-1.5 font-tabular-stat font-extrabold ${
              isLive ? "text-emerald-600" : "text-primary"
            }`}
          >
            {isFinished || isLive ? (
              <>
                <span>{match.homeScore}</span>
                <span>-</span>
                <span>{match.awayScore}</span>
              </>
            ) : (
              <span className="text-slate-400 text-xs">vs</span>
            )}
          </div>
  
          <span className="col-span-5 text-left font-jakarta text-sm font-medium text-slate-700 truncate">
            {match.awayTeam}
          </span>
        </div>
  
        {/* Match status */}
        <div className="shrink-0 ml-2">
          {isLive ? (
            <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-jakarta text-[11px] font-bold">
                {match.minute}
              </span>
            </div>
          ) : isFinished ? (
            <span className="font-jakarta text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold border border-slate-200">
              FT
            </span>
          ) : (
            <span className="font-jakarta text-[11px] px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100">
              {match.minute}
            </span>
          )}
        </div>
      </div>
    );
  }
  
  export default MatchRow;