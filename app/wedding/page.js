// // 'use client';

// // import { useState } from 'react';
// // import { Download, Send } from 'lucide-react';

// // export default function ContractGenerator() {
// //   const [formData, setFormData] = useState({
// //     clientName: '',
// //     identityNumber: '',
// //     eventType: 'زواج',
// //     eventDate: '',
// //     useLaterDate: false,
// //     totalAmount: '',
// //     guestCount: '',
// //     deposit: ''
// //   });

// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [altPhoneNumber, setAltPhoneNumber] = useState('');

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : value
// //     }));
// //   };

// //   const calculateRemaining = () => {
// //     const total = parseFloat(formData.totalAmount) || 0;
// //     const deposit = parseFloat(formData.deposit) || 0;
// //     return total - deposit;
// //   };

// //   const calculatePricePerPerson = () => {
// //     const total = parseFloat(formData.totalAmount) || 0;
// //     const guests = parseFloat(formData.guestCount) || 1;
// //     return guests > 0 ? (total / guests).toFixed(2) : 0;
// //   };

// //   const generatePDF = () => {
// //     const remaining = calculateRemaining();
// //     const pricePerPerson = calculatePricePerPerson();
// //     const dateText = formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate;

// //     const contractContent = `
// //       <!DOCTYPE html>
// //       <html dir="rtl" lang="ar">
// //       <head>
// //         <meta charset="UTF-8">
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //         <title>عقد - ${formData.clientName}</title>
// //         <style>
// //           * {
// //             margin: 0;
// //             padding: 0;
// //             box-sizing: border-box;
// //           }
          
// //           body {
// //             font-family: 'Traditional Arabic', 'Arial', 'Tahoma', sans-serif;
// //             line-height: 1.8;
// //             padding: 40px;
// //             background: white;
// //             color: #1f2937;
// //           }
          
// //           .container {
// //             max-width: 800px;
// //             margin: 0 auto;
// //             background: white;
// //             padding: 40px;
// //             border: 2px solid #10b981;
// //             border-radius: 12px;
// //           }
          
// //           .header {
// //             display: flex;
// //             justify-content: space-between;
// //             align-items: flex-start;
// //             margin-bottom: 30px;
// //             padding-bottom: 20px;
// //             border-bottom: 3px solid #10b981;
// //           }
          
// //           .company-info {
// //             text-align: right;
// //             flex: 1;
// //           }
          
// //           .company-info h1 {
// //             color: #10b981;
// //             font-size: 24px;
// //             margin-bottom: 8px;
// //             font-weight: bold;
// //           }
          
// //           .company-info p {
// //             color: #6b7280;
// //             font-size: 14px;
// //             margin: 4px 0;
// //           }
          
// //           .logo-section {
// //             text-align: center;
// //             flex: 1;
// //           }
          
// //           .logo-placeholder {
// //             width: 120px;
// //             height: 120px;
// //             border: 3px dashed #10b981;
// //             display: flex;
// //             align-items: center;
// //             justify-content: center;
// //             margin: 0 auto;
// //             border-radius: 50%;
// //             color: #10b981;
// //             font-size: 14px;
// //             font-weight: bold;
// //             background: #f0fdf4;
// //           }
          
// //           .contact-info {
// //             text-align: left;
// //             flex: 1;
// //           }
          
// //           .contact-info p {
// //             color: #6b7280;
// //             font-size: 13px;
// //             margin: 4px 0;
// //           }
          
// //           .title {
// //             text-align: center;
// //             font-size: 32px;
// //             font-weight: bold;
// //             color: #1f2937;
// //             margin: 30px 0;
// //             padding: 15px;
// //             background: linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%);
// //             border-radius: 8px;
// //           }
          
// //           .intro {
// //             text-align: right;
// //             margin: 25px 0;
// //             padding: 20px;
// //             background: #f9fafb;
// //             border-right: 4px solid #10b981;
// //             border-radius: 6px;
// //           }
          
// //           .intro p {
// //             margin: 8px 0;
// //             font-size: 16px;
// //             line-height: 1.9;
// //           }
          
// //           .section {
// //             margin: 25px 0;
// //             padding: 20px;
// //             background: white;
// //             border: 1px solid #e5e7eb;
// //             border-radius: 8px;
// //           }
          
// //           .section h3 {
// //             color: #10b981;
// //             font-size: 20px;
// //             margin-bottom: 15px;
// //             padding-bottom: 10px;
// //             border-bottom: 2px solid #e5e7eb;
// //           }
          
// //           .field-row {
// //             display: flex;
// //             justify-content: space-between;
// //             margin: 12px 0;
// //             padding: 10px;
// //             background: #f9fafb;
// //             border-radius: 6px;
// //           }
          
// //           .field-label {
// //             color: #6b7280;
// //             font-weight: 600;
// //             font-size: 15px;
// //           }
          
// //           .field-value {
// //             color: #1f2937;
// //             font-weight: bold;
// //             font-size: 15px;
// //             border-bottom: 2px solid #10b981;
// //             padding: 0 10px;
// //             min-width: 200px;
// //             text-align: center;
// //           }
          
// //           .financial-summary {
// //             background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
// //             padding: 25px;
// //             border-radius: 8px;
// //             margin: 25px 0;
// //             border: 2px solid #10b981;
// //           }
          
// //           .financial-row {
// //             display: flex;
// //             justify-content: space-between;
// //             margin: 10px 0;
// //             padding: 8px 0;
// //             font-size: 16px;
// //           }
          
// //           .financial-row.total {
// //             border-top: 3px solid #10b981;
// //             padding-top: 15px;
// //             margin-top: 15px;
// //             font-size: 18px;
// //             font-weight: bold;
// //             color: #10b981;
// //           }
          
// //           .parties {
// //             margin: 25px 0;
// //             padding: 20px;
// //             background: #f9fafb;
// //             border-radius: 8px;
// //           }
          
// //           .party {
// //             margin: 15px 0;
// //             padding: 12px;
// //             background: white;
// //             border-right: 4px solid #10b981;
// //             border-radius: 6px;
// //           }
          
// //           .party strong {
// //             color: #10b981;
// //             font-size: 16px;
// //           }
          
// //           .terms {
// //             margin: 25px 0;
// //             padding: 20px;
// //             background: #fffbeb;
// //             border: 2px solid #fbbf24;
// //             border-radius: 8px;
// //           }
          
// //           .terms h3 {
// //             color: #f59e0b;
// //             margin-bottom: 15px;
// //           }
          
// //           .terms p {
// //             margin: 10px 0;
// //             padding: 8px;
// //             background: white;
// //             border-radius: 4px;
// //             font-size: 15px;
// //           }
          
// //           .cancellation {
// //             margin: 25px 0;
// //             padding: 20px;
// //             background: #fef2f2;
// //             border: 2px solid #ef4444;
// //             border-radius: 8px;
// //           }
          
// //           .cancellation h3 {
// //             color: #dc2626;
// //             margin-bottom: 15px;
// //           }
          
// //           .footer {
// //             margin-top: 40px;
// //             padding-top: 25px;
// //             border-top: 2px solid #e5e7eb;
// //             display: flex;
// //             justify-content: space-around;
// //           }
          
// //           .signature-box {
// //             text-align: center;
// //             flex: 1;
// //           }
          
// //           .signature-line {
// //             border-top: 2px solid #1f2937;
// //             width: 200px;
// //             margin: 40px auto 10px;
// //           }
          
// //           @media print {
// //             body {
// //               padding: 20px;
// //             }
// //             .container {
// //               border: none;
// //               box-shadow: none;
// //             }
// //             .no-print {
// //               display: none !important;
// //             }
// //           }
          
// //           .print-buttons {
// //             text-align: center;
// //             margin-top: 30px;
// //             padding: 20px;
// //           }
          
// //           .btn {
// //             padding: 12px 30px;
// //             margin: 0 10px;
// //             border: none;
// //             border-radius: 6px;
// //             font-size: 16px;
// //             cursor: pointer;
// //             font-weight: bold;
// //             transition: all 0.3s;
// //           }
          
// //           .btn-print {
// //             background: #10b981;
// //             color: white;
// //           }
          
// //           .btn-print:hover {
// //             background: #059669;
// //           }
          
// //           .btn-close {
// //             background: #6b7280;
// //             color: white;
// //           }
          
// //           .btn-close:hover {
// //             background: #4b5563;
// //           }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="container">
// //           <div class="header">
// //             <div class="company-info">
// //               <h1>مؤسسة جوابا للاحتفالات والمناسبات</h1>
// //               <p><strong>السجل التجاري:</strong> 1010765704</p>
// //             </div>
            
// //             <div class="logo-section">
// //               <div class="logo-placeholder">
// //                 [الشعار]
// //               </div>
// //             </div>
            
// //             <div class="contact-info">
// //               <p><strong>واتساب:</strong> 0501854427</p>
// //               <p><strong>Instagram:</strong> Guapo_catering</p>
// //             </div>
// //           </div>

// //           <h1 class="title">العقد</h1>

// //           <div class="intro">
// //             <p><strong>تتقدم مؤسسة جوابا للمناسبات بالتعاون مع نوفتيل العنود</strong></p>
// //             <p>بعد إقرار كل من الطرفين بأهليته المعتبرة شرعاً وقانوناً للتعاقد فقد اتفق على الآتي:</p>
// //           </div>

