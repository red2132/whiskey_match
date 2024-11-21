import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "whiskey match",
  description: "위스키 안주 페어링 별점 사이트",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
