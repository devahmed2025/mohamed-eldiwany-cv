"use client";
// ...existing code...
export const dynamic = "force-static";
// ...existing code...
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Globe,
  Star,
  Phone,
  Mail,
  MessageSquare,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const translations = {
  ar: {
    title: "مطابع نبراس العرب",
    subtitle: "شريككم الموثوق لجميع احتياجات الطباعة",
    services: "خدماتنا",
    samples: "نماذج للمعاينة",
    testimonials: "ماذا يقول عملاؤنا",
    pricing: "الأسعار والعروض",
    contact: "تواصلوا معنا",
    copyright: "© 2025 مطابع نبراس العرب. جميع الحقوق محفوظة.",
    whatsapp: "واتساب",
    email: "بريد إلكتروني",
    phone: "هاتف",
    pricingDiscounts: "أسعار الحزم",
    corporateOffers: "لأصحاب الشركات",
    contactUs: "تواصل معنا لمعرفه العروض الحاليه",
    competitivePrices: "أسعار تنافسية لبنرات شركات المقاولات",
    sample: "عينة",
    home: "الرئيسية",
    about: "عن الشركة",
    aboutMe: "محمد الديواني",
  },
  en: {
    title: "Nebras Al Arab Printing",
    subtitle: "Your trusted partner for all printing needs",
    services: "Our Services",
    samples: "Preview Samples",
    testimonials: "What Our Clients Say",
    pricing: "Pricing & Offers",
    contact: "Contact Us",
    copyright: "© 2025 Nebras Al Arab Printing. All rights reserved.",
    whatsapp: "WhatsApp",
    email: "Email",
    phone: "Phone",
    pricingDiscounts: "Package Pricing",
    corporateOffers: "For Companies",
    contactUs: "Contact us to learn about current offers",
    competitivePrices: "Competitive prices for construction company banners",
    sample: "Sample",
    home: "Home",
    about: "About",
    aboutMe: "Mohamed ELdiwany",
  },
};

const testimonials = [
  { id: 1, name: "أحمد السعود", review: "جودة رائعة وتسليم سريع!", rating: 5 },
  {
    id: 2,
    name: "فاطمة خالد",
    review: "فريق محترف للغاية، أوصي بهم بشدة!",
    rating: 4,
  },
  {
    id: 3,
    name: "عمر بن راشد",
    review: "أفضل خدمة طباعة في الرياض!",
    rating: 5,
  },
  {
    id: 4,
    name: "نورة العتيبي",
    review: "تعامل راقٍ وأسعار ممتازة مقارنة بالسوق.",
    rating: 4,
  },
  {
    id: 5,
    name: "سعود الهاجري",
    review: "خدمة سريعة واهتمام بالتفاصيل.",
    rating: 5,
  },
];

