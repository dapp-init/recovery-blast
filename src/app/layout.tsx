import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Recovery Blast",
  description: "The Best and Only Funds recovery agency in the world",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
