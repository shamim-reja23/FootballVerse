const chelsea = {
    name: "Chelsea",
    formation: "4-2-3-1",
    side: "away",
    color: "bg-red-500",
    rows: [
      [{ number: 1, name: "Sanchez", rating: "6.4" }],
      [
        { number: 3, name: "Cucurella", rating: "6.1" },
        { number: 6, name: "Colwill", rating: "6.9" },
        { number: 29, name: "Fofana", rating: "6.5" },
        { number: 27, name: "Gusto", rating: "6.8" },
      ],
      [
        { number: 25, name: "Caicedo", rating: "6.2" },
        { number: 20, name: "Palmer", rating: "7.8", goal: true },
        { number: 15, name: "Jackson", rating: "6.4" },
      ],
    ],
    bench:
      "Jorgensen, Badiashile, Disasi, Dewsbury-Hall, Lavia, Madueke, Mudryk, Nkunku",
  };
  
  const arsenal = {
    name: "Arsenal",
    formation: "4-3-3",
    side: "home",
    color: "bg-live",
    rows: [
      [
        { number: 19, name: "Trossard", rating: "-", sub: true },
        { number: 29, name: "Havertz", rating: "7.2" },
        { number: 7, name: "Saka", rating: "8.4", goal: true },
      ],
      [
        { number: 41, name: "Rice", rating: "7.6" },
        { number: 8, name: "Ødegaard", rating: "8.1", goal: true },
        { number: 5, name: "Partey", rating: "7.0" },
      ],
      [
        { number: 12, name: "Timber", rating: "7.3" },
        { number: 6, name: "Gabriel", rating: "6.7" },
        { number: 2, name: "Saliba", rating: "7.4" },
        { number: 4, name: "White", rating: "7.1" },
      ],
      [{ number: 22, name: "Raya", rating: "7.5" }],
    ],
    bench:
      "Ramsdale, Kiwior, Zinchenko, Jorginho, Merino, Nwaneri, Sterling, Jesus",
  };
  
  // --------------------------------
  // Player
  // --------------------------------
  
  function PlayerMarker({ player, team }) {
    const isGoalScorer = player.goal;
  
    return (
      <div className="flex flex-col items-center">
        <span
          className={`w-7 h-7 rounded-full ${team.color} text-white font-bold text-[11px] flex items-center justify-center shadow-xs ring-1 ring-white/50`}
        >
          {player.number}
        </span>
  
        <span
          className={`text-[11px] font-medium mt-0.5 text-white drop-shadow ${
            isGoalScorer ? "font-bold text-amber-200" : ""
          }`}
        >
          {player.name}
          {isGoalScorer && " ⚽"}
        </span>
  
        <span
          className={`font-bold text-[9px] px-1 rounded mt-0.5 ${
            player.rating === "-"
              ? "bg-slate-300 text-slate-950"
              : Number(player.rating) >= 7
                ? "bg-emerald-400 text-slate-950"
                : "bg-amber-500 text-slate-950"
          }`}
        >
          {player.rating}
          {player.rating !== "-" && isGoalScorer && player.name === "Saka"
            ? " ⭐"
            : ""}
        </span>
      </div>
    );
  }
  
  // --------------------------------
  // Formation rows
  // --------------------------------
  
  function FormationRow({ players, team, spacing = "justify-around" }) {
    return (
      <div className={`flex ${spacing} px-4`}>
        {players.map((player) => (
          <PlayerMarker
            key={player.number}
            player={player}
            team={team}
          />
        ))}
      </div>
    );
  }
  
  function TeamLineup({ team }) {
    const teamLabel = (
      <div className="text-center">
        <span
          className={`${team.color} text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}
        >
          {team.name} ({team.formation})
        </span>
      </div>
    );
  
    return (
      <div className="relative z-10 space-y-4">
        {/* Away team name above players */}
        {team.side === "away" && teamLabel}
  
        {team.rows.map((row, index) => (
          <FormationRow
            key={`${team.name}-${index}`}
            players={row}
            team={team}
            spacing={row.length === 1 ? "justify-center" : "justify-around"}
          />
        ))}
  
        {/* Home team name below players */}
        {team.side === "home" && teamLabel}
      </div>
    );
  }
  
  // --------------------------------
  // Pitch
  // --------------------------------
  
  function FootballPitch() {
    return (
      <div className="relative w-full rounded-xl overflow-hidden shadow-inner bg-linear-to-b from-[#005137] to-[#006948] p-4 text-white min-h-95 flex flex-col justify-between select-none">
        {/* Pitch markings */}
        <div className="absolute inset-2 border-2 border-white/25 rounded-lg pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/25 -translate-y-1/2" />
  
          <div className="absolute top-1/2 left-1/2 w-28 h-28 border-2 border-white/25 rounded-full -translate-x-1/2 -translate-y-1/2" />
  
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-16 border-b-2 border-x-2 border-white/25" />
  
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 border-t-2 border-x-2 border-white/25" />
        </div>
  
        {/* Chelsea: top half */}
        <TeamLineup team={chelsea} />
  
        {/* Arsenal: bottom half */}
        <div className="pt-8">
          <TeamLineup team={arsenal} />
        </div>
      </div>
    );
  }
  
  // --------------------------------
  // Main section
  // --------------------------------
  
  function TeamBench({ team }) {
    return (
      <div>
        <h4 className="text-primary font-bold mb-1">
          {team.name} Bench:
        </h4>
        <p className="text-primary/80">{team.bench}</p>
      </div>
    );
  }
  
  export default function LineupsSection() {
    return (
      <section className="bg-white rounded-xl p-5 shadow-sm border">
        <div className="flex flex-wrap items-center justify-between pb-3 mb-2 border-b border-border gap-2">
          <div className="flex items-center gap-2">
            <h2 className="font-jakarta text-lg text-primary font-bold">
              Lineups & Tactical Shape
            </h2>
          </div>
  
          <div className="flex items-center gap-3">
            <span className="font-jakarta text-base font-bold text-live">
              Arsenal: {arsenal.formation}
            </span>
            <span className="text-primary/80">•</span>
            <span className="font-jakarta text-base font-bold text-red-500">
              Chelsea: {chelsea.formation}
            </span>
          </div>
        </div>
  
        <FootballPitch />
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 pt-3 border-t border-border text-[13px]">
          <TeamBench team={arsenal} />
          <TeamBench team={chelsea} />
        </div>
      </section>
    );
  }