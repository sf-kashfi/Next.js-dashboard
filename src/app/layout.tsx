import "./globals.css";
import ThemeProvider from "@/theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My Shop | Next.js E-commerce",
    template: "%s | My Shop",
  },
  description: "A demo Next.js shop with Material UI, products list, and product management.",
  keywords: ["Shop", "React", "Material UI", "Products"],
  authors: [{ name: "Fatemh Kashfi" }],
  creator: "Fatemeh Kashfi",

  twitter: {
    card: "summary_large_image",
    title: "My Shop - E-commerce",
    description: "Next.js 14 demo shop",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
