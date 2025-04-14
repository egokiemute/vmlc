import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "SouthCircle - CMS",
  description: "Welcome to SouthCircle.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="z-20 relative">
      <div>{children}</div>
    </main>
  );
}
