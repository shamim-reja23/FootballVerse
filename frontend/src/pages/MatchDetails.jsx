import Container from "@/components/layout/Container";
import MatchMomentum from "@/components/layout/MatchMomentum";
import MatchScoreSection from "@/components/layout/MatchScoreSection";
import MatchTimeline from "@/components/layout/MatchTimeline";
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
        <Tabs defaultValue="overview" className="gap-8 border-b border-border mb-6">
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

            <MatchMomentum/>

            <MatchTimeline/>

            <section
              class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"
            >
              <div
                class="flex flex-wrap items-center justify-between pb-space-md mb-space-sm border-b border-surface-container-high gap-2"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="material-symbols-outlined text-primary text-[22px]"
                    >sports</span
                  >
                  <h2 class="font-headline-md text-headline-md text-on-surface">
                    Lineups &amp; Tactical Shape
                  </h2>
                </div>
                <div class="flex items-center gap-space-md">
                  <span
                    class="font-label-sm text-label-sm font-bold text-primary"
                    >Arsenal: 4-3-3</span
                  >
                  <span class="text-on-surface-variant/40 font-body-sm">•</span>
                  <span
                    class="font-label-sm text-label-sm font-bold text-tertiary"
                    >Chelsea: 4-2-3-1</span
                  >
                </div>
              </div>

              <div
                class="relative w-full rounded-xl overflow-hidden shadow-inner bg-gradient-to-b from-[#005137] to-[#006948] p-4 text-white min-h-[380px] flex flex-col justify-between select-none"
              >

                <div
                  class="absolute inset-2 border-2 border-white/25 rounded-lg pointer-events-none"
                >

                  <div
                    class="absolute top-1/2 left-0 right-0 h-0.5 bg-white/25 -translate-y-1/2"
                  ></div>

                  <div
                    class="absolute top-1/2 left-1/2 w-28 h-28 border-2 border-white/25 rounded-full -translate-x-1/2 -translate-y-1/2"
                  ></div>

                  <div
                    class="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-16 border-b-2 border-x-2 border-white/25"
                  ></div>

                  <div
                    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 border-t-2 border-x-2 border-white/25"
                  ></div>
                </div>

                <div class="relative z-10 space-y-4">
                  <div class="text-center">
                    <span
                      class="bg-tertiary text-on-tertiary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-label-sm"
                    >
                      Chelsea (4-2-3-1)
                    </span>
                  </div>

                  <div class="flex justify-center">
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shadow-xs ring-1 ring-white/50"
                        >1</span
                      >
                      <span
                        class="text-[11px] font-semibold mt-0.5 text-white drop-shadow"
                        >Sanchez</span
                      >
                      <span
                        class="bg-amber-500 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >6.4</span
                      >
                    </div>
                  </div>

                  <div class="flex justify-around px-4">
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-tertiary text-on-tertiary font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >3</span
                      >
                      <span class="text-[11px] font-medium mt-0.5 drop-shadow"
                        >Cucurella</span
                      >
                      <span
                        class="bg-amber-500 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >6.1</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-tertiary text-on-tertiary font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >6</span
                      >
                      <span class="text-[11px] font-medium mt-0.5 drop-shadow"
                        >Colwill</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >6.9</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-tertiary text-on-tertiary font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >29</span
                      >
                      <span class="text-[11px] font-medium mt-0.5 drop-shadow"
                        >Fofana</span
                      >
                      <span
                        class="bg-amber-500 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >6.5</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-tertiary text-on-tertiary font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >27</span
                      >
                      <span class="text-[11px] font-medium mt-0.5 drop-shadow"
                        >Gusto</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >6.8</span
                      >
                    </div>
                  </div>

                  <div class="flex justify-around px-8">
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-tertiary text-on-tertiary font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >25</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >Caicedo</span
                      >
                      <span
                        class="bg-amber-500 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >6.2</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-tertiary text-on-tertiary font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >20</span
                      >
                      <span
                        class="text-[11px] font-bold text-amber-200 drop-shadow"
                        >Palmer ⚽</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >7.8</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-tertiary text-on-tertiary font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >15</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >Jackson</span
                      >
                      <span
                        class="bg-amber-500 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >6.4</span
                      >
                    </div>
                  </div>
                </div>

                <div class="relative z-10 space-y-4 pt-8">

                  <div class="flex justify-around px-6">
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >19</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >Trossard (68')</span
                      >
                      <span
                        class="bg-slate-300 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >-</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >29</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >Havertz</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >7.2</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-2 ring-secondary-fixed-dim"
                        >7</span
                      >
                      <span
                        class="text-[11px] font-bold text-amber-200 drop-shadow"
                        >Saka ⚽</span
                      >
                      <span
                        class="bg-secondary-fixed text-slate-950 font-bold text-[9px] px-1 rounded"
                        >8.4 ⭐</span
                      >
                    </div>
                  </div>

                  <div class="flex justify-around px-8">
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >41</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >Rice</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >7.6</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >8</span
                      >
                      <span
                        class="text-[11px] font-bold text-amber-200 drop-shadow"
                        >Ødegaard ⚽</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >8.1</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >5</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >Partey</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >7.0</span
                      >
                    </div>
                  </div>

                  <div class="flex justify-around px-4">
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >12</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >Timber</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >7.3</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >6</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >Gabriel</span
                      >
                      <span
                        class="bg-amber-500 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >6.7</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >2</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >Saliba</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >7.4</span
                      >
                    </div>
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-error text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >4</span
                      >
                      <span class="text-[11px] font-medium drop-shadow"
                        >White</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >7.1</span
                      >
                    </div>
                  </div>

                  <div class="flex justify-center">
                    <div class="flex flex-col items-center">
                      <span
                        class="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center ring-1 ring-white/50"
                        >22</span
                      >
                      <span class="text-[11px] font-semibold drop-shadow"
                        >Raya</span
                      >
                      <span
                        class="bg-emerald-400 text-slate-950 font-bold text-[9px] px-1 rounded"
                        >7.5</span
                      >
                    </div>
                  </div>
                  <div class="text-center pt-2">
                    <span
                      class="bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-label-sm"
                    >
                      Arsenal (4-3-3)
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-space-md pt-space-md border-t border-surface-container-high text-body-sm font-body-sm"
              >
                <div>
                  <h4
                    class="font-label-md text-label-md text-on-surface font-bold mb-1"
                  >
                    Arsenal Bench:
                  </h4>
                  <p class="text-on-surface-variant">
                    Ramsdale, Kiwior, Zinchenko, Jorginho, Merino, Nwaneri,
                    Sterling, Jesus.
                  </p>
                </div>
                <div>
                  <h4
                    class="font-label-md text-label-md text-on-surface font-bold mb-1"
                  >
                    Chelsea Bench:
                  </h4>
                  <p class="text-on-surface-variant">
                    Jorgensen, Badiashile, Disasi, Dewsbury-Hall, Lavia,
                    Madueke, Mudryk, Nkunku.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div class="lg:col-span-4 flex flex-col gap-space-lg">

            <section
              class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden"
            >
              <div
                class="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="material-symbols-outlined text-secondary-container text-[20px] font-variation-settings:'FILL'_1"

                    >stars</span
                  >
                  <h3 class="font-headline-md text-headline-md text-on-surface">
                    Top Performer
                  </h3>
                </div>
                <span
                  class="bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded font-bold"
                >
                  Live MOTM
                </span>
              </div>
              <div class="flex items-center gap-space-md mt-2">
                <div class="relative shrink-0">
                  <div
                    class="w-16 h-16 rounded-full overflow-hidden bg-surface-container ring-2 ring-primary"
                  >
                    <img
                      class="w-full h-full object-cover"
                      data-alt="Close-up portrait of Premier League winger Bukayo Saka wearing the red and white Arsenal jersey under bright stadium floodlights with focused athletic intensity."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz8yRjl8nvTlR3KxeR0OoLOlgTX56u9lprGsxn8mmIRPASX5UMui0DHQwIon-rm-5EZeZL8dm-QaA1046ejSTjAkw6iqSVQCyZmvCYPQBNo7HVkpImEVqzcqaZtnL32SUrxMY4iPYWwMPqhSMudSCiN9PNJhYkhgixxXfPv6d4En-6DTdYd_I7oNx5FV_bXHiNRJUIT0cP_kqu-t5JWUoCrK0KIi5aoZwwG_FQN8CursNFgSrURNMG"
                    />
                  </div>
                  <div
                    class="absolute -bottom-1 -right-1 bg-primary text-on-primary font-score-display text-[12px] font-black px-1.5 py-0.5 rounded shadow-sm"
                  >
                    8.4
                  </div>
                </div>
                <div class="min-w-0">
                  <h4
                    class="font-headline-sm text-headline-sm text-on-surface font-extrabold truncate"
                  >
                    Bukayo Saka
                  </h4>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Arsenal • Right Wing (7)
                  </p>
                  <div class="flex items-center gap-2 mt-1">
                    <span
                      class="text-label-sm font-label-sm bg-surface-container text-primary font-bold px-1.5 py-0.2 rounded"
                      >1 Goal</span
                    >
                    <span
                      class="text-label-sm font-label-sm bg-surface-container text-on-surface font-bold px-1.5 py-0.2 rounded"
                      >4 Key Passes</span
                    >
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-2 mt-space-md text-center">
                <div class="bg-surface-container-low p-2 rounded-lg">
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant block uppercase"
                    >xG + xA</span
                  >
                  <span
                    class="font-headline-sm text-headline-sm font-extrabold text-on-surface"
                    >1.04</span
                  >
                </div>
                <div class="bg-surface-container-low p-2 rounded-lg">
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant block uppercase"
                    >Dribbles</span
                  >
                  <span
                    class="font-headline-sm text-headline-sm font-extrabold text-on-surface"
                    >3/4</span
                  >
                </div>
                <div class="bg-surface-container-low p-2 rounded-lg">
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant block uppercase"
                    >Duels Won</span
                  >
                  <span
                    class="font-headline-sm text-headline-sm font-extrabold text-on-surface"
                    >6/8</span
                  >
                </div>
              </div>
            </section>

            <section
              class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"
            >
              <div
                class="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high"
              >
                <h3
                  class="font-headline-md text-headline-md text-on-surface flex items-center gap-2"
                >
                  <span
                    class="material-symbols-outlined text-primary text-[20px]"
                    >analytics</span
                  >
                  In-Depth Telemetry
                </h3>
                <span
                  class="font-label-sm text-label-sm text-on-surface-variant"
                  >ARS vs CHE</span
                >
              </div>

              <div class="space-y-4 pt-1 font-body-sm text-body-sm">

                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-bold text-on-surface">3</span>
                    <span class="text-on-surface-variant font-medium"
                      >Big Chances Created</span
                    >
                    <span class="font-bold text-on-surface">2</span>
                  </div>
                  <div
                    class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden flex"
                  >
                    <div class="bg-primary h-full w-[60%]" ></div>
                    <div class="bg-tertiary h-full w-[40]"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-bold text-on-surface">88% (342/388)</span>
                    <span class="text-on-surface-variant font-medium"
                      >Passing Accuracy</span
                    >
                    <span class="font-bold text-on-surface">83% (261/314)</span>
                  </div>
                  <div
                    class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden flex"
                  >
                    <div class="bg-primary h-full w-[52%]" ></div>
                    <div class="bg-tertiary h-full w-[48%]" ></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-bold text-on-surface">14 (74%)</span>
                    <span class="text-on-surface-variant font-medium"
                      >Tackles Won</span
                    >
                    <span class="font-bold text-on-surface">11 (61%)</span>
                  </div>
                  <div
                    class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden flex"
                  >
                    <div class="bg-primary h-full w-[56%]"></div>
                    <div class="bg-tertiary h-full w-[44%]"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-bold text-on-surface">9</span>
                    <span class="text-on-surface-variant font-medium"
                      >Fouls</span
                    >
                    <span class="font-bold text-on-surface">12</span>
                  </div>
                  <div
                    class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden flex"
                  >
                    <div class="bg-primary h-full w-[43%]" ></div>
                    <div class="bg-tertiary h-full w-57%" ></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-bold text-on-surface">3</span>
                    <span class="text-on-surface-variant font-medium"
                      >Saves</span
                    >
                    <span class="font-bold text-on-surface">4</span>
                  </div>
                  <div
                    class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden flex"
                  >
                    <div class="bg-primary h-full w-[43%]"></div>
                    <div class="bg-tertiary h-full w-[57%]"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-bold text-on-surface">1</span>
                    <span class="text-on-surface-variant font-medium"
                      >Offsides</span
                    >
                    <span class="font-bold text-on-surface">3</span>
                  </div>
                  <div
                    class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden flex"
                  >
                    <div class="bg-primary h-full w-[25%]" ></div>
                    <div class="bg-tertiary h-full w-[75%]" ></div>
                  </div>
                </div>
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
