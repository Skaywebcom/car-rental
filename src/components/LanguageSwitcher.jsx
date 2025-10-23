import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 flex items-center gap-2 bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-400 transition-all z-50"
    >
      <Globe className="w-5 h-5" />
      {language === "en" ? "中文" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
