
// // // // "use client";
// // // // import { useState, useEffect } from "react";
// // // // import {
// // // //   Plus,
// // // //   Trash2,
// // // //   Download,
// // // //   Printer,
// // // //   Save,
// // // //   Heart,
// // // //   Share2,
// // // //   MessageCircle,
// // // //   Send,
// // // //   User,
// // // //   Lock,
// // // //   X,
// // // //   Star,
// // // // } from "lucide-react";
// // // // import Image from "next/image";
// // // // import Link from "next/link";

// // // // export default function BillingPage() {
// // // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // // //   const [username, setUsername] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [customerName, setCustomerName] = useState("");
// // // //   const [customerAddress, setCustomerAddress] = useState("");
// // // //   const [showLoginModal, setShowLoginModal] = useState(true);
// // // //   const [showSocialModal, setShowSocialModal] = useState(false);
// // // //   const [showCustomerModal, setShowCustomerModal] = useState(false);
// // // //   const [loginAttempts, setLoginAttempts] = useState(0);
// // // //   const [loginDisabled, setLoginDisabled] = useState(false);
// // // //   const [loginDisabledTime, setLoginDisabledTime] = useState(0);
// // // //   const [likes, setLikes] = useState(0);
// // // //   const [loves, setLoves] = useState(0);
// // // //   const [comments, setComments] = useState([]);
// // // //   const [newComment, setNewComment] = useState("");
// // // //   const [isLiked, setIsLiked] = useState(false);
// // // //   const [isLoved, setIsLoved] = useState(false);

// // // //   // Load social data from localStorage
// // // //   useEffect(() => {
// // // //     const savedLikes = localStorage.getItem("billingLikes");
// // // //     const savedLoves = localStorage.getItem("billingLoves");
// // // //     const savedComments = localStorage.getItem("billingComments");
// // // //     const savedIsLiked = localStorage.getItem("billingIsLiked");
// // // //     const savedIsLoved = localStorage.getItem("billingIsLoved");

// // // //     if (savedLikes) setLikes(parseInt(savedLikes));
// // // //     if (savedLoves) setLoves(parseInt(savedLoves));
// // // //     if (savedComments) setComments(JSON.parse(savedComments));
// // // //     if (savedIsLiked) setIsLiked(savedIsLiked === "true");
// // // //     if (savedIsLoved) setIsLoved(savedIsLoved === "true");
// // // //   }, []);

// // // //   const [invoiceData, setInvoiceData] = useState({
// // // //     invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
// // // //     date: new Date().toISOString().split("T")[0],
// // // //     customerName: "",
// // // //     customerAddress: "",
// // // //     customerPhone: "",
// // // //     customerEmail: "",
// // // //     items: [
// // // //       {
// // // //         id: 1,
// // // //         name: "",
// // // //         description: "",
// // // //         quantity: 1,
// // // //         price: 0,
// // // //         total: 0,
// // // //       },
// // // //     ],
// // // //   });

// // // //   const [companyInfo] = useState({
// // // //     name: "مطابع نبراس العرب",
// // // //     englishName: "Nebras Al Arab Printer",
// // // //     owner: "محمد الديواني",
// // // //     phone: "+966540584952",
// // // //     email: "dewany1979@gmail.com",
// // // //     address: "الرياض، المملكة العربية السعودية",
// // // //     website: "www.nebras-alarab.com",
// // // //   });

// // // //   // Check authentication on component mount
// // // //   useEffect(() => {
// // // //     const savedAuth = localStorage.getItem("billingAuth");
// // // //     const lastLogin = localStorage.getItem("lastLogin");

// // // //     if (savedAuth) {
// // // //       const authData = JSON.parse(savedAuth);
// // // //       // Check if session is still valid (24 hours)
// // // //       if (
// // // //         lastLogin &&
// // // //         Date.now() - new Date(lastLogin).getTime() < 24 * 60 * 60 * 1000
// // // //       ) {
// // // //         if (authData.username === "dewany") {
// // // //           setIsAuthenticated(true);
// // // //           setShowLoginModal(false);
// // // //           setUsername(authData.username);
// // // //           setCustomerName(authData.customerName || "");
// // // //           setCustomerAddress(authData.customerAddress || "");
// // // //         }
// // // //       } else {
// // // //         // Session expired, clear storage
// // // //         localStorage.removeItem("billingAuth");
// // // //         localStorage.removeItem("lastLogin");
// // // //       }
// // // //     }

// // // //     // Check if login is temporarily disabled
// // // //     const disabledUntil = localStorage.getItem("loginDisabledUntil");
// // // //     if (disabledUntil && Date.now() < parseInt(disabledUntil)) {
// // // //       setLoginDisabled(true);
// // // //       setLoginDisabledTime(parseInt(disabledUntil) - Date.now());
// // // //     }
// // // //   }, []);

// // // //   // Countdown for login disable
// // // //   useEffect(() => {
// // // //     let timer;
// // // //     if (loginDisabled && loginDisabledTime > 0) {
// // // //       timer = setInterval(() => {
// // // //         setLoginDisabledTime((prev) => {
// // // //           if (prev <= 1000) {
// // // //             setLoginDisabled(false);
// // // //             localStorage.removeItem("loginDisabledUntil");
// // // //             localStorage.removeItem("loginAttempts");
// // // //             return 0;
// // // //           }
// // // //           return prev - 1000;
// // // //         });
// // // //       }, 1000);
// // // //     }
// // // //     return () => clearInterval(timer);
// // // //   }, [loginDisabled]);

// // // //   const handleLogin = () => {
// // // //     if (loginDisabled) {
// // // //       alert(
// // // //         `تم تعطيل محاولات تسجيل الدخول مؤقتًا. الرجاء المحاولة مرة أخرى بعد ${Math.ceil(
// // // //           loginDisabledTime / 1000
// // // //         )} ثانية.`
// // // //       );
// // // //       return;
// // // //     }

// // // //     if (username === "dewany" && password === "dewany123") {
// // // //       setIsAuthenticated(true);
// // // //       setShowLoginModal(false);
// // // //       setLoginAttempts(0);

// // // //       const authData = {
// // // //         username,
// // // //         customerName,
// // // //         customerAddress,
// // // //       };

// // // //       localStorage.setItem("billingAuth", JSON.stringify(authData));
// // // //       localStorage.setItem("lastLogin", new Date().toISOString());
// // // //       localStorage.removeItem("loginAttempts");
// // // //       localStorage.removeItem("loginDisabledUntil");
// // // //     } else {
// // // //       const newAttempts = loginAttempts + 1;
// // // //       setLoginAttempts(newAttempts);

// // // //       if (newAttempts >= 3) {
// // // //         // Disable login for 5 minutes after 3 failed attempts
// // // //         const disableUntil = Date.now() + 5 * 60 * 1000;
// // // //         setLoginDisabled(true);
// // // //         setLoginDisabledTime(5 * 60 * 1000);
// // // //         localStorage.setItem("loginDisabledUntil", disableUntil.toString());
// // // //         localStorage.setItem("loginAttempts", newAttempts.toString());

// // // //         alert(
// // // //           "تم تعطيل تسجيل الدخول مؤقتًا بسبب كثرة المحاولات الفاشلة. الرجاء المحاولة مرة أخرى بعد 5 دقائق."
// // // //         );
// // // //       } else {
// // // //         localStorage.setItem("loginAttempts", newAttempts.toString());
// // // //         alert(
// // // //           "بيانات الدخول غير صحيحة. فقط المستخدمون المصرح لهم يمكنهم الوصول إلى هذه الصفحة."
// // // //         );
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleLogout = () => {
// // // //     setIsAuthenticated(false);
// // // //     setShowLoginModal(true);
// // // //     setUsername("");
// // // //     setPassword("");
// // // //     localStorage.removeItem("billingAuth");
// // // //     localStorage.removeItem("lastLogin");
// // // //   };

// // // //   const saveCustomerInfo = () => {
// // // //     // Update auth data with new customer info
// // // //     const authData = {
// // // //       username,
// // // //       customerName,
// // // //       customerAddress,
// // // //     };

// // // //     localStorage.setItem("billingAuth", JSON.stringify(authData));
// // // //     localStorage.setItem("customerName", customerName);
// // // //     localStorage.setItem("customerAddress", customerAddress);
// // // //     setShowCustomerModal(false);
// // // //   };

// // // //   const addItem = () => {
// // // //     const newItem = {
// // // //       id: Date.now(),
// // // //       name: "",
// // // //       description: "",
// // // //       quantity: 1,
// // // //       price: 0,
// // // //       total: 0,
// // // //     };
// // // //     setInvoiceData((prev) => ({
// // // //       ...prev,
// // // //       items: [...prev.items, newItem],
// // // //     }));
// // // //   };

// // // //   const removeItem = (id) => {
// // // //     setInvoiceData((prev) => ({
// // // //       ...prev,
// // // //       items: prev.items.filter((item) => item.id !== id),
// // // //     }));
// // // //   };

// // // //   const updateItem = (id, field, value) => {
// // // //     setInvoiceData((prev) => ({
// // // //       ...prev,
// // // //       items: prev.items.map((item) => {
// // // //         if (item.id === id) {
// // // //           const updatedItem = { ...item, [field]: value };
// // // //           if (field === "quantity" || field === "price") {
// // // //             updatedItem.total = updatedItem.quantity * updatedItem.price;
// // // //           }
// // // //           return updatedItem;
// // // //         }
// // // //         return item;
// // // //       }),
// // // //     }));
// // // //   };

// // // //   const calculateSubtotal = () => {
// // // //     return invoiceData.items.reduce((sum, item) => sum + item.total, 0);
// // // //   };

// // // //   const calculateTax = () => {
// // // //     return calculateSubtotal() * 0.15;
// // // //   };

// // // //   const calculateTotal = () => {
// // // //     return calculateSubtotal() + calculateTax();
// // // //   };

// // // //   const saveInvoice = () => {
// // // //     const invoiceToSave = {
// // // //       ...invoiceData,
// // // //       subtotal: calculateSubtotal(),
// // // //       tax: calculateTax(),
// // // //       total: calculateTotal(),
// // // //       companyInfo,
// // // //     };

// // // //     const dataStr = JSON.stringify(invoiceToSave, null, 2);
// // // //     const dataBlob = new Blob([dataStr], { type: "application/json" });

// // // //     const link = document.createElement("a");
// // // //     link.href = URL.createObjectURL(dataBlob);
// // // //     link.download = `invoice-${invoiceData.invoiceNumber}.json`;
// // // //     link.click();
// // // //   };

// // // //   const sendWhatsApp = () => {
// // // //     const message = `مرحباً، أريد عرض سعر من مطابع نبراس العرب

// // // // اسم العميل: ${customerName || "غير محدد"}
// // // // العنوان: ${customerAddress || "غير محدد"}

// // // // تفاصيل الطلب:
// // // // ${invoiceData.items
// // // //   .map(
// // // //     (item) =>
// // // //       `- ${item.name}: ${item.quantity} × ${item.price} ريال = ${item.total} ريال`
// // // //   )
// // // //   .join("\n")}

// // // // المجموع: ${calculateTotal().toFixed(2)} ريال

// // // // رقم الفاتورة: ${invoiceData.invoiceNumber}`;

// // // //     const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
// // // //       /\D/g,
// // // //       ""
// // // //     )}?text=${encodeURIComponent(message)}`;
// // // //     window.open(whatsappUrl, "_blank");
// // // //   };

// // // //   const generateAndSendPDF = () => {
// // // //     // Create invoice content for PDF
// // // //     const invoiceContent = `
// // // //       <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
// // // //         <!-- Header with Logo -->
// // // //         <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #10b981; padding-bottom: 20px;">
// // // //           <img src="/dwn/Logo.svg" alt="Logo" style="width: 80px; height: 80px; margin-bottom: 10px;">
// // // //           <h1 style="color: #10b981; margin: 0; font-size: 28px;">مطابع نبراس العرب</h1>
// // // //           <p style="color: #6b7280; margin: 5px 0; font-size: 16px;">Nebras Al Arab Printer</p>
// // // //           <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">محمد الديواني</p>
// // // //         </div>

// // // //         <!-- Invoice Details -->
// // // //         <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
// // // //           <div>
// // // //             <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 24px;">عرض سعر</h2>
// // // //             <p style="margin: 5px 0; color: #6b7280;"><strong>رقم العرض:</strong> ${
// // // //               invoiceData.invoiceNumber
// // // //             }</p>
// // // //             <p style="margin: 5px 0; color: #6b7280;"><strong>التاريخ:</strong> ${
// // // //               invoiceData.date
// // // //             }</p>
// // // //           </div>
// // // //           <div style="text-align: right;">
// // // //             <h3 style="color: #1f2937; margin: 0 0 10px 0;">معلومات العميل</h3>
// // // //             <p style="margin: 5px 0; color: #6b7280;"><strong>الاسم:</strong> ${
// // // //               invoiceData.customerName || customerName || "غير محدد"
// // // //             }</p>
// // // //             <p style="margin: 5px 0; color: #6b7280;"><strong>العنوان:</strong> ${
// // // //               invoiceData.customerAddress || customerAddress || "غير محدد"
// // // //             }</p>
// // // //             <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
// // // //               invoiceData.customerPhone || "غير محدد"
// // // //             }</p>
// // // //             <p style="margin: 5px 0; color: #6b7280;"><strong>البريد:</strong> ${
// // // //               invoiceData.customerEmail || "غير محدد"
// // // //             }</p>
// // // //           </div>
// // // //         </div>

// // // //         <!-- Items Table -->
// // // //         <div style="margin-bottom: 30px;">
// // // //           <h3 style="color: #1f2937; margin: 0 0 15px 0;">المنتجات</h3>
// // // //           <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
// // // //             <thead>
// // // //               <tr style="background-color: #f9fafb;">
// // // //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #1f2937;">المنتج</th>
// // // //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الكمية</th>
// // // //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">السعر</th>
// // // //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الإجمالي</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               ${invoiceData.items
// // // //                 .map(
// // // //                   (item) => `
// // // //                 <tr>
// // // //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #374151;">${
// // // //                     item.name || "غير محدد"
// // // //                   }</td>
// // // //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${
// // // //                     item.quantity
// // // //                   }</td>
// // // //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.price.toFixed(
// // // //                     2
// // // //                   )} ريال</td>
// // // //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.total.toFixed(
// // // //                     2
// // // //                   )} ريال</td>
// // // //                 </tr>
// // // //               `
// // // //                 )
// // // //                 .join("")}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //         <!-- Totals -->
// // // //         <div style="text-align: left; margin-bottom: 30px;">
// // // //           <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
// // // //             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
// // // //               <span style="color: #6b7280;">المجموع الفرعي:</span>
// // // //               <span style="color: #1f2937; font-weight: bold;">${calculateSubtotal().toFixed(
// // // //                 2
// // // //               )} ريال</span>
// // // //             </div>
// // // //             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
// // // //               <span style="color: #6b7280;">الضريبة (15%):</span>
// // // //               <span style="color: #1f2937; font-weight: bold;">${calculateTax().toFixed(
// // // //                 2
// // // //               )} ريال</span>
// // // //             </div>
// // // //             <div style="display: flex; justify-content: space-between; border-top: 1px solid #e5e7eb; padding-top: 10px;">
// // // //               <span style="color: #1f2937; font-weight: bold; font-size: 18px;">الإجمالي:</span>
// // // //               <span style="color: #10b981; font-weight: bold; font-size: 18px;">${calculateTotal().toFixed(
// // // //                 2
// // // //               )} ريال</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <!-- Company Info -->
// // // //         <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; text-align: center;">
// // // //           <h4 style="color: #1f2937; margin: 0 0 15px 0;">معلومات الشركة</h4>
// // // //           <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
// // // //             companyInfo.phone
// // // //           }</p>
// // // //           <p style="margin: 5px 0; color: #6b7280;"><strong>البريد الإلكتروني:</strong> ${
// // // //             companyInfo.email
// // // //           }</p>
// // // //           <p style="margin: 5px 0; color: #6b7280;"><strong>الموقع:</strong> ${
// // // //             companyInfo.website
// // // //           }</p>
// // // //           <p style="margin: 5px 0; color: #6b7280;"><strong>العنوان:</strong> ${
// // // //             companyInfo.address
// // // //           }</p>
// // // //         </div>

// // // //         <!-- Footer -->
// // // //         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
// // // //           <p>شكراً لاختياركم مطابع نبراس العرب</p>
// // // //           <p>Thank you for choosing Nebras Al Arab Printer</p>
// // // //         </div>
// // // //       </div>
// // // //     `;

// // // //     // Create a new window with the invoice content
// // // //     const printWindow = window.open("", "_blank");
// // // //     printWindow.document.write(`
// // // //       <!DOCTYPE html>
// // // //       <html dir="rtl">
// // // //         <head>
// // // //           <title>عرض سعر - ${invoiceData.invoiceNumber}</title>
// // // //           <meta charset="utf-8">
// // // //           <style>
// // // //             body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
// // // //             @media print {
// // // //               body { margin: 0; }
// // // //               .no-print { display: none; }
// // // //             }
// // // //           </style>
// // // //         </head>
// // // //         <body>
// // // //           ${invoiceContent}
// // // //           <div class="no-print" style="text-align: center; margin-top: 30px;">
// // // //             <button onclick="window.print()" style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
// // // //               طباعة PDF
// // // //             </button>
// // // //             <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
// // // //               إغلاق
// // // //             </button>
// // // //           </div>
// // // //         </body>
// // // //       </html>
// // // //     `);
// // // //     printWindow.document.close();

// // // //     // After a short delay, send WhatsApp message with PDF info
// // // //     setTimeout(() => {
// // // //       const pdfMessage = `مرحباً، تم إنشاء عرض سعر كامل

// // // // رقم العرض: ${invoiceData.invoiceNumber}
// // // // اسم العميل: ${customerName || "غير محدد"}
// // // // المجموع: ${calculateTotal().toFixed(2)} ريال

// // // // تم إنشاء PDF كامل للعرض مع جميع التفاصيل.
// // // // يمكنك طباعته أو حفظه كملف PDF.`;

// // // //       const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
// // // //         /\D/g,
// // // //         ""
// // // //       )}?text=${encodeURIComponent(pdfMessage)}`;
// // // //       window.open(whatsappUrl, "_blank");
// // // //     }, 1000);
// // // //   };

// // // //   const handleLike = () => {
// // // //     const newLikes = isLiked ? likes - 1 : likes + 1;
// // // //     setLikes(newLikes);
// // // //     setIsLiked(!isLiked);
// // // //     localStorage.setItem("billingLikes", newLikes.toString());
// // // //     localStorage.setItem("billingIsLiked", (!isLiked).toString());
// // // //   };

// // // //   const handleLove = () => {
// // // //     const newLoves = isLoved ? loves - 1 : loves + 1;
// // // //     setLoves(newLoves);
// // // //     setIsLoved(!isLoved);
// // // //     localStorage.setItem("billingLoves", newLoves.toString());
// // // //     localStorage.setItem("billingIsLoved", (!isLoved).toString());
// // // //   };

// // // //   const addComment = () => {
// // // //     if (newComment.trim()) {
// // // //       const comment = {
// // // //         id: Date.now(),
// // // //         text: newComment,
// // // //         author: customerName || "مستخدم",
// // // //         timestamp: new Date().toLocaleString("ar-SA"),
// // // //       };
// // // //       const newComments = [...comments, comment];
// // // //       setComments(newComments);
// // // //       setNewComment("");
// // // //       localStorage.setItem("billingComments", JSON.stringify(newComments));
// // // //     }
// // // //   };

// // // //   const sharePage = () => {
// // // //     if (navigator.share) {
// // // //       navigator.share({
// // // //         title: "عرض سعر - مطابع نبراس العرب",
// // // //         text: "انضم إلينا للحصول على أفضل عروض الطباعة",
// // // //         url: window.location.href,
// // // //       });
// // // //     } else {
// // // //       navigator.clipboard.writeText(window.location.href);
// // // //       alert("تم نسخ الرابط إلى الحافظة");
// // // //     }
// // // //   };

// // // //   // If not authenticated, show customer input form first
// // // //   if (!isAuthenticated) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
// // // //         {/* Login Modal - Always visible when not authenticated */}
// // // //         <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
// // // //           <div className="text-center mb-8">
// // // //             <div className="w-20 h-20 mx-auto mb-4">
// // // //               <img
// // // //                 src="/dwn/Logo.svg"
// // // //                 alt="Nebras Al Arab Logo"
// // // //                 className="w-full h-full object-contain"
// // // //               />
// // // //             </div>
// // // //             <h1 className="text-2xl font-bold text-gray-800 mb-2">
// // // //               تسجيل دخول الموظفين
// // // //             </h1>
// // // //             <p className="text-gray-600 arabic-font">للموظفين المصرح لهم فقط</p>
// // // //             {loginDisabled && (
// // // //               <p className="text-red-500 mt-2">
// // // //                 تم تعطيل التسجيل مؤقتًا. الرجاء المحاولة بعد{" "}
// // // //                 {Math.ceil(loginDisabledTime / 1000)} ثانية.
// // // //               </p>
// // // //             )}
// // // //           </div>

// // // //           <div className="space-y-4">
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 اسم المستخدم
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={username}
// // // //                 onChange={(e) => setUsername(e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                 placeholder="أدخل اسم المستخدم"
// // // //                 disabled={loginDisabled}
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 كلمة المرور
// // // //               </label>
// // // //               <input
// // // //                 type="password"
// // // //                 value={password}
// // // //                 onChange={(e) => setPassword(e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                 placeholder="أدخل كلمة المرور"
// // // //                 disabled={loginDisabled}
// // // //                 onKeyPress={(e) =>
// // // //                   e.key === "Enter" && !loginDisabled && handleLogin()
// // // //                 }
// // // //               />
// // // //             </div>
// // // //             <button
// // // //               onClick={handleLogin}
// // // //               disabled={loginDisabled}
// // // //               className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
// // // //             >
// // // //               تسجيل الدخول
// // // //             </button>
// // // //           </div>

// // // //           <div className="mt-6 text-center text-sm text-gray-500">
// // // //             <p>فقط المستخدمين المصرح لهم يمكنهم الوصول</p>
// // // //             {/* <p className="mt-1">Username: dewany | Password: dewany123</p> */}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }
// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
// // // //       {/* Header */}
// // // //       <header className="bg-white shadow-lg border-b border-gray-200">
// // // //         <div className="container mx-auto px-4 py-4">
// // // //           <div className="flex items-center justify-between">
// // // //             <Link href="/" className="flex items-center space-x-3">
// // // //               <div className="w-12 h-12">
// // // //                 <img
// // // //                   src="/dwn/Logo.svg"
// // // //                   alt="Nebras Al Arab Logo"
// // // //                   className="w-full h-full object-contain"
// // // //                 />
// // // //               </div>
// // // //               <div className="text-left">
// // // //                 <h1 className="text-xl font-bold text-gray-800">
// // // //                   Nebras Al Arab
// // // //                 </h1>
// // // //                 <p className="text-sm text-gray-600 arabic-font-bold">
// // // //                   مطابع نبراس العرب
// // // //                 </p>
// // // //               </div>
// // // //             </Link>

// // // //             <div className="flex items-center space-x-4">
// // // //               <div className="text-right">
// // // //                 <p className="text-sm text-gray-600">مرحباً بعودتك</p>
// // // //                 <p className="font-semibold text-primary-600">
// // // //                   {customerName || "مستخدم"}
// // // //                 </p>
// // // //                 {username && (
// // // //                   <p className="text-xs text-gray-500">المستخدم: {username}</p>
// // // //                 )}
// // // //               </div>
// // // //               <button
// // // //                 onClick={() => setShowCustomerModal(true)}
// // // //                 className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50"
// // // //               >
// // // //                 <User size={18} />
// // // //                 تعديل البيانات
// // // //               </button>
// // // //               <button
// // // //                 onClick={handleLogout}
// // // //                 className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors rounded-lg hover:bg-red-50"
// // // //               >
// // // //                 <Lock size={18} />
// // // //                 تسجيل الخروج
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       <div className="pt-8 pb-10">
// // // //         <div className="container mx-auto px-4">
// // // //           {/* Welcome Section */}
// // // //           <div className="text-center mb-8">
// // // //             <h1 className="text-4xl font-bold text-gray-800 mb-2">عرض سعر</h1>
// // // //             <p className="text-lg text-gray-600 arabic-font mb-4">
// // // //               نظام إنشاء عروض الأسعار والفواتير
// // // //             </p>

// // // //             {/* Social Actions */}
// // // //             <div className="flex items-center justify-center gap-4 mb-6">
// // // //               <button
// // // //                 onClick={handleLike}
// // // //                 className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
// // // //                   isLiked
// // // //                     ? "bg-red-100 text-red-600"
// // // //                     : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
// // // //                 }`}
// // // //               >
// // // //                 <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
// // // //                 {likes}
// // // //               </button>
// // // //               <button
// // // //                 onClick={handleLove}
// // // //                 className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
// // // //                   isLoved
// // // //                     ? "bg-pink-100 text-pink-600"
// // // //                     : "bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600"
// // // //                 }`}
// // // //               >
// // // //                 <Star size={18} fill={isLoved ? "currentColor" : "none"} />
// // // //                 {loves}
// // // //               </button>
// // // //               <button
// // // //                 onClick={sharePage}
// // // //                 className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-200"
// // // //               >
// // // //                 <Share2 size={18} />
// // // //                 مشاركة
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => setShowSocialModal(true)}
// // // //                 className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-all duration-200"
// // // //               >
// // // //                 <MessageCircle size={18} />
// // // //                 تعليقات ({comments.length})
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //             {/* Invoice Form */}
// // // //             <div className="lg:col-span-2">
// // // //               <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
// // // //                 {/* Invoice Header with Logo */}
// // // //                 <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
// // // //                   <div className="flex items-center gap-4">
// // // //                     <div className="w-16 h-16">
// // // //                       <img
// // // //                         src="/dwn/Logo.svg"
// // // //                         alt="Nebras Al Arab Logo"
// // // //                         className="w-full h-full object-contain"
// // // //                       />
// // // //                     </div>
// // // //                     <div>
// // // //                       <h2 className="text-2xl font-bold text-gray-800">
// // // //                         عرض سعر
// // // //                       </h2>
// // // //                       <p className="text-gray-600 arabic-font">
// // // //                         مطابع نبراس العرب
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="text-right">
// // // //                     <p className="text-sm text-gray-500">رقم العرض</p>
// // // //                     <p className="font-bold text-lg text-primary-600">
// // // //                       {invoiceData.invoiceNumber}
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>

