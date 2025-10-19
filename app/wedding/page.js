// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { Download, Send, Moon, Sun, Eye, Trash2, Palette, FileText, Save, Mail, FileCheck, Landmark } from 'lucide-react';

// // export default function ContractGenerator() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [showCustomization, setShowCustomization] = useState(false);
// //   const [savedContracts, setSavedContracts] = useState([]);
// //   const [showSaved, setShowSaved] = useState(false);
  
// //   const [pdfSettings, setPdfSettings] = useState({
// //     bgColor: '#ffffff',
// //     textColor: '#1f2937',
// //     accentColor: '#10b981',
// //     pdfFontSize: '16px'
// //   });

// //   const [formData, setFormData] = useState({
// //     clientName: '',
// //     identityNumber: '',
// //     eventType: 'زواج',
// //     eventDate: '',
// //     useLaterDate: false,
// //     totalAmount: '',
// //     guestCount: '',
// //     deposit: '',
// //     // NEW: Security Deposit field with default value
// //     securityDeposit: '10000' 
// //   });

// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [altPhoneNumber, setAltPhoneNumber] = useState('');

// //   // --- Static Content (New Conditions) ---

// //   const contractTerms = [
// //     { num: 1, text: 'يلتزم الطرف الأول بتنفيذ جميع ما ذكر في العرض المرفق بعد التأكيد عليه من كلا الطرفين بعد مناقشة جميع التفاصيل بالإضافة إلى الخدمات المقدمة من قبل الفندق وهي (حجز القاعة المساء، بوفيه العروس، جناح مجاني مخصص للعروس، حارس أمن، عاملة عبايات).' },
// //     { num: 2, text: 'يعتبر الطرف الثاني مسؤول عن فقدان أي مقتنيات أو تلفيات أو تلفيات وملحقاتها خلال الحفلة من قبل العميل أو ضيوفه والحضور.' },
// //     { num: 3, text: 'أي ضرر أو تلف أو فقدان أي من القطع المقدمة من قبل شركة التنسيق أو أي تلفيات قد تلحق بالقاعة وملحقاتها من قبل العميل أو ضيوفه والحضور يدفع قيمتها الطرف الثاني ويتحمل مسؤوليتها كاملة.' },
// //     { num: 4, text: 'لا يتم اعتماد الحجز إلا بدفع عربون بمبلغ 15000 ألف ريال سعودي بمجرد توقيع هذه الاتفاقية وهو غير قابل للإعادة لأي سبب من الأسباب.' },
// //     { num: 5, text: 'إكمال باقي المبلغ المتبقي قبل المناسبة بأسبوع ولا يتم خروج سيارات النقل أو فتح القاعة إلا بعد سداد المبلغ.' },
// //     { num: 6, text: 'في حال حضور عدد زائد عن المتفق عليه في هذا العقد فعليه دفع أي زيادة حسب سعر المستحق للمبلغ.' },
// //     { num: 7, text: 'يلتزم الطرف الثاني بدفع 10000 ريال سعودي تأمين قبل الحفل بأسبوع وفي حال عدم الدفع يحق للطرف الأول عدم تسليم القاعة.' },
// //     { num: 8, text: 'في حال زيادة عدد الحضور عن العدد المتفق عليه بالعقد أو حدوث أي تلفيات أو ضرر أو فقدان في القاعة يحق للطرف الأول خصم المبلغ المطلوب من التأمين وإذا زاد المبلغ عن التأمين يدفع ليلة الزواج ويحق للطرف الأول الامتناع عن فتح باب قاعة العشاء إلا في حالة دفع المبلغ المطلوب.' },
// //   ];

// //   const contractTermsContinued = [
// //     { num: 9, text: 'في حالة إقرار الطرف الأول بعدم وجود تلفيات في القاعة أو زيادة الأشخاص سيتم إعادة مبلغ التأمين بنفس الطريقة المدفوعة خلال 14 يوم من تاريخ المناسبة.' },
// //     { num: 10, text: 'في حال قام الطرف الثاني بالتعاقد مع طرف ثالث لتقديم أي نوع من الخدمات دون تنسيق مع الطرف الأول وتوقيع الطرف الثاني على العقد تكون المسؤولية كاملة عليه دون أدنى مسؤولية على الطرف الأول، ويتعهد الطرف الثاني على العقد مقام التعهد الخطي بذلك.' },
// //     { num: 11, text: 'في حال إحضار الطرف الثاني أي نوع من المأكولات أو الحلويات لإضافتها إلى البوفيه أو أي الطلبات أو التقديمات من الخارج تكون المسؤولية كاملة عليه دون أدنى مسؤولية على الطرف الأول وتوقيع الطرف الثاني على العقد مقام التعهد الخطي بذلك.' },
// //     { num: 12, text: 'يجب التقيد بأحكام القانون واللوائح وأعراف الأنظمة المعمول بها في المملكة العربية السعودية بخصوص الحفلات والمناسبات وفي حال مخالفتها فإن الطرف الأول لن يتحمل أي مسؤولية مدنية أو جنائية أو أي مساءلة من قبل الجهات الرسمية وتبقى المسؤولية كاملة على الطرف الثاني.' },
// //     { num: 13, text: 'يطبق بشأن ما ورد بهذا العقد الأنظمة المعمول بها في المملكة العربية السعودية.' },
// //     { num: 14, text: 'يحق للمؤسسة تعديل الرسوم والضرائب بناءً على نظام المملكة العربية السعودية.' },
// //     { num: 15, text: 'يحظر على الطرف الثاني استخدام المواد والألعاب النارية والمشتعلة بكافة أنواعها داخل القاعة وفي نطاق مبنى الفندق كاملاً.' },
// //     { num: 16, text: 'هذا العقد إلكتروني يتم توثيقه بإرساله عن طريق الإيميل الخاص بالشركة بعد تحويل العربون.' },
// //   ];

// //   const cancellationTerms = [
// //     { num: 1, text: 'في حالة إلغاء الحفل من قبل الطرف الثاني لا يحق استرداد المبلغ المدفوع مقدماً.' },
// //     { num: 2, text: 'في حالة الطلاق يجب على الطرف الثاني إحضار صك الطلاق خلال أسبوع من الطلاق ويُسترد المبلغ المدفوع كامل خلال 14 يوم من تاريخ الإلغاء.' },
// //     { num: 3, text: 'في حالة الوفاة من الدرجة الأولى يجب على الطرف الثاني إحضار شهادة الوفاة خلال أسبوع من الوفاة ويُسترد 50٪ من المبلغ المدفوع خلال 14 يوم من تاريخ الإلغاء.' },
// //   ];

// //   // --- End Static Content ---


// //   useEffect(() => {
// //     const saved = sessionStorage.getItem('savedContracts');
// //     const settings = sessionStorage.getItem('pdfSettings');
// //     const theme = sessionStorage.getItem('darkMode');
    
// //     if (saved) setSavedContracts(JSON.parse(saved));
// //     if (settings) {
// //         const parsedSettings = JSON.parse(settings);
// //         setPdfSettings({ ...parsedSettings, pdfFontSize: parsedSettings.pdfFontSize || '16px' });
// //     }
// //     if (theme) setDarkMode(JSON.parse(theme));
// //   }, []);

// //   useEffect(() => {
// //     sessionStorage.setItem('pdfSettings', JSON.stringify(pdfSettings));
// //   }, [pdfSettings]);

// //   useEffect(() => {
// //     sessionStorage.setItem('darkMode', JSON.stringify(darkMode));
// //   }, [darkMode]);

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

// //   const saveContract = () => {
// //     const contract = {
// //       id: Date.now(),
// //       date: new Date().toISOString(),
// //       ...formData,
// //       phoneNumber,
// //       altPhoneNumber,
// //       remaining: calculateRemaining(),
// //       pricePerPerson: calculatePricePerPerson()
// //     };
    
// //     const updated = [contract, ...savedContracts];
// //     setSavedContracts(updated);
// //     sessionStorage.setItem('savedContracts', JSON.stringify(updated));
// //     alert('تم حفظ العقد بنجاح! ✅');
// //   };

// //   const loadContract = (contract) => {
// //     setFormData({
// //       clientName: contract.clientName,
// //       identityNumber: contract.identityNumber,
// //       eventType: contract.eventType,
// //       eventDate: contract.eventDate,
// //       useLaterDate: contract.useLaterDate,
// //       totalAmount: contract.totalAmount,
// //       guestCount: contract.guestCount,
// //       deposit: contract.deposit,
// //       securityDeposit: contract.securityDeposit || '10000' // Ensure load handles the new field
// //     });
// //     setPhoneNumber(contract.phoneNumber);
// //     setAltPhoneNumber(contract.altPhoneNumber);
// //     setShowSaved(false);
// //     alert('تم تحميل العقد! 📄');
// //   };

// //   const deleteContract = (id) => {
// //     const updated = savedContracts.filter(c => c.id !== id);
// //     setSavedContracts(updated);
// //     sessionStorage.setItem('savedContracts', JSON.stringify(updated));
// //   };

// //   // --- REGULAR (COLORED) PDF GENERATOR ---
// //   const generatePDF = () => {
// //     const remaining = calculateRemaining();
// //     const pricePerPerson = calculatePricePerPerson();
// //     const dateText = formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate;

// //     // Helper function to generate list items for the terms
// //     const renderTerms = (terms) => terms.map(term => `<p><strong>${term.num}.</strong> ${term.text}</p>`).join('');

// //     const contractContent = `
// //       <!DOCTYPE html>
// //       <html dir="rtl" lang="ar">
// //       <head>
// //         <meta charset="UTF-8">
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //         <title>عقد احتفال - ${formData.clientName}</title>
// //         <style>
// //           @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap');
          
// //           * {
// //             margin: 0;
// //             padding: 0;
// //             box-sizing: border-box;
// //           }
          
// //           body {
// //             font-family: 'Tajawal', 'Traditional Arabic', 'Arial', sans-serif;
// //             line-height: 1.5;
// //             font-size: ${pdfSettings.pdfFontSize};
// //             padding: 30px;
// //             background: ${pdfSettings.bgColor};
// //             color: ${pdfSettings.textColor};
// //           }
          
