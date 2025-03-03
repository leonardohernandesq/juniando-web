import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/components/header";
import Footer from "../components/footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Juniando",
  description:
    "Ajudamos o Dev Jr a conseguir sua primeira vaga no mercado de trabalho, com dicas e anúncios de vagas para você alavangar sua carreira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} bg-light`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
