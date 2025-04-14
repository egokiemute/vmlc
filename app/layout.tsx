import type { Metadata } from "next";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
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
  title: "Victory Mega Living Church",
  keywords: ["Victory Mega Living Church", "Church", "Christianity", "Faith"],
  description: "Victory Mega Living Church is a vibrant community of believers dedicated to spreading the message of hope and love.",
  authors: [{ name: "Victory Mega Living Church" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Victory Mega Living Church",
    description: "Victory Mega Living Church is a vibrant community of believers dedicated to spreading the message of hope and love.",
    url: "https://vmlc.org",  // Replace with your actual URL
    images: [
      {
        url: "https://vmlc.vercel.app/thumbnail.png", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Victory Mega Living Church",
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
        className={`${HelveticaNowDisplayRegular.variable} ${HelveticaNowDisplayBold.variable} antialiased`}
      >
        <Header />
        {/* <SmoothScroll> */}
          <main className="flex justify-center items-center flex-col mx-auto">
            {children}
          </main>
        {/* </SmoothScroll> */}
        <Footer />
      </body>
    </html>
  );
}
