import Container from "@/components/layout/Container";
import HeadToHead from "@/components/layout/HeadToHead";
import InDepthTelemetry from "@/components/layout/InDepthTelemetry";
import LineupsSection from "@/components/layout/LineupsSection";
import LiveTableImpact from "@/components/layout/LiveTableImpact";
import MatchMomentum from "@/components/layout/MatchMomentum";
import MatchOverviewStats from "@/components/layout/MatchOverviewStats";
import MatchScoreSection from "@/components/layout/MatchScoreSection";
import MatchTimeline from "@/components/layout/MatchTimeline";
import TopPerformer from "@/components/layout/TopPerformer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Link } from "react-router-dom";

const matchTabClass = `
  rounded-none
  font-jakarta
  border-b-2
  px-1
  pb-3
  pt-1
  text-base
  font-semibold
  text-muted-foreground
  cursor-pointer
  hover:bg-transparent
  data-active:border-b-primary
  data-active:bg-transparent
  data-active:text-primary
  data-active:font-bold
  data-active:hover:bg-transparent
  data-active:hover:text-primary
  data-active:!shadow-none
`;

const MatchDetails = () => {
  return (
    <div className="">
      <div className="flex flex-col w-full pt-5">
        <section className="bg-white shadow-sm rounded-xl px-8 py-3 border mx-8">
          <Container className="py-2 flex flex-wrap items-center justify-between gap-2 border-b border-border px-0!">
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                className="font-jakarta text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
                href="#"
              >
                <span className="material-symbols-outlined text-base! text-slate-500">
                  sports_soccer
                </span>
                Premier League
              </Link>
              <span className="text-primary/50 font-jakarta">/</span>
              <span className="font-jakarta text-sm text-slate-500">
                Matchday 10
              </span>
              <span className="text-primary/50 font-jakarta">/</span>
              <span className="font-jakarta text-sm text-primary font-semibold">
                Arsenal vs Chelsea
              </span>
              <span className="bg-background text-primary font-jakarta text-sm px-2 py-0.5 rounded-full uppercase ml-2 font-bold tracking-wider">
                London Derby
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-500 font-jakarta text-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base! text-slate-500">
                  stadium
                </span>
                Emirates Stadium, London
              </span>
              <span className="hidden md:inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-base! text-slate-500">
                  groups
                </span>
                60,260
              </span>
              <span className="hidden lg:inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-base! text-slate-500">
                  sports
                </span>
                Ref: Michael Oliver
              </span>
            </div>
          </Container>

          <MatchScoreSection />
        </section>
      </div>

      <Container className="py-12">
        <Tabs
          defaultValue="overview"
          className="h-auto w-full justify-start gap-6 border-b border-border mb-6 overflow-x-auto overflow-y-hidden whitespace-nowrap"
        >
          <TabsList className="h-auto justify-start gap-8 rounded-none bg-transparent p-0">
            <TabsTrigger value="overview" className={matchTabClass}>
              Overview
            </TabsTrigger>

            <TabsTrigger value="stats" className={matchTabClass}>
              Stats
            </TabsTrigger>

            <TabsTrigger value="lineups" className={matchTabClass}>
              Lineups
            </TabsTrigger>

            <TabsTrigger value="timeline" className={matchTabClass}>
              Timeline
            </TabsTrigger>

            <TabsTrigger value="table" className={matchTabClass}>
              Table
            </TabsTrigger>

            <TabsTrigger value="h2h" className={matchTabClass}>
              H2H
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Container className="px-0! py-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div class="lg:col-span-8 flex flex-col gap-5">
            <MatchOverviewStats />
            <MatchMomentum />
            <MatchTimeline />
            <LineupsSection />
          </div>

          <div class="lg:col-span-4 flex flex-col gap-5">
            <TopPerformer />
            <InDepthTelemetry />
            <LiveTableImpact />
            <HeadToHead />
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default MatchDetails;
