"use client"
import { useState } from 'react';

export default function Header() {
  // Add state for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 平滑滾動處理函數
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-white font-display text-2xl">
            OnlyXRania
          </a>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links - Hidden on mobile unless menu is open */}
          <ul className={`md:flex items-center gap-8 ${
            isMenuOpen 
              ? 'absolute top-full left-0 right-0 flex flex-col bg-black/80 p-4 backdrop-blur-sm'
              : 'hidden md:flex'
          }`}>
            <li className="md:py-0 py-2">
              <a 
                href="#gallery"
                onClick={(e) => {
                  scrollToSection(e, 'gallery');
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-amber-400 transition-colors"
              >
                Gallery
              </a>
            </li>
            <li className="md:py-0 py-2">
              <a 
                href="#features"
                onClick={(e) => {
                  scrollToSection(e, 'features');
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-amber-400 transition-colors"
              >
                Features
              </a>
            </li>
            <li className="md:py-0 py-2">
              <a 
                href="#contact"
                onClick={(e) => {
                  scrollToSection(e, 'contact');
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-amber-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 