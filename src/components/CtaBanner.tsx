import WhatsAppButton from "./WhatsAppButton";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 md:py-20">
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-navy-600/30 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Morar sozinho começa aqui
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Garanta seu espaço em Mineiros agora. Fale direto no WhatsApp e
          agende sua visita sem compromisso.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton>Quero falar no WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