// //           .contract-page {
// //             max-width: 900px;
// //             margin: 0 auto;
// //             background: ${pdfSettings.bgColor};
// //             padding: 40px;
// //             border: 3px solid ${pdfSettings.accentColor};
// //             box-shadow: 0 0 20px rgba(0,0,0,0.1);
// //           }
          
// //           .header-section {
// //             text-align: center;
// //             border-bottom: 3px double ${pdfSettings.accentColor};
// //             padding-bottom: 20px;
// //             margin-bottom: 30px;
// //           }
          
// //           .company-logo {
// //             width: 120px;
// //             height: 120px;
// //             margin: 0 auto 15px;
// //             // border: 4px solid ${pdfSettings.accentColor};
// //             // border-radius: 50%;
// //             display: flex;
// //             align-items: center;
// //             justify-content: center;
// //             // background: linear-gradient(135deg, ${pdfSettings.accentColor}22 0%, ${pdfSettings.accentColor}44 100%);
// //             font-size: 30px;
// //             font-weight: 900;
// //             // color: ${pdfSettings.accentColor};
// //           }
          
// //           .company-title {
// //             font-size: 28px;
// //             font-weight: 900;
// //             color: ${pdfSettings.accentColor};
// //             margin: 10px 0;
// //           }
          
// //           .company-subtitle {
// //             font-size: 15px;
// //             color: ${pdfSettings.textColor};
// //             opacity: 0.7;
// //             margin: 5px 0;
// //           }
          
// //           .header-info {
// //             display: flex;
// //             justify-content: space-between;
// //             margin-top: 15px;
// //             font-size: 13px;
// //             color: ${pdfSettings.textColor};
// //             opacity: 0.8;
// //           }
          
// //           .contract-title {
// //             text-align: center;
// //             font-size: 40px;
// //             font-weight: 900;
// //             color: ${pdfSettings.accentColor};
// //             margin: 30px 0;
// //             padding: 20px;
// //             background: linear-gradient(135deg, ${pdfSettings.accentColor}11 0%, ${pdfSettings.accentColor}22 100%);
// //             border: 2px solid ${pdfSettings.accentColor};
// //             border-radius: 15px;
// //             text-transform: uppercase;
// //           }
          
// //           .intro-text {
// //             text-align: center;
// //             font-size: 1.1em;
// //             line-height: 1.8;
// //             margin: 25px 0;
// //             padding: 20px;
// //             background: ${pdfSettings.accentColor}08;
// //             border-right: 5px solid ${pdfSettings.accentColor};
// //             border-radius: 10px;
// //             font-weight: 500;
// //           }
          
// //           .intro-text p {
// //             margin: 5px 0;
// //           }
          
// //           .contract-section {
// //             margin: 25px 0;
// //             padding: 20px;
// //             border: 1px solid ${pdfSettings.textColor}22;
// //             border-radius: 10px;
// //             background: ${pdfSettings.bgColor === '#ffffff' ? '#fafafa' : pdfSettings.textColor}11;
// //              /* Ensure section doesn't break poorly */
// //             page-break-inside: avoid;
// //           }
          
// //           .section-title {
// //             font-size: 22px;
// //             font-weight: 800;
// //             color: ${pdfSettings.accentColor};
// //             margin-bottom: 20px;
// //             padding-bottom: 10px;
// //             border-bottom: 2px solid ${pdfSettings.accentColor};
// //             text-align: center;
// //           }
          
// //           .info-grid {
// //             display: grid;
// //             grid-template-columns: repeat(2, 1fr);
// //             gap: 15px;
// //             margin: 15px 0;
// //           }
          
// //           .info-item {
// //             padding: 15px;
// //             background: ${pdfSettings.bgColor === '#ffffff' ? '#ffffff' : pdfSettings.textColor}08;
// //             border: 1px solid ${pdfSettings.textColor}11;
// //             border-radius: 8px;
// //           }
          
// //           .info-label {
// //             font-size: 0.9em;
// //             color: ${pdfSettings.textColor};
// //             opacity: 0.7;
// //             font-weight: 600;
// //             margin-bottom: 5px;
// //           }
          
// //           .info-value {
// //             font-size: 1.05em;
// //             color: ${pdfSettings.textColor};
// //             font-weight: 700;
// //             padding: 8px 10px;
// //             background: ${pdfSettings.accentColor}15;
// //             border-bottom: 2px solid ${pdfSettings.accentColor};
// //             border-radius: 6px;
// //             text-align: center;
// //           }
          
// //           .financial-box {
// //             background: linear-gradient(135deg, ${pdfSettings.accentColor}15 0%, ${pdfSettings.accentColor}25 100%);
// //             padding: 25px;
// //             border-radius: 12px;
// //             border: 2px solid ${pdfSettings.accentColor};
// //             margin: 25px 0;
// //             page-break-inside: avoid;
// //           }
          
// //           .financial-row {
// //             display: flex;
// //             justify-content: space-between;
// //             padding: 12px 20px;
// //             margin: 8px 0;
// //             background: ${pdfSettings.bgColor === '#ffffff' ? '#ffffff' : pdfSettings.textColor}11;
// //             border-radius: 8px;
// //             font-size: 1em;
// //             font-weight: 600;
// //             border: 1px solid ${pdfSettings.textColor}11;
// //           }
          
// //           .financial-row.highlight {
// //             background: ${pdfSettings.accentColor};
// //             color: white;
// //             font-size: 1.1em;
// //             font-weight: 900;
// //             border: none;
// //             box-shadow: 0 3px 10px ${pdfSettings.accentColor}66;
// //           }
          
// //           .parties-section {
// //             margin: 30px 0;
// //             padding: 20px;
// //             background: ${pdfSettings.accentColor}08;
// //             border-radius: 10px;
// //             page-break-inside: avoid;
// //           }
          
// //           .party-box {
// //             padding: 15px 20px;
// //             margin: 10px 0;
// //             background: ${pdfSettings.bgColor === '#ffffff' ? '#ffffff' : pdfSettings.textColor}11;
// //             border-right: 5px solid ${pdfSettings.accentColor};
// //             border-radius: 8px;
// //             font-size: 1em;
// //             font-weight: 600;
// //           }
          
// //           .terms-section {
// //             margin: 30px 0;
// //             padding: 25px;
// //             border-radius: 10px;
// //             background: #fff3cd;
// //             border: 2px solid #ffc107;
// //           }
          
// //           .terms-section h3 {
// //             color: #f57c00;
// //             font-size: 20px;
// //             margin-bottom: 15px;
// //             font-weight: 800;
// //           }
          
// //           .terms-section p {
// //             margin: 10px 0;
// //             padding: 10px 15px;
// //             background: white;
// //             border-radius: 8px;
// //             font-size: 0.95em;
// //             line-height: 1.7;
// //             border-right: 3px solid #ffc107;
// //             page-break-inside: avoid;
// //             text-align: justify;
// //           }

// //           .terms-section.cancellation {
// //             background: #ffebee;
// //             border: 2px solid #ef5350;
// //             margin-top: 40px;
// //           }
          
// //           .terms-section.cancellation h3 {
// //             color: #d32f2f;
// //           }
          
// //           .terms-section.cancellation p {
// //             background: white;
// //             border-right: 3px solid #ef5350;
// //             font-weight: 600;
// //             color: #4a4a4a;
// //           }
          
// //           .signatures-section {
// //             margin-top: 40px;
// //             padding-top: 30px;
// //             border-top: 3px double ${pdfSettings.accentColor};
// //             display: grid;
// //             grid-template-columns: repeat(2, 1fr);
// //             gap: 40px;
// //             page-break-inside: avoid;
// //           }
          
// //           .signature-box {
// //             text-align: center;
// //           }
          
// //           .signature-title {
// //             font-size: 18px;
// //             font-weight: 800;
// //             color: ${pdfSettings.textColor};
// //             margin-bottom: 40px;
// //           }
          
// //           .signature-line {
// //             width: 100%;
// //             height: 2px;
// //             background: ${pdfSettings.textColor};
// //             margin: 50px 0 10px;
// //           }
          
// //           .signature-name {
// //             font-size: 0.9em;
// //             color: ${pdfSettings.textColor};
// //             opacity: 0.7;
// //             font-weight: 600;
// //           }
          
// //           .contract-footer {
// //             margin-top: 30px;
// //             text-align: center;
// //             padding: 15px;
// //             background: ${pdfSettings.accentColor}11;
// //             border-radius: 8px;
// //             font-size: 0.8em;
// //             color: ${pdfSettings.textColor};
// //             opacity: 0.8;
// //           }
          
// //           @media print {
// //             body {
// //               padding: 0;
// //               background: white;
// //             }
// //             .contract-page {
// //               box-shadow: none;
// //               page-break-inside: avoid;
// //               border: none;
// //             }
// //             .contract-section, .financial-box, .parties-section, .terms-section, .cancellation-section, .signatures-section {
// //                 page-break-inside: avoid !important;
// //             }
// //             .terms-section p {
// //                  page-break-inside: avoid !important;
// //             }
// //             .no-print {
// //               display: none !important;
// //             }
// //           }
          
// //           .print-btn {
// //             padding: 12px 30px;
// //             margin: 20px 10px;
// //             border: none;
// //             border-radius: 8px;
// //             font-size: 1em;
// //             font-weight: 700;
// //             cursor: pointer;
// //             transition: all 0.3s;
// //           }
          
// //           .btn-print {
// //             background: ${pdfSettings.accentColor};
// //             color: white;
// //           }
          
// //           .btn-print:hover {
// //             transform: translateY(-2px);
// //             box-shadow: 0 6px 20px ${pdfSettings.accentColor}66;
// //           }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="contract-page">
// //           <div class="header-section">
// //             <div class="company-logo">
// // <img 
// //   src="https://res.cloudinary.com/djzcvjwuv/image/upload/v1760477941/WhatsApp_Image_2025-10-15_at_12.38.46_AM_xvxabx.jpg" 
// //   alt="شعار المؤسسة" 
// //   style="width:200px;height:200px;object-fit:cover;border-radius:12px;display:block;margin:0 auto;"
// // />


