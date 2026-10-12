"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { designCategories, designWorks } from "@/data/design-works";
import type { DesignCategoryKey } from "@/data/design-works";
import { whatsappLink } from "@/lib/site";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<DesignCategoryKey>("branding");

  const data = designWorks[activeTab];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <Navbar />

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-purple-400">Portfolio</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our creative works across different categories of design.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-3 bg-white/5 border border-purple-500/20 p-2 rounded-2xl backdrop-blur">
          {designCategories.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              aria-pressed={activeTab === tab.key}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300 ${
                activeTab === tab.key
                  ? "bg-purple-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.image}
            className="group border border-purple-500/20 rounded-2xl overflow-hidden bg-black shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition hover:-translate-y-2"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold mb-4">{item.title}</h3>

              <a
                href={whatsappLink(`Hello I want ${item.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-purple-500 rounded-lg text-sm font-semibold hover:scale-105 transition"
              >
                Request This
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}