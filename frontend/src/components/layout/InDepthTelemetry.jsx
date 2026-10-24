const telemetryStats = [
    {
      label: "Big Chances Created",
      home: 3,
      away: 2,
    },
    {
      label: "Passing Accuracy",
      home: "88% (342/388)",
      away: "83% (261/314)",
      homeBar: 52,
      awayBar: 48,
    },
    {
      label: "Tackles Won",
      home: "14 (74%)",
      away: "11 (61%)",
      homeBar: 56,
      awayBar: 44,
    },
    {
      label: "Fouls",
      home: 9,
      away: 12,
    },
    {
      label: "Saves",
      home: 3,
      away: 4,
    },
    {
      label: "Offsides",
      home: 1,
      away: 3,
    },
  ];
  
  // Calculate bar proportions from the displayed values
  function getBarWidths(stat) {
    if (stat.homeBar !== undefined && stat.awayBar !== undefined) {
      return [stat.homeBar, stat.awayBar];
    }
  
    const homeValue = Number(stat.home);
    const awayValue = Number(stat.away);
    const total = homeValue + awayValue;
  
    if (!total) return [50, 50];
  
    return [
      Math.round((homeValue / total) * 100),
      Math.round((awayValue / total) * 100),
    ];
  }
  
  function TelemetryStat({ stat }) {
    const [homeWidth, awayWidth] = getBarWidths(stat);
  
    return (
      <div>
        <div className="flex justify-between items-center gap-2 mb-1">
          <span className="font-bold text-primary text-left">
            {stat.home}
          </span>
  
          <span className="text-primary/80 font-medium font-jakarta text-center">
            {stat.label}
          </span>
  
          <span className="font-bold text-primary text-right">
            {stat.away}
          </span>
        </div>
  
        <div className="h-1.5 w-full bg-white rounded-full overflow-hidden flex">
          <div
            className="bg-live h-full"
            style={{ width: `${homeWidth}%` }}
          />
  
          <div
            className="bg-red-500 h-full"
            style={{ width: `${awayWidth}%` }}
          />
        </div>
      </div>
    );
  }
  
  export default function InDepthTelemetry() {
    return (
      <section className="bg-white rounded-xl p-5 shadow-sm border">
        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-border">
          <h3 className="font-jakarta text-lg text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-live text-[20px]!">
              analytics
            </span>
            In-Depth Telemetry
          </h3>
  
          <span className="font-jakarta text-base text-primary/80 shrink-0">
            ARS vs CHE
          </span>
        </div>
  
        <div className="space-y-4 pt-1 font-jakarta text-sm">
          {telemetryStats.map((stat) => (
            <TelemetryStat key={stat.label} stat={stat} />
          ))}
        </div>
      </section>
    );
  }