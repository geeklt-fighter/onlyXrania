import { FC } from 'react';
import FadeInUp from '@/components/animations/FadeInUp';
import Image from 'next/image';

interface PremiumFeatureProps {
  features: {
    title: string;
    description: string;
    image: string;
    icon?: string;
  }[];
}

const PremiumFeature: FC<PremiumFeatureProps> = ({ features }) => {
  return (
    <div className="mt-16">
      {/* 標題使用新的漸變效果 */}
      <h3 className="text-center font-display text-3xl sm:text-4xl mb-12 
                     bg-gradient-to-r from-amber-200 via-amber-100 to-white/80 
                     bg-clip-text text-transparent">
        This Week's Picks
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FadeInUp key={index} delay={0.1 * index}>
            <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer
                          ring-1 ring-white/5 hover:ring-amber-200/20 transition-all duration-500">
              {/* 背景圖片 */}
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover brightness-[0.4] group-hover:brightness-[0.3] 
                         group-hover:scale-105 transition-all duration-700"
              />

              {/* 內容覆蓋層 */}
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90
                            group-hover:opacity-100 transition-opacity duration-300">
                {feature.icon && (
                  <span className="text-2xl mb-2 opacity-80 group-hover:opacity-100
                                transition-opacity duration-300">
                    {feature.icon}
                  </span>
                )}
                <h4 className="font-display text-2xl sm:text-3xl font-medium 
                             bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent
                             mb-4">
                  {feature.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed
                           group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* 邊框效果 */}
              <div className="absolute inset-0 border border-white/5 
                           group-hover:border-amber-200/20 rounded-2xl 
                           transition-colors duration-500" />
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
};

export default PremiumFeature; 