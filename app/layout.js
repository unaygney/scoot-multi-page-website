import "./globals.css";
import { spaceMono, lexendDeca } from "@/lib/font";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.className} ${lexendDeca.className} antialiased scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
