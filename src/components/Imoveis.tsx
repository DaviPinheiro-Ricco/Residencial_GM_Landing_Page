import quarto from "../assets/images/quarto.png";
import cozinha from "../assets/images/cozinha.png";
import banheiro from "../assets/images/banheiro.png";
import areaLazer from "../assets/images/area-lazer.png";
import lavanderia from "../assets/images/lavanderia.png";
import estacionamento from "../assets/images/estacionamento.png";
import WhatsAppButton from "./WhatsAppButton";

const imoveis = [
  {
    img: quarto,
    title: "Quartos",
    desc: "Kitnets e apartamentos compactos, funcionais e prontos para morar.",
  },
  {
    img: cozinha,
    title: "Cozinha",
    desc: "Espaço prático para o seu dia a dia, sem complicação.",
  },
  {
    img: banheiro,
    title: "Banheiro",
    desc: "Ambientes organizados, limpos e bem cuidados.",
  },
  {
    img: areaLazer,
    title: "Área de lazer",
    desc: "Espaço comum para relaxar e receber amigos.",
  },
  {
    img: lavanderia,
    title: "Lavanderia",
    desc: "Lavanderia compartilhada para facilitar sua rotina.",
  },
  {
    img: estacionamento,
    title: "Estacionamento",
    desc: "Estacionamento grátis e coberto para moradores.",
  },
];

export default function Imoveis() {
  return (
    <section id="imoveis" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy-600">
            Imóveis disponíveis
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy-950 sm:text-4xl">
            Apartamentos e kitnets para alugar em Mineiros
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Conheça um pouco dos ambientes do GM Residencial. Unidades
            práticas e funcionais, com poucas vagas disponíveis no momento.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imoveis.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-slate-50 shadow-sm ring-1 ring-navy-950/5"
            >
              <div className="aspect-4/5 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={`${item.title} do GM Residencial em Mineiros GO`}
                  className="h-full w-full object-cover object-bottom transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="font-medium text-navy-950">
            Poucas unidades disponíveis — fale agora e garanta a sua.
          </p>
          <WhatsAppButton>Quero saber a disponibilidade</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
