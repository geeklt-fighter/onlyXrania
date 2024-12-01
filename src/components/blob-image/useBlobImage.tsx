import { useState, useEffect } from 'react';

export interface BlobImage {
    url: string;
    pathname: string;
    size: number;
    uploadedAt: Date;
}

// 用於獲取所有圖片
export function useBlobImages() {
    const [images, setImages] = useState<BlobImage[]>([]);
    const [loading, setLoading] = useState(true);

    const getImages = async () => {
        try {
            const response = await fetch('/api/blob');
            const data = await response.json();
            setImages(data.blobs);
        } catch (error) {
            console.error('Failed to fetch images:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getImages();
    }, []);

    return { images, loading };
}

// 用於簽發單個圖片鏈接
export async function getBlobImageUrl(pathname: string): Promise<string | null> {
    try {
        const response = await fetch('/api/blob');
        const data = await response.json();
        const image = data.blobs.find((blob: BlobImage) => blob.pathname.includes(pathname));
        return image?.url || null;
    } catch (error) {
        console.error('Failed to get blob image URL:', error);
        return null;
    }
}

// 用於批量簽發多個圖片鏈接
export async function getBlobImageUrls(pathnames: string[]): Promise<Map<string, string>> {
    const urlMap = new Map<string, string>();
    try {
        const response = await fetch('/api/blob');
        const data = await response.json();
        
        pathnames.forEach(pathname => {
            const image = data.blobs.find((blob: BlobImage) => blob.pathname.includes(pathname));
            if (image?.url) {
                urlMap.set(pathname, image.url);
            }
        });
    } catch (error) {
        console.error('Failed to get blob image URLs:', error);
    }
    return urlMap;
} 