// //             </div>
// //             <h1 class="company-title">مؤسسة جاء للاحتفالات والمناسبات</h1>
// //             <p class="company-subtitle">بالتعاون مع نوفتيل العنود</p>
// //             <div class="header-info">
// //               <div>📋 السجل التجاري: 1010765704</div>
// //               <div>📱 واتساب: 0501854427</div>
// //               <div>📷 Instagram: Guapo_catering</div>
// //             </div>
// //           </div>

// //           <h1 class="contract-title">⚖️ العـــقــــد ⚖️
// //             </h1>
        

// //           <div class="intro-text">
// //           <h6><strong>تتقدم مؤسسة جوابا للمناسبات بالتعاون مع نوفتيل العنود</strong></h6>
// //   <div class="contract-section">
// //             <p><strong>بعد إقرار كل من الطرفين بأهليته المعتبرة شرعاً وقانوناً للتعاقد</strong></p>
// //             </div>
// //             <p><strong>فقد اتفق الطرفان على ما يلي:</strong></p>
// //           </div>

// //           <div class="contract-section">
// //             <h3 class="section-title">📋 معلومات العميل والحفل</h3>
// //             <div class="info-grid">
// //               <div class="info-item">
// //                 <div class="info-label">للمكرم/ة:</div>
// //                 <div class="info-value">${formData.clientName || '_______________'}</div>
// //               </div>
// //               <div class="info-item">
// //                 <div class="info-label">رقم الهوية:</div>
// //                 <div class="info-value">${formData.identityNumber || '_______________'}</div>
// //               </div>
// //               <div class="info-item">
// //                 <div class="info-label">لإقامة حفل:</div>
// //                 <div class="info-value">${formData.eventType}</div>
// //               </div>
// //               <div class="info-item">
// //                 <div class="info-label">تاريخ الحفل:</div>
// //                 <div class="info-value">${dateText}</div>
// //               </div>
// //             </div>
// //             <p style="text-align: center; margin-top: 15px; font-size: 1em; font-weight: 600; padding: 15px; background: ${pdfSettings.accentColor}15; border-radius: 8px;">
// //               المقام في برج العنود - فندق نوفوتيل<br/>
// //               بالعرض المرفق أدناه بحيث توجد به كافة التفاصيل المطلوبة
// //             </p>
// //           </div>

// //           <div class="financial-box">
// //             <h3 class="section-title">💰 التفاصيل المالية</h3>
// //             <div class="financial-row">
// //               <span>المبلغ الكامل:</span>
// //               <span>${formData.totalAmount || '0'} ريال سعودي</span>
// //             </div>
// //             <div class="financial-row">
// //               <span>عدد الضيوف المتفق عليه:</span>
// //               <span>${formData.guestCount || '0'} ضيف</span>
// //             </div>
// //             <div class="financial-row">
// //               <span>العربون المدفوع (غير مسترد):</span>
// //               <span>${formData.deposit || '0'} ريال سعودي</span>
// //             </div>
// //             <div class="financial-row">
// //               <span>مبلغ التأمين المستحق (مسترد):</span>
// //               <span>${formData.securityDeposit || '0'} ريال سعودي</span>
// //             </div>
// //             <div class="financial-row">
// //               <span>المبلغ المتبقي الواجب دفعه:</span>
// //               <span>${remaining.toFixed(2)} ريال سعودي</span>
// //             </div>
// //             <div class="financial-row highlight">
// //               <span>🍽️ سعر الشخص الواحد (شامل العشاء):</span>
// //               <span>${pricePerPerson} ريال سعودي</span>
// //             </div>
// //           </div>

// //           <div class="parties-section">
// //             <h3 class="section-title">👥 أطراف العقد</h3>
// //             <div class="party-box">
// //               <strong style="color: ${pdfSettings.accentColor};">الطرف الأول (المؤسسة):</strong> مؤسسة جاء للاحتفالات والمناسبات
// //             </div>
// //             <div class="party-box">
// //               <strong style="color: ${pdfSettings.accentColor};">الطرف الثاني (العميل):</strong> ${formData.clientName || '_______________'}
// //             </div>
// //             <div class="info-grid" style="margin-top: 15px;">
// //               <div class="info-item">
// //                 <div class="info-label">📞 رقم الطرف الثاني:</div>
// //                 <div class="info-value">${phoneNumber || '_______________'}</div>
// //               </div>
// //               <div class="info-item">
// //                 <div class="info-label">📱 رقم بديل:</div>
// //                 <div class="info-value">${altPhoneNumber || '_______________'}</div>
// //               </div>
// //             </div>
// //           </div>

// //           <div class="terms-section">
// //             <h3>📜 شروط العقد والالتزامات (1-8)</h3>
// //             ${renderTerms(contractTerms)}
// //           </div>

// //           <div class="terms-section" style="margin-top: 20px;">
// //             <h3>📜 شروط العقد والالتزامات (تابع 9-16)</h3>
// //             ${renderTerms(contractTermsContinued)}
// //           </div>

// //           <div class="terms-section cancellation">
// //             <h3>⚠️ إلغاء العقد</h3>
// //             <p>في حالة حدوث أي طوارئ عند الطرف الثاني يتسبب في تأجيل الحفلة أو المناسبة أو إلغائها بصفة نهائية فإن أحكام الفقرات التالية سارية كالآتي:</p>
// //             ${renderTerms(cancellationTerms)}
// //           </div>

// //           <div class="signatures-section">
// //             <div class="signature-box">
// //               <div class="signature-title">توقيع الطرف الأول</div>
// //               <div class="signature-line"></div>
// //               <div class="signature-name">مؤسسة جاء للاحتفالات</div>
// //               <div class="signature-name" style="margin-top: 8px; font-size: 0.9em;">التاريخ: ________________</div>
// //             </div>
// //             <div class="signature-box">
// //               <div class="signature-title">توقيع الطرف الثاني</div>
// //               <div class="signature-line"></div>
// //               <div class="signature-name">${formData.clientName || 'العميل'}</div>
// //               <div class="signature-name" style="margin-top: 8px; font-size: 0.9em;">التاريخ: ________________</div>
// //             </div>
// //           </div>

// //           <div class="contract-footer">
// //             <p>هذا العقد صادر بتاريخ: ${new Date().toLocaleDateString('ar-SA')}</p>
// //             <p style="margin-top: 8px;">© 2025 مؤسسة جاء للاحتفالات والمناسبات - جميع الحقوق محفوظة</p>
// //           </div>

// //           <div style="text-align: center; margin-top: 30px;" class="no-print">
// //             <button class="print-btn btn-print" onclick="window.print()">🖨️ طباعة / حفظ PDF</button>
// //           </div>
// //         </div>
// //       </body>
// //       </html>
// //     `;

// //     const printWindow = window.open('', '_blank');
// //     printWindow.document.write(contractContent);
// //     printWindow.document.close();
// //   };
  
// //   // --- NEW FORMAL (B&W) PDF GENERATOR (IMPROVED) ---
// //   const generateFormalContractPDF = () => {
// //     const remaining = calculateRemaining();
// //     const pricePerPerson = calculatePricePerPerson();
// //     const dateText = formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate;

// //     const renderFormalTerms = (terms) => terms.map(term => `<div class="formal-term-item"><span>${term.num}.</span> ${term.text}</div>`).join('');

// //     const formalContent = `
// //       <!DOCTYPE html>
// //       <html dir="rtl" lang="ar">
// //       <head>
// //         <meta charset="UTF-8">
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //         <title>عقد رسمي - ${formData.clientName}</title>
// //         <style>
// //           @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');
          
// //           * {
// //             margin: 0;
// //             padding: 0;
// //             box-sizing: border-box;
// //           }
          
// //           body {
// //             font-family: 'Tajawal', 'Traditional Arabic', 'Arial', sans-serif;
// //             line-height: 1.6;
// //             font-size: 14px; /* Formal font size */
// //             padding: 20px;
// //             background: white;
// //             color: black;
// //           }
          
// //           .contract-page {
// //             max-width: 800px;
// //             margin: 0 auto;
// //             background: white;
// //             padding: 30px;
// //             border: 1px solid black;
// //             box-shadow: none;
// //           }
          
// //           .header-section {
// //             text-align: center;
// //             border-bottom: 2px solid black;
// //             padding-bottom: 15px;
// //             margin-bottom: 25px;
// //           }
          
// //           /* Placeholder for a formal centered logo */
// //           .logo-placeholder {
// //             width: 100px;
// //             height: 50px;
// //             margin: 0 auto 15px;
// //             border: 1px solid black;
// //             display: flex;
// //             align-items: center;
// //             justify-content: center;
// //             font-size: 12px;
// //             font-weight: 700;
// //             color: black;
// //             background: #f0f0f0;
// //           }

// //           .company-title {
// //             font-size: 20px;
// //             font-weight: 700;
// //             color: black;
// //             margin: 5px 0;
// //           }
          
// //           .company-subtitle {
// //             font-size: 13px;
// //             color: black;
// //             margin: 3px 0;
// //           }
          
// //           .header-info {
// //             display: flex;
// //             justify-content: space-between;
// //             margin-top: 10px;
// //             font-size: 12px;
// //             color: black;
// //           }
          
// //           .contract-title {
// //             text-align: center;
// //             font-size: 28px;
// //             font-weight: 700;
// //             color: black;
// //             margin: 20px 0;
// //             border: 1px solid black;
// //             padding: 10px;
// //             text-transform: uppercase;
// //             background: #f8f8f8;
// //             page-break-inside: avoid;
// //           }
          
// //           .intro-text {
// //             text-align: justify;
// //             font-size: 1em;
// //             margin: 15px 0;
// //             padding: 10px 0;
// //             border-bottom: 1px dashed black;
// //             font-weight: 400;
// //             page-break-inside: avoid;
// //           }
          
// //           .contract-section {
// //             margin: 20px 0;
// //             padding: 15px;
// //             border: 1px solid black;
// //             background: white;
// //             page-break-inside: avoid; /* Formal: Avoid breaking sections */
// //           }
          
// //           .section-title {
// //             font-size: 18px;
// //             font-weight: 700;
// //             color: black;
// //             margin-bottom: 15px;
// //             padding-bottom: 5px;
// //             border-bottom: 1px solid black;
// //             text-align: right;
// //             background: #e0e0e0;
// //             padding: 8px;
// //           }
          
