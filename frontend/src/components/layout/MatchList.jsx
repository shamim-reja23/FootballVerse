import MatchRow from "./MatchRow";
import LeagueMatchGroup from "./LeagueMatchGroup";

function MatchList({ matches, onToggleFavorite }) {
  if (matches.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <p className="font-jakarta text-sm text-slate-500">
          No matches found.
        </p>
      </div>
    );
  }

  const groupedMatches = matches.reduce((groups, match) => {
    const leagueName = match.league.name;

    if (!groups[leagueName]) {
      groups[leagueName] = {
        league: match.league,
        matches: [],
      };
    }

    groups[leagueName].matches.push(match);

    return groups;
  }, {});

  return (
    <div className="flex flex-col gap-3">
      {Object.values(groupedMatches).map(({ league, matches }) => (
        <LeagueMatchGroup
          key={league.name}
          league={league}
          matches={matches}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default MatchList;