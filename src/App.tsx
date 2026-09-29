import { useTheme } from "./hooks/useTheme";
import { AuroraBackground } from "./components/AuroraBackground";
import { WovenBackground } from "./components/WovenBackground";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Stats } from "./components/Stats";
import { Hire } from "./components/Hire";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink font-sans text-fg transition-colors duration-300">
      <AuroraBackground />
      <WovenBackground />
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Marquee />
      <Skills />
      <Work />
      <Stats />
      <Hire />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
