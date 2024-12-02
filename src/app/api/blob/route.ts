import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');


    const { blobs } = await list({
      token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN,
      prefix: folder ? `${folder}/` : '',
    });
    
    // 過濾掉目錄和非圖片文件
    const filteredBlobs = blobs
      .filter(blob => {
        // 確保不是目錄（目錄通常以 / 結尾）
        if (blob.pathname.endsWith('/')) return false;
        
        // 只接受圖片文件
        const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(blob.pathname);
        return blob.url && isImage;
      })
      .map(blob => ({
        name: blob.pathname.split('/').pop(),
        url: blob.url,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
        pathname: blob.pathname
      }));
    
    return NextResponse.json(filteredBlobs);
  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to fetch blobs',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 