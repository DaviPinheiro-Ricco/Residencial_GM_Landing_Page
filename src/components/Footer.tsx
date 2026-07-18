import logo from "../assets/images/logo.png";
import { ADDRESS, WHATSAPP_DISPLAY } from "../constants";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-14">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <div className="mx-auto inline-flex rounded-2xl bg-white px-5 py-2.5">
          <img
            src={logo}
            alt="GM Residencial"
            className="h-14 w-auto object-contain"
          />
        </div>

        <p className="mt-6 text-lg font-medium text-white">
          Sua independência começa aqui.
        </p>
        <p className="mt-1 text-white/60">
          {ADDRESS.line1} — {ADDRESS.line2}
        </p>
        <p className="mt-1 text-white/60">WhatsApp: {WHATSAPP_DISPLAY}</p>

        <div className="mt-7 flex justify-center">
          <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
        </div>

        <p className="mt-10 text-sm text-white/40">
          © {new Date().getFullYear()} GM Residencial — Mineiros, GO. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
