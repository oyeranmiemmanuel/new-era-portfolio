// =====================================================================
//  DESIGN WORKS — the single source for your branding, flyer, logo and
//  social media designs. Used by the home page and the /portfolio page.
//
//  HOW TO ADD A DESIGN
//  1. Put the image in the matching folder under public/images/
//     (Brands, Fliers, Logos or Social). Filenames without spaces are
//     safest.
//  2. Add one entry to the matching list below.
//  3. Add  featured: true  if you want it on the home page (currently
//     only the "branding" category is shown on the home page).
// =====================================================================

export type DesignCategoryKey = "branding" | "flyers" | "logos" | "social";

export interface DesignWork {
  title: string;
  category: string;
  image: string;
  featured?: boolean;
}

// Tab labels on the /portfolio page, in display order.
export const designCategories: { key: DesignCategoryKey; label: string }[] = [
  { key: "branding", label: "Brand Design" },
  { key: "flyers", label: "Flyers" },
  { key: "logos", label: "Logos" },
  { key: "social", label: "Social Media" },
];

export const designWorks: Record<DesignCategoryKey, DesignWork[]> = {
  branding: [
    {
      title: "Back Hoodie Mock",
      category: "Brand Design",
      image: "/images/Brands/Back Hoodie Mock 2.jpg",
      featured: true,
    },
    {
      title: "Back Hoodie Mockup",
      category: "Brand Design",
      image: "/images/Brands/Back Hoodie Mockup.jpg",
      featured: true,
    },
    {
      title: "Back Shirt Mock",
      category: "Brand Design",
      image: "/images/Brands/Back Shirt Mock.jpg",
      featured: true,
    },
    {
      title: "Back Shirt Mockup",
      category: "Brand Design",
      image: "/images/Brands/Back Shirt mockup 2.jpg",
      featured: true,
    },
    {
      title: "Black Shirt Mock",
      category: "Brand Design",
      image: "/images/Brands/Black Shirt Mock.png",
      featured: true,
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
      featured: true,
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
      title: "Brand Logo Identity",
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

/** Works marked `featured: true` in a category, in their listed order. */
export function getFeaturedDesignWorks(key: DesignCategoryKey): DesignWork[] {
  return designWorks[key].filter((work) => work.featured);
}