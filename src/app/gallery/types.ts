export interface BlobImage {
  name: string;
  url: string;
  size: number;
  uploadedAt: string;
  pathname: string;
  title?: string;
}

// 緩存數據的接口
export interface CacheData<T> {
  data: T;
  timestamp: number;
} 