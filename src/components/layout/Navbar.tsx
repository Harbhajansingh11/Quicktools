'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Wrench, 
  Search, 
  Menu, 
  X, 
  ArrowRight,
  Command
} from 'lucide-react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { SearchModal } from '@/components/common/SearchModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut listener (Cmd+K, Ctrl+K, or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Tools', href: '/tools' },
    { name: 'Categories', href: '/categories' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-200 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-2xs'
            : 'bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Brand Identity */}
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="group flex items-center gap-2.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-0.5"
                aria-label="QuickTools Home"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-2xs group-hover:bg-blue-700 transition-colors">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                  QuickTools
                </span>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 ${
                        isActive
                          ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800/90 font-semibold'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: Search, Theme Toggle, CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Search Modal Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2.5 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 rounded-lg border border-slate-200/80 dark:border-slate-700/80 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Search tools (Press / or Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span className="font-normal">Search utilities...</span>
                <kbd className="flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded">
                  <Command className="w-2.5 h-2.5" />K
                </kbd>
              </button>

              <ThemeToggle className="w-8 h-8 rounded-lg p-1.5" />

              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 shadow-2xs shadow-blue-600/20"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Search tools"
              >
                <Search className="w-4 h-4" />
              </button>

              <ThemeToggle className="w-8 h-8 rounded-lg p-1.5" />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090d16] px-4 pt-3 pb-5 space-y-3">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800/90 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center justify-between w-full px-3 py-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-lg text-left"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5" />
                  <span>Search utilities...</span>
                </span>
                <kbd className="px-1 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded">
                  /
                </kbd>
              </button>

              <Link
                href="/tools"
                className="flex items-center justify-center gap-1.5 w-full px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search / Command Palette Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
