const overviewStats = {
  possession: {
    home: 56,
    away: 44,
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
  },
  xg: {
    home: "1.84",
    away: "1.12",
    homeWidth: 62,
    awayWidth: 38,
  },
  shots: {
    home: 14,
    away: 9,
    homeTarget: 6,
    awayTarget: 4,
  },
  corners: {
    home: 7,
    away: 3,
  },
  attacks: {
    home: 48,
    away: 34,
  },
};

function ComparisonBar({ homeWidth, awayWidth }) {
  return (
    <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-white">
      <div
        className="h-full bg-live transition-all"
        style={{ width: `${homeWidth}%` }}
      />
      <div
        className="h-full bg-red-500 transition-all"
        style={{ width: `${awayWidth}%` }}
      />
    </div>
  );
}

function StatValues({ home, away }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="font-bold text-primary">{home}</span>
      <span className="text-xs font-medium text-primary">
        VS
      </span>
      <span className="font-bold text-priamry">{away}</span>
    </div>
  );
}

function PossessionStat() {
  const { home, away } = overviewStats.possession;

  return (
    <div className="rounded-xl border border-border/60 bg-white p-4">
        <div className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-1">
                <span className="text-base uppercase font-medium text-slate-500">
                    {overviewStats.possession.homeTeam}
                </span>
                <span className="text-2xl font-jakarta font-bold text-live">{home}%</span>
            </div>

            <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-slate-400 text-lg!">
                    radio_button_checked
                </span>
                 <span className="text-base font-medium text-slate-400">
                    Possession
                </span>
            </div>
            
            <div className="flex flex-col items-end gap-1">
                <span className="text-base uppercase font-medium text-slate-500">
                    {overviewStats.possession.awayTeam}
                </span>
                <span className="text-2xl font-jakarta font-bold text-red-500">{away}%</span>
            </div>
        </div>

        <div className="mt-4">
            <ComparisonBar homeWidth={home} awayWidth={away} />
        </div>
    </div>
  );
}

function MetricCard({ title, home, away, homeWidth, awayWidth, footer, icon }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-background p-4 my-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-primary/80">
          {title}
        </span>

        {icon && (
          <span className="material-symbols-outlined text-lg! text-slate-400">
            {icon}
          </span>
        )}
      </div>

      <StatValues home={home} away={away} />

      {homeWidth != null && awayWidth != null && (
        <ComparisonBar
          homeWidth={homeWidth}
          awayWidth={awayWidth}
        />
      )}

      {footer && (
        <div className="flex items-center justify-between gap-2 text-xs text-primary/80">
          <span>{footer.home}</span>
          <span>{footer.away}</span>
        </div>
      )}
    </div>
  );
}

function ComparisonRow({ label, home, away }) {
  return (
    <div className="flex items-center justify-between gap-3 py-3  ">
      <span className="min-w-0 flex-1 text-base text-primary/80">
        {label}
      </span>

      <div className="flex shrink-0 items-center gap-3">
        <span className="w-8 text-right text-base font-bold text-live">{home}</span>
        <span className="text-xs text-outline">–</span>
        <span className="w-8 font-bold text-base text-red-500">{away}</span>
      </div>
    </div>
  );
}

export default function MatchOverviewStats() {
  const { xg, shots, corners, attacks } = overviewStats;

  return (
    <section className="mt-1 rounded-xl border border-border bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-primary font-jakarta">
          Match Statistics
        </h2>

        <span className="text-xs font-medium text-primary/80">
          ARS <span className="mx-1 text-primary/60">vs</span> CHE
        </span>
      </div>

      <PossessionStat />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MetricCard
          title="Expected goals (xG)"
          home={xg.home}
          away={xg.away}
          homeWidth={xg.homeWidth}
          awayWidth={xg.awayWidth}
          icon="target"
        />

        <MetricCard
          title="Shots on target"
          home={shots.home}
          away={shots.away}
          footer={{
            home: `${shots.homeTarget} on target`,
            away: `${shots.awayTarget} on target`,
          }}
          icon="sports_soccer"
        />
      </div>

      <div className="rounded-xl border border-border/60 bg-white p-4">
          <ComparisonRow
            label="Corners"
            home={corners.home}
            away={corners.away}
          />

          <div className="border-t border-border">
            <ComparisonRow
              label="Dangerous attacks"
              home={attacks.home}
              away={attacks.away}
            />
          </div>
        </div>
    </section>
  );
}
