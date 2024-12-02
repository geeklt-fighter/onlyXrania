import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/gallery',  // 圖片庫頁面允許爬蟲
      ],
      disallow: [
        '/api/',     // API 路徑禁止爬蟲
        '/_next/',   // Next.js 內部文件禁止爬蟲
        '/fonts/',   // 字體文件禁止爬蟲
      ]
    },
    sitemap: 'https://only-x-rania.vercel.app/sitemap.xml',  // 你的 Vercel 部署網址
  }
} 