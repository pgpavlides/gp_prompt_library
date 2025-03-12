import "./globals.css";

// Add metadata
export const metadata = {
  title: "Prompt Library - Collection of Useful Prompts",
  description: "A curated collection of prompts for various purposes including writing, business, programming, education, and personal growth.",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/prompt-library.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="AI Prompts" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}