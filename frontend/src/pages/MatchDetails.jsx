import Container from "@/components/layout/Container";
import InDepthTelemetry from "@/components/layout/InDepthTelemetry";
import LineupsSection from "@/components/layout/LineupsSection";
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
                <span className="material-symbols-outlined text-base! text-slate-500">sports_soccer</span>
                Premier League
              </Link>
              <span className="text-primary/50 font-jakarta">/</span>
              <span className="font-jakarta text-sm text-slate-500">Matchday 10</span>
              <span className="text-primary/50 font-jakarta">/</span>
              <span
                className="font-jakarta text-sm text-primary font-semibold"
                >Arsenal vs Chelsea</span>
              <span
                className="bg-background text-primary font-jakarta text-sm px-2 py-0.5 rounded-full uppercase ml-2 font-bold tracking-wider"
              >
                London Derby
              </span>
            </div>

            <div
              className="flex items-center gap-3 text-slate-500 font-jakarta text-sm"
            >
              <span className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-base! text-slate-500"
                  >stadium</span>
                Emirates Stadium, London
              </span>
              <span className="hidden md:inline-flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-base! text-slate-500"
                  >groups</span>
                60,260
              </span>
              <span className="hidden lg:inline-flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-base! text-slate-500"
                  >sports</span>
                Ref: Michael Oliver
              </span>
            </div>
          </Container>

          <MatchScoreSection/>
        </section>
      </div>

      <Container className="py-12">
        <Tabs defaultValue="overview" className="h-auto w-full justify-start gap-6 border-b border-border mb-6 overflow-x-auto overflow-y-hidden whitespace-nowrap">
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

            <TabsTrigger value="h2h" className={matchTabClass}>
              H2H
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Container
          className="px-0! py-8 grid grid-cols-1 lg:grid-cols-12 gap-5"
        >

          <div class="lg:col-span-8 flex flex-col gap-5">
            <MatchOverviewStats/>
            <MatchMomentum/>

            <MatchTimeline/>

            <LineupsSection/>
          </div>

          <div class="lg:col-span-4 flex flex-col gap-5">

            <TopPerformer/>

            <InDepthTelemetry/>

            <section
              class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"
            >
              <div
                class="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="material-symbols-outlined text-primary text-[20px]"
                    >table_rows</span
                  >
                  <h3 class="font-headline-md text-headline-md text-on-surface">
                    Live Table Impact
                  </h3>
                </div>
                <span
                  class="font-label-sm text-label-sm bg-secondary-fixed/40 text-on-secondary-fixed px-2 py-0.5 rounded font-bold"
                >
                  Live
                </span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-body-sm text-body-sm">
                  <thead>
                    <tr
                      class="text-on-surface-variant text-[11px] font-label-sm uppercase border-b border-surface-container-high"
                    >
                      <th class="py-2 pl-1">#</th>
                      <th class="py-2">Club</th>
                      <th class="py-2 text-center">PL</th>
                      <th class="py-2 text-center">GD</th>
                      <th class="py-2 text-right pr-1">PTS</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-surface-container-high/60">

                    <tr class="bg-primary-fixed/20 font-semibold">
                      <td
                        class="py-2.5 pl-1 text-primary flex items-center gap-1 font-bold"
                      >
                        1
                        <span
                          class="material-symbols-outlined text-[14px] text-primary"
                          >arrow_drop_up</span
                        >
                      </td>
                      <td
                        class="py-2.5 text-on-surface flex items-center gap-1.5"
                      >
                        <span
                          class="w-2 h-2 rounded-full bg-primary inline-block"
                        ></span>
                        Arsenal
                      </td>
                      <td class="py-2.5 text-center text-on-surface-variant">
                        10
                      </td>
                      <td class="py-2.5 text-center text-on-surface">+14</td>
                      <td class="py-2.5 text-right pr-1 font-bold text-primary">
                        24
                      </td>
                    </tr>

                    <tr
                      class="hover:bg-surface-container-low transition-colors"
                    >
                      <td
                        class="py-2.5 pl-1 text-on-surface-variant font-medium"
                      >
                        2
                      </td>
                      <td class="py-2.5 text-on-surface">Man City</td>
                      <td class="py-2.5 text-center text-on-surface-variant">
                        10
                      </td>
                      <td class="py-2.5 text-center text-on-surface">+12</td>
                      <td
                        class="py-2.5 text-right pr-1 font-bold text-on-surface"
                      >
                        23
                      </td>
                    </tr>

                    <tr
                      class="hover:bg-surface-container-low transition-colors"
                    >
                      <td
                        class="py-2.5 pl-1 text-on-surface-variant font-medium"
                      >
                        3
                      </td>
                      <td class="py-2.5 text-on-surface">Liverpool</td>
                      <td class="py-2.5 text-center text-on-surface-variant">
                        10
                      </td>
                      <td class="py-2.5 text-center text-on-surface">+11</td>
                      <td
                        class="py-2.5 text-right pr-1 font-bold text-on-surface"
                      >
                        22
                      </td>
                    </tr>

                    <tr class="bg-tertiary-fixed/20">
                      <td
                        class="py-2.5 pl-1 text-tertiary flex items-center gap-1 font-bold"
                      >
                        4
                        <span
                          class="material-symbols-outlined text-[14px] text-tertiary"
                          >arrow_drop_down</span
                        >
                      </td>
                      <td
                        class="py-2.5 text-on-surface flex items-center gap-1.5 font-semibold"
                      >
                        <span
                          class="w-2 h-2 rounded-full bg-tertiary inline-block"
                        ></span>
                        Chelsea
                      </td>
                      <td class="py-2.5 text-center text-on-surface-variant">
                        10
                      </td>
                      <td class="py-2.5 text-center text-on-surface">+7</td>
                      <td
                        class="py-2.5 text-right pr-1 font-bold text-tertiary"
                      >
                        17
                      </td>
                    </tr>

                    <tr
                      class="hover:bg-surface-container-low transition-colors"
                    >
                      <td
                        class="py-2.5 pl-1 text-on-surface-variant font-medium"
                      >
                        5
                      </td>
                      <td class="py-2.5 text-on-surface">Aston Villa</td>
                      <td class="py-2.5 text-center text-on-surface-variant">
                        10
                      </td>
                      <td class="py-2.5 text-center text-on-surface">+6</td>
                      <td
                        class="py-2.5 text-right pr-1 font-bold text-on-surface"
                      >
                        17
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section
              class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"
            >
              <div
                class="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="material-symbols-outlined text-primary text-[20px]"
                    >history</span
                  >
                  <h3 class="font-headline-md text-headline-md text-on-surface">
                    Recent Head-to-Head
                  </h3>
                </div>
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant"
                  >Last 5</span
                >
              </div>
              <div class="space-y-2.5 pt-1">
                <div
                  class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low"
                >
                  <span
                    class="font-label-md text-label-md font-bold text-on-surface"
                    >Arsenal 5 - 0 Chelsea</span
                  >
                  <span
                    class="text-label-sm font-label-sm bg-primary/10 text-primary font-bold px-2 py-0.5 rounded"
                    >ARS Win</span
                  >
                </div>
                <div
                  class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low"
                >
                  <span
                    class="font-label-md text-label-md font-bold text-on-surface"
                    >Chelsea 2 - 2 Arsenal</span
                  >
                  <span
                    class="text-label-sm font-label-sm bg-surface-container text-on-surface-variant font-bold px-2 py-0.5 rounded"
                    >Draw</span
                  >
                </div>
                <div
                  class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low"
                >
                  <span
                    class="font-label-md text-label-md font-bold text-on-surface"
                    >Arsenal 3 - 1 Chelsea</span
                  >
                  <span
                    class="text-label-sm font-label-sm bg-primary/10 text-primary font-bold px-2 py-0.5 rounded"
                    >ARS Win</span
                  >
                </div>
                <div
                  class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low"
                >
                  <span
                    class="font-label-md text-label-md font-bold text-on-surface"
                    >Chelsea 0 - 1 Arsenal</span
                  >
                  <span
                    class="text-label-sm font-label-sm bg-primary/10 text-primary font-bold px-2 py-0.5 rounded"
                    >ARS Win</span
                  >
                </div>
                <div
                  class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low"
                >
                  <span
                    class="font-label-md text-label-md font-bold text-on-surface"
                    >Chelsea 2 - 4 Arsenal</span
                  >
                  <span
                    class="text-label-sm font-label-sm bg-primary/10 text-primary font-bold px-2 py-0.5 rounded"
                    >ARS Win</span
                  >
                </div>
              </div>
            </section>
          </div>
        </Container>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white border rounded-xl p-8">
              <h2 className="font-heading text-xl font-extrabold mb-8">
                Match Statistics
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">54%</span>
                    <span className="text-sm font-medium uppercase tracking-wider">
                      Possession
                    </span>
                    <span className="text-sm font-bold">46%</span>
                  </div>
                  <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-primary/30">
                    <div className="h-full bg-primary w-[54%]"></div>
                    <div className="h-full w-[46%]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold">14</span>
                      <span className="text-sm font-medium uppercase tracking-wider">
                        Total Shots
                      </span>
                      <span className="text-sm font-bold">9</span>
                    </div>
                    <div className="flex h-1.5 w-full bg-primary/30 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[61%]"></div>
                      <div className="h-full w-[39%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold">6</span>
                      <span className="text-sm font-medium uppercase tracking-wider">
                        Shots on Target
                      </span>
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div className="flex h-1.5 w-full bg-primary/30 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[60%]"></div>
                      <div className="h-full w-[40%]"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-live">2.14</span>
                    <span className="text-sm font-medium uppercase tracking-wider">
                      Expected Goals (xG)
                    </span>
                    <span className="text-sm font-bold">1.28</span>
                  </div>
                  <div className="flex h-1.5 w-full bg-primary/30 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[62.5%]"></div>
                    <div className="h-full w-[37.2%]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="text-center py-2 bg-card rounded-lg">
                    <p className="text-sm font-medium uppercase mb-1">
                      Corners
                    </p>
                    <p className="text-heading font-extrabold text-2xl">
                      7 - 3
                    </p>
                  </div>
                  <div className="text-center py-2 bg-card rounded-lg">
                    <p className="text-sm font-medium uppercase mb-1">
                      Pass Accuracy
                    </p>
                    <p className="text-heading font-extrabold text-2xl">
                      88% - 82%
                    </p>
                  </div>
                  <div className="text-center py-2 bg-card rounded-lg">
                    <p className="text-sm font-medium uppercase mb-1">Fouls</p>
                    <p className="text-heading font-extrabold text-2xl">
                      11 - 14
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-xl overflow-hidden">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-heading text-lg font-bold">
                  Starting Lineups
                </h2>
                <div className="flex gap-4">
                  <span className="text-sm font-medium">Arsenal 4-3-3</span>
                  <span className="text-accent-foreground">|</span>
                  <span className="text-sm font-medium">Chelsea 4-3-3</span>
                </div>
              </div>
              <div class="relative aspect-4/3 w-full bg-[linear-gradient(180deg,#22c55e_0%,#22c55e_100%)] p-6 overflow-hidden">
                <div className="absolute inset-6 border border-white/50 pointer-events-none"></div>
                <div className="absolute top-1/2 left-6 right-6 h-px bg-white/50 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/50 rounded-full"></div>

                <div className="absolute inset-0 flex flex-col justify-start pt-12 items-center gap-y-12">
                  <div className="flex justify-center gap-16 md:gap-24">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-primary text-primary font-bold text-sm mb-1 shadow-lg">
                        11
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Martinelli
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-primary text-primary font-bold text-label-sm mb-1 shadow-lg">
                        29
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Havertz
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-primary text-primary font-bold text-label-sm mb-1 shadow-lg">
                        7
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Saka
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-12 md:gap-20">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-primary text-primary font-bold text-label-sm mb-1 shadow-lg">
                        41
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Rice
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-primary text-primary font-bold text-label-sm mb-1 shadow-lg">
                        5
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Partey
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-primary text-primary font-bold text-label-sm mb-1 shadow-lg">
                        8
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Ødegaard
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end pb-12 items-center gap-y-12">
                  <div className="flex justify-center gap-12 md:gap-20">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-2 border-white text-white font-bold text-label-sm mb-1 shadow-lg">
                        23
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Gallagher
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-2 border-white text-white font-bold text-label-sm mb-1 shadow-lg">
                        25
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Caicedo
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-2 border-white text-white font-bold text-label-sm mb-1 shadow-lg">
                        20
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Palmer
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-16 md:gap-24">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-2 border-white text-white font-bold text-sm mb-1 shadow-lg">
                        10
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Mudryk
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-2 border-white text-white font-bold text-sm mb-1 shadow-lg">
                        15
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Jackson
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-2 border-white text-white font-bold text-sm mb-1 shadow-lg">
                        11
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase">
                        Madueke
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside class="lg:col-span-4 bg-white border border-outline-variant rounded-xl p-stack-lg">
            <h2 class="font-headline-md text-body-lg font-bold mb-stack-lg">
              Match Timeline
            </h2>
            <div class="relative space-y-stack-lg before:absolute before:left-2.75 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant">
              <div class="relative pl-10">
                <div class="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10">
                  <span class="material-symbols-outlined text-white text-[14px]">
                    sports_soccer
                  </span>
                </div>
                <div>
                  <span class="text-label-sm font-bold text-primary">68'</span>
                  <h3 class="font-bold text-body-md">Goal! Arsenal 2-1</h3>
                  <p class="text-label-sm text-on-surface-variant">
                    L. Trossard (Assisted by B. Saka)
                  </p>
                </div>
              </div>

              <div class="relative pl-10">
                <div class="absolute left-0 top-1 w-6 h-6 bg-surface-container rounded-full flex items-center justify-center z-10 border border-outline-variant">
                  <span class="material-symbols-outlined text-primary text-[14px]">
                    cached
                  </span>
                </div>
                <div>
                  <span class="text-label-sm font-bold text-primary">65'</span>
                  <h3 class="font-bold text-body-md">Substitution</h3>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="material-symbols-outlined text-[#22C55E] text-[16px]">
                      arrow_upward
                    </span>
                    <span class="text-label-sm">L. Trossard</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-error text-[16px]">
                      arrow_downward
                    </span>
                    <span class="text-label-sm text-on-surface-variant">
                      G. Martinelli
                    </span>
                  </div>
                </div>
              </div>

              <div class="relative pl-10">
                <div class="absolute left-0 top-1 w-6 h-6 bg-[#EAB308] rounded flex items-center justify-center z-10"></div>
                <div>
                  <span class="text-label-sm font-bold text-primary">42'</span>
                  <h3 class="font-bold text-body-md">Yellow Card</h3>
                  <p class="text-label-sm text-on-surface-variant">
                    M. Caicedo (Chelsea)
                  </p>
                </div>
              </div>

              <div class="relative pl-10">
                <div class="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10">
                  <span class="material-symbols-outlined text-white text-[14px]">
                    sports_soccer
                  </span>
                </div>
                <div>
                  <span class="text-label-sm font-bold text-primary">31'</span>
                  <h3 class="font-bold text-body-md">Goal! Chelsea 1-1</h3>
                  <p class="text-label-sm text-on-surface-variant">
                    C. Palmer (Penalty)
                  </p>
                </div>
              </div>

              <div class="relative pl-10">
                <div class="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10">
                  <span class="material-symbols-outlined text-white text-[14px]">
                    sports_soccer
                  </span>
                </div>
                <div>
                  <span class="text-label-sm font-bold text-primary">12'</span>
                  <h3 class="font-bold text-body-md">Goal! Arsenal 1-0</h3>
                  <p class="text-label-sm text-on-surface-variant">
                    K. Havertz (Assisted by M. Ødegaard)
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default MatchDetails;
