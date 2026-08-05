import { Star } from "lucide-react";


function MatchCard({ match }) {
  const {
    competition,
    competitionLogo,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    status,
    minute,
    kickoff,
  } = match;

  const renderStatus = () => {
    switch (status) {
      case "LIVE":
        return (
          <div className="flex items-center gap-2 rounded-full bg-live/20 px-3 py-1 text-xs font-semibold text-live">
            <span className="h-2 w-2 rounded-full bg-live animate-pulse"></span>
            LIVE • {minute}'
          </div>
        );

      case "HT":
        return (
          <div className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-600">
            HT
          </div>
        );

      case "FT":
        return (
          <div className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">
            FT
          </div>
        );

      case "UPCOMING":
        return (
          <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-500">
            {kickoff}
          </div>
        );

      case "POSTPONED":
        return (
          <div className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
            Postponed
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="group flex min-h-36 cursor-pointer flex-col justify-between rounded-xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      {/* Competition */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={competitionLogo}
            alt={competition}
            className="h-5 w-5 object-contain"
          />

          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {competition}
          </span>
        </div>

        <Star className="h-3 w-3 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>

      {/* Teams */}
      <div className="mt-4">
        <div className="grid grid-cols-3 items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src={homeTeam.logo}
              alt={homeTeam.name}
              className="h-10 w-10 object-contain"
            />

            <span className="text-sm font-semibold text-center truncate w-fit">
              {homeTeam.name}
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            {status !== "UPCOMING" ? (
              <>
                <span className="text-3xl font-extrabold">{homeScore}</span>
                <span className="text-muted-foreground">-</span>
                <span className="text-3xl font-extrabold">{awayScore}</span>
              </>
            ) : (
              <span className="text-lg font-semibold text-muted-foreground">
                VS
              </span>
            )}
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src={awayTeam.logo}
              alt={awayTeam.name}
              className="h-10 w-10 object-contain"
            />

            <span className="text-sm font-semibold text-center truncate w-fit">
              {awayTeam.name}
            </span>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 flex justify-center">{renderStatus()}</div>
    </div>
  );
}

export default MatchCard;