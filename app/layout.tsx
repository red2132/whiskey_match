import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../config/material-tailwind-theme-provider";
import ReactQueryClientProvider from "@/config/ReactQueryClientProvider";

export const metadata: Metadata = {
  title: "whiskey match",
  description: "whiskey match 위스키 상세 페이지",
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
        <ReactQueryClientProvider>
          <body>{children}</body>
        </ReactQueryClientProvider>
      </ThemeProvider>
    </html>
  );
}
