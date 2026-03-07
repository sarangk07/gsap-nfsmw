import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NFS MW 05",
  description: "Fan Page",
  icons: {
    icon: '/nfsmwfav.jpg',
    shortcut: '/nfsmwfav.jpg',
    apple: '/nfsmwfav.jpg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/nfsmwfav.jpg',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
