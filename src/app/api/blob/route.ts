import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { blobs } = await list({
      token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN,
    });
    
    return NextResponse.json({ blobs });
  } catch (error) {
    console.error('Failed to fetch blobs:', error);
    return NextResponse.json({ error: 'Failed to fetch blobs' }, { status: 500 });
  }
} 