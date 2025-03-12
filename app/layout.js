import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}