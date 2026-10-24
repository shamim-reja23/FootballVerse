const performer = {
    name: "Bukayo Saka",
    team: "Arsenal",
    position: "Right Wing",
    number: 7,
    rating: "8.4",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAz8yRjl8nvTlR3KxeR0OoLOlgTX56u9lprGsxn8mmIRPASX5UMui0DHQwIon-rm-5EZeZL8dm-QaA1046ejSTjAkw6iqSVQCyZmvCYPQBNo7HVkpImEVqzcqaZtnL32SUrxMY4iPYWwMPqhSMudSCiN9PNJhYkhgixxXfPv6d4En-6DTdYd_I7oNx5FV_bXHiNRJUIT0cP_kqu-t5JWUoCrK0KIi5aoZwwG_FQN8CursNFgSrURNMG",
    goals: 1,
    keyPasses: 4,
    stats: [
      { label: "xG + xA", value: "1.04" },
      { label: "Dribbles", value: "3/4" },
      { label: "Duels Won", value: "6/8" },
    ],
  };
  
  function PerformerHeader() {
    return (
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-live text-[20px]!">
            stars
          </span>
  
          <h3 className="font-jakarta text-lg text-primary font-bold">
            Top Performer
          </h3>
        </div>
  
        <span className="bg-background text-primary/80 font-jakarta text-base px-2 py-0.5 rounded font-bold">
          Live MOTM
        </span>
      </div>
    );
  }
  
  function PerformerInfo({ player }) {
    return (
      <div className="flex items-center gap-3 mt-2">
        <div className="relative shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-white ring-2 ring-live">
            <img
              className="w-full h-full object-cover"
              src={player.image}
              alt={player.name}
            />
          </div>
  
          <div className="absolute -bottom-1 -right-1 bg-live text-white font-jakarta text-xs font-black px-1.5 py-0.5 rounded shadow-sm">
            {player.rating}
          </div>
        </div>
  
        <div className="min-w-0">
          <h4 className="font-jakarta text-base text-primary font-extrabold truncate">
            {player.name}
          </h4>
  
          <p className="font-jakarta text-sm text-primary/80">
            {player.team} • {player.position} ({player.number})
          </p>
  
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-sm font-jakarta bg-background text-live font-bold px-1.5 py-0.2 rounded">
              {player.goals} Goal
            </span>
  
            <span className="text-sm font-jakarta bg-background text-primary font-bold px-1.5 py-0.2 rounded">
              {player.keyPasses} Key Passes
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  function PerformerStats({ stats }) {
    return (
      <div className="grid grid-cols-3 gap-2 mt-3 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-2 rounded-lg"
          >
            <span className="font-jakarta text-sm text-primary block uppercase">
              {stat.label}
            </span>
  
            <span className="font-jakarta text-sm font-extrabold text-primary">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  
  export default function TopPerformer() {
    return (
      <section className="bg-white rounded-xl p-5 shadow-sm relative overflow-hidden border">
        <PerformerHeader />
        <PerformerInfo player={performer} />
        <PerformerStats stats={performer.stats} />
      </section>
    );
  }