// // // //                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
// // // //                   <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
// // // //                     <span className="text-white font-bold">📄</span>
// // // //                   </div>
// // // //                   تفاصيل العرض
// // // //                 </h2>

// // // //                 {/* Basic Invoice Info */}
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // // //                   <div>
// // // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                       رقم العرض
// // // //                     </label>
// // // //                     <input
// // // //                       type="text"
// // // //                       value={invoiceData.invoiceNumber}
// // // //                       onChange={(e) =>
// // // //                         setInvoiceData((prev) => ({
// // // //                           ...prev,
// // // //                           invoiceNumber: e.target.value,
// // // //                         }))
// // // //                       }
// // // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                     />
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                       التاريخ
// // // //                     </label>
// // // //                     <input
// // // //                       type="date"
// // // //                       value={invoiceData.date}
// // // //                       onChange={(e) =>
// // // //                         setInvoiceData((prev) => ({
// // // //                           ...prev,
// // // //                           date: e.target.value,
// // // //                         }))
// // // //                       }
// // // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                     />
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Customer Information */}
// // // //                 <div className="mb-6">
// // // //                   <h3 className="text-lg font-semibold text-gray-800 mb-4">
// // // //                     معلومات العميل
// // // //                   </h3>
// // // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                     <div>
// // // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                         اسم العميل
// // // //                       </label>
// // // //                       <input
// // // //                         type="text"
// // // //                         value={invoiceData.customerName}
// // // //                         onChange={(e) =>
// // // //                           setInvoiceData((prev) => ({
// // // //                             ...prev,
// // // //                             customerName: e.target.value,
// // // //                           }))
// // // //                         }
// // // //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                         placeholder="أدخل اسم العميل"
// // // //                       />
// // // //                     </div>
// // // //                     <div>
// // // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                         رقم الهاتف
// // // //                       </label>
// // // //                       <input
// // // //                         type="tel"
// // // //                         value={invoiceData.customerPhone}
// // // //                         onChange={(e) =>
// // // //                           setInvoiceData((prev) => ({
// // // //                             ...prev,
// // // //                             customerPhone: e.target.value,
// // // //                           }))
// // // //                         }
// // // //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                         placeholder="+966 50 123 4567"
// // // //                       />
// // // //                     </div>
// // // //                     <div className="md:col-span-2">
// // // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                         العنوان
// // // //                       </label>
// // // //                       <textarea
// // // //                         value={invoiceData.customerAddress}
// // // //                         onChange={(e) =>
// // // //                           setInvoiceData((prev) => ({
// // // //                             ...prev,
// // // //                             customerAddress: e.target.value,
// // // //                           }))
// // // //                         }
// // // //                         rows="3"
// // // //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                         placeholder="أدخل عنوان العميل"
// // // //                       />
// // // //                     </div>
// // // //                     <div>
// // // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                         البريد الإلكتروني
// // // //                       </label>
// // // //                       <input
// // // //                         type="email"
// // // //                         value={invoiceData.customerEmail}
// // // //                         onChange={(e) =>
// // // //                           setInvoiceData((prev) => ({
// // // //                             ...prev,
// // // //                             customerEmail: e.target.value,
// // // //                           }))
// // // //                         }
// // // //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                         placeholder="customer@email.com"
// // // //                       />
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Items */}
// // // //                 <div className="mb-6">
// // // //                   <div className="flex items-center justify-between mb-4">
// // // //                     <h3 className="text-lg font-semibold text-gray-800">
// // // //                       المنتجات
// // // //                     </h3>
// // // //                     <button
// // // //                       onClick={addItem}
// // // //                       className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
// // // //                     >
// // // //                       <Plus size={16} />
// // // //                       إضافة منتج
// // // //                     </button>
// // // //                   </div>

// // // //                   <div className="space-y-4">
// // // //                     {invoiceData.items.map((item, index) => (
// // // //                       <div
// // // //                         key={item.id}
// // // //                         className="border border-gray-200 rounded-lg p-4 bg-gray-50"
// // // //                       >
// // // //                         <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
// // // //                           <div className="md:col-span-2">
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                               اسم المنتج
// // // //                             </label>
// // // //                             <input
// // // //                               type="text"
// // // //                               value={item.name}
// // // //                               onChange={(e) =>
// // // //                                 updateItem(item.id, "name", e.target.value)
// // // //                               }
// // // //                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                               placeholder="اسم المنتج"
// // // //                             />
// // // //                           </div>
// // // //                           <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                               الكمية
// // // //                             </label>
// // // //                             <input
// // // //                               type="number"
// // // //                               min="1"
// // // //                               value={item.quantity}
// // // //                               onChange={(e) =>
// // // //                                 updateItem(
// // // //                                   item.id,
// // // //                                   "quantity",
// // // //                                   parseInt(e.target.value) || 0
// // // //                                 )
// // // //                               }
// // // //                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                             />
// // // //                           </div>
// // // //                           <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                               السعر
// // // //                             </label>
// // // //                             <input
// // // //                               type="number"
// // // //                               min="0"
// // // //                               step="0.01"
// // // //                               value={item.price}
// // // //                               onChange={(e) =>
// // // //                                 updateItem(
// // // //                                   item.id,
// // // //                                   "price",
// // // //                                   parseFloat(e.target.value) || 0
// // // //                                 )
// // // //                               }
// // // //                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                             />
// // // //                           </div>
// // // //                           <div>
// // // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                               الإجمالي
// // // //                             </label>
// // // //                             <div className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium">
// // // //                               {item.total.toFixed(2)} ريال
// // // //                             </div>
// // // //                           </div>
// // // //                           <div className="flex items-end">
// // // //                             {invoiceData.items.length > 1 && (
// // // //                               <button
// // // //                                 onClick={() => removeItem(item.id)}
// // // //                                 className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
// // // //                               >
// // // //                                 <Trash2 size={16} />
// // // //                               </button>
// // // //                             )}
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Totals */}
// // // //                 <div className="bg-gray-50 rounded-lg p-4">
// // // //                   <div className="space-y-2">
// // // //                     <div className="flex justify-between text-gray-600">
// // // //                       <span>المجموع الفرعي:</span>
// // // //                       <span>{calculateSubtotal().toFixed(2)} ريال</span>
// // // //                     </div>
// // // //                     <div className="flex justify-between text-gray-600">
// // // //                       <span>الضريبة (15%):</span>
// // // //                       <span>{calculateTax().toFixed(2)} ريال</span>
// // // //                     </div>
// // // //                     <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-2">
// // // //                       <span>الإجمالي:</span>
// // // //                       <span>{calculateTotal().toFixed(2)} ريال</span>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Company Info & Actions */}
// // // //             <div className="space-y-6">
// // // //               {/* Company Information */}
// // // //               <div className="bg-white rounded-2xl shadow-xl p-6">
// // // //                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
// // // //                   <div className="w-6 h-6 bg-gradient-secondary rounded-lg flex items-center justify-center">
// // // //                     <span className="text-white text-sm">🏢</span>
// // // //                   </div>
// // // //                   معلومات الشركة
// // // //                 </h3>

// // // //                 <div className="space-y-3">
// // // //                   <div className="text-center">
// // // //                     <h4 className="text-lg font-bold text-primary-600 mb-1 arabic-font-bold">
// // // //                       {companyInfo.name}
// // // //                     </h4>
// // // //                     <p className="text-sm text-gray-600 mb-2">
// // // //                       {companyInfo.englishName}
// // // //                     </p>
// // // //                     <p className="text-sm text-gray-700 font-medium">
// // // //                       {companyInfo.owner}
// // // //                     </p>
// // // //                   </div>

// // // //                   <div className="space-y-2 text-sm">
// // // //                     <div className="flex items-center gap-2">
// // // //                       <span className="text-gray-500">📞</span>
// // // //                       <span className="text-gray-800 font-medium">
// // // //                         {companyInfo.phone}
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="flex items-center gap-2">
// // // //                       <span className="text-gray-500">✉️</span>
// // // //                       <span className="text-gray-800 font-medium">
// // // //                         {companyInfo.email}
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="flex items-center gap-2">
// // // //                       <span className="text-gray-500">🌐</span>
// // // //                       <span className="text-gray-800 font-medium">
// // // //                         {companyInfo.website}
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="flex items-center gap-2">
// // // //                       <span className="text-gray-500">📍</span>
// // // //                       <span className="text-gray-800 font-medium arabic-font">
// // // //                         {companyInfo.address}
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Action Buttons */}
// // // //               <div className="bg-white rounded-2xl shadow-xl p-6">
// // // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">
// // // //                   الإجراءات
// // // //                 </h3>

// // // //                 <div className="space-y-3">
// // // //                   <button
// // // //                     onClick={sendWhatsApp}
// // // //                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium"
// // // //                   >
// // // //                     <Send size={18} />
// // // //                     إرسال عبر واتساب
// // // //                   </button>

// // // //                   <button
// // // //                     onClick={generateAndSendPDF}
// // // //                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
// // // //                   >
// // // //                     <Download size={18} />
// // // //                     تحميل وإرسال PDF
// // // //                   </button>

// // // //                   <button
// // // //                     onClick={() => window.print()}
// // // //                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-secondary text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
// // // //                   >
// // // //                     <Printer size={18} />
// // // //                     طباعة العرض
// // // //                   </button>

// // // //                   <button
// // // //                     onClick={saveInvoice}
// // // //                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-accent text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
// // // //                   >
// // // //                     <Save size={18} />
// // // //                     حفظ كملف
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Customer Info Modal */}
// // // //       {showCustomerModal && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // // //           <div className="bg-white rounded-2xl p-6 max-w-md w-full">
// // // //             <div className="flex items-center justify-between mb-4">
// // // //               <h3 className="text-xl font-bold text-gray-800">
// // // //                 تعديل البيانات الشخصية
// // // //               </h3>
// // // //               <button
// // // //                 onClick={() => setShowCustomerModal(false)}
// // // //                 className="text-gray-400 hover:text-gray-600"
// // // //               >
// // // //                 <X size={24} />
// // // //               </button>
// // // //             </div>

// // // //             <div className="space-y-4">
// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                   الاسم
// // // //                 </label>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={customerName}
// // // //                   onChange={(e) => setCustomerName(e.target.value)}
// // // //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                   placeholder="أدخل اسمك"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                   العنوان
// // // //                 </label>
// // // //                 <textarea
// // // //                   value={customerAddress}
// // // //                   onChange={(e) => setCustomerAddress(e.target.value)}
// // // //                   rows="3"
// // // //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                   placeholder="أدخل عنوانك"
// // // //                 />
// // // //               </div>
// // // //               <button
// // // //                 onClick={saveCustomerInfo}
// // // //                 className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
// // // //               >
// // // //                 حفظ البيانات
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Social Modal */}
// // // //       {showSocialModal && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // // //           <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
// // // //             <div className="flex items-center justify-between mb-4">
// // // //               <h3 className="text-xl font-bold text-gray-800">
// // // //                 التعليقات والتفاعل
// // // //               </h3>
// // // //               <button
// // // //                 onClick={() => setShowSocialModal(false)}
// // // //                 className="text-gray-400 hover:text-gray-600"
// // // //               >
// // // //                 <X size={24} />
// // // //               </button>
// // // //             </div>

// // // //             <div className="space-y-4">
// // // //               {/* Add Comment */}
// // // //               <div className="flex gap-2">
// // // //                 <input
// // // //                   type="text"
// // // //                   value={newComment}
// // // //                   onChange={(e) => setNewComment(e.target.value)}
// // // //                   className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // // //                   placeholder="أضف تعليقك هنا..."
// // // //                   onKeyPress={(e) => e.key === "Enter" && addComment()}
// // // //                 />
// // // //                 <button
// // // //                   onClick={addComment}
// // // //                   className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
// // // //                 >
// // // //                   إرسال
// // // //                 </button>
// // // //               </div>

// // // //               {/* Comments List */}
// // // //               <div className="space-y-3">
// // // //                 {comments.map((comment) => (
// // // //                   <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
// // // //                     <div className="flex items-center justify-between mb-2">
// // // //                       <span className="font-semibold text-gray-800">
// // // //                         {comment.author}
// // // //                       </span>
// // // //                       <span className="text-sm text-gray-500">
// // // //                         {comment.timestamp}
// // // //                       </span>
// // // //                     </div>
// // // //                     <p className="text-gray-700">{comment.text}</p>
// // // //                   </div>
// // // //                 ))}
// // // //                 {comments.length === 0 && (
// // // //                   <p className="text-center text-gray-500 py-4">
// // // //                     لا توجد تعليقات بعد
// // // //                   </p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }




// // // "use client";
// // // import { useState, useEffect } from "react";
// // // import {
// // //   Plus,
// // //   Trash2,
// // //   Download,
// // //   Printer,
// // //   Save,
// // //   Heart,
// // //   Share2,
// // //   MessageCircle,
// // //   Send,
// // //   User,
// // //   Lock,
// // //   X,
// // //   Star,
// // // } from "lucide-react";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import QRCode from "qrcode";

// // // export default function BillingPage() {
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // //   const [username, setUsername] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [customerName, setCustomerName] = useState("");
// // //   const [customerAddress, setCustomerAddress] = useState("");
// // //   const [showLoginModal, setShowLoginModal] = useState(true);
// // //   const [showSocialModal, setShowSocialModal] = useState(false);
// // //   const [showCustomerModal, setShowCustomerModal] = useState(false);
// // //   const [loginAttempts, setLoginAttempts] = useState(0);
// // //   const [loginDisabled, setLoginDisabled] = useState(false);
// // //   const [loginDisabledTime, setLoginDisabledTime] = useState(0);
// // //   const [likes, setLikes] = useState(0);
// // //   const [loves, setLoves] = useState(0);
// // //   const [comments, setComments] = useState([]);
// // //   const [newComment, setNewComment] = useState("");
// // //   const [isLiked, setIsLiked] = useState(false);
// // //   const [isLoved, setIsLoved] = useState(false);
// // //   const [discount, setDiscount] = useState(0); // Added discount state
// // //   const [qrCodeUrl, setQrCodeUrl] = useState("");

// // //   // Load social data from localStorage
// // //   useEffect(() => {
// // //     const savedLikes = localStorage.getItem("billingLikes");
// // //     const savedLoves = localStorage.getItem("billingLoves");
// // //     const savedComments = localStorage.getItem("billingComments");
// // //     const savedIsLiked = localStorage.getItem("billingIsLiked");
// // //     const savedIsLoved = localStorage.getItem("billingIsLoved");

// // //     if (savedLikes) setLikes(parseInt(savedLikes));
// // //     if (savedLoves) setLoves(parseInt(savedLoves));
// // //     if (savedComments) setComments(JSON.parse(savedComments));
// // //     if (savedIsLiked) setIsLiked(savedIsLiked === "true");
// // //     if (savedIsLoved) setIsLoved(savedIsLoved === "true");
// // //   }, []);

// // //   const [invoiceData, setInvoiceData] = useState({
// // //     invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
// // //     date: new Date().toISOString().split("T")[0],
// // //     customerName: "",
// // //     customerAddress: "",
// // //     customerPhone: "",
// // //     customerEmail: "",
// // //     items: [
// // //       {
// // //         id: 1,
// // //         name: "",
// // //         description: "",
// // //         quantity: 1,
// // //         price: 0,
// // //         total: 0,
// // //       },
// // //     ],
// // //   });

