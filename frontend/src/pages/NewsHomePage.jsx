import BreakingNews from '@/components/layout/BreakingNews'
import Container from '@/components/layout/Container'
import FeaturedNews from '@/components/layout/FeaturedNews'
import FeaturedNewsSidebar from '@/components/layout/FeaturedNewsSidebar'
import MatchPreviews from '@/components/layout/MatchPreviews'
import NewsCategoryBar from '@/components/layout/NewsCategoryBar'
import TacticalBreakdowns from '@/components/layout/TacticalBreakdown'
import TopPerformer from '@/components/layout/TopPerformer'
import TopReadStories from '@/components/layout/TopReadStories'
import TransferRadar from '@/components/layout/TransferRadar'
import { Button } from '@/components/ui/button'
import React from 'react'

const NewsHomePage = () => {
  return (
    <div className='flex flex-col w-full'>
        <NewsCategoryBar/>

        <Container
          className="w-full pb-8"
        >

          <section
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8"
          >

            <FeaturedNews/>

            <FeaturedNewsSidebar/>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            <div className="lg:col-span-8 flex flex-col gap-8">

              <TacticalBreakdowns/>

              <TransferRadar/>

              <MatchPreviews/>
            </div>

            <aside className="lg:col-span-4 flex flex-col gap-5">

              <TopReadStories/>
              <BreakingNews/>

              {/* <div
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
              </div> */}
            </aside>
          </div>
        </Container>
    </div>
  )
}

export default NewsHomePage