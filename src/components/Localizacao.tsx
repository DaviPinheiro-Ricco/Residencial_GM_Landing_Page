import { ADDRESS } from "../constants";

const vantagens = [
  "Cidade em crescimento no sudoeste de Goiás",
  "Boas oportunidades de estudo e trabalho",
  "Qualidade de vida com estrutura completa",
];

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-navy-600">
            Localização
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy-950 sm:text-4xl">
            Imóveis para alugar em Mineiros Goiás, no coração da cidade
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Mineiros GO é uma cidade estratégica no sudoeste goiano, com
            crescimento constante e boa qualidade de vida. O GM Residencial
            fica no St. Mundinho, perto da Universidade FAMP e de toda a
            estrutura que você precisa no dia a dia.
          </p>

          <ul className="mt-6 space-y-3">
            {vantagens.map((v) => (
              <li key={v} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-navy-600" />
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-slate-50 px-5 py-4">
            <p className="font-semibold text-navy-950">{ADDRESS.line1}</p>
            <p className="text-slate-600">{ADDRESS.line2}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl shadow-navy-950/10 ring-1 ring-navy-950/5">
          <iframe
            title="Localização do GM Residencial em Mineiros GO"
            src={ADDRESS.mapsEmbedSrc}
            className="h-80 w-full md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
