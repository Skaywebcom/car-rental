import { motion } from "framer-motion";
import { Car, Plane, Briefcase, Map, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Plane,
      titleEn: "Airport Transfer",
      titleCn: "机场接送",
      descEn: "Reliable pick-up and drop-off from Batam Airport to your hotel or business destination.",
      descCn: "提供从巴淡机场到酒店或商务地点的可靠接送服务。",
      color: "from-blue-500 to-cyan-500",
      features: ["24/7 Available", "Flight Tracking", "Meet & Greet"],
    },
    {
      icon: Car,
      titleEn: "Daily Car Rental",
      titleCn: "日租服务",
      descEn: "Flexible daily car rental with professional bilingual drivers at your service.",
      descCn: "灵活的日租服务，配备专业的双语司机，随时为您服务。",
      color: "from-yellow-500 to-orange-500",
      features: ["Full Day Service", "Bilingual Drivers", "Flexible Routes"],
    },
    {
      icon: Briefcase,
      titleEn: "Business Trip",
      titleCn: "商务出行",
      descEn: "Perfect for meetings, factory visits, or corporate travel with comfortable transport.",
      descCn: "适合会议、工厂参观或商务行程，提供舒适便捷的交通服务。",
      color: "from-purple-500 to-pink-500",
      features: ["Professional Service", "WiFi Available", "Premium Vehicles"],
    },
    {
      icon: Map,
      titleEn: "Island Tour",
      titleCn: "岛屿游览",
      descEn: "Discover Batam's hidden gems with local guides and drivers who speak English & Mandarin.",
      descCn: "与能讲英语与普通话的当地司机一起，探索巴淡岛的美丽景点。",
      color: "from-green-500 to-emerald-500",
      features: ["Local Expertise", "Custom Routes", "Photo Stops"],
    },
    {
      icon: Clock,
      titleEn: "Hourly Charter",
      titleCn: "按小时包车",
      descEn: "Need flexibility? Rent by the hour and enjoy a smooth, private ride anywhere on the island.",
      descCn: "需要更灵活的安排？可按小时包车，享受全岛范围的舒适出行。",
      color: "from-red-500 to-rose-500",
      features: ["Pay As You Go", "No Hidden Fees", "Easy Booking"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-6 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6"
          >
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              {language === "en" ? "What We Offer" : "服务项目"}
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {language === "en" ? "Our Services" : "我们的服务"}
            </span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"
          />
          
          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">
            {language === "en"
              ? "We offer a variety of car rental and transportation services to meet every travel need in Batam."
              : "我们提供多种租车与交通服务，满足您在巴淡岛的各种出行需求。"}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg shadow-yellow-500/20`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                {language === "en" ? service.titleEn : service.titleCn}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {language === "en" ? service.descEn : service.descCn}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-xs text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm group-hover:gap-3 transition-all"
                whileHover={{ x: 5 }}
              >
                {language === "en" ? "Book Now" : "立即预订"}
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-400/20 blur-2xl" />
            <div className="relative bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-2xl px-12 py-8">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-2">
                {language === "en"
                  ? "Wherever you go, we drive you there safely and comfortably."
                  : "无论您要去哪里，我们都将安全舒适地送您抵达。"}
              </p>
              <p className="text-gray-400 text-sm">
                {language === "en" 
                  ? "Your journey is our priority" 
                  : "您的旅程是我们的首要任务"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "500+", label: language === "en" ? "Happy Clients" : "满意客户" },
            { value: "24/7", label: language === "en" ? "Available" : "全天候服务" },
            { value: "10+", label: language === "en" ? "Vehicles" : "车辆数" },
            { value: "5★", label: language === "en" ? "Rating" : "评分" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;