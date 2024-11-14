import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FilteredCarsProvider } from "@/providers/cars";
import { fetchBlackList } from "@/helpers/fetchBlackList";
import { Head } from "@/components/head/Head";
import { Sidebar } from "@/components/sidebar/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Need front speed",
  description: "RSC to Need front speed",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const list = await fetchBlackList();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <FilteredCarsProvider data={list}>
          <div className="car-sales-page">
            <Head />
            <div className="content">
              <Sidebar />
              <div className="content_body">{children}</div>
            </div>
          </div>
        </FilteredCarsProvider>
      </body>
    </html>
  );
}
