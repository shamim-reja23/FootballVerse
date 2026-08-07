import Container from '@/components/layout/Container'
import { CalendarDays, MapPin } from 'lucide-react'
import React from 'react'

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
                            <p className="text-sm font-semibold text-primary/80">
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
                            <p class="text-sm font-medium text-primary/80">
                                Premier League · Away
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border flex flex-wrap justify-center gap-x-16 gap-y-2">
                    <div className="flex items-center gap-1 text-primary/80">
                        <MapPin className='size-4'/>
                        <span className="text-sm ">Emirates Stadium, London</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary/80">
                        <CalendarDays className='size-4'/>
                        <span className="text-sm">April 23, 2024</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary/80">
                        <span class="material-symbols-outlined text-[18px]">groups</span>
                        <span class="text-label-sm">Attendance: 60,241</span>
                    </div>
                </div>
            </section>
        </Container>
    </div>
  )
}

export default MatchDetails