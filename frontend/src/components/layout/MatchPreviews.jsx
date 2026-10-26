import { Link } from "react-router-dom";

const matchForecasts = [
  {
    id: "liverpool-man-city",
    date: "Sun, 16:30",
    venue: "Anfield",
    competition: "Premier League",
    competitionStyle: "bg-emerald-800/10 text-emerald-800",
    homeTeam: {
      name: "Liverpool",
      shortName: "LIV",
      position: "1st • 28 PTS",
      badgeStyle: "bg-red-200/40 text-red-700",
    },
    awayTeam: {
      name: "Man City",
      shortName: "MCI",
      position: "2nd • 26 PTS",
      badgeStyle: "bg-blue-200 text-blue-700",
    },
    probability: {
      home: 44,
      draw: 24,
      away: 32,
    },
    model: "Model v9.1",
    tacticalKey:
      "Arne Slot's direct vertical counter vs City's central rest-defense transition without Rodri.",
    href: "/matches/liverpool-man-city/preview",
  },
  {
    id: "real-madrid-juventus",
    date: "Wed, 20:00",
    venue: "Bernabéu",
    competition: "Champions League",
    competitionStyle: "bg-blue-400/10 text-blue-700/80",
    homeTeam: {
      name: "Real Madrid",
      shortName: "RMA",
      position: "UCL Pos: 12th",
      badgeStyle: "bg-[#e2e7ff] text-primary/80",
    },
    awayTeam: {
      name: "Juventus",
      shortName: "JUV",
      position: "UCL Pos: 9th",
      badgeStyle: "bg-[#e2e7ff]/80 text-primary/80",
    },
    probability: {
      home: 58,
      draw: 22,
      away: 20,
    },
    model: "Model v9.1",
    tacticalKey:
      "Vinícius Jr 1v1 frequency against Motta's fluid back-three build-up structure.",
    href: "/matches/real-madrid-juventus/preview",
  },
];

function SectionHeader() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-1">
        <span className="h-6 w-2.5 rounded-full bg-emerald-800" />

        <h2 className="font-jakarta text-[28px] font-bold tracking-tight text-primary">
          Match Previews &amp; xG Forecasts
        </h2>
      </div>

      <Link
        to="/matches/forecasts"
        className="flex shrink-0 items-center gap-1 font-jakarta text-xs font-extrabold text-emerald-800 "
      >
        <span className="hidden sm:inline hover:underline">All Forecasts</span>
        
        <span className="material-symbols-outlined text-base!">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}

function TeamBadge({ team }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-jakarta text-xs font-extrabold ${team.badgeStyle}`}
      aria-label={team.name}
    >
      {team.shortName}
    </div>
  );
}

function Matchup({ homeTeam, awayTeam }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-border py-2">
      <div className="flex min-w-0 items-center gap-2">
        <TeamBadge team={homeTeam} />

        <div className="min-w-0">
          <h3 className="font-jakarta text-base font-bold text-primary">
            {homeTeam.name}
          </h3>
          <span className="font-jakarta text-xs text-primary">
            {homeTeam.position}
          </span>
        </div>
      </div>

      <span className="shrink-0 font-jakarta text-xs font-extrabold text-primary">
        VS
      </span>

      <div className="flex min-w-0 items-center gap-2 text-right">
        <div className="min-w-0">
          <h3 className="font-jakarta text-base font-bold text-primary">
            {awayTeam.name}
          </h3>
          <span className="font-jakarta text-xs text-primary">
            {awayTeam.position}
          </span>
        </div>

        <TeamBadge team={awayTeam} />
      </div>
    </div>
  );
}

function WinProbability({ probability, homeTeam, awayTeam, model }) {
  const outcomes = [
    {
      label: homeTeam.shortName,
      value: probability.home,
      style: "bg-emerald-800",
    },
    {
      label: "Draw",
      value: probability.draw,
      style: "bg-blue-900/20",
    },
    {
      label: awayTeam.shortName,
      value: probability.away,
      style: "bg-blue-800/70",
    },
  ];

  return (
    <div className="py-3">
      <div className="mb-1 flex items-center justify-between gap-3">
        <span className="font-jakarta text-[10px] font-extrabold text-primary">
          Simulated Win Probability
        </span>

        <span className="font-jakarta text-[10px] font-bold text-primary">
          {model}
        </span>
      </div>

      <div
        className="flex h-3 w-full overflow-hidden rounded-full bg-blue-900/20"
        role="img"
        aria-label={`${homeTeam.name} ${probability.home}%, draw ${probability.draw}%, ${awayTeam.name} ${probability.away}%`}
      >
        {outcomes.map((outcome) => (
          <div
            key={outcome.label}
            className={`h-full ${outcome.style}`}
            style={{ width: `${outcome.value}%` }}
            title={`${outcome.label}: ${outcome.value}%`}
          />
        ))}
      </div>

      <div className="mt-1.5 flex items-center justify-between gap-2 font-jakarta text-xs font-medium text-primary/80">
        <span className="font-bold text-emerald-800">
          {homeTeam.shortName}: {probability.home}%
        </span>
        <span>Draw: {probability.draw}%</span>
        <span className="font-bold text-blue-700">
          {awayTeam.shortName}: {probability.away}%
        </span>
      </div>
    </div>
  );
}

function MatchForecastCard({ match }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md border border-border/50">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-primary/80">
          <span className="material-symbols-outlined text-base!">
            calendar_month
          </span>
          <span className="font-jakarta text-[10px] font-bold uppercase tracking-wider">
            {match.date} • {match.venue}
          </span>
        </div>

        <span
          className={`rounded px-2 py-0.5 font-jakarta text-[10px] font-bold ${match.competitionStyle}`}
        >
          {match.competition}
        </span>
      </div>

      <Matchup
        homeTeam={match.homeTeam}
        awayTeam={match.awayTeam}
      />

      <WinProbability
        probability={match.probability}
        homeTeam={match.homeTeam}
        awayTeam={match.awayTeam}
        model={match.model}
      />

      <div className="rounded-lg bg-[#e2e7ff] p-2 font-jakarta text-xs text-primary/80">
        <span className="font-jakarta text-[10px] font-bold uppercase text-primary">
          Tactical Key:{" "}
        </span>
        {match.tacticalKey}
      </div>

      <Link
        to={match.href}
        className="mt-3 inline-flex items-center gap-1 font-jakarta text-xs font-bold text-emerald-800 hover:underline"
      >
        Read Match Preview
        <span className="material-symbols-outlined text-base!">
          arrow_forward
        </span>
      </Link>
    </article>
  );
}

export default function MatchPreviews() {
  return (
    <section className="flex flex-col gap-3">
      <SectionHeader />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {matchForecasts.map((match) => (
          <MatchForecastCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
}
