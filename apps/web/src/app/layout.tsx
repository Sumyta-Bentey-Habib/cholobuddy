import type { Metadata } from "next";
import { Inter, Playfair_Display, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import I18nProvider from "@/components/I18nProvider";
import { ToastProvider } from "@/context/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "CholoBuddy - Discover the Wild Beauty of Bangladesh",
  description: "Curating moments of discovery and quiet luxury across Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${hindSiliguri.variable} light`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <I18nProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </I18nProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
