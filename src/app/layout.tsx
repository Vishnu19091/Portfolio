import type { Metadata } from "next";
import { Ubuntu_Sans_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavigationBar";
import { ThemeProvider } from "@/components/theme-provider";

const ubuntu_Sans_Mono = Ubuntu_Sans_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishnu's Portfolio",
  description: "Created by Vishnu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en" suppressHydrationWarning>
      <body className={`${ubuntu_Sans_Mono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <NavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
