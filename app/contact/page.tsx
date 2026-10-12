import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import {
  defaultWhatsappMessage,
  instagramUrl,
  siteConfig,
  whatsappLink,
} from "@/lib/site";

function ContactCard({
  icon,
  title,
  value,
  href,
  external = false,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
    >
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-400">{value}</p>
        </div>
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <Navbar />
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-widest font-semibold mb-4">
            Contact New Era
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let’s Build Something
            <span className="text-purple-400"> Amazing</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your brand with premium design solutions?
            Reach out today and let’s create visuals that convert.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="border border-purple-500/20 rounded-3xl p-8 bg-gradient-to-br from-purple-900/10 to-black">
              <h2 className="text-3xl font-bold mb-4">
                Start Your Project
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Whether you need flyer design, logo creation,
                social media creatives, or complete brand identity,
                New Era is ready to deliver premium results.
              </p>

              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-purple-500 font-bold text-white hover:scale-105 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>

            <div className="border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">
                Response Time
              </h3>

              <p className="text-gray-300">
                Fast replies within a short time. We prioritize
                client communication and project clarity.
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            <ContactCard
              icon={<FaWhatsapp className="text-2xl text-purple-400" />}
              title="WhatsApp"
              value={siteConfig.phoneDisplay}
              href={whatsappLink()}
              external
            />

            {siteConfig.email && (
              <ContactCard
                icon={<FaEnvelope className="text-2xl text-purple-400" />}
                title="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
            )}

            {siteConfig.instagramHandle && (
              <ContactCard
                icon={<FaInstagram className="text-2xl text-purple-400" />}
                title="Instagram"
                value={`@${siteConfig.instagramHandle}`}
                href={instagramUrl()}
                external
              />
            )}

            <div className="border border-purple-500/20 rounded-2xl p-8 bg-gradient-to-br from-purple-900/10 to-black">
              <h3 className="text-2xl font-bold mb-4">
                Premium Creative Support
              </h3>

              <p className="text-gray-300 leading-relaxed">
                We don’t just create graphics — we help brands
                communicate value, build trust, and grow through
                strategic design excellence.
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}