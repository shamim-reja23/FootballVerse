import { Link } from "react-router-dom";

const featuredTransfer = {
  status: "Tier 1 Confirmed Source",
  contract: "Contract 2029",
  player: "Florian Wirtz",
  destination: "Manchester City",
  club: "Bayer Leverkusen",
  position: "Attacking Midfielder",
  age: 21,
  fee: "€125,000,000",
  update: "Personal Terms Agreed",
  probability: 82,
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCkEwGVpDdaQd1FvZCUYjWA976S-xi-pN2vSmRBGja3GeOKO1p5qyrhuAcWVptvzvJu-JVi8H6TEfWrtRMECstvBAwXbtoXQAZj3tntdGgYkUQxE0mmdjqpWhcDLz5wTwNL8EwLGXcEzSAEhorm4s9kqKa1b5W7lMYJVdTMdzJMX2HQk13HoDK13wAZjiE0GZUWNC7nJ4wFMGp0_nPGth3-ajOboIg3b32-SFA_FaE6jBzuCGFds9j6",
  report:
    "City have initiated concrete contacts with Wirtz’s representation after Pep Guardiola marked him as the primary generational heir to De Bruyne. Talks progress despite Bayern Munich's counter-offer.",
  source: "Reported by David Ornstein & PitchPulse Intel",
  href: "/transfers/florian-wirtz-manchester-city",
};

const transferRumours = [
  {
    status: "Rumour",
    probability: 45,
    time: "42m ago",
    title: "Viktor Gyökeres to Arsenal",
    description:
      "Sporting CP hold firm on €100m release clause as London club explore deferred instalment proposals.",
    href: "/transfers/viktor-gyokeres-arsenal",
    statusColor: "text-red-700",
  },
  {
    status: "Advanced",
    probability: 75,
    time: "2h ago",
    title: "Joshua Kimmich Contract Freeze",
    description:
      "Barcelona and Paris Saint-Germain prepare Bosman agreements if Bayern extension talks stall past January.",
    href: "/transfers/joshua-kimmich",
    statusColor: "text-emerald-700",
  },
  {
    status: "Official Inbound",
    probability: 90,
    time: "4h ago",
    title: "Ruben Amorim Backroom Signings",
    description:
      "Work permits approved for Sporting staff transitions to Manchester United Carrington training complex.",
    href: "/transfers/ruben-amorim-backroom-staff",
    statusColor: "text-emerald-700",
  },
];

function SectionHeader() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-1">
        <span className="h-6 w-2.5 rounded-full bg-emerald-800" />
        <h2 className="font-jakarta text-[28px] font-bold tracking-tight text-primary">
          Transfer Radar &amp; Rumours
        </h2>
      </div>

      <Link
        to="/transfers"
        className="flex shrink-0 items-center gap-1 font-jakarta text-xs font-extrabold text-emerald-800 "
      >
        <span className="hidden sm:inline hover:underline">Transfer Hub</span>
        <span className="material-symbols-outlined text-base! ">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}

function DealProbability({ probability }) {
  const stages = [
    "Inquiry",
    "Direct Club Talks",
    "Contract Drafting",
    "Medical",
  ];

  return (
    <div className="mb-3 rounded-lg bg-[#eaedff] p-3">
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <span className="font-jakarta text-[10px] font-extrabold uppercase text-primary/80">
          PitchPulse Deal Probability Meter
        </span>
        <span className="shrink-0 font-jakarta text-xs font-extrabold text-emerald-800">
          {probability}% Verified
        </span>
      </div>

      <div
        className="flex h-2.5 w-full overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-label="Deal probability"
        aria-valuenow={probability}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-emerald-800 transition-all duration-1000"
          style={{ width: `${probability}%` }}
        />
      </div>

      <div className="mt-1.5 flex flex-wrap justify-between gap-x-2 gap-y-1 font-jakarta text-xs text-primary/80">
        {stages.map((stage, index) => (
          <span
            key={stage}
            className={
              index === 2
                ? "font-semibold text-primary"
                : ""
            }
          >
            {stage}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedTransferCard({ transfer }) {
  return (
    <article className="flex flex-col justify-between rounded-xl bg-white p-5 shadow-sm md:col-span-7 border border-border/50">
      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="rounded bg-[#62ff96]/40 px-2.5 py-1 font-jakarta text-[10px] font-bold uppercase tracking-wider text-primary">
            {transfer.status}
          </span>
          <span className="shrink-0 font-jakarta text-[10px] font-semibold uppercase text-primary">
            {transfer.contract}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-3">
          <img
            src={transfer.image}
            alt={transfer.player}
            loading="lazy"
            className="h-16 w-16 shrink-0 rounded-xl object-cover shadow-sm"
          />

          <div className="min-w-0">
            <h3 className="font-jakarta text-xs font-bold text-primary/80">
              {transfer.player} to {transfer.destination}
            </h3>

            <p className="font-jakarta text-xs text-primary/80">
              {transfer.club} • {transfer.position} • Age {transfer.age}
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="rounded bg-[#eaedff] px-2 py-0.5 font-jakarta text-[10px] font-extrabold text-primary">
                Est. Fee: {transfer.fee}
              </span>
              <span className="font-jakarta text-[10px] font-bold text-emerald-800">
                {transfer.update}
              </span>
            </div>
          </div>
        </div>

        <DealProbability probability={transfer.probability} />

        <p className="font-jakarta text-xs text-primary/80">
          {transfer.report}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3">
        <span className="font-jakarta text-[10px] text-primary font-bold">
          {transfer.source}
        </span>

        <Link
          to={transfer.href}
          className="shrink-0 font-jakarta text-[10px] font-bold text-emerald-800 hover:underline"
        >
          Read Full Dossier →
        </Link>
      </div>
    </article>
  );
}

function RumourCard({ rumour }) {
  return (
    <Link
      to={rumour.href}
      className="block rounded-xl bg-white p-3 shadow-sm transition-colors hover:bg-[#eaedff]/50 border border-border/50"
    >
      <div className="mb-1 flex items-center justify-between gap-3 font-jakarta text-[10px]">
        <span className={`font-extrabold uppercase ${rumour.statusColor}`}>
          {rumour.status} • {rumour.probability}%
        </span>
        <span className="shrink-0 text-primary">{rumour.time}</span>
      </div>

      <h3 className="mb-1 font-jakarta text-base font-extrabold text-primary">
        {rumour.title}
      </h3>

      <p className="line-clamp-2 font-jakarta text-xs text-primary/80">
        {rumour.description}
      </p>
    </Link>
  );
}

export default function TransferRadar() {
  return (
    <section className="flex flex-col gap-3">
      <SectionHeader />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
        <FeaturedTransferCard transfer={featuredTransfer} />

        <div className="flex flex-col gap-2 md:col-span-5">
          {transferRumours.map((rumour) => (
            <RumourCard key={rumour.title} rumour={rumour} />
          ))}
        </div>
      </div>
    </section>
  );
}