// //           .info-grid {
// //             display: grid;
// //             grid-template-columns: repeat(2, 1fr);
// //             gap: 10px;
// //             margin: 10px 0;
// //           }
          
// //           .info-item {
// //             padding: 8px 10px;
// //             border: 1px solid #ccc;
// //             background: white;
// //           }
          
// //           .info-label {
// //             font-size: 0.9em;
// //             color: black;
// //             font-weight: 700;
// //             margin-bottom: 3px;
// //             opacity: 0.8;
// //           }
          
// //           .info-value {
// //             font-size: 1em;
// //             color: black;
// //             font-weight: 400;
// //             padding: 5px 0;
// //             border-bottom: 1px dashed black;
// //           }
          
// //           .financial-box {
// //             background: #f0f0f0;
// //             padding: 20px;
// //             border: 1px solid black;
// //             margin: 20px 0;
// //             page-break-inside: avoid;
// //           }
          
// //           .financial-row {
// //             display: flex;
// //             justify-content: space-between;
// //             padding: 8px 15px;
// //             margin: 5px 0;
// //             background: white;
// //             font-size: 1em;
// //             font-weight: 400;
// //             border: 1px solid #ccc;
// //           }
          
// //           .financial-row.highlight {
// //             background: black;
// //             color: white;
// //             font-weight: 700;
// //             border: 2px solid black;
// //           }
          
// //           .formal-terms-list {
// //             list-style: none;
// //             padding: 0;
// //             margin: 10px 0;
// //           }

// //           .formal-term-item {
// //             padding: 8px 0;
// //             margin: 8px 0;
// //             font-size: 1em;
// //             line-height: 1.6;
// //             text-align: justify;
// //             border-bottom: 1px dotted #ccc;
// //             page-break-inside: avoid !important; /* Critical for continuous paragraphs */
// //           }
          
// //           .formal-term-item span {
// //             font-weight: 700;
// //             margin-left: 5px;
// //             padding-left: 5px;
// //             border-left: 2px solid black;
// //           }

// //           .cancellation-section {
// //             background: #f8e1e1;
// //             border: 1px solid black;
// //             padding: 15px;
// //             margin-top: 20px;
// //             page-break-inside: avoid;
// //           }

// //           .cancellation-section h3 {
// //              color: black;
// //              font-size: 16px;
// //              font-weight: 700;
// //              margin-bottom: 10px;
// //              border-bottom: 1px dashed black;
// //              padding-bottom: 5px;
// //           }

// //           .signatures-section {
// //             margin-top: 30px;
// //             padding-top: 20px;
// //             border-top: 1px solid black;
// //             display: grid;
// //             grid-template-columns: repeat(2, 1fr);
// //             gap: 30px;
// //             page-break-inside: avoid;
// //           }
          
// //           .signature-box {
// //             text-align: center;
// //           }
          
// //           .signature-title {
// //             font-size: 16px;
// //             font-weight: 700;
// //             color: black;
// //             margin-bottom: 30px;
// //           }
          
// //           .signature-line {
// //             width: 100%;
// //             height: 1px;
// //             background: black;
// //             margin: 40px 0 5px;
// //           }
          
// //           .signature-name {
// //             font-size: 0.9em;
// //             color: black;
// //             font-weight: 400;
// //           }
          
// //           .contract-footer {
// //             margin-top: 20px;
// //             text-align: center;
// //             padding: 10px;
// //             background: #f0f0f0;
// //             border: 1px solid black;
// //             font-size: 0.8em;
// //             color: black;
// //           }
          
// //           @media print {
// //             .contract-page {
// //               box-shadow: none;
// //               page-break-inside: avoid;
// //               border: none;
// //             }
// //             /* Crucial styles for formal B/W printing and continuity */
// //             .contract-section, .financial-box, .signatures-section, .cancellation-section {
// //                 page-break-inside: avoid !important;
// //             }
// //             .formal-term-item {
// //                  page-break-inside: avoid !important;
// //             }
// //             .no-print {
// //               display: none !important;
// //             }
// //           }
          
// //           .print-btn {
// //             padding: 10px 20px;
// //             margin: 15px 10px;
// //             border: 1px solid black;
// //             border-radius: 5px;
// //             font-size: 0.9em;
// //             font-weight: 700;
// //             cursor: pointer;
// //             background: white;
// //             color: black;
// //             transition: none;
// //           }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="contract-page">
// //           <div class="header-section">
// //                        <div class="company-logo">
// // <img 
// //   src="https://res.cloudinary.com/djzcvjwuv/image/upload/v1760477941/WhatsApp_Image_2025-10-15_at_12.38.46_AM_xvxabx.jpg" 
// //   alt="شعار المؤسسة" 
// //   style="width:200px;height:200px;object-fit:cover;border-radius:12px;display:block;margin:0 auto;"
// // />


// //             </div>
// //             <h1 class="company-title">مؤسسة جاء للاحتفالات والمناسبات</h1>
// //             <p class="company-subtitle">السجل التجاري: 1010765704 | هاتف: 0501854427</p>
// //             <div class="header-info">
// //               <div>المملكة العربية السعودية - الرياض</div>
// //               <div>تاريخ الإصدار: ${new Date().toLocaleDateString('ar-SA')}</div>
// //             </div>
// //           </div>

// //           <h1 class="contract-title">عقد اتفاق خدمات احتفالات</h1>

// //           <div class="intro-text">
// //             <p><strong>بموجب هذا العقد، اتفق الطرفان وهما:</strong></p>
// //             <p><strong>أولاً:</strong> **الطرف الأول (المؤسسة):** مؤسسة جاء للاحتفالات والمناسبات</p>
// //             <p><strong>ثانياً:</strong> **الطرف الثاني (العميل):** ${formData.clientName || '___________________'}، يحمل هوية رقم: ${formData.identityNumber || '___________________'}.</p>
// //             <p style="margin-top: 10px;"><strong>على ما يلي:</strong></p>
// //           </div>

// //           <div class="contract-section">
// //             <h3 class="section-title">١. معلومات الحفل والخدمة</h3>
// //             <div class="info-grid">
// //               <div class="info-item">
// //                 <div class="info-label">المناسبة:</div>
// //                 <div class="info-value">${formData.eventType}</div>
// //               </div>
// //               <div class="info-item">
// //                 <div class="info-label">تاريخ التنفيذ:</div>
// //                 <div class="info-value">${dateText}</div>
// //               </div>
// //               <div class="info-item">
// //                 <div class="info-label">الموقع:</div>
// //                 <div class="info-value">برج العنود - فندق نوفوتيل</div>
// //               </div>
// //               <div class="info-item">
// //                 <div class="info-label">عدد الضيوف المتفق عليه:</div>
// //                 <div class="info-value">${formData.guestCount || 'يحدد لاحقاً'}</div>
// //               </div>
// //             </div>
// //           </div>

// //           <div class="financial-box">
// //             <h3 class="section-title">٢. الجانب المالي (بالريال السعودي)</h3>
// //             <div class="financial-row">
// //               <span>القيمة الإجمالية للعقد:</span>
// //               <span>${formData.totalAmount || '0.00'}</span>
// //             </div>
// //             <div class="financial-row">
// //               <span>العربون المدفوع (غير مسترد - لا يتم اعتماد الحجز بدونه):</span>
// //               <span>${formData.deposit || '0.00'}</span>
// //             </div>
// //             <div class="financial-row">
// //               <span>مبلغ التأمين المستحق (مسترد بعد المناسبة):</span>
// //               <span>${formData.securityDeposit || '0.00'}</span>
// //             </div>
// //             <div class="financial-row highlight">
// //               <span>المبلغ المتبقي المستحق:</span>
// //               <span>${remaining.toFixed(2)}</span>
// //             </div>
// //           </div>

// //           <div class="contract-section">
// //             <h3 class="section-title">٣. شروط العقد والالتزامات</h3>
// //             <div class="formal-terms-list">
// //               ${renderFormalTerms([...contractTerms, ...contractTermsContinued])}
// //             </div>
// //           </div>

// //           <div class="cancellation-section">
// //             <h3>٤. إلغاء العقد وأحكامه</h3>
// //             <p style="text-align: justify; font-size: 0.95em;">
// //             في حالة حدوث أي طوارئ عند الطرف الثاني يتسبب في تأجيل الحفلة أو المناسبة أو إلغائها بصفة نهائية فإن أحكام الفقرات التالية سارية كالآتي:
// //             </p>
// //             <div class="formal-terms-list">
// //               ${renderFormalTerms(cancellationTerms)}
// //             </div>
// //           </div>

// //           <div class="signatures-section">
// //             <div class="signature-box">
// //               <div class="signature-title">الطرف الأول (المؤسسة)</div>
// //               <div class="signature-line"></div>
// //               <div class="signature-name">الاسم/ الصفة: ___________________</div>
// //             </div>
// //             <div class="signature-box">
// //               <div class="signature-title">الطرف الثاني (العميل)</div>
// //               <div class="signature-line"></div>
// //               <div class="signature-name">الاسم: ${formData.clientName || '___________________'}</div>
// //             </div>
// //           </div>

// //           <div class="contract-footer">
// //             <p>تم تحرير هذا العقد من نسختين، بيد كل طرف نسخة للعمل بموجبها.</p>
// //           </div>

// //           <div style="text-align: center; margin-top: 20px;" class="no-print">
// //             <button class="print-btn" onclick="window.print()">🖨️ طباعة / حفظ PDF</button>
// //           </div>
// //         </div>
// //       </body>
// //       </html>
// //     `;

// //     const printWindow = window.open('', '_blank');
// //     printWindow.document.write(formalContent);
// //     printWindow.document.close();
// //   };
  
// //   // Existing Invitation PDF Generator Function (No change to keep the previous golden design)
// //   const generateInvitationPDF = () => {
// //     const dateText = formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate;
    
// //     // The event type for the invitation
// //     const invitationEventType = formData.eventType === 'زواج' ? 'زفاف' : 
// //                                 formData.eventType === 'ملكة' ? 'ملكة' :
// //                                 formData.eventType === 'خطبة' ? 'خطوبة' :
// //                                 formData.eventType === 'استقبال' ? 'استقبال' :
// //                                 'مناسبة سعيدة';

