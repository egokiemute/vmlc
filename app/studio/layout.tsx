import Footer from "@/components/Footer";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Omega Living Bride Tabernacle - CMS",
  description: "Welcome to your Dashboard.",
  icons: {
    icon: "/logo.png",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="z-20 relative mb-32 mt-12">
        <div>{children}</div>
      </main>
      <Footer showFooter={false} />
    </>
  );
}
