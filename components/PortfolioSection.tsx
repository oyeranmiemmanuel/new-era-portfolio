import Image from "next/image";
import { getFeaturedDesignWorks } from "@/data/design-works";
import type { DesignWork } from "@/data/design-works";
import { whatsappLink } from "@/lib/site";

function PortfolioCategory({
  title,
  items,
}: {
  title: string;
  items: DesignWork[];
}) {
  return (
    <section className="mb-5">
      <div className="mb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {title}
        </h2>

        <div className="w-24 h-1 bg-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.image}
            className="group border border-purple-500/20 rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/10 to-black hover:border-purple-400 transition"
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-purple-400 mb-2">{item.category}</p>

              <h3 className="text-xl font-bold mb-4">{item.title}</h3>

              <a
                href={whatsappLink(`Hello I am interested in ${item.title}`)}
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
    <section className="bg-black text-white py-24 px-6 sm:flex">
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
          items={getFeaturedDesignWorks("branding")}
        />

        {/*
          To show another category here, mark some of its works with
          featured: true in data/design-works.ts, then add:

          <PortfolioCategory
            title="Flyer Design"
            items={getFeaturedDesignWorks("flyers")}
          />
        */}
      </div>
    </section>
  );
}