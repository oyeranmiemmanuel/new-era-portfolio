import Navbar from "@/components/Navbar";


export default function AboutPage() {
  return (
  
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <Navbar />
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-widest font-semibold mb-4">
            About New Era
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building Brands Through
            <span className="text-purple-400"> Powerful Design</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            New Era is a premium branding and creative design studio focused on
            helping businesses stand out through strategic visual identity,
            high-converting graphics, and modern brand experiences that leave
            lasting impressions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="border border-purple-500/20 rounded-3xl p-10 bg-gradient-to-br from-purple-900/10 to-black">
            <h2 className="text-3xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We specialize in graphic design, flyer creation, logo design,
              social media creatives, branding systems, and premium visual
              identity development for businesses ready to grow.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Every project is built with strategy, creativity, and purpose —
              ensuring our clients receive not just beautiful visuals, but
              designs that convert attention into business results.
            </p>
          </div>

          <div className="space-y-8">

            <div className="border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-3">
                Our Mission
              </h3>

              <p className="text-gray-300">
                To help brands create unforgettable first impressions through
                premium design solutions that build trust and drive growth.
              </p>
            </div>

            <div className="border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-3">
                Our Vision
              </h3>

              <p className="text-gray-300">
                To become a trusted creative partner for businesses seeking
                modern branding that stands above competition.
              </p>
            </div>

            <div className="border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-3">
                Why Clients Choose Us
              </h3>

              <p className="text-gray-300">
                Premium quality, fast delivery, strategic creativity, and
                design solutions focused on real business impact.
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}