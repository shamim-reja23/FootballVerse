import React, { useEffect, useState } from "react";
import Container from "./Container.jsx";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button.jsx";
import { Bell, CircleUserRound, LogOut, Moon, Search, User2 } from "lucide-react";
import { Input } from "../ui/input.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover.jsx";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Competitions", href: "/competitions" },
  { label: "News", href: "/news" },
  { label: "Transfer", href: "/transfer" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  border-b border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-xs`}
    >
      <Container className="flex h-16 gap-4 items-center justify-between">
        <div className="flex items-center gap-5">
          <Link to="/" className="flex items-center gap-2">
            <img
              alt="FootballVerse Logo"
              className="h-8 w-auto object-contain"
              src="https://png.pngtree.com/png-vector/20190903/ourmid/pngtree-football-logo-designs-inspiration-isolated-on-white-background-png-image_1721380.jpg"
            />
            <span className="text-xl tracking-tight font-bold">
              Football<span className="text-[#059669]">Verse</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-base">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `py-1.5 transition-all duration-150 ${
                    isActive
                      ? "font-bold underline px-3.5"
                      : "font-medium px-3  text-slate-600 hover:text-primary"
                  }`
                }
                key={item.href}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative flex items-center bg-[#f1f5f9]/80 border border-slate-200 rounded-lg px-3 py-1.5 focus-within:bg-white focus-within:ring-2 focus-within:border-emerald-500 focus-within:ring-emerald-100 transition-all">
            <span className="text-slate-400 select-none mr-2">
              <Search className="size-5" />
            </span>

            <Input
              className={`text-sm placeholder:text-slate-400 focus:outline-none border-none focus:border-none focus-visible:ring-0 shadow-none`}
              placeholder="Search teams, player, leagues"
              type="text"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-lg text-slate-500 hover:text-primary hover:bg-slate-100 flex"
            >
              <span>
                <Bell className="size-5" />
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg text-slate-500 hover:text-primary hover:bg-slate-100 flex"
            >
              <Moon className="size-5 " />
            </Button>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </PopoverTrigger>

            <PopoverContent className="w-80">
              <div className="flex gap-4">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <h4 className="font-medium">Shamim Reja</h4>
                </div>
              </div>

              <div className="flex flex-col  text-gray-600">
                <div className="flex w-fit items-center gap-2 cursor-pointer ">
                  <User2 />
                  <Button variant="link">
                    <Link to="/">View Profile</Link>
                  </Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut/>
                  <Button variant="link">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