// //     const invitationContent = `
// //       <!DOCTYPE html>
// //       <html dir="rtl" lang="ar">
// //       <head>
// //         <meta charset="UTF-8">
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //         <title>دعوة حفل - ${formData.clientName}</title>
// //         <style>
// //           /* Diwani-like fonts for the invitation */
// //           @import url('https://fonts.googleapis.com/css2?family=Harmattan:wght@400;700&display=swap');
// //           @import url('https://fonts.googleapis.com/css2?family=Marhey:wght@300;400;500;600;700&display=swap');
          
// //           * {
// //             margin: 0;
// //             padding: 0;
// //             box-sizing: border-box;
// //           }
          
// //           body {
// //             font-family: 'Harmattan', 'Marhey', 'Traditional Arabic', 'Arial', sans-serif;
// //             font-size: ${pdfSettings.pdfFontSize};
// //             background: linear-gradient(135deg, #fdf6e3 0%, #fae6c3 100%); 
// //             color: #4a382d;
// //             padding: 20px;
// //             text-align: center;
// //           }
          
// //           .invitation-card {
// //             max-width: 700px;
// //             margin: 40px auto;
// //             background: #ffffff;
// //             padding: 60px 40px;
// //             border-radius: 20px;
// //             line-height: 1.8;
// //             position: relative;
// //             z-index: 1;
// //             /* Golden Ornamental Border */
// //             box-shadow: 
// //                 0 0 0 10px #f0d268, 
// //                 0 0 0 15px #c8a34b,
// //                 0 0 0 20px #f0d268,
// //                 0 0 0 25px #c8a34b,
// //                 0 0 0 30px #f0d268,
// //                 0 0 0 35px #c8a34b,
// //                 0 0 0 40px #f0d268,
// //                 0 0 0 45px #c8a34b,
// //                 0 0 0 50px #f0d268,
// //                 0 0 0 55px #c8a34b;
            
// //             border: 1px solid rgba(255,215,0,0.5);
// //           }

// //           .invitation-card::before {
// //               content: '';
// //               position: absolute;
// //               top: 0;
// //               left: 0;
// //               right: 0;
// //               bottom: 0;
// //               background: 
// //                 url('https://via.placeholder.com/700x500/fdf6e3/fdf6e3?text=Ornamental+Pattern') no-repeat center center;
// //               background-size: cover;
// //               opacity: 0.08;
// //               z-index: -1;
// //               border-radius: 18px;
// //           }
          
// //           .logo {
// //             font-family: 'Marhey', sans-serif;
// //             font-size: 48px;
// //             font-weight: 700;
// //             color: #8B4513;
// //             margin-bottom: 15px;
// //           }
          
// //           .main-title {
// //             font-family: 'Marhey', sans-serif;
// //             font-size: 44px;
// //             font-weight: 700;
// //             color: #A0522D;
// //             margin: 20px 0 15px;
// //             padding-bottom: 15px;
// //             border-bottom: 2px solid #D4AF37;
// //             text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
// //           }

// //           .sub-title {
// //             font-family: 'Harmattan', sans-serif;
// //             font-size: 26px;
// //             font-weight: 500;
// //             color: #6C5440;
// //             margin-bottom: 30px;
// //           }
          
// //           .detail-box {
// //             background: linear-gradient(135deg, #fffbe0 0%, #fff9e0 100%);
// //             padding: 25px;
// //             margin: 25px auto;
// //             border-radius: 15px;
// //             border: 1px solid #D4AF37;
// //             box-shadow: 0 2px 10px rgba(0,0,0,0.05);
// //             font-size: 1.1em;
// //             font-weight: 600;
// //             color: #5C4B3C;
// //             max-width: 80%;
// //           }
          
// //           .detail-label {
// //             display: block;
// //             color: #8B4513;
// //             font-size: 0.9em;
// //             margin-bottom: 8px;
// //             font-weight: 700;
// //           }
          
// //           .detail-value {
// //             color: #2e1d13;
// //             font-size: 1.3em;
// //             font-weight: 900;
// //           }

// //           .call-to-action {
// //             margin-top: 40px;
// //             font-size: 1.4em;
// //             font-weight: 700;
// //             color: #8B4513;
// //             line-height: 1.5;
// //             text-shadow: 0.5px 0.5px 1px rgba(0,0,0,0.1);
// //           }

// //           .footer-text {
// //             margin-top: 30px;
// //             font-size: 0.9em;
// //             color: #706861;
// //           }

// //           @media print {
// //             body { 
// //               padding: 0; 
// //               background: #ffffff;
// //             }
// //             .invitation-card { 
// //               box-shadow: none !important;
// //               border: 3px solid #D4AF37 !important;
// //               margin: 0 auto; 
// //               padding: 40px; 
// //               background: #ffffff;
// //               border-radius: 0;
// //             }
// //             .invitation-card::before {
// //                 background: none;
// //             }
// //             .no-print { display: none !important; }
// //           }
          
// //           .print-btn {
// //             padding: 12px 30px;
// //             margin: 20px 10px;
// //             border: none;
// //             border-radius: 8px;
// //             font-size: 1em;
// //             font-weight: 700;
// //             cursor: pointer;
// //             transition: all 0.3s;
// //             background: #D4AF37;
// //             color: white;
// //           }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="invitation-card">
// //                  <div class="company-logo">
// // <img 
// //   src="https://res.cloudinary.com/djzcvjwuv/image/upload/v1760477941/WhatsApp_Image_2025-10-15_at_12.38.46_AM_xvxabx.jpg" 
// //   alt="شعار المؤسسة" 
// //   style="width:200px;height:200px;object-fit:cover;border-radius:12px;display:block;margin:0 auto;"
// // />


// //             </div>
// //           <h1 class="main-title">يسرنا دعوتكم</h1>
// //           <p class="sub-title">لحضور حفل ${invitationEventType} المبارك</p>
          
// //           <div class="detail-box">
// //             <span class="detail-label">بمناسبة:</span>
// //             <span class="detail-value">حفل ${invitationEventType} للمكرم/ة ${formData.clientName}</span>
// //           </div>

// //           <div class="detail-box">
// //             <span class="detail-label">التاريخ:</span>
// //             <span class="detail-value">🗓️ ${dateText}</span>
// //           </div>
          
// //           <div class="detail-box">
// //             <span class="detail-label">الموقع:</span>
// //             <span class="detail-value">📍 برج العنود - فندق نوفوتيل</span>
// //           </div>

// //           <p class="call-to-action">
// //             نتشرف بحضوركم الذي يزيدنا بهجة وسروراً!
// //           </p>

// //           <div class="footer-text">
// //             مع خالص تحيات مؤسسة جاء للاحتفالات والمناسبات
// //           </div>

// //           <div style="text-align: center; margin-top: 40px;" class="no-print">
// //             <button class="print-btn" onclick="window.print()">🖨️ طباعة / حفظ PDF</button>
// //           </div>
// //         </div>
// //       </body>
// //       </html>
// //     `;

// //     const printWindow = window.open('', '_blank');
// //     printWindow.document.write(invitationContent);
// //     printWindow.document.close();
// //   };
  
// //   const sendWhatsApp = () => {
// //     const message = `🎉 *عقد جديد - مؤسسة جاء للاحتفالات* 🎉

// // 👤 *العميل:* ${formData.clientName}
// // 🆔 *رقم الهوية:* ${formData.identityNumber}
// // 💍 *نوع الحفل:* ${formData.eventType}
// // 📅 *التاريخ:* ${formData.useLaterDate ? 'يتم تحديده لاحقاً' : formData.eventDate}

// // 💰 *التفاصيل المالية:*
// // ━━━━━━━━━━━━━━
// // • المبلغ الكامل: ${formData.totalAmount} ريال
// // • عدد الضيوف: ${formData.guestCount}
// // • العربون (غير مسترد): ${formData.deposit} ريال
// // • التأمين (مسترد): ${formData.securityDeposit} ريال
// // • المتبقي: ${calculateRemaining()} ريال
// // • سعر الشخص: ${calculatePricePerPerson()} ريال

// // 📞 *أرقام التواصل:*
// // • رقم العميل: ${phoneNumber}
// // • رقم بديل: ${altPhoneNumber}

// // ✨ _مؤسسة جاء للاحتفالات والمناسبات_`;

// //     const whatsappUrl = `https://wa.me/966501854427?text=${encodeURIComponent(message)}`;
// //     window.open(whatsappUrl, '_blank');
// //   };

// //   const bgClass = darkMode 
// //     ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
// //     : 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50';
  
// //   const cardBg = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white';
// //   const textColor = darkMode ? 'text-gray-100' : 'text-gray-800';
// //   const labelColor = darkMode ? 'text-gray-300' : 'text-gray-700';
// //   const inputBg = darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900';
// //   const sectionBg = darkMode ? 'bg-gray-700/50' : 'bg-gradient-to-r';

// //   return (
// //     <div className={`min-h-screen ${bgClass} p-3 sm:p-6 transition-colors duration-300`}>
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className={`${cardBg} rounded-2xl shadow-2xl p-4 sm:p-8 mb-6 border-t-4 border-emerald-500`}>
// //           <div className="text-center">
// //             <div className="flex justify-between items-center mb-4">
// //               <button
// //                 onClick={() => setShowSaved(!showSaved)}
// //                 className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
// //                 title="العقود المحفوظة"
// //               >
// //                 <FileText size={24} className={darkMode ? 'text-emerald-400' : 'text-emerald-600'} />
// //               </button>
              
