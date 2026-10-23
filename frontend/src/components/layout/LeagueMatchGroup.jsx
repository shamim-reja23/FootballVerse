import MatchRow from "./MatchRow";

function LeagueMatchGroup({ league, matches, onToggleFavorite }) {
  return (
    <section className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs">
      {/* League header */}
      <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">{league.flag}</span>

          <span className="font-jakarta text-sm font-bold text-primary">
            {league.name}
          </span>

          <span className="font-jakarta text-[11px] text-slate-500 font-semibold">
            Matchday {league.matchday}
          </span>
        </div>

        <span className="material-symbols-outlined text-slate-400 text-lg">
          chevron_right
        </span>
      </div>

      {/* Match rows */}
      <div className="flex flex-col divide-y divide-slate-100">
        {matches.map((match) => (
          <MatchRow
            key={match.id}
            match={match}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default LeagueMatchGroup;