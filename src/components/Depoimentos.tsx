import { ADDRESS } from "../constants";

type Review = {
  nome: string;
  texto: string;
};

const reviewsComTexto: Review[] = [
  {
    nome: "Auritonio Carlos Pedriel Gouvea",
    texto: "Bem atendido, pelas minhas expectativas.",
  },
  {
    nome: "Boni prestadora Serviços e consertos",
    texto: "Tranquilo.",
  },
];

const outrasAvaliacoes = [
  { nome: "Cicero Conectg4" },
  { nome: "Ellen Cassia" },
  { nome: "Jordino Evagelista da Silva" },
  { nome: "Alexandre Ribeiro Machado Ribeiro Machado" },
  { nome: "Wylquer Vaz" },
  { nome: "Mariana Barbosa" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0">
      <path
        fill="#4285F4"
        d="M23.04 12.27c0-.85-.07-1.47-.22-2.12H12.24v3.85h6.19c-.12 1.03-.8 2.6-2.31 3.65l-.02.14 3.35 2.6.23.02c2.13-1.97 3.36-4.87 3.36-8.14Z"
      />
      <path
        fill="#34A853"
        d="M12.24 23.5c3.04 0 5.6-1 7.46-2.72l-3.56-2.76c-.95.66-2.23 1.13-3.9 1.13-2.98 0-5.5-1.97-6.4-4.7l-.13.01-3.48 2.7-.05.13c1.85 3.68 5.65 6.21 10.06 6.21Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.45a6.9 6.9 0 0 1-.37-2.2c0-.77.14-1.5.36-2.2l-.01-.15-3.53-2.75-.11.06A11.5 11.5 0 0 0 1 12.25c0 1.85.45 3.6 1.18 5.14l3.66-2.94Z"
      />
      <path
        fill="#EA4335"
        d="M12.24 5.35c2.12 0 3.55.92 4.37 1.68l3.19-3.12C17.83 2.14 15.28 1 12.24 1c-4.41 0-8.21 2.53-10.06 6.21l3.65 2.85c.9-2.73 3.42-4.71 6.4-4.71Z"
      />
    </svg>
  );
}

export default function Depoimentos() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy-600">
            Quem já avaliou
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy-950 sm:text-4xl">
            Avaliações reais no Google
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviewsComTexto.map((r) => (
            <div
              key={r.nome}
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-950/5"
            >
              <div className="flex items-center gap-1 text-slate-400">
                <GoogleIcon />
                <span className="text-xs font-medium">Avaliação do Google</span>
              </div>
              <p className="mt-4 text-lg text-slate-700">
                &ldquo;{r.texto}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                  {initials(r.nome)}
                </div>
                <div>
                  <p className="font-semibold text-navy-950">{r.nome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-navy-600">
            Também avaliaram o GM Residencial
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {outrasAvaliacoes.map((r) => (
              <div
                key={r.nome}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-950/5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
                  {initials(r.nome)}
                </div>
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-sm font-semibold text-navy-950">
                    {r.nome}
                  </p>
                  {r.avaliacoes && (
                    <p className="mt-0.5 text-xs text-slate-500">
                      {r.avaliacoes}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={ADDRESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-900"
          >
            <GoogleIcon />
            Ver localização e avaliações no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
