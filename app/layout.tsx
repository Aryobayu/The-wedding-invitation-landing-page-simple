import type React from "react"
import type { Metadata } from "next"
import { ClientRoot } from "./client-root"
import "./globals.css"

export const metadata: Metadata = {
  title: "Santi & Faril - Wedding Invitation",
  description: "You are cordially invited to the wedding of Santi & Faril on October 27, 2025",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientRoot>{children}</ClientRoot>
}
