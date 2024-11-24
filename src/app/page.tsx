import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WeeklyPicks from '@/components/WeeklyPicks';
import ImageGallery from '@/components/ImageGallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black">
      <Header />
      <main className="relative">
        <section className="min-h-screen">
          <Hero />
        </section>

        <div className="space-y-0">
          <div className="bg-gradient-to-b from-black via-black/90 to-black/80">
            <Features />
          </div>
          
          <div className="bg-gradient-to-b from-black/80 via-black/90 to-black">
            <ImageGallery />
          </div>
          
          <div className="bg-gradient-to-b from-black via-black/90 to-black/80">
            <WeeklyPicks />
          </div>
          
          <div className="bg-gradient-to-b from-black/80 via-black/90 to-black">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
