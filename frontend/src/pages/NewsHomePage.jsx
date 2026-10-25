import Container from '@/components/layout/Container'
import FeaturedNews from '@/components/layout/FeaturedNews'
import NewsCategoryBar from '@/components/layout/NewsCategoryBar'
import { Button } from '@/components/ui/button'
import React from 'react'

const NewsHomePage = () => {
  return (
    <div className='flex flex-col w-full'>
        <NewsCategoryBar/>

        <Container
          class="w-full pb-8"
        >

          <section
            class="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8"
          >

            <FeaturedNews/>

            <div class="lg:col-span-4 flex flex-col gap-space-md">

              <article
                class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer h-full"
              >
                <div>
                  <div class="flex items-center justify-between mb-space-xs">
                    <span
                      class="px-2 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider"
                    >
                      Transfer Radar
                    </span>
                    <span class="text-body-sm font-body-sm text-outline"
                      >1h ago</span
                    >
                  </div>
                  <h2
                    class="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary transition-colors mb-space-xs"
                  >
                    Real Madrid intensify talks for Alphonso Davies ahead of
                    summer window
                  </h2>
                  <p
                    class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2"
                  >
                    Verbal framework reached over wage structures. Bayern Munich
                    hold final extension summit at Säbener Straße.
                  </p>
                </div>
                <div
                  class="flex items-center justify-between pt-space-sm text-body-sm font-body-sm text-outline"
                >
                  <span
                    class="font-label-sm text-label-sm text-primary font-bold flex items-center gap-1"
                  >
                    <span class="material-symbols-outlined text-headline-sm"
                      >check_circle</span
                    >
                    High Confidence (85%)
                  </span>
                  <span>4 min read</span>
                </div>
              </article>

              <article
                class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer h-full"
              >
                <div>
                  <div class="flex items-center justify-between mb-space-xs">
                    <span
                      class="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider"
                    >
                      Telemetry Preview
                    </span>
                    <span class="text-body-sm font-body-sm text-outline"
                      >2h ago</span
                    >
                  </div>
                  <h2
                    class="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary transition-colors mb-space-xs"
                  >
                    Champions League Matchday 4: Defensive fragility models
                    &amp; xG forecasts
                  </h2>
                  <p
                    class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2"
                  >
                    Algorithmic simulations identify critical rest-defense
                    lapses in PSG’s midfield build-up ahead of Milan clash.
                  </p>
                </div>
                <div
                  class="flex items-center justify-between pt-space-sm text-body-sm font-body-sm text-outline"
                >
                  <span
                    class="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1"
                  >
                    <span class="material-symbols-outlined text-headline-sm"
                      >analytics</span
                    >
                    Model v4.8 Applied
                  </span>
                  <span>5 min read</span>
                </div>
              </article>

              <article
                class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer h-full"
              >
                <div>
                  <div class="flex items-center justify-between mb-space-xs">
                    <span
                      class="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase font-bold tracking-wider"
                    >
                      Injury Wire
                    </span>
                    <span class="text-body-sm font-body-sm text-outline"
                      >3h ago</span
                    >
                  </div>
                  <h2
                    class="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary transition-colors mb-space-xs"
                  >
                    Kevin De Bruyne returns to full team training before
                    top-of-table clash
                  </h2>
                  <p
                    class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2"
                  >
                    Pep Guardiola confirms midfielder completed 90 minutes of
                    small-sided drills with high GPS acceleration scores.
                  </p>
                </div>
                <div
                  class="flex items-center justify-between pt-space-sm text-body-sm font-body-sm text-outline"
                >
                  <span
                    class="font-label-sm text-label-sm text-on-surface-variant font-bold flex items-center gap-1"
                  >
                    <span
                      class="material-symbols-outlined text-headline-sm text-secondary"
                      >verified</span
                    >
                    Confirmed Medical Clearance
                  </span>
                  <span>3 min read</span>
                </div>
              </article>
            </div>
          </section>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">

            <main class="lg:col-span-8 flex flex-col gap-space-xl">

              <section class="flex flex-col gap-space-md">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-space-xs">
                    <span class="w-2.5 h-6 bg-primary rounded-full"></span>
                    <h2
                      class="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight"
                    >
                      Tactical Breakdowns
                    </h2>
                  </div>
                  <a
                    class="font-label-md text-label-md text-primary font-bold flex items-center gap-1 hover:underline"
                    href="#"
                  >
                    View All Tactics
                    <span class="material-symbols-outlined text-headline-sm"
                      >arrow_forward</span
                    >
                  </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">

                  <article
                    class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all"
                  >
                    <div
                      class="relative h-44 overflow-hidden bg-surface-container"
                    >
                      <img
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Tactical chalkboard football pitch diagram with white chalk arrows showing pressing traps, player position numbered dots in green and slate blue on digital green turf grass"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVPwaqhzyBDz5Q8UYNotxyTSSE43OVUY1gxXjwnJDdVdiKgpNRIdixz6ll_ndReRVKiBKgnVkARba2muSfs0-60_nkTrLtzHynd6_FozQk-N-uNsAtNaxd6FX6dLOD2nERP4AVjku8LxgRynv-t1sY3XemDmHShTNYpDAqJ3zB3xx5FJn8rCm5mFU5azTTr24r4F_aEpKRRDV46KpDVoQZhRF6SZqxtc_vxWqzwCB5FIX_rG4FAHd5"
                      />
                      <span
                        class="absolute top-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-sm text-label-sm font-semibold"
                      >
                        Field Geometry
                      </span>

                      <div
                        class="absolute bottom-2 right-2 bg-surface-container-lowest/90 px-2 py-0.5 rounded font-label-sm text-label-sm font-bold text-primary flex items-center gap-1"
                      >
                        xT: +0.44/90
                      </div>
                    </div>
                    <div
                      class="p-space-md flex flex-col justify-between flex-1"
                    >
                      <div>
                        <p
                          class="font-label-sm text-label-sm text-outline uppercase font-bold tracking-wider mb-1"
                        >
                          Press Resistance
                        </p>
                        <h3
                          class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors leading-snug mb-2"
                        >
                          How Rodri Manipulates Half-Spaces Under Maximum Duress
                        </h3>
                        <p
                          class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2"
                        >
                          Examining body shape angles and scanning intervals
                          that afford the midfielder 1.8 extra seconds on ball
                          possession.
                        </p>
                      </div>
                      <div
                        class="flex items-center justify-between pt-space-md mt-space-sm text-body-sm text-outline border-t border-surface-container"
                      >
                        <span
                          class="font-body-sm text-body-sm text-on-surface-variant font-medium"
                          >Liam Tharme</span
                        >
                        <span>7 min</span>
                      </div>
                    </div>
                  </article>

                  <article
                    class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all"
                  >
                    <div
                      class="relative h-44 overflow-hidden bg-surface-container"
                    >
                      <img
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Football tactics radar chart displaying shot probability, expected threat zones, high press density zones with glowing cyan and emerald vectors on dark pitch"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqWDhHm3MaMT6CxFg6MtfBXoPtqskVCc_YXwYMq6VCOYerWK3bycLlGxWWR5rWE364yR2S0NRSUygzMSRW0KuA8eAoKhO6PVa5Fqk3-WbF2PwceAd6nJ_l_LDLbOt1UF235DhR9Wg5tFUnpHKYSpxiVAKYWz8K7osIQu4_9yaO5bnnHcabeZPvCn6CSzpjuaOM0iz8W4dam3UUCp2nPNb045zF4YleBYJTwcF0_3-inWBnWgfYaPyC"
                      />
                      <span
                        class="absolute top-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-sm text-label-sm font-semibold"
                      >
                        Heatmap Metric
                      </span>
                      <div
                        class="absolute bottom-2 right-2 bg-surface-container-lowest/90 px-2 py-0.5 rounded font-label-sm text-label-sm font-bold text-tertiary flex items-center gap-1"
                      >
                        PPDA: 7.2
                      </div>
                    </div>
                    <div
                      class="p-space-md flex flex-col justify-between flex-1"
                    >
                      <div>
                        <p
                          class="font-label-sm text-label-sm text-outline uppercase font-bold tracking-wider mb-1"
                        >
                          High-Line Risk
                        </p>
                        <h3
                          class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors leading-snug mb-2"
                        >
                          Ange Postecoglou's Offside Trap: Mathematical Gamble
                          or Calculated System?
                        </h3>
                        <p
                          class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2"
                        >
                          Breaking down Tottenham's 48-meter defensive line
                          against rapid transition forwards with high expected
                          goals against.
                        </p>
                      </div>
                      <div
                        class="flex items-center justify-between pt-space-md mt-space-sm text-body-sm text-outline border-t border-surface-container"
                      >
                        <span
                          class="font-body-sm text-body-sm text-on-surface-variant font-medium"
                          >Mark Carey</span
                        >
                        <span>5 min</span>
                      </div>
                    </div>
                  </article>

                  <article
                    class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all"
                  >
                    <div
                      class="relative h-44 overflow-hidden bg-surface-container"
                    >
                      <img
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Football analytical wireframe showing 3D ball trajectory into penalty box with goal mouth probability cone and player defensive blocks mapped"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJu2962LzRk7vFuswR7-3LZEBH5MGvVTsRj8txX4_jBCekMBXkhEF3bBuFKQ7rIyRaEqrxpWpyqMXkiD7IL1x2elYZFXMvS0pKLoMF0fQqs8D2ftZQfZdyjNMrRlveLfT-4f6iA0nmfhDV-8m25XoGFb1B5I5lrlCMi3lSQM0bfOTXX_M8lHXScQ7pc3N6nOulJK6AfLbciVWi1QJqXz25UCTKt6E0xWjrJA7Djj8_XE7CSYIKsgLz"
                      />
                      <span
                        class="absolute top-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-sm text-label-sm font-semibold"
                      >
                        Set Piece Routine
                      </span>
                      <div
                        class="absolute bottom-2 right-2 bg-surface-container-lowest/90 px-2 py-0.5 rounded font-label-sm text-label-sm font-bold text-primary flex items-center gap-1"
                      >
                        xG/Corner: 0.14
                      </div>
                    </div>
                    <div
                      class="p-space-md flex flex-col justify-between flex-1"
                    >
                      <div>
                        <p
                          class="font-label-sm text-label-sm text-outline uppercase font-bold tracking-wider mb-1"
                        >
                          Set-Piece Design
                        </p>
                        <h3
                          class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors leading-snug mb-2"
                        >
                          Nicolas Jover’s Inswinging Corner Philosophy at
                          Arsenal
                        </h3>
                        <p
                          class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2"
                        >
                          How zonal screen blocks on opposing goalkeepers
                          engineered 16 league goals from dead-ball scenarios
                          this campaign.
                        </p>
                      </div>
                      <div
                        class="flex items-center justify-between pt-space-md mt-space-sm text-body-sm text-outline border-t border-surface-container"
                      >
                        <span
                          class="font-body-sm text-body-sm text-on-surface-variant font-medium"
                          >Sam Tighe</span
                        >
                        <span>6 min</span>
                      </div>
                    </div>
                  </article>
                </div>
              </section>

              <section class="flex flex-col gap-space-md">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-space-xs">
                    <span class="w-2.5 h-6 bg-secondary rounded-full"></span>
                    <h2
                      class="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight"
                    >
                      Transfer Radar &amp; Rumours
                    </h2>
                  </div>
                  <a
                    class="font-label-md text-label-md text-primary font-bold flex items-center gap-1 hover:underline"
                    href="#"
                  >
                    Transfer Hub
                    <span class="material-symbols-outlined text-headline-sm"
                      >arrow_forward</span
                    >
                  </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-space-md">

                  <div
                    class="md:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div
                        class="flex items-center justify-between mb-space-sm"
                      >
                        <span
                          class="px-2.5 py-1 rounded bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider"
                        >
                          Tier 1 Confirmed Source
                        </span>
                        <span
                          class="font-label-sm text-label-sm text-outline uppercase font-semibold"
                          >Contract 2029</span
                        >
                      </div>
                      <div class="flex items-center gap-space-md mb-space-md">
                        <img
                          class="w-16 h-16 rounded-xl object-cover shadow-sm shrink-0"
                          data-alt="Athletic portrait of young elite football winger in national team training kit staring with determination toward camera under stadium lights"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkEwGVpDdaQd1FvZCUYjWA976S-xi-pN2vSmRBGja3GeOKO1p5qyrhuAcWVptvzvJu-JVi8H6TEfWrtRMECstvBAwXbtoXQAZj3tntdGgYkUQxE0mmdjqpWhcDLz5wTwNL8EwLGXcEzSAEhorm4s9kqKa1b5W7lMYJVdTMdzJMX2HQk13HoDK13wAZjiE0GZUWNC7nJ4wFMGp0_nPGth3-ajOboIg3b32-SFA_FaE6jBzuCGFds9j6"
                        />
                        <div>
                          <h3
                            class="font-headline-md text-headline-md font-bold text-on-surface"
                          >
                            Florian Wirtz to Manchester City
                          </h3>
                          <p
                            class="font-body-sm text-body-sm text-on-surface-variant"
                          >
                            Bayer Leverkusen • Attacking Midfielder • Age 21
                          </p>
                          <div class="flex items-center gap-2 mt-1">
                            <span
                              class="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-bold"
                              >Est. Fee: €125,000,000</span
                            >
                            <span
                              class="font-label-sm text-label-sm text-secondary font-bold"
                              >Personal Terms Agreed</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="bg-surface-container-low p-space-md rounded-lg mb-space-md"
                      >
                        <div class="flex justify-between items-center mb-1.5">
                          <span
                            class="font-label-sm text-label-sm text-on-surface font-bold uppercase"
                            >PitchPulse Deal Probability Meter</span
                          >
                          <span
                            class="font-label-md text-label-md text-primary font-extrabold"
                            >82% Verified</span
                          >
                        </div>
                        <div
                          class="w-full bg-surface-container h-2.5 rounded-full overflow-hidden flex"
                        >
                          <div
                            class="bg-primary h-full rounded-full transition-all duration-1000 w-[82%]"
                          ></div>
                        </div>
                        <div
                          class="flex justify-between text-body-sm font-body-sm text-outline mt-1.5"
                        >
                          <span>Inquiry</span>
                          <span>Direct Club Talks</span>
                          <span class="text-on-surface font-semibold"
                            >Contract Drafting</span
                          >
                          <span>Medical</span>
                        </div>
                      </div>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant"
                      >
                        City have initiated concrete contacts with Wirtz’s
                        representation after Pep Guardiola marked him as the
                        primary generational heir to De Bruyne. Talks progress
                        despite Bayern Munich's counter-offer.
                      </p>
                    </div>
                    <div
                      class="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between"
                    >
                      <span class="font-label-sm text-label-sm text-outline"
                        >Reported by David Ornstein &amp; PitchPulse Intel</span
                      >
                      <button
                        class="font-label-sm text-label-sm text-primary font-bold hover:underline"
                      >
                        Read Full Dossier →
                      </button>
                    </div>
                  </div>

                  <div class="md:col-span-5 flex flex-col gap-space-sm">

                    <div
                      class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer"
                    >
                      <div
                        class="flex items-center justify-between text-label-sm font-label-sm mb-1"
                      >
                        <span class="text-error font-bold uppercase"
                          >Rumour • 45%</span
                        >
                        <span class="text-outline">42m ago</span>
                      </div>
                      <h4
                        class="font-headline-sm text-headline-sm font-bold text-on-surface mb-1"
                      >
                        Viktor Gyökeres to Arsenal
                      </h4>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2"
                      >
                        Sporting CP hold firm on €100m release clause as London
                        club explore deferred instalment proposals.
                      </p>
                    </div>

                    <div
                      class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer"
                    >
                      <div
                        class="flex items-center justify-between text-label-sm font-label-sm mb-1"
                      >
                        <span class="text-secondary font-bold uppercase"
                          >Advanced • 75%</span
                        >
                        <span class="text-outline">2h ago</span>
                      </div>
                      <h4
                        class="font-headline-sm text-headline-sm font-bold text-on-surface mb-1"
                      >
                        Joshua Kimmich Contract Freeze
                      </h4>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2"
                      >
                        Barcelona and Paris Saint-Germain prepare Bosman
                        agreements if Bayern extension talks stall past January.
                      </p>
                    </div>

                    <div
                      class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer"
                    >
                      <div
                        class="flex items-center justify-between text-label-sm font-label-sm mb-1"
                      >
                        <span class="text-secondary font-bold uppercase"
                          >Official Inbound • 90%</span
                        >
                        <span class="text-outline">4h ago</span>
                      </div>
                      <h4
                        class="font-headline-sm text-headline-sm font-bold text-on-surface mb-1"
                      >
                        Ruben Amorim Backroom Signings
                      </h4>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2"
                      >
                        Work permits approved for Sporting staff transitions to
                        Manchester United Carrington training complex.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section class="flex flex-col gap-space-md">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-space-xs">
                    <span
                      class="w-2.5 h-6 bg-tertiary-container rounded-full"
                    ></span>
                    <h2
                      class="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight"
                    >
                      Match Previews &amp; xG Forecasts
                    </h2>
                  </div>
                  <a
                    class="font-label-md text-label-md text-primary font-bold flex items-center gap-1 hover:underline"
                    href="#"
                  >
                    All Forecasts
                    <span class="material-symbols-outlined text-headline-sm"
                      >arrow_forward</span
                    >
                  </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">

                  <div
                    class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div class="flex justify-between items-center mb-space-md">
                      <div
                        class="flex items-center gap-1.5 text-on-surface-variant"
                      >
                        <span class="material-symbols-outlined text-headline-sm"
                          >calendar_month</span
                        >
                        <span
                          class="font-label-sm text-label-sm font-bold uppercase tracking-wider"
                          >Sun, 16:30 • Anfield</span
                        >
                      </div>
                      <span
                        class="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary/10 text-primary font-bold"
                        >Premier League</span
                      >
                    </div>

                    <div
                      class="flex items-center justify-between py-space-sm border-b border-surface-container"
                    >
                      <div class="flex items-center gap-space-sm">
                        <div
                          class="w-10 h-10 rounded-full bg-error-container/40 flex items-center justify-center font-label-md text-label-md font-extrabold text-error"
                        >
                          LIV
                        </div>
                        <div>
                          <h3
                            class="font-headline-sm text-headline-sm font-bold text-on-surface"
                          >
                            Liverpool
                          </h3>
                          <span class="font-body-sm text-body-sm text-outline"
                            >1st • 28 PTS</span
                          >
                        </div>
                      </div>
                      <span
                        class="font-headline-md text-headline-md font-extrabold text-outline"
                        >VS</span
                      >
                      <div class="flex items-center gap-space-sm text-right">
                        <div>
                          <h3
                            class="font-headline-sm text-headline-sm font-bold text-on-surface"
                          >
                            Man City
                          </h3>
                          <span class="font-body-sm text-body-sm text-outline"
                            >2nd • 26 PTS</span
                          >
                        </div>
                        <div
                          class="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-label-md text-label-md font-extrabold text-tertiary"
                        >
                          MCI
                        </div>
                      </div>
                    </div>

                    <div class="py-space-md">
                      <div class="flex justify-between items-center mb-1">
                        <span
                          class="font-label-sm text-label-sm font-bold text-on-surface"
                          >Simulated Win Probability</span
                        >
                        <span
                          class="font-label-sm text-label-sm font-bold text-primary"
                          >Model v9.1</span
                        >
                      </div>

                      <div
                        class="h-3 w-full rounded-full bg-surface-container flex overflow-hidden"
                      >
                        <div
                          class="bg-primary h-full w-[44%]"
                          title="Liverpool: 44%"
                        ></div>
                        <div
                          class="bg-surface-dim h-full w-[24%]"
                          title="Draw: 24%"
                        ></div>
                        <div
                          class="bg-tertiary h-full w-32%]"
                          title="Man City: 32%"
                        ></div>
                      </div>
                      <div
                        class="flex justify-between items-center text-body-sm font-body-sm mt-1.5 text-on-surface-variant font-medium"
                      >
                        <span class="text-primary font-bold">LIV: 44%</span>
                        <span>Draw: 24%</span>
                        <span class="text-tertiary font-bold">MCI: 32%</span>
                      </div>
                    </div>
                    <div
                      class="bg-surface-container-low p-space-sm rounded-lg text-body-sm font-body-sm text-on-surface-variant"
                    >
                      <span
                        class="font-label-sm text-label-sm uppercase font-bold text-on-surface"
                        >Tactical Key:</span
                      >
                      Arne Slot's direct vertical counter vs City's central
                      rest-defense transition without Rodri.
                    </div>
                  </div>

                  <div
                    class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div class="flex justify-between items-center mb-space-md">
                      <div
                        class="flex items-center gap-1.5 text-on-surface-variant"
                      >
                        <span class="material-symbols-outlined text-headline-sm"
                          >calendar_month</span
                        >
                        <span
                          class="font-label-sm text-label-sm font-bold uppercase tracking-wider"
                          >Wed, 20:00 • Bernabéu</span
                        >
                      </div>
                      <span
                        class="font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-bold"
                        >Champions League</span
                      >
                    </div>

                    <div
                      class="flex items-center justify-between py-space-sm border-b border-surface-container"
                    >
                      <div class="flex items-center gap-space-sm">
                        <div
                          class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md font-extrabold text-on-surface"
                        >
                          RMA
                        </div>
                        <div>
                          <h3
                            class="font-headline-sm text-headline-sm font-bold text-on-surface"
                          >
                            Real Madrid
                          </h3>
                          <span class="font-body-sm text-body-sm text-outline"
                            >UCL Pos: 12th</span
                          >
                        </div>
                      </div>
                      <span
                        class="font-headline-md text-headline-md font-extrabold text-outline"
                        >VS</span
                      >
                      <div class="flex items-center gap-space-sm text-right">
                        <div>
                          <h3
                            class="font-headline-sm text-headline-sm font-bold text-on-surface"
                          >
                            Juventus
                          </h3>
                          <span class="font-body-sm text-body-sm text-outline"
                            >UCL Pos: 9th</span
                          >
                        </div>
                        <div
                          class="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center font-label-md text-label-md font-extrabold text-on-surface"
                        >
                          JUV
                        </div>
                      </div>
                    </div>

                    <div class="py-space-md">
                      <div class="flex justify-between items-center mb-1">
                        <span
                          class="font-label-sm text-label-sm font-bold text-on-surface"
                          >Simulated Win Probability</span
                        >
                        <span
                          class="font-label-sm text-label-sm font-bold text-primary"
                          >Model v9.1</span
                        >
                      </div>
                      <div
                        class="h-3 w-full rounded-full bg-surface-container flex overflow-hidden"
                      >
                        <div
                          class="bg-primary h-full w-[58%]"
                          title="Real Madrid: 58%"
                        ></div>
                        <div
                          class="bg-surface-dim h-full w-[22%]"
                          title="Draw: 22%"
                        ></div>
                        <div
                          class="bg-tertiary h-full w-[20%]"
                          title="Juventus: 20%"
                        ></div>
                      </div>
                      <div
                        class="flex justify-between items-center text-body-sm font-body-sm mt-1.5 text-on-surface-variant font-medium"
                      >
                        <span class="text-primary font-bold">RMA: 58%</span>
                        <span>Draw: 22%</span>
                        <span class="text-tertiary font-bold">JUV: 20%</span>
                      </div>
                    </div>
                    <div
                      class="bg-surface-container-low p-space-sm rounded-lg text-body-sm font-body-sm text-on-surface-variant"
                    >
                      <span
                        class="font-label-sm text-label-sm uppercase font-bold text-on-surface"
                        >Tactical Key:</span
                      >
                      Vinícius Jr 1v1 frequency against Motta's fluid back-three
                      build-up structure.
                    </div>
                  </div>
                </div>
              </section>
            </main>

            <aside class="lg:col-span-4 flex flex-col gap-space-lg">

              <div
                class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm"
              >
                <div
                  class="flex items-center justify-between pb-space-sm border-b border-surface-container mb-space-md"
                >
                  <h3
                    class="font-headline-sm text-headline-sm font-bold text-on-surface flex items-center gap-1.5"
                  >
                    <span
                      class="material-symbols-outlined text-headline-sm text-secondary font-variation-settings:'FILL'_1"

                      >trending_up</span
                    >
                    Top Read Stories
                  </h3>
                  <span
                    class="font-label-sm text-label-sm text-outline font-semibold uppercase"
                    >Past 24 Hours</span
                  >
                </div>
                <div class="flex flex-col gap-space-md">

                  <a class="flex items-start gap-space-md group" href="#">
                    <span
                      class="font-score-display text-score-display text-primary/30 group-hover:text-primary transition-colors leading-none shrink-0 w-8"
                      >01</span
                    >
                    <div class="flex flex-col gap-1">
                      <h4
                        class="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug"
                      >
                        Arteta reveals the hidden training session drill that
                        altered Arsenal's build-up mechanics
                      </h4>
                      <div
                        class="flex items-center gap-space-sm text-body-sm font-body-sm text-outline"
                      >
                        <span>92.4k views</span>
                        <span>•</span>
                        <span>Tactics</span>
                      </div>
                    </div>
                  </a>

                  <a class="flex items-start gap-space-md group" href="#">
                    <span
                      class="font-score-display text-score-display text-primary/30 group-hover:text-primary transition-colors leading-none shrink-0 w-8"
                      >02</span
                    >
                    <div class="flex flex-col gap-1">
                      <h4
                        class="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug"
                      >
                        Bayern Munich ultimatum: Alphonso Davies given 10 days
                        to sign or face benching
                      </h4>
                      <div
                        class="flex items-center gap-space-sm text-body-sm font-body-sm text-outline"
                      >
                        <span>78.1k views</span>
                        <span>•</span>
                        <span>Transfers</span>
                      </div>
                    </div>
                  </a>

                  <a class="flex items-start gap-space-md group" href="#">
                    <span
                      class="font-score-display text-score-display text-primary/30 group-hover:text-primary transition-colors leading-none shrink-0 w-8"
                      >03</span
                    >
                    <div class="flex flex-col gap-1">
                      <h4
                        class="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug"
                      >
                        The data behind Cole Palmer: How spatial intelligence
                        defies simple passing maps
                      </h4>
                      <div
                        class="flex items-center gap-space-sm text-body-sm font-body-sm text-outline"
                      >
                        <span>65.0k views</span>
                        <span>•</span>
                        <span>Analytics</span>
                      </div>
                    </div>
                  </a>

                  <a class="flex items-start gap-space-md group" href="#">
                    <span
                      class="font-score-display text-score-display text-primary/30 group-hover:text-primary transition-colors leading-none shrink-0 w-8"
                      >04</span
                    >
                    <div class="flex flex-col gap-1">
                      <h4
                        class="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug"
                      >
                        Ruben Amorim's tactical 3-4-2-1 blueprint evaluated
                        against Premier League opposition
                      </h4>
                      <div
                        class="flex items-center gap-space-sm text-body-sm font-body-sm text-outline"
                      >
                        <span>54.9k views</span>
                        <span>•</span>
                        <span>Managerial</span>
                      </div>
                    </div>
                  </a>

                  <a class="flex items-start gap-space-md group" href="#">
                    <span
                      class="font-score-display text-score-display text-primary/30 group-hover:text-primary transition-colors leading-none shrink-0 w-8"
                      >05</span
                    >
                    <div class="flex flex-col gap-1">
                      <h4
                        class="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug"
                      >
                        Kylian Mbappé’s central striker dilemma: Why Real
                        Madrid’s pressing shape suffers
                      </h4>
                      <div
                        class="flex items-center gap-space-sm text-body-sm font-body-sm text-outline"
                      >
                        <span>49.2k views</span>
                        <span>•</span>
                        <span>La Liga</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div
                class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm"
              >
                <div
                  class="flex items-center justify-between pb-space-sm border-b border-surface-container mb-space-md"
                >
                  <div class="flex items-center gap-2">
                    <span
                      class="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"
                    ></span>
                    <h3
                      class="font-headline-sm text-headline-sm font-bold text-on-surface"
                    >
                      Telemetry Wire
                    </h3>
                  </div>
                  <span
                    class="px-2 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase"
                  >
                    Live Feed
                  </span>
                </div>
                <div class="space-y-space-md">

                  <div
                    class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1"
                  >
                    <div
                      class="flex justify-between items-center text-label-sm font-label-sm"
                    >
                      <span class="text-primary font-bold"
                        >78' • ATLETICO vs SEVILLA</span
                      >
                      <span class="text-outline">1m ago</span>
                    </div>
                    <p
                      class="font-body-sm text-body-sm text-on-surface font-medium"
                    >
                      Griezmann registers +0.38 xG accumulation in 10-minute
                      high-turnover spell.
                    </p>
                  </div>

                  <div
                    class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1"
                  >
                    <div
                      class="flex justify-between items-center text-label-sm font-label-sm"
                    >
                      <span class="text-tertiary font-bold"
                        >54' • INTER vs JUVENTUS</span
                      >
                      <span class="text-outline">6m ago</span>
                    </div>
                    <p
                      class="font-body-sm text-body-sm text-on-surface font-medium"
                    >
                      Inter switch into 5-4-1 mid-block; Juventus passing tempo
                      drops to 14.2 passes/min.
                    </p>
                  </div>

                  <div
                    class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1"
                  >
                    <div
                      class="flex justify-between items-center text-label-sm font-label-sm"
                    >
                      <span class="text-secondary font-bold"
                        >FT • LEVERKUSEN 3-2 LEIPZIG</span
                      >
                      <span class="text-outline">18m ago</span>
                    </div>
                    <p
                      class="font-body-sm text-body-sm text-on-surface font-medium"
                    >
                      Match concluded with highest pressing intensity index of
                      Bundesliga Matchday (PPDA 6.8).
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm"
              >
                <div
                  class="flex items-center justify-between pb-space-sm border-b border-surface-container mb-space-md"
                >
                  <h3
                    class="font-headline-sm text-headline-sm font-bold text-on-surface"
                  >
                    Pulse Columnists
                  </h3>
                  <span
                    class="font-label-sm text-label-sm text-primary font-bold"
                    >Our Writers</span
                  >
                </div>
                <div class="space-y-space-md">

                  <div class="flex items-center gap-space-sm">
                    <img
                      class="w-10 h-10 rounded-full object-cover shadow-sm"
                      data-alt="Professional headshot of senior European football tactical analyst with glasses smiling against bright modern newsroom backdrop"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA23BdrlLmko7gLi-4Ifkfbs3IdA2xSBRKcD1AwHq4PiWhNGbKLjipB3GcOVZSWgsjYY9qdz0P_jd22I25vlK-y-zQm8BVt7XRqlEfKurAylVvoJdrkEuVcMvbelK1tJbYOMNgm7BWJLhWs_cm2vDu15GhapD5Ry5WqWoCJ501nasW6YgcwTkNoSAhjpQ0D3_jPVryRTYWt8VvhPQ6i_5YQQ9y59YY8oq-BBRBm7WxOuMqJX814gNfd"
                    />
                    <div class="flex-1 min-w-0">
                      <h4
                        class="font-label-md text-label-md font-bold text-on-surface truncate"
                      >
                        Jonathan Wilson
                      </h4>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant truncate"
                      >
                        Historical Tactics &amp; Global Systems
                      </p>
                    </div>
                    <button
                      class="p-1 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                    >
                      <span class="material-symbols-outlined text-headline-sm"
                        >bookmark_border</span
                      >
                    </button>
                  </div>

                  <div class="flex items-center gap-space-sm">
                    <img
                      class="w-10 h-10 rounded-full object-cover shadow-sm"
                      data-alt="Confident sports data journalist woman with blazer smiling against high-tech football stadium telemetry screens"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2DiHqV6YdpJAu_YPcgZyTIweWy0ul4jybXJSWV9AIVt-4IXWAv47Fi_8F-Y54D_waehOvvKgLGntxxf-OehuVl1AVerlBUHZk97mbEfmpdu1P9zQJaivsxrviiceyahJUAFxsaN0oi3sYoajQCBls0hKXDdnzJwm6oXAVXB2Sv4zbDZl9c0coda2lSKZHhQO7q6GnhK5lfE2Rql3F6KA3cxzt0pKIXTZORgLdJGYnq7veq64JuSFc"
                    />
                    <div class="flex-1 min-w-0">
                      <h4
                        class="font-label-md text-label-md font-bold text-on-surface truncate"
                      >
                        Dr. Alison McGovern
                      </h4>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant truncate"
                      >
                        Head of Predictive Telemetry
                      </p>
                    </div>
                    <button
                      class="p-1 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                    >
                      <span class="material-symbols-outlined text-headline-sm"
                        >bookmark_border</span
                      >
                    </button>
                  </div>

                  <div class="flex items-center gap-space-sm">
                    <img
                      class="w-10 h-10 rounded-full object-cover shadow-sm"
                      data-alt="Experienced European football transfer market insider journalist smiling in dark casual jacket outdoors in Milan"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlh49xLoVyrPho7LbyVJEoq3Ri8zZ3nATBaENRO-myaZVdhFwzhBDQcn_dpc0R6FE8_EdvbmhbfYmRlVrtonsNKKodNq2uUjEn68Dl0r3lQ7l7RfmHzEX0yHif3AIVMigtUn4Cp2s1VO31KG_Xr7D0xVqHxOuEzB7Xvntc1QuFMkciX4X-X8eG3BZIQGCR6X2SpGUotjFLZ6Nt2l1DawBeWfZFrIHef_XvvfhYTUiSh1WVrMGsq8_x"
                    />
                    <div class="flex-1 min-w-0">
                      <h4
                        class="font-label-md text-label-md font-bold text-on-surface truncate"
                      >
                        Fabrizio Romano Wire
                      </h4>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant truncate"
                      >
                        Market Verification &amp; Contracts
                      </p>
                    </div>
                    <button
                      class="p-1 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                    >
                      <span class="material-symbols-outlined text-headline-sm"
                        >bookmark_border</span
                      >
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="bg-gradient-to-br from-primary to-primary-container p-space-lg rounded-xl shadow-md text-on-primary flex flex-col justify-between"
              >
                <div class="mb-space-md">
                  <div class="flex items-center gap-1.5 mb-2">
                    <span
                      class="material-symbols-outlined text-headline-md text-primary-fixed"
                      >mark_email_read</span
                    >
                    <span
                      class="font-label-sm text-label-sm uppercase font-bold tracking-widest text-primary-fixed"
                      >The Morning Kickoff</span
                    >
                  </div>
                  <h3
                    class="font-headline-md text-headline-md font-extrabold leading-tight mb-2"
                  >
                    Tactical telemetry &amp; transfer scoops before morning
                    coffee.
                  </h3>
                  <p class="font-body-sm text-body-sm text-on-primary/90">
                    Join 180,000+ managers, scouts, and devoted tacticians.
                    Curated and delivered daily at 07:00 UTC.
                  </p>
                </div>
                <form
                  class="flex flex-col gap-space-sm"
                  onsubmit="event.preventDefault(); this.querySelector('button').innerText = 'Subscribed!';"
                >
                  <input
                    class="w-full px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none"
                    placeholder="Enter your email address"
                    required=""
                    type="email"
                  />
                  <button
                    class="w-full py-2 bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim transition-colors rounded-lg font-label-md text-label-md font-bold tracking-wide shadow-sm"
                    type="submit"
                  >
                    Get Free Briefing
                  </button>
                  <p
                    class="text-center font-body-sm text-body-sm text-on-primary/75 text-[11px]"
                  >
                    Strictly zero spam. Unsubscribe anytime with one tap.
                  </p>
                </form>
              </div>
            </aside>
          </div>
        </Container>
    </div>
  )
}

export default NewsHomePage