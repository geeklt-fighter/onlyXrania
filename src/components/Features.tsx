import { FC } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import VideoPreview from '@/components/VideoPreview';


const previewVideos = [
    {
        id: 1,
        title: "FASHION",
        description: "Lingerie and fashion showcases",
        videoUrl: "/videos/rania_elegant.mp4",
        category: "FASHION"
    },
    {
        id: 2,
        title: "TRANSITION",
        description: "Creative transition and dance videos",
        videoUrl: "/videos/rania_elegant1.mp4",
        category: "TRANSITION"
    },
    {
        id: 3,
        title: "Lifestyle",
        description: "Daily life and behind-the-scenes moments",
        videoUrl: "/videos/rania_elegant2.mp4",
        category: "Lifestyle",
    },
    {
        id: 4,
        title: "Sensual Reels",
        description: "Elegant and alluring short-form content",
        videoUrl: "/videos/rania_elegant3.mp4",
        category: "SENSUAL"
    }
];

const premiumFeatures = [
    {
        title: 'Elite Analytics',
        description: 'Gain deep insights into your performance with our advanced analytics suite. Track engagement, monitor growth, and optimize your content strategy with precision.',
        image: '/images/features/analytics.jpg',
        gradient: 'from-amber-400 to-amber-600'
    },
    {
        title: 'Professional Suite',
        description: 'Access premium tools designed for content creators. From advanced editing capabilities to automated workflows, elevate your content creation process.',
        image: '/images/features/suite.jpg',
        gradient: 'from-amber-500 to-rose-500'
    }
];

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGallery",
  "name": "OnlyXRania Video Gallery",
  "description": "Premium video content by Rania",
  "video": previewVideos.map(video => ({
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "contentUrl": video.videoUrl
  }))
};

const Features: FC = () => {
    return (
        <section id="features" className="py-32 sm:py-40">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100 
                           text-sm tracking-[0.2em] uppercase mb-3 block font-sans">
                            Content Categories
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold 
                         bg-gradient-to-r from-white via-gray-100 to-gray-300 
                         bg-clip-text text-transparent">
                            Diverse Content
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {previewVideos.map((video, index) => (
                        <ScrollReveal
                            key={video.id}
                            className={`transition-all duration-700 delay-[${index * 100}ms]`}
                        >
                            <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden">
                                <VideoPreview
                                    src={video.videoUrl}
                                    className="absolute inset-0 w-full h-full"
                                />

                                {/* Category Tag */}
                                <div className="absolute top-3 left-3 z-10">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full 
                                 bg-black/50 backdrop-blur-sm text-amber-100 
                                 border border-white/10">
                                        {video.category}
                                    </span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t 
                              from-black via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col 
                              items-center justify-end text-center 
                              translate-y-8 group-hover:translate-y-0 
                              opacity-0 group-hover:opacity-100 
                              transition-all duration-500">
                                    <h3 className="text-lg font-medium text-white mb-1.5">
                                        {video.title}
                                    </h3>
                                    <p className="text-xs text-white/80 line-clamp-2">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(videoSchema)
              }}
            />
        </section>
    );
};

export default Features; 