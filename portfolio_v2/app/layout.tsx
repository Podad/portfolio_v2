import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Cloud & DevOps Engineer",
  description: "Portfolio professionnel d'un Cloud & DevOps Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${michroma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
