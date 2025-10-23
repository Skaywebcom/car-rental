import { motion } from "framer-motion";
import { Car, Users, Globe, Shield, Award, MessageCircle, Languages, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Car,
      titleEn: "Modern & Clean Fleet",
      titleCn: "现代干净的车队",
      descEn: "Enjoy safe and comfortable rides in our meticulously maintained premium vehicles.",
      descCn: "享受我们精心维护的高级车辆，为您提供安全舒适的乘车体验。",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      titleEn: "Bilingual Drivers",
      titleCn: "双语专业司机",
      descEn: "Our professional drivers speak both English and Mandarin fluently — ensuring perfect communication.",
      descCn: "我们的专业司机流利掌握英语和中文，确保沟通完美无障碍。",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      titleEn: "Easy Online Booking",
      titleCn: "便捷在线预订",
      descEn: "Book anytime, anywhere with instant confirmation and transparent pricing.",
      descCn: "随时随地在线预订，即时确认，价格透明。",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { 
      value: "500+", 
      labelEn: "Happy Customers", 
      labelCn: "满意客户",
      icon: Award 
    },
    { 
      value: "5+", 
      labelEn: "Years Experience", 
      labelCn: "年经验",
      icon: Star 
    },
    { 
      value: "4.9", 
      labelEn: "Average Rating", 
      labelCn: "平均评分",
      icon: Star 
    },
    { 
      value: "100%", 
      labelEn: "Bilingual Service", 
      labelCn: "双语服务",
      icon: Languages 
    }
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm rounded-full mb-8">
            <MessageCircle className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm tracking-wide">
              {language === "en" ? "SPEAK YOUR LANGUAGE" : "说您的语言"}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
            {language === "en" ? "About Us" : "关于我们"}
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed">
            {language === "en"
              ? "We are Batam City's trusted car rental service, offering professional drivers who speak both English and Mandarin — making your trip smooth, comfortable, and truly connected."
              : "我们是巴淡市值得信赖的汽车租赁服务公司，提供会说英语和中文的专业司机，让您的旅程顺畅、舒适又真正无障碍。"}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-500"
            >
              {/* Gradient Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`relative bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-white">
                {language === "en" ? feature.titleEn : feature.titleCn}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {language === "en" ? feature.descEn : feature.descCn}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-yellow-400/20 rounded-tr-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Language Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl mb-24"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Languages className="w-16 h-16 text-black" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {language === "en" ? "Communication Without Barriers" : "无障碍沟通"}
            </h3>
            <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              {language === "en"
                ? "Experience worry-free travel with drivers who truly understand you. Ask questions in your language, get authentic local recommendations, and explore Batam with complete confidence."
                : "与真正理解您的司机一起无忧出行。用您的语言提问，获得真实的本地建议，满怀信心地探索巴淡。"}
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center group hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className="w-10 h-10 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {language === "en" ? stat.labelEn : stat.labelCn}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 md:p-16 rounded-3xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {language === "en" ? "Our Mission" : "我们的使命"}
              </h3>
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center">
              {language === "en"
                ? "Whether you're traveling for business or leisure, our mission is to make your journey in Batam simple and worry-free. With transparent pricing, punctual service, and friendly communication in English or Mandarin — we make every ride a pleasant and memorable experience."
                : "无论您是出差还是旅游，我们的使命都是让您在巴淡的旅程轻松无忧。价格透明、服务准时、用英语或中文友善沟通——让每一次出行都成为愉快而难忘的体验。"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;