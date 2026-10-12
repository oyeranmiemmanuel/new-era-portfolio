// Central site settings. Change a value here and every component that
// imports it updates automatically.

interface SiteConfig {
  name: string;
  url: string;
  /** WhatsApp number in international format, digits only. */
  whatsappNumber: string;
  /** The same number as you want it shown on the Contact page. */
  phoneDisplay: string;
  /** Set to "" to hide the email row on the Contact page. */
  email: string;
  /** Instagram handle without the @. Set to "" to hide the row. */
  instagramHandle: string;
}

export const siteConfig: SiteConfig = {
  name: "New Era",
  url: "https://www.newerabrand.online",
  whatsappNumber: "2348153626747",
  phoneDisplay: "+234 815 362 6747",
  // CONFIRM THIS ADDRESS: it was already on your Contact page and looks like a placeholder.
  email: "oyeranmie@email.com",
  instagramHandle: "thenew_era_tech",
};

/** The pre-filled message used by most "work with us" buttons. */
export const defaultWhatsappMessage = "Hello I want to work with New Era";

/** Builds a WhatsApp chat link, optionally with a pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Link to the Instagram profile built from the handle above. */
export function instagramUrl(): string {
  return `https://www.instagram.com/${siteConfig.instagramHandle}/`;
}