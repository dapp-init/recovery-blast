
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";


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
        <Footer />
      </body>
    </html>
  );
}
