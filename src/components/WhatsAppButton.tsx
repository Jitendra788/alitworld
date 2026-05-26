import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="safe-bottom safe-right fixed z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all hover:scale-110 hover:shadow-2xl active:scale-95 sm:h-14 sm:w-14"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