// // //   const [companyInfo] = useState({
// // //     name: "مطابع نبراس العرب",
// // //     englishName: "Nebras Al Arab Printer",
// // //     owner: "محمد الديواني",
// // //     phone: "+966540584952",
// // //     email: "dewany1979@gmail.com",
// // //     address: "الرياض، المملكة العربية السعودية",
// // //     website: "www.nebras-alarab.com",
// // //     bankAccountNumber: "SA1234567890123456789012", // Added bank account number
// // //   });

// // //   // Check authentication on component mount
// // //   useEffect(() => {
// // //     const savedAuth = localStorage.getItem("billingAuth");
// // //     const lastLogin = localStorage.getItem("lastLogin");

// // //     if (savedAuth) {
// // //       const authData = JSON.parse(savedAuth);
// // //       // Check if session is still valid (24 hours)
// // //       if (
// // //         lastLogin &&
// // //         Date.now() - new Date(lastLogin).getTime() < 24 * 60 * 60 * 1000
// // //       ) {
// // //         if (authData.username === "dewany") {
// // //           setIsAuthenticated(true);
// // //           setShowLoginModal(false);
// // //           setUsername(authData.username);
// // //           setCustomerName(authData.customerName || "");
// // //           setCustomerAddress(authData.customerAddress || "");
// // //         }
// // //       } else {
// // //         // Session expired, clear storage
// // //         localStorage.removeItem("billingAuth");
// // //         localStorage.removeItem("lastLogin");
// // //       }
// // //     }

// // //     // Check if login is temporarily disabled
// // //     const disabledUntil = localStorage.getItem("loginDisabledUntil");
// // //     if (disabledUntil && Date.now() < parseInt(disabledUntil)) {
// // //       setLoginDisabled(true);
// // //       setLoginDisabledTime(parseInt(disabledUntil) - Date.now());
// // //     }
// // //   }, []);

// // //   // Countdown for login disable
// // //   useEffect(() => {
// // //     let timer;
// // //     if (loginDisabled && loginDisabledTime > 0) {
// // //       timer = setInterval(() => {
// // //         setLoginDisabledTime((prev) => {
// // //           if (prev <= 1000) {
// // //             setLoginDisabled(false);
// // //             localStorage.removeItem("loginDisabledUntil");
// // //             localStorage.removeItem("loginAttempts");
// // //             return 0;
// // //           }
// // //           return prev - 1000;
// // //         });
// // //       }, 1000);
// // //     }
// // //     return () => clearInterval(timer);
// // //   }, [loginDisabled]);

// // //   // Generate QR code whenever invoice data changes
// // //   useEffect(() => {
// // //     const generateQrCode = async () => {
// // //       try {
// // //         const qrData = {
// // //           invoiceNumber: invoiceData.invoiceNumber,
// // //           total: calculateTotal(),
// // //           customerName: invoiceData.customerName,
// // //           company: companyInfo.name,
// // //         };
// // //         const url = await QRCode.toDataURL(JSON.stringify(qrData));
// // //         setQrCodeUrl(url);
// // //       } catch (err) {
// // //         console.error(err);
// // //       }
// // //     };
// // //     generateQrCode();
// // //   }, [invoiceData, discount]);

// // //   const handleLogin = () => {
// // //     if (loginDisabled) {
// // //       alert(
// // //         `تم تعطيل محاولات تسجيل الدخول مؤقتًا. الرجاء المحاولة مرة أخرى بعد ${Math.ceil(
// // //           loginDisabledTime / 1000
// // //         )} ثانية.`
// // //       );
// // //       return;
// // //     }

// // //     if (username === "dewany" && password === "dewany123") {
// // //       setIsAuthenticated(true);
// // //       setShowLoginModal(false);
// // //       setLoginAttempts(0);

// // //       const authData = {
// // //         username,
// // //         customerName,
// // //         customerAddress,
// // //       };
// // //       localStorage.setItem("billingAuth", JSON.stringify(authData));
// // //       localStorage.setItem("lastLogin", new Date().toISOString());
// // //       localStorage.removeItem("loginAttempts");
// // //       localStorage.removeItem("loginDisabledUntil");
// // //     } else {
// // //       const newAttempts = loginAttempts + 1;
// // //       setLoginAttempts(newAttempts);

// // //       if (newAttempts >= 3) {
// // //         // Disable login for 5 minutes after 3 failed attempts
// // //         const disableUntil = Date.now() + 5 * 60 * 1000;
// // //         setLoginDisabled(true);
// // //         setLoginDisabledTime(5 * 60 * 1000);
// // //         localStorage.setItem("loginDisabledUntil", disableUntil.toString());
// // //         localStorage.setItem("loginAttempts", newAttempts.toString());
// // //         alert(
// // //           "تم تعطيل تسجيل الدخول مؤقتًا بسبب كثرة المحاولات الفاشلة. الرجاء المحاولة مرة أخرى بعد 5 دقائق."
// // //         );
// // //       } else {
// // //         localStorage.setItem("loginAttempts", newAttempts.toString());
// // //         alert(
// // //           "بيانات الدخول غير صحيحة. فقط المستخدمون المصرح لهم يمكنهم الوصول إلى هذه الصفحة."
// // //         );
// // //       }
// // //     }
// // //   };

// // //   const handleLogout = () => {
// // //     setIsAuthenticated(false);
// // //     setShowLoginModal(true);
// // //     setUsername("");
// // //     setPassword("");
// // //     localStorage.removeItem("billingAuth");
// // //     localStorage.removeItem("lastLogin");
// // //   };

// // //   const saveCustomerInfo = () => {
// // //     // Update auth data with new customer info
// // //     const authData = {
// // //       username,
// // //       customerName,
// // //       customerAddress,
// // //     };
// // //     localStorage.setItem("billingAuth", JSON.stringify(authData));
// // //     localStorage.setItem("customerName", customerName);
// // //     localStorage.setItem("customerAddress", customerAddress);
// // //     setShowCustomerModal(false);
// // //   };

// // //   const addItem = () => {
// // //     const newItem = {
// // //       id: Date.now(),
// // //       name: "",
// // //       description: "",
// // //       quantity: 1,
// // //       price: 0,
// // //       total: 0,
// // //     };
// // //     setInvoiceData((prev) => ({
// // //       ...prev,
// // //       items: [...prev.items, newItem],
// // //     }));
// // //   };

// // //   const removeItem = (id) => {
// // //     setInvoiceData((prev) => ({
// // //       ...prev,
// // //       items: prev.items.filter((item) => item.id !== id),
// // //     }));
// // //   };

// // //   const updateItem = (id, field, value) => {
// // //     setInvoiceData((prev) => ({
// // //       ...prev,
// // //       items: prev.items.map((item) => {
// // //         if (item.id === id) {
// // //           const updatedItem = { ...item, [field]: value };
// // //           if (field === "quantity" || field === "price") {
// // //             updatedItem.total = updatedItem.quantity * updatedItem.price;
// // //           }
// // //           return updatedItem;
// // //         }
// // //         return item;
// // //       }),
// // //     }));
// // //   };

// // //   const calculateSubtotal = () => {
// // //     return invoiceData.items.reduce((sum, item) => sum + item.total, 0);
// // //   };

// // //   const calculateTax = () => {
// // //     return calculateSubtotal() * 0.15;
// // //   };

// // //   const calculateTotal = () => {
// // //     return calculateSubtotal() + calculateTax() - (parseFloat(discount) || 0);
// // //   };

// // //   const saveInvoice = () => {
// // //     const invoiceToSave = {
// // //       ...invoiceData,
// // //       subtotal: calculateSubtotal(),
// // //       tax: calculateTax(),
// // //       total: calculateTotal(),
// // //       discount,
// // //       companyInfo,
// // //     };
// // //     const dataStr = JSON.stringify(invoiceToSave, null, 2);
// // //     const dataBlob = new Blob([dataStr], { type: "application/json" });

// // //     const link = document.createElement("a");
// // //     link.href = URL.createObjectURL(dataBlob);
// // //     link.download = `invoice-${invoiceData.invoiceNumber}.json`;
// // //     link.click();
// // //   };

// // //   const sendWhatsApp = () => {
// // //     const message = `مرحباً، أريد عرض سعر من مطابع نبراس العرب
    
// // // اسم العميل: ${customerName || "غير محدد"}
// // // العنوان: ${customerAddress || "غير محدد"}
    
// // // تفاصيل الطلب:
// // // ${invoiceData.items
// // //   .map(
// // //     (item) =>
// // //       `- ${item.name}: ${item.quantity} × ${item.price} ريال = ${item.total} ريال`
// // //   )
// // //   .join("\n")}
    
// // // المجموع: ${calculateTotal().toFixed(2)} ريال
    
// // // رقم الفاتورة: ${invoiceData.invoiceNumber}`;
// // //     const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
// // //       /\D/g,
// // //       ""
// // //     )}?text=${encodeURIComponent(message)}`;
// // //     window.open(whatsappUrl, "_blank");
// // //   };

// // //   const generateAndSendPDF = () => {
// // //     // Create invoice content for PDF
// // //     const invoiceContent = `
// // //       <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; direction: rtl; text-align: right;">
// // //         <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 2px solid #10b981; padding-bottom: 20px;">
// // //           <div style="text-align: right;">
// // //             <h1 style="color: #10b981; margin: 0; font-size: 28px;">مطابع نبراس العرب</h1>
// // //             <p style="color: #6b7280; margin: 5px 0; font-size: 16px;">Nebras Al Arab Printer</p>
// // //             <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">محمد الديواني</p>
// // //             <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">الحساب البنكي: ${companyInfo.bankAccountNumber}</p>
// // //           </div>
// // //           <div style="text-align: left;">
// // //             <img src="/dwn/Logo.svg" alt="Logo" style="width: 80px; height: 80px; margin-bottom: 10px;">
// // //           </div>
// // //         </div>

// // //         <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
// // //           <div>
// // //             <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 24px;">عرض سعر</h2>
// // //             <p style="margin: 5px 0; color: #6b7280;"><strong>رقم العرض:</strong> ${
// // //               invoiceData.invoiceNumber
// // //             }</p>
// // //             <p style="margin: 5px 0; color: #6b7280;"><strong>التاريخ:</strong> ${
// // //               invoiceData.date
// // //             }</p>
// // //           </div>
// // //           <div style="text-align: left;">
// // //             <h3 style="color: #1f2937; margin: 0 0 10px 0;">معلومات العميل</h3>
// // //             <p style="margin: 5px 0; color: #6b7280;"><strong>الاسم:</strong> ${
// // //               invoiceData.customerName || customerName || "غير محدد"
// // //             }</p>
// // //             <p style="margin: 5px 0; color: #6b7280;"><strong>العنوان:</strong> ${
// // //               invoiceData.customerAddress || customerAddress || "غير محدد"
// // //             }</p>
// // //             <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
// // //               invoiceData.customerPhone || "غير محدد"
// // //             }</p>
// // //             <p style="margin: 5px 0; color: #6b7280;"><strong>البريد:</strong> ${
// // //               invoiceData.customerEmail || "غير محدد"
// // //             }</p>
// // //           </div>
// // //         </div>

// // //         <div style="margin-bottom: 30px;">
// // //           <h3 style="color: #1f2937; margin: 0 0 15px 0;">المنتجات</h3>
// // //           <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
// // //             <thead>
// // //               <tr style="background-color: #f9fafb;">
// // //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #1f2937;">المنتج</th>
// // //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الكمية</th>
// // //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">السعر</th>
// // //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الإجمالي</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               ${invoiceData.items
// // //                 .map(
// // //                   (item) => `
// // //                 <tr>
// // //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #374151;">${
// // //                     item.name || "غير محدد"
// // //                   }</td>
// // //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${
// // //                     item.quantity
// // //                   }</td>
// // //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.price.toFixed(
// // //                     2
// // //                   )} ريال</td>
// // //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.total.toFixed(
// // //                     2
// // //                   )} ريال</td>
// // //                 </tr>
// // //                 `
// // //                 )
// // //                 .join("")}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         <div style="text-align: left; margin-bottom: 30px;">
// // //           <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
// // //             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
// // //               <span style="color: #6b7280;">المجموع الفرعي:</span>
// // //               <span style="color: #1f2937; font-weight: bold;">${calculateSubtotal().toFixed(
// // //                 2
// // //               )} ريال</span>
// // //             </div>
// // //             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
// // //               <span style="color: #6b7280;">الضريبة (15%):</span>
// // //               <span style="color: #1f2937; font-weight: bold;">${calculateTax().toFixed(
// // //                 2
// // //               )} ريال</span>
// // //             </div>
// // //             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
// // //               <span style="color: #6b7280;">الخصم:</span>
// // //               <span style="color: #1f2937; font-weight: bold;">${(parseFloat(discount) || 0).toFixed(
// // //                 2
// // //               )} ريال</span>
// // //             </div>
// // //             <div style="display: flex; justify-content: space-between; border-top: 1px solid #e5e7eb; padding-top: 10px;">
// // //               <span style="color: #1f2937; font-weight: bold; font-size: 18px;">الإجمالي:</span>
// // //               <span style="color: #10b981; font-weight: bold; font-size: 18px;">${calculateTotal().toFixed(
// // //                 2
// // //               )} ريال</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; text-align: center;">
// // //           <h4 style="color: #1f2937; margin: 0 0 15px 0;">معلومات الشركة</h4>
// // //           <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
// // //             companyInfo.phone
// // //           }</p>
// // //           <p style="margin: 5px 0; color: #6b7280;"><strong>البريد الإلكتروني:</strong> ${
// // //             companyInfo.email
// // //           }</p>
// // //           <p style="margin: 5px 0; color: #6b7280;"><strong>الموقع:</strong> ${
// // //             companyInfo.website
// // //           }</p>
// // //           <p style="margin: 5px 0; color: #6b7280;"><strong>العنوان:</strong> ${
// // //             companyInfo.address
// // //           }</p>
// // //           <p style="margin: 5px 0; color: #6b7280;"><strong>رقم الحساب البنكي:</strong> ${
// // //             companyInfo.bankAccountNumber
// // //           }</p>
// // //           ${qrCodeUrl ? `<div style="margin-top: 20px;"><img src="${qrCodeUrl}" alt="QR Code" style="width: 150px; height: 150px;" /></div>` : ''}
// // //         </div>

// // //         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
// // //           <p>شكراً لاختياركم مطابع نبراس العرب</p>
// // //           <p>Thank you for choosing Nebras Al Arab Printer</p>
// // //         </div>
// // //       </div>
// // //     `;

// // //     // Create a new window with the invoice content
// // //     const printWindow = window.open("", "_blank");
// // //     printWindow.document.write(`
// // //       <!DOCTYPE html>
// // //       <html dir="rtl">
// // //         <head>
// // //           <title>عرض سعر - ${invoiceData.invoiceNumber}</title>
// // //           <meta charset="utf-8">
// // //           <style>
// // //             body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
// // //             @media print {
// // //               body { margin: 0; }
// // //               .no-print { display: none; }
// // //             }
// // //           </style>
// // //         </head>
// // //         <body>
// // //           ${invoiceContent}
// // //           <div class="no-print" style="text-align: center; margin-top: 30px;">
// // //             <button onclick="window.print()" style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
// // //               طباعة PDF
// // //             </button>
// // //             <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
// // //               إغلاق
// // //             </button>
// // //           </div>
// // //         </body>
// // //       </html>
// // //     `);
// // //     printWindow.document.close();

// // //     // After a short delay, send WhatsApp message with PDF info
// // //     setTimeout(() => {
// // //       const pdfMessage = `مرحباً، تم إنشاء عرض سعر كامل
    
// // // رقم العرض: ${invoiceData.invoiceNumber}
// // // اسم العميل: ${customerName || "غير محدد"}
// // // المجموع: ${calculateTotal().toFixed(2)} ريال
    
// // // تم إنشاء PDF كامل للعرض مع جميع التفاصيل.
// // // يمكنك طباعته أو حفظه كملف PDF.`;

// // //       const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
// // //         /\D/g,
// // //         ""
// // //       )}?text=${encodeURIComponent(pdfMessage)}`;
// // //       window.open(whatsappUrl, "_blank");
// // //     }, 1000);
// // //   };

// // //   const handleLike = () => {
// // //     const newLikes = isLiked ? likes - 1 : likes + 1;
// // //     setLikes(newLikes);
// // //     setIsLiked(!isLiked);
// // //     localStorage.setItem("billingLikes", newLikes.toString());
// // //     localStorage.setItem("billingIsLiked", (!isLiked).toString());
// // //   };

// // //   const handleLove = () => {
// // //     const newLoves = isLoved ? loves - 1 : loves + 1;
// // //     setLoves(newLoves);
// // //     setIsLoved(!isLoved);
// // //     localStorage.setItem("billingLoves", newLoves.toString());
// // //     localStorage.setItem("billingIsLoved", (!isLoved).toString());
// // //   };

// // //   const addComment = () => {
// // //     if (newComment.trim()) {
// // //       const comment = {
// // //         id: Date.now(),
// // //         text: newComment,
// // //         author: customerName || "مستخدم",
// // //         timestamp: new Date().toLocaleString("ar-SA"),
// // //       };
// // //       const newComments = [...comments, comment];
// // //       setComments(newComments);
// // //       setNewComment("");
// // //       localStorage.setItem("billingComments", JSON.stringify(newComments));
// // //     }
// // //   };

// // //   const sharePage = () => {
// // //     if (navigator.share) {
// // //       navigator.share({
// // //         title: "عرض سعر - مطابع نبراس العرب",
// // //         text: "انضم إلينا للحصول على أفضل عروض الطباعة",
// // //         url: window.location.href,
// // //       });
// // //     } else {
// // //       navigator.clipboard.writeText(window.location.href);
// // //       alert("تم نسخ الرابط إلى الحافظة");
// // //     }
// // //   };

// // //   // If not authenticated, show customer input form first
// // //   if (!isAuthenticated) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
// // //         {/* Login Modal - Always visible when not authenticated */}
// // //         <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
// // //           <div className="text-center mb-8">
// // //             <div className="w-20 h-20 mx-auto mb-4">
// // //               <img
// // //                 src="/dwn/Logo.svg"
// // //                 alt="Nebras Al Arab Logo"
// // //                 className="w-full h-full object-contain"
// // //               />
// // //             </div>
// // //             <h1 className="text-2xl font-bold text-gray-800 mb-2">
// // //               تسجيل دخول الموظفين
// // //             </h1>
// // //             <p className="text-gray-600 arabic-font">للموظفين المصرح لهم فقط</p>
// // //             {loginDisabled && (
// // //               <p className="text-red-500 mt-2">
// // //                 تم تعطيل التسجيل مؤقتًا. الرجاء المحاولة بعد{" "}
// // //                 {Math.ceil(loginDisabledTime / 1000)} ثانية.
// // //               </p>
// // //             )}
// // //           </div>

// // //           <div className="space-y-4">
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 اسم المستخدم
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 value={username}
// // //                 onChange={(e) => setUsername(e.target.value)}
// // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                 placeholder="أدخل اسم المستخدم"
// // //                 disabled={loginDisabled}
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 كلمة المرور
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                 placeholder="أدخل كلمة المرور"
// // //                 disabled={loginDisabled}
// // //                 onKeyPress={(e) =>
// // //                   e.key === "Enter" && !loginDisabled && handleLogin()
// // //                 }
// // //               />
// // //             </div>
// // //             <button
// // //               onClick={handleLogin}
// // //               disabled={loginDisabled}
// // //               className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
// // //             >
// // //               تسجيل الدخول
// // //             </button>
// // //           </div>

// // //           <div className="mt-6 text-center text-sm text-gray-500">
// // //             <p>فقط المستخدمين المصرح لهم يمكنهم الوصول</p>
// // //             {/* <p className="mt-1">Username: dewany | Password: dewany123</p> */}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
// // //       {/* Header */}
// // //       <header className="bg-white shadow-lg border-b border-gray-200">
// // //         <div className="container mx-auto px-4 py-4">
// // //           <div className="flex items-center justify-between">
// // //             <Link href="/" className="flex items-center space-x-3">
// // //               <div className="w-12 h-12">
// // //                 <img
// // //                   src="/dwn/Logo.svg"
// // //                   alt="Nebras Al Arab Logo"
// // //                   className="w-full h-full object-contain"
// // //                 />
// // //               </div>
// // //               <div className="text-left">
// // //                 <h1 className="text-xl font-bold text-gray-800">
// // //                   Nebras Al Arab
// // //                 </h1>
// // //                 <p className="text-sm text-gray-600 arabic-font-bold">
// // //                   مطابع نبراس العرب
// // //                 </p>
// // //               </div>
// // //             </Link>

