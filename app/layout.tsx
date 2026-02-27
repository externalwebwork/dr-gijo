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
  metadataBase: new URL("https://spinecare.kooplicatayurveda"),
  title: "Ayurvedic Clinic in Kottayam | Spine Care & Back Pain",
  description:
    "Kerala's trusted Ayurvedic spine clinic in Kottayam. Non-surgical back pain relief with Panchakarma, Nadi Pariksha, and personalized Ayurvedic treatments by BAMS/MD doctors.",
  keywords: [
    "Ayurvedic clinic Kottayam",
    "Ayurvedic spine care",
    "back pain treatment Kottayam",
    "Panchakarma Kottayam",
    "Ayurvedic back pain relief",
    "osteoporosis ayurveda",
    "herniated disc ayurveda",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ayurvedic Spine Care in Kottayam | Kooplicat Ayurveda Hospital",
    description:
      "Specialized Ayurvedic treatment for chronic back pain, disc problems, and spinal osteoarthritis in Kottayam with authentic Kerala Panchakarma.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Clinic in Kottayam | Spine Care & Back Pain",
    description:
      "Non-surgical Ayurvedic spine care in Kottayam with Panchakarma, Nadi Pariksha, and personalized back pain treatment plans.",
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
