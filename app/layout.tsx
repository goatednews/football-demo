// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientProvider from './provider';
import Sidebar from "@/app/_component/sidebar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} min-h-screen h-full`}>
    <ClientProvider>
      <div className="flex min-h-screen h-full">
        {/*<Sidebar />*/}
        <main className="flex-1 h-full">
          {children}
        </main>
      </div>
    </ClientProvider>
    </body>
    </html>
  );
}
