import ArticleCard from "@/components/layout/ArticleCard.jsx";
import Container from "@/components/layout/Container.jsx";
import DateSelector from "@/components/layout/DateSelector";
import FeaturedArticle from "@/components/layout/FeaturedArticle.jsx";
import LatestNews from "@/components/layout/LatestNews";
import LeagueList from "@/components/layout/LeagueList";
import MatchCard from "@/components/layout/MatchCard";
import TopLeagues from "@/components/layout/TopLeagues";
import MatchFilters from "@/components/layout/MatchFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  ArrowRight,
  CalendarDays,
  ChartLine,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Star,
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

const followedTeams = [
  { id: 1, name: "Arsenal" },
  { id: 2, name: "Real Madrid" },
  { id: 3, name: "Inter Milan" },
  { id: 4, name: "Dortmund" },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState();

  const [activeFilter, setActiveFilter] = useState("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const counts = {
    all: 28,
    live: 7,
    upcoming: 14,
    finished: 7,
  };

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
                    <Star 
                      className="text-amber-500 size-4"
                      fill="currentColor"
                    />

                    <span className="text-xs uppercase tracking-wider font-extrabold">
                      Followed Teams
                    </span>
                  </div>
                  <Button variant="ghost" size="icon"
                    className="text-slate-400 hover:text-[#0F172A] transition-colors flex items-center hover:bg-transparent cursor-pointer"
                  >
                    <CirclePlus className="size-4"/>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {followedTeams.map((team) => (
                    <Button
                      key={team.id}
                      className="flex gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100  text-sm font-semibold text-primary"
                    >
                      <Star 
                      className="text-amber-500 size-4"
                      fill="currentColor"
                      />
                      <span>{team.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-100/60 rounded-full blur-xl pointer-events-none"></div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <span className="text-[11px] uppercase text-[#059669] tracking-wider font-extrabold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping"></span>
                    Pinned Match
                  </span>
                  <Button
                    variant="ghost"
                    className="text-amber-500 hover:text-amber-600 hover:bg-transparent"
                  >
                    <Star
                      className="size-4"
                      fill="currentColor"
                    />
                  </Button>
                </div>
                <div className="flex items-center justify-between py-1">
                  <div class="flex flex-col gap-0.5">
                    <span className="text-sm font-bold text-primary">
                      Arsenal
                    </span>
                    <span className="text-sm text-slate-500 font-medium">
                      Chelsea
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-extrabold text-[#059669]">
                        2
                      </span>
                      <span className="text-sm text-slate-400">
                        -
                      </span>
                      <span className="text-lg font-extrabold text-primary">
                        1
                      </span>
                    </div>
                    <span className="text-[11px] text-[#059669] font-extrabold">
                      72' LIVE
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-slate-500 uppercase text-[11px] font-semibold">
                  <span>xG: 1.94 vs 1.12</span>
                  <span>Emirates Stadium</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#059669] shrink-0">
                  <ChartLine className="size-6"/>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold">
                    Matchday Pulse
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Over 3.42 goals/match average across 5 major leagues today.
                  </span>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-6 flex flex-col gap-3">
              <div className="relative bg-white rounded-xl p-3 md:p-5 border border-slate-200 shadow-xs overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-linear-to-tr from-emerald-50/50 via-white to-blue-50/40 pointer-events-none"
                ></div>
                <div
                  className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"
                ></div>
                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                      <span
                        className="text-[11px] uppercase text-blue-700 font-extrabold tracking-wider"
                        >Premier League • Matchday 10</span
                      >
                    </div>
                    <div
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669]"
                    >
                      <span
                        className="w-2 h-2 rounded-full bg-[#00E676] animate-ping"
                      ></span>
                      <span
                        className="text-xs font-extrabold uppercase"
                        >Live 68'</span>
                    </div>
                  </div>

                  <div
                    className="grid grid-cols-12 items-center py-2 gap-2"
                  >

                    <div
                      className="col-span-5 flex flex-col items-center md:items-end text-center md:text-right"
                    >
                      <div
                        className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-lg font-black shadow-xs mb-2 font-jakarta"
                      >
                        AFC
                      </div>
                      <h3
                        className="text-lg font-extrabold  leading-tight font-jakarta"
                      >
                        Arsenal
                      </h3>
                      <span
                        className="text-[11px] text-slate-500 uppercase font-bold"
                        >Home</span>
                    </div>

                    <div
                      className="col-span-2 flex flex-col items-center justify-center"
                    >
                      <div
                        className="px-3 py-1 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 shadow-inner"
                      >
                        <span
                          className="text-5xl font-black text-[#059669] font-jakarta"
                          >2</span>
                        <span
                          className="text-3xl font-bold text-slate-400"
                          >:</span>
                        <span
                          className="text-5xl font-black text-primary font-jakarta"
                          >1</span>
                      </div>
                      <span
                        className="font-jakarta text-xs text-slate-500 mt-1 font-bold"
                        >2nd Half</span>
                    </div>

                    <div
                      className="col-span-5 flex flex-col items-center md:items-start text-center md:text-left"
                    >
                      <div
                        className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-jakarta text-lg font-black text-primary shadow-xs mb-2"
                      >
                        CFC
                      </div>
                      <h3
                        className="font-jakarta text-lg font-extrabold text-primary leading-tight"
                      >
                        Chelsea
                      </h3>
                      <span
                        className="font-jakarta text-[11px] text-slate-500 uppercase font-bold"
                        >Away</span>
                    </div>
                  </div>

                  <div
                    className="grid grid-cols-2 gap-3 my-3 pt-1 text-slate-600 font-jakarta text-sm border-t border-slate-100"
                  >
                    <div className="flex flex-col items-end gap-0.5 text-right">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-primary"
                          >B. Saka</span>
                        <span
                          className="font-jakarta text-sm text-[#059669] font-bold"
                          >24'</span>
                        <span
                          className="material-symbols-outlined text-sm! text-slate-400"
                          >sports_soccer</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span class="font-semibold text-primary"
                          >M. Ødegaard</span>
                        <span
                          className="font-jakarta text-sm text-[#059669] font-bold"
                          >58' (P)</span>
                        <span
                          className="material-symbols-outlined text-sm! text-slate-400"
                          >sports_soccer</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-0.5 text-left">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="material-symbols-outlined text-sm! text-slate-400"
                          >sports_soccer</span>
                        <span class="font-semibold text-primary"
                          >C. Palmer</span >
                        <span
                          class="font-jakarta text-sm text-[#059669] font-bold"
                          >41'</span >
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col gap-1 mb-3"
                  >
                    <div
                      className="flex items-center justify-between font-label-caps text-[11px] uppercase text-slate-500 font-bold"
                    >
                      <span className="text-[#059669]">56%</span>
                      <span className="text-[#0F172A]">Possession</span>
                      <span className="text-blue-600">44%</span>
                    </div>
                    <div
                      className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden flex"
                    >
                      <div className="h-full bg-[#00E676] w-[56%]" ></div>
                      <div className="h-full bg-blue-500 w-[44%]" ></div>
                    </div>
                    <div
                      className="grid grid-cols-3 text-center pt-1 font-jakarta text-xs"
                    >
                      <div>
                        <span
                          className="font-jakarta text-sm font-bold text-primary"
                          >6</span                        >
                        <span
                          className="text-slate-500 font-jakarta text-[11px] font-bold block"
                          >Shots on Target</span                        >
                      </div>
                      <div>
                        <span
                          className="font-jakarta text-sm font-bold text-[#059669]"
                          >1.84 vs 1.12</span                        >
                        <span
                          className="text-slate-500 font-jakarta text-[11px] block font-bold"
                          >Expected Goals (xG)</span                        >
                      </div>
                      <div>
                        <span
                          className="font-jakarta text-sm font-bold text-primary"
                          >4</span                        >
                        <span
                          className="text-slate-500 font-jakarta text-[11px] font-bold block"
                          >Shots on Target</span                        >
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex flex-wrap items-center gap-1 justify-between pt-1"
                  >
                    <div className="flex items-center gap-1">
                      <Button
                        className="px-3 py-2 rounded-lg bg-[#00E676] text-[#0F172A] font-jakarta text-sm font-extrabold flex gap-1.5 hover:bg-[#00c853] shadow-[0_2px_8px_rgba(0,230,118,0.3)] cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-lg"
                          >sports_score</span >
                        <span>Match Center</span>
                      </Button>
                      <Button
                        className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-primary font-jakarta text-sm font-semibold flex gap-1.5"
                      >
                        <span
                          className="material-symbols-outlined text-lg text-blue-600"
                          >play_circle</span >
                        <span>Highlights</span>
                      </Button>
                    </div>
                    <Button
                      className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700  font-jakarta text-sm font-semibold flex gap-1.5"
                    >
                      <span
                        className="material-symbols-outlined text-lg text-slate-500"
                        >headset</span>
                      <span className="hidden sm:inline">Live Audio
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <MatchFilters
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                  favoritesOnly={favoritesOnly}
                  onFavoritesChange={setFavoritesOnly}
                  counts={counts}
                />
              </div>

              <div className="flex flex-col gap-3">

                <div
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs"
                >

                  <div
                    className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span class="font-jakarta text-[11px] font-bold"
                        >🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                      <span
                        className="font-jakarta text-sm font-bold text-primary"
                        >Premier League</span>
                      <span
                        className="font-jakarta text-[11px] text-slate-500 font-semibold"
                        >Matchday 10</span>
                    </div>
                    <span
                      className="material-symbols-outlined text-slate-400 text-lg! cursor-pointer hover:text-primary"
                      >chevron_right</span>
                  </div>

                  <div className="flex flex-col divide-y divide-slate-100">

                    <div
                      className="px-3 py-2 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <Button
                          variant="ghost"
                          className="text-amber-500 hover:text-amber-600 shrink-0 hover:bg-transparent"
                        >
                          <span
                            className="material-symbols-outlined text-lg! [font-variation-settings:'FILL'_1]"
                            
                            >star</span>
                        </Button>
                        <div
                          className="grid grid-cols-12 items-center flex-1 gap-2"
                        >
                          <span
                            className="col-span-5 text-right font-jakarta text-sm font-bold text-primary truncate"
                            >Arsenal</span>
                          <div
                            className="col-span-2 flex items-center justify-center gap-1.5 font-tabular-stat text-tabular-stat font-extrabold text-[#059669]"
                          >
                            <span>2</span>
                            <span>-</span>
                            <span>1</span>
                          </div>
                          <span
                            class="col-span-5 text-left font-body-md text-body-md font-medium text-slate-700 truncate"
                            >Chelsea</span
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-space-sm shrink-0 ml-space-md"
                      >
                        <div
                          class="flex items-center gap-1 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[#059669]"
                        >
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping"
                          ></span>
                          <span
                            class="font-badge-status text-badge-status font-bold"
                            >68'</span
                          >
                        </div>
                      </div>
                    </div>

                    <div
                      class="px-space-md py-space-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div class="flex items-center gap-space-md flex-1">
                        <button
                          aria-label="Favorite Man City vs Everton"
                          class="text-slate-300 hover:text-amber-500 shrink-0"
                        >
                          <span class="material-symbols-outlined text-[18px]"
                            >star</span
                          >
                        </button>
                        <div
                          class="grid grid-cols-12 items-center flex-1 gap-2"
                        >
                          <span
                            class="col-span-5 text-right font-body-md text-body-md font-bold text-[#0F172A] truncate"
                            >Manchester City</span
                          >
                          <div
                            class="col-span-2 flex items-center justify-center gap-1.5 font-tabular-stat text-tabular-stat font-bold text-[#0F172A]"
                          >
                            <span>3</span>
                            <span>-</span>
                            <span>0</span>
                          </div>
                          <span
                            class="col-span-5 text-left font-body-md text-body-md font-medium text-slate-700 truncate"
                            >Everton</span
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-space-sm shrink-0 ml-space-md"
                      >
                        <span
                          class="font-badge-status text-badge-status px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold border border-slate-200"
                          >FT</span
                        >
                      </div>
                    </div>

                    <div
                      class="px-space-md py-space-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div class="flex items-center gap-space-md flex-1">
                        <button
                          aria-label="Favorite Liverpool vs Aston Villa"
                          class="text-slate-300 hover:text-amber-500 shrink-0"
                        >
                          <span class="material-symbols-outlined text-[18px]"
                            >star</span
                          >
                        </button>
                        <div
                          class="grid grid-cols-12 items-center flex-1 gap-2"
                        >
                          <span
                            class="col-span-5 text-right font-body-md text-body-md font-medium text-[#0F172A] truncate"
                            >Liverpool</span
                          >
                          <div
                            class="col-span-2 flex items-center justify-center font-label-caps text-label-caps text-slate-400 font-bold"
                          >
                            <span>vs</span>
                          </div>
                          <span
                            class="col-span-5 text-left font-body-md text-body-md font-medium text-[#0F172A] truncate"
                            >Aston Villa</span
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-space-sm shrink-0 ml-space-md"
                      >
                        <span
                          class="font-badge-status text-badge-status px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100"
                          >20:00</span
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs"
                >
                  <div
                    class="px-space-md py-space-sm bg-slate-50 border-b border-slate-200 flex items-center justify-between"
                  >
                    <div class="flex items-center gap-space-sm">
                      <span class="font-label-caps text-label-caps font-bold"
                        >🇪🇸</span
                      >
                      <span
                        class="font-body-md text-body-md font-bold text-[#0F172A]"
                        >La Liga</span
                      >
                      <span
                        class="font-label-caps text-label-caps text-slate-500 font-semibold"
                        >Matchday 11</span
                      >
                    </div>
                    <span
                      class="material-symbols-outlined text-slate-400 text-[18px] cursor-pointer hover:text-[#0F172A]"
                      >chevron_right</span
                    >
                  </div>
                  <div class="flex flex-col divide-y divide-slate-100">

                    <div
                      class="px-space-md py-space-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div class="flex items-center gap-space-md flex-1">
                        <button
                          aria-label="Favorite El Clasico"
                          class="text-amber-500 hover:text-amber-600 shrink-0"
                        >
                          <span
                            class="material-symbols-outlined text-lg [font-variation-settings: 'FILL'_1]"
                            
                            >star</span
                          >
                        </button>
                        <div
                          class="grid grid-cols-12 items-center flex-1 gap-2"
                        >
                          <span
                            class="col-span-5 text-right font-body-md text-body-md font-bold text-[#0F172A] truncate"
                            >Real Madrid</span
                          >
                          <div
                            class="col-span-2 flex items-center justify-center gap-1.5 font-tabular-stat text-tabular-stat font-extrabold text-[#059669]"
                          >
                            <span>1</span>
                            <span>-</span>
                            <span>1</span>
                          </div>
                          <span
                            class="col-span-5 text-left font-body-md text-body-md font-bold text-[#0F172A] truncate"
                            >Barcelona</span
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-space-sm shrink-0 ml-space-md"
                      >
                        <span
                          class="hidden md:inline font-label-caps text-label-caps uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-extrabold border border-blue-200"
                          >El Clásico</span
                        >
                        <div
                          class="flex items-center gap-1 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[#059669]"
                        >
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping"
                          ></span>
                          <span
                            class="font-badge-status text-badge-status font-bold"
                            >53'</span
                          >
                        </div>
                      </div>
                    </div>

                    <div
                      class="px-space-md py-space-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div class="flex items-center gap-space-md flex-1">
                        <button
                          aria-label="Favorite Atletico vs Sevilla"
                          class="text-slate-300 hover:text-amber-500 shrink-0"
                        >
                          <span class="material-symbols-outlined text-[18px]"
                            >star</span
                          >
                        </button>
                        <div
                          class="grid grid-cols-12 items-center flex-1 gap-2"
                        >
                          <span
                            class="col-span-5 text-right font-body-md text-body-md font-medium text-[#0F172A] truncate"
                            >Atlético Madrid</span
                          >
                          <div
                            class="col-span-2 flex items-center justify-center gap-1.5 font-tabular-stat text-tabular-stat font-bold text-[#0F172A]"
                          >
                            <span>2</span>
                            <span>-</span>
                            <span>0</span>
                          </div>
                          <span
                            class="col-span-5 text-left font-body-md text-body-md font-medium text-slate-700 truncate"
                            >Sevilla</span
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-space-sm shrink-0 ml-space-md"
                      >
                        <span
                          class="font-badge-status text-badge-status px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold border border-slate-200"
                          >FT</span
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs"
                >
                  <div
                    class="px-space-md py-space-sm bg-slate-50 border-b border-slate-200 flex items-center justify-between"
                  >
                    <div class="flex items-center gap-space-sm">
                      <span class="font-label-caps text-label-caps font-bold"
                        >🇮🇹</span
                      >
                      <span
                        class="font-body-md text-body-md font-bold text-[#0F172A]"
                        >Serie A</span
                      >
                      <span
                        class="font-label-caps text-label-caps text-slate-500 font-semibold"
                        >Matchday 9</span
                      >
                    </div>
                    <span
                      class="material-symbols-outlined text-slate-400 text-[18px] cursor-pointer hover:text-[#0F172A]"
                      >chevron_right</span
                    >
                  </div>
                  <div class="flex flex-col divide-y divide-slate-100">

                    <div
                      class="px-space-md py-space-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div class="flex items-center gap-space-md flex-1">
                        <button
                          aria-label="Favorite Inter vs Juventus"
                          class="text-amber-500 hover:text-amber-600 shrink-0"
                        >
                          <span
                            class="material-symbols-outlined text-[18px] [font-variation-settings: 'FILL' 1]"
                            
                            >star</span
                          >
                        </button>
                        <div
                          class="grid grid-cols-12 items-center flex-1 gap-2"
                        >
                          <span
                            class="col-span-5 text-right font-body-md text-body-md font-bold text-[#0F172A] truncate"
                            >Inter Milan</span
                          >
                          <div
                            class="col-span-2 flex items-center justify-center gap-1.5 font-tabular-stat text-tabular-stat font-extrabold text-[#059669]"
                          >
                            <span>1</span>
                            <span>-</span>
                            <span>0</span>
                          </div>
                          <span
                            class="col-span-5 text-left font-body-md text-body-md font-medium text-slate-700 truncate"
                            >Juventus</span
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-space-sm shrink-0 ml-space-md"
                      >
                        <span
                          class="font-badge-status text-badge-status px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[#059669] font-extrabold"
                          >HT</span
                        >
                      </div>
                    </div>

                    <div
                      class="px-space-md py-space-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div class="flex items-center gap-space-md flex-1">
                        <button
                          aria-label="Favorite Milan vs Roma"
                          class="text-slate-300 hover:text-amber-500 shrink-0"
                        >
                          <span class="material-symbols-outlined text-[18px]"
                            >star</span
                          >
                        </button>
                        <div
                          class="grid grid-cols-12 items-center flex-1 gap-2"
                        >
                          <span
                            class="col-span-5 text-right font-body-md text-body-md font-medium text-[#0F172A] truncate"
                            >AC Milan</span
                          >
                          <div
                            class="col-span-2 flex items-center justify-center font-label-caps text-label-caps text-slate-400 font-bold"
                          >
                            <span>vs</span>
                          </div>
                          <span
                            class="col-span-5 text-left font-body-md text-body-md font-medium text-[#0F172A] truncate"
                            >AS Roma</span
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-space-sm shrink-0 ml-space-md"
                      >
                        <span
                          class="font-badge-status text-badge-status px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100"
                          >20:45</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside class="col-span-1 lg:col-span-3 flex flex-col gap-space-md">

              <div
                class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs"
              >
                <div
                  class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100"
                >
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span
                      class="font-label-caps text-[12px] uppercase text-[#0F172A] tracking-wider font-extrabold"
                      >Premier League</span
                    >
                  </div>
                  <a
                    class="font-body-sm text-body-sm text-blue-600 hover:text-emerald-600 transition-colors font-semibold"
                    href="#"
                    >Full Table →</a
                  >
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-left font-body-sm text-body-sm">
                    <thead>
                      <tr
                        class="font-label-caps text-[10px] text-slate-400 uppercase pb-2"
                      >
                        <th class="py-1 w-6">#</th>
                        <th class="py-1">Club</th>
                        <th class="py-1 text-center">P</th>
                        <th class="py-1 text-center">GD</th>
                        <th class="py-1 text-right">Pts</th>
                      </tr>
                    </thead>
                    <tbody
                      class="divide-y divide-slate-100 font-tabular-stat text-tabular-stat"
                    >

                      <tr class="hover:bg-slate-50 transition-colors relative">
                        <td class="py-2 text-[#059669] font-bold relative pl-2">
                          <span
                            class="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#00E676] rounded-full"
                          ></span>
                          1
                        </td>
                        <td class="py-2 font-bold text-[#0F172A]">Arsenal</td>
                        <td class="py-2 text-center text-slate-400">9</td>
                        <td
                          class="py-2 text-center text-[#0F172A] font-semibold"
                        >
                          +14
                        </td>
                        <td
                          class="py-2 text-right font-extrabold text-[#0F172A]"
                        >
                          22
                        </td>
                      </tr>

                      <tr class="hover:bg-slate-50 transition-colors relative">
                        <td class="py-2 text-[#059669] font-bold relative pl-2">
                          <span
                            class="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#00E676] rounded-full"
                          ></span>
                          2
                        </td>
                        <td class="py-2 font-semibold text-[#0F172A]">
                          Man City
                        </td>
                        <td class="py-2 text-center text-slate-400">9</td>
                        <td
                          class="py-2 text-center text-[#0F172A] font-semibold"
                        >
                          +15
                        </td>
                        <td
                          class="py-2 text-right font-extrabold text-[#0F172A]"
                        >
                          21
                        </td>
                      </tr>

                      <tr class="hover:bg-slate-50 transition-colors relative">
                        <td class="py-2 text-blue-600 font-bold relative pl-2">
                          <span
                            class="absolute left-0 top-1.5 bottom-1.5 w-1 bg-blue-500 rounded-full"
                          ></span>
                          3
                        </td>
                        <td class="py-2 font-semibold text-[#0F172A]">
                          Liverpool
                        </td>
                        <td class="py-2 text-center text-slate-400">9</td>
                        <td
                          class="py-2 text-center text-[#0F172A] font-semibold"
                        >
                          +11
                        </td>
                        <td
                          class="py-2 text-right font-extrabold text-[#0F172A]"
                        >
                          20
                        </td>
                      </tr>

                      <tr class="hover:bg-slate-50 transition-colors relative">
                        <td class="py-2 text-blue-600 font-bold relative pl-2">
                          <span
                            class="absolute left-0 top-1.5 bottom-1.5 w-1 bg-blue-500 rounded-full"
                          ></span>
                          4
                        </td>
                        <td class="py-2 font-semibold text-[#0F172A]">
                          Chelsea
                        </td>
                        <td class="py-2 text-center text-slate-400">9</td>
                        <td
                          class="py-2 text-center text-[#0F172A] font-semibold"
                        >
                          +7
                        </td>
                        <td
                          class="py-2 text-right font-extrabold text-[#0F172A]"
                        >
                          17
                        </td>
                      </tr>

                      <tr class="hover:bg-slate-50 transition-colors">
                        <td class="py-2 text-slate-400 pl-2">5</td>
                        <td class="py-2 font-medium text-slate-700">
                          Aston Villa
                        </td>
                        <td class="py-2 text-center text-slate-400">9</td>
                        <td class="py-2 text-center text-slate-600">+5</td>
                        <td class="py-2 text-right font-bold text-[#0F172A]">
                          16
                        </td>
                      </tr>

                      <tr class="hover:bg-slate-50 transition-colors">
                        <td class="py-2 text-slate-400 pl-2">6</td>
                        <td class="py-2 font-medium text-slate-700">
                          Tottenham
                        </td>
                        <td class="py-2 text-center text-slate-400">9</td>
                        <td class="py-2 text-center text-slate-600">+4</td>
                        <td class="py-2 text-right font-bold text-[#0F172A]">
                          15
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs"
              >
                <div
                  class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100"
                >
                  <div class="flex items-center gap-2">
                    <span
                      class="material-symbols-outlined text-amber-500 text-[18px]"
                      >military_tech</span
                    >
                    <span
                      class="font-label-caps text-[12px] uppercase text-[#0F172A] tracking-wider font-extrabold"
                      >Top Scorers</span
                    >
                  </div>
                  <span
                    class="font-label-caps text-[11px] text-slate-500 uppercase font-bold"
                    >2024/25</span
                  >
                </div>
                <div class="flex flex-col gap-2">
                  <div
                    class="flex items-center justify-between p-2 rounded-lg bg-emerald-50/60 border border-emerald-100 hover:bg-emerald-50 transition-colors"
                  >
                    <div class="flex items-center gap-2.5">
                      <span
                        class="font-tabular-stat text-tabular-stat font-extrabold text-[#059669] w-4"
                        >1</span
                      >
                      <div
                        class="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-label-caps text-blue-700 font-bold text-xs"
                      >
                        EH
                      </div>
                      <div class="flex flex-col">
                        <span
                          class="font-body-sm text-body-sm font-bold text-[#0F172A]"
                          >Erling Haaland</span
                        >
                        <span class="font-label-caps text-[11px] text-slate-500"
                          >Man City</span
                        >
                      </div>
                    </div>
                    <div class="flex items-center gap-1">
                      <span
                        class="font-headline-md text-headline-md font-extrabold text-[#059669]"
                        >11</span
                      >
                      <span
                        class="font-label-caps text-[11px] text-slate-400 font-bold"
                        >G</span
                      >
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div class="flex items-center gap-2.5">
                      <span
                        class="font-tabular-stat text-tabular-stat font-bold text-slate-400 w-4"
                        >2</span
                      >
                      <div
                        class="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-label-caps text-blue-700 font-bold text-xs"
                      >
                        CP
                      </div>
                      <div class="flex flex-col">
                        <span
                          class="font-body-sm text-body-sm font-semibold text-[#0F172A]"
                          >Cole Palmer</span
                        >
                        <span class="font-label-caps text-[11px] text-slate-500"
                          >Chelsea</span
                        >
                      </div>
                    </div>
                    <div class="flex items-center gap-1">
                      <span
                        class="font-headline-md text-headline-md font-bold text-[#0F172A]"
                        >7</span
                      >
                      <span
                        class="font-label-caps text-[11px] text-slate-400 font-bold"
                        >G</span
                      >
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div class="flex items-center gap-2.5">
                      <span
                        class="font-tabular-stat text-tabular-stat font-bold text-slate-400 w-4"
                        >3</span
                      >
                      <div
                        class="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-label-caps text-blue-700 font-bold text-xs"
                      >
                        BS
                      </div>
                      <div class="flex flex-col">
                        <span
                          class="font-body-sm text-body-sm font-semibold text-[#0F172A]"
                          >Bukayo Saka</span
                        >
                        <span class="font-label-caps text-[11px] text-slate-500"
                          >Arsenal</span
                        >
                      </div>
                    </div>
                    <div class="flex items-center gap-1">
                      <span
                        class="font-headline-md text-headline-md font-bold text-[#0F172A]"
                        >6</span
                      >
                      <span
                        class="font-label-caps text-[11px] text-slate-400 font-bold"
                        >G</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col gap-3"
              >
                <div
                  class="flex items-center justify-between pb-3 border-b border-slate-100"
                >
                  <div class="flex items-center gap-2">
                    <span
                      class="material-symbols-outlined text-[#059669] text-[20px]"
                      >feed</span
                    >
                    <span
                      class="font-label-caps text-[12px] uppercase text-[#0F172A] tracking-wider font-extrabold"
                      >Breaking &amp; Analysis</span
                    >
                  </div>
                  <a
                    class="font-body-sm text-body-sm text-blue-600 hover:text-emerald-600 transition-colors font-semibold flex items-center gap-0.5"
                    href="#"
                  >
                    <span>View All</span>
                    <span class="material-symbols-outlined text-[14px]"
                      >arrow_forward</span
                    >
                  </a>
                </div>
                <div class="flex flex-col divide-y divide-slate-100">

                  <a
                    class="py-3 first:pt-0 group flex items-start gap-3 cursor-pointer"
                    href="#"
                  >
                    <div
                      class="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100 relative"
                    >
                      <img
                        alt="Match breakdown"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        src="https://lh3.googleusercontent.com/aida/AEtjO1V0FRBF4ygCFgEwypfF7xkBFQq3G6--D0m3mPfmXaTUBP_bzHQScN1Rp6eMCZDDiv9PL8X-MQNeBPYs5fSeRLH5t_8lcAJAGPmgTI_f1nf2xUS7K3WsKUB6xLWHXKP7m5JCvQd0JvhKVXEDghks0C1TsLDacONXap8eC8uJl6ccnQPLTYxZqNaksNeR2_xIarzUDS7_p5Uc1M3HtSbp9-WtqfJo9B60cXIJwxvwMNUeRMxeO_eAYScwKdI"
                      />
                    </div>
                    <div class="flex flex-col flex-1 min-w-0">
                      <div
                        class="flex items-center gap-1.5 text-slate-400 font-label-caps text-[10px] mb-0.5"
                      >
                        <span class="text-[#059669] font-bold uppercase"
                          >Tactical</span
                        >
                        <span>•</span>
                        <span>18m ago</span>
                      </div>
                      <h4
                        class="font-body-sm text-body-sm font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors leading-snug line-clamp-2"
                      >
                        How Arsenal Broke Chelsea's High Press at Emirates
                        Stadium
                      </h4>
                      <span
                        class="font-label-caps text-[10px] text-slate-400 mt-1"
                        >PitchPulse Analytics</span
                      >
                    </div>
                  </a>

                  <a
                    class="py-3 group flex items-start gap-3 cursor-pointer"
                    href="#"
                  >
                    <div
                      class="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-blue-50 flex flex-col items-center justify-center text-blue-600"
                    >
                      <span class="material-symbols-outlined text-[24px]"
                        >sports_soccer</span
                      >
                      <span
                        class="font-label-caps text-[9px] font-extrabold uppercase mt-0.5"
                        >La Liga</span
                      >
                    </div>
                    <div class="flex flex-col flex-1 min-w-0">
                      <div
                        class="flex items-center gap-1.5 text-slate-400 font-label-caps text-[10px] mb-0.5"
                      >
                        <span class="text-blue-700 font-bold uppercase"
                          >Reaction</span
                        >
                        <span>•</span>
                        <span>42m ago</span>
                      </div>
                      <h4
                        class="font-body-sm text-body-sm font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors leading-snug line-clamp-2"
                      >
                        Ancelotti: "We Controlled Transitions in Critical
                        Moments"
                      </h4>
                      <span
                        class="font-label-caps text-[10px] text-slate-400 mt-1"
                        >Press Conference</span
                      >
                    </div>
                  </a>

                  <a
                    class="py-3 group flex items-start gap-3 cursor-pointer"
                    href="#"
                  >
                    <div
                      class="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-emerald-50 flex flex-col items-center justify-center text-[#059669]"
                    >
                      <span class="material-symbols-outlined text-[24px]"
                        >insights</span
                      >
                      <span
                        class="font-label-caps text-[9px] font-extrabold uppercase mt-0.5"
                        >UCL</span
                      >
                    </div>
                    <div class="flex flex-col flex-1 min-w-0">
                      <div
                        class="flex items-center gap-1.5 text-slate-400 font-label-caps text-[10px] mb-0.5"
                      >
                        <span class="text-[#059669] font-bold uppercase"
                          >Telemetry</span
                        >
                        <span>•</span>
                        <span>1h ago</span>
                      </div>
                      <h4
                        class="font-body-sm text-body-sm font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors leading-snug line-clamp-2"
                      >
                        Matchday 3 Predictions &amp; Expected Goals Telemetry
                        Model
                      </h4>
                      <span
                        class="font-label-caps text-[10px] text-slate-400 mt-1"
                        >PulseData Engine</span
                      >
                    </div>
                  </a>

                  <a
                    class="py-3 group flex items-start gap-3 cursor-pointer"
                    href="#"
                  >
                    <div
                      class="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-amber-50 flex flex-col items-center justify-center text-amber-600"
                    >
                      <span
                        class="material-symbols-outlined text-[24px] animate-pulse"
                        >radar</span
                      >
                      <span
                        class="font-label-caps text-[9px] font-extrabold uppercase mt-0.5"
                        >Radar</span
                      >
                    </div>
                    <div class="flex flex-col flex-1 min-w-0">
                      <div
                        class="flex items-center gap-1.5 text-slate-400 font-label-caps text-[10px] mb-0.5"
                      >
                        <span class="text-amber-600 font-bold uppercase"
                          >Confirmed</span
                        >
                        <span>•</span>
                        <span>2h ago</span>
                      </div>
                      <h4
                        class="font-body-sm text-body-sm font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors leading-snug line-clamp-2"
                      >
                        Alphonso Davies signs contract extension through 2029
                      </h4>
                      <span
                        class="font-label-caps text-[10px] text-slate-400 mt-1"
                        >Bayern Munich • Retained</span
                      >
                    </div>
                  </a>
                </div>
              </div>
            </aside>
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
