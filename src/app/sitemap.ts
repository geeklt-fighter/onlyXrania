import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://only-x-rania.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en-US': 'https://only-x-rania.vercel.app/en-US',
        }
      }
    },
    {
      url: 'https://only-x-rania.vercel.app/gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': 'https://only-x-rania.vercel.app/en-US/gallery',
        }
      }
    }
  ]
} 