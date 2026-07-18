const faqs = [
  {
    q: "Como funciona o aluguel no GM Residencial?",
    a: "É simples: você fala com a gente pelo WhatsApp, agenda uma visita e, se gostar do imóvel, seguimos com a documentação para fechar o contrato rapidinho.",
  },
  {
    q: "Quais são as condições para alugar?",
    a: "As condições de locação no GM Residencial são simples e pensadas para facilitar a sua vida, especialmente se você busca praticidade e rapidez para morar sozinho em Mineiros.",
  },
  {
    q: "Os imóveis são mobiliados?",
    a: "Temos unidades com diferentes estruturas. Consulte a disponibilidade atual e os detalhes de cada imóvel diretamente no WhatsApp.",
  },
  {
    q: "Como agendar uma visita?",
    a: "Basta clicar em qualquer botão de WhatsApp desta página e nos chamar. Combinamos o melhor horário para você conhecer o residencial pessoalmente.",
  },
  {
    q: "Tem opção para estudantes?",
    a: "Sim! O GM Residencial fica perto da Universidade FAMP e tem unidades pensadas especialmente para estudantes e quem está morando sozinho pela primeira vez.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy-600">
            Perguntas frequentes
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy-950 sm:text-4xl">
            Ainda tem dúvidas sobre o aluguel em Mineiros?
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-950/5 open:ring-navy-600/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-950 marker:content-none">
                {item.q}
                <span className="shrink-0 text-xl leading-none text-navy-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
