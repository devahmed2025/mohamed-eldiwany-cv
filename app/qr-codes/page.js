"use client";
import { useState, useEffect } from "react";
import {
  Download,
  Share2,
  Phone,
  Mail,
  Globe,
  MapPin,
  MessageSquare,
  Facebook,
  QrCode,
  Copy,
  Check,
  Save,
  Edit3,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";

export default function QRCodesPage() {
  const [contactInfo, setContactInfo] = useState({
    companyName: "مطابع نبراس العرب",
    englishName: "Nebras Al Arab Printer",
    owner: "محمد الديواني",
    phone: "+966540584952",
    whatsapp: "+966540584952",
    email: "dewany1979@gmail.com",
    website: "https://www.nebras-alarab.com",
    facebook: "https://facebook.com/nebrasalarab",
    address: "الرياض، المملكة العربية السعودية",
    instagram: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    businessHours: "الأحد - الخميس: 8:00 ص - 6:00 م",
    services: "طباعة، تصميم، لافتات، استيكرات، كروت هوية",
  });

  const [showEditForm, setShowEditForm] = useState(false);
  const [generatedQR, setGeneratedQR] = useState(null);
  const [qrType, setQrType] = useState("comprehensive");
  const [copiedText, setCopiedText] = useState("");

  // Load saved contact info from localStorage
  useEffect(() => {
    const savedInfo = localStorage.getItem("qrContactInfo");
    if (savedInfo) {
      setContactInfo(JSON.parse(savedInfo));
    }
  }, []);

  const saveContactInfo = async () => {
    localStorage.setItem("qrContactInfo", JSON.stringify(contactInfo));
    setShowEditForm(false);
    await generateQRCode();
  };

  const generateQRCode = async () => {
    let qrData = "";

    switch (qrType) {
      case "comprehensive":
        qrData = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.owner}
ORG:${contactInfo.companyName}
TEL;TYPE=WORK:${contactInfo.phone}
TEL;TYPE=CELL:${contactInfo.whatsapp}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
ADR:;;${contactInfo.address}
NOTE:${contactInfo.services}
END:VCARD`;
        break;

      case "business-card":
        qrData = `Business Card:
${contactInfo.companyName}
${contactInfo.englishName}
Owner: ${contactInfo.owner}
Phone: ${contactInfo.phone}
WhatsApp: ${contactInfo.whatsapp}
Email: ${contactInfo.email}
Website: ${contactInfo.website}
Address: ${contactInfo.address}
Services: ${contactInfo.services}`;
        break;

      case "contact-only":
        qrData = `Contact Information:
Phone: ${contactInfo.phone}
WhatsApp: ${contactInfo.whatsapp}
Email: ${contactInfo.email}
Address: ${contactInfo.address}`;
        break;

      case "social-media":
        qrData = `Social Media Links:
Website: ${contactInfo.website}
Facebook: ${contactInfo.facebook}
Instagram: ${contactInfo.instagram || "N/A"}
Twitter: ${contactInfo.twitter || "N/A"}
LinkedIn: ${contactInfo.linkedin || "N/A"}
YouTube: ${contactInfo.youtube || "N/A"}`;
        break;

      default:
        qrData = contactInfo.website;
    }

    try {
      // Generate actual QR code
      const qrDataURL = await QRCode.toDataURL(qrData, {
        width: 300,
        margin: 2,
        color: {
          dark: "#10b981",
          light: "#ffffff",
        },
      });

      setGeneratedQR({
        data: qrData,
        type: qrType,
        timestamp: new Date().toISOString(),
        qrDataURL: qrDataURL,
      });
    } catch (error) {
      console.error("Error generating QR code:", error);
      alert("Error generating QR code. Please try again.");
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const downloadQR = () => {
    if (!generatedQR || !generatedQR.qrDataURL) return;

    // Download the generated QR code directly
    const link = document.createElement("a");
    link.download = `qr-${qrType}-${Date.now()}.png`;
    link.href = generatedQR.qrDataURL;
    link.click();
  };

  const shareQR = () => {
    if (navigator.share) {
      navigator.share({
        title: `QR Code - ${contactInfo.companyName}`,
        text: `QR Code for ${qrType}: ${contactInfo.companyName}`,
        url: window.location.href,
      });
    } else {
      copyToClipboard(generatedQR?.data || "", "qr-data");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12">
                <img
                  src="/dwn/Logo.svg"
                  alt="Nebras Al Arab Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-gray-800">
                  Nebras Al Arab
                </h1>
                <p className="text-sm text-gray-600 arabic-font-bold">
                  مطابع نبراس العرب
                </p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                الرئيسية
              </Link>
              <Link
                href="/billing"
                className="text-gray-700 hover:text-primary-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                عرض سعر
              </Link>
              <Link
                href="/qr-codes"
                className="text-primary-600 font-semibold px-4 py-2 rounded-lg bg-primary-50"
              >
                رموز QR
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-8 pb-10">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              مولد رموز QR الديناميكي
            </h1>
            <p className="text-lg text-gray-600 arabic-font max-w-2xl mx-auto">
              أدخل معلوماتك واصنع رمز QR شامل لجميع بيانات التواصل الخاصة بك
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information Form */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    معلومات التواصل
                  </h3>
                  <button
                    onClick={() => setShowEditForm(!showEditForm)}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <Edit3 size={16} />
                    {showEditForm ? "إلغاء" : "تعديل"}
                  </button>
                </div>

                {showEditForm ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          اسم الشركة (عربي)
                        </label>
                        <input
                          type="text"
                          value={contactInfo.companyName}
                          onChange={(e) =>
                            setContactInfo((prev) => ({
                              ...prev,
                              companyName: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name (English)
                        </label>
                        <input
                          type="text"
                          value={contactInfo.englishName}
                          onChange={(e) =>
                            setContactInfo((prev) => ({
                              ...prev,
                              englishName: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          اسم المالك
                        </label>
                        <input
                          type="text"
                          value={contactInfo.owner}
                          onChange={(e) =>
                            setContactInfo((prev) => ({
                              ...prev,
                              owner: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          رقم الهاتف
                        </label>
                        <input
                          type="tel"
                          value={contactInfo.phone}
                          onChange={(e) =>
                            setContactInfo((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          رقم الواتساب
                        </label>
                        <input
                          type="tel"
                          value={contactInfo.whatsapp}
                          onChange={(e) =>
                            setContactInfo((prev) => ({
                              ...prev,
                              whatsapp: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) =>
                            setContactInfo((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الموقع الإلكتروني
                      </label>
                      <input
                        type="url"
                        value={contactInfo.website}
                        onChange={(e) =>
                          setContactInfo((prev) => ({
                            ...prev,
                            website: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        العنوان
                      </label>
                      <textarea
                        value={contactInfo.address}
                        onChange={(e) =>
                          setContactInfo((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }))
                        }
                        rows="2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الخدمات
                      </label>
                      <input
                        type="text"
                        value={contactInfo.services}
                        onChange={(e) =>
                          setContactInfo((prev) => ({
                            ...prev,
                            services: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 bg-white"
                        placeholder="مثال: طباعة، تصميم، لافتات"
                      />
                    </div>

                    <button
                      onClick={saveContactInfo}
                      className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                    >
                      حفظ المعلومات
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-500">🏢</span>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {contactInfo.companyName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {contactInfo.englishName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-500">👤</span>
                      <span className="text-gray-700">{contactInfo.owner}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-500">📞</span>
                      <span className="text-gray-700">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-500">✉️</span>
                      <span className="text-gray-700">{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-500">🌐</span>
                      <span className="text-gray-700">
                        {contactInfo.website}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-500">📍</span>
                      <span className="text-gray-700">
                        {contactInfo.address}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* QR Type Selection */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  نوع رمز QR
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      value: "comprehensive",
                      label: "QR شامل (بطاقة أعمال)",
                      desc: "جميع المعلومات في رمز واحد",
                    },
                    {
                      value: "business-card",
                      label: "بطاقة أعمال",
                      desc: "معلومات الشركة الأساسية",
                    },
                    {
                      value: "contact-only",
                      label: "معلومات التواصل فقط",
                      desc: "الهاتف والبريد والعنوان",
                    },
                    {
                      value: "social-media",
                      label: "وسائل التواصل الاجتماعي",
                      desc: "روابط المواقع والتطبيقات",
                    },
                  ].map((type) => (
                    <label
                      key={type.value}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="qrType"
                        value={type.value}
                        checked={qrType === type.value}
                        onChange={(e) => setQrType(e.target.value)}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {type.label}
                        </p>
                        <p className="text-sm text-gray-600">{type.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <button
                  onClick={generateQRCode}
                  className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 font-medium flex items-center justify-center gap-2"
                >
                  <RefreshCw size={18} />
                  إنشاء رمز QR
                </button>
              </div>
            </div>

            {/* Generated QR Code */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  رمز QR المُنشأ
                </h3>

                {generatedQR ? (
                  <div className="text-center space-y-6">
                    {/* QR Code Display */}
                    <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                      {generatedQR.qrDataURL ? (
                        <div className="w-64 h-64 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center relative">
                          <img
                            src={generatedQR.qrDataURL}
                            alt="Generated QR Code"
                            className="w-60 h-60 object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                              <img
                                src="/dwn/Logo.svg"
                                alt="Logo"
                                className="w-12 h-12 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-64 h-64 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center">
                          <div className="text-center">
                            <QrCode className="w-32 h-32 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500">
                              جاري إنشاء QR Code...
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* QR Info */}
                    <div className="text-left">
                      <p className="text-sm text-gray-600 mb-2">
                        نوع QR:{" "}
                        <span className="font-semibold text-gray-800">
                          {qrType}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        تاريخ الإنشاء:{" "}
                        <span className="font-semibold text-gray-800">
                          {new Date(generatedQR.timestamp).toLocaleString(
                            "ar-SA"
                          )}
                        </span>
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={downloadQR}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 font-medium"
                      >
                        <Download size={18} />
                        تحميل QR Code
                      </button>

                      <button
                        onClick={shareQR}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
                      >
                        <Share2 size={18} />
                        مشاركة
                      </button>

                      <button
                        onClick={() =>
                          copyToClipboard(generatedQR.data, "qr-data")
                        }
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium"
                      >
                        {copiedText === "qr-data" ? (
                          <Check size={18} className="text-green-600" />
                        ) : (
                          <Copy size={18} />
                        )}
                        نسخ البيانات
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <QrCode className="w-24 h-24 mx-auto mb-4 text-gray-300" />
                    <p>اضغط على "إنشاء رمز QR" لإنشاء رمز QR ديناميكي</p>
                  </div>
                )}
              </div>

              {/* QR Data Preview */}
              {generatedQR && (
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    معاينة البيانات
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                      {generatedQR.data}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