// //               <div className="flex gap-2">
// //                 <button
// //                   onClick={() => setShowCustomization(!showCustomization)}
// //                   className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
// //                   title="تخصيص الألوان والخط"
// //                 >
// //                   <Palette size={24} className={darkMode ? 'text-emerald-400' : 'text-emerald-600'} />
// //                 </button>
// //                 <button
// //                   onClick={() => setDarkMode(!darkMode)}
// //                   className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
// //                   title={darkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
// //                 >
// //                   {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
// //               <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
// //                 جاء
// //               </div>
// //             </div>
// //             <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>مؤسسة جاء للاحتفالات والمناسبات</p>
// //             <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-3`}>
// //               <p>📱 واتساب: 0501854427</p>
// //               <p>📷 Instagram: Guapo_catering</p>
// //               <p className="hidden sm:block">📋 السجل التجاري: 1010765704</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Customization Panel */}
// //         {showCustomization && (
// //           <div className={`${cardBg} rounded-2xl shadow-xl p-4 sm:p-6 mb-6`}>
// //             <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 text-center`}>🎨 تخصيص ألوان وخط العقد</h2>
// //             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" dir="rtl">
// //               <div>
// //                 <label className={`block ${labelColor} font-semibold mb-2`}>لون الخلفية</label>
// //                 <input
// //                   type="color"
// //                   value={pdfSettings.bgColor}
// //                   onChange={(e) => setPdfSettings({...pdfSettings, bgColor: e.target.value})}
// //                   className="w-full h-12 rounded-lg cursor-pointer border-2"
// //                 />
// //               </div>
// //               <div>
// //                 <label className={`block ${labelColor} font-semibold mb-2`}>لون النص</label>
// //                 <input
// //                   type="color"
// //                   value={pdfSettings.textColor}
// //                   onChange={(e) => setPdfSettings({...pdfSettings, textColor: e.target.value})}
// //                   className="w-full h-12 rounded-lg cursor-pointer border-2"
// //                 />
// //               </div>
// //               <div>
// //                 <label className={`block ${labelColor} font-semibold mb-2`}>اللون الأساسي</label>
// //                 <input
// //                   type="color"
// //                   value={pdfSettings.accentColor}
// //                   onChange={(e) => setPdfSettings({...pdfSettings, accentColor: e.target.value})}
// //                   className="w-full h-12 rounded-lg cursor-pointer border-2"
// //                 />
// //               </div>
// //               {/* Font Size Control */}
// //               <div>
// //                 <label className={`block ${labelColor} font-semibold mb-2`}>حجم الخط الأساسي (px)</label>
// //                 <select
// //                   value={pdfSettings.pdfFontSize.replace('px', '')}
// //                   onChange={(e) => setPdfSettings({...pdfSettings, pdfFontSize: `${e.target.value}px`})}
// //                   className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
// //                 >
// //                   <option value="14">14px</option>
// //                   <option value="15">15px</option>
// //                   <option value="16">16px (افتراضي)</option>
// //                   <option value="17">17px</option>
// //                   <option value="18">18px</option>
// //                 </select>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Saved Contracts */}
// //         {showSaved && (
// //           <div className={`${cardBg} rounded-2xl shadow-xl p-4 sm:p-6 mb-6`}>
// //             <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 text-center`}>📄 العقود المحفوظة</h2>
// //             {savedContracts.length === 0 ? (
// //               <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>لا توجد عقود محفوظة</p>
// //             ) : (
// //               <div className="space-y-3 max-h-96 overflow-y-auto">
// //                 {savedContracts.map((contract) => (
// //                   <div key={contract.id} className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`} dir="rtl">
// //                     <div className="flex justify-between items-start mb-2">
// //                       <div>
// //                         <p className={`font-bold ${textColor}`}>{contract.clientName}</p>
// //                         <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
// //                           {new Date(contract.date).toLocaleDateString('ar-SA')}
// //                         </p>
// //                       </div>
// //                       <div className="flex gap-2">
// //                         <button
// //                           onClick={() => loadContract(contract)}
// //                           className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all"
// //                           title="تحميل"
// //                         >
// //                           <Eye size={18} />
// //                         </button>
// //                         <button
// //                           onClick={() => deleteContract(contract.id)}
// //                           className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
// //                           title="حذف"
// //                         >
// //                           <Trash2 size={18} />
// //                         </button>
// //                       </div>
// //                     </div>
// //                     <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} grid grid-cols-2 gap-2`}>
// //                       <p>حفل: {contract.eventType}</p>
// //                       <p>المبلغ: {contract.totalAmount} ريال</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         <div className={`${cardBg} rounded-2xl shadow-2xl p-4 sm:p-8`}>
// //           <div className="space-y-6" dir="rtl">
// //             {/* Client Information */}
// //             <div className={`${sectionBg} ${darkMode ? '' : 'from-blue-50 to-cyan-50'} p-4 sm:p-6 rounded-xl border ${darkMode ? 'border-blue-900' : 'border-blue-200'}`}>
// //               <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
// //                 <span className="text-blue-600">👤</span>
// //                 معلومات العميل
// //               </h2>
              
// //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// //                 <div>
// //                   <label className={`block ${labelColor} font-semibold mb-2`}>اسم العميل</label>
// //                   <input
// //                     type="text"
// //                     name="clientName"
// //                     value={formData.clientName}
// //                     onChange={handleInputChange}
// //                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
// //                     placeholder="أدخل اسم العميل"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className={`block ${labelColor} font-semibold mb-2`}>رقم الهوية</label>
// //                   <input
// //                     type="text"
// //                     name="identityNumber"
// //                     value={formData.identityNumber}
// //                     onChange={handleInputChange}
// //                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
// //                     placeholder="أدخل رقم الهوية"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className={`block ${labelColor} font-semibold mb-2`}>رقم الطرف الثاني</label>
// //                   <input
// //                     type="tel"
// //                     value={phoneNumber}
// //                     onChange={(e) => setPhoneNumber(e.target.value)}
// //                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
// //                     placeholder="05xxxxxxxx"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className={`block ${labelColor} font-semibold mb-2`}>رقم آخر</label>
// //                   <input
// //                     type="tel"
// //                     value={altPhoneNumber}
// //                     onChange={(e) => setAltPhoneNumber(e.target.value)}
// //                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
// //                     placeholder="05xxxxxxxx"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Event Details */}
// //             <div className={`${sectionBg} ${darkMode ? '' : 'from-purple-50 to-pink-50'} p-4 sm:p-6 rounded-xl border ${darkMode ? 'border-purple-900' : 'border-purple-200'}`}>
// //               <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
// //                 <span className="text-purple-600">🎉</span>
// //                 تفاصيل الحفل
// //               </h2>
              
// //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// //                 <div>
// //                   <label className={`block ${labelColor} font-semibold mb-2`}>نوع الحفل</label>
// //                   <select
// //                     name="eventType"
// //                     value={formData.eventType}
// //                     onChange={handleInputChange}
// //                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
// //                   >
// //                     <option value="زواج">زواج</option>
// //                     <option value="ملكة">ملكة</option>
// //                     <option value="خطبة">خطبة</option>
// //                     <option value="استقبال">استقبال</option>
// //                     <option value="حفل خاص">حفل خاص</option>
// //                     <option value="مناسبة خاصة">مناسبة خاصة</option>
// //                   </select>
// //                 </div>

// //                 <div className="col-span-1">
// //                   <div className="flex items-center mb-2">
// //                     <input
// //                       type="checkbox"
// //                       name="useLaterDate"
// //                       checked={formData.useLaterDate}
// //                       onChange={handleInputChange}
// //                       id="useLaterDate"
// //                       className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500"
// //                     />
// //                     <label htmlFor="useLaterDate" className={`ms-2 text-sm font-medium ${labelColor}`}>
// //                       سيتم تحديد التاريخ لاحقاً
// //                     </label>
// //                   </div>
// //                   <label className={`block ${labelColor} font-semibold mb-2`}>تاريخ الحفل</label>
// //                   <input
// //                     type="date"
// //                     name="eventDate"
// //                     value={formData.eventDate}
// //                     onChange={handleInputChange}
// //                     disabled={formData.useLaterDate}
// //                     className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg} ${formData.useLaterDate ? 'opacity-50 cursor-not-allowed' : ''}`}
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Financial Details */}
// //             <div className="space-y-4">
// //               <div className={`${sectionBg} ${darkMode ? '' : 'from-yellow-50 to-orange-50'} p-4 sm:p-6 rounded-xl border ${darkMode ? 'border-yellow-900' : 'border-yellow-200'}`}>
// //                 <h2 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
// //                   <span className="text-yellow-600">💰</span>
// //                   التفاصيل المالية
// //                 </h2>
                
// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
// //                   <div>
// //                     <label className={`block ${labelColor} font-semibold mb-2`}>المبلغ الكامل (ريال)</label>
// //                     <input
// //                       type="number"
// //                       name="totalAmount"
// //                       value={formData.totalAmount}
// //                       onChange={handleInputChange}
// //                       className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${inputBg}`}
// //                       placeholder="مثال: 50000"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className={`block ${labelColor} font-semibold mb-2`}>عدد الضيوف</label>
// //                     <input
// //                       type="number"
// //                       name="guestCount"
// //                       value={formData.guestCount}
// //                       onChange={handleInputChange}
// //                       className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:focus:border-emerald-500 transition-all ${inputBg}`}
// //                       placeholder="مثال: 200"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className={`block ${labelColor} font-semibold mb-2`}>العربون المدفوع (ريال)</label>
// //                     <input
// //                       type="number"
// //                       name="deposit"
// //                       value={formData.deposit}
// //                       onChange={handleInputChange}
// //                       className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:focus:border-emerald-500 transition-all ${inputBg}`}
// //                       placeholder="مثال: 5000"
// //                     />
// //                   </div>
// //                 </div>
                
// //                 {/* Security Deposit Field */}
// //                 <div className="mt-4">
// //                     <label className={`block ${labelColor} font-semibold mb-2`}>مبلغ التأمين (ريال)</label>
// //                     <input
// //                       type="number"
// //                       name="securityDeposit"
// //                       value={formData.securityDeposit}
// //                       onChange={handleInputChange}
// //                       className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:focus:border-emerald-500 transition-all ${inputBg}`}
// //                       placeholder="التأمين 10000"
// //                     />
// //                     <p className={`text-xs mt-1 ${labelColor} opacity-70`}>هذا المبلغ يُسترد بعد المناسبة في حال عدم وجود تلفيات أو زيادة في عدد الضيوف.</p>
// //                 </div>
// //               </div>