// //           <div class="section">
// //             <h3>معلومات العميل والحفل</h3>
// //             <div class="field-row">
// //               <span class="field-label">للمكرم/ة:</span>
// //               <span class="field-value">${formData.clientName || '_______________'}</span>
// //             </div>
// //             <div class="field-row">
// //               <span class="field-label">رقم الهوية:</span>
// //               <span class="field-value">${formData.identityNumber || '_______________'}</span>
// //             </div>
// //             <div class="field-row">
// //               <span class="field-label">لإقامة حفل:</span>
// //               <span class="field-value">${formData.eventType}</span>
// //             </div>
// //             <div class="field-row">
// //               <span class="field-label">المقام في برج العنود فندق نوفوتيل بيوم:</span>
// //               <span class="field-value">${dateText}</span>
// //             </div>
// //           </div>

// //           <p style="text-align: right; margin: 20px 0; padding: 15px; background: #f0fdf4; border-radius: 6px;">
// //             بالعرض المرفق أدناه بحيث توجد به كافة التفاصيل المطلوبة
// //           </p>

// //           <div class="financial-summary">
// //             <h3 style="color: #10b981; margin-bottom: 20px; text-align: center;">التفاصيل المالية</h3>
// //             <div class="financial-row">
// //               <span class="field-label">المبلغ الكامل:</span>
// //               <span class="field-value">${formData.totalAmount || '0'} ريال</span>
// //             </div>
// //             <div class="financial-row">
// //               <span class="field-label">عدد الضيوف:</span>
// //               <span class="field-value">${formData.guestCount || '0'}</span>
// //             </div>
// //             <div class="financial-row">
// //               <span class="field-label">العربون:</span>
// //               <span class="field-value">${formData.deposit || '0'} ريال</span>
// //             </div>
// //             <div class="financial-row">
// //               <span class="field-label">المبلغ المتبقي:</span>
// //               <span class="field-value">${remaining.toFixed(2)} ريال</span>
// //             </div>
// //             <div class="financial-row total">
// //               <span>سعر الشخص (يشمل العشاء):</span>
// //               <span>${pricePerPerson} ريال</span>
// //             </div>
// //           </div>

// //           <div class="parties">
// //             <h3 style="color: #10b981; margin-bottom: 15px;">أطراف العقد</h3>
// //             <div class="party">
// //               <p><strong>الطرف الأول:</strong> مؤسسة جوابا للاحتفالات والمناسبات</p>
// //             </div>
// //             <div class="party">
// //               <p><strong>الطرف الثاني:</strong> ${formData.clientName || '_______________'}</p>
// //             </div>
// //             <div class="field-row">
// //               <span class="field-label">رقم الطرف الثاني:</span>
// //               <span class="field-value">${phoneNumber || '_______________'}</span>
// //             </div>
// //             <div class="field-row">
// //               <span class="field-label">رقم آخر:</span>
// //               <span class="field-value">${altPhoneNumber || '_______________'}</span>
// //             </div>
// //           </div>

// //           <div class="terms">
// //             <h3>شروط العقد</h3>
// //             <p>1- يلزم الطرف الأول ..........</p>
// //           </div>

// //           <div class="cancellation">
// //             <h3>إلغاء العقد</h3>
// //             <p>في حالة إلغاء العقد لا يتم تعويض الطرفين</p>
// //           </div>

// //           <div class="footer">
// //             <div class="signature-box">
// //               <p><strong>توقيع الطرف الأول</strong></p>
// //               <div class="signature-line"></div>
// //               <p style="color: #6b7280; font-size: 14px;">مؤسسة جوابا</p>
// //             </div>
// //             <div class="signature-box">
// //               <p><strong>توقيع الطرف الثاني</strong></p>
// //               <div class="signature-line"></div>
// //               <p style="color: #6b7280; font-size: 14px;">${formData.clientName || 'العميل'}</p>
// //             </div>
// //           </div>

// //           <div class="print-buttons no-print">
// //             <button class="btn btn-print" onclick="window.print()">طباعة / حفظ PDF</button>
// //             <button class="btn btn-close" onclick="window.close()">إغلاق</button>
// //           </div>
// //         </div>
// //       </body>
// //       </html>
// //     `;

// //     const printWindow = window.open('', '_blank');
// //     printWindow.document.write(contractContent);
// //     printWindow.document.close();
// //   };

// //   const sendWhatsApp = () => {
// //     const message = `عقد جديد - مؤسسة جوابا للاحتفالات

// // العميل: ${formData.clientName}
// // رقم الهوية: ${formData.identityNumber}
// // نوع الحفل: ${formData.eventType}
// // التاريخ: ${formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate}

// // التفاصيل المالية:
// // 💰 المبلغ الكامل: ${formData.totalAmount} ريال
// // 👥 عدد الضيوف: ${formData.guestCount}
// // 💵 العربون: ${formData.deposit} ریال
// // 💳 المبلغ المتبقي: ${calculateRemaining()} ریال
// // 🍽️ سعر الشخص: ${calculatePricePerPerson()} ریال

// // 📞 رقم الطرف الثاني: ${phoneNumber}
// // 📱 رقم آخر: ${altPhoneNumber}`;

// //     const whatsappUrl = `https://wa.me/966501854427?text=${encodeURIComponent(message)}`;
// //     window.open(whatsappUrl, '_blank');
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-6">
// //       <div className="max-w-5xl mx-auto">
// //         {/* Header */}
// //         <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-t-4 border-emerald-500">
// //           <div className="text-center">
// //             <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
// //               <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
// //                 جوابا
// //               </div>
// //             </div>
// //             <h1 className="text-4xl font-bold text-gray-800 mb-2">مولد العقود</h1>
// //             <p className="text-xl text-gray-600 mb-1">مؤسسة جوابا للاحتفالات والمناسبات</p>
// //             <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-3">
// //               <p>📱 واتساب: 0501854427</p>
// //               <p>📷 Instagram: Guapo_catering</p>
// //               <p>📋 السجل التجاري: 1010765704</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-white rounded-2xl shadow-xl p-8">
// //           <div className="space-y-6" dir="rtl">
// //             {/* Client Information */}
// //             <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
// //               <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                 <span className="text-blue-600">👤</span>
// //                 معلومات العميل
// //               </h2>
              
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">اسم العميل</label>
// //                   <input
// //                     type="text"
// //                     name="clientName"
// //                     value={formData.clientName}
// //                     onChange={handleInputChange}
// //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
// //                     placeholder="أدخل اسم العميل"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">رقم الهوية</label>
// //                   <input
// //                     type="text"
// //                     name="identityNumber"
// //                     value={formData.identityNumber}
// //                     onChange={handleInputChange}
// //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
// //                     placeholder="أدخل رقم الهوية"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">رقم الطرف الثاني</label>
// //                   <input
// //                     type="tel"
// //                     value={phoneNumber}
// //                     onChange={(e) => setPhoneNumber(e.target.value)}
// //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
// //                     placeholder="05xxxxxxxx"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">رقم آخر</label>
// //                   <input
// //                     type="tel"
// //                     value={altPhoneNumber}
// //                     onChange={(e) => setAltPhoneNumber(e.target.value)}
// //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
// //                     placeholder="05xxxxxxxx"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Event Details */}
// //             <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
// //               <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                 <span className="text-purple-600">🎉</span>
// //                 تفاصيل الحفل
// //               </h2>
              
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">نوع الحفل</label>
// //                   <select
// //                     name="eventType"
// //                     value={formData.eventType}
// //                     onChange={handleInputChange}
// //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
// //                   >
// //                     <option value="زواج">💍 زواج</option>
// //                     <option value="ملكة">👑 ملكة</option>
// //                     <option value="خطبة">💐 خطبة</option>
// //                     <option value="استقبال">🎊 استقبال</option>
// //                     <option value="حفل خاص">✨ حفل خاص</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">تاريخ الحفل</label>
// //                   <div className="space-y-2">
// //                     <input
// //                       type="date"
// //                       name="eventDate"
// //                       value={formData.eventDate}
// //                       onChange={handleInputChange}
// //                       disabled={formData.useLaterDate}
// //                       className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
// //                     />
// //                     <label className="flex items-center cursor-pointer">
// //                       <input
// //                         type="checkbox"
// //                         name="useLaterDate"
// //                         checked={formData.useLaterDate}
// //                         onChange={handleInputChange}
// //                         className="ml-2 w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
// //                       />
// //                       <span className="text-sm text-gray-600 font-medium">يتم تحديده لاحقاً</span>
// //                     </label>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Financial Details */}
// //             <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
// //               <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                 <span className="text-amber-600">💰</span>
// //                 التفاصيل المالية
// //               </h2>
              
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">المبلغ الكامل (ريال)</label>
// //                   <input
// //                     type="number"
// //                     name="totalAmount"
// //                     value={formData.totalAmount}
// //                     onChange={handleInputChange}
// //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
// //                     placeholder="0.00"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">عدد الضيوف</label>
// //                   <input
// //                     type="number"
// //                     name="guestCount"
// //                     value={formData.guestCount}
// //                     onChange={handleInputChange}
// //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
// //                     placeholder="0"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">العربون (ريال)</label>
// //                   <input
// //                     type="number"
// //                     name="deposit"
// //                     value={formData.deposit}
// //                     onChange={handleInputChange}
// //                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
// //                     placeholder="0.00"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">المبلغ المتبقي (ريال)</label>
// //                   <input
// //                     type="text"
// //                     value={calculateRemaining().toFixed(2)}
// //                     disabled
// //                     className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-lg"
// //                   />
// //                 </div>

