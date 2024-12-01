import type { BlobImage, CacheData } from './types';

const CACHE_KEY_PREFIX = 'gallery_cache_';
const CACHE_EXPIRY = 1000 * 60 * 5; // 5分鐘緩存

export const galleryCache = {
  getKey(folder: string) {
    return `${CACHE_KEY_PREFIX}${folder}`;
  },

  get(folder: string) {
    if (typeof window === 'undefined') return null;
    
    try {
      const cached = localStorage.getItem(this.getKey(folder));
      if (!cached) return null;

      const { data, timestamp } = JSON.parse(cached) as CacheData<BlobImage[]>;
      
      if (Date.now() - timestamp > CACHE_EXPIRY) {
        this.remove(folder);
        return null;
      }

      return data;
    } catch {
      return null;
    }
  },

  set(folder: string, data: BlobImage[]) {
    if (typeof window === 'undefined') return;
    
    try {
      const cacheData: CacheData<BlobImage[]> = {
        data,
        timestamp: Date.now()
      };
      
      localStorage.setItem(this.getKey(folder), JSON.stringify(cacheData));
    } catch (error) {
      this.remove(folder);
    }
  },

  remove(folder: string) {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.getKey(folder));
  },

  clear() {
    if (typeof window === 'undefined') return;
    Object.keys(localStorage)
      .filter(key => key.startsWith(CACHE_KEY_PREFIX))
      .forEach(key => localStorage.removeItem(key));
  }
}; 