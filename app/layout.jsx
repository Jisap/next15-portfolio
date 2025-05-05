import { Sometype_Mono } from "next/font/google";
import "./globals.css";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Next.js",
  description: "With Tailwind CSS V4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
