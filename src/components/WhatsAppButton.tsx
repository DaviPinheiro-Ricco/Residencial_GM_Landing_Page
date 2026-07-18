import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "../constants";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
};

export default function WhatsAppButton({
  children,
  className = "",
  variant = "solid",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-base font-semibold transition-transform duration-150 active:scale-95 hover:scale-[1.03]";
  const styles =
    variant === "solid"
      ? "bg-whatsapp text-white shadow-lg shadow-whatsapp/30 hover:bg-whatsapp-dark"
      : "border-2 border-white text-white hover:bg-white/10";

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {children}
    </a>
  );
}