// // //             <div className="flex items-center space-x-4">
// // //               <div className="text-right">
// // //                 <p className="text-sm text-gray-600">مرحباً بعودتك</p>
// // //                 <p className="font-semibold text-primary-600">
// // //                   {customerName || "مستخدم"}
// // //                 </p>
// // //                 {username && (
// // //                   <p className="text-xs text-gray-500">المستخدم: {username}</p>
// // //                 )}
// // //               </div>
// // //               <button
// // //                 onClick={() => setShowCustomerModal(true)}
// // //                 className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50"
// // //               >
// // //                 <User size={18} />
// // //                 تعديل البيانات
// // //               </button>
// // //               <button
// // //                 onClick={handleLogout}
// // //                 className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors rounded-lg hover:bg-red-50"
// // //               >
// // //                 <Lock size={18} />
// // //                 تسجيل الخروج
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       <div className="pt-8 pb-10">
// // //         <div className="container mx-auto px-4">
// // //           {/* Welcome Section */}
// // //           <div className="text-center mb-8">
// // //             <h1 className="text-4xl font-bold text-gray-800 mb-2">عرض سعر</h1>
// // //             <p className="text-lg text-gray-600 arabic-font mb-4">
// // //               نظام إنشاء عروض الأسعار والفواتير
// // //             </p>

// // //             {/* Social Actions */}
// // //             <div className="flex items-center justify-center gap-4 mb-6">
// // //               <button
// // //                 onClick={handleLike}
// // //                 className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
// // //                   isLiked
// // //                     ? "bg-red-100 text-red-600"
// // //                     : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
// // //                 }`}
// // //               >
// // //                 <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
// // //                 {likes}
// // //               </button>
// // //               <button
// // //                 onClick={handleLove}
// // //                 className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
// // //                   isLoved
// // //                     ? "bg-pink-100 text-pink-600"
// // //                     : "bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600"
// // //                 }`}
// // //               >
// // //                 <Star size={18} fill={isLoved ? "currentColor" : "none"} />
// // //                 {loves}
// // //               </button>
// // //               <button
// // //                 onClick={sharePage}
// // //                 className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-200"
// // //               >
// // //                 <Share2 size={18} />
// // //                 مشاركة
// // //               </button>
// // //               <button
// // //                 onClick={() => setShowSocialModal(true)}
// // //                 className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-all duration-200"
// // //               >
// // //                 <MessageCircle size={18} />
// // //                 تعليقات ({comments.length})
// // //               </button>
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //             {/* Invoice Form */}
// // //             <div className="lg:col-span-2">
// // //               <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
// // //                 {/* Invoice Header with Logo */}
// // //                 <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="w-16 h-16">
// // //                       <img
// // //                         src="/dwn/Logo.svg"
// // //                         alt="Nebras Al Arab Logo"
// // //                         className="w-full h-full object-contain"
// // //                       />
// // //                     </div>
// // //                     <div>
// // //                       <h2 className="text-2xl font-bold text-gray-800">
// // //                         عرض سعر
// // //                       </h2>
// // //                       <p className="text-gray-600 arabic-font">
// // //                         مطابع نبراس العرب
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="text-right">
// // //                     <p className="text-sm text-gray-500">رقم العرض</p>
// // //                     <p className="font-bold text-lg text-primary-600">
// // //                       {invoiceData.invoiceNumber}
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
// // //                   <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
// // //                     <span className="text-white font-bold">📄</span>
// // //                   </div>
// // //                   تفاصيل العرض
// // //                 </h2>

// // //                 {/* Basic Invoice Info */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                       رقم العرض
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       value={invoiceData.invoiceNumber}
// // //                       onChange={(e) =>
// // //                         setInvoiceData((prev) => ({
// // //                           ...prev,
// // //                           invoiceNumber: e.target.value,
// // //                         }))
// // //                       }
// // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                       التاريخ
// // //                     </label>
// // //                     <input
// // //                       type="date"
// // //                       value={invoiceData.date}
// // //                       onChange={(e) =>
// // //                         setInvoiceData((prev) => ({
// // //                           ...prev,
// // //                           date: e.target.value,
// // //                         }))
// // //                       }
// // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 {/* Customer Information */}
// // //                 <div className="mb-6">
// // //                   <h3 className="text-lg font-semibold text-gray-800 mb-4">
// // //                     معلومات العميل
// // //                   </h3>
// // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                     <div>
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         اسم العميل
// // //                       </label>
// // //                       <input
// // //                         type="text"
// // //                         value={invoiceData.customerName}
// // //                         onChange={(e) =>
// // //                           setInvoiceData((prev) => ({
// // //                             ...prev,
// // //                             customerName: e.target.value,
// // //                           }))
// // //                         }
// // //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                         placeholder="أدخل اسم العميل"
// // //                       />
// // //                     </div>
// // //                     <div>
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         رقم الهاتف
// // //                       </label>
// // //                       <input
// // //                         type="tel"
// // //                         value={invoiceData.customerPhone}
// // //                         onChange={(e) =>
// // //                           setInvoiceData((prev) => ({
// // //                             ...prev,
// // //                             customerPhone: e.target.value,
// // //                           }))
// // //                         }
// // //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                         placeholder="+966 50 123 4567"
// // //                       />
// // //                     </div>
// // //                     <div className="md:col-span-2">
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         العنوان
// // //                       </label>
// // //                       <textarea
// // //                         value={invoiceData.customerAddress}
// // //                         onChange={(e) =>
// // //                           setInvoiceData((prev) => ({
// // //                             ...prev,
// // //                             customerAddress: e.target.value,
// // //                           }))
// // //                         }
// // //                         rows="3"
// // //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                         placeholder="أدخل عنوان العميل"
// // //                       />
// // //                     </div>
// // //                     <div>
// // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         البريد الإلكتروني
// // //                       </label>
// // //                       <input
// // //                         type="email"
// // //                         value={invoiceData.customerEmail}
// // //                         onChange={(e) =>
// // //                           setInvoiceData((prev) => ({
// // //                             ...prev,
// // //                             customerEmail: e.target.value,
// // //                           }))
// // //                         }
// // //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                         placeholder="customer@email.com"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Items */}
// // //                 <div className="mb-6">
// // //                   <div className="flex items-center justify-between mb-4">
// // //                     <h3 className="text-lg font-semibold text-gray-800">
// // //                       المنتجات
// // //                     </h3>
// // //                     <button
// // //                       onClick={addItem}
// // //                       className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
// // //                     >
// // //                       <Plus size={16} />
// // //                       إضافة منتج
// // //                     </button>
// // //                   </div>

// // //                   <div className="space-y-4">
// // //                     {invoiceData.items.map((item, index) => (
// // //                       <div
// // //                         key={item.id}
// // //                         className="border border-gray-200 rounded-lg p-4 bg-gray-50"
// // //                       >
// // //                         <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
// // //                           <div className="md:col-span-2">
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                               اسم المنتج
// // //                             </label>
// // //                             <input
// // //                               type="text"
// // //                               value={item.name}
// // //                               onChange={(e) =>
// // //                                 updateItem(item.id, "name", e.target.value)
// // //                               }
// // //                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                               placeholder="اسم المنتج"
// // //                             />
// // //                           </div>
// // //                           <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                               الكمية
// // //                             </label>
// // //                             <input
// // //                               type="number"
// // //                               min="1"
// // //                               value={item.quantity}
// // //                               onChange={(e) =>
// // //                                 updateItem(
// // //                                   item.id,
// // //                                   "quantity",
// // //                                   parseInt(e.target.value) || 0
// // //                                 )
// // //                               }
// // //                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                             />
// // //                           </div>
// // //                           <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                               السعر
// // //                             </label>
// // //                             <input
// // //                               type="number"
// // //                               min="0"
// // //                               step="0.01"
// // //                               value={item.price}
// // //                               onChange={(e) =>
// // //                                 updateItem(
// // //                                   item.id,
// // //                                   "price",
// // //                                   parseFloat(e.target.value) || 0
// // //                                 )
// // //                               }
// // //                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                             />
// // //                           </div>
// // //                           <div>
// // //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                               الإجمالي
// // //                             </label>
// // //                             <div className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium">
// // //                               {item.total.toFixed(2)} ريال
// // //                             </div>
// // //                           </div>
// // //                           <div className="flex items-end">
// // //                             {invoiceData.items.length > 1 && (
// // //                               <button
// // //                                 onClick={() => removeItem(item.id)}
// // //                                 className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
// // //                               >
// // //                                 <Trash2 size={16} />
// // //                               </button>
// // //                             )}
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 {/* Totals */}
// // //                 <div className="bg-gray-50 rounded-lg p-4">
// // //                   <div className="space-y-2">
// // //                     <div className="flex justify-between text-gray-600">
// // //                       <span>المجموع الفرعي:</span>
// // //                       <span>{calculateSubtotal().toFixed(2)} ريال</span>
// // //                     </div>
// // //                     <div className="flex justify-between text-gray-600">
// // //                       <span>الضريبة (15%):</span>
// // //                       <span>{calculateTax().toFixed(2)} ريال</span>
// // //                     </div>
// // //                     <div className="flex justify-between text-gray-600">
// // //                       <span>الخصم:</span>
// // //                       <input
// // //                         type="number"
// // //                         min="0"
// // //                         step="0.01"
// // //                         value={discount}
// // //                         onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
// // //                         className="text-right w-24 border border-gray-300 rounded-lg px-2"
// // //                       />
// // //                     </div>
// // //                     <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-2">
// // //                       <span>الإجمالي:</span>
// // //                       <span>{calculateTotal().toFixed(2)} ريال</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Company Info & Actions */}
// // //             <div className="space-y-6">
// // //               {/* Company Information */}
// // //               <div className="bg-white rounded-2xl shadow-xl p-6">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
// // //                   <div className="w-6 h-6 bg-gradient-secondary rounded-lg flex items-center justify-center">
// // //                     <span className="text-white text-sm">🏢</span>
// // //                   </div>
// // //                   معلومات الشركة
// // //                 </h3>

// // //                 <div className="space-y-3">
// // //                   <div className="text-center">
// // //                     <h4 className="text-lg font-bold text-primary-600 mb-1 arabic-font-bold">
// // //                       {companyInfo.name}
// // //                     </h4>
// // //                     <p className="text-sm text-gray-600 mb-2">
// // //                       {companyInfo.englishName}
// // //                     </p>
// // //                     <p className="text-sm text-gray-700 font-medium">
// // //                       {companyInfo.owner}
// // //                     </p>
// // //                   </div>

// // //                   <div className="space-y-2 text-sm">
// // //                     <div className="flex items-center gap-2">
// // //                       <span className="text-gray-500">📞</span>
// // //                       <span className="text-gray-800 font-medium">
// // //                         {companyInfo.phone}
// // //                       </span>
// // //                     </div>
// // //                     <div className="flex items-center gap-2">
// // //                       <span className="text-gray-500">✉️</span>
// // //                       <span className="text-gray-800 font-medium">
// // //                         {companyInfo.email}
// // //                       </span>
// // //                     </div>
// // //                     <div className="flex items-center gap-2">
// // //                       <span className="text-gray-500">🌐</span>
// // //                       <span className="text-gray-800 font-medium">
// // //                         {companyInfo.website}
// // //                       </span>
// // //                     </div>
// // //                     <div className="flex items-center gap-2">
// // //                       <span className="text-gray-500">📍</span>
// // //                       <span className="text-gray-800 font-medium arabic-font">
// // //                         {companyInfo.address}
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Action Buttons */}
// // //               <div className="bg-white rounded-2xl shadow-xl p-6">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">
// // //                   الإجراءات
// // //                 </h3>

// // //                 <div className="space-y-3">
// // //                   <button
// // //                     onClick={sendWhatsApp}
// // //                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium"
// // //                   >
// // //                     <Send size={18} />
// // //                     إرسال عبر واتساب
// // //                   </button>

// // //                   <button
// // //                     onClick={generateAndSendPDF}
// // //                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
// // //                   >
// // //                     <Download size={18} />
// // //                     تحميل وإرسال PDF
// // //                   </button>

// // //                   <button
// // //                     onClick={() => window.print()}
// // //                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-secondary text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
// // //                   >
// // //                     <Printer size={18} />
// // //                     طباعة العرض
// // //                   </button>

// // //                   <button
// // //                     onClick={saveInvoice}
// // //                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-accent text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
// // //                   >
// // //                     <Save size={18} />
// // //                     حفظ كملف
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Customer Info Modal */}
// // //       {showCustomerModal && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //           <div className="bg-white rounded-2xl p-6 max-w-md w-full">
// // //             <div className="flex items-center justify-between mb-4">
// // //               <h3 className="text-xl font-bold text-gray-800">
// // //                 تعديل البيانات الشخصية
// // //               </h3>
// // //               <button
// // //                 onClick={() => setShowCustomerModal(false)}
// // //                 className="text-gray-400 hover:text-gray-600"
// // //               >
// // //                 <X size={24} />
// // //               </button>
// // //             </div>

// // //             <div className="space-y-4">
// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                   الاسم
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   value={customerName}
// // //                   onChange={(e) => setCustomerName(e.target.value)}
// // //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                   placeholder="أدخل اسمك"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                   العنوان
// // //                 </label>
// // //                 <textarea
// // //                   value={customerAddress}
// // //                   onChange={(e) => setCustomerAddress(e.target.value)}
// // //                   rows="3"
// // //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                   placeholder="أدخل عنوانك"
// // //                 />
// // //               </div>
// // //               <button
// // //                 onClick={saveCustomerInfo}
// // //                 className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
// // //               >
// // //                 حفظ البيانات
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Social Modal */}
// // //       {showSocialModal && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //           <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
// // //             <div className="flex items-center justify-between mb-4">
// // //               <h3 className="text-xl font-bold text-gray-800">
// // //                 التعليقات والتفاعل
// // //               </h3>
// // //               <button
// // //                 onClick={() => setShowSocialModal(false)}
// // //                 className="text-gray-400 hover:text-gray-600"
// // //               >
// // //                 <X size={24} />
// // //               </button>
// // //             </div>

// // //             <div className="space-y-4">
// // //               {/* Add Comment */}
// // //               <div className="flex gap-2">
// // //                 <input
// // //                   type="text"
// // //                   value={newComment}
// // //                   onChange={(e) => setNewComment(e.target.value)}
// // //                   className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// // //                   placeholder="أضف تعليقك هنا..."
// // //                   onKeyPress={(e) => e.key === "Enter" && addComment()}
// // //                 />
// // //                 <button
// // //                   onClick={addComment}
// // //                   className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
// // //                 >
// // //                   إرسال
// // //                 </button>
// // //               </div>

// // //               {/* Comments List */}
// // //               <div className="space-y-3">
// // //                 {comments.map((comment) => (
// // //                   <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
// // //                     <div className="flex items-center justify-between mb-2">
// // //                       <span className="font-semibold text-gray-800">
// // //                         {comment.author}
// // //                       </span>
// // //                       <span className="text-sm text-gray-500">
// // //                         {comment.timestamp}
// // //                       </span>
// // //                     </div>
// // //                     <p className="text-gray-700">{comment.text}</p>
// // //                   </div>
// // //                 ))}
// // //                 {comments.length === 0 && (
// // //                   <p className="text-center text-gray-500 py-4">
// // //                     لا توجد تعليقات بعد
// // //                   </p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import { useState, useEffect } from "react";
// // import {
// //   Plus,
// //   Trash2,
// //   Download,
// //   Printer,
// //   Save,
// //   Heart,
// //   Share2,
// //   MessageCircle,
// //   Send,
// //   User,
// //   Lock,
// //   X,
// //   Star,
// // } from "lucide-react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import QRCode from "qrcode";

// // export default function BillingPage() {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [customerName, setCustomerName] = useState("");
// //   const [customerAddress, setCustomerAddress] = useState("");
// //   const [showLoginModal, setShowLoginModal] = useState(true);
// //   const [showSocialModal, setShowSocialModal] = useState(false);
// //   const [showCustomerModal, setShowCustomerModal] = useState(false);
// //   const [loginAttempts, setLoginAttempts] = useState(0);
// //   const [loginDisabled, setLoginDisabled] = useState(false);
// //   const [loginDisabledTime, setLoginDisabledTime] = useState(0);
// //   const [likes, setLikes] = useState(0);
// //   const [loves, setLoves] = useState(0);
// //   const [comments, setComments] = useState([]);
// //   const [newComment, setNewComment] = useState("");
// //   const [isLiked, setIsLiked] = useState(false);
// //   const [isLoved, setIsLoved] = useState(false);
// //   // Changed discount state to a percentage
// //   const [discountPercentage, setDiscountPercentage] = useState(0); 
// //   const [qrCodeUrl, setQrCodeUrl] = useState("");

// //   // Load social data from localStorage
// //   useEffect(() => {
// //     const savedLikes = localStorage.getItem("billingLikes");
// //     const savedLoves = localStorage.getItem("billingLoves");
// //     const savedComments = localStorage.getItem("billingComments");
// //     const savedIsLiked = localStorage.getItem("billingIsLiked");
// //     const savedIsLoved = localStorage.getItem("billingIsLoved");

// //     if (savedLikes) setLikes(parseInt(savedLikes));
// //     if (savedLoves) setLoves(parseInt(savedLoves));
// //     if (savedComments) setComments(JSON.parse(savedComments));
// //     if (savedIsLiked) setIsLiked(savedIsLiked === "true");
// //     if (savedIsLoved) setIsLoved(savedIsLoved === "true");
// //   }, []);

// //   const [invoiceData, setInvoiceData] = useState({
// //     invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
// //     date: new Date().toISOString().split("T")[0],
// //     customerName: "",
// //     customerAddress: "",
// //     customerPhone: "",
// //     customerEmail: "",
// //     items: [
// //       {
// //         id: 1,
// //         name: "",
// //         description: "",
// //         quantity: 1,
// //         price: 0,
// //         total: 0,
// //       },
// //     ],
// //   });

// //   const [companyInfo] = useState({
// //     name: "مطابع نبراس العرب",
// //     englishName: "Nebras Al Arab Printer",
// //     owner: "محمد الديواني",
// //     phone: "+966540584952",
// //     email: "dewany1979@gmail.com",
// //     address: "الرياض، المملكة العربية السعودية",
// //     website: "www.nebras-alarab.com",
// //     bankAccountNumber: "SA1234567890123456789012",
// //     stcNumber: "0531342697", // Added STC payment method
// //   });

// //   // Check authentication on component mount
// //   useEffect(() => {
// //     const savedAuth = localStorage.getItem("billingAuth");
// //     const lastLogin = localStorage.getItem("lastLogin");

// //     if (savedAuth) {
// //       const authData = JSON.parse(savedAuth);
// //       // Check if session is still valid (24 hours)
// //       if (
// //         lastLogin &&
// //         Date.now() - new Date(lastLogin).getTime() < 24 * 60 * 60 * 1000
// //       ) {
// //         if (authData.username === "dewany") {
// //           setIsAuthenticated(true);
// //           setShowLoginModal(false);
// //           setUsername(authData.username);
// //           setCustomerName(authData.customerName || "");
// //           setCustomerAddress(authData.customerAddress || "");
// //         }
// //       } else {
// //         // Session expired, clear storage
// //         localStorage.removeItem("billingAuth");
// //         localStorage.removeItem("lastLogin");
// //       }
// //     }

// //     // Check if login is temporarily disabled
// //     const disabledUntil = localStorage.getItem("loginDisabledUntil");
// //     if (disabledUntil && Date.now() < parseInt(disabledUntil)) {
// //       setLoginDisabled(true);
// //       setLoginDisabledTime(parseInt(disabledUntil) - Date.now());
// //     }
// //   }, []);

// //   // Countdown for login disable
// //   useEffect(() => {
// //     let timer;
// //     if (loginDisabled && loginDisabledTime > 0) {
// //       timer = setInterval(() => {
// //         setLoginDisabledTime((prev) => {
// //           if (prev <= 1000) {
// //             setLoginDisabled(false);
// //             localStorage.removeItem("loginDisabledUntil");
// //             localStorage.removeItem("loginAttempts");
// //             return 0;
// //           }
// //           return prev - 1000;
// //         });
// //       }, 1000);
// //     }
// //     return () => clearInterval(timer);
// //   }, [loginDisabled]);

// //   // Generate QR code whenever invoice data changes
// //   useEffect(() => {
// //     const generateQrCode = async () => {
// //       try {
// //         // Encode a more comprehensive JSON object for the QR code
// //         const qrData = {
// //           invoiceNumber: invoiceData.invoiceNumber,
// //           date: invoiceData.date,
// //           customerName: invoiceData.customerName,
// //           company: companyInfo.name,
// //           total: calculateTotal(),
// //           subtotal: calculateSubtotal(),
// //           tax: calculateTax(),
// //           discount: calculateDiscountAmount(), // Use new discount amount
// //           items: invoiceData.items.map(item => ({
// //             name: item.name,
// //             quantity: item.quantity,
// //             price: item.price,
// //             total: item.total
// //           })),
// //           paymentMethods: {
// //             bank: companyInfo.bankAccountNumber,
// //             stcPay: companyInfo.stcNumber
// //           },
// //         };
// //         const url = await QRCode.toDataURL(JSON.stringify(qrData, null, 2));
// //         setQrCodeUrl(url);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     generateQrCode();
// //   }, [invoiceData, discountPercentage]);

// //   const handleLogin = () => {
// //     if (loginDisabled) {
// //       alert(
// //         `تم تعطيل محاولات تسجيل الدخول مؤقتًا. الرجاء المحاولة مرة أخرى بعد ${Math.ceil(
// //           loginDisabledTime / 1000
// //         )} ثانية.`
// //       );
// //       return;
// //     }

