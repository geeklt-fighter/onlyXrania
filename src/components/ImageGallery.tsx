"use client"
import { FC, useState, useCallback } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ScrollReveal from './animations/ScrollReveal';
import Link from 'next/link';

const images = [
  {
    src: "/images/hero/1k_ins_02165_.png",
    alt: "Rania posing elegantly in black lace lingerie with seductive gaze",
    title: "Midnight Temptation",
    folder: "midnight-temptation"
  },
  {
    src: "/images/hero/1k_ins_02257_.png",
    alt: "Rania in alluring satan displaying confident pose",
    title: "Dark Romance",
    folder: "dark-romance"
  },
  {
    src: "/images/hero/1k_ins_04076_.png",
    alt: "Rania in intimate boudoir setting with lace details",
    title: "Sweet Surrender",
    folder: "sweet-surrender"
  },
  {
    src: "/images/hero/1k_ins_04118_.png",
    alt: "Rania in sophisticated pose wearing premium outfit",
    title: "Elegance Seduction",
    folder: "elegance-seduction"
  }
  // 可以添加更多圖片
];

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "OnlyXRania Photo Gallery",
  "description": "Exclusive premium photos by Rania",
  "image": images.map(img => ({
    "@type": "ImageObject",
    "contentUrl": img.src,
    "description": img.alt,
    "name": img.title
  }))
};

const ImageGallery: FC = () => {
  const [visibleIndices, setVisibleIndices] = useState([
    images.length - 1,
    0,
    1
  ]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  // 向左切換
  const handlePrevClick = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    
    setTimeout(() => {
      setVisibleIndices(prev => prev.map(index => 
        index === 0 ? images.length - 1 : index - 1
      ));
      setIsAnimating(false);
    }, 500); // 與動畫時間相匹配
  }, [isAnimating]);

  // 向右切換
  const handleNextClick = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('right');
    
    setTimeout(() => {
      setVisibleIndices(prev => prev.map(index => 
        (index + 1) % images.length
      ));
      setIsAnimating(false);
    }, 500); // 與動畫時間相匹配
  }, [isAnimating]);

  // 處理��航點擊
  const handleDotClick = useCallback((targetIndex: number) => {
    if (isAnimating) return;
    const currentIndex = visibleIndices[1];
    if (targetIndex === currentIndex) return;
    
    console.log('Navigating to image:', images[targetIndex]);

    setIsAnimating(true);
    const direction = targetIndex > currentIndex ? 'right' : 'left';
    setSlideDirection(direction);
    
    setTimeout(() => {
      const total = images.length;
      const leftIndex = targetIndex === 0 ? total - 1 : targetIndex - 1;
      const rightIndex = (targetIndex + 1) % total;
      setVisibleIndices([leftIndex, targetIndex, rightIndex]);
      setIsAnimating(false);
    }, 500);
  }, [visibleIndices, isAnimating]);

  return (
    <section id="gallery" className="relative bg-black/90 py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100 
                           text-sm tracking-[0.2em] uppercase mb-3 block font-sans">
              Featured Gallery
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold 
                         bg-gradient-to-r from-white via-gray-100 to-gray-300 
                         bg-clip-text text-transparent">
              Redefine Your Life Purpose Today
            </h2>
          </div>
        </ScrollReveal>

        {/* Gallery */}
        <div className="max-w-8xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {visibleIndices.map((imageIndex, position) => (
              <div 
                key={`${imageIndex}-${position}`}
                className={`
                  transform transition-transform duration-500 ease-in-out
                  ${isAnimating && slideDirection === 'right' ? '-translate-x-full' : ''}
                  ${isAnimating && slideDirection === 'left' ? 'translate-x-full' : ''}
                  ${!isAnimating ? 'translate-x-0' : ''}
                `}
              >
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={images[imageIndex].src}
                    alt={images[imageIndex].alt}
                    fill
                    className="object-cover scale-105 transition-all duration-700 
                             group-hover:scale-110 brightness-75"
                    priority
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
                      {images[imageIndex].title}
                    </h3>
                    <Link 
                      href={{
                        pathname: '/gallery',
                        query: { 
                          currentImage: images[imageIndex].src,
                          folder: images[imageIndex].folder
                        }
                      }}
                      className="inline-flex px-4 py-1.5 rounded-full 
                               bg-white/10 backdrop-blur-sm 
                               text-xs text-white/90 
                               border border-white/10
                               hover:bg-white/20 transition-colors">
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <ScrollReveal className="mt-12">
            <div className="flex justify-center items-center gap-4">
              <button 
                onClick={handlePrevClick}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                         border border-white/10 transition-colors duration-300"
              >
                <FiChevronLeft className="w-6 h-6 text-white/70" />
              </button>
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === visibleIndices[1]  // 使中間索引作為當前活動索引
                        ? 'w-8 bg-amber-200' 
                        : 'w-2 bg-white/20 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={handleNextClick}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                         border border-white/10 transition-colors duration-300"
              >
                <FiChevronRight className="w-6 h-6 text-white/70" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageGallerySchema)
        }}
      />
    </section>
  );
};

export default ImageGallery; 