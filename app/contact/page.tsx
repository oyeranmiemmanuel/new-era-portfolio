import Navbar from "@/components/Navbar";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

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
                href="https://wa.me/2348153626747?text=Hello%20I%20want%20to%20work%20with%20New%20Era"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-purple-500 font-bold text-white hover:scale-105 transition"
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

            <div className="border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400 transition">
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-purple-400" />
                <div>
                  <h3 className="font-bold text-lg">WhatsApp</h3>
                  <p className="text-gray-400">
                    +234 815 362 6747
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400 transition">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-purple-400" />
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-400">
                    oyeranmie@email.com
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400 transition">
              <div className="flex items-center gap-4">
                <FaInstagram className="text-2xl text-purple-400" />
                <div>
                  <h3 className="font-bold text-lg">Instagram</h3>
                  <p className="text-gray-400">
                    @newera.designs
                  </p>
                </div>
              </div>
            </div>

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