const incidents = [
    {
      minute: "68'",
      type: "substitution",
      title: "Tactical Substitution",
      team: "Arsenal",
      side: "home",
      description: (
        <>
          <strong className="text-primary">L. Trossard</strong> replaces{" "}
          <span className="text-primary/70 line-through">
            G. Martinelli
          </span>{" "}
          for direct counter-attack pace.
        </>
      ),
    },
    {
      minute: "58'",
      type: "goal",
      title: "GOAL! ARSENAL (2 - 1)",
      team: "Arsenal",
      side: "home",
      badge: "Penalty",
      description: (
        <>
          <strong>Martin Ødegaard</strong> stutters and dispatches with
          surgical precision into the top right stanchion after Cucurella
          handled inside the box.
        </>
      ),
    },
    {
      minute: "52'",
      type: "yellow-card",
      title: "Yellow Card",
      team: "Chelsea",
      side: "away",
      description: (
        <>
          <strong>Moisés Caicedo</strong> is booked for a cynical tactical
          trip on Declan Rice halting a central transition break.
        </>
      ),
    },
    {
      type: "half-time",
      label: "Half Time • Arsenal 1 - 1 Chelsea",
    },
    {
      minute: "41'",
      type: "goal",
      title: "GOAL! CHELSEA (1 - 1)",
      team: "Chelsea",
      side: "away",
      description: (
        <>
          <strong>Cole Palmer</strong> picks up the ball in the right
          half-space, skips past Gabriel and curls an unstoppable dipping
          strike into the far left corner!
        </>
      ),
    },
    {
      minute: "34'",
      type: "missed-chance",
      title: "Big Chance Missed",
      description: (
        <>
          Nicolas Jackson leaps unchallenged from 6 yards out but David Raya
          produces an instinctive reflex parry onto the crossbar.
        </>
      ),
    },
    {
      minute: "24'",
      type: "goal",
      title: "GOAL! ARSENAL (1 - 0)",
      team: "Arsenal",
      side: "home",
      description: (
        <>
          <strong>Bukayo Saka</strong> explodes beyond Cucurella into the
          penalty area and finishes low under Sanchez at the near post.
        </>
      ),
    },
    {
      minute: "14'",
      type: "yellow-card",
      title: "Yellow Card",
      team: "Arsenal",
      side: "home",
      description: (
        <>
          <strong>Gabriel Magalhães</strong> pulls back Palmer on an early
          counter attack.
        </>
      ),
    },
  ];
  
  const incidentStyles = {
    substitution: {
      card: "bg-white",
      time: "text-live font-black font-jakarta",
      iconContainer: "bg-background text-primary",
      icon: "sync_alt",
    },
    goal: {
      card: "",
      time: "text-live font-black font-jakarta",
      iconContainer: "text-white shadow-xs",
      icon: "sports_soccer",
    },
    "yellow-card": {
      card: "bg-white",
      time: "text-primary font-jakarta font-bold",
      iconContainer: "bg-amber-100",
      icon: "yellow-card",
    },
    "missed-chance": {
      card: "bg-white",
      time: "text-primary font-bold",
      iconContainer: "bg-background text-red-500",
      icon: "warning",
    },
  };
  
  function TimelineHeader({ count }) {
    return (
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]!">
            history_toggle_off
          </span>
  
          <h2 className="font-jakarta text-lg text-primary font-bold">
            Key Match Timeline
          </h2>
        </div>
  
        <span className="font-jakarta text-sm bg-background text-primary/80 px-2.5 py-1 rounded-full font-bold">
          {count} Key Incidents
        </span>
      </div>
    );
  }
  
  function TimelineIncident({ incident }) {
    if (incident.type === "half-time") {
      return (
        <div className="flex items-center justify-center py-1">
          <span className="bg-background px-3 py-1 rounded-full font-jakarta text-sm font-bold text-primary/80 uppercase tracking-wider">
            {incident.label}
          </span>
        </div>
      );
    }

    const style = incidentStyles[incident.type];

    const goalCardColor = 
        incident.side === "home"
        ? "bg-live/20"
        : "bg-red-500/10";

    const goalStyle = 
        incident.side === "home"
        ? "bg-live"
        : "bg-red-500";
    
    const iconContainerStyle =
        incident.type === "goal"
        ? `${style.iconContainer} ${goalStyle}`
        : style.iconContainer;
  
    
  
    return (
      <div
        className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${style.card} ${goalCardColor}`}
      >
        {/* Match minute */}
        <div className="w-12 text-center shrink-0">
          <span className={`font-jakarta text-base ${style.time}`}>
            {incident.minute}
          </span>
        </div>
  
        {/* Incident icon */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${iconContainerStyle} `}
        >
          {incident.type === "yellow-card" ? (
            <div className="w-3.5 h-5 bg-amber-400 rounded-xs" />
          ) : (
            <span className="material-symbols-outlined text-lg! ">
              {style.icon}
            </span>
          )}
        </div>
  
        {/* Incident details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`font-jakarta text-base text-primary ${
                incident.type === "goal"
                  ? "font-extrabold uppercase tracking-wide"
                  : incident.type === "substitution"
                  ? "font-bold"
                  : "font-semibold"
              }`}
            >
              {incident.title}
            </span>
  
            {incident.team && (
              <span
                className={`text-sm font-jakarta font-bold px-1.5 py-0.2 rounded ${
                  incident.side === "home"
                    ? incident.type === "goal"
                      ? "bg-live text-white"
                      : "bg-live/20 text-live"
                    : incident.type === "goal"
                    ? "bg-red-500 text-white"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {incident.team}
              </span>
            )}
  
            {incident.badge && (
              <span className="text-base font-jakarta font-bold bg-live text-white px-1.5 py-0.2 rounded">
                {incident.badge}
              </span>
            )}
          </div>
  
          <p
            className={`font-jakarta text-sm ${
              incident.type === "goal"
                ? "text-primary"
                : "text-primary/80"
            }`}
          >
            {incident.description}
          </p>
        </div>
    </div>
    );
  }
  
  export default function MatchTimeline() {
    return (
      <section className="bg-white rounded-xl p-5 shadow-sm border">
        <TimelineHeader count={incidents.length} />
  
        <div className="space-y-3">
          {incidents.map((incident, index) => (
            <TimelineIncident key={`${incident.type}-${incident.minute ?? "ht"}-${index}`} incident={incident} />
          ))}
        </div>
      </section>
    );
  }