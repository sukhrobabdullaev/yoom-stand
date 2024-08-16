import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import "@stream-io/video-react-sdk/dist/css/styles.css";
// import { uzUZ } from '@clerk/localizations'

const localization = {
  socialButtonsBlockButton: "{{provider|titleize}} orqali davom etish",
  userButton: {
    action__addAccount: "Hisob qo'shish",
    action__manageAccount: "Hisobni boshqarish",
    action__signOut: "Chiqish",
    action__signOutAll: "barch hisobdan chiqish",
    actionLink: "Ro'yxatdan o'tish",
  },
  signIn: {
    start: {
      title: "Kirish",
      subtitle: '"VIDEO CHAT"ni davom ettirish uchun',
      actionText: "Hisobingiz yo'qmi?",
      actionLink: "Ro'yxatdan o'tish",
    },
  },
  signUp: {
    start: {
      title: "Hisob yarating",
      subtitle: '"VIDEO CHAT"ni davom ettirish uchun',
      actionText: "Hisobingiz bormi?",
      actionLink: "Kirish",
    },
  },
  formButtonPrimary: 'Email orqali kirish',
  formFieldLabel__password: 'Parol',
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOOM",
  description: "VIDEO CALLING APP",
  icons: {
    icon: "/icons/logo.svg"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={localization}
      appearance={{
        layout: {
          logoImageUrl: "/icons/yoom-logo.svg",
          socialButtonsVariant: 'iconButton'
        },
        variables: {
          colorText: "white",
          colorPrimary: "#0E78F9",
          colorBackground: "#364799",
          colorInputBackground: "#252a41",
          colorInputText: "white"
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-2`}>{children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
