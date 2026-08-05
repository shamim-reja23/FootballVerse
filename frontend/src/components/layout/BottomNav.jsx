import React from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  Trophy,
  Newspaper,
  BookOpen,
  CircleUserRound,
} from "lucide-react";

const tabs = [
  {
    label: "Home",
    to: "/",
    icon: House,
  },
  {
    label: "Matches",
    to: "/matches",
    icon: Trophy,
  },
  {
    label: "News",
    to: "/news",
    icon: Newspaper,
  },
  {
    label: "Articles",
    to: "/articles",
    icon: BookOpen,
  },
  {
    label: "Profile",
    to: "/profile",
    icon: CircleUserRound,
  },
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 text-xs transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;