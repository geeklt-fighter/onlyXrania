import type { BlobImage, CacheData } from './types';

const CACHE_KEY_PREFIX = 'gallery_cache_';
const CACHE_EXPIRY = 1000 * 60 * 5; // 5分鐘緩存

export const galleryCache = {
  getKey(folder: string) {
    return `${CACHE_KEY_PREFIX}${encodeURIComponent(folder)}`;
  },

  get(folder: string) {
    if (typeof window === 'undefined') return null;
    
    try {
      const key = this.getKey(folder);
      const cached = localStorage.getItem(key);
      
      if (!cached) {
        console.log(`No cache found for folder: ${folder}`);
        return null;
      }

      const { data, timestamp } = JSON.parse(cached) as CacheData<BlobImage[]>;
      
      if (!Array.isArray(data) || data.length === 0) {
        console.log(`Invalid cache data for folder: ${folder}`);
        this.remove(folder);
        return null;
      }

      if (Date.now() - timestamp > CACHE_EXPIRY) {
        console.log(`Cache expired for folder: ${folder}`);
        this.remove(folder);
        return null;
      }

      console.log(`Valid cache found for folder: ${folder}, items: ${data.length}`);
      return data;
    } catch (error) {
      console.error('Cache error:', error);
      this.remove(folder);
      return null;
    }
  },

  set(folder: string, data: BlobImage[]) {
    if (typeof window === 'undefined') return;
    
    try {
      if (!Array.isArray(data) || data.length === 0) {
        console.log('Skipping cache for empty data');
        return;
      }

      const key = this.getKey(folder);
      const cacheData: CacheData<BlobImage[]> = {
        data,
        timestamp: Date.now()
      };
      
      localStorage.setItem(key, JSON.stringify(cacheData));
      console.log(`Cached ${data.length} items for folder: ${folder}`);
    } catch (error) {
      console.error('Cache set error:', error);
      this.remove(folder);
    }
  },

  remove(folder: string) {
    if (typeof window === 'undefined') return;
    const key = this.getKey(folder);
    localStorage.removeItem(key);
    console.log(`Removed cache for folder: ${folder}`);
  },

  clear() {
    if (typeof window === 'undefined') return;
    try {
      Object.keys(localStorage)
        .filter(key => key.startsWith(CACHE_KEY_PREFIX))
        .forEach(key => {
          localStorage.removeItem(key);
          console.log(`Cleared cache: ${key}`);
        });
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }
}; 