import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify App Cost Analyzer — Stop Overpaying for Apps",
  description: "Analyze your Shopify app subscriptions, find redundant apps, and see the real ROI of every dollar you spend."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="74fb95a6-56fc-428d-ad22-80db99819002"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
