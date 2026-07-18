import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "../constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/20 transition-transform duration-150 hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-60" />
      <WhatsAppIcon className="relative h-8 w-8" />
    </a>
  );
}
