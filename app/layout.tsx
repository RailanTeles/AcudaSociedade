import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acuda Sociedade",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/Images/AS-logo.png" type="image/png" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
