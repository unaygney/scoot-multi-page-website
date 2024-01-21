import "./globals.css";
import { spaceMono, lexendDeca } from "@/lib/font";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.className} ${lexendDeca.className} antialiased scroll-smooth`}
    >
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
