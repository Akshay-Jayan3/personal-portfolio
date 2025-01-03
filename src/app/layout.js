import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import CustomCursor from "@/components/cursor";
import Logo from "@/components/logo";

const jet = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Akshay Jayan",
  description: "Personal Portfolio of akshay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jet.className}><main className="h-dvh"><Logo/><Navbar /> <CustomCursor />{children} <Footer /></main></body>
    </html>
  );
}
