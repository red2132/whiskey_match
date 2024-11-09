import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./config/material-tailwind-theme-provider";
import WhiskeyDetail from "./components/WhiskeyDetail";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "whiskey match",
  description: "위스키 안주 궁합 별점 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <ThemeProvider>
        <body>
          <Header />
          <WhiskeyDetail />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
