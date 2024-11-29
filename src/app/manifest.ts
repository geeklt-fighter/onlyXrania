import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OnlyXRania',
    short_name: 'OnlyXRania',
    description: 'Artistic photography and exclusive fashion content by Rania',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: 'https://raw.githubusercontent.com/phosphor-icons/core/main/assets/bold/diamond-bold.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      }
    ],
    orientation: 'portrait',
    categories: ['photography', 'lifestyle', 'fashion'],
    lang: 'en',
    dir: 'ltr',
    prefer_related_applications: false,
    related_applications: []
  }
} 