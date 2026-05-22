export default function HeroSection() {
  return (
<section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-6">

  {/* Background Image Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center 
        blur-[2px] 
        scale-110
        md:scale-105
        lg:scale-100
        opacity-70
    "
    style={{ backgroundImage: "url('/images/globe.jfif')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Optional Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <div>
      <p className="text-purple-400 font-semibold mb-4 uppercase tracking-widest">
        Premium Branding Studio
      </p>

      <h1 className="text-yellow-100 text-5xl md:text-7xl font-bold leading-tight mb-6">
        We Create
        <span className="text-white"> Powerful </span>
        Brand Graphics
      </h1>

      <p className="text-lg mb-8 bg-black/40 backdrop-blur-md rounded-xl p-5 border border-white/10">
        New Era helps brands stand out with premium graphic design,
        flyer design, logos, branding, and digital creatives.
      </p>

      <div className="flex gap-4 flex-wrap">
        <a
          href="/portfolio"
          className="px-8 py-4 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-semibold"
        >
          View Portfolio
        </a>

        <a
          href="https://wa.me/2348153626747"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl border border-purple-400 text-purple-300 hover:bg-purple-500/10 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>

    <div className="rounded-3xl border border-purple-500/20 p-10 bg-black/40 backdrop-blur-md">
      <h2 className="text-3xl font-bold mb-4">
        Design That Converts
      </h2>

      <p className="text-gray-300 leading-relaxed">
        More than visuals. We create first impressions that
        build trust, attract attention, and grow your business.
      </p>
    </div>

  </div>
</section>
  );
}