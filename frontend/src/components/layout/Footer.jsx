import { Link } from "react-router-dom";
import Container from "./Container";

const socialLinks = [
  { id: "feed", icon: "dynamic_feed", to: "/", label: "News Feed" },
  { id: "video", icon: "smart_display", to: "/", label: "Videos" },
  { id: "radar", icon: "radar", to: "/", label: "Match Radar" },
  { id: "forum", icon: "forum", to: "/", label: "Community Forum" },
];

const footerSections = [
  {
    title: "Competitions",
    links: [
      { label: "Premier League", to: "/competitions/premier-league" },
      { label: "UEFA Champions League", to: "/competitions/champions-league" },
      { label: "La Liga", to: "/competitions/la-liga" },
      { label: "Serie A", to: "/competitions/serie-a" },
      { label: "Bundesliga", to: "/competitions/bundesliga" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Live Match Tracker", to: "/matches" },
      { label: "xG Analytics Engine", to: "/analytics" },
      { label: "Transfer Radar", to: "/transfers" },
      { label: "Tactical Momentum", to: "/analytics/momentum" },
      { label: "Fantasy Hub", to: "/fantasy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About PitchPulse", to: "/about" },
      { label: "Editorial Policy", to: "/editorial-policy" },
      { label: "Careers", to: "/careers" },
      { label: "Press Kit", to: "/press" },
      { label: "Contact Support", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Cookie Settings", to: "/cookies" },
      { label: "Responsible Gaming", to: "/responsible-gaming" },
      { label: "API Licensing", to: "/api-licensing" },
    ],
  },
];

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-600 mt-8">
      <Container className="pt-8 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

          {/* Brand and social links */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img
                src="https://png.pngtree.com/png-vector/20190903/ourmid/pngtree-football-logo-designs-inspiration-isolated-on-white-background-png-image_1721380.jpg"
                alt="FootballVerse Logo"
                className="h-8 w-auto object-contain"
              />

              <span className="font-jakarta text-lg font-bold tracking-tight text-primary">
                Football<span className="text-[#059669]">Verse</span>
              </span>
            </div>

            <p className="font-jakarta text-[13px] text-slate-500 mb-5">
              The heartbeat of football — real-time scores, deep tactical
              analytics, breaking transfers.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.id}
                  to={social.to}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#059669] hover:bg-slate-200 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-jakarta text-xs uppercase text-primary font-extrabold tracking-wider mb-3">
                {section.title}
              </h4>

              <ul className="space-y-1 font-jakarta text-sm font-medium">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="hover:text-[#059669] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-jakarta text-xs text-slate-500">
            © 2026 FootballVerse Ltd. All rights reserved. Data powered by
            FootballVerse Engine.
          </p>

          <div className="flex items-center gap-4 font-jakarta text-xs text-slate-500">
            <span className="flex items-center gap-1 font-medium">
              
              Made with ❤️ by Shamim Reja
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
