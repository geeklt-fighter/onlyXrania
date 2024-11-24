import { FC } from 'react';

interface VideoPreviewProps {
  src: string;
  className?: string;
}

const VideoPreview: FC<VideoPreviewProps> = ({ src, className = '' }) => {
  return (
    <div className={`group/video relative h-full ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-300 
                   group-hover/video:scale-105"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hover Overlay - 調整按鈕位置 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                    opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-center gap-2">
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-full 
                       bg-white/10 backdrop-blur-sm hover:bg-white/20 
                       transition-all duration-300 border border-white/20"
            >
              <span className="text-base">▶️</span>
            </button>
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-full 
                       bg-white/10 backdrop-blur-sm hover:bg-white/20 
                       transition-all duration-300 border border-white/20"
            >
              <span className="text-base">💬</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview; 