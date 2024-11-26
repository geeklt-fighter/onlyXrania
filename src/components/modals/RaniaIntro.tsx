import { FC } from 'react';
import Image from 'next/image';
import Modal from './Modal';

// 定義社交媒體鏈接
const SOCIAL_LINKS = {
  linktree: "https://linktr.ee/rania_sunshine",
};

interface RaniaIntroProps {
  isOpen: boolean;
  onClose: () => void;
}

const RaniaIntro: FC<RaniaIntroProps> = ({ isOpen, onClose }) => {
  // 處理關注按鈕點擊
  const handleFollowClick = () => {
    window.open(SOCIAL_LINKS.linktree, '_blank', 'noopener,noreferrer');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        {/* Header Image */}
        <div className="relative h-64 sm:h-80">
          <Image
            src="/images/hero/1k_ins_02167_.png"
            alt="Rania Profile"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative p-6 sm:p-8">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center 
                     rounded-full bg-white/10 hover:bg-white/20 
                     transition-colors duration-300"
          >
            ✕
          </button>

          <span className="text-transparent bg-clip-text bg-gradient-to-r 
                         from-amber-300 to-amber-100 text-sm tracking-[0.2em] 
                         uppercase mb-2 block">
            Model & Content Creator
          </span>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Meet Rania
          </h3>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400">
              Rania is a multifaceted creator who excels in both lingerie modeling and premium content creation. 
              Known for her confidence and sensual elegance, she crafts captivating visual experiences that 
              blend sophistication with allure. Her diverse portfolio spans from high-end fashion photography 
              to exclusive premium content, each piece reflecting her artistic vision and passionate dedication 
              to her craft. As a rising star on social media, she continues to inspire and connect with her 
              growing global audience through her authentic and bold expression.
            </p>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-amber-200">27K+</div>
                <div className="text-sm text-zinc-500">Followers</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-amber-200">300+</div>
                <div className="text-sm text-zinc-500">Premium Posts</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-amber-200">5★</div>
                <div className="text-sm text-zinc-500">Rating</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleFollowClick}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-200 to-amber-400 
                       rounded-full text-slate-900 font-medium 
                       hover:from-amber-300 hover:to-amber-500 
                       transition-all duration-300 
                       transform hover:scale-105"
            >
              Subscrib Rania Linktree
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RaniaIntro; 