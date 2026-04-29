export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael A.",
      role: "Business Owner",
      text: "New Era transformed our brand identity completely. The design quality was premium and highly professional.",
    },
    {
      name: "Sarah K.",
      role: "Startup Founder",
      text: "Their flyer and social media designs increased our engagement massively. Excellent delivery and creativity.",
    },
    {
      name: "Daniel T.",
      role: "Brand Manager",
      text: "Clean, modern, and powerful visuals. Working with New Era was one of our best branding decisions.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest font-semibold mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Clients Say
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses and brands looking for premium design that delivers results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border border-purple-500/20 rounded-2xl p-8 bg-gradient-to-b from-purple-900/10 to-black"
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                “{item.text}”
              </p>

              <h3 className="font-bold text-lg text-purple-300">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}