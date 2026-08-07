import ArticleCard from "@/components/layout/ArticleCard.jsx";
import Container from "@/components/layout/Container.jsx";
import FeaturedArticle from "@/components/layout/FeaturedArticle.jsx";
import LatestNews from "@/components/layout/LatestNews";
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
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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

export const featuredArticle = {
  id: 1,
  tag: "Exclusive",
  title:
    "The Tactical Evolution of the False Nine: Why Traditional Strikers are Returning to the Elite Game",
  excerpt:
    "As European leagues enter the final stretch, the return of the powerhouse center-forward is redefining how top managers approach the final third.",
  readTime: "15 min read",
  image:
    "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200",
};

export const latestNews = [
  {
    id: 1,
    title: "La Liga secures record-breaking domestic television rights deal",
    time: "12 mins ago",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=300",
  },
  {
    id: 2,
    title:
      "Barcelona stadium renovation project hits new milestone ahead of schedule",
    time: "45 mins ago",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300",
  },
  {
    id: 3,
    title:
      "Transfer Talk: Juventus monitoring Dutch prodigy for summer move",
    time: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=300",
  },
  {
    id: 4,
    title:
      "New offside technology to be tested in upcoming friendly matches",
    time: "3 hours ago",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300",
  },
];

export const articlesList = [
  {
    id: 1,
    tag: "Tactics",
    title: "The 4-2-2-2 Hybrid: How Xabi Alonso broke the Bundesliga",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300",
    date: "Feb 24, 2024",
  },
  {
    id: 2,
    tag: "In-Depth",
    title: "Inside the Mind of a Wonderkid: The Pressure of $100m Expectations",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300",
    date: "Feb 23, 2024",
  },
  {
    id: 3,
    tag: "In-Depth",
    title: "Inside the Mind of a Wonderkid: The Pressure of $100m Expectations",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300",
    date: "Feb 23, 2024",
  }
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

  const liveCount = matches.filter(m => m.status === "LIVE").length;

  const todayCount = matches.filter(
    m => m.status === "LIVE" || m.status === "FT"
  ).length;

  const upcomingCount = matches.filter(
    m => m.status === "UPCOMING"
  ).length;

  return (
    <div className="py-8">
      <Container className="space-y-12">
        <section className="space-y-8">
          <div className="border-b border-border pb-4">
            <div className="space-y-4">
              <h1 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
                Matches
              </h1>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="h-auto gap-2 rounded-full bg-transparent p-0">
                  <TabsTrigger value="live" className="rounded-full px-5 py-2">
                    <span className="mr-2 h-2 w-2 rounded-full bg-live animate-live" />
                    LIVE ({liveCount})
                  </TabsTrigger>

                  <TabsTrigger value="today" className="rounded-full px-5 py-2">
                    TODAY ({todayCount})
                  </TabsTrigger>

                  <TabsTrigger value="upcoming" className="rounded-full px-5 py-2">
                    UPCOMING ({upcomingCount})
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
        </section>

        <section className="py-12">

          <div className="grid gap-10 lg:grid-cols-10">
            <div className="lg:col-span-7">
              <FeaturedArticle article={featuredArticle} />
            </div>

            <div className="lg:col-span-3">
              <LatestNews news={latestNews} />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="text-xl font-extrabold font-heading">Latest Analysis</h3>
            <Link
              to="/articles"
              className="flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articlesList.map((item, index) => (
              <div key={item.id}>
                <ArticleCard articlesList={item}/>
                {index !== articlesList.length - 1}
              </div>
            ))}
          </div>
        </section>
      </Container>

    </div>
  );
};

export default Home;
