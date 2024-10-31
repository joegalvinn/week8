import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { Roboto_Slab } from "next/font/google";

export const metadata = {
  title: "Next.js Site",
  description: "A simple site built with Next.js",
  openGraph: {
    title: "Next.js Site",
    description: "A simple site built with Next.js",
    type: "website",
    image:
      "https://news.cgtn.com/news/7a596a4e7a637a4e7a63544f34517a4d32457a4e31457a6333566d54/img/d0829f3cf1ff4006b36a2996eb0475d2/d0829f3cf1ff4006b36a2996eb0475d2.jpg",
  },
};

const roboto = Roboto_Slab({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={roboto.className}
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
