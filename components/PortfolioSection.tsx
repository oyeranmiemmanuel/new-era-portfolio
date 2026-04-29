const portfolioData = {
  branding: [
    {
      title: "Back Hoodie Mock",
      category: "Brand Design",
      image: "/images/Brands/Back Hoodie Mock 2.jpg",
    },
    {
      title: "Back Hoodie Mockup",
      category: "Brand Design",
      image: "/images/Brands/Back Hoodie Mockup.jpg",
    },
    {
      title: "Back Shirt Mock",
      category: "Brand Design",
      image: "/images/Brands/Back Shirt Mock.jpg",
    },
    {
      title: "Back Shirt Mockup",
      category: "Brand Design",
      image: "/images/Brands/Back Shirt mockup 2.jpg",
    },
    {
      title: "Black Shirt Mock",
      category: "Brand Design",
      image: "/images/Brands/Black Shirt Mock.png",
    },
    {
      title: "Cap Brand",
      category: "Brand Design",
      image: "/images/Brands/Cap brand.jpg",
    },
  ],

  flyers: [
   {
      title: "Snacks Flier",
      category: "Flier Design",
      image: "/images/Fliers/kitchen.jpg",
    },
    {
      title: "Snacks Flier",
      category: "Flier Design",
      image: "/images/Fliers/peanut.jpg",
    },
    {
      title: "Snacks Flier",
      category: "Flier Design",
      image: "/images/Fliers/peanut2.jpg",
    },
  ],

  logos: [
    {
      title: "Brand Logo Identity",
      category: "Logo Design",
      image: "/images/logos/ms.jpg",
    },
    {
      title: "Brand Logo Identity",
      category: "Logo Design",
      image: "/images/logos/ms_2.jpg",
    },
    {
      title: "Brand Logo Identity",
      category: "Logo Design",
      image: "/images/logos/r_logo.jpg",
    },
  ],

  socialMedia: [
    {
      title: "Product Campaign",
      category: "Social Design",
      image: "/images/Social/cherry.jpg",
    },
    {
      title: "Product Campaign",
      category: "Social Design",
      image: "/images/Social/sneaker2.jpg",
    },
    {
      title: "Product Campaign",
      category: "Social Design",
      image: "/images/Social/sneakers.jpg",
    },
  ],
};

function PortfolioCategory({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    category: string;
    image: string;
  }[];
}) {
  return (
    <section className="mb-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {title}
        </h2>

        <div className="w-24 h-1 bg-purple-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="group border border-purple-500/20 rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/10 to-black hover:border-purple-400 transition"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-purple-400 mb-2">
                {item.category}
              </p>

              <h3 className="text-xl font-bold mb-4">
                {item.title}
              </h3>

              <a
                href={`https://wa.me/2348153626747?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-purple-500 font-semibold hover:scale-105 transition"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PortfolioSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest font-semibold mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Creative Works
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of premium designs crafted to elevate brands,
            drive engagement, and create unforgettable first impressions.
          </p>
        </div>

        <PortfolioCategory
          title="Brand Design"
          items={portfolioData.branding}
        />

        <PortfolioCategory
          title="Flyer Design"
          items={portfolioData.flyers}
        />

        <PortfolioCategory
          title="Logo Design"
          items={portfolioData.logos}
        />

        <PortfolioCategory
          title="Social Media Design"
          items={portfolioData.socialMedia}
        />

      </div>
    </section>
  );
}