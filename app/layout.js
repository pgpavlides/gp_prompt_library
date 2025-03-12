import { Varela } from "next/font/google";
import "./globals.css";

const varela = Varela({
  variable: "--font-varela",
  subsets: ["latin"],
  display: "swap",
  weight: "400", // Varela only comes in regular weight (400)
});

export const metadata = {
  title: "Prompt Library - Collection of Useful Prompts",
  description: "A curated collection of prompts for various purposes including writing, business, programming, education, and personal growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/prompt-library.svg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${varela.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}