import fachada from "../assets/images/fachada.png";
import WhatsAppButton from "./WhatsAppButton";

const badges = [
  "Perto da Universidade FAMP",
  "Estacionamento grátis",
  "Segurança garantida",
];

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-24 pb-16 md:pt-10 md:pb-24"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-navy-600/30 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-[1fr_1.15fr] md:px-8">
        <div className="text-center md:text-left">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            Residencial em Mineiros GO
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
            GM Residencial Independência e praticidade em um só lugar
          </h1>
          <p className="mt-5 text-lg text-white/80 sm:text-xl">
            Apartamentos e kitnets do GM Residencial, ideais para estudantes,
            jovens que estão saindo da casa dos pais e quem quer morar
            sozinho em Mineiros com segurança e praticidade no dia a dia.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <WhatsAppButton>Falar no WhatsApp agora</WhatsAppButton>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70 md:justify-start">
            {badges.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg md:max-w-none">
            <img
              src={fachada}
              alt="Fachada do GM Residencial em Mineiros GO, imóvel para alugar"
              className="h-full w-full object-cover"
            />
        </div>
      </div>
    </section>
  );
}
