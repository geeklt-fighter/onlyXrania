import { FC, PropsWithChildren } from 'react';
import styles from '@/styles/animations.module.scss';

interface FadeInUpProps extends PropsWithChildren {
  delay?: number;
  className?: string;
}

const FadeInUp: FC<FadeInUpProps> = ({ children, delay = 0, className = '' }) => {
  const delayClass = delay ? styles[`delay-${Math.round(delay * 10)}`] : '';
  
  return (
    <div className={`${styles['fade-in-up']} ${delayClass} ${className}`}>
      {children}
    </div>
  );
};

export default FadeInUp; 