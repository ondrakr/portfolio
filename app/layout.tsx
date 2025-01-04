import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Ondřej Krejčí",
  description: "Fullstack developer & designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
