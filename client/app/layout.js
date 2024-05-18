import './globals.css'
import { GoogleAnalytics } from "../components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL('http://www.think.archive'),
  title: 'think archive',
  description: 'Stream of my favorite papers and links.',
  openGraph: {
    type: 'website',
    url: 'https://www.think.archive',
    site_name: 'think archive',
    images: [
      {
        url: 'https://www.think.archive/thumbnail.png',
        alt: 'think.archive homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ishan0102',
    title: 'think archive',
    description: 'Stream of my favorite papers and links',
    image: 'https://www.think.archive/thumbnail.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@ishan0102" />
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
