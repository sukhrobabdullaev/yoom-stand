import { StreamVideoProvider } from '@/providers/stream-client-provider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "YOOM",
    description: "VIDEO CALLING APP",
    icons: {
      icon: "/icons/logo.svg"
    }
  };

  
const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout
