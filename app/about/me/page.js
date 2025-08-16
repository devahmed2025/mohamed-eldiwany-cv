import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/Header";
// ...existing code...
export const dynamic = "force-static";
// ...existing code...
export const metadata = {
  title: "عني - مطابع نبراس العرب",
  description:
    "تعرف على فريق مطابع نبراس العرب، خبراتهم، وتفانيهم في تقديم خدمات طباعة استثنائية في المملكة العربية السعودية.",
  keywords: "عني مطابع نبراس العرب، خبرة الفريق، خدمات الطباعة في السعودية",
};

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      {/* قسم البطل */}
      <section className="pt-24 pb-12 px-4 texture-bg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            عني
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 arabic-font">
            عني - مطابع نبراس العرب
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            تعرف على الأفراد الذين يقودون مطابع نبراس العرب بالشغف والخبرة.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            تعرف على فريقنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* المدير */}
            {/* <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/amr.jpg"
                  alt="عمرو الشحات"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                عمرو الشحات
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                مدير
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                يقود الشركة برؤية استراتيجية ويضمن التميز التشغيلي في جميع خدمات
                الطباعة لدينا.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/966153268968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <span>📱</span>
                  +966153268968
                </a>
              </div>
            </div> */}

            {/* أخصائي التسويق */}
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/diwany.jpg"
                  alt="محمد الديواني"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                محمد الديواني{" "}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 arabic-font mb-2">
                محمد الديواني
              </p>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                أخصائي تسويق
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                يقود مبادراتنا التسويقية ويبني علاقات قوية مع العملاء في جميع
                أنحاء المملكة العربية السعودية.
              </p>
              <div className="flex flex-col gap-2 items-center">
                <a
                  href="https://wa.me/966540584952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <span>📱</span>
                  ergenza +966540584952
                </a>
                <a
                  href="mailto:dewany1979@gmail.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <span>✉️</span>
                  بريد إلكتروني
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* التذييل */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">مطابع نبراس العرب</h3>
            <p className="text-gray-300 arabic-font">مطابع نبراس العرب</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <a
              href="https://wa.me/966540584952"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <span>📱</span>
              واتساب
            </a>
            <a
              href="mailto:dewany1979@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <span>✉️</span>
              بريد إلكتروني
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 مطابع نبراس العرب. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
