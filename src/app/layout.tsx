import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beach Pay - gerenciando suas finanças",
  description:
    "Gerenciamento de saidas Financeiras e investimentos aos atlétas do BBTC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
