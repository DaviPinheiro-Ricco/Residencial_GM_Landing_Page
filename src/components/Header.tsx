import logo from "../assets/images/logo.png";
import WhatsAppButton from "./WhatsAppButton";

const links = [
  { href: "#topo", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#imoveis", label: "Fotos" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 md:top-5 md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-navy-900/5 bg-white/90 px-5 py-2.5 shadow-lg shadow-navy-950/5 backdrop-blur-sm md:px-8 md:py-3">
        <a href="#topo" className="flex items-center gap-2">
          <img src={logo} alt="GM Residencial" className="h-10 w-auto object-contain" />
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-900/70 transition-colors hover:text-navy-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <WhatsAppButton className="!px-4 !py-2.5 !text-sm md:!px-6 md:!py-3 md:!text-base">
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
