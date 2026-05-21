import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'CO2 Company — The Leading CO2 Monitor & Air Quality Company | Fast Worldwide Delivery',
  description: 'Premium CO2 monitors, air quality devices & accessories with worldwide shipping.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-4GMJ7V8N99" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4GMJ7V8N99');
        `}</Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
