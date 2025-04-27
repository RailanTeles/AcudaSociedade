import type { Metadata } from "next";
import "./globals.css";
import AuthContext from "./Context/AuthContext";

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
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
