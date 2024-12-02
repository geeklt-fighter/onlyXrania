"use client"
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // 定義導航項目以確保順序一致性
  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'premium', label: 'Premium' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-white font-display text-2xl">
            OnlyXRania
          </a>

          {/* Hamburger Menu Button */}
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

          {/* Navigation Links */}
          <ul className={`md:flex items-center gap-8 ${
            isMenuOpen 
              ? 'absolute top-full left-0 right-0 flex flex-col bg-black/80 p-4 backdrop-blur-sm'
              : 'hidden md:flex'
          }`}>
            {navItems.map((item) => (
              <li key={item.id} className="md:py-0 py-2">
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    scrollToSection(e, item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
} 