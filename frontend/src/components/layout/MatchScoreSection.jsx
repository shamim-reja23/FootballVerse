import { Button } from "../ui/button";
import Container from "./Container";

function MatchStatusControls() {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="bg-white  text-slate-500 font-jakarta text-sm px-0 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-xl! text-primary">
            sensors
          </span>
          <span className="hidden sm:inline">Live Commentary</span>
        </Button>

        <Button variant="ghost" className="bg-white  text-slate-500 font-jakarta textsm px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-xl!">
            volume_up
          </span>
          <span className="hidden sm:inline">Audio</span>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost"
          className="p-1.5 bg-white text-slate-500 hover:text-primary rounded-lg transition-colors cursor-pointer"
          title="Share Match"
        >
          <span className="material-symbols-outlined text-xl!">
            share
          </span>
        </Button>

        <Button variant="ghost"
          className="p-1.5 bgwhite text-slate-500 hover:text-primary rounded-lg transition-colors cursor-pointer"
          title="Pin Match"
        >
          <span className="material-symbols-outlined text-xl!">
            push_pin
          </span>
        </Button>
      </div>
    </div>
  );
}

function TeamInfo({ team, side }) {
  const isHome = side === "home";

  return (
    <div
      className={`md:col-span-5 flex items-center gap-3 min-w-0 ${
        isHome
          ? "justify-start md:justify-end order-1"
          : "justify-start order-3"
      }`}
    >
      {isHome && (
        <TeamCrest team={team} />
      )}

      <div
        className={`flex flex-col min-w-0 ${
          isHome ? "text-left md:text-right" : "text-left"
        }`}
      >
        <div
          className={`flex items-center gap-2 ${
            isHome ? "md:justify-end" : ""
          }`}
        >
          <span className="font-jakarta text-2xl font-extrabold text-primary tracking-tight truncate">
            {team.name}
          </span>

          <span className="bg-background px-2 py-0.5 rounded text-[11px] font-bold text-slate-500 font-jakarta">
            {isHome ? "HOME" : "AWAY"}
          </span>
        </div>

        <p className="font-jakarta text-[13px] text-slate-800">
          {team.manager} • {team.position}
        </p>
      </div>

      {!isHome && (
        <TeamCrest team={team} />
      )}
    </div>
  );
}

function TeamCrest({ team }) {
  return (
    <div
      className={`w-16 h-16 rounded-xl ${team.crestClass} flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden`}
    >
      <span className="material-symbols-outlined text-[36px] relative z-10">
        shield
      </span>

      <span className="absolute bottom-1 font-jakarta text-[9px] font-black z-10">
        {team.shortName}
      </span>
    </div>
  );
}

function ScoreDisplay({ homeScore, awayScore, matchStatus }) {
  return (
    <div className="md:col-span-2 flex flex-col items-center justify-center text-center order-2">
      <div className="inline-flex items-center gap-3 bg-background px-5 py-2 rounded-xl shadow-inner">
        <span className="font-jakarta text-4xl text-primary font-extrabold tracking-tight">
          {homeScore}
        </span>

        <span className="font-jakarta text-4xl text-primary select-none">
          :
        </span>

        <span className="font-jakarta text-4xl text-primary font-extrabold tracking-tight">
          {awayScore}
        </span>
      </div>

      <span className="font-jakarta text-sm uppercase rounded-full tracking-wider text-live bg-live/10 px-3 py-1 font-bold mt-1.5 flex items-center gap-1">
        {matchStatus.isLive && (
          <span className="w-2 h-2 rounded-full bg-live animate-pulse inline-block" />
        )}

        {matchStatus.label}
      </span>
    </div>
  );
}

function MatchGoalscorers({ goals }) {
  const homeGoals = goals.filter((goal) => goal.side === "home");
  const awayGoals = goals.filter((goal) => goal.side === "away");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 pb-3 border-b border-border text-sm font-jakarta text-primary">
      <div className="flex items-center md:justify-end gap-3 flex-wrap">
        {homeGoals.map((goal, index) => (
          <GoalScorer key={`${goal.player}-${goal.minute}-${index}`} goal={goal} />
        ))}
      </div>

      <div className="flex items-center justify-start gap-3 flex-wrap">
        {awayGoals.map((goal, index) => (
          <GoalScorer key={`${goal.player}-${goal.minute}-${index}`} goal={goal} />
        ))}
      </div>
    </div>
  );
}

function GoalScorer({ goal }) {
  return (
    <span className="inline-flex items-center gap-1 text-primary font-semibold">
      <span
        className={`material-symbols-outlined text-base! ${
          goal.side === "home" ? "text-emerald-500" : "text-red-500"
        }`}
      >
        sports_soccer
      </span>

      {goal.player} {goal.minute}'
      {goal.isPenalty && " (P)"}
      {goal.isOwnGoal && " (OG)"}
    </span>
  );
}

export default function MatchScoreSection() {
  const match = {
    homeTeam: {
      name: "Arsenal",
      shortName: "ARS",
      manager: "M. Arteta",
      position: "1st Live Standings",
      crestClass: "bg-red-500/10 text-error",
    },

    awayTeam: {
      name: "Chelsea",
      shortName: "CHE",
      manager: "E. Maresca",
      position: "4th Live Standings",
      crestClass: "bg-tertiary/10 text-tertiary",
    },

    homeScore: 2,
    awayScore: 1,

    matchStatus: {
      isLive: true,
      label: "68' Live",
    },

    goals: [
      {
        player: "B. Saka",
        minute: 24,
        side: "home",
      },
      {
        player: "M. Ødegaard",
        minute: 58,
        side: "home",
        isPenalty: true,
      },
      {
        player: "C. Palmer",
        minute: 41,
        side: "away",
      },
    ],
  };

  return (
    <section className="w-full bg-white">
      <Container className="mt-4 px-0!">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 items-center py-3">
          <TeamInfo team={match.homeTeam} side="home" />

          <ScoreDisplay
            homeScore={match.homeScore}
            awayScore={match.awayScore}
            matchStatus={match.matchStatus}
          />

          <TeamInfo team={match.awayTeam} side="away" />
        </div>
        <MatchGoalscorers goals={match.goals} />

        <MatchStatusControls />

      </Container>
    </section>
  );
}