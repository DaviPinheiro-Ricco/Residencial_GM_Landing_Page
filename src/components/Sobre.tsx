import sacada from "../assets/images/sacada.png";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy-600">
            Sobre o GM Residencial
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy-950 sm:text-4xl">
            Um residencial em Mineiros GO feito para a sua nova fase
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Saiu da casa dos pais, entrou na faculdade ou conseguiu aquele
            emprego novo? O GM Residencial foi pensado para quem está
            começando uma nova etapa e quer morar sozinho em Mineiros sem
            abrir mão de conforto, segurança e bom custo-benefício.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Nosso residencial em Mineiros GO fica em localização estratégica,
            próximo à Universidade FAMP, mercados e comércio, com apartamentos
            e kitnets pensados para o dia a dia de quem valoriza praticidade
            e independência.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              "Localização estratégica",
              "Ideal para morar sozinho",
              "Custo-benefício justo",
              "Praticidade no dia a dia",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-navy-900"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl shadow-xl shadow-navy-950/10">
            <img
              src={sacada}
              alt="Sacada de apartamento do GM Residencial em Mineiros"
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
