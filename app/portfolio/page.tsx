"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";


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
      title: "Brand Art",
      category: "Brand Design",
      image: "/images/Brands/Brand Art.png",
    },
    {
      title: "Cap Brand",
      category: "Brand Design",
      image: "/images/Brands/Cap brand.jpg",
    },
    {
      title: "Hoodie Brand",
      category: "Brand Design",
      image: "/images/Brands/Hoodie Brand.jpg",
    },
    {
      title: "Hoodie Mockup",
      category: "Brand Design",
      image: "/images/Brands/Hoodie Mockup.jpg",
    },
    {
      title: "Jacket Mock",
      category: "Brand Design",
      image: "/images/Brands/Jacket Mock.jpg",
    },
    {
      title: "Mona Art Design",
      category: "Brand Design",
      image: "/images/Brands/Mona Art.png",
    },
    {
      title: "T Shirt Mockup",
      category: "Brand Design",
      image: "/images/Brands/T Shirt Mockup.png",
    },
  ],

  flyers: [
    {
      title: "Church Flier",
      category: "Flier Design",
      image: "/images/Fliers/church.jpg",
    },
    {
      title: "Church Flier",
      category: "Flier Design",
      image: "/images/Fliers/church2.jpg",
    },
    {
      title: "Concert Flier",
      category: "Flier Design",
      image: "/images/Fliers/concert.jpg",
    },
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
      title: "Corporate Logo Identity",
      category: "Logo Design",
      image: "/images/Logos/bs_logo.jpg",
    },
    {
      title: "Brand Logo Identitiy",
      category: "Logo Design",
      image: "/images/Logos/bm.jpg",
    },
    {
      title: "Brand Logo Identity",
      category: "Logo Design",
      image: "/images/Logos/ms.jpg",
    },
    {
      title: "Brand Logo Identity",
      category: "Logo Design",
      image: "/images/Logos/ms_2.jpg",
    },
    {
      title: "Brand Logo Identity",
      category: "Logo Design",
      image: "/images/Logos/r_logo.jpg",
    },
    {
      title: "Corporate Logo Identity",
      category: "Logo Design",
      image: "/images/Logos/yn_logo.jpg",
    },
  ],

  social: [
    {
      title: "Social Design",
      category: "Social Design",
      image: "/images/Social/birthday.jpg",
    },
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
    {
      title: "Product Campaign",
      category: "Social Design",
      image: "/images/Social/sobo1.jpg",
    },
    {
      title: "Product Campaign",
      category: "Social Design",
      image: "/images/Social/sobo2.jpg",
    },
    {
      title: "Product Campaign",
      category: "Social Design",
      image: "/images/Social/soda (2).jpg",
    },
    {
      title: "Product Campaign",
      category: "Social Design",
      image: "/images/Social/soda.jpg",
    },
  ],
};

const tabs = [
  { key: "branding", label: "Brand Design" },
  { key: "flyers", label: "Flyers" },
  { key: "logos", label: "Logos" },
  { key: "social", label: "Social Media" },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("branding");

  const data = portfolioData[activeTab as keyof typeof portfolioData];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
        <Navbar />
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          My <span className="text-purple-400">Portfolio</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my creative works across different categories of design.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-3 bg-white/5 border border-purple-500/20 p-2 rounded-2xl backdrop-blur">

          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
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

        {data.map((item, index) => (
          <div
            key={index}
            className="group border border-purple-500/20 rounded-2xl overflow-hidden bg-black shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition hover:-translate-y-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-5">
              <h3 className="font-semibold mb-4">{item.title}</h3>

              <a
                href={`https://wa.me/2348153626747?text=Hello%20I%20want%20${encodeURIComponent(
                  item.title
                )}`}
                target="_blank"
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