// //                 <div className="md:col-span-2">
// //                   <label className="block text-gray-700 font-semibold mb-2">سعر الشخص (شامل العشاء) - ريال</label>
// //                   <input
// //                     type="text"
// //                     value={calculatePricePerPerson()}
// //                     disabled
// //                     className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xl text-center"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="flex flex-col md:flex-row gap-4 justify-center mt-8 pt-6 border-t-2 border-gray-200">
// //               <button
// //                 onClick={generatePDF}
// //                 className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
// //               >
// //                 <Download size={24} />
// //                 تحميل العقد (PDF)
// //               </button>

// //               <button
// //                 onClick={sendWhatsApp}
// //                 className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
// //               >
// //                 <Send size={24} />
// //                 إرسال عبر واتساب
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div className="text-center mt-6 text-gray-600 text-sm">
// //           <p>© 2025 مؤسسة جوابا للاحتفالات والمناسبات - جميع الحقوق محفوظة</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';

// import { useState, useEffect } from 'react';
// import { Download, Send, Moon, Sun, Eye, Trash2, Palette, FileText, Save } from 'lucide-react';

// export default function ContractGenerator() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [showCustomization, setShowCustomization] = useState(false);
//   const [savedContracts, setSavedContracts] = useState([]);
//   const [showSaved, setShowSaved] = useState(false);
  
//   const [pdfSettings, setPdfSettings] = useState({
//     bgColor: '#ffffff',
//     textColor: '#1f2937',
//     accentColor: '#10b981'
//   });

//   const [formData, setFormData] = useState({
//     clientName: '',
//     identityNumber: '',
//     eventType: 'زواج',
//     eventDate: '',
//     useLaterDate: false,
//     totalAmount: '',
//     guestCount: '',
//     deposit: ''
//   });

//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [altPhoneNumber, setAltPhoneNumber] = useState('');

//   // Load saved contracts and settings on mount
//   useEffect(() => {
//     const saved = sessionStorage.getItem('savedContracts');
//     const settings = sessionStorage.getItem('pdfSettings');
//     const theme = sessionStorage.getItem('darkMode');
    
//     if (saved) setSavedContracts(JSON.parse(saved));
//     if (settings) setPdfSettings(JSON.parse(settings));
//     if (theme) setDarkMode(JSON.parse(theme));
//   }, []);

//   // Save settings when changed
//   useEffect(() => {
//     sessionStorage.setItem('pdfSettings', JSON.stringify(pdfSettings));
//   }, [pdfSettings]);

//   useEffect(() => {
//     sessionStorage.setItem('darkMode', JSON.stringify(darkMode));
//   }, [darkMode]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const calculateRemaining = () => {
//     const total = parseFloat(formData.totalAmount) || 0;
//     const deposit = parseFloat(formData.deposit) || 0;
//     return total - deposit;
//   };

//   const calculatePricePerPerson = () => {
//     const total = parseFloat(formData.totalAmount) || 0;
//     const guests = parseFloat(formData.guestCount) || 1;
//     return guests > 0 ? (total / guests).toFixed(2) : 0;
//   };

//   const saveContract = () => {
//     const contract = {
//       id: Date.now(),
//       date: new Date().toISOString(),
//       ...formData,
//       phoneNumber,
//       altPhoneNumber,
//       remaining: calculateRemaining(),
//       pricePerPerson: calculatePricePerPerson()
//     };
    
//     const updated = [contract, ...savedContracts];
//     setSavedContracts(updated);
//     sessionStorage.setItem('savedContracts', JSON.stringify(updated));
//     alert('تم حفظ العقد بنجاح! ✅');
//   };

//   const loadContract = (contract) => {
//     setFormData({
//       clientName: contract.clientName,
//       identityNumber: contract.identityNumber,
//       eventType: contract.eventType,
//       eventDate: contract.eventDate,
//       useLaterDate: contract.useLaterDate,
//       totalAmount: contract.totalAmount,
//       guestCount: contract.guestCount,
//       deposit: contract.deposit
//     });
//     setPhoneNumber(contract.phoneNumber);
//     setAltPhoneNumber(contract.altPhoneNumber);
//     setShowSaved(false);
//     alert('تم تحميل العقد! 📄');
//   };

//   const deleteContract = (id) => {
//     const updated = savedContracts.filter(c => c.id !== id);
//     setSavedContracts(updated);
//     sessionStorage.setItem('savedContracts', JSON.stringify(updated));
//   };

//   const generatePDF = () => {
//     const remaining = calculateRemaining();
//     const pricePerPerson = calculatePricePerPerson();
//     const dateText = formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate;

//     const contractContent = `
//       <!DOCTYPE html>
//       <html dir="rtl" lang="ar">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>عقد احتفال - ${formData.clientName}</title>
//         <style>
//           @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap');
          
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//           }
          
//           body {
//             font-family: 'Tajawal', 'Traditional Arabic', 'Arial', sans-serif;
//             line-height: 2;
//             padding: 30px;
//             background: ${pdfSettings.bgColor};
//             color: ${pdfSettings.textColor};
//           }
          
//           .contract-page {
//             max-width: 900px;
//             margin: 0 auto;
//             background: ${pdfSettings.bgColor};
//             padding: 50px;
//             border: 3px solid ${pdfSettings.accentColor};
//             box-shadow: 0 0 30px rgba(0,0,0,0.1);
//           }
          
//           .header-section {
//             text-align: center;
//             border-bottom: 4px double ${pdfSettings.accentColor};
//             padding-bottom: 30px;
//             margin-bottom: 40px;
//           }
          
//           .company-logo {
//             width: 140px;
//             height: 140px;
//             margin: 0 auto 20px;
//             border: 4px solid ${pdfSettings.accentColor};
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             background: linear-gradient(135deg, ${pdfSettings.accentColor}22 0%, ${pdfSettings.accentColor}44 100%);
//             font-size: 36px;
//             font-weight: 900;
//             color: ${pdfSettings.accentColor};
//           }
          
//           .company-title {
//             font-size: 32px;
//             font-weight: 900;
//             color: ${pdfSettings.accentColor};
//             margin: 15px 0;
//             letter-spacing: 1px;
//           }
          
//           .company-subtitle {
//             font-size: 16px;
//             color: ${pdfSettings.textColor};
//             opacity: 0.7;
//             margin: 8px 0;
//           }
          
//           .header-info {
//             display: flex;
//             justify-content: space-between;
//             margin-top: 20px;
//             font-size: 14px;
//             color: ${pdfSettings.textColor};
//             opacity: 0.8;
//           }
          
//           .contract-title {
//             text-align: center;
//             font-size: 48px;
//             font-weight: 900;
//             color: ${pdfSettings.accentColor};
//             margin: 40px 0;
//             padding: 25px;
//             background: linear-gradient(135deg, ${pdfSettings.accentColor}11 0%, ${pdfSettings.accentColor}22 100%);
//             border: 2px solid ${pdfSettings.accentColor};
//             border-radius: 15px;
//             text-transform: uppercase;
//             letter-spacing: 3px;
//           }
          
//           .intro-text {
//             text-align: center;
//             font-size: 18px;
//             line-height: 2.2;
//             margin: 35px 0;
//             padding: 30px;
//             background: ${pdfSettings.accentColor}08;
//             border-right: 6px solid ${pdfSettings.accentColor};
//             border-radius: 10px;
//             font-weight: 500;
//           }
          
//           .contract-section {
//             margin: 35px 0;
//             padding: 30px;
//             border: 2px solid ${pdfSettings.textColor}22;
//             border-radius: 12px;
//             background: ${pdfSettings.bgColor === '#ffffff' ? '#fafafa' : pdfSettings.textColor}11;
//           }
          
//           .section-title {
//             font-size: 24px;
//             font-weight: 800;
//             color: ${pdfSettings.accentColor};
//             margin-bottom: 25px;
//             padding-bottom: 15px;
//             border-bottom: 3px solid ${pdfSettings.accentColor};
//             text-align: center;
//           }
          
//           .info-grid {
//             display: grid;
//             grid-template-columns: repeat(2, 1fr);
//             gap: 20px;
//             margin: 20px 0;
//           }
          
//           .info-item {
//             padding: 18px;
//             background: ${pdfSettings.bgColor === '#ffffff' ? '#ffffff' : pdfSettings.textColor}08;
//             border: 2px solid ${pdfSettings.textColor}11;
//             border-radius: 10px;
//           }
          
//           .info-label {
//             font-size: 15px;
//             color: ${pdfSettings.textColor};
//             opacity: 0.7;
//             font-weight: 600;
//             margin-bottom: 8px;
//           }
          
//           .info-value {
//             font-size: 18px;
//             color: ${pdfSettings.textColor};
//             font-weight: 700;
//             padding: 10px 15px;
//             background: ${pdfSettings.accentColor}15;
//             border-bottom: 3px solid ${pdfSettings.accentColor};
//             border-radius: 6px;
//             text-align: center;
//           }
          
//           .financial-box {
//             background: linear-gradient(135deg, ${pdfSettings.accentColor}15 0%, ${pdfSettings.accentColor}25 100%);
//             padding: 35px;
//             border-radius: 15px;
//             border: 3px solid ${pdfSettings.accentColor};
//             margin: 35px 0;
//           }
          
//           .financial-row {
//             display: flex;
//             justify-content: space-between;
//             padding: 18px 25px;
//             margin: 12px 0;
//             background: ${pdfSettings.bgColor === '#ffffff' ? '#ffffff' : pdfSettings.textColor}11;
//             border-radius: 10px;
//             font-size: 18px;
//             font-weight: 600;
//             border: 2px solid ${pdfSettings.textColor}11;
//           }
          
