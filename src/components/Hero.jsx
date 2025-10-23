import { motion } from "framer-motion";
import { ChevronDown, Languages, Star, Shield, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  // Translations
  const text = {
    en: {
      badge: "English + Mandarin Speaking Drivers",
      title: "Batam Car Rental",
      subtitle: "Communication Without Barriers",
      desc: "Professional transportation with drivers fluent in English & Mandarin",
      note: "Safe • Friendly • Professional",
      bookNow: "Book Now",
      services: "Our Services",
      englishFluent: "English Fluent",
      mandarinFluent: "普通话流利 (Mandarin Fluent)",
      localExpertise: "Local Expertise",
      rating: "4.9/5 Rating",
      verified: "Verified Service",
      certified: "Certified Drivers",
    },
    zh: {
      badge: "会说英语和中文的司机",
      title: "巴淡岛租车服务",
      subtitle: "沟通无障碍",
      desc: "专业的交通服务，司机精通英语和中文",
      note: "安全 • 友善 • 专业",
      bookNow: "立即预订",
      services: "我们的服务",
      englishFluent: "英语流利",
      mandarinFluent: "普通话流利",
      localExpertise: "熟悉本地路线",
      rating: "4.9/5 评分",
      verified: "认证服务",
      certified: "持证司机",
    },
  };

  const t = text[language];

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1950&q=80')",
          }}
        />
      </div>

      {/* Enhanced Gradient Overlay with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90" />
      
      {/* Animated diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Trust Badges - Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mb-8 flex-wrap"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{t.rating}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
            <Shield className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">{t.verified}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">{t.certified}</span>
          </div>
        </motion.div>

        {/* Language Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 backdrop-blur-sm rounded-full shadow-2xl shadow-yellow-500/30"
          >
            <Languages className="w-6 h-6 text-black" />
            <span className="text-black font-bold text-base tracking-wide">
              {t.badge}
            </span>
          </motion.div>
        </motion.div>

        {/* Main Title with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              {t.subtitle}
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-3 leading-relaxed font-light"
        >
          {t.desc}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base text-yellow-400/90 max-w-3xl mx-auto mb-12 font-medium tracking-wider"
        >
          {t.note}
        </motion.p>

        {/* CTA Buttons with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(234, 179, 8, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            className="relative group bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-5 px-14 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all w-full sm:w-auto text-lg overflow-hidden"
          >
            <span className="relative z-10">{t.bookNow}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-white/50 backdrop-blur-md text-white font-semibold py-5 px-14 rounded-full hover:border-yellow-400/70 transition-all w-full sm:w-auto text-lg shadow-lg"
          >
            {t.services}
          </motion.a>
        </motion.div>

        {/* Language Features with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: "🇬🇧", text: t.englishFluent },
            { icon: "🇨🇳", text: t.mandarinFluent },
            { icon: "📍", text: t.localExpertise }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all shadow-lg hover:shadow-yellow-400/20"
            >
              <span className="text-xl">{item.icon}</span>
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform" />
              <span className="font-medium text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/60 uppercase tracking-widest">
          {language === "en" ? "Scroll" : "向下滑动"}
        </span>
        <div className="p-2 rounded-full border-2 border-white/30 backdrop-blur-sm">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;