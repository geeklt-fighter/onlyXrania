import { Montserrat, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const ICON_URL = 'https://raw.githubusercontent.com/phosphor-icons/core/main/assets/bold/diamond-bold.svg';

export const metadata: Metadata = {
  title: 'OnlyX - Premium Experience',
  description: 'Join an elite community where sophistication meets exclusivity.',
  applicationName: 'OnlyXRania',
  icons: {
    icon: [
      { url: ICON_URL, type: 'image/svg+xml' }
    ],
    apple: [
      { url: ICON_URL, type: 'image/svg+xml' }
    ]
  },
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <link 
          rel="icon" 
          href={ICON_URL}
          type="image/svg+xml"
        />
        <link 
          rel="apple-touch-icon" 
          href={ICON_URL}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