// //               <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-emerald-100'}`}>
// //                 <p className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-emerald-700'}`}>
// //                   المبلغ المتبقي: 
// //                   <span className="text-xl mx-2">
// //                     {calculateRemaining().toFixed(2)}
// //                   </span> 
// //                   ريال سعودي
// //                 </p>
// //                 <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-emerald-600'} mt-1`}>
// //                   سعر الشخص الواحد: {calculatePricePerPerson()} ريال سعودي
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap justify-center gap-4 sm:gap-6">
              
// //               <button
// //                 onClick={generateFormalContractPDF} 
// //                 className="flex items-center justify-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] min-w-[150px]"
// //                 title="توليد عقد رسمي (أبيض وأسود)"
// //               >
// //                 <Landmark size={20} className="ms-2" />
// //                 عقد رسمي (أبيض/أسود)
// //               </button>

// //               <button
// //                 onClick={generatePDF}
// //                 className="flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] min-w-[150px]"
// //                 title="توليد العقد كملف PDF للطباعة"
// //               >
// //                 <Download size={20} className="ms-2" />
// //                 توليد العقد (ملون)
// //               </button>

// //               {/* Generate Invitation PDF Button */}
// //               <button
// //                 onClick={generateInvitationPDF}
// //                 className="flex items-center justify-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] min-w-[150px]"
// //                 title="توليد بطاقة دعوة للمناسبة"
// //               >
// //                 <Mail size={20} className="ms-2" />
// //                 توليد دعوة (ذهبي)
// //               </button>

// //               <button
// //                 onClick={saveContract}
// //                 className="flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] min-w-[150px]"
// //                 title="حفظ العقد مؤقتاً في المتصفح"
// //               >
// //                 <Save size={20} className="ms-2" />
// //                 حفظ العقد
// //               </button>

// //               <button
// //                 onClick={sendWhatsApp}
// //                 className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] min-w-[150px]"
// //                 title="إرسال ملخص العقد عبر واتساب"
// //               >
// //                 <Send size={20} className="ms-2" />
// //                 إرسال واتساب
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// export default function UnderDevelopment() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
//       <div className="text-center px-6 py-12 max-w-2xl">
//         <div className="mb-8">
//           <svg 
//             className="w-24 h-24 mx-auto text-indigo-600 animate-pulse" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth={2} 
//               d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
//             />
//           </svg>
//         </div>
        
//         <h1 className="text-5xl font-bold text-gray-800 mb-4">
//           الموقع قيد التطوير حاليًا
//         </h1>
        
//         <p className="text-xl text-gray-600 mb-8">
//           نعمل بجد لتقديم تجربة رائعة لك. سنعود قريبًا!
//         </p>
        
//         <div className="flex justify-center gap-2">
//           <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//           <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
//           <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//         </div>
//       </div>
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
import QRCode from "qrcode";

