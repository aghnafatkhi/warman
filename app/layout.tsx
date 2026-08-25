import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import './globals.css';
import { RESTAURANT_INFO } from '@/data/menu';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FAF8F5',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Warman Restaurant | Kota Wisata Cileungsi Bogor',
  description: 'Website resmi Warman Restaurant di Ruko Commpark Kota Wisata, Cileungsi, Bogor. Indonesian comfort food, lauk goreng, rice bowl, dan aneka sambal khas.',
  keywords: [
    'Warman Restaurant',
    'Warman Kota Wisata',
    'Restoran Kota Wisata Cileungsi',
    'Warman Pelopor Sambal Korek',
    'Kuliner Kota Wisata Bogor',
    'Rice Bowl Cileungsi',
    'Sambal Korek Bogor'
  ],
  authors: [{ name: 'Warman Restaurant' }],
  creator: 'Warman Restaurant',
  publisher: 'Warman Restaurant',
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  openGraph: {
    title: 'Warman Restaurant | Kota Wisata Cileungsi',
    description: 'Sajian Indonesian comfort food, aneka lauk goreng, rice bowl, dan 4 pilihan sambal khas di Kota Wisata Cileungsi Bogor.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Warman Restaurant',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warman Restaurant | Kota Wisata Cileungsi',
    description: 'Sajian Indonesian comfort food, aneka lauk goreng, rice bowl, dan 4 pilihan sambal khas di Kota Wisata Cileungsi Bogor.',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: RESTAURANT_INFO.name,
    alternateName: RESTAURANT_INFO.brandName,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    telephone: RESTAURANT_INFO.phoneRaw,
    url: 'https://maps.app.goo.gl/CNx9b48TZ6nkC8WLA',
    hasMap: RESTAURANT_INFO.googleMapsUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${RESTAURANT_INFO.address.line1}, ${RESTAURANT_INFO.address.line2}`,
      addressLocality: RESTAURANT_INFO.address.district,
      addressRegion: RESTAURANT_INFO.address.province,
      postalCode: RESTAURANT_INFO.address.postalCode,
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.3688,
      longitude: 106.9634,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '22:00',
      },
    ],
    servesCuisine: 'Indonesian Casual Dining',
    priceRange: 'Rp25.000 - Rp50.000',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '170',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <html lang="id" className={`${jakarta.variable} ${fraunces.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAF8F5] text-[#1C1917] selection:bg-[#B83220]/15 selection:text-[#B83220] min-h-screen relative" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#1C1917] focus:text-white focus:rounded-md focus:shadow-lg focus:font-semibold focus:text-sm"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