// //     if (username === "dewany" && password === "dewany123") {
// //       setIsAuthenticated(true);
// //       setShowLoginModal(false);
// //       setLoginAttempts(0);

// //       const authData = {
// //         username,
// //         customerName,
// //         customerAddress,
// //       };
// //       localStorage.setItem("billingAuth", JSON.stringify(authData));
// //       localStorage.setItem("lastLogin", new Date().toISOString());
// //       localStorage.removeItem("loginAttempts");
// //       localStorage.removeItem("loginDisabledUntil");
// //     } else {
// //       const newAttempts = loginAttempts + 1;
// //       setLoginAttempts(newAttempts);

// //       if (newAttempts >= 3) {
// //         // Disable login for 5 minutes after 3 failed attempts
// //         const disableUntil = Date.now() + 5 * 60 * 1000;
// //         setLoginDisabled(true);
// //         setLoginDisabledTime(5 * 60 * 1000);
// //         localStorage.setItem("loginDisabledUntil", disableUntil.toString());
// //         localStorage.setItem("loginAttempts", newAttempts.toString());
// //         alert(
// //           "تم تعطيل تسجيل الدخول مؤقتًا بسبب كثرة المحاولات الفاشلة. الرجاء المحاولة مرة أخرى بعد 5 دقائق."
// //         );
// //       } else {
// //         localStorage.setItem("loginAttempts", newAttempts.toString());
// //         alert(
// //           "بيانات الدخول غير صحيحة. فقط المستخدمون المصرح لهم يمكنهم الوصول إلى هذه الصفحة."
// //         );
// //       }
// //     }
// //   };

// //   const handleLogout = () => {
// //     setIsAuthenticated(false);
// //     setShowLoginModal(true);
// //     setUsername("");
// //     setPassword("");
// //     localStorage.removeItem("billingAuth");
// //     localStorage.removeItem("lastLogin");
// //   };

// //   const saveCustomerInfo = () => {
// //     // Update auth data with new customer info
// //     const authData = {
// //       username,
// //       customerName,
// //       customerAddress,
// //     };
// //     localStorage.setItem("billingAuth", JSON.stringify(authData));
// //     localStorage.setItem("customerName", customerName);
// //     localStorage.setItem("customerAddress", customerAddress);
// //     setShowCustomerModal(false);
// //   };

// //   const addItem = () => {
// //     const newItem = {
// //       id: Date.now(),
// //       name: "",
// //       description: "",
// //       quantity: 1,
// //       price: 0,
// //       total: 0,
// //     };
// //     setInvoiceData((prev) => ({
// //       ...prev,
// //       items: [...prev.items, newItem],
// //     }));
// //   };

// //   const removeItem = (id) => {
// //     setInvoiceData((prev) => ({
// //       ...prev,
// //       items: prev.items.filter((item) => item.id !== id),
// //     }));
// //   };

// //   const updateItem = (id, field, value) => {
// //     setInvoiceData((prev) => ({
// //       ...prev,
// //       items: prev.items.map((item) => {
// //         if (item.id === id) {
// //           const updatedItem = { ...item, [field]: value };
// //           if (field === "quantity" || field === "price") {
// //             updatedItem.total = updatedItem.quantity * updatedItem.price;
// //           }
// //           return updatedItem;
// //         }
// //         return item;
// //       }),
// //     }));
// //   };

// //   const calculateSubtotal = () => {
// //     return invoiceData.items.reduce((sum, item) => sum + item.total, 0);
// //   };

// //   const calculateTax = () => {
// //     return calculateSubtotal() * 0.15;
// //   };

// //   const calculateDiscountAmount = () => {
// //     const subtotal = calculateSubtotal();
// //     const tax = calculateTax();
// //     return (subtotal + tax) * (parseFloat(discountPercentage) || 0) / 100;
// //   };
  
// //   const calculateTotal = () => {
// //     const subtotal = calculateSubtotal();
// //     const tax = calculateTax();
// //     const discountAmount = calculateDiscountAmount();
// //     return subtotal + tax - discountAmount;
// //   };

// //   const saveInvoice = () => {
// //     const invoiceToSave = {
// //       ...invoiceData,
// //       subtotal: calculateSubtotal(),
// //       tax: calculateTax(),
// //       discountPercentage,
// //       discountAmount: calculateDiscountAmount(),
// //       total: calculateTotal(),
// //       companyInfo,
// //     };
// //     const dataStr = JSON.stringify(invoiceToSave, null, 2);
// //     const dataBlob = new Blob([dataStr], { type: "application/json" });

// //     const link = document.createElement("a");
// //     link.href = URL.createObjectURL(dataBlob);
// //     link.download = `invoice-${invoiceData.invoiceNumber}.json`;
// //     link.click();
// //   };

// //   const sendWhatsApp = () => {
// //     const message = `مرحباً، أريد عرض سعر من مطابع نبراس العرب
      
// // اسم العميل: ${customerName || "غير محدد"}
// // العنوان: ${customerAddress || "غير محدد"}
      
// // تفاصيل الطلب:
// // ${invoiceData.items
// //   .map(
// //     (item) =>
// //       `- ${item.name}: ${item.quantity} × ${item.price} ريال = ${item.total} ريال`
// //   )
// //   .join("\n")}
      
// // المجموع: ${calculateTotal().toFixed(2)} ريال
      
// // رقم الفاتورة: ${invoiceData.invoiceNumber}`;
// //     const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
// //       /\D/g,
// //       ""
// //     )}?text=${encodeURIComponent(message)}`;
// //     window.open(whatsappUrl, "_blank");
// //   };

// //   const generateAndSendPDF = () => {
// //     const subtotal = calculateSubtotal();
// //     const tax = calculateTax();
// //     const discountAmount = calculateDiscountAmount();
// //     const total = calculateTotal();

// //     // Create invoice content for PDF
// //     const invoiceContent = `
// //       <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; direction: rtl; text-align: right;">
// //         <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 2px solid #10b981; padding-bottom: 20px;">
// //           <div style="text-align: right;">
// //             <h1 style="color: #10b981; margin: 0; font-size: 28px;">مطابع نبراس العرب</h1>
// //             <p style="color: #6b7280; margin: 5px 0; font-size: 16px;">Nebras Al Arab Printer</p>
// //             <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">محمد الديواني</p>
// //             <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">الحساب البنكي: ${companyInfo.bankAccountNumber}</p>
// //             <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">STC Pay: ${companyInfo.stcNumber}</p>
// //           </div>
// //           <div style="text-align: left;">
// //             <img src="/dwn/Logo.svg" alt="Logo" style="width: 80px; height: 80px; margin-bottom: 10px;">
// //           </div>
// //         </div>

// //         <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
// //           <div>
// //             <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 24px;">عرض سعر</h2>
// //             <p style="margin: 5px 0; color: #6b7280;"><strong>رقم العرض:</strong> ${
// //               invoiceData.invoiceNumber
// //             }</p>
// //             <p style="margin: 5px 0; color: #6b7280;"><strong>التاريخ:</strong> ${
// //               invoiceData.date
// //             }</p>
// //           </div>
// //           <div style="text-align: left;">
// //             <h3 style="color: #1f2937; margin: 0 0 10px 0;">معلومات العميل</h3>
// //             <p style="margin: 5px 0; color: #6b7280;"><strong>الاسم:</strong> ${
// //               invoiceData.customerName || customerName || "غير محدد"
// //             }</p>
// //             <p style="margin: 5px 0; color: #6b7280;"><strong>العنوان:</strong> ${
// //               invoiceData.customerAddress || customerAddress || "غير محدد"
// //             }</p>
// //             <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
// //               invoiceData.customerPhone || "غير محدد"
// //             }</p>
// //             <p style="margin: 5px 0; color: #6b7280;"><strong>البريد:</strong> ${
// //               invoiceData.customerEmail || "غير محدد"
// //             }</p>
// //           </div>
// //         </div>

// //         <div style="margin-bottom: 30px;">
// //           <h3 style="color: #1f2937; margin: 0 0 15px 0;">المنتجات</h3>
// //           <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
// //             <thead>
// //               <tr style="background-color: #f9fafb;">
// //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #1f2937;">المنتج</th>
// //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الكمية</th>
// //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">السعر</th>
// //                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الإجمالي</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               ${invoiceData.items
// //                 .map(
// //                   (item) => `
// //                 <tr>
// //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #374151;">${
// //                     item.name || "غير محدد"
// //                   }</td>
// //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${
// //                     item.quantity
// //                   }</td>
// //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.price.toFixed(
// //                     2
// //                   )} ريال</td>
// //                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.total.toFixed(
// //                     2
// //                   )} ريال</td>
// //                 </tr>
// //                 `
// //                 )
// //                 .join("")}
// //             </tbody>
// //           </table>
// //         </div>

// //         <div style="text-align: left; margin-bottom: 30px;">
// //           <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
// //             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
// //               <span style="color: #6b7280;">المجموع الفرعي:</span>
// //               <span style="color: #1f2937; font-weight: bold;">${subtotal.toFixed(
// //                 2
// //               )} ريال</span>
// //             </div>
// //             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
// //               <span style="color: #6b7280;">الضريبة (15%):</span>
// //               <span style="color: #1f2937; font-weight: bold;">${tax.toFixed(
// //                 2
// //               )} ريال</span>
// //             </div>
// //             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
// //               <span style="color: #6b7280;">الخصم (${discountPercentage}%):</span>
// //               <span style="color: #1f2937; font-weight: bold;">-${discountAmount.toFixed(
// //                 2
// //               )} ريال</span>
// //             </div>
// //             <div style="display: flex; justify-content: space-between; border-top: 1px solid #e5e7eb; padding-top: 10px;">
// //               <span style="color: #1f2937; font-weight: bold; font-size: 18px;">الإجمالي:</span>
// //               <span style="color: #10b981; font-weight: bold; font-size: 18px;">${total.toFixed(
// //                 2
// //               )} ريال</span>
// //             </div>
// //           </div>
// //         </div>

// //         <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; text-align: center;">
// //           <h4 style="color: #1f2937; margin: 0 0 15px 0;">معلومات الشركة</h4>
// //           <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
// //             companyInfo.phone
// //           }</p>
// //           <p style="margin: 5px 0; color: #6b7280;"><strong>البريد الإلكتروني:</strong> ${
// //             companyInfo.email
// //           }</p>
// //           <p style="margin: 5px 0; color: #6b7280;"><strong>الموقع:</strong> ${
// //             companyInfo.website
// //           }</p>
// //           <p style="margin: 5px 0; color: #6b7280;"><strong>العنوان:</strong> ${
// //             companyInfo.address
// //           }</p>
// //           <p style="margin: 5px 0; color: #6b7280;"><strong>رقم الحساب البنكي:</strong> ${
// //             companyInfo.bankAccountNumber
// //           }</p>
// //           <p style="margin: 5px 0; color: #6b7280;"><strong>STC Pay:</strong> ${
// //             companyInfo.stcNumber
// //           }</p>
// //           ${qrCodeUrl ? `<div style="margin-top: 20px;"><img src="${qrCodeUrl}" alt="QR Code" style="width: 150px; height: 150px;" /></div>` : ''}
// //         </div>

// //         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
// //           <p>شكراً لاختياركم مطابع نبراس العرب</p>
// //           <p>Thank you for choosing Nebras Al Arab Printer</p>
// //         </div>
// //       </div>
// //     `;

// //     // Create a new window with the invoice content
// //     const printWindow = window.open("", "_blank");
// //     printWindow.document.write(`
// //       <!DOCTYPE html>
// //       <html dir="rtl">
// //         <head>
// //           <title>عرض سعر - ${invoiceData.invoiceNumber}</title>
// //           <meta charset="utf-8">
// //           <style>
// //             body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
// //             @media print {
// //               body { margin: 0; }
// //               .no-print { display: none; }
// //             }
// //           </style>
// //         </head>
// //         <body>
// //           ${invoiceContent}
// //           <div class="no-print" style="text-align: center; margin-top: 30px;">
// //             <button onclick="window.print()" style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
// //               طباعة PDF
// //             </button>
// //             <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
// //               إغلاق
// //             </button>
// //           </div>
// //         </body>
// //       </html>
// //     `);
// //     printWindow.document.close();

// //     // After a short delay, send WhatsApp message with PDF info
// //     setTimeout(() => {
// //       const pdfMessage = `مرحباً، تم إنشاء عرض سعر كامل
      
// // رقم العرض: ${invoiceData.invoiceNumber}
// // اسم العميل: ${customerName || "غير محدد"}
// // المجموع: ${calculateTotal().toFixed(2)} ريال
      
// // تم إنشاء PDF كامل للعرض مع جميع التفاصيل.
// // يمكنك طباعته أو حفظه كملف PDF.`;

// //       const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
// //         /\D/g,
// //         ""
// //       )}?text=${encodeURIComponent(pdfMessage)}`;
// //       window.open(whatsappUrl, "_blank");
// //     }, 1000);
// //   };

// //   const handleLike = () => {
// //     const newLikes = isLiked ? likes - 1 : likes + 1;
// //     setLikes(newLikes);
// //     setIsLiked(!isLiked);
// //     localStorage.setItem("billingLikes", newLikes.toString());
// //     localStorage.setItem("billingIsLiked", (!isLiked).toString());
// //   };

// //   const handleLove = () => {
// //     const newLoves = isLoved ? loves - 1 : loves + 1;
// //     setLoves(newLoves);
// //     setIsLoved(!isLoved);
// //     localStorage.setItem("billingLoves", newLoves.toString());
// //     localStorage.setItem("billingIsLoved", (!isLoved).toString());
// //   };

// //   const addComment = () => {
// //     if (newComment.trim()) {
// //       const comment = {
// //         id: Date.now(),
// //         text: newComment,
// //         author: customerName || "مستخدم",
// //         timestamp: new Date().toLocaleString("ar-SA"),
// //       };
// //       const newComments = [...comments, comment];
// //       setComments(newComments);
// //       setNewComment("");
// //       localStorage.setItem("billingComments", JSON.stringify(newComments));
// //     }
// //   };

// //   const sharePage = () => {
// //     if (navigator.share) {
// //       navigator.share({
// //         title: "عرض سعر - مطابع نبراس العرب",
// //         text: "انضم إلينا للحصول على أفضل عروض الطباعة",
// //         url: window.location.href,
// //       });
// //     } else {
// //       navigator.clipboard.writeText(window.location.href);
// //       alert("تم نسخ الرابط إلى الحافظة");
// //     }
// //   };

// //   // If not authenticated, show customer input form first
// //   if (!isAuthenticated) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
// //         {/* Login Modal - Always visible when not authenticated */}
// //         <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
// //           <div className="text-center mb-8">
// //             <div className="w-20 h-20 mx-auto mb-4">
// //               <img
// //                 src="/dwn/Logo.svg"
// //                 alt="Nebras Al Arab Logo"
// //                 className="w-full h-full object-contain"
// //               />
// //             </div>
// //             <h1 className="text-2xl font-bold text-gray-800 mb-2">
// //               تسجيل دخول الموظفين
// //             </h1>
// //             <p className="text-gray-600 arabic-font">للموظفين المصرح لهم فقط</p>
// //             {loginDisabled && (
// //               <p className="text-red-500 mt-2">
// //                 تم تعطيل التسجيل مؤقتًا. الرجاء المحاولة بعد{" "}
// //                 {Math.ceil(loginDisabledTime / 1000)} ثانية.
// //               </p>
// //             )}
// //           </div>

// //           <div className="space-y-4">
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 اسم المستخدم
// //               </label>
// //               <input
// //                 type="text"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// //                 placeholder="أدخل اسم المستخدم"
// //                 disabled={loginDisabled}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 كلمة المرور
// //               </label>
// //               <input
// //                 type="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// //                 placeholder="أدخل كلمة المرور"
// //                 disabled={loginDisabled}
// //                 onKeyPress={(e) =>
// //                   e.key === "Enter" && !loginDisabled && handleLogin()
// //                 }
// //               />
// //             </div>
// //             <button
// //               onClick={handleLogin}
// //               disabled={loginDisabled}
// //               className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               تسجيل الدخول
// //             </button>
// //           </div>

// //           <div className="mt-6 text-center text-sm text-gray-500">
// //             <p>فقط المستخدمين المصرح لهم يمكنهم الوصول</p>
// //             {/* <p className="mt-1">Username: dewany | Password: dewany123</p> */}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
// //       {/* Header */}
// //       <header className="bg-white shadow-lg border-b border-gray-200">
// //         <div className="container mx-auto px-4 py-4">
// //           <div className="flex items-center justify-between">
// //             <Link href="/" className="flex items-center space-x-3">
// //               <div className="w-12 h-12">
// //                 <img
// //                   src="/dwn/Logo.svg"
// //                   alt="Nebras Al Arab Logo"
// //                   className="w-full h-full object-contain"
// //                 />
// //               </div>
// //               <div className="text-left">
// //                 <h1 className="text-xl font-bold text-gray-800">
// //                   Nebras Al Arab
// //                 </h1>
// //                 <p className="text-sm text-gray-600 arabic-font-bold">
// //                   مطابع نبراس العرب
// //                 </p>
// //               </div>
// //             </Link>

// //             <div className="flex items-center space-x-4">
// //               <div className="text-right">
// //                 <p className="text-sm text-gray-600">مرحباً بعودتك</p>
// //                 <p className="font-semibold text-primary-600">
// //                   {customerName || "مستخدم"}
// //                 </p>
// //                 {username && (
// //                   <p className="text-xs text-gray-500">المستخدم: {username}</p>
// //                 )}
// //               </div>
// //               <button
// //                 onClick={() => setShowCustomerModal(true)}
// //                 className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50"
// //               >
// //                 <User size={18} />
// //                 تعديل البيانات
// //               </button>
// //               <button
// //                 onClick={handleLogout}
// //                 className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors rounded-lg hover:bg-red-50"
// //               >
// //                 <Lock size={18} />
// //                 تسجيل الخروج
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       <div className="pt-8 pb-10">
// //         <div className="container mx-auto px-4">
// //           {/* Welcome Section */}
// //           <div className="text-center mb-8">
// //             <h1 className="text-4xl font-bold text-gray-800 mb-2">عرض سعر</h1>
// //             <p className="text-lg text-gray-600 arabic-font mb-4">
// //               نظام إنشاء عروض الأسعار والفواتير
// //             </p>

// //             {/* Social Actions */}
// //             <div className="flex items-center justify-center gap-4 mb-6">
// //               <button
// //                 onClick={handleLike}
// //                 className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
// //                   isLiked
// //                     ? "bg-red-100 text-red-600"
// //                     : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
// //                 }`}
// //               >
// //                 <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
// //                 {likes}
// //               </button>
// //               <button
// //                 onClick={handleLove}
// //                 className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
// //                   isLoved
// //                     ? "bg-pink-100 text-pink-600"
// //                     : "bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600"
// //                 }`}
// //               >
// //                 <Star size={18} fill={isLoved ? "currentColor" : "none"} />
// //                 {loves}
// //               </button>
// //               <button
// //                 onClick={sharePage}
// //                 className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-200"
// //               >
// //                 <Share2 size={18} />
// //                 مشاركة
// //               </button>
// //               <button
// //                 onClick={() => setShowSocialModal(true)}
// //                 className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-all duration-200"
// //               >
// //                 <MessageCircle size={18} />
// //                 تعليقات ({comments.length})
// //               </button>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //             {/* Invoice Form */}
// //             <div className="lg:col-span-2">
// //               <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
// //                 {/* Invoice Header with Logo */}
// //                 <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
// //                   <div className="flex items-center gap-4">
// //                     <div className="w-16 h-16">
// //                       <img
// //                         src="/dwn/Logo.svg"
// //                         alt="Nebras Al Arab Logo"
// //                         className="w-full h-full object-contain"
// //                       />
// //                     </div>
// //                     <div>
// //                       <h2 className="text-2xl font-bold text-gray-800">
// //                         عرض سعر
// //                       </h2>
// //                       <p className="text-gray-600 arabic-font">
// //                         مطابع نبراس العرب
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div className="text-right">
// //                     <p className="text-sm text-gray-500">رقم العرض</p>
// //                     <p className="font-bold text-lg text-primary-600">
// //                       {invoiceData.invoiceNumber}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
// //                   <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
// //                     <span className="text-white font-bold">📄</span>
// //                   </div>
// //                   تفاصيل العرض
// //                 </h2>

