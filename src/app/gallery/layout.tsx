import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery - Browse RaniaX Collection',
  description: 'Explore our curated collection of beautiful photographs across various categories.',
  openGraph: {
    title: 'Photo Gallery - Browse RaniaX Collection',
    description: 'Explore our curated collection of beautiful photographs across various categories.',
    type: 'website',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
} 