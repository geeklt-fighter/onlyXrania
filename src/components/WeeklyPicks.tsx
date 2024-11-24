"use client"
import { FC } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';

const weeklyPicks = [
  {
    title: "Someone Is Thirsty...",
    description: " I can feel it from here. Don’t even try to hide it—I know exactly what you’re thinking as your eyes trace every curve. This little red number?",
    image: "/images/series/4k_exp_ins_00001_.png",
    url: "https://www.patreon.com/posts/someone-is-116103931?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link"
  },
  {
    title: "Feeling a Little Daring Tonight? 🔥",
    description: "Hey, babe! Tonight, I wanted to step it up with something extra edgy—cutouts along the sides and harness-style straps, giving this lingerie a bold, bondage-inspired vibe. It’s the perfect mix of daring and sensual, just for you. 💋",
    image: "/images/series/1k_ins_03832_.png",
    url: "https://www.patreon.com/posts/feeling-little-116029811?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link"
  },
  {
    title: "Taking It Up a Notch for My Sweetie",
    description: "You know I always keep things spicy for you, and today’s no different 😘. I slipped into this barely-there lingerie that leaves little to the imagination—just for you, of course. This set is all about confidence, seduction, and a little bit of teasing. Do you think you can handle it? 😏",
    image: "/images/series/4k_exp_ins_00021.png",
    url: "https://www.patreon.com/posts/taking-it-up-for-116609031?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link"
  },
  {
    title: "Dripping in Desire, Just for You 😘🔥",
    description: "Baby, I’m feeling extra naughty today... all dressed up in this glossy little number, just for your eyes. You see how everything glistens? I know you’re already imagining what happens next. My fingers are just teasing the surface, but I’m waiting for you to take control. Let’s make this moment sizzle together… don't make me wait too long. I promise, there’s so much more I’m dying to show you. Let’s get a little closer, shall we? 😏💦",
    image: "/images/series/4k_ins_00001.png",
    url: "https://linktr.ee/rania_sunshine"
  }
];

const WeeklyPicks: FC = () => {
  const handlePickClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-black/90 py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100 
                           text-sm tracking-[0.2em] uppercase mb-3 block font-sans">
                Premium Content
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold 
                         bg-gradient-to-r from-white via-gray-100 to-gray-300 
                         bg-clip-text text-transparent">
              This Week's Picks
            </h2>
          </div>
        </ScrollReveal>

        {/* Picks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {weeklyPicks.map((pick, index) => (
            <ScrollReveal 
              key={index} 
              className={`transition-all duration-700 delay-[${index * 100}ms]`}
            >
              <div 
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handlePickClick(pick.url)}
              >
                <Image
                  src={pick.image}
                  alt={pick.title}
                  fill
                  className="object-cover scale-105 transition-all duration-700 
                           group-hover:scale-110 brightness-75"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t 
                              from-black via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col 
                              items-center justify-end text-center 
                              translate-y-8 group-hover:translate-y-0 
                              opacity-0 group-hover:opacity-100 
                              transition-all duration-500">
                  <h3 className="text-xl font-medium text-white mb-2">
                    {pick.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-3 mb-4">
                    {pick.description}
                  </p>
                  <span className="inline-flex items-center text-amber-200 text-sm font-medium">
                    View More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyPicks; 