// //                 {/* Basic Invoice Info */}
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       رقم العرض
// //                     </label>
// //                     <input
// //                       type="text"
// //                       value={invoiceData.invoiceNumber}
// //                       onChange={(e) =>
// //                         setInvoiceData((prev) => ({
// //                           ...prev,
// //                           invoiceNumber: e.target.value,
// //                         }))
// //                       }
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       التاريخ
// //                     </label>
// //                     <input
// //                       type="date"
// //                       value={invoiceData.date}
// //                       onChange={(e) =>
// //                         setInvoiceData((prev) => ({
// //                           ...prev,
// //                           date: e.target.value,
// //                         }))
// //                       }
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Customer Information */}
// //                 <div className="mb-6">
// //                   <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //                     معلومات العميل
// //                   </h3>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// //                         اسم العميل
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={invoiceData.customerName}
// //                         onChange={(e) =>
// //                           setInvoiceData((prev) => ({
// //                             ...prev,
// //                             customerName: e.target.value,
// //                           }))
// //                         }
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// //                         placeholder="أدخل اسم العميل"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// //                         عنوان العميل
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={invoiceData.customerAddress}
// //                         onChange={(e) =>
// //                           setInvoiceData((prev) => ({
// //                             ...prev,
// //                             customerAddress: e.target.value,
// //                           }))
// //                         }
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// //                         placeholder="أدخل عنوان العميل"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Items Table */}
// //                 <div className="mb-6">
// //                   <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //                     المنتجات
// //                   </h3>
// //                   <div className="space-y-4">
// //                     {invoiceData.items.map((item, index) => (
// //                       <div
// //                         key={item.id}
// //                         className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
// //                       >
// //                         <div className="md:col-span-2">
// //                           <label className="block text-sm font-medium text-gray-700 mb-1">
// //                             اسم المنتج
// //                           </label>
// //                           <input
// //                             type="text"
// //                             value={item.name}
// //                             onChange={(e) =>
// //                               updateItem(item.id, "name", e.target.value)
// //                             }
// //                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-gray-800"
// //                             placeholder="اسم المنتج"
// //                           />
// //                         </div>
// //                         <div>
// //                           <label className="block text-sm font-medium text-gray-700 mb-1">
// //                             الكمية
// //                           </label>
// //                           <input
// //                             type="number"
// //                             value={item.quantity}
// //                             onChange={(e) =>
// //                               updateItem(
// //                                 item.id,
// //                                 "quantity",
// //                                 parseInt(e.target.value) || 0
// //                               )
// //                             }
// //                             min="0"
// //                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-gray-800"
// //                           />
// //                         </div>
// //                         <div>
// //                           <label className="block text-sm font-medium text-gray-700 mb-1">
// //                             السعر
// //                           </label>
// //                           <input
// //                             type="number"
// //                             value={item.price}
// //                             onChange={(e) =>
// //                               updateItem(
// //                                 item.id,
// //                                 "price",
// //                                 parseFloat(e.target.value) || 0
// //                               )
// //                             }
// //                             min="0"
// //                             step="0.01"
// //                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-gray-800"
// //                           />
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                           <div className="flex-1">
// //                             <p className="text-sm font-medium text-gray-700 mb-1">
// //                               الإجمالي
// //                             </p>
// //                             <p className="font-bold text-lg text-primary-600">
// //                               {item.total.toFixed(2)}
// //                             </p>
// //                           </div>
// //                           <button
// //                             onClick={() => removeItem(item.id)}
// //                             className="text-red-500 hover:text-red-700"
// //                           >
// //                             <Trash2 size={20} />
// //                           </button>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                   <button
// //                     onClick={addItem}
// //                     className="mt-4 flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
// //                   >
// //                     <Plus size={20} />
// //                     أضف منتج
// //                   </button>
// //                 </div>

// //                 {/* Totals Section */}
// //                 <div className="flex flex-col items-end gap-3 text-lg">
// //                   <div className="flex items-center gap-4">
// //                     <label className="text-gray-700 font-medium">الخصم (%):</label>
// //                     <input
// //                       type="number"
// //                       value={discountPercentage}
// //                       onChange={(e) => setDiscountPercentage(parseFloat(e.target.value))}
// //                       min="0"
// //                       max="100"
// //                       className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-center"
// //                     />
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                     <span className="text-gray-700 font-medium">المجموع الفرعي:</span>
// //                     <span className="font-bold text-gray-800">
// //                       {calculateSubtotal().toFixed(2)} ريال
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                     <span className="text-gray-700 font-medium">الضريبة (15%):</span>
// //                     <span className="font-bold text-gray-800">
// //                       {calculateTax().toFixed(2)} ريال
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                     <span className="text-gray-700 font-medium">الخصم:</span>
// //                     <span className="font-bold text-gray-800">
// //                       - {calculateDiscountAmount().toFixed(2)} ريال
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-4 pt-4 border-t border-gray-200 w-full justify-end">
// //                     <span className="text-2xl font-bold text-primary-600">الإجمالي:</span>
// //                     <span className="text-2xl font-bold text-primary-600">
// //                       {calculateTotal().toFixed(2)} ريال
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Side Panel with Actions */}
// //             <div className="space-y-6">
// //               <div className="bg-white rounded-2xl shadow-xl p-6">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
// //                   <Star size={20} className="text-yellow-400" />
// //                   أدوات العرض
// //                 </h3>
// //                 <div className="space-y-3">
// //                   <button
// //                     onClick={saveInvoice}
// //                     className="w-full flex items-center justify-center gap-2 bg-slate-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
// //                   >
// //                     <Save size={20} />
// //                     حفظ كملف JSON
// //                   </button>
// //                   <button
// //                     onClick={generateAndSendPDF}
// //                     className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
// //                   >
// //                     <Printer size={20} />
// //                     طباعة/تصدير PDF
// //                   </button>
// //                   <button
// //                     onClick={sendWhatsApp}
// //                     className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
// //                   >
// //                     <Send size={20} />
// //                     إرسال عبر واتساب
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* QR Code Section */}
// //               <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
// //                   <Image src="/dwn/qr.svg" alt="QR Code Icon" width={24} height={24} />
// //                   رمز الدفع السريع
// //                 </h3>
// //                 {qrCodeUrl && (
// //                   <div className="flex flex-col items-center">
// //                     <Image
// //                       src={qrCodeUrl}
// //                       alt="QR Code"
// //                       width={200}
// //                       height={200}
// //                       className="mb-4 rounded-lg shadow-md"
// //                     />
// //                     <p className="text-sm text-gray-600 arabic-font">
// //                       امسح الرمز ضوئياً لعرض تفاصيل الفاتورة
// //                     </p>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Company Info */}
// //               <div className="bg-white rounded-2xl shadow-xl p-6">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
// //                   <Star size={20} className="text-primary-500" />
// //                   معلومات الشركة
// //                 </h3>
// //                 <div className="space-y-2 text-sm text-gray-600">
// //                   <p>
// //                     <span className="font-bold">الهاتف:</span> {companyInfo.phone}
// //                   </p>
// //                   <p>
// //                     <span className="font-bold">البريد الإلكتروني:</span> {companyInfo.email}
// //                   </p>
// //                   <p>
// //                     <span className="font-bold">الموقع:</span> {companyInfo.website}
// //                   </p>
// //                   <p>
// //                     <span className="font-bold">العنوان:</span> {companyInfo.address}
// //                   </p>
// //                   <p>
// //                     <span className="font-bold">رقم الحساب البنكي:</span> {companyInfo.bankAccountNumber}
// //                   </p>
// //                   <p>
// //                     <span className="font-bold">STC Pay:</span> {companyInfo.stcNumber}
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Customer Modal */}
// //       {showCustomerModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
// //             <div className="flex justify-between items-center mb-6">
// //               <h2 className="text-xl font-bold text-gray-800">
// //                 تعديل بيانات العميل
// //               </h2>
// //               <button
// //                 onClick={() => setShowCustomerModal(false)}
// //                 className="text-gray-500 hover:text-gray-700"
// //               >
// //                 <X size={24} />
// //               </button>
// //             </div>
// //             <div className="space-y-4">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   اسم العميل
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={customerName}
// //                   onChange={(e) => setCustomerName(e.target.value)}
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800"
// //                   placeholder="أدخل اسم العميل"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   عنوان العميل
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={customerAddress}
// //                   onChange={(e) => setCustomerAddress(e.target.value)}
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800"
// //                   placeholder="أدخل عنوان العميل"
// //                 />
// //               </div>
// //             </div>
// //             <div className="mt-6 flex justify-end">
// //               <button
// //                 onClick={saveCustomerInfo}
// //                 className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
// //               >
// //                 حفظ
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Social Modal */}
// //       {showSocialModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full">
// //             <div className="flex justify-between items-center mb-6">
// //               <h2 className="text-xl font-bold text-gray-800">التعليقات والمشاركات</h2>
// //               <button
// //                 onClick={() => setShowSocialModal(false)}
// //                 className="text-gray-500 hover:text-gray-700"
// //               >
// //                 <X size={24} />
// //               </button>
// //             </div>

// //             <div className="space-y-6">
// //               {/* Comment Input */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   إضافة تعليق
// //                 </label>
// //                 <div className="flex items-center gap-2">
// //                   <input
// //                     type="text"
// //                     value={newComment}
// //                     onChange={(e) => setNewComment(e.target.value)}
// //                     className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
// //                     placeholder="أضف تعليقك هنا..."
// //                     onKeyPress={(e) => e.key === "Enter" && addComment()}
// //                   />
// //                   <button
// //                     onClick={addComment}
// //                     className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
// //                   >
// //                     إرسال
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Comments List */}
// //               <div className="space-y-3">
// //                 {comments.map((comment) => (
// //                   <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
// //                     <div className="flex items-center justify-between mb-2">
// //                       <span className="font-semibold text-gray-800">
// //                         {comment.author}
// //                       </span>
// //                       <span className="text-sm text-gray-500">
// //                         {comment.timestamp}
// //                       </span>
// //                     </div>
// //                     <p className="text-gray-700">{comment.text}</p>
// //                   </div>
// //                 ))}
// //                 {comments.length === 0 && (
// //                   <p className="text-center text-gray-500 py-4">
// //                     لا توجد تعليقات بعد
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// "use client";
// import { useState, useEffect } from "react";
// import {
//   Plus,
//   Trash2,
//   Download,
//   Printer,
//   Save,
//   Heart,
//   Share2,
//   MessageCircle,
//   Send,
//   User,
//   Lock,
//   X,
//   Star,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default function BillingPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [customerAddress, setCustomerAddress] = useState("");
//   const [showLoginModal, setShowLoginModal] = useState(true);
//   const [showSocialModal, setShowSocialModal] = useState(false);
//   const [showCustomerModal, setShowCustomerModal] = useState(false);
//   const [loginAttempts, setLoginAttempts] = useState(0);
//   const [loginDisabled, setLoginDisabled] = useState(false);
//   const [loginDisabledTime, setLoginDisabledTime] = useState(0);
//   const [likes, setLikes] = useState(0);
//   const [loves, setLoves] = useState(0);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [isLiked, setIsLiked] = useState(false);
//   const [isLoved, setIsLoved] = useState(false);
//   const [discount, setDiscount] = useState(0);
//   const [discountType, setDiscountType] = useState("number");

//   // Load social data from localStorage
//   useEffect(() => {
//     const savedLikes = localStorage.getItem("billingLikes");
//     const savedLoves = localStorage.getItem("billingLoves");
//     const savedComments = localStorage.getItem("billingComments");
//     const savedIsLiked = localStorage.getItem("billingIsLiked");
//     const savedIsLoved = localStorage.getItem("billingIsLoved");

//     if (savedLikes) setLikes(parseInt(savedLikes));
//     if (savedLoves) setLoves(parseInt(savedLoves));
//     if (savedComments) setComments(JSON.parse(savedComments));
//     if (savedIsLiked) setIsLiked(savedIsLiked === "true");
//     if (savedIsLoved) setIsLoved(savedIsLoved === "true");
//   }, []);

//   const [invoiceData, setInvoiceData] = useState({
//     invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
//     date: new Date().toISOString().split("T")[0],
//     customerName: "",
//     customerAddress: "",
//     customerPhone: "",
//     customerEmail: "",
//     items: [
//       {
//         id: 1,
//         name: "",
//         description: "",
//         quantity: 1,
//         price: 0,
//         total: 0,
//       },
//     ],
//   });

//   const [companyInfo] = useState({
//     name: "مطابع نبراس العرب",
//     englishName: "Nebras Al Arab Printer",
//     owner: "محمد الديواني",
//     phone: "+966540584952",
//     email: "dewany1979@gmail.com",
//     address: "الرياض، المملكة العربية السعودية",
//     website: "www.nebras-alarab.com",
//     bankAccount: "SA12 3456 7890 1234 5678 9012",
//   });

//   // Check authentication on component mount
//   useEffect(() => {
//     const savedAuth = localStorage.getItem("billingAuth");
//     const lastLogin = localStorage.getItem("lastLogin");

//     if (savedAuth) {
//       const authData = JSON.parse(savedAuth);
//       // Check if session is still valid (24 hours)
//       if (
//         lastLogin &&
//         Date.now() - new Date(lastLogin).getTime() < 24 * 60 * 60 * 1000
//       ) {
//         if (authData.username === "dewany") {
//           setIsAuthenticated(true);
//           setShowLoginModal(false);
//           setUsername(authData.username);
//           setCustomerName(authData.customerName || "");
//           setCustomerAddress(authData.customerAddress || "");
//         }
//       } else {
//         // Session expired, clear storage
//         localStorage.removeItem("billingAuth");
//         localStorage.removeItem("lastLogin");
//       }
//     }

//     // Check if login is temporarily disabled
//     const disabledUntil = localStorage.getItem("loginDisabledUntil");
//     if (disabledUntil && Date.now() < parseInt(disabledUntil)) {
//       setLoginDisabled(true);
//       setLoginDisabledTime(parseInt(disabledUntil) - Date.now());
//     }
//   }, []);

//   // Countdown for login disable
//   useEffect(() => {
//     let timer;
//     if (loginDisabled && loginDisabledTime > 0) {
//       timer = setInterval(() => {
//         setLoginDisabledTime((prev) => {
//           if (prev <= 1000) {
//             setLoginDisabled(false);
//             localStorage.removeItem("loginDisabledUntil");
//             localStorage.removeItem("loginAttempts");
//             return 0;
//           }
//           return prev - 1000;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [loginDisabled]);

//   const handleLogin = () => {
//     if (loginDisabled) {
//       alert(
//         `تم تعطيل محاولات تسجيل الدخول مؤقتًا. الرجاء المحاولة مرة أخرى بعد ${Math.ceil(
//           loginDisabledTime / 1000
//         )} ثانية.`
//       );
//       return;
//     }

//     if (username === "dewany" && password === "dewany123") {
//       setIsAuthenticated(true);
//       setShowLoginModal(false);
//       setLoginAttempts(0);

//       const authData = {
//         username,
//         customerName,
//         customerAddress,
//       };
//       localStorage.setItem("billingAuth", JSON.stringify(authData));
//       localStorage.setItem("lastLogin", new Date().toISOString());
//       localStorage.removeItem("loginAttempts");
//       localStorage.removeItem("loginDisabledUntil");
//     } else {
//       const newAttempts = loginAttempts + 1;
//       setLoginAttempts(newAttempts);

//       if (newAttempts >= 3) {
//         // Disable login for 5 minutes after 3 failed attempts
//         const disableUntil = Date.now() + 5 * 60 * 1000;
//         setLoginDisabled(true);
//         setLoginDisabledTime(5 * 60 * 1000);
//         localStorage.setItem("loginDisabledUntil", disableUntil.toString());
//         localStorage.setItem("loginAttempts", newAttempts.toString());
//         alert(
//           "تم تعطيل تسجيل الدخول مؤقتًا بسبب كثرة المحاولات الفاشلة. الرجاء المحاولة مرة أخرى بعد 5 دقائق."
//         );
//       } else {
//         localStorage.setItem("loginAttempts", newAttempts.toString());
//         alert(
//           "بيانات الدخول غير صحيحة. فقط المستخدمون المصرح لهم يمكنهم الوصول إلى هذه الصفحة."
//         );
//       }
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setShowLoginModal(true);
//     setUsername("");
//     setPassword("");
//     localStorage.removeItem("billingAuth");
//     localStorage.removeItem("lastLogin");
//   };

//   const saveCustomerInfo = () => {
//     // Update auth data with new customer info
//     const authData = {
//       username,
//       customerName,
//       customerAddress,
//     };
//     localStorage.setItem("billingAuth", JSON.stringify(authData));
//     localStorage.setItem("customerName", customerName);
//     localStorage.setItem("customerAddress", customerAddress);
//     setShowCustomerModal(false);
//   };

//   const addItem = () => {
//     const newItem = {
//       id: Date.now(),
//       name: "",
//       description: "",
//       quantity: 1,
//       price: 0,
//       total: 0,
//     };
//     setInvoiceData((prev) => ({
//       ...prev,
//       items: [...prev.items, newItem],
//     }));
//   };

//   const removeItem = (id) => {
//     setInvoiceData((prev) => ({
//       ...prev,
//       items: prev.items.filter((item) => item.id !== id),
//     }));
//   };

//   const updateItem = (id, field, value) => {
//     setInvoiceData((prev) => ({
//       ...prev,
//       items: prev.items.map((item) => {
//         if (item.id === id) {
//           const updatedItem = { ...item, [field]: value };
//           if (field === "quantity" || field === "price") {
//             updatedItem.total = updatedItem.quantity * updatedItem.price;
//           }
//           return updatedItem;
//         }
//         return item;
//       }),
//     }));
//   };

//   const calculateSubtotal = () => {
//     return invoiceData.items.reduce((sum, item) => sum + item.total, 0);
//   };

//   const calculateDiscountAmount = () => {
//     const subtotal = calculateSubtotal();
//     if (discountType === "percentage") {
//       return (subtotal * discount) / 100;
//     }
//     return discount;
//   };

//   const calculateTaxableAmount = () => {
//     return calculateSubtotal() - calculateDiscountAmount();
//   };

//   const calculateTax = () => {
//     const taxableAmount = calculateTaxableAmount();
//     return taxableAmount > 0 ? taxableAmount * 0.15 : 0;
//   };

//   const calculateTotal = () => {
//     const subtotal = calculateSubtotal();
//     const discountAmount = calculateDiscountAmount();
//     const taxableAmount = subtotal - discountAmount;
//     const tax = taxableAmount > 0 ? taxableAmount * 0.15 : 0;
//     return (subtotal - discountAmount) + tax;
//   };

//   const saveInvoice = () => {
//     const invoiceToSave = {
//       ...invoiceData,
//       subtotal: calculateSubtotal(),
//       tax: calculateTax(),
//       total: calculateTotal(),
//       companyInfo,
//     };
//     const dataStr = JSON.stringify(invoiceToSave, null, 2);
//     const dataBlob = new Blob([dataStr], { type: "application/json" });

//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(dataBlob);
//     link.download = `invoice-${invoiceData.invoiceNumber}.json`;
//     link.click();
//   };

//   const sendWhatsApp = () => {
//     const message = `مرحباً، أريد عرض سعر من مطابع نبراس العرب
    
// اسم العميل: ${customerName || "غير محدد"}
// العنوان: ${customerAddress || "غير محدد"}

// تفاصيل الطلب:
// ${invoiceData.items
//   .map(
//     (item) =>
//       `- ${item.name}: ${item.quantity} × ${item.price} ريال = ${item.total} ريال`
//   )
//   .join("\n")}

// المجموع: ${calculateTotal().toFixed(2)} ريال

// رقم الفاتورة: ${invoiceData.invoiceNumber}`;
//     const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
//       /\D/g,
//       ""
//     )}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   const generateAndDownloadPDF = () => {
//     // Create invoice content for PDF
//     const invoiceContent = `
//       <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
//         <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; border-bottom: 2px solid #10b981; padding-bottom: 20px;">
//           <div style="display: flex; align-items: center; gap: 10px;">
//             <img src="/dwn/Logo.svg" alt="Logo" style="width: 80px; height: 80px;">
//             <h1 style="color: #10b981; margin: 0; font-size: 28px;">مطابع نبراس العرب</h1>
//           </div>
//           <div style="text-align: right; margin-top: 10px;">
//             <h2 style="color: #1f2937; margin: 0 0 5px 0; font-size: 24px;">عرض سعر</h2>
//             <p style="color: #6b7280; margin: 5px 0; font-size: 16px;">Nebras Al Arab Printer</p>
//             <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">  ${companyInfo.owner}</p>
//           </div>
//         </div>

//         <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
//           <div>
//             <p style="margin: 5px 0; color: #6b7280;"><strong>رقم العرض:</strong> ${
//               invoiceData.invoiceNumber
//             }</p>
//             <p style="margin: 5px 0; color: #6b7280;"><strong>التاريخ:</strong> ${
//               invoiceData.date
//             }</p>

//            <p style="margin: 5px 0;"><strong>رقم الحساب البنكي:</strong> ${companyInfo.bankAccount}</p>


//           </div>
//           <div style="text-align: right;">
//             <h3 style="color: #1f2937; margin: 0 0 10px 0;">معلومات العميل</h3>
//             <p style="margin: 5px 0; color: #6b7280;"><strong>الاسم:</strong> ${
//               invoiceData.customerName || customerName || "غير محدد"
//             }</p>
//             <p style="margin: 5px 0; color: #6b7280;"><strong>العنوان:</strong> ${
//               invoiceData.customerAddress || customerAddress || "غير محدد"
//             }</p>
//             <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
//               invoiceData.customerPhone || "غير محدد"
//             }</p>
//             <p style="margin: 5px 0; color: #6b7280;"><strong>البريد:</strong> ${
//               invoiceData.customerEmail || "غير محدد"
//             }</p>
//           </div>
//         </div>

