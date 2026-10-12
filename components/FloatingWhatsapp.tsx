import { defaultWhatsappMessage, whatsappLink } from "@/lib/site";

export default function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with New Era on WhatsApp (opens in a new tab)"
      className="fixed bottom-6 right-6 z-50 px-6 py-4 rounded-full bg-purple-500 text-white font-bold shadow-2xl hover:scale-105 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
    >
      WhatsApp
    </a>
  );
}