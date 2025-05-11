import type { Metadata } from "next";
import { Poppins, Barlow, Just_Another_Hand } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css";
import "./globals.css";
import "./responsive.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--heading-text', 
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--body-text',
});

const justAnotherHand = Just_Another_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--cursive',
});

export const metadata: Metadata = {
  title: "Philly City Tours",
  description: "Philly City Tours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body className={`${poppins.variable} ${barlow.variable} ${justAnotherHand.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
