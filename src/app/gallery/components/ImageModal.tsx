import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  imageUrl: string;
  thumbnailUrl: string;
  onClose: () => void;
  title?: string;
  description?: string;
  photographer?: string;
}

export function ImageModal({ 
  imageUrl, 
  thumbnailUrl, 
  onClose,
  title = 'Gallery Image',
  description = 'rania life and slight naughty picture of her',
  photographer = 'rania'
}: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <dialog 
      open
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      aria-label="Image viewer modal"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-[90vw] h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        {isLoading && (
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={thumbnailUrl}
              alt={`Loading preview of ${title}`}
              fill
              className="object-contain blur-sm scale-105"
              priority
            />
          </div>
        )}

        <figure className="h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`
              object-contain transition-opacity duration-300
              ${isLoading ? 'opacity-0' : 'opacity-100'}
            `}
            quality={90}
            priority
            onLoad={handleImageLoad}
          />
          {(description || photographer) && (
            <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white">
              {description && <p className="text-sm mb-1">{description}</p>}
              {photographer && (
                <p className="text-xs text-gray-300">
                  Photographer: {photographer}
                </p>
              )}
            </figcaption>
          )}
        </figure>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white
                   w-10 h-10 rounded-full flex items-center justify-center
                   bg-black/50 hover:bg-black/70 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Close image viewer"
        title="Close"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
    </dialog>
  );
} 