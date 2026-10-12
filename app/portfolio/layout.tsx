import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore New Era's creative works across brand design, flyers, logos and social media design.",
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}