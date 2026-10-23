import React, { useState } from "react";
import { Link } from "react-router-dom";

import ArticleCard from "@/components/layout/ArticleCard.jsx";
import Container from "@/components/layout/Container.jsx";
import DateSelector from "@/components/layout/DateSelector";
import FeaturedArticle from "@/components/layout/FeaturedArticle.jsx";
import LatestNews from "@/components/layout/BreakingNews";
import TopLeagues from "@/components/layout/TopLeagues";
import MatchFilters from "@/components/layout/MatchFilter";
import MatchList from "@/components/layout/MatchList";

import { Button } from "@/components/ui/button";

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
import BreakingNews from "@/components/layout/BreakingNews";
import LeagueTable from "@/components/layout/LeagueTable";
import TopScorers from "@/components/layout/TopScorers";



export const matches = [
  {
    id: 1,
    league: {
      name: "Premier League",
      country: "England",
      flag: "🏴",
      matchday: 10,
    },
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    homeScore: 2,
    awayScore: 1,
    status: "live",
    minute: "68'",
    isFavorite: true,
  },
  {
    id: 2,
    league: {
      name: "Premier League",
      country: "England",
      flag: "🏴",
      matchday: 10,
    },
    homeTeam: "Manchester City",
    awayTeam: "Everton",
    homeScore: 3,
    awayScore: 0,
    status: "finished",
    minute: "FT",
    isFavorite: false,
  },
  {
    id: 3,
    league: {
      name: "Premier League",
      country: "England",
      flag: "🏴",
      matchday: 10,
    },
    homeTeam: "Liverpool",
    awayTeam: "Aston Villa",
    homeScore: null,
    awayScore: null,
    status: "upcoming",
    minute: "20:00",
    isFavorite: false,
  },
  {
    id: 4,
    league: {
      name: "La Liga",
      country: "Spain",
      flag: "🇪🇸",
      matchday: 11,
    },
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeScore: null,
    awayScore: null,
    status: "upcoming",
    minute: "21:00",
    isFavorite: true,
  },
];




const followedTeams = [
  { id: 1, name: "Arsenal" },
  { id: 2, name: "Real Madrid" },
  { id: 3, name: "Inter Milan" },
  { id: 4, name: "Dortmund" },
];

const Home = () => {

  const [activeFilter, setActiveFilter] = useState("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const [matchData, setMatchData] = useState(matches)

  const handleToggleFavorite = (matchId) => {
    setMatchData((prevMatches) => 
      prevMatches.map((match) => 
        match.id === matchId
        ? { ...match, isFavorite: !match.isFavorite }
        : match
      )
    );
  };

  const counts = {
    all: matchData.length,
    live: matchData.filter((match) => match.status === "live").length,
    upcoming: matchData.filter((match) => match.status === "upcoming").length,
    finished: matchData.filter((match) => match.status === "finished").length,
  };

  // Apply status and favorites filters
  const filteredMatches = matchData.filter((match) => {
    const matchesStatus =
      activeFilter === "all" || match.status === activeFilter;

    const matchesFavorites =
      !favoritesOnly || match.isFavorite;

    return matchesStatus && matchesFavorites;
  });

  

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
                {/* <div
                  className="absolute inset-0 bg-linear-to-tr from-emerald-50/50 via-white to-blue-50/40 pointer-events-none"
                ></div> */}
                {/* <div
                  className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"
                ></div> */}
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

                <MatchFilters
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                  favoritesOnly={favoritesOnly}
                  onFavoritesChange={setFavoritesOnly}
                  counts={counts}
                />


              <div className="flex flex-col gap-3">

                <MatchList
                  matches={filteredMatches}
                  onToggleFavorite={handleToggleFavorite}
                />

              </div>
            </div>

            <aside class="col-span-1 lg:col-span-3 flex flex-col gap-3">

              <BreakingNews/>
              <LeagueTable/>
              <TopScorers/>

              
            </aside>
          </div>

          


        

        
      </Container>
    </div>
  );
};

export default Home;
