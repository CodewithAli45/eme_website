import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PWARegister from "../components/PWARegister";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Electro-Mech Engineers | EPC & Turnkey Solutions",
  description: "Electro-Mech Engineers (EME) is a leading Engineering, Procurement, and Construction (EPC) company delivering innovative, cost-effective turnkey solutions for steel, power, infrastructure, and oil & gas sectors.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Electro-Mech Engineers",
  },
};

export const viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-amber-500 selection:text-slate-900">
        <PWARegister />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
