import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flashcards App",
  description: "A flashcards application with authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className="dark">
        <body className={`${poppins.variable} antialiased`}>
          <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-14 sm:h-16">
                {/* Logo Section */}
                <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 sm:p-2 rounded-lg">
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Flashcards
                    </h1>
                    <span className="hidden sm:block text-xs text-gray-400 -mt-1">AI-Powered Learning</span>
                  </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="relative px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="relative px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white rounded-lg overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-105"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                        <span className="relative flex items-center gap-1 sm:gap-2">
                          <span className="hidden xs:inline">Sign Up</span>
                          <span className="xs:hidden">Sign Up</span>
                          <svg 
                            className="hidden sm:block w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M13 7l5 5m0 0l-5 5m5-5H6" 
                            />
                          </svg>
                        </span>
                      </button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm opacity-50"></div>
                      <div className="relative">
                        <UserButton 
                          appearance={{
                            elements: {
                              avatarBox: "w-8 h-8 sm:w-9 sm:h-9 ring-2 ring-white/20 hover:ring-white/40 transition-all duration-200"
                            }
                          }}
                        />
                      </div>
                    </div>
                  </SignedIn>
                </div>
              </div>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}