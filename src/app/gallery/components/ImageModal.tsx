import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  imageUrl: string;
  thumbnailUrl: string;
  onClose: () => void;
}

export function ImageModal({ imageUrl, thumbnailUrl, onClose }: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="relative w-[90vw] h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        {isLoading && (
          <div className="absolute inset-0">
            <Image
              src={thumbnailUrl}
              alt="Loading preview"
              fill
              className="object-contain blur-sm scale-105"
              priority
            />
          </div>
        )}

        <Image
          src={imageUrl}
          alt="Enlarged gallery image"
          fill
          className={`
            object-contain transition-opacity duration-300
            ${isLoading ? 'opacity-0' : 'opacity-100'}
          `}
          quality={90}
          priority
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white
                   w-10 h-10 rounded-full flex items-center justify-center
                   bg-black/50 hover:bg-black/70 transition-colors"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
    </div>
  );
} 