//         <div style="margin-bottom: 30px;">
//           <h3 style="color: #1f2937; margin: 0 0 15px 0;">المنتجات</h3>
//           <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
//             <thead>
//               <tr style="background-color: #f9fafb;">
//                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #1f2937;">المنتج</th>
//                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الكمية</th>
//                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">السعر</th>
//                 <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الإجمالي</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${invoiceData.items
//                 .map(
//                   (item) => `
//                 <tr>
//                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #374151;">${
//                     item.name || "غير محدد"
//                   }</td>
//                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${
//                     item.quantity
//                   }</td>
//                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.price.toFixed(
//                     2
//                   )} ريال</td>
//                   <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.total.toFixed(
//                     2
//                   )} ريال</td>
//                 </tr>
//                 `
//                 )
//                 .join("")}
//             </tbody>
//           </table>
//         </div>

//         <div style="text-align: left; margin-bottom: 30px;">
//           <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
//             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
//               <span style="color: #6b7280;">المجموع الفرعي:</span>
//               <span style="color: #1f2937; font-weight: bold;">${calculateSubtotal().toFixed(
//                 2
//               )} ريال</span>
//             </div>
//             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
//               <span style="color: #6b7280;">الخصم:</span>
//               <span style="color: #1f2937; font-weight: bold;">-${calculateDiscountAmount().toFixed(
//                 2
//               )} ريال</span>
//             </div>
//             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
//               <span style="color: #6b7280;">المجموع قبل الضريبة:</span>
//               <span style="color: #1f2937; font-weight: bold;">${calculateTaxableAmount().toFixed(
//                 2
//               )} ريال</span>
//             </div>
//             <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
//               <span style="color: #6b7280;">الضريبة (15%):</span>
//               <span style="color: #1f2937; font-weight: bold;">${calculateTax().toFixed(
//                 2
//               )} ريال</span>
//             </div>
//             <div style="display: flex; justify-content: space-between; border-top: 1px solid #e5e7eb; padding-top: 10px;">
//               <span style="color: #1f2937; font-weight: bold; font-size: 18px;">الإجمالي:</span>
//               <span style="color: #10b981; font-weight: bold; font-size: 18px;">${calculateTotal().toFixed(
//                 2
//               )} ريال</span>
//             </div>
//           </div>
//         </div>

//         <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
//           <div style="flex: 1; text-align: right; color: #6b7280; font-size: 12px;">
//             <p><strong>شكراً لاختياركم مطابع نبراس العرب</strong></p>
//             <p>Thank you for choosing Nebras Al Arab Printer</p>
//             <div style="margin-top: 10px;">
//               <p style="margin: 5px 0;"><strong>معلومات الشركة:</strong></p>
//               <p style="margin: 5px 0;"><strong>الهاتف:</strong> ${companyInfo.phone}</p>
//               <p style="margin: 5px 0;"><strong>البريد الإلكتروني:</strong> ${companyInfo.email}</p>
//               <p style="margin: 5px 0;"><strong>العنوان:</strong> ${companyInfo.address}</p>
//               <p style="margin: 5px 0;"><strong>رقم الحساب البنكي:</strong> ${companyInfo.bankAccount}</p>
//             </div>
//           </div>
         
//         </div>
//       </div>
//     `;

//     // Create a new window with the invoice content
//     const printWindow = window.open("", "_blank");
//     printWindow.document.write(`
//       <!DOCTYPE html>
//       <html dir="rtl">
//         <head>
//           <title>عرض سعر - ${invoiceData.invoiceNumber}</title>
//           <meta charset="utf-8">
//           <style>
//             body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
//             @media print {
//               body { margin: 0; }
//               .no-print { display: none; }
//             }
//           </style>
//         </head>
//         <body>
//           ${invoiceContent}
//           <div class="no-print" style="text-align: center; margin-top: 30px;">
//             <button onclick="window.print()" style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
//               طباعة PDF
//             </button>
//             <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
//               إغلاق
//             </button>
//           </div>
//         </body>
//       </html>
//     `);
//     printWindow.document.close();
//   };

//   const handleLike = () => {
//     const newLikes = isLiked ? likes - 1 : likes + 1;
//     setLikes(newLikes);
//     setIsLiked(!isLiked);
//     localStorage.setItem("billingLikes", newLikes.toString());
//     localStorage.setItem("billingIsLiked", (!isLiked).toString());
//   };

//   const handleLove = () => {
//     const newLoves = isLoved ? loves - 1 : loves + 1;
//     setLoves(newLoves);
//     setIsLoved(!isLoved);
//     localStorage.setItem("billingLoves", newLoves.toString());
//     localStorage.setItem("billingIsLoved", (!isLoved).toString());
//   };

//   const addComment = () => {
//     if (newComment.trim()) {
//       const comment = {
//         id: Date.now(),
//         text: newComment,
//         author: customerName || "مستخدم",
//         timestamp: new Date().toLocaleString("ar-SA"),
//       };
//       const newComments = [...comments, comment];
//       setComments(newComments);
//       setNewComment("");
//       localStorage.setItem("billingComments", JSON.stringify(newComments));
//     }
//   };

//   const sharePage = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: "عرض سعر - مطابع نبراس العرب",
//         text: "انضم إلينا للحصول على أفضل عروض الطباعة",
//         url: window.location.href,
//       });
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert("تم نسخ الرابط إلى الحافظة");
//     }
//   };

//   // If not authenticated, show customer input form first
//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
//         {/* Login Modal - Always visible when not authenticated */}
//         <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
//           <div className="text-center mb-8">
//             <div className="w-20 h-20 mx-auto mb-4">
//               <img
//                 src="/dwn/Logo.svg"
//                 alt="Nebras Al Arab Logo"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <h1 className="text-2xl font-bold text-gray-800 mb-2">
//               تسجيل دخول الموظفين
//             </h1>
//             <p className="text-gray-600 arabic-font">للموظفين المصرح لهم فقط</p>
//             {loginDisabled && (
//               <p className="text-red-500 mt-2">
//                 تم تعطيل التسجيل مؤقتًا. الرجاء المحاولة بعد{" "}
//                 {Math.ceil(loginDisabledTime / 1000)} ثانية.
//               </p>
//             )}
//           </div>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 اسم المستخدم
//               </label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                 placeholder="أدخل اسم المستخدم"
//                 disabled={loginDisabled}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 كلمة المرور
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                 placeholder="أدخل كلمة المرور"
//                 disabled={loginDisabled}
//                 onKeyPress={(e) =>
//                   e.key === "Enter" && !loginDisabled && handleLogin()
//                 }
//               />
//             </div>
//             <button
//               onClick={handleLogin}
//               disabled={loginDisabled}
//               className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               تسجيل الدخول
//             </button>
//           </div>

//           <div className="mt-6 text-center text-sm text-gray-500">
//             <p>فقط المستخدمين المصرح لهم يمكنهم الوصول</p>
//             {/* <p className="mt-1">Username: dewany | Password: dewany123</p> */}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* Header */}
//       <header className="bg-white shadow-lg border-b border-gray-200">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <Link href="/" className="flex items-center space-x-3">
//               <div className="w-12 h-12">
//                 <img
//                   src="/dwn/Logo.svg"
//                   alt="Nebras Al Arab Logo"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="text-left">
//                 <h1 className="text-xl font-bold text-gray-800">
//                   Nebras Al Arab
//                 </h1>
//                 <p className="text-sm text-gray-600 arabic-font-bold">
//                   مطابع نبراس العرب
//                 </p>
//               </div>
//             </Link>

//             <div className="flex items-center space-x-4">
//               <div className="text-right">
//                 <p className="text-sm text-gray-600">مرحباً بعودتك</p>
//                 <p className="font-semibold text-primary-600">
//                   {customerName || "مستخدم"}
//                 </p>
//                 {username && (
//                   <p className="text-xs text-gray-500">المستخدم: {username}</p>
//                 )}
//               </div>
//               <button
//                 onClick={() => setShowCustomerModal(true)}
//                 className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50"
//               >
//                 <User size={18} />
//                 تعديل البيانات
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors rounded-lg hover:bg-red-50"
//               >
//                 <Lock size={18} />
//                 تسجيل الخروج
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="pt-8 pb-10">
//         <div className="container mx-auto px-4">
//           {/* Welcome Section */}
//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-bold text-gray-800 mb-2">عرض سعر</h1>
//             <p className="text-lg text-gray-600 arabic-font mb-4">
//               نظام إنشاء عروض الأسعار والفواتير
//             </p>

//             {/* Social Actions */}
//             <div className="flex items-center justify-center gap-4 mb-6">
//               <button
//                 onClick={handleLike}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
//                   isLiked
//                     ? "bg-red-100 text-red-600"
//                     : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
//                 }`}
//               >
//                 <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
//                 {likes}
//               </button>
//               <button
//                 onClick={handleLove}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
//                   isLoved
//                     ? "bg-pink-100 text-pink-600"
//                     : "bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600"
//                 }`}
//               >
//                 <Star size={18} fill={isLoved ? "currentColor" : "none"} />
//                 {loves}
//               </button>
//               <button
//                 onClick={sharePage}
//                 className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-200"
//               >
//                 <Share2 size={18} />
//                 مشاركة
//               </button>
//               <button
//                 onClick={() => setShowSocialModal(true)}
//                 className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-all duration-200"
//               >
//                 <MessageCircle size={18} />
//                 تعليقات ({comments.length})
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Invoice Form */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
//                 {/* Invoice Header with Logo */}
//                 <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
//                   <div className="flex items-center gap-4">
//                     <div className="w-16 h-16">
//                       <img
//                         src="/dwn/Logo.svg"
//                         alt="Nebras Al Arab Logo"
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                     <div>
//                       <h2 className="text-2xl font-bold text-gray-800">
//                         عرض سعر
//                       </h2>
//                       <p className="text-gray-600 arabic-font">
//                         مطابع نبراس العرب
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm text-gray-500">رقم العرض</p>
//                     <p className="font-bold text-lg text-primary-600">
//                       {invoiceData.invoiceNumber}
//                     </p>
//                   </div>
//                 </div>

//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
//                   <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
//                     <span className="text-white font-bold">📄</span>
//                   </div>
//                   تفاصيل العرض
//                 </h2>

//                 {/* Basic Invoice Info */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       رقم العرض
//                     </label>
//                     <input
//                       type="text"
//                       value={invoiceData.invoiceNumber}
//                       onChange={(e) =>
//                         setInvoiceData((prev) => ({
//                           ...prev,
//                           invoiceNumber: e.target.value,
//                         }))
//                       }
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       التاريخ
//                     </label>
//                     <input
//                       type="date"
//                       value={invoiceData.date}
//                       onChange={(e) =>
//                         setInvoiceData((prev) => ({
//                           ...prev,
//                           date: e.target.value,
//                         }))
//                       }
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                     />
//                   </div>
//                 </div>

//                 {/* Customer Information */}
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                     معلومات العميل
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         اسم العميل
//                       </label>
//                       <input
//                         type="text"
//                         value={invoiceData.customerName}
//                         onChange={(e) =>
//                           setInvoiceData((prev) => ({
//                             ...prev,
//                             customerName: e.target.value,
//                           }))
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                         placeholder="أدخل اسم العميل"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         رقم الهاتف
//                       </label>
//                       <input
//                         type="tel"
//                         value={invoiceData.customerPhone}
//                         onChange={(e) =>
//                           setInvoiceData((prev) => ({
//                             ...prev,
//                             customerPhone: e.target.value,
//                           }))
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                         placeholder="+966 50 123 4567"
//                       />
//                     </div>
//                     <div className="md:col-span-2">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         العنوان
//                       </label>
//                       <textarea
//                         value={invoiceData.customerAddress}
//                         onChange={(e) =>
//                           setInvoiceData((prev) => ({
//                             ...prev,
//                             customerAddress: e.target.value,
//                           }))
//                         }
//                         rows="3"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                         placeholder="أدخل عنوان العميل"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         البريد الإلكتروني
//                       </label>
//                       <input
//                         type="email"
//                         value={invoiceData.customerEmail}
//                         onChange={(e) =>
//                           setInvoiceData((prev) => ({
//                             ...prev,
//                             customerEmail: e.target.value,
//                           }))
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                         placeholder="customer@email.com"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Items */}
//                 <div className="mb-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       المنتجات
//                     </h3>
//                     <button
//                       onClick={addItem}
//                       className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
//                     >
//                       <Plus size={16} /> إضافة منتج
//                     </button>
//                   </div>
//                   <div className="space-y-4">
//                     {invoiceData.items.map((item, index) => (
//                       <div
//                         key={item.id}
//                         className="border border-gray-200 rounded-lg p-4 bg-gray-50"
//                       >
//                         <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
//                           <div className="md:col-span-2">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                               اسم المنتج
//                             </label>
//                             <input
//                               type="text"
//                               value={item.name}
//                               onChange={(e) =>
//                                 updateItem(item.id, "name", e.target.value)
//                               }
//                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                               placeholder="اسم المنتج"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                               الكمية
//                             </label>
//                             <input
//                               type="number"
//                               min="1"
//                               value={item.quantity}
//                               onChange={(e) =>
//                                 updateItem(
//                                   item.id,
//                                   "quantity",
//                                   parseInt(e.target.value) || 0
//                                 )
//                               }
//                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                               السعر
//                             </label>
//                             <input
//                               type="number"
//                               min="0"
//                               step="0.01"
//                               value={item.price}
//                               onChange={(e) =>
//                                 updateItem(
//                                   item.id,
//                                   "price",
//                                   parseFloat(e.target.value) || 0
//                                 )
//                               }
//                               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                               الإجمالي
//                             </label>
//                             <div className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium">
//                               {item.total.toFixed(2)} ريال
//                             </div>
//                           </div>
//                           <div className="flex items-end">
//                             {invoiceData.items.length > 1 && (
//                               <button
//                                 onClick={() => removeItem(item.id)}
//                                 className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                               >
//                                 <Trash2 size={16} />
//                               </button>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Discount */}
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                     الخصم
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         قيمة الخصم
//                       </label>
//                       <input
//                         type="number"
//                         min="0"
//                         step="0.01"
//                         value={discount}
//                         onChange={(e) =>
//                           setDiscount(parseFloat(e.target.value) || 0)
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                         placeholder="0"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         نوع الخصم
//                       </label>
//                       <select
//                         value={discountType}
//                         onChange={(e) => setDiscountType(e.target.value)}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                       >
//                         <option value="number">مبلغ ثابت</option>
//                         <option value="percentage">نسبة مئوية (%)</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Totals */}
//                 <div className="bg-gray-50 rounded-lg p-4">
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-gray-600">
//                       <span>المجموع الفرعي:</span>
//                       <span>{calculateSubtotal().toFixed(2)} ريال</span>
//                     </div>
//                     <div className="flex justify-between text-gray-600">
//                       <span>الخصم:</span>
//                       <span>-{calculateDiscountAmount().toFixed(2)} ريال</span>
//                     </div>
//                     <div className="flex justify-between text-gray-600">
//                       <span>الضريبة (15%):</span>
//                       <span>{calculateTax().toFixed(2)} ريال</span>
//                     </div>
//                     <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-2">
//                       <span>الإجمالي:</span>
//                       <span>{calculateTotal().toFixed(2)} ريال</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Company Info & Actions */}
//             <div className="space-y-6">
//               {/* Company Information */}
//               <div className="bg-white rounded-2xl shadow-xl p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
//                   <div className="w-6 h-6 bg-gradient-secondary rounded-lg flex items-center justify-center">
//                     <span className="text-white text-sm">🏢</span>
//                   </div>
//                   معلومات الشركة
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="text-center">
//                     <h4 className="text-lg font-bold text-primary-600 mb-1 arabic-font-bold">
//                       {companyInfo.name}
//                     </h4>
//                     <p className="text-sm text-gray-600 mb-2">
//                       {companyInfo.englishName}
//                     </p>
//                     <p className="text-sm text-gray-700 font-medium">
//                       {companyInfo.owner}
//                     </p>
//                   </div>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-500">📞</span>
//                       <span className="text-gray-800 font-medium">
//                         {companyInfo.phone}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-500">✉️</span>
//                       <span className="text-gray-800 font-medium">
//                         {companyInfo.email}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-500">🌐</span>
//                       <span className="text-gray-800 font-medium">
//                         {companyInfo.website}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-500">📍</span>
//                       <span className="text-gray-800 font-medium arabic-font">
//                         {companyInfo.address}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-500">🏦</span>
//                       <span className="text-gray-800 font-medium">
//                         {companyInfo.bankAccount}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="bg-white rounded-2xl shadow-xl p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">
//                   الإجراءات
//                 </h3>
//                 <div className="space-y-3">
//                   <button
//                     onClick={sendWhatsApp}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium"
//                   >
//                     <Send size={18} /> إرسال عبر واتساب
//                   </button>
//                   <button
//                     onClick={generateAndDownloadPDF}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
//                   >
//                     <Download size={18} /> تحميل PDF
//                   </button>
//                   <button
//                     onClick={() => window.print()}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-secondary text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
//                   >
//                     <Printer size={18} /> طباعة العرض
//                   </button>
//                   <button
//                     onClick={saveInvoice}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-accent text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
//                   >
//                     <Save size={18} /> حفظ كملف
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Customer Info Modal */}
//       {showCustomerModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 max-w-md w-full">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-bold text-gray-800">
//                 تعديل بيانات العميل
//               </h3>
//               <button
//                 onClick={() => setShowCustomerModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X size={24} />
//               </button>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   اسم العميل
//                 </label>
//                 <input
//                   type="text"
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                   placeholder="أدخل اسم العميل"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   عنوان العميل
//                 </label>
//                 <textarea
//                   value={customerAddress}
//                   onChange={(e) => setCustomerAddress(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                   placeholder="أدخل عنوان العميل"
//                 />
//               </div>
//               <button
//                 onClick={saveCustomerInfo}
//                 className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
//               >
//                 حفظ
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Social Modal */}
//       {showSocialModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-bold text-gray-800">
//                 التعليقات والمشاركات
//               </h3>
//               <button
//                 onClick={() => setShowSocialModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X size={24} />
//               </button>
//             </div>
//             <div className="space-y-4">
//               {/* Comment Input */}
//               <div className="flex items-center gap-2">
//                 <input
//                   type="text"
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
//                   placeholder="أضف تعليقك هنا..."
//                   onKeyPress={(e) => e.key === "Enter" && addComment()}
//                 />
//                 <button
//                   onClick={addComment}
//                   className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
//                 >
//                   إرسال
//                 </button>
//               </div>

