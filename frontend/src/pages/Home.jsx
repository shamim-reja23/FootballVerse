import Container from "@/components/layout/Container.jsx";
import LeagueList from "@/components/layout/LeagueList";
import MatchCard from "@/components/layout/MatchCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const matches = [
  {
    id: 1,
    competition: "Premier League",
    competitionLogo: "/premier-league.png",

    homeTeam: {
      name: "Arsenal",
      logo: "/arsenal.png",
    },

    awayTeam: {
      name: "Chelsea",
      logo: "/chelsea.png",
    },

    homeScore: 2,
    awayScore: 1,

    status: "LIVE",
    minute: 72,
  },

  {
    id: 2,
    competition: "La Liga",
    competitionLogo: "/laliga.png",

    homeTeam: {
      name: "Barcelona",
      logo: "/barca.png",
    },

    awayTeam: {
      name: "Real Madrid",
      logo: "/madrid.png",
    },

    homeScore: 3,
    awayScore: 2,

    status: "FT",
  },

  {
    id: 3,
    competition: "Serie A",
    competitionLogo: "/seriea.png",

    homeTeam: {
      name: "Inter",
      logo: "/inter.png",
    },

    awayTeam: {
      name: "Juventus",
      logo: "/juve.png",
    },

    status: "UPCOMING",
    kickoff: "Today 20:45",
  },
  {
    id: 4,
    competition: "Premier League",
    competitionLogo: "/premier-league.png",

    homeTeam: {
      name: "Arsenal",
      logo: "/arsenal.png",
    },

    awayTeam: {
      name: "Chelsea",
      logo: "/chelsea.png",
    },

    homeScore: 2,
    awayScore: 1,

    status: "LIVE",
    minute: 72,
  },

  {
    id: 5,
    competition: "La Liga",
    competitionLogo: "/laliga.png",

    homeTeam: {
      name: "Barcelona",
      logo: "/barca.png",
    },

    awayTeam: {
      name: "Real Madrid",
      logo: "/madrid.png",
    },

    homeScore: 3,
    awayScore: 2,

    status: "FT",
  },

  {
    id: 6,
    competition: "Serie A",
    competitionLogo: "/seriea.png",

    homeTeam: {
      name: "Inter",
      logo: "/inter.png",
    },

    awayTeam: {
      name: "Juventus",
      logo: "/juve.png",
    },

    status: "UPCOMING",
    kickoff: "Tomorrow 20:45",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState();

  const displayMatches = matches.filter((match) => {
    switch (activeTab) {
      case "live":
        return match.status === "LIVE";
      case "today":
        return match.status === "LIVE" || match.status === "FT";
      case "upcoming":
        return match.status === "UPCOMING";
      default:
        return false;
    }
  });

  return (
    <section className="py-8">
      <Container className="space-y-10">
        {/* Header */}
        <div className="border-b border-border pb-4">
          <div className="space-y-4">
            <h1 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
              Matches
            </h1>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="h-auto gap-2 rounded-full bg-transparent p-0">
                <TabsTrigger value="live" className="rounded-full px-5 py-2">
                  <span className="mr-2 h-2 w-2 rounded-full bg-live animate-live" />
                  LIVE
                </TabsTrigger>

                <TabsTrigger value="today" className="rounded-full px-5 py-2">
                  TODAY
                </TabsTrigger>

                <TabsTrigger value="upcoming" className="rounded-full px-5 py-2">
                  UPCOMING
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Matches */}
          <div className="lg:col-span-9 space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {displayMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>

            <Link
              to="/matches"
              className="flex w-fit items-center gap-1 text-sm font-medium transition-all hover:gap-2"
            >
              View All Matches
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <LeagueList />
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default Home;
