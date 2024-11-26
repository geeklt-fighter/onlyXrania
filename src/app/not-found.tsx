"use client"
import { FC } from 'react';
import Link from 'next/link';

const NotFound: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* 背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4NCjxmaWx0ZXIgaWQ9ImEiIHg9IjAiIHk9IjAiPg0KPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPg0KPC9maWx0ZXI+DQo8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjA1Ii8+DQo8L3N2Zz4=')]" />
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 via-transparent to-transparent" />
      </div>

      {/* 內容 */}
      <div className="relative text-center px-4">
        {/* 404 數字 */}
        <h1 className="font-display text-[12rem] leading-none font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* 標題 */}
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
          Page Not Found
        </h2>

        {/* 描述 */}
        <p className="text-zinc-400 mb-12 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Please check the URL or return to the homepage.
        </p>

        {/* 返回按鈕 */}
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 
                   bg-gradient-to-r from-amber-200 to-amber-400 
                   rounded-full text-slate-900 font-medium text-lg
                   hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] 
                   transition-shadow duration-300"
        >
          Return Home
        </Link>
      </div>

      {/* 裝飾元素 */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
    </div>
  );
};

export default NotFound; 