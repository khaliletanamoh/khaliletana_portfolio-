import { MessageCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function WhatsAppButton() {
  const whatsapp = portfolioData.personal.whatsapp;

  // Do not display the button if no number is configured.
  if (!whatsapp) return null;

  // Remove +, spaces, and other non-digit characters.
  const phoneNumber = whatsapp.replace(/\D/g, "");

  // Validate the Ethiopian international number.
  if (!/^2519\d{8}$/.test(phoneNumber)) {
    return null;
  }

  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Khalil Etana on WhatsApp"
      title="Chat with me on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-400"
    >
      <MessageCircle size={27} />
    </a>
  );
}
