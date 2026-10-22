import ArticleCard from "@/components/layout/ArticleCard.jsx";
import Container from "@/components/layout/Container.jsx";
import DateSelector from "@/components/layout/DateSelector";
import FeaturedArticle from "@/components/layout/FeaturedArticle.jsx";
import LatestNews from "@/components/layout/LatestNews";
import LeagueList from "@/components/layout/LeagueList";
import MatchCard from "@/components/layout/MatchCard";
import TopLeagues from "@/components/layout/TopLeagues";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Trophy,
} from "lucide-react";
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
  image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200",
};

export const latestNews = [
  {
    id: 1,
    title: "La Liga secures record-breaking domestic television rights deal",
    time: "12 mins ago",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=300",
  },
  {
    id: 2,
    title:
      "Barcelona stadium renovation project hits new milestone ahead of schedule",
    time: "45 mins ago",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300",
  },
  {
    id: 3,
    title: "Transfer Talk: Juventus monitoring Dutch prodigy for summer move",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=300",
  },
  {
    id: 4,
    title: "New offside technology to be tested in upcoming friendly matches",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300",
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

  const liveCount = matches.filter((m) => m.status === "LIVE").length;

  const todayCount = matches.filter(
    (m) => m.status === "LIVE" || m.status === "FT"
  ).length;

  const upcomingCount = matches.filter((m) => m.status === "UPCOMING").length;

  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-white sticky top-16 z-40 border-b border-slate-200 shadow-xs">
        <Container className="py-2 flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-primary transition-colors flex"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <DateSelector />
          <Button
            variant="ghost"
            size="icon"
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-primary transition-colors flex"
          >
            <ChevronRight className="size-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex  gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors font-semibold shadow-xs"
          >
            <CalendarDays className="size-5 text-[#059669]" />
          </Button>
        </Container>
      </div>

      <Container className="py-5">
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <aside className="hidden lg:flex lg:col-span-3 flex-col gap-3">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Trophy className="text-[#059669] size-4"/>
                    <span className="text-xs uppercase text-primary tracking-wider font-extrabold">
                      Top Leagues
                    </span>
                  </div>
                  <a
                    className="text-sm text-blue-600 hover:text-emerald-600 transition-colors font-semibold"
                    href="#"
                  >
                    Edit
                  </a>
                </div>
                
                <TopLeagues/>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-amber-500 text-[18px]"
                      //style="font-variation-settings: 'FILL' 1"
                    >
                      star
                    </span>
                    <span className="font-label-caps text-[12px] uppercase text-[#0F172A] tracking-wider font-extrabold">
                      Followed Teams
                    </span>
                  </div>
                  <button
                    aria-label="Add team"
                    className="text-slate-400 hover:text-[#0F172A] transition-colors flex items-center"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      add_circle
                    </span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-all text-[#0F172A] font-body-sm text-body-sm font-semibold">
                    <span
                      className="material-symbols-outlined text-amber-500 text-[14px]"
                      //style="font-variation-settings: 'FILL' 1"
                    >
                      star
                    </span>
                    <span>Arsenal</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-all text-[#0F172A] font-body-sm text-body-sm font-semibold">
                    <span
                      className="material-symbols-outlined text-amber-500 text-[14px]"
                      //style="font-variation-settings: 'FILL' 1"
                    >
                      star
                    </span>
                    <span>Real Madrid</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-all text-[#0F172A] font-body-sm text-body-sm font-semibold">
                    <span
                      className="material-symbols-outlined text-amber-500 text-[14px]"
                      //style="font-variation-settings: 'FILL' 1"
                    >
                      star
                    </span>
                    <span>Inter Milan</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-all text-[#0F172A] font-body-sm text-body-sm font-semibold">
                    <span
                      className="material-symbols-outlined text-amber-500 text-[14px]"
                      //style="font-variation-settings: 'FILL' 1"
                    >
                      star
                    </span>
                    <span>Dortmund</span>
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-100/60 rounded-full blur-xl pointer-events-none"></div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <span className="font-label-caps text-[11px] uppercase text-[#059669] tracking-wider font-extrabold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping"></span>
                    Pinned Match
                  </span>
                  <button
                    aria-label="Unpin match"
                    className="text-amber-500 hover:text-amber-600"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      // style="font-variation-settings: 'FILL' 1"
                    >
                      star
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-between py-1">
                  <div class="flex flex-col gap-0.5">
                    <span className="font-body-md text-body-md font-bold text-[#0F172A]">
                      Arsenal
                    </span>
                    <span className="font-body-md text-body-md text-slate-500 font-medium">
                      Chelsea
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-md text-headline-md font-extrabold text-[#059669]">
                        2
                      </span>
                      <span className="font-body-sm text-body-sm text-slate-400">
                        -
                      </span>
                      <span className="font-headline-md text-headline-md font-extrabold text-[#0F172A]">
                        1
                      </span>
                    </div>
                    <span className="font-badge-status text-[11px] text-[#059669] font-extrabold">
                      72' LIVE
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-slate-500 font-label-caps text-[11px] font-semibold">
                  <span>xG: 1.94 vs 1.12</span>
                  <span>Emirates Stadium</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#059669] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    insights
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-body-sm text-body-sm font-bold text-[#0F172A]">
                    Matchday Pulse
                  </span>
                  <span className="font-label-caps text-[11px] text-slate-500 font-medium leading-relaxed">
                    Over 3.42 goals/match average across 5 major leagues today.
                  </span>
                </div>
              </div>
            </aside>

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

                  <TabsTrigger
                    value="upcoming"
                    className="rounded-full px-5 py-2"
                  >
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
            <h3 className="text-xl font-extrabold font-heading">
              Latest Analysis
            </h3>
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
                <ArticleCard articlesList={item} />
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
