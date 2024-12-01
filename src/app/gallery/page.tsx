'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryCache } from './cache';
import type { BlobImage } from './types';

// 圖片卡片組件
const ImageCard = ({ image, currentImage, index }: { 
  image: BlobImage; 
  currentImage: string | null;
  index: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className={`group relative aspect-[3/4] rounded-xl overflow-hidden
        ${image.url === currentImage ? 'ring-2 ring-amber-200' : ''}`}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      
      <Image
        src={image.url}
        alt={image.name}
        fill
        loading="lazy"  // 統一使用懶加載
        className={`
          object-cover transition-all duration-500 
          group-hover:scale-110
          ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoading(false)}
        quality={75}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-sm font-medium truncate">
            {image.name}
          </h3>
          <p className="text-white/70 text-xs">
            {new Date(image.uploadedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function GalleryPage() {
  const searchParams = useSearchParams();
  const initialFolder = searchParams.get('folder') || 'hero';
  const currentImage = searchParams.get('currentImage');

  const [images, setImages] = useState<BlobImage[]>([]);
  const [activeFolder, setActiveFolder] = useState(initialFolder);
  const [loading, setLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState<BlobImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      
      // 從緩存獲取
      const cachedData = galleryCache.get(activeFolder);
      if (cachedData) {
        setImages(cachedData);
        setVisibleImages(cachedData.slice(0, 12));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/blob?folder=${activeFolder}`);
        if (!response.ok) throw new Error('Failed to fetch images');
        const data = await response.json();
        
        setImages(data);
        setVisibleImages(data.slice(0, 12));
        
        // 存入緩存
        galleryCache.set(activeFolder, data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [activeFolder]);

  const folders = ['hero', 'series'];

  return (
    <div className="min-h-screen bg-black/95 py-16">
      <div className="container mx-auto px-4">
        <div className="absolute top-8 left-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-full 
                     bg-white/10 backdrop-blur-sm 
                     text-sm text-white/90 
                     hover:bg-white/20 transition-colors
                     border border-white/10"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-gray-400">Browse through our collection</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {folders.map((folder) => (
            <button
              key={folder}
              onClick={() => setActiveFolder(folder)}
              className={`px-6 py-2 rounded-full text-sm font-medium 
                transition-all duration-300
                hover:scale-105 active:scale-95
                ${activeFolder === folder 
                  ? 'bg-amber-200 text-black' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
            >
              {folder.charAt(0).toUpperCase() + folder.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                className="aspect-[3/4] rounded-xl bg-gray-800 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleImages.map((image, index) => (
              <ImageCard 
                key={image.url}
                image={image}
                currentImage={currentImage}
                index={index}
              />
            ))}
          </div>
        )}

        {!loading && visibleImages.length === 0 && (
          <div className="text-center text-white/70 py-20">
            No images found in this folder
          </div>
        )}
      </div>
    </div>
  );
} 