import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "New Era is a premium branding and creative design studio helping businesses stand out through strategic visual identity and modern brand experiences.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}