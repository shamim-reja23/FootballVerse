import { Button } from "../ui/button";

const standings = [
  {
    position: 1,
    club: "Arsenal",
    played: 10,
    won: 7,
    drawn: 3,
    lost: 0,
    gd: "+14",
    points: 24,
    movement: "up",
    team: "home",
    color: "bg-red-600",
  },
  {
    position: 2,
    club: "Man City",
    played: 10,
    won: 7,
    drawn: 2,
    lost: 1,
    gd: "+12",
    points: 23,
    color: "bg-sky-500",
  },
  {
    position: 3,
    club: "Liverpool",
    played: 10,
    won: 7,
    drawn: 1,
    lost: 2,
    gd: "+11",
    points: 22,
    color: "bg-red-700",
  },
  {
    position: 4,
    club: "Chelsea",
    played: 10,
    won: 5,
    drawn: 2,
    lost: 3,
    gd: "+7",
    points: 17,
    movement: "down",
    team: "away",
    color: "bg-blue-600",
  },
  {
    position: 5,
    club: "Aston Villa",
    played: 10,
    won: 5,
    drawn: 2,
    lost: 3,
    gd: "+6",
    points: 17,
    color: "bg-purple-700",
  },
];

function PositionCell({ team }) {
  return (
    <div className="flex items-center gap-0.5">
      <span className="font-medium tabular-nums">
        {team.position}
      </span>

      {team.movement && (
        <span
          className={`material-symbols-outlined text-base! ${
            team.movement === "up"
              ? "text-live"
              : "text-red-500"
          }`}
        >
          {team.movement === "up"
            ? "arrow_drop_up"
            : "arrow_drop_down"}
        </span>
      )}
    </div>
  );
}

function ClubCell({ team }) {
  return (
    <div className="flex min-w-32.5 items-center gap-2.5">
      {/* Placeholder crest; replace with actual club logos later */}
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${team.color} text-[9px] font-bold text-white`}
      >
        {team.club
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)}
      </span>

      <span
        className={`whitespace-nowrap ${
          team.team ? "font-semibold" : "font-medium"
        }`}
      >
        {team.club}
      </span>
    </div>
  );
}

function StandingsRow({ team }) {
  const isHome = team.team === "home";
  const isAway = team.team === "away";

  return (
    <tr
      className={`border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50 ${
        isHome
          ? "bg-live/10"
          : isAway
            ? "bg-red-50/70"
            : "bg-white"
      }`}
    >
      <td className="py-3 pl-3 pr-2 text-sm text-slate-600">
        <PositionCell team={team} />
      </td>

      <td className="py-3 pr-4 text-sm text-slate-900">
        <ClubCell team={team} />
      </td>

      <td className="px-3 py-3 text-center text-sm text-slate-600">
        {team.played}
      </td>

      <td className="px-3 py-3 text-center text-sm text-slate-600">
        {team.won}
      </td>

      <td className="px-3 py-3 text-center text-sm text-slate-600">
        {team.drawn}
      </td>

      <td className="px-3 py-3 text-center text-sm text-slate-600">
        {team.lost}
      </td>

      <td className="px-3 py-3 text-center text-sm text-slate-700">
        {team.gd}
      </td>

      <td className="py-3 pl-3 pr-4 text-right text-sm font-bold tabular-nums text-slate-900">
        {team.points}
      </td>
    </tr>
  );
}

export default function LiveTableImpact() {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-border p-3">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-xl! text-live">
            table_rows
          </span>
            <h3 className="text-lg font-jakarta font-bold text-primary">
              Premier League
            </h3>
        </div>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          Live table
        </span>
      </div>

      {/* Detailed standings */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              <th className="py-3 pl-3 pr-2">#</th>
              <th className="py-3 pr-4">Club</th>
              <th className="px-3 py-3 text-center">PL</th>
              <th className="px-3 py-3 text-center">W</th>
              <th className="px-3 py-3 text-center">D</th>
              <th className="px-3 py-3 text-center">L</th>
              <th className="px-3 py-3 text-center">GD</th>
              <th className="py-3 pl-3 pr-4 text-right">PTS</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((team) => (
              <StandingsRow key={team.club} team={team} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Table legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 px-4 py-3 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-1 rounded-full bg-live" />
          Champions League
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-3 w-1 rounded-full bg-red-500" />
          Relegation
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-3">
        <Button
           variant="ghost"
          className="flex w-full items-center justify-center gap-1 text-sm font-semibold text-slate-800 transition-colors hover:text-primary"
        >
          View full table
          <span className="material-symbols-outlined text-lg!">
            arrow_forward
          </span>
        </Button>
      </div>
    </section>
  );
}