export default function BillingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [customerName, setCustomerName] = useState("");
  // const [customerAddress, setCustomerAddress] = useState("");
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
  const [watermarkEnabled, setWatermarkEnabled] = useState(false);
  const [savedInvoices, setSavedInvoices] = useState([]);
  const [reports, setReports] = useState({ dailyTotal: 0, weeklyTotal: 0, customers: {} });

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

  // Load saved invoices and compute reports
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("savedInvoices") || "[]");
      setSavedInvoices(saved);
      computeReports(saved);
    } catch {}
  }, []);

  const computeReports = (invoices) => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayMs = 24 * 60 * 60 * 1000;
    const startOfWeek = new Date(startOfDay.getTime() - (startOfDay.getDay() === 0 ? 6 : startOfDay.getDay() - 1) * dayMs);

    let dailyTotal = 0;
    let weeklyTotal = 0;
    const customers = {};

    invoices.forEach((inv) => {
      const ts = inv.createdAt ? new Date(inv.createdAt) : new Date();
      const total = Number(inv.total || 0);
      // Daily
      if (ts >= startOfDay) dailyTotal += total;
      // Weekly (Mon-Sun)
      if (ts >= startOfWeek) weeklyTotal += total;
      // Customers summary
      const name = inv.customerName || "غير محدد";
      if (!customers[name]) customers[name] = { count: 0, total: 0 };
      customers[name].count += 1;
      customers[name].total += total;
    });

    setReports({ dailyTotal, weeklyTotal, customers });
  };

  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    date: new Date().toISOString().split("T")[0],
    customerName: "",
    // customerAddress: "",
    customerPhone: "",
    // customerEmail: "",
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
    owner: "عمرو تامر",
    phone: "+966546709790",
    email: "amrtamerel13@yahoo.com",
    address: "الرياض، المملكة العربية السعودية",
    website: "www.nebras-alarab.com",
    bankAccount: "129608010999395",
    IBAN: "SA548 0000 129608010999395",
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
        if (authData.username === "amr") {
          setIsAuthenticated(true);
          setShowLoginModal(false);
          setUsername(authData.username);
          setCustomerName(authData.customerName || "");
          // setCustomerAddress(authData.customerAddress || "");
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

    if (username === "amr" && password === "amr123") {
      setIsAuthenticated(true);
      setShowLoginModal(false);
      setLoginAttempts(0);

      const authData = {
        username,
        customerName,
        // customerAddress,
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
      // customerAddress,
    };
    localStorage.setItem("billingAuth", JSON.stringify(authData));
    localStorage.setItem("customerName", customerName);
    // localStorage.setItem("customerAddress", customerAddress);
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
      createdAt: new Date().toISOString(),
    };
    const dataStr = JSON.stringify(invoiceToSave, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(dataBlob);
    link.download = `invoice-${invoiceData.invoiceNumber}.json`;
    link.click();

    // Persist to localStorage list
    try {
      const list = JSON.parse(localStorage.getItem("savedInvoices") || "[]");
      const entry = {
        id: invoiceData.invoiceNumber,
        invoiceNumber: invoiceData.invoiceNumber,
        date: invoiceData.date,
        customerName: invoiceData.customerName || customerName || "غير محدد",
        total: calculateTotal(),
        items: invoiceData.items,
        company: companyInfo,
        createdAt: new Date().toISOString(),
      };
      const updated = [entry, ...list.filter((x) => x.id !== entry.id)].slice(0, 200);
      localStorage.setItem("savedInvoices", JSON.stringify(updated));
      setSavedInvoices(updated);
      computeReports(updated);
    } catch {}
  };

  const sendWhatsApp = () => {
    const message = `عرض سعر
    
اسم العميل: ${customerName || "غير محدد"}


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

  // const generateAndDownloadPDF = async () => {
  //   // Create invoice content for PDF
  //   const billText = `عرض: ${invoiceData.invoiceNumber}\nتاريخ: ${invoiceData.date}\nعميل: ${invoiceData.customerName || customerName || "غير محدد"}\n` +
  //     invoiceData.items.map((i, idx) => `${idx + 1}) ${i.name || "-"} | ${i.quantity} x ${i.price} = ${i.total}`).join("\n") +
  //     `\nإجمالي: ${calculateTotal().toFixed(2)} ريال`;
  //   let qrDataURL = "";
  //   try {
  //     qrDataURL = await QRCode.toDataURL(billText, { width: 120, margin: 1 });
  //   } catch {}

  //   const invoiceContent = `
  //     <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
  //       <div style="position: relative;">
  //         ${watermarkEnabled ? '<div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; opacity:0.05; z-index:0;"><img src="/dwn/Logo.svg" style="max-width:500px; width:70%; transform: translateY(40%);"/></div>' : ''}
  //         <div style="position:relative; z-index:1; display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; border-bottom: 2px solid #10b981; padding-bottom: 20px;">
  //           <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px;">
  //             <img src="/dwn/Logo.svg" alt="Logo" style="width: 80px; height: 80px;">
  //             <h1 style="color: #10b981; margin: 0; font-size: 20px;">مطابع نبراس العرب</h1>
  //           </div>
  //           <div style="text-align: center; margin-top: 0;">
  //           ${qrDataURL ? `<img src="${qrDataURL}" alt="QR" style="width: 100px; height: 100px;">` : ""}
  //           </div>
  //           <div style="text-align: right; margin-top: 6px;">
  //           <h2 style="color: #1f2937; margin: 0 0 5px 0; font-size: 24px;">عرض سعر</h2>
  //           <p style="color: #6b7280; margin: 5px 0; font-size: 16px;">Nebras Al Arab Printer</p>
  //           <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">  ${companyInfo.owner}</p>
  //           <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">  ${companyInfo.IBAN}</p>
  //           <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">  ${companyInfo.bankAccount}</p>


  //           </div>
  //         </div>
  //       </div>

  //       <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
  //         <div>
  //           <p style="margin: 5px 0; color: #6b7280;"><strong>رقم العرض:</strong> ${
  //             invoiceData.invoiceNumber
  //           }</p>
  //           <p style="margin: 5px 0; color: #6b7280;"><strong>التاريخ:</strong> ${
  //             invoiceData.date
  //           }</p>

  //          <p style="margin: 5px 0;"><strong>الراجحي</strong> ${companyInfo.bankAccount}</p>
  //          <p style="margin: 5px 0;"><strong>IBAN</strong> ${companyInfo.IBAN}</p>



  //         </div>
  //         <div style="text-align: right;">
  //           <h3 style="color: #1f2937; margin: 0 0 10px 0;">معلومات العميل</h3>
  //           <p style="margin: 5px 0; color: #6b7280;"><strong>الاسم:</strong> ${
  //             invoiceData.customerName || customerName || "غير محدد"
  //           }</p>
       
  //           <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
  //             invoiceData.customerPhone || "غير محدد"
  //           }</p>
         
  //         </div>
  //       </div>

  //       <div style="margin-bottom: 20px;">
  //         <h3 style="color: #1f2937; margin: 0 0 15px 0;">المنتجات</h3>
  //         <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
  //           <thead>
  //             <tr style="background-color: #f9fafb;">
  //               <th style="border: 1px solid #e5e7eb; padding: 6px; text-align: right; color: #1f2937;">المنتج</th>
  //               <th style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #1f2937;">الكمية</th>
  //               <th style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #1f2937;">السعر</th>
  //               <th style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #1f2937;">الإجمالي</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             ${invoiceData.items
  //               .map(
  //                 (item) => `
  //               <tr>
  //                 <td style="border: 1px solid #e5e7eb; padding: 6px; text-align: right; color: #374151;">${
  //                   item.name || "غير محدد"
  //                 }</td>
  //                 <td style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #374151;">${
  //                   item.quantity
  //                 }</td>
  //                 <td style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #374151;">${item.price.toFixed(
  //                   2
  //                 )} ريال</td>
  //                 <td style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #374151;">${item.total.toFixed(
  //                   2
  //                 )} ريال</td>
  //               </tr>
  //               `
  //               )
  //               .join("")}
  //           </tbody>
  //         </table>
  //       </div>

  //       <div style="text-align: left; margin-bottom: 20px;">
  //         <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
  //           <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
  //             <span style="color: #6b7280;">المجموع الفرعي:</span>
  //             <span style="color: #1f2937; font-weight: bold;">${calculateSubtotal().toFixed(
  //               2
  //             )} ريال</span>
  //           </div>
  //           <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
  //             <span style="color: #6b7280;">الخصم:</span>
  //             <span style="color: #1f2937; font-weight: bold;">-${calculateDiscountAmount().toFixed(
  //               2
  //             )} ريال</span>
  //           </div>
  //           <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
  //             <span style="color: #6b7280;">المجموع قبل الضريبة:</span>
  //             <span style="color: #1f2937; font-weight: bold;">${calculateTaxableAmount().toFixed(
  //               2
  //             )} ريال</span>
  //           </div>
  //           <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
  //             <span style="color: #6b7280;">الضريبة (15%):</span>
  //             <span style="color: #1f2937; font-weight: bold;">${calculateTax().toFixed(
  //               2
  //             )} ريال</span>
  //           </div>
  //           <div style="display: flex; justify-content: space-between; border-top: 1px solid #e5e7eb; padding-top: 10px;">
  //             <span style="color: #1f2937; font-weight: bold; font-size: 18px;">الإجمالي:</span>
  //             <span style="color: #10b981; font-weight: bold; font-size: 18px;">${calculateTotal().toFixed(
  //               2
  //             )} ريال</span>
  //           </div>
  //         </div>
  //       </div>

        
  //     </div>
  //   `;

  //   // Create a new window with the invoice content
  //   const printWindow = window.open("", "_blank");
  //   printWindow.document.write(`
  //     <!DOCTYPE html>
  //     <html dir="rtl">
  //       <head>
  //         <title>عرض سعر - ${invoiceData.invoiceNumber}</title>
  //         <meta charset="utf-8">
  //         <style>
  //           body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
  //           @media print {
  //             body { margin: 0; }
  //             .no-print { display: none; }
  //             table, tbody, tr, td { page-break-inside: avoid !important; }
  //           }
  //         </style>
  //       </head>
  //       <body>
  //         ${invoiceContent}
  //         <div class="no-print" style="text-align: center; margin-top: 30px;">
  //           <button onclick="window.print()" style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
  //             طباعة PDF
  //           </button>
  //           <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 0 10px;">
  //             إغلاق
  //           </button>
  //         </div>
  //       </body>
  //     </html>
  //   `);
  //   printWindow.document.close();
  // };

  const generateAndDownloadPDF = async () => {
    // Create invoice content for PDF + QR
const billText =
  `عرض: ${invoiceData.invoiceNumber}\n` +
  `تاريخ: ${invoiceData.date}\n` +
  `عميل: ${invoiceData.customerName || customerName || "غير محدد"}\n\n` +
  `المنتجات:\n` +
  invoiceData.items
    .map((i, idx) => {
      const name = (i.name || "-").padEnd(10, " ");
      return `${idx + 1}) ${name} ${i.quantity} x ${i.price} = ${i.total}`;
    })
    .join("\n") +
  `\n\nإجمالي: ${calculateTotal().toFixed(2)} ريال\n` +
  `الراجحي: 129608010999395\n` +
  `IBAN: SA5480000129608010999395`;

    let qrDataURL = "";
    try {
      qrDataURL = await QRCode.toDataURL(billText, { width: 120, margin: 1 });
    } catch {}
  
    const invoiceContent = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <div style="position: relative;">
          ${
            watermarkEnabled
              ? '<div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; opacity:0.05; z-index:0;"><img src="/dwn/Logo.svg" style="max-width:500px; width:70%; transform: translateY(40%);"/></div>'
              : ""
          }
          <div style="position:relative; z-index:1; display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; border-bottom: 2px solid #10b981; padding-bottom: 20px;">
            <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px;">
              <img src="/dwn/Logo.svg" alt="Logo" style="width: 80px; height: 80px;">
              <h1 style="color: #10b981; margin: 0; font-size: 20px;">مطابع نبراس العرب</h1>
            </div>
            <div style="text-align: center; margin-top: 0;">
              ${qrDataURL ? `<img src="${qrDataURL}" alt="QR" style="width: 100px; height: 100px;">` : ""}
            </div>
            <div style="text-align: right; margin-top: 6px;">
              <h2 style="color: #1f2937; margin: 0 0 5px 0; font-size: 24px;">عرض سعر</h2>
              <p style="color: #6b7280; margin: 5px 0; font-size: 16px;">Nebras Al Arab Printer</p>
              <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">${companyInfo.owner}</p>
              <p style="color: #6b7280; margin: 5px 0; font-size: 14px;">${companyInfo.phone}</p>

            </div>
          </div>
        </div>
  
        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
          <div>
            <p style="margin: 5px 0; color: #6b7280;"><strong>رقم العرض:</strong> ${invoiceData.invoiceNumber}</p>
            <p style="margin: 5px 0; color: #6b7280;"><strong>التاريخ:</strong> ${invoiceData.date}</p>
            <p style="margin: 5px 0;"><strong>الراجحي:</strong> 129608010999395</p>
            <p style="margin: 5px 0;"><strong>IBAN:</strong> SA5480000129608010999395</p>
          </div>
          <div style="text-align: right;">
            <h3 style="color: #1f2937; margin: 0 0 10px 0;">معلومات العميل</h3>
            <p style="margin: 5px 0; color: #6b7280;"><strong>الاسم:</strong> ${
              invoiceData.customerName || customerName || "غير محدد"
            }</p>
            <p style="margin: 5px 0; color: #6b7280;"><strong>الهاتف:</strong> ${
              invoiceData.customerPhone || "غير محدد"
            }</p>
          </div>
        </div>
  
        <div style="margin-bottom: 20px;">
          <h3 style="color: #1f2937; margin: 0 0 15px 0;">المنتجات</h3>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
            <thead>
              <tr style="background-color: #f9fafb;">
                <th style="border: 1px solid #e5e7eb; padding: 6px; text-align: right; color: #1f2937;">المنتج</th>
                <th style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #1f2937;">الكمية</th>
                <th style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #1f2937;">السعر</th>
                <th style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #1f2937;">الإجمالي</th>
              </tr>
            </thead>
            <tbody>
              ${invoiceData.items
                .map(
                  (item) => `
                <tr>
                  <td style="border: 1px solid #e5e7eb; padding: 6px; text-align: right; color: #374151;">${
                    item.name || "غير محدد"
                  }</td>
                  <td style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #374151;">${
                    item.quantity
                  }</td>
                  <td style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #374151;">${item.price.toFixed(
                    2
                  )} ريال</td>
                  <td style="border: 1px solid #e5e7eb; padding: 6px; text-align: center; color: #374151;">${item.total.toFixed(
                    2
                  )} ريال</td>
                </tr>
                `
                )
                .join("")}
            </tbody>
          </table>
        </div>
  
        <div style="text-align: left; margin-bottom: 20px;">
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #6b7280;">المجموع الفرعي:</span>
              <span style="color: #1f2937; font-weight: bold;">${calculateSubtotal().toFixed(2)} ريال</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #6b7280;">الخصم:</span>
              <span style="color: #1f2937; font-weight: bold;">-${calculateDiscountAmount().toFixed(2)} ريال</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #6b7280;">المجموع قبل الضريبة:</span>
              <span style="color: #1f2937; font-weight: bold;">${calculateTaxableAmount().toFixed(2)} ريال</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #6b7280;">الضريبة (15%):</span>
              <span style="color: #1f2937; font-weight: bold;">${calculateTax().toFixed(2)} ريال</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px solid #e5e7eb; padding-top: 10px;">
              <span style="color: #1f2937; font-weight: bold; font-size: 18px;">الإجمالي:</span>
              <span style="color: #10b981; font-weight: bold; font-size: 18px;">${calculateTotal().toFixed(2)} ريال</span>
            </div>
          </div>
        </div>
      </div>
    `;
  
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

                {/* PDF Options */}
                <div className="mb-6">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={watermarkEnabled}
                      onChange={(e) => setWatermarkEnabled(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-700">إضافة علامة مائية (الشعار) في PDF</span>
                  </label>
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
             
               
                    </div>
                  </div>
                </div>

                {/* Items Table */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    المنتجات
                  </h3>
                  {/* Desktop/Large screens table */}
                  <div className="hidden md:block overflow-x-auto">
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

                  {/* Mobile stacked inputs (responsive, no horizontal scroll) */}
                  <div className="md:hidden space-y-3">
                    {invoiceData.items.map((item) => (
                      <div key={item.id} className="rounded-xl border border-gray-200 p-3 bg-white shadow-sm">
                        <div className="mb-3">
                          <label className="block text-xs text-gray-500 mb-1">اسم المنتج</label>
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => updateItem(item.id, "name", e.target.value)}
                            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                            placeholder="اسم المنتج"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">الكمية</label>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)}
                              min="1"
                              className="w-full px-3 py-3 text-base text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-gray-900 placeholder-gray-500 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">السعر</label>
                            <input
                              type="number"
                              value={item.price}
                              onChange={(e) => updateItem(item.id, "price", parseFloat(e.target.value) || 0)}
                              step="0.01"
                              className="w-full px-3 py-3 text-base text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-gray-900 placeholder-gray-500 bg-white"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-xs text-gray-500 mb-1">الإجمالي</label>
                            <div className="w-full px-3 py-3 text-base text-center border border-gray-200 rounded-lg bg-gray-50 font-semibold">
                              {item.total.toFixed(2)} ريال
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
