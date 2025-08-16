import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
// ...existing code...
export const dynamic = "force-static";
// ...existing code...
export const metadata = {
  title: "عنّا - مطابع نبراس العرب",
  description:
    "تعرف على مطابع نبراس العرب، تاريخنا، فريقنا، والتزامنا بتقديم خدمات طباعة استثنائية في المملكة العربية السعودية.",
  keywords:
    "عن مطابع نبراس العرب، تاريخ شركة الطباعة، الفريق، خدمات الطباعة في السعودية",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      {/* قسم البطل */}
      <section className="pt-24 pb-12 px-4 texture-bg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            عنّا
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 arabic-font">
            معلومات عنا - مطابع نبراس العرب
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            اكتشف قصتنا، مهمتنا، والفريق المتفاني وراء مطابع نبراس العرب
          </p>
        </div>
      </section>

      {/* قسم قصة الشركة */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center"
                alt="منشأة طباعة حديثة"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center dark:text-white mb-6">
                قصتنا
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                تأسست مطابع نبراس العرب برؤية لتصبح الشركة الرائدة في مجال
                الطباعة في المملكة العربية السعودية. بدأنا كشركة محلية صغيرة
                ونمنا لخدمة العملاء في جميع أنحاء المنطقة بحلول الطباعة الشاملة
                لدينا.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                التزامنا بالجودة، الابتكار، ورضا العملاء جعلنا الخيار الموثوق
                للشركات، والمؤسسات، والأفراد الباحثين عن خدمات طباعة احترافية.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    500+
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    عملاء سعداء
                  </p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    1000+
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    مشاريع مكتملة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المهمة والرؤية */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                مهمتنا
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                تقديم خدمات طباعة استثنائية تتجاوز توقعات عملائنا من خلال
                التكنولوجيا المبتكرة، والجودة العالية، وخدمة العملاء المتميزة.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                رؤيتنا
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                أن نكون الشركة الرائدة في مجال الطباعة في المملكة العربية
                السعودية، معترف بها بجودتنا، ابتكارنا، والتزامنا بمساعدة الشركات
                على التواصل بفعالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الفريق */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            تعرف على فريقنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
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
                  alt="diwany"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>

              <p className="text-gray-600 dark:text-gray-300 arabic-font mb-2">
                محمد الديواني{" "}
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
                  +966540584952
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

      {/* نظرة عامة على الخدمات */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            لماذا تختارنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                التميز في الجودة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                معدات متطورة ومواد عالية الجودة تضمن أن تكون كل طباعة بأعلى
                المعايير.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                تسليم سريع
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أوقات تسليم سريعة دون المساومة على الجودة، تلبي مواعيدك النهائية
                في كل مرة.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                أسعار تنافسية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                أسعار ميسورة لجميع خدماتنا مع حزم مرنة تناسب ميزانيتك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة للعمل */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            هل أنت جاهز للعمل معنا؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصلوا معنا اليوم لمناقشة احتياجاتكم من الطباعة والحصول على عرض
            أسعار مجاني لمشروعكم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966540584952"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <span>📱</span>
              تواصلوا معنا عبر واتساب
            </a>
            <Link
              href="/"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              عرض خدماتنا
            </Link>
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