const services = [
  {
    title: "خدمه تصميم موقع الكتروني",
    titleEn: "Website Design Service",
    image: "/nebras/website.png",
    description: "تصميم مواقع الكترونية احترافية تعكس هوية علامتك التجارية",
    features: ["تصميم متجاوب", "تحسين محركات البحث", "تجربة مستخدم متميزة"],
  },
  {
    title: "اكواب زجاجية",
    titleEn: "Glass Cups",
    image: "/01tyRGpdIJYzdKFalBVvmNe7c9iVWeMl7gdZi8qI.webp",
    description: "طباعة على الأكواب الزجاجية عالية الجودة",
    features: ["طباعة بجودة عالية", "ألوان زاهية", "مقاسات متنوعة"],
  },
  {
    title: "اختام",
    titleEn: "Stamps",
    image: "/2c3340b3-994d-4dc8-9f20-7ec96bcd91bc.webp",
    description: "تصميم وتصنيع اختام احترافية",
    features: ["تصاميم احترافية", "رسومات متجهة (Vector)", "مراجعات متعددة"],
  },
  {
    title: "كاب",
    titleEn: "Caps",
    image: "/5fe124fa-5e.webp",
    description: "طباعة على القبعات بتصاميم مخصصة",
    features: [
      "مقاومة للعوامل الجوية",
      "أحجام مخصصة حسب الطلب",
      "مواد عالية الجودة",
    ],
  },
  {
    title: "خطابات رسمية",
    titleEn: "Official Letters",
    image: "/10.webp",
    description: "تصميم وطباعة الخطابات الرسمية",
    features: ["تصاميم أنيقة", "طباعة عالية الجودة", "خيارات ورق متعددة"],
  },
  {
    title: "شهادات التقدير",
    titleEn: "Certificates",
    image: "/12.webp",
    description: "تصميم وطباعة شهادات تقدير راقية",
    features: ["تصاميم فاخرة", "تشطيب نهائي ممتاز", "متانة وجودة الطباعة"],
  },
  {
    title: "كارت بيزنس افراد وشركات",
    titleEn: "Business Cards",
    image: "/nebras/businesscard.jpg",
    description: "تصميم بطاقات أعمال احترافية",
    features: ["رسم دقيق", "وضوح عالي", "مناسب لجميع أنواع المواقع"],
  },
  {
    title: "اظرف",
    titleEn: "Envelopes",
    image: "/14.webp",
    description: "طباعة أظرف بتصاميم مخصصة",
    features: ["قص دقيق", "تجميع احترافي", "خدمة سريعة"],
  },
  {
    title: "كروت دعوة",
    titleEn: "Invitation Cards",
    image: "/nebras/اطبع دعوتك ب.jpg",
    description: "اطبع دعوتك بأناقة تعكس ذوقك",
    features: ["تشطيب لامع أو مطفي", "تقوية الحواف", "تصميم نهائي متقن"],
  },

  {
    title: "البانرات",
    titleEn: "Banners",
    image: "/banner.jpeg",
    description: "تصميم وطباعة بانرات دعائية قابلة للتعليق أو العرض",
    features: ["تصميم جذاب", "خامات متينة", "مقاسات متعددة"],
  },
  {
    title: "طباعه سديري سيفتي",
    titleEn: "Safety Vests",
    image:
      "/9520db50-f398-40cc-a5cf-f0256a7d744d-1000x1000-3kA5ArXq8kkx57DJIwwYZcYcfYnjDRfIV7QHmiwD.webp",
    description: "طباعة متخصصة على سديري السيفتي",
    features: ["طباعة واضحة", "متانة عالية", "مقاومة للخدش"],
  },
  {
    title: "الطباعة الأوفست",
    titleEn: "Offset Printing",
    image: "/ليبل-قماش.webp",
    description: "طباعة أوفست عالية الدقة للكميات الكبيرة",
    features: [
      "دقة ألوان عالية",
      "تكلفة منخفضة للكميات الكبيرة",
      "سرعة التنفيذ",
    ],
  },
  {
    title: "تصميم هويه بصريه كامله",
    titleEn: "Complete Visual Identity",
    image: "/nebras/هويه بصريه.jpg",
    description: "تصميم هويه بصريه كامله تعكس هوية علامتك التجارية",
    features: ["تصميم شعار احترافي", "اختيار الألوان بعناية", "سرعة التنفيذ"],
  },
  {
    title: "تميزك يبداء من اللافتة..طباعة احترافية تعكس هويتكـ",
    titleEn: "Professional Signage",
    image: "/nebras/تميزك يبداء من اللافتة..طباعة احترافية تعكس هويتكـ.jpg",
    description: "تميزك يبداء من اللافتة..طباعة احترافية تعكس هويتكـ",
    features: ["اختيار الألوان بعناية", "سرعة التنفيذ"],
  },
  {
    title: "دفتر سندات",
    titleEn: "Bond Books",
    image: "/nebras/دفتر سندات .jpg",
    description: "طباعة دفاتر سندات احترافية",
    features: ["اختيار الألوان بعناية", "سرعة التنفيذ"],
  },
  {
    title: "استيكرات",
    titleEn: "Stickers",
    image: "/nebras/جميع انواع الاستيكرات بنفش ممتاز وجودة عالية.jpg",
    description: "استكيرات ذو جوده عاليه وفينش راقي",
    features: ["اختيار الألوان بعناية", "سرعة التنفيذ"],
  },
  {
    title: "ميداليات",
    titleEn: "Medals",
    image: "/nebras/medal.jpg",
    description: "ميداليات مصممة باحترافية تعكس تميزك",
    features: ["اختيار الألوان بعناية", "سرعة التنفيذ"],
  },
  {
    title: "مميز واحترافي لموظفيك او لشركتك ID",
    titleEn: "Professional ID Cards",
    image: "/nebras/عرف موظفينك بكروت iDمميزة احترافية تعكس تنظيم شركتك.jpg",
    description: "تميزك يبدأ من كارت هويه مصمم بأحترافيه لك ولموظفيك",
    features: ["اختيار الألوان بعناية", "سرعة التنفيذ"],
  },
];

