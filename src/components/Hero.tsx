"use client"
import { FC, useState } from 'react';
import Image from 'next/image';
import FadeInUp from '@/components/animations/FadeInUp';
import RaniaIntro from '@/components/modals/RaniaIntro';

const SUBSCRIPTION_URL = "https://www.patreon.com/c/RaniaPrivateFantasies";

// 定義圖片數據
const HERO_IMAGES = [
    { src: "/images/hero/1k_ins_03090_.png", alt: "Featured content" },
    { src: "/images/hero/1k_ins_04118_.png", alt: "Featured content" },
    { src: "/images/hero/1k_ins_02167_.png", alt: "Featured content" },
];

const Hero: FC = () => {
    const [isIntroOpen, setIsIntroOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // 處理訂閱按鈕點擊
    const handleJoinClick = () => {
        window.open(SUBSCRIPTION_URL, '_blank', 'noopener,noreferrer');
    };

    // 處理圖片點擊
    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    return (
        <>
            <section className="relative min-h-screen overflow-hidden">
                {/* Enhanced Background with Dynamic Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10" />
                    <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 via-transparent to-transparent" />
                    {/* Abstract Shapes */}
                    <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                </div>

                {/* Main Content with Asymmetric Layout */}
                <div className="relative container mx-auto px-8 lg:px-16">
                    <div className="min-h-screen flex items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 py-32">
                            {/* Left Content - Takes 5 columns */}
                            <FadeInUp className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 lg:self-start">
                                <div className="space-y-8">
                                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                        <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                                        <span className="text-amber-300 text-sm tracking-[0.2em] uppercase">
                                            Premium Experience
                                        </span>
                                    </span>
                                    
                                    <div className="space-y-2">
                                        <h1 className="font-display text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight">
                                            <span className="block text-white mb-4">X</span>
                                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-4">
                                                Defined
                                            </span>
                                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
                                                By You
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                                
                                <p className="text-2xl text-zinc-400 max-w-xl leading-relaxed">
                                    Join an elite community where sophistication meets exclusivity. 
                                    Experience premium content curated by world-class creators.
                                </p>

                                <div className="flex flex-wrap gap-8 pt-8">
                                    <button
                                        onClick={handleJoinClick}
                                        className="group relative px-12 py-5 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full 
                                        hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-shadow duration-300"
                                    >
                                        <span className="relative z-10 text-slate-900 font-medium text-lg">
                                            Join Now
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full 
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </button>
                                    
                                    <button
                                        onClick={() => setIsIntroOpen(true)}
                                        className="group px-12 py-5 border border-zinc-700 rounded-full relative overflow-hidden"
                                    >
                                        <span className="relative z-10 text-white font-medium text-lg">
                                            Learn More
                                        </span>
                                        <div className="absolute inset-0 bg-amber-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    </button>
                                </div>
                            </FadeInUp>

                            {/* Right Content - Takes 7 columns with offset */}
                            <FadeInUp delay={0.2} className="lg:col-span-7 lg:col-start-6">
                                <div className="grid grid-cols-12 gap-8 h-full">
                                    {/* First Column */}
                                    <div className="col-span-5 space-y-8">
                                        <div 
                                            className="aspect-[3/4] relative rounded-3xl overflow-hidden cursor-pointer group"
                                            onClick={() => handleImageClick(HERO_IMAGES[0].src)}
                                        >
                                            <Image
                                                src={HERO_IMAGES[0].src}
                                                alt={HERO_IMAGES[0].alt}
                                                fill
                                                className="object-cover transition-all duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        <div 
                                            className="aspect-[3/4] relative rounded-3xl overflow-hidden cursor-pointer group translate-x-12"
                                            onClick={() => handleImageClick(HERO_IMAGES[1].src)}
                                        >
                                            <Image
                                                src={HERO_IMAGES[1].src}
                                                alt={HERO_IMAGES[1].alt}
                                                fill
                                                className="object-cover transition-all duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                    
                                    {/* Second Column */}
                                    <div className="col-span-7 translate-y-24">
                                        <div 
                                            className="aspect-[4/5] relative rounded-3xl overflow-hidden cursor-pointer group"
                                            onClick={() => handleImageClick(HERO_IMAGES[2].src)}
                                        >
                                            <Image
                                                src={HERO_IMAGES[2].src}
                                                alt={HERO_IMAGES[2].alt}
                                                fill
                                                className="object-cover transition-all duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </FadeInUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-7xl max-h-[90vh] w-full h-full m-8">
                        <Image
                            src={selectedImage}
                            alt="Full size image"
                            fill
                            className="object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center 
                            rounded-full bg-black/50 text-white hover:bg-black/70 
                            transition-colors duration-300 text-xl"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            <RaniaIntro isOpen={isIntroOpen} onClose={() => setIsIntroOpen(false)} />
        </>
    );
};

export default Hero;