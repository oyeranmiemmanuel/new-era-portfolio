export default function ServicesSection() {
  const services = [
    {
      title: "AI & Website Development",
      description:
        "Modern AI-powered websites and intelligent web applications built for performance, automation, and seamless user experiences.",
    },
    {
      title: "Flyer Design",
      description:
        "Professional flyers for events, promotions, businesses, and high-converting campaigns.",
    },
    {
      title: "AI Chatbots & Automation",
      description:
        "Smart AI chatbots and automated systems designed to streamline workflows, improve customer engagement, and boost business efficiency.",
    },
    {
      title: "Brand Identity",
      description:
        "Complete branding systems including logos, colors, typography, style direction, and consistency.",
    },
  ];

  return (
    <section className="bg-transparent text-white py-24 px-6">
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