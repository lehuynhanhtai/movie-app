import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layouts/header";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/layouts/footer";
import axios from "../axios";

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
  title: "Chill Phim",
  description: "Xem phim miễn phí cùng Myth",
};

const fetchCategories = async () => {
  const response = await axios.get("/api/the-loai");
  const data = await response.data;
  return data;
};

const fetchCountries = async () => {
  const response = await axios.get("/api/quoc-gia");
  const data = await response.data;
  return data;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await fetchCategories();
  const countries = await fetchCountries();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header categories={categories} countries={countries} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
