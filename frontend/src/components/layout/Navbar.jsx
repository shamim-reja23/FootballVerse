import React, { useState } from 'react'
import Container from './Container.jsx'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button.jsx';
import { CircleUserRound, Menu, Moon, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet.jsx';


const navItems = [
  { label: "Matches", href: "/matches" },
  { label: "Competitions", href: "/competitions" },
  { label: "News", href: "/news" },
  { label: "Articles", href: "/articles" },
];


function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <Container className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-8'>
            <Link to="/" className='font-heading text-3xl font-extrabold'>FootballVerse</Link>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link 
                  className="text-secondary font-medium hover:text-primary transition-colors"
                  key={item.href}
                  to={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">         
            <Button variant='ghost' size='icon'>
              <Search className='size-5'/>
            </Button>
            <Button variant='ghost' size='icon'>
              <Moon className='size-5 '/>
            </Button>
            <Button variant='ghost' size='icon'>
              <CircleUserRound className='size-6 '/>
            </Button>

            
          </div>
        </Container>
    </header>
  )
}

export default Navbar