import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Beneficios from "./components/Beneficios";
import Imoveis from "./components/Imoveis";
import CtaBanner from "./components/CtaBanner";
import Depoimentos from "./components/Depoimentos";
import Localizacao from "./components/Localizacao";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Beneficios />
        <Imoveis />
        <CtaBanner />
        <Depoimentos />
        <Localizacao />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
