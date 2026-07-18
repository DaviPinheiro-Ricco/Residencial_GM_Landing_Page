type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const benefits: Benefit[] = [
  {
    title: "Localização privilegiada",
    description:
      "Residencial bem localizado em Mineiros GO, perto de tudo o que você precisa no dia a dia.",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Ambiente seguro e organizado",
    description:
      "Segurança garantida para você viver com tranquilidade e morar sozinho sem preocupação.",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
        <path d="m9.5 12 1.8 1.8L14.5 10" />
      </svg>
    ),
  },
  {
    title: "Fácil acesso a tudo",
    description:
      "Perto de mercados, faculdade e trabalho — praticidade real para o seu dia a dia.",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M3 12h18" />
        <path d="M3 12c0-4 3-8 9-9 6 1 9 5 9 9s-3 8-9 9c-6-1-9-5-9-9Z" />
        <path d="M12 3v18" />
      </svg>
    ),
  },
  {
    title: "Ideal para estudantes e jovens",
    description:
      "Pensado para universitários e jovens independentes que buscam praticidade.",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
        <path d="M6 12v4.5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5V12" />
      </svg>
    ),
  },
  {
    title: "Praticidade no dia a dia",
    description:
      "Estrutura pensada para simplificar sua rotina, sem complicação nenhuma.",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
      </svg>
    ),
  },
  {
    title: "Opções acessíveis",
    description:
      "Aluguel fácil em Mineiros, com bom custo-benefício para o seu bolso.",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M20.5 12.5 12 21l-9-9V4h8l9.5 8.5Z" />
        <circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy-600">
            Por que escolher o GM Residencial
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy-950 sm:text-4xl">
            Tudo o que você precisa para morar sozinho em Mineiros
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-950/5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900/5 text-navy-900">
                {b.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">
                {b.title}
              </h3>
              <p className="mt-2 text-slate-600">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
