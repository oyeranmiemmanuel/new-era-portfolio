export default function ServicesSection() {
  const services = [
    {
      title: "Logo Design",
      description:
        "Memorable and premium logo identities built to make brands instantly recognizable.",
    },
    {
      title: "Flyer Design",
      description:
        "Professional flyers for events, promotions, businesses, and high-converting campaigns.",
    },
    {
      title: "Social Media Design",
      description:
        "Modern social creatives designed to boost engagement and strengthen brand presence.",
    },
    {
      title: "Brand Identity",
      description:
        "Complete branding systems including colors, typography, style direction, and consistency.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest font-semibold mb-3">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Creative Solutions
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We help businesses build strong visual identities that attract
            attention, create trust, and drive real growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-purple-500/20 rounded-2xl p-8 bg-gradient-to-b from-purple-900/10 to-black hover:border-purple-400 transition"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-300">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}