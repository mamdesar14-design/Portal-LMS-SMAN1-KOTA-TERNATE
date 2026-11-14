import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "EDUSITE SMANSA",
  description: "EDUSITE SMANSA — LMS mata pelajaran kelas X, XI, dan XII",
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
