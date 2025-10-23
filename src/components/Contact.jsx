import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Languages, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      titleEn: "Call or WhatsApp",
      titleCn: "电话或 WhatsApp",
      descEn: "Available 24/7 for inquiries and instant bookings.",
      descCn: "全天候可联系，欢迎咨询与即时预订。",
      value: "+62 851-1762-6717",
      link: "tel:+6285117626717",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      titleEn: "Email Us",
      titleCn: "发送邮件",
      descEn: "Send your inquiry or booking request via email.",
      descCn: "通过电子邮件发送咨询或预订请求。",
      value: "info@batamcarrental.com",
      link: "mailto:info@batamcarrental.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      titleEn: "Visit Us",
      titleCn: "欢迎光临",
      descEn: "Located in the heart of Batam Center.",
      descCn: "位于巴淡市中心的核心区域。",
      value: language === "en" ? "Batam Center, Indonesia" : "印度尼西亚 巴淡中心",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const serviceHighlights = [
    {
      icon: Languages,
      titleEn: "Bilingual Support",
      titleCn: "双语支持",
      descEn: "English & Mandarin",
      descCn: "英语和中文"
    },
    {
      icon: Clock,
      titleEn: "Quick Response",
      titleCn: "快速响应",
      descEn: "Within 30 Minutes",
      descCn: "30分钟内"
    },
    {
      icon: Globe,
      titleEn: "Professional Service",
      titleCn: "专业服务",
      descEn: "Trusted & Reliable",
      descCn: "值得信赖"
    }
  ];

  return (
    <section
      id="contact"
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
              {language === "en" ? "GET IN TOUCH" : "联系我们"}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
            {language === "en" ? "Contact Us" : "联系我们"}
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed">
            {language === "en"
              ? "Ready to book your ride or have any questions? Our friendly bilingual team is just a message away."
              : "准备好预订车辆或有任何问题吗？我们友善的双语团队随时为您服务。"}
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-500 cursor-pointer"
            >
              {/* Gradient Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`relative bg-gradient-to-br ${method.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-white">
                {language === "en" ? method.titleEn : method.titleCn}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                {language === "en" ? method.descEn : method.descCn}
              </p>
              <p className="text-yellow-400 font-bold text-lg break-all">
                {method.value}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-yellow-400/20 rounded-tr-3xl"></div>
            </motion.a>
          ))}
        </div>

        {/* Service Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-6 mb-24"
        >
          {serviceHighlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-5 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <highlight.icon className="w-7 h-7 text-black" />
              </div>
              <div>
                <p className="text-base font-bold text-white mb-1">
                  {language === "en" ? highlight.titleEn : highlight.titleCn}
                </p>
                <p className="text-xs text-gray-400">
                  {language === "en" ? highlight.descEn : highlight.descCn}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-10 md:p-14 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                {language === "en" ? "Send Us a Message" : "给我们留言"}
              </h3>
              <p className="text-gray-400">
                {language === "en" 
                  ? "Fill out the form below and we'll get back to you within 30 minutes"
                  : "填写下方表格，我们将在30分钟内回复您"}
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    {language === "en" ? "Your Name" : "您的姓名"}
                  </label>
                  <input
                    type="text"
                    placeholder={language === "en" ? "John Doe" : "张三"}
                    className="w-full bg-black/40 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    {language === "en" ? "Your Email" : "您的邮箱"}
                  </label>
                  <input
                    type="email"
                    placeholder={language === "en" ? "john@example.com" : "example@email.com"}
                    className="w-full bg-black/40 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  {language === "en" ? "Phone Number" : "电话号码"}
                </label>
                <input
                  type="tel"
                  placeholder="+62 812-XXXX-XXXX"
                  className="w-full bg-black/40 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  {language === "en" ? "Subject" : "主题"}
                </label>
                <input
                  type="text"
                  placeholder={language === "en" ? "Booking inquiry" : "预订咨询"}
                  className="w-full bg-black/40 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  {language === "en" ? "Your Message" : "您的留言"}
                </label>
                <textarea
                  rows="5"
                  placeholder={language === "en" ? "Tell us about your requirements..." : "告诉我们您的需求..."}
                  className="w-full bg-black/40 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all resize-none placeholder-gray-500"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(234, 179, 8, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg text-lg"
              >
                <Send className="w-5 h-5" />
                {language === "en" ? "Send Message" : "发送留言"}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center text-gray-400 text-sm"
        >
          <p>
            {language === "en"
              ? "Operating Hours: 24/7 • Response Time: Within 30 Minutes • Languages: English & Mandarin"
              : "营业时间：全天候 • 响应时间：30分钟内 • 语言：英语和中文"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;