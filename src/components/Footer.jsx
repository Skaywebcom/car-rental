import { motion } from "framer-motion";
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Languages, MessageCircle, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const quickLinks = [
    { name: "Home", nameCn: "首页", href: "#" },
    { name: "Services", nameCn: "服务", href: "#services" },
    { name: "About", nameCn: "关于", href: "#about" },
    { name: "Contact", nameCn: "联系", href: "#contact" },
  ];

  const servicesList = [
    { name: "Airport Transfer", nameCn: "机场接送" },
    { name: "Daily Rental", nameCn: "日租服务" },
    { name: "Business Trips", nameCn: "商务出行" },
    { name: "Island Tours", nameCn: "岛屿游览" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-xl shadow-lg">
                <Car className="w-7 h-7 text-black" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white block leading-tight">
                  {language === "en" ? "Batam Car Rental" : "巴淡租车"}
                </span>
                <span className="text-sm text-yellow-400 font-medium">
                  {language === "en" ? "Bilingual Transport Service" : "双语交通服务"}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              {language === "en"
                ? "Your trusted bilingual transportation partner in Batam. Professional service with English & Mandarin speaking drivers."
                : "您在巴淡值得信赖的双语交通伙伴，专业的英语和普通话司机服务。"}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-2">
              {language === "en" ? "Quick Links" : "快速链接"}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group inline-block"
                  >
                    <span className="block text-sm text-gray-400 group-hover:text-yellow-400 transition-colors duration-200">
                      {language === "en" ? link.name : link.nameCn}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-2">
              {language === "en" ? "Our Services" : "我们的服务"}
            </h3>
            <ul className="space-y-3">
              {servicesList.map((service, i) => (
                <li key={i} className="group">
                  <span className="block text-sm text-gray-400 group-hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                    {language === "en" ? service.name : service.nameCn}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-2">
              {language === "en" ? "Contact Us" : "联系我们"}
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="bg-yellow-500/10 p-2 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-1">
                    {language === "en" ? "WhatsApp" : "WhatsApp"}
                  </p>
                  <a href="tel:+6285117626717" className="text-sm text-white hover:text-yellow-400 transition-colors font-medium">
                    +62 851-1762-6717
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-yellow-500/10 p-2 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-1">
                    {language === "en" ? "Email" : "电子邮件"}
                  </p>
                  <a href="mailto:info@batamcarrental.com" className="text-sm text-white hover:text-yellow-400 transition-colors font-medium break-all">
                    info@batamcarrental.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-yellow-500/10 p-2 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-1">
                    {language === "en" ? "Location" : "地址"}
                  </p>
                  <p className="text-sm text-white font-medium">Batam Center</p>
                  <p className="text-xs text-gray-500">
                    {language === "en" ? "Indonesia" : "印度尼西亚巴淡中心"}
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-800 pt-6"
        >
          <p className="text-sm text-gray-400">
            {language === "en"
              ? `© ${new Date().getFullYear()} Batam Car Rental. All rights reserved.`
              : `© ${new Date().getFullYear()} 巴淡租车服务 版权所有。`}
          </p>
          <p className="text-xs text-gray-500">
            {language === "en"
              ? "English & Mandarin Drivers"
              : "英语和普通话司机服务"}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
