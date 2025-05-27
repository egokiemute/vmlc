import type { Metadata } from "next";
import Header from "@/components/Header";
import localFont from "next/font/local";
import "./globals.css";


const HelveticaNowDisplayRegular = localFont({
  src: "../public/fonts/HelveticaNowDisplay-Regular.woff",
  variable: "--font-helveticaNowDisplayRegular",
});

const HelveticaNowDisplayBold = localFont({
  src: "../public/fonts/HelveticaNowDisplay-Bold.woff",
  variable: "--font-helveticaNowDisplayBold",
});

// app/layout.js or app/page.js
export const metadata: Metadata = {
  title: "Omega Living Bridge Tabernacle",
  keywords: ["Omega Living Bridge Tabernacle", "Church", "Christianity", "Faith"],
  description: "Omega Living Bridge Tabernacle is a vibrant community of believers dedicated to spreading the message of hope and love.",
  authors: [{ name: "Omega Living Bridge Tabernacle" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Omega Living Bridge Tabernacle",
    description: "Omega Living Bridge Tabernacle is a vibrant community of believers dedicated to spreading the message of hope and love.",
    url: "https://www.omegalivingbride.com",  // Replace with your actual URL
    images: [
      {
        url: "https://www.omegalivingbride.com/favicon.ico", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Omega Living Bridge Tabernacle",
      },
    ],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${HelveticaNowDisplayRegular.variable} ${HelveticaNowDisplayBold.variable} antialiased bg-[#f7f0e8]`}
      >
        <Header />
        {/* <SmoothScroll> */}
          <main className="flex justify-center items-center flex-col mx-auto">
            {children}
          </main>
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
