import { defaultWhatsappMessage, whatsappLink } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center border border-purple-500/20 rounded-3xl p-12 bg-gradient-to-br from-purple-900/10 to-black">

        <p className="text-purple-400 uppercase tracking-widest font-semibold mb-4">
          Let’s Build Your Brand
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Take Your Brand to the Next Level?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          From premium flyers to complete brand identity systems,
          New Era helps businesses create visuals that attract,
          convert, and leave lasting impressions.
        </p>

        <a
          href={whatsappLink(defaultWhatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-xl bg-purple-500 font-bold text-white hover:scale-105 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
        >
          Start Your Project
        </a>

      </div>
    </section>
  );
}