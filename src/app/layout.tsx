import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "LMS SMA Negeri 1 Kota Ternate",
  description: "Portal LMS mata pelajaran kelas X, XI, dan XII",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
