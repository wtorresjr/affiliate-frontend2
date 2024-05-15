import "@/styles/tailwind.css";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "../styles/font.css";
import "../styles/index.css";
import "../styles/tailwind.css";
import "../styles/react-tabs.css";

function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
export default RootLayout;