function Header({
  isDarkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
  t,
  isRTL,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" && !isDarkMode) {
      toggleDarkMode();
    }
  }, [isDarkMode, toggleDarkMode]);

  return (
    <header
      className={`fixed w-full top-0 z-50 ${
        isDarkMode ? "bg-gray-900/95" : "bg-white/95"
      } backdrop-blur-md shadow-lg`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center relative">
              <Image
                src="/logo.svg"
                alt="Nebras Al Arab Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-left">
              <h1
                className={`text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {t.title}
              </h1>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-black"
                } arabic-font`}
              >
                {language === "ar"
                  ? "مطابع نبراس العرب"
                  : "Nebras Al Arab Printing"}
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link
              href="/"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t.home}
            </Link>
            <Link
              href="#services"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t.services}
            </Link>
            <Link
              href="#samples"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t.samples}
            </Link>
            <Link
              href="#testimonials"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t.testimonials}
            </Link>
            <Link
              href="#pricing"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t.pricing}
            </Link>
            <Link
              href="#contact"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t.contact}
            </Link>
            <Link
              href="/about"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t.about}
            </Link>
            <Link
              href="/about/me"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              {t.aboutMe}
            </Link>
            <Link
              href="/billing"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              Billing
            </Link>
            <Link
              href="/qr-codes"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } transition-colors ${isRTL ? "font-arabic" : ""}`}
            >
              QR Codes
            </Link>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-4 h-0.5 bg-gray-600 dark:bg-gray-300 transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-0.5" : ""
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-gray-600 dark:bg-gray-300 mt-1 transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-gray-600 dark:bg-gray-300 mt-1 transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <Link
              href="/"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </Link>
            <Link
              href="#services"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.services}
            </Link>
            <Link
              href="#samples"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.samples}
            </Link>
            <Link
              href="#testimonials"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.testimonials}
            </Link>
            <Link
              href="#pricing"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.pricing}
            </Link>
            <Link
              href="#contact"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </Link>
            <Link
              href="/about"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.about}
            </Link>
            <Link
              href="/about/me"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.aboutMe}
            </Link>
            <Link
              href="/billing"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Billing
            </Link>
            <Link
              href="/qr-codes"
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              } ${isRTL ? "font-arabic" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              QR Codes
            </Link>
            <button
              onClick={toggleLanguage}
              className={`block py-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-black hover:text-blue-600"
              }`}
            >
              {language === "ar" ? "English" : "العربية"}
            </button>
            <button
              onClick={toggleDarkMode}
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span className="ml-2">
                {isDarkMode ? "وضع النهار" : "وضع الليل"}
              </span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default function EnhancedPrintingWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [selectedService, setSelectedService] = useState(null);
  const [openPricingIndex, setOpenPricingIndex] = useState(null);
  const [serviceInteractions, setServiceInteractions] = useState({});

  const t = translations[language];
  const isRTL = language === "ar";

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const toggleLanguage = () => setLanguage(language === "ar" ? "en" : "ar");

  // Load service interactions from localStorage
  useEffect(() => {
    const savedInteractions = localStorage.getItem('serviceInteractions');
    if (savedInteractions) {
      setServiceInteractions(JSON.parse(savedInteractions));
    }
  }, []);

  const handleServiceLike = (serviceTitle) => {
    setServiceInteractions(prev => {
      const newInteractions = {
        ...prev,
        [serviceTitle]: {
          ...prev[serviceTitle],
          likes: (prev[serviceTitle]?.likes || 0) + 1,
          isLiked: true
        }
      };
      localStorage.setItem('serviceInteractions', JSON.stringify(newInteractions));
      return newInteractions;
    });
  };

  const handleServiceComment = (serviceTitle, comment) => {
    if (comment.trim()) {
      setServiceInteractions(prev => {
        const newInteractions = {
          ...prev,
          [serviceTitle]: {
            ...prev[serviceTitle],
            comments: [
              ...(prev[serviceTitle]?.comments || []),
              {
                id: Date.now(),
                text: comment,
                author: 'مستخدم',
                timestamp: new Date().toLocaleString('ar-SA')
              }
            ]
          }
        };
        localStorage.setItem('serviceInteractions', JSON.stringify(newInteractions));
        return newInteractions;
      });
    }
  };

  const ServiceModal = ({ service, isOpen, onClose }) => {
    if (!isOpen || !service) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div
          className={`bg-white ${
            isDarkMode ? "dark:bg-gray-800" : ""
          } rounded-2xl max-w-lg w-full p-6 transform transition-all duration-300 max-h-[90vh] overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {language === "ar" ? service.title : service.titleEn}
            </h3>
            <button
              onClick={onClose}
              className={`text-2xl ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              } hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-all`}
            >
              <X />
            </button>
          </div>

          <div className="relative h-48 rounded-xl mb-6 overflow-hidden">
            <img
              src={service.image}
              alt={language === "ar" ? service.title : service.titleEn}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==";
              }}
            />
          </div>

          <div className="mb-6">
            <h4
              className={`text-lg font-semibold mb-3 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {language === "ar" ? "الوصف" : "Description"}
            </h4>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              {service.description}
            </p>
          </div>

          <div className="mb-6">
            <h4
              className={`text-lg font-semibold mb-3 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {language === "ar" ? "المميزات" : "Features"}
            </h4>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } flex items-center gap-3`}
                >
                  <span className="text-blue-500 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full text-sm">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href={`https://wa.me/966540584952?text=${encodeURIComponent(
                language === "ar"
                  ? `مرحبًا، أنا مهتم بخدمة ${service.title}. يرجى تزويدي بالمزيد من التفاصيل.`
                  : `Hello, I am interested in the service ${service.titleEn}. Please provide me with more details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              {language === "ar" ? "طلب عبر واتساب" : "Order via WhatsApp"}
            </a>
            <button
              onClick={onClose}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {language === "ar" ? "إغلاق" : "Close"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 overflow-x-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } ${isRTL ? "rtl" : "ltr"}`}
    >
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
        isRTL={isRTL}
      />
      <section className="py-4 md:py-16 px-2 relative overflow-hidden">
        {/* Background with Logo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20"></div>
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'url(/dwn/Logo.svg)',
              backgroundSize: '400px 400px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(1px)'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-0 md:gap-6 lg:gap-12">
            {/* Single merged image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center -mb-8 md:mb-0 md:mt-0 lg:col-start-1"
            >
              <div className="w-96 h-96 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                <Image
                  src="/mtb3a.svg"
                  alt="Mtb3a Logo"
                  fill
                  className="object-contain"
                  priority
                  style={{
                    filter: "drop-shadow(0 0 0 transparent)",
                  }}
                />
              </div>
            </motion.div>

            {/* Content (Arabic Text + Buttons) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-col items-center md:items-start lg:items-end text-center md:text-right lg:text-right space-y-3 md:space-y-5 -mt-6 md:mt-0 lg:col-start-3"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-snug arabic-font-bold">
                شريككم الموثوق لجميع احتياجات الطباعة
              </h2>

              <p
                className={`text-base sm:text-lg md:text-xl ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } arabic-font`}
              >
                {t.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 hover:scale-[1.03] shadow-md text-sm sm:text-base"
                >
                  {t.services}
                </a>
                <a
                  href="#contact"
                  className={`border border-emerald-600 px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-medium hover:bg-emerald-600 hover:text-white transition-all duration-200 hover:scale-[1.03] text-sm sm:text-base ${
                    isDarkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  {t.contact}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.08 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            {t.services}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.08 }}
                className={`${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2`}
                onClick={() => setSelectedService(service)}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={language === "ar" ? service.title : service.titleEn}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==";
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {language === "ar" ? service.title : service.titleEn}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm mb-4`}
                >
                  {service.description}
                </p>

                {/* Service Interactions - Likes and Comments */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  {/* Likes Section */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceLike(service.title);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                        serviceInteractions[service.title]?.isLiked
                          ? 'bg-red-100 text-red-600 dark:bg-red-900/30'
                          : 'bg-gray-100 text-gray-600 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <span className={`text-lg ${serviceInteractions[service.title]?.isLiked ? '❤️' : '🤍'}`}>
                        {serviceInteractions[service.title]?.isLiked ? '❤️' : '🤍'}
                      </span>
                      <span className="text-sm font-medium">
                        {serviceInteractions[service.title]?.likes || 0}
                      </span>
                    </button>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {serviceInteractions[service.title]?.comments?.length || 0} تعليق
                    </span>
                  </div>

                  {/* Comments Section */}
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {serviceInteractions[service.title]?.comments?.slice(-2).map((comment) => (
                      <div key={comment.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{comment.author}</span>
                          <span className="text-gray-500 dark:text-gray-400">{comment.timestamp}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{comment.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Add Comment Input */}
                  <div className="mt-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="أضف تعليقك..."
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleServiceComment(service.title, e.target.value);
                            e.target.value = '';
                          }
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const input = e.target.previousElementSibling;
                          handleServiceComment(service.title, input.value);
                          input.value = '';
                        }}
                        className="px-3 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        إرسال
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            منتجاتنا المميزة
          </motion.h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" id="productCarousel">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="min-w-full md:min-w-[400px] lg:min-w-[500px] px-4"
                  >
                    <div className={`${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    } rounded-2xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2`}>
                      
                      {/* Product Image */}
                      <div className="h-80 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 relative overflow-hidden">
                        <Image
                          src={service.image}
                          alt={language === "ar" ? service.title : service.titleEn}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==";
                          }}
                        />
                        
                        {/* Overlay with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Product Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white arabic-font">
                          {language === "ar" ? service.title : service.titleEn}
                        </h3>
                        
                        <p className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        } mb-4 leading-relaxed arabic-font`}>
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              <span className={`text-sm ${
                                isDarkMode ? "text-gray-400" : "text-gray-500"
                              } arabic-font`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Action Button */}
                        <button
                          onClick={() => setSelectedService(service)}
                          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          عرض التفاصيل
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const carousel = document.getElementById('productCarousel');
                const currentTransform = carousel.style.transform;
                const currentTranslate = currentTransform ? parseInt(currentTransform.match(/-?\d+/) || 0) : 0;
                const slideWidth = window.innerWidth < 768 ? 100 : window.innerWidth < 1024 ? 400 : 500;
                carousel.style.transform = `translateX(${currentTranslate + slideWidth}px)`;
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-200 dark:border-gray-600"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => {
                const carousel = document.getElementById('productCarousel');
                const currentTransform = carousel.style.transform;
                const currentTranslate = currentTransform ? parseInt(currentTransform.match(/-?\d+/) || 0) : 0;
                const slideWidth = window.innerWidth < 768 ? 100 : window.innerWidth < 1024 ? 400 : 500;
                carousel.style.transform = `translateX(${currentTranslate - slideWidth}px)`;
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-200 dark:border-gray-600"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const carousel = document.getElementById('productCarousel');
                    const slideWidth = window.innerWidth < 768 ? 100 : window.innerWidth < 1024 ? 400 : 500;
                    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
                  }}
                  className="w-3 h-3 bg-emerald-300 rounded-full hover:bg-emerald-500 transition-colors duration-300"
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="samples"
        className={`py-20 px-4 ${isDarkMode ? "bg-gray-800/50" : "bg-blue-50"}`}
      >
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {t.samples}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={language === "ar" ? service.title : service.titleEn}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==";
                    }}
                  />
                </div>
                <p
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t.sample}{" "}
                  {language === "ar" ? service.title : service.titleEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {t.testimonials}
          </motion.h2>
          <div className="md:overflow-hidden overflow-y-auto max-h-[500px] md:max-h-none">
            <div className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse gap-6 md:gap-0">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } p-6 rounded-2xl shadow-xl min-w-[300px] md:min-w-[320px] border ${
                    isDarkMode ? "border-gray-700" : "border-gray-100"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex mb-3">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={20}
                      />
                    ))}
                  </div>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } mb-4 text-sm leading-relaxed`}
                  >
                    {testimonial.review}
                  </p>
                  <p className="font-semibold text-blue-600">
                    {testimonial.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className={`py-20 px-4 ${
          isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
        }`}
      >
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            {t.pricing}
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: t.pricingDiscounts, content: t.contactUs },
              { title: t.corporateOffers, content: t.competitivePrices },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-2xl shadow-xl overflow-hidden`}
              >
                <button
                  onClick={() =>
                    setOpenPricingIndex(
                      openPricingIndex === index ? null : index
                    )
                  }
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span
                    className="text-3xl text-blue-600 transform transition-transform duration-300"
                    style={{
                      transform:
                        openPricingIndex === index
                          ? "rotate(45deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`px-6 pb-6 transition-all duration-300 ${
                    openPricingIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {index === 0 ? (
                    // Special Offers Table for أسعار الحزم
                    <div className="space-y-4">
                      <p className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      } leading-relaxed mb-4`}>
                        {item.content}
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3 text-center arabic-font">
                          العروض الخاصة 🎯
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-green-500">
                            <div className="flex items-center gap-2">
                              <span className="text-green-500 text-lg">🎨</span>
                              <div>
                                <p className="font-semibold text-gray-800 dark:text-white text-sm">تصميم مجاني</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">مع الطلبات الكبيرة</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-blue-500">
                            <div className="flex items-center gap-2">
                              <span className="text-blue-500 text-lg">🚚</span>
                              <div>
                                <p className="font-semibold text-gray-800 dark:text-white text-sm">توصيل مجاني</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">للطلبات داخل الرياض</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-purple-500">
                            <div className="flex items-center gap-2">
                              <span className="text-purple-500 text-lg">⚡</span>
                              <div>
                                <p className="font-semibold text-gray-800 dark:text-white text-sm">تسليم سريع</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">خلال 24 ساعة</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-orange-500">
                            <div className="flex items-center gap-2">
                              <span className="text-orange-500 text-lg">🎁</span>
                              <div>
                                <p className="font-semibold text-gray-800 dark:text-white text-sm">هدية مجانية</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">مع كل طلب</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-red-500">
                            <div className="flex items-center gap-2">
                              <span className="text-red-500 text-lg">💎</span>
                              <div>
                                <p className="font-semibold text-gray-800 dark:text-white text-sm">جودة عالية</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">ضمان الجودة</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-teal-500">
                            <div className="flex items-center gap-2">
                              <span className="text-teal-500 text-lg">🔄</span>
                              <div>
                                <p className="font-semibold text-gray-800 dark:text-white text-sm">تعديلات مجانية</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">حتى الرضا التام</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-600 dark:text-gray-400 arabic-font">
                            💬 تواصل معنا لمعرفة العروض الحالية والخصومات الخاصة
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular content for other sections
                    <div className="space-y-4">
                      <p className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      } leading-relaxed mb-4`}>
                        {item.content}
                      </p>
                      
                      {index === 1 && (
                        // Corporate Offers Table for لأصحاب الشركات
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-4">
                          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3 text-center arabic-font">
                            عروض الشركات 🏢
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-emerald-500">
                              <div className="flex items-center gap-2">
                                <span className="text-emerald-500 text-lg">🎯</span>
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-white text-sm">خصم الحجم</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">خصومات خاصة للطلبات الكبيرة</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-blue-500">
                              <div className="flex items-center gap-2">
                                <span className="text-blue-500 text-lg">🚚</span>
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-white text-sm">توصيل مجاني</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">لجميع الطلبات داخل الرياض</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-purple-500">
                              <div className="flex items-center gap-2">
                                <span className="text-purple-500 text-lg">⚡</span>
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-white text-sm">تسليم سريع</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">خلال 24-48 ساعة للشركات</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-orange-500">
                              <div className="flex items-center gap-2">
                                <span className="text-orange-500 text-lg">🎨</span>
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-white text-sm">تصميم مجاني</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">مع كل طلب شركات</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-red-500">
                              <div className="flex items-center gap-2">
                                <span className="text-red-500 text-lg">💼</span>
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-white text-sm">حساب شركات</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">دفع آجل 30 يوم</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-teal-500">
                              <div className="flex items-center gap-2">
                                <span className="text-teal-500 text-lg">🔄</span>
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-white text-sm">تعديلات مجانية</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">حتى الرضا التام</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-indigo-500">
                              <div className="flex items-center gap-2">
                                <span className="text-indigo-500 text-lg">📋</span>
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-white text-sm">تقارير شهرية</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">تقارير مفصلة للشركات</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-pink-500">
                              <div className="flex items-center gap-2">
                                <span className="text-pink-500 text-lg">🎁</span>
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-white text-sm">هدايا مجانية</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">مع كل طلب كبير</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-yellow-500">
                              <div className="flex items-center gap-2">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-white text-sm">خدمة VIP</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">مدير حساب مخصص</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400 arabic-font">
                              💼 أسعار تنافسية لبنرات شركات المقاولات وجميع احتياجات الطباعة
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                              🚀 تواصل معنا لمعرفة العروض الخاصة بالشركات
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            {t.contact}
          </motion.h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div
                className={`${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } p-6 rounded-2xl shadow-xl text-center`}
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/diwany.jpg"
                    alt="بطاقة الأعمال"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDc3OWE0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5OxPC90ZXh0Pjwvc3ZnPg==";
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  محمد الديواني
                </p>
                <p className="text-blue-600 font-medium mb-4">أخصائي تسويق</p>
                <div className="space-y-2 text-sm">
                  <p>+966540584952</p>
                  <p>dewany1979@gmail.com</p>
                  <p>المملكة العربية السعودية - الرياض</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/966540584952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <MessageSquare size={20} />
                  {t.whatsapp}
                </a>
                <a
                  href="mailto:dewany1979@gmail.com"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Mail size={20} />
                  {t.email}
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } p-8 rounded-2xl shadow-xl`}
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={language === "ar" ? "الاسم" : "Name"}
                    className={`w-full p-4 rounded-xl border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-200"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={
                      language === "ar" ? "البريد الإلكتروني" : "Email"
                    }
                    className={`w-full p-4 rounded-xl border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-200"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder={language === "ar" ? "رسالتك" : "Your Message"}
                    className={`w-full p-4 rounded-xl border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-200"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {language === "ar" ? "إرسال الرسالة" : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer
        className={`${
          isDarkMode ? "bg-gray-900" : "bg-gray-800"
        } text-white py-12 px-4`}
      >
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {language === "ar" ? "نبراس العرب" : "Nebras Al Arab"}
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="https://wa.me/966540584952"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare size={18} />
              {t.whatsapp}
            </a>
            <a
              href="mailto:dewany1979@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={18} />
              {t.email}
            </a>
            <a
              href="tel:+966540584952"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={18} />
              {t.phone}
            </a>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">{t.copyright}</p>
          </div>
        </div>
      </footer>

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
