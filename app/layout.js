'use client';

import { SessionProvider } from "next-auth/react";
import Navbar from '../components/Navbar'; 

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
