import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { PlanProvider } from "@/context/PlanContext";
import { ToastProvider } from "@/hooks/useToast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Toaster from "@/components/ui/Toaster";
 
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});
 
export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "A dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="flex min-h-screen flex-col bg-[#0a0a0d] text-white antialiased">
        <PlanProvider>
          <ToastProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </ToastProvider>
        </PlanProvider>
      </body>
    </html>
  );
}