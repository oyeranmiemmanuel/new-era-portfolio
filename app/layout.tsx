import "./globals.css";

export const metadata = {
  title: "New Era",
  description: "Premium Branding Studio",

  openGraph: {
    title: "New Era",
    description: "Premium Branding Studio",
    url: "https://derabrand.online",
    siteName: "New Era",
    images: [
      {
        url: "/NE-logo.jpg",
        width: 1200,
        height: 630,
        alt: "New Era Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "New Era",
    description: "Premium Branding Studio",
    images: ["/og-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative overflow-x-hidden">

        {/* Background Glow Effects */}
        <div className="fixed inset-0 -z-10">

          {/* Top Left Glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[140px] rounded-full" />

          {/* Top Right Glow */}
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[140px] rounded-full" />

          {/* Center Glow */}
          <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full" />

          {/* Bottom Glow */}
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[400px] bg-purple-800/10 blur-[160px] rounded-full" />

        </div>

        {children}
      </body>
    </html>
  );
}