//           .financial-row.highlight {
//             background: ${pdfSettings.accentColor};
//             color: white;
//             font-size: 22px;
//             font-weight: 900;
//             border: none;
//             box-shadow: 0 4px 15px ${pdfSettings.accentColor}66;
//           }
          
//           .parties-section {
//             margin: 40px 0;
//             padding: 30px;
//             background: ${pdfSettings.accentColor}08;
//             border-radius: 12px;
//           }
          
//           .party-box {
//             padding: 20px 25px;
//             margin: 15px 0;
//             background: ${pdfSettings.bgColor === '#ffffff' ? '#ffffff' : pdfSettings.textColor}11;
//             border-right: 6px solid ${pdfSettings.accentColor};
//             border-radius: 8px;
//             font-size: 18px;
//             font-weight: 600;
//           }
          
//           .terms-section {
//             margin: 40px 0;
//             padding: 30px;
//             background: #fff3cd;
//             border: 3px solid #ffc107;
//             border-radius: 12px;
//           }
          
//           .terms-section h3 {
//             color: #f57c00;
//             font-size: 24px;
//             margin-bottom: 20px;
//             font-weight: 800;
//           }
          
//           .terms-section p {
//             margin: 15px 0;
//             padding: 15px 20px;
//             background: white;
//             border-radius: 8px;
//             font-size: 16px;
//             line-height: 2;
//             border-right: 4px solid #ffc107;
//           }
          
//           .cancellation-section {
//             margin: 40px 0;
//             padding: 30px;
//             background: #ffebee;
//             border: 3px solid #ef5350;
//             border-radius: 12px;
//           }
          
//           .cancellation-section h3 {
//             color: #d32f2f;
//             font-size: 24px;
//             margin-bottom: 20px;
//             font-weight: 800;
//           }
          
//           .cancellation-section p {
//             font-size: 17px;
//             font-weight: 600;
//             color: #c62828;
//             line-height: 2;
//           }
          
//           .signatures-section {
//             margin-top: 60px;
//             padding-top: 40px;
//             border-top: 4px double ${pdfSettings.accentColor};
//             display: grid;
//             grid-template-columns: repeat(2, 1fr);
//             gap: 50px;
//           }
          
//           .signature-box {
//             text-align: center;
//           }
          
//           .signature-title {
//             font-size: 20px;
//             font-weight: 800;
//             color: ${pdfSettings.textColor};
//             margin-bottom: 50px;
//           }
          
//           .signature-line {
//             width: 100%;
//             height: 3px;
//             background: ${pdfSettings.textColor};
//             margin: 60px 0 15px;
//           }
          
//           .signature-name {
//             font-size: 16px;
//             color: ${pdfSettings.textColor};
//             opacity: 0.7;
//             font-weight: 600;
//           }
          
//           .contract-footer {
//             margin-top: 50px;
//             text-align: center;
//             padding: 25px;
//             background: ${pdfSettings.accentColor}11;
//             border-radius: 10px;
//             font-size: 14px;
//             color: ${pdfSettings.textColor};
//             opacity: 0.8;
//           }
          
//           @media print {
//             body {
//               padding: 0;
//               background: white;
//             }
//             .contract-page {
//               box-shadow: none;
//               page-break-inside: avoid;
//             }
//             .no-print {
//               display: none !important;
//             }
//           }
          
//           .print-btn {
//             padding: 15px 40px;
//             margin: 30px 10px;
//             border: none;
//             border-radius: 10px;
//             font-size: 18px;
//             font-weight: 700;
//             cursor: pointer;
//             transition: all 0.3s;
//           }
          
//           .btn-print {
//             background: ${pdfSettings.accentColor};
//             color: white;
//           }
          
//           .btn-print:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 6px 20px ${pdfSettings.accentColor}66;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="contract-page">
//           <div class="header-section">
//             <div class="company-logo">جوابا</div>
//             <h1 class="company-title">مؤسسة جوابا للاحتفالات والمناسبات</h1>
//             <p class="company-subtitle">بالتعاون مع نوفتيل العنود</p>
//             <div class="header-info">
//               <div>📋 السجل التجاري: 1010765704</div>
//               <div>📱 واتساب: 0501854427</div>
//               <div>📷 Instagram: Guapo_catering</div>
//             </div>
//           </div>

//           <h1 class="contract-title">⚖️ العـــقــــد ⚖️</h1>

//           <div class="intro-text">
//             <p><strong>بعد إقرار كل من الطرفين بأهليته المعتبرة شرعاً وقانوناً للتعاقد</strong></p>
//             <p><strong>فقد اتفق الطرفان على ما يلي:</strong></p>
//           </div>

//           <div class="contract-section">
//             <h3 class="section-title">📋 معلومات العميل والحفل</h3>
//             <div class="info-grid">
//               <div class="info-item">
//                 <div class="info-label">للمكرم/ة:</div>
//                 <div class="info-value">${formData.clientName || '_______________'}</div>
//               </div>
//               <div class="info-item">
//                 <div class="info-label">رقم الهوية:</div>
//                 <div class="info-value">${formData.identityNumber || '_______________'}</div>
//               </div>
//               <div class="info-item">
//                 <div class="info-label">لإقامة حفل:</div>
//                 <div class="info-value">${formData.eventType}</div>
//               </div>
//               <div class="info-item">
//                 <div class="info-label">تاريخ الحفل:</div>
//                 <div class="info-value">${dateText}</div>
//               </div>
//             </div>
//             <p style="text-align: center; margin-top: 25px; font-size: 17px; font-weight: 600; padding: 20px; background: ${pdfSettings.accentColor}15; border-radius: 10px;">
//               المقام في برج العنود - فندق نوفوتيل<br/>
//               بالعرض المرفق أدناه بحيث توجد به كافة التفاصيل المطلوبة
//             </p>
//           </div>

//           <div class="financial-box">
//             <h3 class="section-title">💰 التفاصيل المالية</h3>
//             <div class="financial-row">
//               <span>المبلغ الكامل:</span>
//               <span>${formData.totalAmount || '0'} ريال سعودي</span>
//             </div>
//             <div class="financial-row">
//               <span>عدد الضيوف:</span>
//               <span>${formData.guestCount || '0'} ضيف</span>
//             </div>
//             <div class="financial-row">
//               <span>العربون المدفوع:</span>
//               <span>${formData.deposit || '0'} ريال سعودي</span>
//             </div>
//             <div class="financial-row">
//               <span>المبلغ المتبقي:</span>
//               <span>${remaining.toFixed(2)} ريال سعودي</span>
//             </div>
//             <div class="financial-row highlight">
//               <span>🍽️ سعر الشخص الواحد (شامل العشاء):</span>
//               <span>${pricePerPerson} ريال سعودي</span>
//             </div>
//           </div>

//           <div class="parties-section">
//             <h3 class="section-title">👥 أطراف العقد</h3>
//             <div class="party-box">
//               <strong style="color: ${pdfSettings.accentColor};">الطرف الأول (المؤسسة):</strong> مؤسسة جوابا للاحتفالات والمناسبات
//             </div>
//             <div class="party-box">
//               <strong style="color: ${pdfSettings.accentColor};">الطرف الثاني (العميل):</strong> ${formData.clientName || '_______________'}
//             </div>
//             <div class="info-grid" style="margin-top: 20px;">
//               <div class="info-item">
//                 <div class="info-label">📞 رقم الطرف الثاني:</div>
//                 <div class="info-value">${phoneNumber || '_______________'}</div>
//               </div>
//               <div class="info-item">
//                 <div class="info-label">📱 رقم بديل:</div>
//                 <div class="info-value">${altPhoneNumber || '_______________'}</div>
//               </div>
//             </div>
//           </div>

//           <div class="terms-section">
//             <h3>📜 شروط العقد والالتزامات</h3>
//             <p><strong>١.</strong> يلتزم الطرف الأول (مؤسسة جوابا) بتوفير جميع الخدمات المتفق عليها في العرض المرفق بهذا العقد.</p>
//             <p><strong>٢.</strong> يلتزم الطرف الثاني (العميل) بسداد المبلغ المتبقي قبل موعد الحفل بـ 48 ساعة على الأقل.</p>
//             <p><strong>٣.</strong> يحق للطرف الأول إجراء تعديلات طفيفة على الترتيبات بما يحقق مصلحة الحفل دون الإخلال بالمتفق عليه.</p>
//             <p><strong>٤.</strong> يتحمل الطرف الثاني مسؤولية أي أضرار تحدث للمكان أو المعدات نتيجة سوء الاستخدام.</p>
//             <p><strong>٥.</strong> يجب إخطار الطرف الأول بأي تغييرات في عدد الضيوف قبل 72 ساعة من موعد الحفل.</p>
//           </div>

//           <div class="cancellation-section">
//             <h3>⚠️ سياسة الإلغاء والتعديل</h3>
//             <p>• في حالة إلغاء العقد من قبل أي من الطرفين، لا يحق لأي منهما المطالبة بتعويضات.</p>
//             <p>• العربون المدفوع غير قابل للاسترداد في حالة الإلغاء.</p>
//             <p>• يمكن تعديل موعد الحفل لمرة واحدة فقط بالتنسيق المسبق مع الطرف الأول.</p>
//           </div>