//               {/* Comments List */}
//               <div className="space-y-3">
//                 {comments.map((comment) => (
//                   <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="font-semibold text-gray-800">
//                         {comment.author}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         {comment.timestamp}
//                       </span>
//                     </div>
//                     <p className="text-gray-700">{comment.text}</p>
//                   </div>
//                 ))}
//                 {comments.length === 0 && (
//                   <p className="text-center text-gray-500 py-4">
//                     لا توجد تعليقات بعد
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  Download,
  Printer,
  Save,
  Heart,
  Share2,
  MessageCircle,
  Send,
  User,
  Lock,
  X,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BillingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [loginDisabledTime, setLoginDisabledTime] = useState(0);
  const [likes, setLikes] = useState(0);
  const [loves, setLoves] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isLoved, setIsLoved] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("number");

  // Load social data from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem("billingLikes");
    const savedLoves = localStorage.getItem("billingLoves");
    const savedComments = localStorage.getItem("billingComments");
    const savedIsLiked = localStorage.getItem("billingIsLiked");
    const savedIsLoved = localStorage.getItem("billingIsLoved");

    if (savedLikes) setLikes(parseInt(savedLikes));
    if (savedLoves) setLoves(parseInt(savedLoves));
    if (savedComments) setComments(JSON.parse(savedComments));
    if (savedIsLiked) setIsLiked(savedIsLiked === "true");
    if (savedIsLoved) setIsLoved(savedIsLoved === "true");
  }, []);

  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    date: new Date().toISOString().split("T")[0],
    customerName: "",
    customerAddress: "",
    customerPhone: "",
    customerEmail: "",
    items: [
      {
        id: 1,
        name: "",
        description: "",
        quantity: 1,
        price: 0,
        total: 0,
      },
    ],
  });

  const [companyInfo] = useState({
    name: "مطابع نبراس العرب",
    englishName: "Nebras Al Arab Printer",
    owner: "محمد الديواني",
    phone: "+966540584952",
    email: "dewany1979@gmail.com",
    address: "الرياض، المملكة العربية السعودية",
    website: "www.nebras-alarab.com",
    bankAccount: "SA12 3456 7890 1234 5678 9012",
  });

  // Check authentication on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem("billingAuth");
    const lastLogin = localStorage.getItem("lastLogin");

    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      // Check if session is still valid (24 hours)
      if (
        lastLogin &&
        Date.now() - new Date(lastLogin).getTime() < 24 * 60 * 60 * 1000
      ) {
        if (authData.username === "dewany") {
          setIsAuthenticated(true);
          setShowLoginModal(false);
          setUsername(authData.username);
          setCustomerName(authData.customerName || "");
          setCustomerAddress(authData.customerAddress || "");
        }
      } else {
        // Session expired, clear storage
        localStorage.removeItem("billingAuth");
        localStorage.removeItem("lastLogin");
      }
    }

    // Check if login is temporarily disabled
    const disabledUntil = localStorage.getItem("loginDisabledUntil");
    if (disabledUntil && Date.now() < parseInt(disabledUntil)) {
      setLoginDisabled(true);
      setLoginDisabledTime(parseInt(disabledUntil) - Date.now());
    }
  }, []);

  // Countdown for login disable
  useEffect(() => {
    let timer;
    if (loginDisabled && loginDisabledTime > 0) {
      timer = setInterval(() => {
        setLoginDisabledTime((prev) => {
          if (prev <= 1000) {
            setLoginDisabled(false);
            localStorage.removeItem("loginDisabledUntil");
            localStorage.removeItem("loginAttempts");
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [loginDisabled]);

  const handleLogin = () => {
    if (loginDisabled) {
      alert(
        `تم تعطيل محاولات تسجيل الدخول مؤقتًا. الرجاء المحاولة مرة أخرى بعد ${Math.ceil(
          loginDisabledTime / 1000
        )} ثانية.`
      );
      return;
    }

    if (username === "dewany" && password === "dewany123") {
      setIsAuthenticated(true);
      setShowLoginModal(false);
      setLoginAttempts(0);

      const authData = {
        username,
        customerName,
        customerAddress,
      };
      localStorage.setItem("billingAuth", JSON.stringify(authData));
      localStorage.setItem("lastLogin", new Date().toISOString());
      localStorage.removeItem("loginAttempts");
      localStorage.removeItem("loginDisabledUntil");
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);

      if (newAttempts >= 3) {
        // Disable login for 5 minutes after 3 failed attempts
        const disableUntil = Date.now() + 5 * 60 * 1000;
        setLoginDisabled(true);
        setLoginDisabledTime(5 * 60 * 1000);
        localStorage.setItem("loginDisabledUntil", disableUntil.toString());
        localStorage.setItem("loginAttempts", newAttempts.toString());
        alert(
          "تم تعطيل تسجيل الدخول مؤقتًا بسبب كثرة المحاولات الفاشلة. الرجاء المحاولة مرة أخرى بعد 5 دقائق."
        );
      } else {
        localStorage.setItem("loginAttempts", newAttempts.toString());
        alert(
          "بيانات الدخول غير صحيحة. فقط المستخدمون المصرح لهم يمكنهم الوصول إلى هذه الصفحة."
        );
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLoginModal(true);
    setUsername("");
    setPassword("");
    localStorage.removeItem("billingAuth");
    localStorage.removeItem("lastLogin");
  };

  const saveCustomerInfo = () => {
    // Update auth data with new customer info
    const authData = {
      username,
      customerName,
      customerAddress,
    };
    localStorage.setItem("billingAuth", JSON.stringify(authData));
    localStorage.setItem("customerName", customerName);
    localStorage.setItem("customerAddress", customerAddress);
    setShowCustomerModal(false);
  };

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: "",
      description: "",
      quantity: 1,
      price: 0,
      total: 0,
    };
    setInvoiceData((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const removeItem = (id) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const updateItem = (id, field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          if (field === "quantity" || field === "price") {
            updatedItem.total = updatedItem.quantity * updatedItem.price;
          }
          return updatedItem;
        }
        return item;
      }),
    }));
  };

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + item.total, 0);
  };

  const calculateDiscountAmount = () => {
    const subtotal = calculateSubtotal();
    if (discountType === "percentage") {
      return (subtotal * discount) / 100;
    }
    return discount;
  };

  const calculateTaxableAmount = () => {
    return calculateSubtotal() - calculateDiscountAmount();
  };

  const calculateTax = () => {
    const taxableAmount = calculateTaxableAmount();
    return taxableAmount > 0 ? taxableAmount * 0.15 : 0;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = calculateDiscountAmount();
    const taxableAmount = subtotal - discountAmount;
    const tax = taxableAmount > 0 ? taxableAmount * 0.15 : 0;
    return (subtotal - discountAmount) + tax;
  };

  const saveInvoice = () => {
    const invoiceToSave = {
      ...invoiceData,
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      total: calculateTotal(),
      companyInfo,
    };
    const dataStr = JSON.stringify(invoiceToSave, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(dataBlob);
    link.download = `invoice-${invoiceData.invoiceNumber}.json`;
    link.click();
  };

  const sendWhatsApp = () => {
    const message = `مرحباً، أريد عرض سعر من مطابع نبراس العرب
    
اسم العميل: ${customerName || "غير محدد"}
العنوان: ${customerAddress || "غير محدد"}

تفاصيل الطلب:
${invoiceData.items
      .map(
        (item) =>
          `- ${item.name}: ${item.quantity} × ${item.price} ريال = ${item.total} ريال`
      )
      .join("\n")}

المجموع: ${calculateTotal().toFixed(2)} ريال

رقم الفاتورة: ${invoiceData.invoiceNumber}`;
    const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const generateAndDownloadPDF = () => {
    // Create invoice content for PDF
    const invoiceContent = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; border-bottom: 2px solid #10b981; padding-bottom: 20px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="/dwn/Logo.svg" alt="Logo" style="width: 80px; height: 80px;">
            <h1 style="color: #10b981; margin: 0; font-size: 28px;">مطابع نبراس العرب</h1>
          </div>
          <div style="text-align: right; margin-top: 10px;">
            <h2 style="color: #1f2937; margin: 0 0 5px 0; font-size: 24px;">عرض سعر</h2>
            <p style="color: #6b7280; margin: 5px 0; font-size: 16px;">Nebras Al Arab Printer</p>
            <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">  ${companyInfo.owner}</p>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
          <div>
            <p style="margin: 5px 0; color: #6b7280;"><strong>رقم العرض:</strong> ${
              invoiceData.invoiceNumber
            }</p>
            <p style="margin: 5px 0; color: #6b7280;"><strong>التاريخ:</strong> ${
              invoiceData.date
            }</p>

           <p style="margin: 5px 0;"><strong>رقم الحساب البنكي:</strong> ${companyInfo.bankAccount}</p>


          </div>
          <div style="text-align: right;">
            <h3 style="color: #1f2937; margin: 0 0 10px 0;">معلومات العميل</h3>
            <p style="margin: 5px 0; color: #6b7280;"><strong>الاسم:</strong> ${
              invoiceData.customerName || customerName || "غير محدد"
            }</p>
            <p style="margin: 5px 0; color: #6b7280;"><strong>العنوان:</strong> ${
              invoiceData.customerAddress || customerAddress || "غير محدد"
            }</p>
            <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
              invoiceData.customerPhone || "غير محدد"
            }</p>
            <p style="margin: 5px 0; color: #6b7280;"><strong>البريد:</strong> ${
              invoiceData.customerEmail || "غير محدد"
            }</p>
          </div>
        </div>

        <div style="margin-bottom: 30px;">
          <h3 style="color: #1f2937; margin: 0 0 15px 0;">المنتجات</h3>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
            <thead>
              <tr style="background-color: #f9fafb;">
                <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #1f2937;">المنتج</th>
                <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الكمية</th>
                <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">السعر</th>
                <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #1f2937;">الإجمالي</th>
              </tr>
            </thead>
            <tbody>
              ${invoiceData.items
                .map(
                  (item) => `
                <tr>
                  <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: right; color: #374151;">${
                    item.name || "غير محدد"
                  }</td>
                  <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${
                    item.quantity
                  }</td>
                  <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.price.toFixed(
                    2
                  )} ريال</td>
                  <td style="border: 1px solid #e5e7eb; padding: 12px; text-align: center; color: #374151;">${item.total.toFixed(
                    2
                  )} ريال</td>
                </tr>
                `
                )
                .join("")}
            </tbody>
          </table>
        </div>

        <div style="text-align: left; margin-bottom: 30px;">
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #6b7280;">المجموع الفرعي:</span>
              <span style="color: #1f2937; font-weight: bold;">${calculateSubtotal().toFixed(
                2
              )} ريال</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #6b7280;">الخصم:</span>
              <span style="color: #1f2937; font-weight: bold;">-${calculateDiscountAmount().toFixed(
                2
              )} ريال</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #6b7280;">المجموع قبل الضريبة:</span>
              <span style="color: #1f2937; font-weight: bold;">${calculateTaxableAmount().toFixed(
                2
              )} ريال</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #6b7280;">الضريبة (15%):</span>
              <span style="color: #1f2937; font-weight: bold;">${calculateTax().toFixed(
                2
              )} ريال</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px solid #e5e7eb; padding-top: 10px;">
              <span style="color: #1f2937; font-weight: bold; font-size: 18px;">الإجمالي:</span>
              <span style="color: #10b981; font-weight: bold; font-size: 18px;">${calculateTotal().toFixed(
                2
              )} ريال</span>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <div style="flex: 1; text-align: right; color: #6b7280; font-size: 12px;">
            <p><strong>شكراً لاختياركم مطابع نبراس العرب</strong></p>
            <p>Thank you for choosing Nebras Al Arab Printer</p>
            <div style="margin-top: 10px;">
              <p style="margin: 5px 0;"><strong>معلومات الشركة:</strong></p>
              <p style="margin: 5px 0;"><strong>الهاتف:</strong> ${companyInfo.phone}</p>
              <p style="margin: 5px 0;"><strong>البريد الإلكتروني:</strong> ${companyInfo.email}</p>
              <p style="margin: 5px 0;"><strong>العنوان:</strong> ${companyInfo.address}</p>
              <p style="margin: 5px 0;"><strong>رقم الحساب البنكي:</strong> ${companyInfo.bankAccount}</p>
            </div>
          </div>
          
        </div>
      </div>
    `;

    // Create a new window with the invoice content
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <!DOCTYPE html>
      <html dir="rtl">
        <head>
          <title>عرض سعر - ${invoiceData.invoiceNumber}</title>
          <meta charset="utf-8">
          <style>
            body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
              table, tbody, tr, td { page-break-inside: avoid !important; }
            }
          </style>
        </head>
        <body>
          ${invoiceContent}
          <div class="no-print" style="text-align: center; margin-top: 30px;">
            <button onclick="window.print()" style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
              طباعة PDF
            </button>
            <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
              إغلاق
            </button>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);
    localStorage.setItem("billingLikes", newLikes.toString());
    localStorage.setItem("billingIsLiked", (!isLiked).toString());
  };

  const handleLove = () => {
    const newLoves = isLoved ? loves - 1 : loves + 1;
    setLoves(newLoves);
    setIsLoved(!isLoved);
    localStorage.setItem("billingLoves", newLoves.toString());
    localStorage.setItem("billingIsLoved", (!isLoved).toString());
  };

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment,
        author: customerName || "مستخدم",
        timestamp: new Date().toLocaleString("ar-SA"),
      };
      const newComments = [...comments, comment];
      setComments(newComments);
      setNewComment("");
      localStorage.setItem("billingComments", JSON.stringify(newComments));
    }
  };

  const sharePage = () => {
    if (navigator.share) {
      navigator.share({
        title: "عرض سعر - مطابع نبراس العرب",
        text: "انضم إلينا للحصول على أفضل عروض الطباعة",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("تم نسخ الرابط إلى الحافظة");
    }
  };

  // If not authenticated, show customer input form first
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        {/* Login Modal - Always visible when not authenticated */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src="/dwn/Logo.svg"
                alt="Nebras Al Arab Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              تسجيل دخول الموظفين
            </h1>
            <p className="text-gray-600 arabic-font">للموظفين المصرح لهم فقط</p>
            {loginDisabled && (
              <p className="text-red-500 mt-2">
                تم تعطيل التسجيل مؤقتًا. الرجاء المحاولة بعد{" "}
                {Math.ceil(loginDisabledTime / 1000)} ثانية.
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                اسم المستخدم
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                placeholder="أدخل اسم المستخدم"
                disabled={loginDisabled}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                placeholder="أدخل كلمة المرور"
                disabled={loginDisabled}
                onKeyPress={(e) =>
                  e.key === "Enter" && !loginDisabled && handleLogin()
                }
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={loginDisabled}
              className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              تسجيل الدخول
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>فقط المستخدمين المصرح لهم يمكنهم الوصول</p>
            {/* <p className="mt-1">Username: dewany | Password: dewany123</p> */}
          </div>
        </div>
      </div>
    );
  }

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
              <div className="text-right">
                <p className="text-sm text-gray-600">مرحباً بعودتك</p>
                <p className="font-semibold text-primary-600">
                  {customerName || "مستخدم"}
                </p>
                {username && (
                  <p className="text-xs text-gray-500">المستخدم: {username}</p>
                )}
              </div>
              <button
                onClick={() => setShowCustomerModal(true)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50"
              >
                <User size={18} />
                تعديل البيانات
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors rounded-lg hover:bg-red-50"
              >
                <Lock size={18} />
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-8 pb-10">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">عرض سعر</h1>
            <p className="text-lg text-gray-600 arabic-font mb-4">
              نظام إنشاء عروض الأسعار والفواتير
            </p>

            {/* Social Actions */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isLiked
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
                }`}
              >
                <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                {likes}
              </button>
              <button
                onClick={handleLove}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isLoved
                    ? "bg-pink-100 text-pink-600"
                    : "bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                }`}
              >
                <Star size={18} fill={isLoved ? "currentColor" : "none"} />
                {loves}
              </button>
              <button
                onClick={sharePage}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-200"
              >
                <Share2 size={18} />
                مشاركة
              </button>
              <button
                onClick={() => setShowSocialModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-all duration-200"
              >
                <MessageCircle size={18} />
                تعليقات ({comments.length})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Invoice Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                {/* Invoice Header with Logo */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16">
                      <img
                        src="/dwn/Logo.svg"
                        alt="Nebras Al Arab Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        عرض سعر
                      </h2>
                      <p className="text-gray-600 arabic-font">
                        مطابع نبراس العرب
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">رقم العرض</p>
                    <p className="font-bold text-lg text-primary-600">
                      {invoiceData.invoiceNumber}
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">📄</span>
                  </div>
                  تفاصيل العرض
                </h2>

                {/* Basic Invoice Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم العرض
                    </label>
                    <input
                      type="text"
                      value={invoiceData.invoiceNumber}
                      onChange={(e) =>
                        setInvoiceData((prev) => ({
                          ...prev,
                          invoiceNumber: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      التاريخ
                    </label>
                    <input
                      type="date"
                      value={invoiceData.date}
                      onChange={(e) =>
                        setInvoiceData((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                    />
                  </div>
                </div>

                {/* Customer Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    معلومات العميل
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        اسم العميل
                      </label>
                      <input
                        type="text"
                        value={invoiceData.customerName}
                        onChange={(e) =>
                          setInvoiceData((prev) => ({
                            ...prev,
                            customerName: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                        placeholder="أدخل اسم العميل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        value={invoiceData.customerPhone}
                        onChange={(e) =>
                          setInvoiceData((prev) => ({
                            ...prev,
                            customerPhone: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                        placeholder="+966 50 123 4567"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        العنوان
                      </label>
                      <textarea
                        value={invoiceData.customerAddress}
                        onChange={(e) =>
                          setInvoiceData((prev) => ({
                            ...prev,
                            customerAddress: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                        placeholder="أدخل عنوان العميل"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>

                {/* Items Table */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    المنتجات
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            المنتج
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            الكمية
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            السعر
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            الإجمالي
                          </th>
                          <th className="px-6 py-3"></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {invoiceData.items.map((item, index) => (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <input
                                type="text"
                                value={item.name}
                                onChange={(e) =>
                                  updateItem(item.id, "name", e.target.value)
                                }
                                className="w-full bg-transparent border-none text-sm text-gray-900 focus:ring-0"
                                placeholder="اسم المنتج"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateItem(
                                    item.id,
                                    "quantity",
                                    parseFloat(e.target.value) || 0
                                  )
                                }
                                min="1"
                                className="w-20 text-center bg-transparent border border-gray-300 rounded-md text-sm text-gray-900 focus:ring-primary-500"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <input
                                type="number"
                                value={item.price}
                                onChange={(e) =>
                                  updateItem(
                                    item.id,
                                    "price",
                                    parseFloat(e.target.value) || 0
                                  )
                                }
                                step="0.01"
                                className="w-24 text-center bg-transparent border border-gray-300 rounded-md text-sm text-gray-900 focus:ring-primary-500"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-semibold text-gray-900">
                              {item.total.toFixed(2)} ريال
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 size={20} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={addItem}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-primary-600 border border-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      <Plus size={16} />
                      إضافة منتج
                    </button>
                  </div>
                </div>

                {/* Summary Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    ملخص الفاتورة
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الخصم
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          value={discount}
                          onChange={(e) =>
                            setDiscount(parseFloat(e.target.value) || 0)
                          }
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                        />
                        <select
                          value={discountType}
                          onChange={(e) => setDiscountType(e.target.value)}
                          className="ml-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white"
                        >
                          <option value="number">ريال</option>
                          <option value="percentage">%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-gray-600">
                      <span>المجموع الفرعي:</span>
                      <span className="font-semibold text-gray-900">
                        {calculateSubtotal().toFixed(2)} ريال
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>الخصم:</span>
                      <span className="font-semibold text-red-500">
                        - {calculateDiscountAmount().toFixed(2)} ريال
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>المجموع قبل الضريبة:</span>
                      <span className="font-semibold text-gray-900">
                        {calculateTaxableAmount().toFixed(2)} ريال
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>الضريبة (15%):</span>
                      <span className="font-semibold text-gray-900">
                        {calculateTax().toFixed(2)} ريال
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200 font-bold text-lg">
                      <span>الإجمالي:</span>
                      <span className="text-primary-600">
                        {calculateTotal().toFixed(2)} ريال
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  إجراءات
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={generateAndDownloadPDF}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    <Download size={20} />
                    تحميل PDF
                  </button>
                  <button
                    onClick={saveInvoice}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    <Save size={20} />
                    حفظ كملف JSON
                  </button>
                  <button
                    onClick={sendWhatsApp}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Send size={20} />
                    إرسال عبر واتساب
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  معلومات الشركة
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">اسم الشركة:</span>{" "}
                    {companyInfo.name}
                  </p>
                  <p>
                    <span className="font-medium">المالك:</span>{" "}
                    {companyInfo.owner}
                  </p>
                  <p>
                    <span className="font-medium">الهاتف:</span>{" "}
                    {companyInfo.phone}
                  </p>
                  <p>
                    <span className="font-medium">البريد:</span>{" "}
                    {companyInfo.email}
                  </p>
                  <p>
                    <span className="font-medium">العنوان:</span>{" "}
                    {companyInfo.address}
                  </p>
                  <p>
                    <span className="font-medium">الموقع:</span>{" "}
                    {companyInfo.website}
                  </p>
                  <p>
                    <span className="font-medium">الحساب البنكي:</span>{" "}
                    {companyInfo.bankAccount}
                  </p>
                </div>
              </div>
              {/* Social Section */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MessageCircle size={20} />
                  التعليقات
                </h3>
                {/* Comment Input */}
                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                    placeholder="أضف تعليقك هنا..."
                    onKeyPress={(e) => e.key === "Enter" && addComment()}
                  />
                  <button
                    onClick={addComment}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    إرسال
                  </button>
                </div>

                {/* Comments List */}
                <div className="space-y-3">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">
                          {comment.author}
                        </span>
                        <span className="text-sm text-gray-500">
                          {comment.timestamp}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  ))}
                  {comments.length === 0 && (
                    <p className="text-center text-gray-500 py-4">
                      لا توجد تعليقات بعد
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Info Modal */}
      {showCustomerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                تحديث بيانات العميل
              </h2>
              <button onClick={() => setShowCustomerModal(false)}>
                <X size={24} className="text-gray-500 hover:text-gray-800" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اسم العميل
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                  placeholder="أدخل اسم العميل"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  عنوان العميل
                </label>
                <input
                  type="text"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                  placeholder="أدخل عنوان العميل"
                />
              </div>
            </div>
            <button
              onClick={saveCustomerInfo}
              className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold mt-6 hover:shadow-lg transition-all duration-200"
            >
              حفظ
            </button>
          </div>
        </div>
      )}

      {/* Social Modal */}
      {showSocialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                التعليقات والمشاركات
              </h2>
              <button onClick={() => setShowSocialModal(false)}>
                <X size={24} className="text-gray-500 hover:text-gray-800" />
              </button>
            </div>
            {/* Comment Input */}
            <div className="flex items-center gap-3 mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 bg-white"
                placeholder="أضف تعليقك هنا..."
                onKeyPress={(e) => e.key === "Enter" && addComment()}
              />
              <button
                onClick={addComment}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                إرسال
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-3">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">
                      {comment.author}
                    </span>
                    <span className="text-sm text-gray-500">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
              ))}
              {comments.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  لا توجد تعليقات بعد
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
