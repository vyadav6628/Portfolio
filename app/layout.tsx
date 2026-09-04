import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { BackToTop } from "@/components/ui/BackToTop";
import { CursorBall } from "@/components/ui/CursorBall";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vipin-yadav-portfolio.vercel.app"),
  title: "Vipin Yadav | Full Stack .NET Software Engineer",
  description:
    "Portfolio of Vipin Yadav, a Full Stack .NET Software Engineer specializing in .NET Core, C#, SQL, Angular, Microservices, API development, and scalable enterprise applications.",
  keywords: [
    "Vipin Yadav",
    "Full Stack .NET Software Engineer",
    ".NET Core",
    "C#",
    "SQL",
    "Angular",
    "Microservices",
    "API Development",
    "Developer Portfolio",
  ],
  openGraph: {
    title: "Vipin Yadav | Full Stack .NET Software Engineer",
    description:
      "Portfolio of Vipin Yadav, a Full Stack .NET Software Engineer specializing in .NET Core, C#, SQL, Angular, Microservices, API development, and scalable enterprise applications.",
    url: "https://vipin-yadav-portfolio.vercel.app",
    siteName: "Vipin Yadav Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipin Yadav | Full Stack .NET Software Engineer",
    description:
      "Portfolio of Vipin Yadav, a Full Stack .NET Software Engineer specializing in .NET Core, C#, SQL, Angular, Microservices, API development, and scalable enterprise applications.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020817",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem('vipin-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = storedTheme ? storedTheme === 'dark' : prefersDark;
                  document.documentElement.classList.toggle('dark', isDark);
                  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                } catch (error) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              })();
            `,
          }}
        />
        {children}
        <CursorBall />
        <BackToTop />
      </body>
    </html>
  );
}
