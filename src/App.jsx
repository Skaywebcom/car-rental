import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden relative">
      {/* 🌐 Language Switch Button */}
      <LanguageSwitcher />

      {/* Main Content */}
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