//           <div class="signatures-section">
//             <div class="signature-box">
//               <div class="signature-title">توقيع الطرف الأول</div>
//               <div class="signature-line"></div>
//               <div class="signature-name">مؤسسة جوابا للاحتفالات</div>
//               <div class="signature-name" style="margin-top: 10px; font-size: 14px;">التاريخ: ________________</div>
//             </div>
//             <div class="signature-box">
//               <div class="signature-title">توقيع الطرف الثاني</div>
//               <div class="signature-line"></div>
//               <div class="signature-name">${formData.clientName || 'العميل'}</div>
//               <div class="signature-name" style="margin-top: 10px; font-size: 14px;">التاريخ: ________________</div>
//             </div>
//           </div>

//           <div class="contract-footer">
//             <p>هذا العقد صادر بتاريخ: ${new Date().toLocaleDateString('ar-SA')}</p>
//             <p style="margin-top: 10px;">© 2025 مؤسسة جوابا للاحتفالات والمناسبات - جميع الحقوق محفوظة</p>
//           </div>

//           <div style="text-align: center; margin-top: 40px;" class="no-print">
//             <button class="print-btn btn-print" onclick="window.print()">🖨️ طباعة / حفظ PDF</button>
//           </div>
//         </div>
//       </body>
//       </html>
//     `;

//     const printWindow = window.open('', '_blank');
//     printWindow.document.write(contractContent);
//     printWindow.document.close();
//   };

//   const sendWhatsApp = () => {
//     const message = `🎉 *عقد جديد - مؤسسة جوابا للاحتفالات* 🎉

// 👤 *العميل:* ${formData.clientName}
// 🆔 *رقم الهوية:* ${formData.identityNumber}
// 💍 *نوع الحفل:* ${formData.eventType}
// 📅 *التاريخ:* ${formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate}

// 💰 *التفاصيل المالية:*
// ━━━━━━━━━━━━━━
// • المبلغ الكامل: ${formData.totalAmount} ريال
// • عدد الضيوف: ${formData.guestCount}
// • العربون: ${formData.deposit} ريال
// • المتبقي: ${calculateRemaining()} ريال
// • سعر الشخص: ${calculatePricePerPerson()} ريال

// 📞 *أرقام التواصل:*
// • رقم العميل: ${phoneNumber}
// • رقم بديل: ${altPhoneNumber}

// ✨ _مؤسسة جوابا للاحتفالات والمناسبات_`;

//     const whatsappUrl = `https://wa.me/966501854427?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   const bgClass = darkMode 
//     ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
//     : 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50';
  
//   const cardBg = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white';
//   const textColor = darkMode ? 'text-gray-100' : 'text-gray-800';
//   const labelColor = darkMode ? 'text-gray-300' : 'text-gray-700';
//   const inputBg = darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900';
//   const sectionBg = darkMode ? 'bg-gray-700/50' : 'bg-gradient-to-r';

//   return (
//     <div className={`min-h-screen ${bgClass} p-3 sm:p-6 transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className={`${cardBg} rounded-2xl shadow-2xl p-4 sm:p-8 mb-6 border-t-4 border-emerald-500`}>
//           <div className="text-center">
//             <div className="flex justify-between items-center mb-4">
//               <button
//                 onClick={() => setShowSaved(!showSaved)}
//                 className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
//                 title="العقود المحفوظة"
//               >
//                 <FileText size={24} className={darkMode ? 'text-emerald-400' : 'text-emerald-600'} />
//               </button>
              
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setShowCustomization(!showCustomization)}
//                   className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
//                   title="تخصيص الألوان"
//                 >
//                   <Palette size={24} className={darkMode ? 'text-emerald-400' : 'text-emerald-600'} />
//                 </button>
//                 <button
//                   onClick={() => setDarkMode(!darkMode)}
//                   className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
//                   title={darkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
//                 >
//                   {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
//                 </button>
//               </div>
//             </div>

//             <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
//               <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
//                 جوابا
//               </div>
//             </div>
//             <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${textColor} mb-2`}>مولد العقود الاحترافي</h1>
//             <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>مؤسسة جوابا للاحتفالات والمناسبات</p>
//             <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-3`}>
//               <p>📱 واتساب: 0501854427</p>
//               <p>📷 Instagram: Guapo_catering</p>
//               <p className="hidden sm:block">📋 السجل التجاري: 1010765704</p>
//             </div>
//           </div>
//         </div>

//         {/* Customization Panel */}
//         {showCustomization && (
//           <div className={`${cardBg} rounded-2xl shadow-xl p-4 sm:p-6 mb-6`}>
//             <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 text-center`}>🎨 تخصيص ألوان العقد</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" dir="rtl">
//               <div>
//                 <label className={`block ${labelColor} font-semibold mb-2`}>لون الخلفية</label>
//                 <input
//                   type="color"
//                   value={pdfSettings.bgColor}
//                   onChange={(e) => setPdfSettings({...pdfSettings, bgColor: e.target.value})}
//                   className="w-full h-12 rounded-lg cursor-pointer border-2"
//                 />
//               </div>
//               <div>
//                 <label className={`block ${labelColor} font-semibold mb-2`}>لون النص</label>
//                 <input
//                   type="color"
//                   value={pdfSettings.textColor}
//                   onChange={(e) => setPdfSettings({...pdfSettings, textColor: e.target.value})}
//                   className="w-full h-12 rounded-lg cursor-pointer border-2"
//                 />
//               </div>
//               <div>
//                 <label className={`block ${labelColor} font-semibold mb-2`}>اللون الأساسي</label>
//                 <input
//                   type="color"
//                   value={pdfSettings.accentColor}
//                   onChange={(e) => setPdfSettings({...pdfSettings, accentColor: e.target.value})}
//                   className="w-full h-12 rounded-lg cursor-pointer border-2"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Saved Contracts */}
//         {showSaved && (
//           <div className={`${cardBg} rounded-2xl shadow-xl p-4 sm:p-6 mb-6`}>
//             <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 text-center`}>📄 العقود المحفوظة</h2>
//             {savedContracts.length === 0 ? (
//               <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>لا توجد عقود محفوظة</p>
//             ) : (
//               <div className="space-y-3 max-h-96 overflow-y-auto">
//                 {savedContracts.map((contract) => (
//                   <div key={contract.id} className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`} dir="rtl">
//                     <div className="flex justify-between items-start mb-2">
//                       <div>
//                         <p className={`font-bold ${textColor}`}>{contract.clientName}</p>
//                         <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                           {new Date(contract.date).toLocaleDateString('ar-SA')}
//                         </p>
//                       </div>
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => loadContract(contract)}
//                           className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all"
//                           title="تحميل"
//                         >
//                           <Eye size={18} />
//                         </button>
//                         <button
//                           onClick={() => deleteContract(contract.id)}
//                           className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
//                           title="حذف"
//                         >
//                           <Trash2 size={18} />
//                         </button>
//                       </div>
//                     </div>
//                     <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} grid grid-cols-2 gap-2`}>
//                       <p>حفل: {contract.eventType}</p>
//                       <p>المبلغ: {contract.totalAmount} ريال</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         <div className={`${cardBg} rounded-2xl shadow-2xl p-4 sm:p-8`}>
//           <div className="space-y-6" dir="rtl">
//             {/* Client Information */}
//             <div className={`${sectionBg} ${darkMode ? '' : 'from-blue-50 to-cyan-50'} p-4 sm:p-6 rounded-xl border ${darkMode ? 'border-blue-900' : 'border-blue-200'}`}>
//               <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
//                 <span className="text-blue-600">👤</span>
//                 معلومات العميل
//               </h2>
              
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>اسم العميل</label>
//                   <input
//                     type="text"
//                     name="clientName"
//                     value={formData.clientName}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
//                     placeholder="أدخل اسم العميل"
//                   />
//                 </div>

//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>رقم الهوية</label>
//                   <input
//                     type="text"
//                     name="identityNumber"
//                     value={formData.identityNumber}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
//                     placeholder="أدخل رقم الهوية"
//                   />
//                 </div>

//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>رقم الطرف الثاني</label>
//                   <input
//                     type="tel"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
//                     placeholder="05xxxxxxxx"
//                   />
//                 </div>

//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>رقم آخر</label>
//                   <input
//                     type="tel"
//                     value={altPhoneNumber}
//                     onChange={(e) => setAltPhoneNumber(e.target.value)}
//                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
//                     placeholder="05xxxxxxxx"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Event Details */}
//             <div className={`${sectionBg} ${darkMode ? '' : 'from-purple-50 to-pink-50'} p-4 sm:p-6 rounded-xl border ${darkMode ? 'border-purple-900' : 'border-purple-200'}`}>
//               <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
//                 <span className="text-purple-600">🎉</span>
//                 تفاصيل الحفل
//               </h2>
              
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>نوع الحفل</label>
//                   <select
//                     name="eventType"
//                     value={formData.eventType}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
//                   >
//                     <option value="زواج">💍 زواج</option>
//                     <option value="ملكة">👑 ملكة</option>
//                     <option value="خطبة">💐 خطبة</option>
//                     <option value="استقبال">🎊 استقبال</option>
//                     <option value="حفل خاص">✨ حفل خاص</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>تاريخ الحفل</label>
//                   <div className="space-y-2">
//                     <input
//                       type="date"
//                       name="eventDate"
//                       value={formData.eventDate}
//                       onChange={handleInputChange}
//                       disabled={formData.useLaterDate}
//                       className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg} disabled:opacity-50 disabled:cursor-not-allowed`}
//                     />
//                     <label className="flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         name="useLaterDate"
//                         checked={formData.useLaterDate}
//                         onChange={handleInputChange}
//                         className="ml-2 w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
//                       />
//                       <span className={`text-sm ${labelColor} font-medium`}>يتم تحديده لاحقاً</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Financial Details */}
//             <div className={`${sectionBg} ${darkMode ? '' : 'from-amber-50 to-yellow-50'} p-4 sm:p-6 rounded-xl border ${darkMode ? 'border-amber-900' : 'border-amber-200'}`}>
//               <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
//                 <span className="text-amber-600">💰</span>
//                 التفاصيل المالية
//               </h2>
              
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>المبلغ الكامل (ريال)</label>
//                   <input
//                     type="number"
//                     name="totalAmount"
//                     value={formData.totalAmount}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
//                     placeholder="0.00"
//                   />
//                 </div>

