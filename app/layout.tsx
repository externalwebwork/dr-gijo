import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rootcanal.drgijosdentalsolutions.com"),
  title: "Dental Solutions Thodupuzha | Painless Microscopic Root Canal | Dr. Gijo",
  description:
    "Best dental clinic in Thodupuzha. Painless microscopic root canal treatment by Dr. Gijo. Advanced root canal specialist, endodontist care. Book appointment today.",
  keywords: [
    "dental clinic Thodupuzha",
    "root canal Thodupuzha",
    "painless root canal Thodupuzha",
    "microscopic root canal Thodupuzha",
    "Dr. Gijo dentist",
    "Dental Solutions Thodupuzha",
    "endodontist Thodupuzha",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dental Solutions Thodupuzha | Painless Microscopic Root Canal | Dr. Gijo",
    description:
      "Best dental clinic in Thodupuzha. Painless microscopic root canal treatment and advanced dental care by Dr. Gijo. Book your appointment.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Solutions Thodupuzha | Painless Root Canal | Dr. Gijo",
    description:
      "Painless microscopic root canal treatment in Thodupuzha. Advanced dental care by Dr. Gijo. Book your appointment today.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NC75C5DZ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NC75C5DZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
