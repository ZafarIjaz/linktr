import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'Fatih Foundation | Linktree',
  description: 'Connect with Fatih Foundation - A Pakistani NGO serving to alleviate the sufferings of vulnerable people.',
  keywords: 'Fatih Foundation, NGO, Pakistan, Charity, Donation, Social Work',
  openGraph: {
    title: 'Fatih Foundation | Linktree',
    description: 'Connect with Fatih Foundation - A Pakistani NGO serving to alleviate the sufferings of vulnerable people.',
    type: 'website',
    url: 'https://fatihfoundation.com',
    images: [
      {
        url: '/image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fatih Foundation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatih Foundation | Linktree',
    description: 'Connect with Fatih Foundation - A Pakistani NGO serving to alleviate the sufferings of vulnerable people.',
    images: ['/image.jpeg']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
