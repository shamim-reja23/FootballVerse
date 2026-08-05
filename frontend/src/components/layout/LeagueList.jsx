import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const leagues = [
    {
      id: "pl",
      name: "Premier League",
      country: "England",
      logo: "/logos/pl.png",
    },
    {
      id: "ucl",
      name: "Champions League",
      country: "Europe",
      logo: "/logos/ucl.png",
    },
    {
      id: "laliga",
      name: "La Liga",
      country: "Spain",
      logo: "/logos/laliga.png",
    },
    {
      id: "serie-a",
      name: "Serie A",
      country: "Italy",
      logo: "/logos/seriea.png",
    },
    {
      id: "bundesliga",
      name: "Bundesliga",
      country: "Germany",
      logo: "/logos/bundesliga.png",
    },
  ];


function LeagueList() {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">Competitions</h2>

      <div className="space-y-2">
        {leagues.map((league) => (
          <Link
            key={league.id}
            to={`/competitions/${league.id}`}
            className="group flex items-center justify-between rounded-lg border p-3 transition-all hover:border-primary hover:bg-accent"
          >
            <div className="flex items-center gap-3">
              <img
                src={league.logo}
                alt={league.name}
                className="h-8 w-8 object-contain"
              />

                <div>
                  <p className="font-semibold">
                    {league.name}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {league.country}
                  </p>
                </div>
            </div>

            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>

      <Link
        to="/competitions"
        className="flex justify-center rounded-lg border border-dashed py-3 text-sm font-medium text-primary hover:bg-accent"
      >
        View All Competitions
      </Link>
    </div>
  );
}

export default LeagueList;