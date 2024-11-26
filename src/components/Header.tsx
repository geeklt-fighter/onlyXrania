"use client"

export default function Header() {
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

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            <li>
              <a 
                href="#gallery"
                onClick={(e) => scrollToSection(e, 'gallery')}
                className="text-white hover:text-amber-400 transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#features"
                onClick={(e) => scrollToSection(e, 'features')}
                className="text-white hover:text-amber-400 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
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