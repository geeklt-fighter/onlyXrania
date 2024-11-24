"use client"
import { FaYoutube, FaInstagram, FaPatreon } from 'react-icons/fa';

const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@only_x_rania",
  instagram: "https://www.instagram.com/rania_elegant/",
  patreon: "https://www.patreon.com/c/RaniaPrivateFantasies"
};

export default function Header() {
  // 回到頂部的處理函數
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 滾動到 Contact 區塊
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo with click handler */}
          <div 
            onClick={scrollToTop}
            className="font-display text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-100 
                     bg-clip-text text-transparent cursor-pointer 
                     hover:from-amber-100 hover:to-amber-50 
                     transition-all duration-300"
          >
            OnlyXRania
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-6">
           
            
            <button 
              onClick={scrollToContact}
              className="px-6 py-2.5 border border-white/10 hover:border-amber-300/30 
                       rounded-full text-white font-medium 
                       transition-all duration-300 
                       hover:bg-white/5"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 