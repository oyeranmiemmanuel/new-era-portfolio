export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-purple-400 font-semibold mb-4 uppercase tracking-widest">
            Premium Branding Studio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We Create
            <span className="text-purple-400"> Powerful </span>
            Brand Graphics
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            New Era helps brands stand out with premium graphic design,
            flyer design, logos, branding, and digital creatives.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/portfolio"
              className="px-8 py-4 rounded-xl bg-purple-500 font-semibold"
            >
              View Portfolio
            </a>

            <a
              href="https://wa.me/2348153626747"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-purple-400 text-purple-300"
            >
              WhatsApp Me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-purple-500/20 p-10">
          <h2 className="text-3xl font-bold mb-4">
            Design That Converts
          </h2>

          <p className="text-gray-300">
            More than visuals — we create first impressions that
            build trust and grow your business.
          </p>
        </div>

      </div>
    </section>
  );
}