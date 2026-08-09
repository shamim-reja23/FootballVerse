import Container from '@/components/layout/Container'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDays, MapPin, Users } from 'lucide-react'
import React from 'react'


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
    <div className='py-8'>
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
                            <span className="text-live font-sm font-bold">72' LIVE</span                >
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="font-heading text-4xl font-extrabold">2</span>
                            <span className="text-muted-foreground font-heading text-4xl font-extrabold">-</span>
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
                        <MapPin className='size-4'/>
                        <span className="text-sm ">Emirates Stadium, London</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary/80">
                        <CalendarDays className='size-4'/>
                        <span className="text-sm">April 23, 2024</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary/80">
                        <Users className='size-4'/>
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

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
                <div className='lg:col-span-8 space-y-8'>
                    <div className="bg-white border rounded-xl p-8">
                        <h2 className="font-heading text-xl font-extrabold mb-8">
                            Match Statistics
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold">54%</span>
                                    <span className="text-sm font-medium uppercase tracking-wider">Possession</span>
                                    <span className="text-sm font-bold">46%</span>
                                </div>
                                <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-primary/30">
                                    <div className="h-full bg-primary w-[54%]" ></div>
                                    <div className="h-full w-[46%]" ></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold">14</span>
                                    <span className="text-sm font-medium uppercase tracking-wider"
                                    >Total Shots</span>
                                    <span className="text-sm font-bold">9</span>
                                </div>
                                <div
                                    className="flex h-1.5 w-full bg-primary/30 rounded-full overflow-hidden"
                                >
                                    <div className="h-full bg-primary w-[61%]" ></div>
                                    <div
                                    className="h-full bg-outline-variant w-[39%]"
                                    
                                    ></div>
                                </div>
                                </div>
                                <div>
                                <div className="flex justify-between items-center mb-stack-sm">
                                    <span className="text-label-sm font-bold">6</span>
                                    <span
                                    className="text-stats-label text-on-surface-variant uppercase tracking-wider"
                                    >Shots on Target</span>
                                    <span className="text-label-sm font-bold">4</span>
                                </div>
                                <div
                                    className="flex h-1.5 w-full bg-surface-container rounded-full overflow-hidden"
                                >
                                    <div className="h-full bg-primary w-[60%]" ></div>
                                    <div
                                    className="h-full bg-outline-variant w-[40%]"
                                    
                                    ></div>
                                </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-stack-sm">
                                <span className="text-label-sm font-bold text-[#22C55E]"
                                    >2.14</span>
                                <span
                                    className="text-stats-label text-on-surface-variant uppercase tracking-wider"
                                    >Expected Goals (xG)</span                                >
                                <span className="text-label-sm font-bold">1.28</span>
                                </div>
                                <div
                                className="flex h-1.5 w-full bg-surface-container rounded-full overflow-hidden"
                                >
                                <div className="h-full bg-primary w-[62.5%]" ></div>
                                <div
                                    className="h-full bg-outline-variant w-[37.2%]"
                                    
                                ></div>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg pt-stack-sm"
                            >
                                <div
                                className="text-center py-stack-sm bg-surface-container-low rounded-lg"
                                >
                                <p
                                    className="text-stats-label text-on-surface-variant uppercase mb-1"
                                >
                                    Corners
                                </p>
                                <p className="text-headline-md">7 - 3</p>
                                </div>
                                <div
                                className="text-center py-stack-sm bg-surface-container-low rounded-lg"
                                >
                                <p
                                    className="text-stats-label text-on-surface-variant uppercase mb-1"
                                >
                                    Pass Accuracy
                                </p>
                                <p className="text-headline-md">88% - 82%</p>
                                </div>
                                <div
                                className="text-center py-stack-sm bg-surface-container-low rounded-lg"
                                >
                                <p
                                    className="text-stats-label text-on-surface-variant uppercase mb-1"
                                >
                                    Fouls
                                </p>
                                <p className="text-headline-md">11 - 14</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default MatchDetails