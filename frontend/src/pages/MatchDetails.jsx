import Container from "@/components/layout/Container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Users } from "lucide-react";
import React from "react";

const matchTabClass = `
  rounded-none
  border-b-2
  px-1
  pb-3
  pt-1
  text-sm
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
    <div className="py-8">
      <Container className="space-y-12">
        <section className="bg-white border rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <img
                className="w-20 h-20 object-contain"
                data-alt="Arsenal football club minimalist crest featuring a classic cannon in deep red and white colors, clean vector design on a white background, premium professional sports branding."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvbSSGIcjy4TmAajCM2yTk9E2QfkxtQ7_wEZhqPSIm3gGqNqEupC0VP64b32qxY8oHRi5rAYSiuQKzguJsCMrYdFMfyVjSpKKZ69hEiBdVFOmhSOUJxIhA0XlGHdj_rp2lF_CJikUSx7VBaft1XPL3TNz0VxrEXe68v75yUWhy0vSN18bgIDWTUAj9K9-jKy6kFSzMFQVMwwDOrB_jM6zl3k6H-EEKtK85iu2sq5QIjmmzqHI0sSeb"
              />
              <div>
                <h1 className="font-heading text-2xl font-bold uppercase tracking-tight">
                  Arsenal
                </h1>
                <p className="text-sm font-medium text-primary/80">
                  Premier League · Home
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-live/10 px-3 py-1 rounded-full mb-2">
                <span className="w-2 h-2 bg-live rounded-full animate-pulse"></span>
                <span className="text-live font-sm font-bold">72' LIVE</span>
              </div>
              <div className="flex items-center gap-8">
                <span className="font-heading text-4xl font-extrabold">2</span>
                <span className="text-muted-foreground font-heading text-4xl font-extrabold">
                  -
                </span>
                <span className="font-heading text-4xl font-extrabold">1</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row-reverse items-center gap-4 text-center md:text-right">
              <img
                className="w-20 h-20 object-contain"
                data-alt="Chelsea football club minimalist crest featuring a blue lion rampant holding a staff, clean vector design on a white background, premium professional sports branding."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMCyhpJzniO2IENrh3t1-NzBY-b0TQG0e3hC56F6PLfnbYB6HsnOekZyoxawkXJlJsEaHIG7mASl1hiRMCtuutxDgMs93MfS5CXPjty_ZoYhWK0_1PKBNX91Z8ppSgxS-zaG_25jr_5CvRbdT0ZcwWlL6--RwR5xNYyFe9yM62U9KZGkkPgDJ-y8L-XWFe1e_9uSC220XmtwvuCx5VL9NTHqWYCQ11biszUzu0uSgqNYj9mMbFsDhQ"
              />
              <div>
                <h1 className="font-heading text-2xl font-bold uppercase tracking-tight">
                  Chelsea
                </h1>
                <p className="text-sm font-medium text-primary/80">
                  Premier League · Away
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t  flex flex-wrap justify-center gap-x-16 gap-y-2">
            <div className="flex items-center gap-1 text-primary/80">
              <MapPin className="size-4" />
              <span className="text-sm ">Emirates Stadium, London</span>
            </div>
            <div className="flex items-center gap-1 text-primary/80">
              <CalendarDays className="size-4" />
              <span className="text-sm">April 23, 2024</span>
            </div>
            <div className="flex items-center gap-1 text-primary/80">
              <Users className="size-4" />
              <span className="text-sm">Attendance: 60,241</span>
            </div>
          </div>
        </section>

        <Tabs defaultValue="overview" className="gap-8 border-b border-border">
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
            <div class="relative space-y-stack-lg before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
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
