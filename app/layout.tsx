import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
 })

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head />
         <body
            className={cn(
               "min-h-screen bg-background antialiased",
               inter.className
            )}
         >
            <ThemeProvider attribute="class" defaultTheme="system">
               <Header/>
               {children}
               <Toaster/>
               <Footer/>
            </ThemeProvider>
         </body>
      </html>
   );
}
