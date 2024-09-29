import Link from "next/link";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XArcangelll Home Page",
  description: "Generated with love by Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="ml-2">
          <Link href={"/"} className="mr-2">
            Home
          </Link>
          <Link href={"/about"} className="mr-2">
            About
          </Link>
          <Link href={"/contact"} className="mr-2">
            Contact
          </Link>
          <Link href={"/pricing"} className="mr-2">
            Pricing
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
