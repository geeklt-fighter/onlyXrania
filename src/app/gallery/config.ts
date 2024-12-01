export interface GalleryFolder {
  id: string;
  name: string;
  path: string;
  description?: string;
}

export interface GalleryConfig {
  folders: GalleryFolder[];
}

export const galleryConfig: GalleryConfig = {
  folders: [
    {
      id: 'midnight-temptation',
      name: 'Midnight Temptation',
      path: 'Midnight Temptation',
      description: 'Rania posing elegantly in black lace lingerie with seductive gaze'
    },
    {
      id: 'dark-romance',
      name: 'Dark Romance',
      path: 'Dark Romance',
      description: 'Rania in alluring satan displaying confident pose'
    },
    {
      id: 'elegance-seduction',
      name: 'Elegant Seduction',
      path: 'Elegant Seduction',
      description: 'Rania in sophisticated pose wearing premium outfit'
    },
    {
      id: 'sweet-surrender',
      name: 'Sweet Surrender',
      path: 'Sweet Surrender',
      description: 'Rania in intimate boudoir setting with lace details'
    },
  ]
}; 