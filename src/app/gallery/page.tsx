'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryCache } from './cache';
import type { BlobImage } from './types';
import { galleryConfig } from './config';
import { ImageModal } from './components/ImageModal';

// 圖片卡片組件
const ImageCard = ({ image, currentImage, index }: { 
  image: BlobImage; 
  currentImage: string | null;
  index: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 預加載大圖
  useEffect(() => {
    if (isModalOpen) {
      const preloadImage = new window.Image();
      preloadImage.src = image.url;
    }
  }, [isModalOpen, image.url]);

  return (
    <>
      <article
        onClick={() => setIsModalOpen(true)}
        className={`group relative aspect-[3/4] rounded-xl overflow-hidden 
          cursor-pointer
          ${image.url === currentImage ? 'ring-2 ring-amber-200' : ''}`}
        role="button"
        aria-label={`View ${image.title || 'gallery image'} in modal`}
      >
        {isLoading && !error && (
          <div className="absolute inset-0 bg-gray-800/80 animate-pulse" />
        )}
        
        <Image
          src={image.url}
          alt={image.title || `Gallery image ${index + 1}`}
          fill
          priority={index < 4}
          loading={index < 4 ? undefined : "lazy"}
          className={`
            object-cover transition-all duration-300
            group-hover:scale-110
            ${isLoading ? 'opacity-0' : 'opacity-100'}
          `}
          sizes="(max-width: 640px) calc(50vw - 24px), 
                 (max-width: 768px) calc(33.3vw - 24px),
                 (max-width: 1024px) calc(25vw - 24px),
                 calc(20vw - 24px)"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
          quality={75}
        />
        
        {error && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <p className="text-white/70 text-sm">Failed to load image</p>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </article>

      {isModalOpen && (
        <ImageModal
          imageUrl={image.url}
          thumbnailUrl={image.url}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

// Create a wrapper component for the gallery content
function GalleryContent() {
  const searchParams = useSearchParams();
  const initialFolder = searchParams.get('folder') || 'midnight-temptation';
  const currentImage = searchParams.get('currentImage');

  const [activeFolder, setActiveFolder] = useState(initialFolder);
  const [images, setImages] = useState<BlobImage[]>([]);
  const [visibleImages, setVisibleImages] = useState<BlobImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      const currentFolder = galleryConfig.folders.find(f => f.id === activeFolder);

      if (!currentFolder) {
        console.error('Folder not found:', activeFolder);
        setError('Folder not found');
        setLoading(false);
        return;
      }

      try {
        // 先檢查緩存
        const cachedData = galleryCache.get(currentFolder.path);
        if (cachedData && cachedData.length > 0) {
          setImages(cachedData);
          setVisibleImages(cachedData.slice(0, 12));
          setLoading(false);
          return;
        }

        const folderPath = encodeURIComponent(currentFolder.path);
        
        const response = await fetch(`/api/blob?folder=${folderPath}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.statusText}`);
        }
        
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('Invalid data format');
        }

        setImages(data);
        setVisibleImages(data.slice(0, 12));
        galleryCache.set(currentFolder.path, data);

      } catch (error) {
        console.error('Error fetching images:', error);
        setError(error instanceof Error ? error.message : 'Failed to load images');
        galleryCache.remove(currentFolder.path);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [activeFolder]);

  // 當點擊導航按鈕時
  const handleFolderClick = (folderId: string) => {
    setActiveFolder(folderId);
  };

  return (
    <main className="min-h-screen bg-black/95 py-16">
      <div className="container mx-auto px-4">
        <nav className="absolute top-8 left-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-full 
                     bg-white/10 backdrop-blur-sm 
                     text-sm text-white/90 
                     hover:bg-white/20 transition-colors
                     border border-white/10"
            aria-label="Return to homepage"
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
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-gray-400">Browse through our collection</p>
        </header>

        <nav className="flex justify-center gap-4 mb-12 flex-wrap" aria-label="Gallery categories">
          {galleryConfig.folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => setActiveFolder(folder.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium 
                transition-all duration-300
                hover:scale-105 active:scale-95
                ${activeFolder === folder.id 
                  ? 'bg-amber-200 text-black' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
              title={folder.description}
              aria-current={activeFolder === folder.id ? 'page' : undefined}
            >
              {folder.name}
            </button>
          ))}
        </nav>

        <section aria-label="Gallery images">
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
        </section>

        {error && (
          <div className="text-center text-red-400 py-20">
            {error}
          </div>
        )}

        {!loading && !error && visibleImages.length === 0 && (
          <div className="text-center text-white/70 py-20">
            No images found in this folder
          </div>
        )}
      </div>
    </main>
  );
}

// Main page component with Suspense
export default function GalleryPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-black/95 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                className="aspect-[3/4] rounded-xl bg-gray-800 animate-pulse"
              />
            ))}
          </div>
        </div>
      </main>
    }>
      <GalleryContent />
    </Suspense>
  );
} 