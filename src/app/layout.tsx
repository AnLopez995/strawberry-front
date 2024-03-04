import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StrawBery Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="text-white p-4 bg-bg-primary">
            <nav>
              <div className="flex justify-around">
              <Link href='/home'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 h-6 text-blue-500 sm:h-9">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </Link>
                <ul className="flex">
                <Link href="/home" className="hover:underline">
                  <li aria-current="page">
                  <button type="button" className="rounde mr-3 hidden bg-bg-primary py-1.5 px-6 text-center text-sm font-medium
                   text-white hover:bg-bg-secondary hover:text-bg-primary focus:outline-none focus:ring-4 focus:ring-white md:mr-0 md:inline-block 
                   rounded-lg">Home</button>
                  </li>
                </Link>
                <Link href="/products" className="hover:underline">
                <li aria-current="page">
                  <button type="button" className="rounde mr-3 hidden bg-bg-primary py-1.5 px-6 text-center text-sm font-medium
                   text-white hover:bg-bg-secondary hover:text-bg-primary focus:outline-none focus:ring-4 focus:ring-white md:mr-0 md:inline-block 
                   rounded-lg">Products</button>
                  </li>
                </Link>
                <Link href="/about" className="hover:underline">
                <li aria-current="page">
                  <button type="button" className="rounde mr-3 hidden bg-bg-primary py-1.5 px-6 text-center text-sm font-medium
                   text-white hover:bg-bg-secondary hover:text-bg-primary focus:outline-none focus:ring-4 focus:ring-white md:mr-0 md:inline-block 
                   rounded-lg">About</button>
                  </li>
                </Link>
                </ul>
                <Link href='/login'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 h-6 text-blue-500 sm:h-9">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </Link>
              </div>
            </nav>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-3">
          <p className="text-center">Todos los derechos reservados</p>
        </footer>
      </body>
    </html>
  );
}
