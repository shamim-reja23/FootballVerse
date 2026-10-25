import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Container from "./Container";

const categories = [
  {
    label: "All News",
    to: "/news",
    end: true,
  },
  {
    label: "Tactical & Analytics",
    to: "/news/analysis",
  },
  {
    label: "Transfers & Rumours",
    to: "/news/transfers",
  },
  {
    label: "Premier League",
    to: "/news/premier-league",
  },
  {
    label: "Champions League",
    to: "/news/champions-league",
  },
  {
    label: "Match Previews",
    to: "/news/match-previews",
  },
  {
    label: "Interviews",
    to: "/news/interviews",
  },
  {
    label: "Data Stories",
    to: "/news/data-stories",
  },
];

export default function NewsCategoryBar() {
  return (
    <nav
      aria-label="News categories"
      className="mb-5 w-full bg-white shadow-sm"
    >
      <Container className="py-3">
        <div className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto py-1">
          {categories.map((category) => (
            <NavLink
              key={category.to}
              to={category.to}
              end={category.end}
              className="shrink-0"
            >
              {({ isActive }) =>
                isActive ? (
                  <Button
                    variant="default"
                    className="pointer-events-none rounded-full px-4 py-1.5 font-jakarta text-xs font-bold shadow-sm"
                    aria-current="page"
                  >
                    {category.label}
                  </Button>
                ) : (
                  <span className="block rounded-full bg-slate-100 px-3 py-1.5 font-jakarta text-xs text-primary/80 font-bold transition-colors hover:bg-slate-200 hover:text-primary">
                    {category.label}
                  </span>
                )
              }
            </NavLink>
          ))}
        </div>
      </Container>
    </nav>
  );
}
