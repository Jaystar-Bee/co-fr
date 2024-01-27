import TheHeader from "./components/TheHeader";
import HeroSection from "./components/HeroSection";
import CareerSection from "./components/CareerSection";
import StartSection from "./components/StartSection";
import QuoteSection from "./components/QuoteSection";
import FanbaseSection from "./components/FanbaseSection";
import TheFooter from "./components/TheFooter";
import "./App.css";
function App() {
  return (
    <>
      <div className="bg-neutral">
        <div className="hero bg-[url('./assets/images/hero-frame.svg')] min-h-[90dvh]">
          <TheHeader />
          <HeroSection />
        </div>
      </div>
      <main className="text">
        <section className="bg-neutral-200/10 py-12 px-3 xs:px-6 sm:px-12 lg:px-20">
          <CareerSection />
        </section>
        <section>
          <StartSection />
        </section>
        <section>
          <QuoteSection />
        </section>
        <section className="bg-black py-12 xs:py-20 sm:py-32">
          <FanbaseSection />
        </section>
      </main>
      <footer className="px-3 xs:px-6 sm:px-12 lg:px-20 xs:py-6 bg-neutral">
        <TheFooter />
      </footer>
    </>
  );
}

export default App;
