import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import { Toaster } from "@/components/ui/sonner"
import Aside from '@/components/partials/Aside';

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
 })

export default async function RootLayout({
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
               <main className='flex justify-stretch'>
                  <div className='basis-1/12 bg-red-2001'/>
                  <div className='basis-auto bg-yellow-1001'><Aside/></div>
                  <div className='basis-9/12 bg-blue-3001'>{children}</div>          
                  <div className='basis-1/12 bg-blue-1001'/>
               </main>
               <Toaster richColors  expand={false} closeButton />
               <Footer/>
            </ThemeProvider>
         </body>
      </html>
   );
}
