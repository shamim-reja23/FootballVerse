const headToHeadMatches = [
  {
    homeTeam: "Arsenal",
    homeScore: 5,
    awayTeam: "Chelsea",
    awayScore: 0,
    result: "ARS Win",
    outcome: "home",
  },
  {
    homeTeam: "Chelsea",
    homeScore: 2,
    awayTeam: "Arsenal",
    awayScore: 2,
    result: "Draw",
    outcome: "draw",
  },
  {
    homeTeam: "Arsenal",
    homeScore: 3,
    awayTeam: "Chelsea",
    awayScore: 1,
    result: "ARS Win",
    outcome: "home",
  },
  {
    homeTeam: "Chelsea",
    homeScore: 0,
    awayTeam: "Arsenal",
    awayScore: 1,
    result: "ARS Win",
    outcome: "away",
  },
  {
    homeTeam: "Chelsea",
    homeScore: 2,
    awayTeam: "Arsenal",
    awayScore: 4,
    result: "ARS Win",
    outcome: "away",
  },
];

function HeadToHeadMatch({ match }) {
  const resultStyles = {
    home: "bg-live/10 text-live",
    away: "bg-live/10 text-live",
    draw: "bg-background text-primary/80",
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-white p-2">
      <div className="flex min-w-0 items-center gap-1.5 font-jakarta text-sm font-bold text-primary">
        <span className="truncate">{match.homeTeam}</span>

        <span className="shrink-0 tabular-nums">
          {match.homeScore} - {match.awayScore}
        </span>

        <span className="truncate">{match.awayTeam}</span>
      </div>

      <span
        className={`shrink-0 rounded px-2 py-0.5 text-sm font-label-sm font-bold ${
          resultStyles[match.outcome]
        }`}
      >
        {match.result}
      </span>
    </div>
  );
}

export default function HeadToHead() {
  return (
    <section className="rounded-xl bg-white p-5 shadow-sm border border-border">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]! text-live">
            history
          </span>

          <h3 className="font-jakarta text-lg font-bold text-primary">
            Head-to-Head
          </h3>
        </div>

        <span className="font-jakarta text-base text-primary/80">
          Last {headToHeadMatches.length}
        </span>
      </div>

      {/* Match history */}
      <div className="space-y-2.5 pt-1">
        {headToHeadMatches.map((match, index) => (
          <HeadToHeadMatch
            key={`${match.homeTeam}-${match.homeScore}-${match.awayScore}-${index}`}
            match={match}
          />
        ))}
      </div>
    </section>
  );
}
