import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smiledental.com"),
  title: "Dental Clinic in Kottayam | Family Dental Care | Smile Dental",
  description:
    "Trusted family dental clinic in Kottayam. Quality dental care including cleanings, fillings, root canal, teeth whitening, and more. Book your appointment today.",
  keywords: [
    "dental clinic Kottayam",
    "family dentist Kottayam",
    "dental care Kottayam",
    "teeth cleaning Kottayam",
    "root canal Kottayam",
    "teeth whitening Kottayam",
    "dental fillings Kottayam",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smile Dental | Family Dental Clinic in Kottayam",
    description:
      "Quality dental care for the whole family. Cleanings, fillings, root canal, teeth whitening, and comprehensive dental services in Kottayam.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic in Kottayam | Smile Dental",
    description:
      "Trusted family dental clinic offering comprehensive care including cleanings, fillings, root canal, and teeth whitening.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
