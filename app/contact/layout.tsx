import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact New Era to start a branding, design or creative project. Chat on WhatsApp or reach out by email or Instagram.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}