//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>عدد الضيوف</label>
//                   <input
//                     type="number"
//                     name="guestCount"
//                     value={formData.guestCount}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
//                     placeholder="0"
//                   />
//                 </div>

//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>العربون (ريال)</label>
//                   <input
//                     type="number"
//                     name="deposit"
//                     value={formData.deposit}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
//                     placeholder="0.00"
//                   />
//                 </div>

//                 <div>
//                   <label className={`block ${labelColor} font-semibold mb-2`}>المبلغ المتبقي (ريال)</label>
//                   <input
//                     type="text"
//                     value={calculateRemaining().toFixed(2)}
//                     disabled
//                     className={`w-full px-4 py-3 border-2 border-emerald-300 rounded-lg ${darkMode ? 'bg-emerald-900 text-emerald-300' : 'bg-emerald-50 text-emerald-700'} font-bold text-lg`}
//                   />
//                 </div>

//                 <div className="lg:col-span-2">
//                   <label className={`block ${labelColor} font-semibold mb-2`}>سعر الشخص (شامل العشاء) - ريال</label>
//                   <input
//                     type="text"
//                     value={calculatePricePerPerson()}
//                     disabled
//                     className={`w-full px-4 py-3 border-2 border-emerald-300 rounded-lg ${darkMode ? 'bg-emerald-900 text-emerald-300' : 'bg-emerald-50 text-emerald-700'} font-bold text-xl text-center`}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t-2 border-gray-200">
//               <button
//                 onClick={saveContract}
//                 className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//               >
//                 <Save size={24} />
//                 حفظ العقد
//               </button>

//               <button
//                 onClick={generatePDF}
//                 className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//               >
//                 <Download size={24} />
//                 تحميل العقد (PDF)
//               </button>

//               <button
//                 onClick={sendWhatsApp}
//                 className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
//               >
//                 <Send size={24} />
//                 إرسال عبر واتساب
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className={`text-center mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
//           <p>© 2025 مؤسسة جوابا للاحتفالات والمناسبات - جميع الحقوق محفوظة</p>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { Download, Send, Moon, Sun, Eye, Trash2, Palette, FileText, Save, Mail } from 'lucide-react';

export default function ContractGenerator() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCustomization, setShowCustomization] = useState(false);
  const [savedContracts, setSavedContracts] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  
  const [pdfSettings, setPdfSettings] = useState({
    bgColor: '#ffffff',
    textColor: '#1f2937',
    accentColor: '#10b981'
  });

  const [formData, setFormData] = useState({
    clientName: '',
    identityNumber: '',
    eventType: 'زواج',
    eventDate: '',
    useLaterDate: false,
    totalAmount: '',
    guestCount: '',
    deposit: ''
  });

  const [phoneNumber, setPhoneNumber] = useState('');
  const [altPhoneNumber, setAltPhoneNumber] = useState('');

  // Load saved contracts and settings on mount
  useEffect(() => {
    const saved = sessionStorage.getItem('savedContracts');
    const settings = sessionStorage.getItem('pdfSettings');
    const theme = sessionStorage.getItem('darkMode');
    
    if (saved) setSavedContracts(JSON.parse(saved));
    if (settings) setPdfSettings(JSON.parse(settings));
    if (theme) setDarkMode(JSON.parse(theme));
  }, []);

  // Save settings when changed
  useEffect(() => {
    sessionStorage.setItem('pdfSettings', JSON.stringify(pdfSettings));
  }, [pdfSettings]);

  useEffect(() => {
    sessionStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateRemaining = () => {
    const total = parseFloat(formData.totalAmount) || 0;
    const deposit = parseFloat(formData.deposit) || 0;
    return total - deposit;
  };

  const calculatePricePerPerson = () => {
    const total = parseFloat(formData.totalAmount) || 0;
    const guests = parseFloat(formData.guestCount) || 1;
    return guests > 0 ? (total / guests).toFixed(2) : 0;
  };

  const saveContract = () => {
    const contract = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...formData,
      phoneNumber,
      altPhoneNumber,
      remaining: calculateRemaining(),
      pricePerPerson: calculatePricePerPerson()
    };
    
    const updated = [contract, ...savedContracts];
    setSavedContracts(updated);
    sessionStorage.setItem('savedContracts', JSON.stringify(updated));
    alert('تم حفظ العقد بنجاح! ✅');
  };

  const loadContract = (contract) => {
    setFormData({
      clientName: contract.clientName,
      identityNumber: contract.identityNumber,
      eventType: contract.eventType,
      eventDate: contract.eventDate,
      useLaterDate: contract.useLaterDate,
      totalAmount: contract.totalAmount,
      guestCount: contract.guestCount,
      deposit: contract.deposit
    });
    setPhoneNumber(contract.phoneNumber);
    setAltPhoneNumber(contract.altPhoneNumber);
    setShowSaved(false);
    alert('تم تحميل العقد! 📄');
  };

  const deleteContract = (id) => {
    const updated = savedContracts.filter(c => c.id !== id);
    setSavedContracts(updated);
    sessionStorage.setItem('savedContracts', JSON.stringify(updated));
  };

  const generatePDF = () => {
    const remaining = calculateRemaining();
    const pricePerPerson = calculatePricePerPerson();
    const dateText = formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate;

    const contractContent = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>عقد احتفال - ${formData.clientName}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Tajawal', 'Traditional Arabic', 'Arial', sans-serif;
            line-height: 2;
            padding: 30px;
            background: ${pdfSettings.bgColor};
            color: ${pdfSettings.textColor};
          }
          
          .contract-page {
            max-width: 900px;
            margin: 0 auto;
            background: ${pdfSettings.bgColor};
            padding: 50px;
            border: 3px solid ${pdfSettings.accentColor};
            box-shadow: 0 0 30px rgba(0,0,0,0.1);
          }
          
          .header-section {
            text-align: center;
            border-bottom: 4px double ${pdfSettings.accentColor};
            padding-bottom: 30px;
            margin-bottom: 40px;
          }
          
          .company-logo {
            width: 140px;
            height: 140px;
            margin: 0 auto 20px;
            border: 4px solid ${pdfSettings.accentColor};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, ${pdfSettings.accentColor}22 0%, ${pdfSettings.accentColor}44 100%);
            font-size: 36px;
            font-weight: 900;
            color: ${pdfSettings.accentColor};
          }
          
          .company-title {
            font-size: 32px;
            font-weight: 900;
            color: ${pdfSettings.accentColor};
            margin: 15px 0;
            letter-spacing: 1px;
          }
          
          .company-subtitle {
            font-size: 16px;
            color: ${pdfSettings.textColor};
            opacity: 0.7;
            margin: 8px 0;
          }
          
          .header-info {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            font-size: 14px;
            color: ${pdfSettings.textColor};
            opacity: 0.8;
          }
          
          .contract-title {
            text-align: center;
            font-size: 48px;
            font-weight: 900;
            color: ${pdfSettings.accentColor};
            margin: 40px 0;
            padding: 25px;
            background: linear-gradient(135deg, ${pdfSettings.accentColor}11 0%, ${pdfSettings.accentColor}22 100%);
            border: 2px solid ${pdfSettings.accentColor};
            border-radius: 15px;
            text-transform: uppercase;
            letter-spacing: 3px;
          }
          
          .intro-text {
            text-align: center;
            font-size: 18px;
            line-height: 2.2;
            margin: 35px 0;
            padding: 30px;
            background: ${pdfSettings.accentColor}08;
            border-right: 6px solid ${pdfSettings.accentColor};
            border-radius: 10px;
            font-weight: 500;
          }
          
          .contract-section {
            margin: 35px 0;
            padding: 30px;
            border: 2px solid ${pdfSettings.textColor}22;
            border-radius: 12px;
            background: ${pdfSettings.bgColor === '#ffffff' ? '#fafafa' : pdfSettings.textColor}11;
          }
          
          .section-title {
            font-size: 24px;
            font-weight: 800;
            color: ${pdfSettings.accentColor};
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 3px solid ${pdfSettings.accentColor};
            text-align: center;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 20px 0;
          }
          
          .info-item {
            padding: 18px;
            background: ${pdfSettings.bgColor === '#ffffff' ? '#ffffff' : pdfSettings.textColor}08;
            border: 2px solid ${pdfSettings.textColor}11;
            border-radius: 10px;
          }
          
          .info-label {
            font-size: 15px;
            color: ${pdfSettings.textColor};
            opacity: 0.7;
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .info-value {
            font-size: 18px;
            color: ${pdfSettings.textColor};
            font-weight: 700;
            padding: 10px 15px;
            background: ${pdfSettings.accentColor}15;
            border-bottom: 3px solid ${pdfSettings.accentColor};
            border-radius: 6px;
            text-align: center;
          }
          
          .financial-box {
            background: linear-gradient(135deg, ${pdfSettings.accentColor}15 0%, ${pdfSettings.accentColor}25 100%);
            padding: 35px;
            border-radius: 15px;
            border: 3px solid ${pdfSettings.accentColor};
            margin: 35px 0;
          }
          
          .financial-row {
            display: flex;
            justify-content: space-between;
            padding: 18px 25px;
            margin: 12px 0;
            background: ${pdfSettings.bgColor === '#ffffff' ? '#ffffff' : pdfSettings.textColor}11;
            border-radius: 10px;
            font-size: 18px;
            font-weight: 600;
            border: 2px solid ${pdfSettings.textColor}11;
          }
          
          .financial-row.highlight {
            background: ${pdfSettings.accentColor};
            color: white;
            font-size: 22px;
            font-weight: 900;
            border: none;
            box-shadow: 0 4px 15px ${pdfSettings.accentColor}66;
          }
          
          .parties-section {
            margin: 40px 0;
            padding: 30px;
            background: ${pdfSettings.accentColor}08;
            border-radius: 12px;
          }
          
          .party-box {
            padding: 20px 25px;
            margin: 15px 0;
            background: ${pdfSettings.bgColor === '#ffffff' ? '#ffffff' : pdfSettings.textColor}11;
            border-right: 6px solid ${pdfSettings.accentColor};
            border-radius: 8px;
            font-size: 18px;
            font-weight: 600;
          }
          
          .terms-section {
            margin: 40px 0;
            padding: 30px;
            background: #fff3cd;
            border: 3px solid #ffc107;
            border-radius: 12px;
          }
          
          .terms-section h3 {
            color: #f57c00;
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: 800;
          }
          
          .terms-section p {
            margin: 15px 0;
            padding: 15px 20px;
            background: white;
            border-radius: 8px;
            font-size: 16px;
            line-height: 2;
            border-right: 4px solid #ffc107;
          }
          
          .cancellation-section {
            margin: 40px 0;
            padding: 30px;
            background: #ffebee;
            border: 3px solid #ef5350;
            border-radius: 12px;
          }
          
          .cancellation-section h3 {
            color: #d32f2f;
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: 800;
          }
          
          .cancellation-section p {
            font-size: 17px;
            font-weight: 600;
            color: #c62828;
            line-height: 2;
          }
          
          .signatures-section {
            margin-top: 60px;
            padding-top: 40px;
            border-top: 4px double ${pdfSettings.accentColor};
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
          }
          
          .signature-box {
            text-align: center;
          }
          
          .signature-title {
            font-size: 20px;
            font-weight: 800;
            color: ${pdfSettings.textColor};
            margin-bottom: 50px;
          }
          
          .signature-line {
            width: 100%;
            height: 3px;
            background: ${pdfSettings.textColor};
            margin: 60px 0 15px;
          }
          
          .signature-name {
            font-size: 16px;
            color: ${pdfSettings.textColor};
            opacity: 0.7;
            font-weight: 600;
          }
          
          .contract-footer {
            margin-top: 50px;
            text-align: center;
            padding: 25px;
            background: ${pdfSettings.accentColor}11;
            border-radius: 10px;
            font-size: 14px;
            color: ${pdfSettings.textColor};
            opacity: 0.8;
          }
          
          @media print {
            body {
              padding: 0;
              background: white;
            }
            .contract-page {
              box-shadow: none;
              page-break-inside: avoid;
            }
            .no-print {
              display: none !important;
            }
          }
          
          .print-btn {
            padding: 15px 40px;
            margin: 30px 10px;
            border: none;
            border-radius: 10px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
          }
          
          .btn-print {
            background: ${pdfSettings.accentColor};
            color: white;
          }
          
          .btn-print:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px ${pdfSettings.accentColor}66;
          }
        </style>
      </head>
      <body>
        <div class="contract-page">
          <div class="header-section">
            <div class="company-logo">جاء</div>
            <h1 class="company-title">مؤسسة جاء للاحتفالات والمناسبات</h1>
            <p class="company-subtitle">بالتعاون مع نوفتيل العنود</p>
            <div class="header-info">
              <div>📋 السجل التجاري: 1010765704</div>
              <div>📱 واتساب: 0501854427</div>
              <div>📷 Instagram: Guapo_catering</div>
            </div>
          </div>

          <h1 class="contract-title">⚖️ العـــقــــد ⚖️</h1>

          <div class="intro-text">
            <p><strong>بعد إقرار كل من الطرفين بأهليته المعتبرة شرعاً وقانوناً للتعاقد</strong></p>
            <p><strong>فقد اتفق الطرفان على ما يلي:</strong></p>
          </div>

          <div class="contract-section">
            <h3 class="section-title">📋 معلومات العميل والحفل</h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">للمكرم/ة:</div>
                <div class="info-value">${formData.clientName || '_______________'}</div>
              </div>
              <div class="info-item">
                <div class="info-label">رقم الهوية:</div>
                <div class="info-value">${formData.identityNumber || '_______________'}</div>
              </div>
              <div class="info-item">
                <div class="info-label">لإقامة حفل:</div>
                <div class="info-value">${formData.eventType}</div>
              </div>
              <div class="info-item">
                <div class="info-label">تاريخ الحفل:</div>
                <div class="info-value">${dateText}</div>
              </div>
            </div>
            <p style="text-align: center; margin-top: 25px; font-size: 17px; font-weight: 600; padding: 20px; background: ${pdfSettings.accentColor}15; border-radius: 10px;">
              المقام في برج العنود - فندق نوفوتيل<br/>
              بالعرض المرفق أدناه بحيث توجد به كافة التفاصيل المطلوبة
            </p>
          </div>

          <div class="financial-box">
            <h3 class="section-title">💰 التفاصيل المالية</h3>
            <div class="financial-row">
              <span>المبلغ الكامل:</span>
              <span>${formData.totalAmount || '0'} ريال سعودي</span>
            </div>
            <div class="financial-row">
              <span>عدد الضيوف:</span>
              <span>${formData.guestCount || '0'} ضيف</span>
            </div>
            <div class="financial-row">
              <span>العربون المدفوع:</span>
              <span>${formData.deposit || '0'} ريال سعودي</span>
            </div>
            <div class="financial-row">
              <span>المبلغ المتبقي:</span>
              <span>${remaining.toFixed(2)} ريال سعودي</span>
            </div>
            <div class="financial-row highlight">
              <span>🍽️ سعر الشخص الواحد (شامل العشاء):</span>
              <span>${pricePerPerson} ريال سعودي</span>
            </div>
          </div>

          <div class="parties-section">
            <h3 class="section-title">👥 أطراف العقد</h3>
            <div class="party-box">
              <strong style="color: ${pdfSettings.accentColor};">الطرف الأول (المؤسسة):</strong> مؤسسة جاء للاحتفالات والمناسبات
            </div>
            <div class="party-box">
              <strong style="color: ${pdfSettings.accentColor};">الطرف الثاني (العميل):</strong> ${formData.clientName || '_______________'}
            </div>
            <div class="info-grid" style="margin-top: 20px;">
              <div class="info-item">
                <div class="info-label">📞 رقم الطرف الثاني:</div>
                <div class="info-value">${phoneNumber || '_______________'}</div>
              </div>
              <div class="info-item">
                <div class="info-label">📱 رقم بديل:</div>
                <div class="info-value">${altPhoneNumber || '_______________'}</div>
              </div>
            </div>
          </div>

          <div class="terms-section">
            <h3>📜 شروط العقد والالتزامات</h3>
            <p><strong>١.</strong> يلتزم الطرف الأول (مؤسسة جاء) بتوفير جميع الخدمات المتفق عليها في العرض المرفق بهذا العقد.</p>
            <p><strong>٢.</strong> يلتزم الطرف الثاني (العميل) بسداد المبلغ المتبقي قبل موعد الحفل بـ 48 ساعة على الأقل.</p>
            <p><strong>٣.</strong> يحق للطرف الأول إجراء تعديلات طفيفة على الترتيبات بما يحقق مصلحة الحفل دون الإخلال بالمتفق عليه.</p>
            <p><strong>٤.</strong> يتحمل الطرف الثاني مسؤولية أي أضرار تحدث للمكان أو المعدات نتيجة سوء الاستخدام.</p>
            <p><strong>٥.</strong> يجب إخطار الطرف الأول بأي تغييرات في عدد الضيوف قبل 72 ساعة من موعد الحفل.</p>
          </div>

          <div class="cancellation-section">
            <h3>⚠️ سياسة الإلغاء والتعديل</h3>
            <p>• في حالة إلغاء العقد من قبل أي من الطرفين، لا يحق لأي منهما المطالبة بتعويضات.</p>
            <p>• العربون المدفوع غير قابل للاسترداد في حالة الإلغاء.</p>
            <p>• يمكن تعديل موعد الحفل لمرة واحدة فقط بالتنسيق المسبق مع الطرف الأول.</p>
          </div>

          <div class="signatures-section">
            <div class="signature-box">
              <div class="signature-title">توقيع الطرف الأول</div>
              <div class="signature-line"></div>
              <div class="signature-name">مؤسسة جاء للاحتفالات</div>
              <div class="signature-name" style="margin-top: 10px; font-size: 14px;">التاريخ: ________________</div>
            </div>
            <div class="signature-box">
              <div class="signature-title">توقيع الطرف الثاني</div>
              <div class="signature-line"></div>
              <div class="signature-name">${formData.clientName || 'العميل'}</div>
              <div class="signature-name" style="margin-top: 10px; font-size: 14px;">التاريخ: ________________</div>
            </div>
          </div>

          <div class="contract-footer">
            <p>هذا العقد صادر بتاريخ: ${new Date().toLocaleDateString('ar-SA')}</p>
            <p style="margin-top: 10px;">© 2025 مؤسسة جاء للاحتفالات والمناسبات - جميع الحقوق محفوظة</p>
          </div>

          <div style="text-align: center; margin-top: 40px;" class="no-print">
            <button class="print-btn btn-print" onclick="window.print()">🖨️ طباعة / حفظ PDF</button>
          </div>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(contractContent);
    printWindow.document.close();
  };

  const sendWhatsApp = () => {
    const message = `🎉 *عقد جديد - مؤسسة جاء للاحتفالات* 🎉

👤 *العميل:* ${formData.clientName}
🆔 *رقم الهوية:* ${formData.identityNumber}
💍 *نوع الحفل:* ${formData.eventType}
📅 *التاريخ:* ${formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate}

💰 *التفاصيل المالية:*
━━━━━━━━━━━━━━
• المبلغ الكامل: ${formData.totalAmount} ريال
• عدد الضيوف: ${formData.guestCount}
• العربون: ${formData.deposit} ريال
• المتبقي: ${calculateRemaining()} ريال
• سعر الشخص: ${calculatePricePerPerson()} ريال

📞 *أرقام التواصل:*
• رقم العميل: ${phoneNumber}
• رقم بديل: ${altPhoneNumber}

✨ _مؤسسة جاء للاحتفالات والمناسبات_`;

    const whatsappUrl = `https://wa.me/966501854427?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const bgClass = darkMode 
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
    : 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50';
  
  const cardBg = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-800';
  const labelColor = darkMode ? 'text-gray-300' : 'text-gray-700';
  const inputBg = darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900';
  const sectionBg = darkMode ? 'bg-gray-700/50' : 'bg-gradient-to-r';

  return (
    <div className={`min-h-screen ${bgClass} p-3 sm:p-6 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`${cardBg} rounded-2xl shadow-2xl p-4 sm:p-8 mb-6 border-t-4 border-emerald-500`}>
          <div className="text-center">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setShowSaved(!showSaved)}
                className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
                title="العقود المحفوظة"
              >
                <FileText size={24} className={darkMode ? 'text-emerald-400' : 'text-emerald-600'} />
              </button>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCustomization(!showCustomization)}
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
                  title="تخصيص الألوان"
                >
                  <Palette size={24} className={darkMode ? 'text-emerald-400' : 'text-emerald-600'} />
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
                  title={darkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
                >
                  {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
                </button>
              </div>
            </div>

            <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                جاء
              </div>
            </div>
            {/* <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${textColor} mb-2`}>مولد العقود الاحترافي</h1> */}
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>مؤسسة جاء للاحتفالات والمناسبات</p>
            <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-3`}>
              <p>📱 واتساب: 0501854427</p>
              <p>📷 Instagram: Guapo_catering</p>
              <p className="hidden sm:block">📋 السجل التجاري: 1010765704</p>
            </div>
          </div>
        </div>

        {/* Customization Panel */}
        {showCustomization && (
          <div className={`${cardBg} rounded-2xl shadow-xl p-4 sm:p-6 mb-6`}>
            <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 text-center`}>🎨 تخصيص ألوان العقد</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" dir="rtl">
              <div>
                <label className={`block ${labelColor} font-semibold mb-2`}>لون الخلفية</label>
                <input
                  type="color"
                  value={pdfSettings.bgColor}
                  onChange={(e) => setPdfSettings({...pdfSettings, bgColor: e.target.value})}
                  className="w-full h-12 rounded-lg cursor-pointer border-2"
                />
              </div>
              <div>
                <label className={`block ${labelColor} font-semibold mb-2`}>لون النص</label>
                <input
                  type="color"
                  value={pdfSettings.textColor}
                  onChange={(e) => setPdfSettings({...pdfSettings, textColor: e.target.value})}
                  className="w-full h-12 rounded-lg cursor-pointer border-2"
                />
              </div>
              <div>
                <label className={`block ${labelColor} font-semibold mb-2`}>اللون الأساسي</label>
                <input
                  type="color"
                  value={pdfSettings.accentColor}
                  onChange={(e) => setPdfSettings({...pdfSettings, accentColor: e.target.value})}
                  className="w-full h-12 rounded-lg cursor-pointer border-2"
                />
              </div>
            </div>
          </div>
        )}

        {/* Saved Contracts */}
        {showSaved && (
          <div className={`${cardBg} rounded-2xl shadow-xl p-4 sm:p-6 mb-6`}>
            <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 text-center`}>📄 العقود المحفوظة</h2>
            {savedContracts.length === 0 ? (
              <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>لا توجد عقود محفوظة</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {savedContracts.map((contract) => (
                  <div key={contract.id} className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`} dir="rtl">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className={`font-bold ${textColor}`}>{contract.clientName}</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {new Date(contract.date).toLocaleDateString('ar-SA')}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => loadContract(contract)}
                          className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all"
                          title="تحميل"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => deleteContract(contract.id)}
                          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                          title="حذف"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} grid grid-cols-2 gap-2`}>
                      <p>حفل: {contract.eventType}</p>
                      <p>المبلغ: {contract.totalAmount} ريال</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className={`${cardBg} rounded-2xl shadow-2xl p-4 sm:p-8`}>
          <div className="space-y-6" dir="rtl">
            {/* Client Information */}
            <div className={`${sectionBg} ${darkMode ? '' : 'from-blue-50 to-cyan-50'} p-4 sm:p-6 rounded-xl border ${darkMode ? 'border-blue-900' : 'border-blue-200'}`}>
              <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
                <span className="text-blue-600">👤</span>
                معلومات العميل
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>اسم العميل</label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
                    placeholder="أدخل اسم العميل"
                  />
                </div>

                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>رقم الهوية</label>
                  <input
                    type="text"
                    name="identityNumber"
                    value={formData.identityNumber}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
                    placeholder="أدخل رقم الهوية"
                  />
                </div>

                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>رقم الطرف الثاني</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
                    placeholder="05xxxxxxxx"
                  />
                </div>

                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>رقم آخر</label>
                  <input
                    type="tel"
                    value={altPhoneNumber}
                    onChange={(e) => setAltPhoneNumber(e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
                    placeholder="05xxxxxxxx"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className={`${sectionBg} ${darkMode ? '' : 'from-purple-50 to-pink-50'} p-4 sm:p-6 rounded-xl border ${darkMode ? 'border-purple-900' : 'border-purple-200'}`}>
              <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
                <span className="text-purple-600">🎉</span>
                تفاصيل الحفل
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>نوع الحفل</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
                  >
                    <option value="زواج">💍 زواج</option>
                    <option value="ملكة">👑 ملكة</option>
                    <option value="خطبة">💐 خطبة</option>
                    <option value="استقبال">🎊 استقبال</option>
                    <option value="حفل خاص">✨ حفل خاص</option>
                  </select>
                </div>

                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>تاريخ الحفل</label>
                  <div className="space-y-2">
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      disabled={formData.useLaterDate}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg} disabled:opacity-50 disabled:cursor-not-allowed`}
                    />
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="useLaterDate"
                        checked={formData.useLaterDate}
                        onChange={handleInputChange}
                        className="ml-2 w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                      />
                      <span className={`text-sm ${labelColor} font-medium`}>يتم تحديده لاحقاً</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div className={`${sectionBg} ${darkMode ? '' : 'from-amber-50 to-yellow-50'} p-4 sm:p-6 rounded-xl border ${darkMode ? 'border-amber-900' : 'border-amber-200'}`}>
              <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
                <span className="text-amber-600">💰</span>
                التفاصيل المالية
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>المبلغ الكامل (ريال)</label>
                  <input
                    type="number"
                    name="totalAmount"
                    value={formData.totalAmount}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>عدد الضيوف</label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>العربون (ريال)</label>
                  <input
                    type="number"
                    name="deposit"
                    value={formData.deposit}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className={`block ${labelColor} font-semibold mb-2`}>المبلغ المتبقي (ريال)</label>
                  <input
                    type="text"
                    value={calculateRemaining().toFixed(2)}
                    disabled
                    className={`w-full px-4 py-3 border-2 border-emerald-300 rounded-lg ${darkMode ? 'bg-emerald-900 text-emerald-300' : 'bg-emerald-50 text-emerald-700'} font-bold text-lg`}
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className={`block ${labelColor} font-semibold mb-2`}>سعر الشخص (شامل العشاء) - ريال</label>
                  <input
                    type="text"
                    value={calculatePricePerPerson()}
                    disabled
                    className={`w-full px-4 py-3 border-2 border-emerald-300 rounded-lg ${darkMode ? 'bg-emerald-900 text-emerald-300' : 'bg-emerald-50 text-emerald-700'} font-bold text-xl text-center`}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t-2 border-gray-200">
              <button
                onClick={saveContract}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Save size={24} />
                حفظ العقد
              </button>

              <button
                onClick={generatePDF}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download size={24} />
                تحميل العقد (PDF)
              </button>

              <button
                onClick={sendWhatsApp}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
              >
                <Send size={24} />
                إرسال عبر واتساب
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
          <p>© 2025 مؤسسة جاء للاحتفالات والمناسبات - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </div>
  );
}