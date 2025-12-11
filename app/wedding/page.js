
// 'use client';

// import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
// import { 
//     Plus, Trash2, Download, User, Lock, X, Calendar, Target, Utensils, 
//     Dumbbell, Droplets, Pill, Save, Edit2, Menu, Activity, Zap, Layers, 
//     Cpu, CornerDownRight, Video, ImageIcon, Clock, Scale, Globe 
// } from 'lucide-react';

// // --- CONSTANTS AND DATA ---

// const WEEKDAYS = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];
// const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snacks'];
// const MEAL_OPTIONS = ['الخيار أ', 'الخيار ب', 'الخيار ج'];

// // Cloudinary links with optimization 
// const TRAINER_PHOTO_COVER = "https://res.cloudinary.com/djzcvjwuv/image/upload/f_auto,q_auto,w_800/v1765484899/WhatsApp_Image_2025-12-11_at_11.23.42_PM_amrskz.jpg";
// // Blurred background image for all PDF pages
// const TRAINER_PHOTO_BACKGROUND = "https://res.cloudinary.com/djzcvjwuv/image/upload/f_auto,q_auto,w_800/v1765484899/WhatsApp_Image_2025-12-11_at_11.23.42_PM_amrskz.jpg";
// const TRAINER_PHOTO_CARD = "https://res.cloudinary.com/djzcvjwuv/image/upload/f_auto,q_auto,e_improve,g_auto,c_fill,w_400,h_600/v1765484899/WhatsApp_Image_2025-12-11_at_11.23.42_PM_amrskz.jpg";
// const TRAINER_PHOTO_CLOSING = "https://res.cloudinary.com/djzcvjwuv/image/upload/f_auto,q_auto,e_improve,g_auto,c_fill,w_300,h_300/v1765484899/WhatsApp_Image_2025-12-11_at_11.23.35_PM_gslp0h.jpg";

// // Custom Text Dictionary - Now only Arabic
// const T = {
//     login: "تسجيل الدخول", logout: "خروج", welcome: "مرحباً", dashboard: "لوحة تحكم المدرب",
//     clientInfo: "1. معلومات العميل والقياسات", macrosTarget: "أهداف المغذيات الكبيرة (الماكروز)",
//     dietPlan: "2. النظام الغذائي والمكملات", trainingPlan: "3. البرنامج التدريبي الأسبوعي",
//     summary: "4. ملخص البرنامج الشامل", // NEW SUMMARY TITLE
//     clientName: "اسم العميل", programPeriod: "مدة البرنامج", weeks: "أسابيع",
//     goal: "الهدف", weight: "الوزن (كجم)", targetWeight: "الوزن المستهدف (كجم)",
//     height: "الطول (سم)", calories: "السعرات المطلوبة (سعرة)", protein: "البروتين المستهدف (جرام)",
//     carbs: "الكربوهيدرات المستهدفة (جرام)", fats: "الدهون المستهدفة (جرام)",
//     bodyFat: "نسبة الدهون (%)", muscleMass: "الكتلة العضلية (كجم)",
//     bmi: "مؤشر كتلة الجسم (BMI)", currentCals: "السعرات اليومية الحالية",
//     currentProtein: "البروتين اليومي الحالي", weeklyLoss: "الخسارة/الزيادة الأسبوعية المتوقعة (كجم)",
//     save: "حفظ البرنامج الجديد", update: "حفظ التعديلات وتحديث البرنامج", download: "تنزيل PDF",
//     addMealItem: "إضافة مكون وجبة (يدوياً)", componentName: "اسم المكون", weightGrams: "الوزن المقترح للاستهلاك (جرام)",
//     nutritionalValues: "القيم الغذائية للكمية المدخلة", total: "الإجمالي", 
//     vegWater: "ملاحظات الخضروات والفواكه وشرب الماء", waterIntake: "الكمية اليومية من الماء (لتر)",
//     supplements: "المكملات الغذائية الأسبوعية", addSupplement: "إضافة مكمل جديد", password: "كلمة المرور",
//     exerciseName: "اسم التمرين", sets: "المجموعات (Sets)", reps: "التكرارات (Reps)",
//     muscle: "العضلة المستهدفة", videoLink: "رابط فيديو الشرح", addExercise: "إضافة تمرين مخصص (يدوي)",
//     restDay: "يوم راحة", activeDay: "يوم تمرين", trainer: "المدرب", plans: "الخطط المحفوظة",
//     newPlan: "خطة جديدة", edit: "تعديل", delete: "حذف", usageDays: "أيام الاستخدام:",
//     dosage: "الجرعة", timing: "التوقيت",
//     mealNames: { 
//         breakfast: 'وجبة الإفطار', lunch: 'وجبة الغداء', dinner: 'وجبة العشاء', snacks: 'الوجبات الخفيفة' 
//     },
//     trainerTitle: "مدرب شخصي معتمد",
//     coverTitle: "برنامج اللياقة والتدريب الشخصي",
//     coverGoal: "الهدف", coverWeight: "الوزن الحالي", coverTarget: "الوزن المستهدف",
//     coverPrepared: "تم إعداده بواسطة",
//     pdfSection1: "📊 معلومات العميل والقياسات",
//     pdfSection2: "🎯 ملخص المغذيات الإجمالي", // Now moved to the end
//     pdfSection3: "🍽️ النظام الغذائي (الوجبات بالتفصيل)",
//     pdfSection4: "💪 البرنامج التدريبي الأسبوعي - التفاصيل",
//     pdfSection5: "💊 المكملات الغذائية",
//     pdfSummary: "ملخص الأسبوع التدريبي",
//     pdfSets: "المجموعات",
//     pdfReps: "التكرارات",
//     pdfVideo: "فيديو الشرح",
//     pdfSummarySection: "ملخص وتوصيات البرنامج",
//     pdfMiniMap: "خريطة الأسبوع التدريبي", // NEW
// };
// const LANGUAGE_CODE = 'ar';
// const PDF_DIR = 'rtl';
// const MUSCLE_OPTIONS = ['صدر', 'ظهر', 'كتف', 'أرجل', 'ذراع', 'كامل الجسم', 'كارديو'];
// const VEGETABLES_DEFAULT = 'بروكلي، سبانخ، خس، خيار';


// // --- Utility Function to generate stable IDs and avoid Hydration issues ---
// // 🚨 FIX: دالة لتوليد ID ثابتة للحالة الأولية (لتجنب التضارب مع SSR)
// const generateStableIdForInitialState = (prefix = 'stable-') => prefix + 'temp'; 

// // 🚨 FIX: دالة لتوليد ID أثناء الترطيب (Runtime ID - تستخدم عند إضافة عنصر جديد أو حفظ خطة)
// const generateRuntimeId = (prefix = '') => prefix + Date.now().toString(36) + Math.random().toString(36).substring(2, 7);


// // Simplified Initial Meal Item Structure
// // 🚨 FIX: استخدام ID ثابت في الحالة الأولية
// const initialMealItem = { name: '', calories: '', protein: '', carbs: '', fats: '', weightGrams: '', id: generateStableIdForInitialState('temp-') };


// // --- Helper Components (Optimized with memo and forwardRef) ---

// // 🚨 FIX: 1. عزل InputGroup باستخدام React.memo
// const InputGroup = React.memo(React.forwardRef(({ label, type, value, setValue, required, min, step, unit, placeholder, customKey }, ref) => (
//     <div>
//         <label className="block text-sm font-medium text-gray-300 mb-1">
//             {label} 
//             {unit && <span className="text-indigo-400 ms-1">({unit})</span>}
//         </label>
//         <input
//             type={type}
//             // 🚨 FIX: Pass customKey or label as key for better stability
//             key={customKey || label} 
//             value={value}
//             // 🚨 FIX: استخدام useCallback/useMemo (مضمن بشكل طبيعي في React.memo)
//             // نضمن أن الدالة setValue تمريرها بشكل صحيح من الأب (في هذه الحالة تمريرها مباشرة كـ Prop جيد)
//             onChange={(e) => setValue(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
//             required={required}
//             min={min}
//             step={step}
//             placeholder={placeholder}
//             dir={['number', 'url', 'password'].includes(type) ? 'ltr' : 'rtl'}
//             ref={ref} // Pass ref here
//         />
//     </div>
// )));

// InputGroup.displayName = 'InputGroup'; // Recommended for forwardRef and memo

// const SelectGroup = React.memo(({ label, value, setValue, children }) => (
//     <div>
//         <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
//         <select
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
//             dir={'rtl'}
//         >
//             {children}
//         </select>
//     </div>
// ));
// SelectGroup.displayName = 'SelectGroup';

// const TextAreaGroup = React.memo(({ label, value, setValue, rows }) => (
//     <div>
//         <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
//         <textarea
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             rows={rows}
//             className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
//             dir={'rtl'}
//         />
//     </div>
// ));
// TextAreaGroup.displayName = 'TextAreaGroup';

// const MetricCard = React.memo(({ label, value, unit }) => (
//     <div className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600">
//         <p className="text-sm font-medium text-gray-400">{label}</p>
//         <p className="text-2xl font-bold text-indigo-400 mt-1" dir="ltr">
//             {value} {unit}
//         </p>
//     </div>
// ));
// MetricCard.displayName = 'MetricCard';

// // --- Main Component ---

// export default function PersonalTrainerApp() {
//     // --- Initial State and Configuration ---
//     const WEEKDAY_NAMES = WEEKDAYS;
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [plansLoaded, setPlansLoaded] = useState(false); 
//     const [isClient, setIsClient] = useState(false); 
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [savedPlans, setSavedPlans] = useState([]);
//     const [editingPlan, setEditingPlan] = useState(null);
//     const [showSidebar, setShowSidebar] = useState(false);
//     const [activeTab, setActiveTab] = useState('diet');

//     const [clientName, setClientName] = useState('');
//     const [programPeriod, setProgramPeriod] = useState('1month');
//     const [customPeriod, setCustomPeriod] = useState('');
//     const [weight, setWeight] = useState('');
//     const [height, setHeight] = useState('');
//     const [goal, setGoal] = useState('loss');
//     const [targetWeight, setTargetWeight] = useState('');
    
//     const [caloriesNeeded, setCaloriesNeeded] = useState('');
//     const [targetProtein, setTargetProtein] = useState('');
//     const [targetCarbs, setTargetCarbs] = useState('');
//     const [targetFats, setTargetFats] = useState('');
    
//     const [bodyFat, setBodyFat] = useState('');
//     const [muscleMass, setMuscleMass] = useState('');
    
//     const initialMealsState = useMemo(() => MEAL_TYPES.reduce((acc, mealType) => ({
//         ...acc,
//         [mealType]: MEAL_OPTIONS.reduce((optAcc, option) => ({ ...optAcc, [option]: [] }), {})
//     }), {}), []);
//     const [meals, setMeals] = useState(initialMealsState);
    
//     const [vegetablesText, setVegetablesText] = useState(VEGETABLES_DEFAULT); 
//     const [waterIntake, setWaterIntake] = useState('3.0');
    
//     const [selectedSupplements, setSelectedSupplements] = useState([]);
    
//     const [isCustomMealModalOpen, setIsCustomMealModalOpen] = useState(false);
//     const [currentMealType, setCurrentMealType] = useState(null);
//     const [currentMealOption, setCurrentMealOption] = useState(null);
//     const [newCustomMeal, setNewCustomMeal] = useState(initialMealItem); 
//     const mealNameRef = useRef(null); // 🚨 REF for Meal Modal Focus Fix
    
//     const initialWorkoutState = useMemo(() => WEEKDAY_NAMES.reduce((acc, day) => ({ ...acc, [day]: [] }), {}), [WEEKDAY_NAMES]);
//     const [workoutProgram, setWorkoutProgram] = useState(initialWorkoutState);
    
//     const [isCustomExerciseModalOpen, setIsCustomExerciseModalOpen] = useState(false);
//     const [currentDayForExercise, setCurrentDayForExercise] = useState(null);
//     const [newExercise, setNewExercise] = useState({
//         name: '', muscle: '', sets: 3, reps: '10-12', videoLink: ''
//     });
//     const exerciseNameRef = useRef(null); // 🚨 REF for Exercise Modal Focus Fix

//     const trainerInfo = useMemo(() => ({
//         name: 'Amr Elshahhat',
//         nameAr: 'عمرو الشحات',
//         title: T.trainerTitle,
//         phone: '+966 XX XXX XXXX',
//         email: 'amr.elshahhat@fitness.com',
//         photo: TRAINER_PHOTO_COVER,
//     }), []);
    
//     // --- Modal Focus Effects ---
    
//     // 🚨 FIX: Auto-focus the first input when the meal modal opens
//     useEffect(() => {
//         if (isCustomMealModalOpen && mealNameRef.current) {
//             // Use setTimeout to ensure focus happens after the modal is fully rendered/transitioned
//             setTimeout(() => {
//                 mealNameRef.current?.focus();
//             }, 100); 
//         }
//     }, [isCustomMealModalOpen]);

//     // 🚨 FIX: Auto-focus the first input when the exercise modal opens
//     useEffect(() => {
//         if (isCustomExerciseModalOpen && exerciseNameRef.current) {
//             // Use setTimeout to ensure focus happens after the modal is fully rendered/transitioned
//             setTimeout(() => {
//                 exerciseNameRef.current?.focus();
//             }, 100);
//         }
//     }, [isCustomExerciseModalOpen]);


//     // --- Utility Functions ---

//     useEffect(() => {
//         setIsClient(true); 
//         const savedAuth = localStorage.getItem('trainerAuth');
//         const lastLogin = localStorage.getItem('trainerLastLogin');
        
//         if (savedAuth && lastLogin) {
//             const authData = JSON.parse(savedAuth);
//             if (Date.now() - new Date(lastLogin).getTime() < 24 * 60 * 60 * 1000) {
//                 if (authData.username === 'amr') {
//                     setIsAuthenticated(true);
//                     setUsername(authData.username);
//                 }
//             } else {
//                 localStorage.removeItem('trainerAuth');
//                 localStorage.removeItem('trainerLastLogin');
//             }
//         }

//         try {
//             const plans = JSON.parse(localStorage.getItem('fitnessPlans') || '[]');
//             setSavedPlans(plans);
//         } catch (e) { 
//             console.error("Error loading plans:", e); 
//         } finally {
//              setPlansLoaded(true); 
//         }
        
//         setVegetablesText(VEGETABLES_DEFAULT); 
//     }, []);
    
//     const resetForm = useCallback(() => {
//         setClientName('');
//         setProgramPeriod('1month');
//         setCustomPeriod('');
//         setWeight('');
//         setHeight('');
//         setCaloriesNeeded('');
//         setTargetProtein(''); 
//         setTargetCarbs('');
//         setTargetFats('');
//         setBodyFat('');
//         setMuscleMass('');
//         setGoal('loss');
//         setTargetWeight('');
//         setMeals(initialMealsState);
//         setVegetablesText(VEGETABLES_DEFAULT);
//         setWaterIntake('3.0');
//         setSelectedSupplements([]);
//         setWorkoutProgram(initialWorkoutState);
//         setEditingPlan(null);
//         setActiveTab('diet');
//     }, [initialMealsState, initialWorkoutState]);
  
//     const loadPlanForEdit = useCallback((plan) => {
//         setClientName(plan.clientName);
//         setProgramPeriod(plan.programPeriod);
//         setCustomPeriod(plan.customPeriod);
//         setWeight(plan.weight);
//         setHeight(plan.height);
//         setCaloriesNeeded(plan.caloriesNeeded);
//         setTargetProtein(plan.targetProtein); 
//         setTargetCarbs(plan.carbs);
//         setTargetFats(plan.fats);
//         setBodyFat(plan.bodyFat);
//         setMuscleMass(plan.muscleMass);
//         setGoal(plan.goal);
//         setTargetWeight(plan.targetWeight);
        
//         let loadedMeals = plan.meals;
//         // Handle potential legacy format (Option A/B/C instead of Arabic options)
//         if (Object.keys(plan.meals[MEAL_TYPES[0]] || {}).includes('Option A')) {
//              loadedMeals = MEAL_TYPES.reduce((acc, mealType) => ({
//                 ...acc,
//                 [mealType]: {
//                     [MEAL_OPTIONS[0]]: plan.meals[mealType]['Option A'] || [],
//                     [MEAL_OPTIONS[1]]: plan.meals[mealType]['Option B'] || [],
//                     [MEAL_OPTIONS[2]]: plan.meals[mealType]['Option C'] || [],
//                 }
//             }), {});
//         }
//         setMeals(loadedMeals);
        
//         setVegetablesText(plan.vegetablesText || VEGETABLES_DEFAULT);
//         setWaterIntake(plan.waterIntake);
//         setSelectedSupplements(plan.selectedSupplements || []);
        
//         const loadedWorkout = {};
//         WEEKDAY_NAMES.forEach((currentDay) => {
//             loadedWorkout[currentDay] = plan.workoutProgram[currentDay] || [];
//         });
//         setWorkoutProgram(loadedWorkout);

//         setEditingPlan(plan);
//         setShowSidebar(false);
//     }, [WEEKDAY_NAMES]);

//     // 🚨 FIX: استخدم useCallback لضمان ثبات دالة التغيير، مما يساعد InputGroup.memo
//     const handleNewCustomMealChange = useCallback((field, value) => {
//         setNewCustomMeal(prev => ({ ...prev, [field]: value }));
//     }, []);
    
//     // 🚨 FIX: استخدم useCallback لضمان ثبات دالة التغيير، مما يساعد InputGroup.memo
//     const handleNewExerciseChange = useCallback((field, value) => {
//         setNewExercise(prev => ({ ...prev, [field]: value }));
//     }, []);
  
//     const addCustomMeal = useCallback(() => {
//         const meal = newCustomMeal; 
//         if (!meal.name || !currentMealType || !currentMealOption || !meal.weightGrams) {
//             alert('الرجاء إدخال اسم المكون والوزن المقترح على الأقل.');
//             return;
//         }
        
//         const mealData = {
//             ...meal,
//             calories: parseInt(meal.calories) || 0,
//             protein: parseInt(meal.protein) || 0,
//             carbs: parseInt(meal.carbs) || 0,
//             fats: parseInt(meal.fats) || 0,
//             weightGrams: parseInt(meal.weightGrams) || 0,
//             // 🚨 FIX: استخدام generateRuntimeId لتوليد ID فريد عند الإضافة
//             id: generateRuntimeId('meal-') 
//         };
        
//         setMeals(prev => ({
//             ...prev,
//             [currentMealType]: {
//                 ...prev[currentMealType],
//                 [currentMealOption]: [...prev[currentMealType][currentMealOption], mealData] 
//             }
//         }));
        
//         setNewCustomMeal(initialMealItem);
//         setIsCustomMealModalOpen(false);
//         setCurrentMealType(null);
//         setCurrentMealOption(null);
//     }, [newCustomMeal, currentMealType, currentMealOption]);

//     const removeMealItemFromOption = useCallback((mealType, option, itemId) => {
//         setMeals(prev => ({
//             ...prev,
//             [mealType]: {
//                 ...prev[mealType],
//                 [option]: prev[mealType][option].filter(item => item.id !== itemId) 
//             }
//         }));
//     }, []);
  
//     const addCustomExercise = useCallback(() => {
//         const exercise = newExercise; 
        
//         if (!exercise.name || !currentDayForExercise || !exercise.muscle) {
//             alert('الرجاء إدخال اسم التمرين والعضلة المستهدفة على الأقل.');
//             return;
//         }

//         const exerciseData = {
//             ...exercise,
//             sets: parseInt(exercise.sets) || 3,
//             // 🚨 FIX: استخدام generateRuntimeId لتوليد ID فريد عند الإضافة
//             id: generateRuntimeId('exercise-')
//         };
        
//         setWorkoutProgram(prev => ({
//             ...prev,
//             [currentDayForExercise]: [...prev[currentDayForExercise], exerciseData]
//         }));

//         setNewExercise({ name: '', muscle: '', sets: 3, reps: '10-12', videoLink: '' });
//         setIsCustomExerciseModalOpen(false);
//         setCurrentDayForExercise(null);
//     }, [newExercise, currentDayForExercise]);

//     const removeExercise = useCallback((day, exerciseId) => {
//         setWorkoutProgram(prev => ({
//             ...prev,
//             [day]: prev[day].filter(ex => ex.id !== exerciseId)
//         }));
//     }, []);
  
//     const getTotalMacros = useMemo(() => {
//         let totalCals = 0, totalProtein = 0, totalCarbs = 0, totalFats = 0;
        
//         Object.values(meals).forEach(mealType => {
//             Object.values(mealType).forEach(mealOptionItems => {
//                 mealOptionItems.forEach(meal => {
//                     totalCals += parseInt(meal.calories) || 0;
//                     totalProtein += parseInt(meal.protein) || 0;
//                     totalCarbs += parseInt(meal.carbs) || 0;
//                     totalFats += parseInt(meal.fats) || 0;
//                 });
//             });
//         });
//         return { totalCals, totalProtein, totalCarbs, totalFats };
//     }, [meals]);


//     const savePlan = useCallback(() => {
//         const plan = {
//             // 🚨 FIX: استخدام generateRuntimeId لتوليد ID فريد للخطة الجديدة
//             id: editingPlan?.id || generateRuntimeId('plan-'), 
//             language: LANGUAGE_CODE, 
//             clientName, programPeriod, customPeriod, weight, height, goal, targetWeight,
//             caloriesNeeded, targetProtein, targetCarbs, targetFats,
//             bodyFat, muscleMass,
//             bmi: calculateBMI(),
//             weeklyLoss: calculateWeeklyWeightLoss(),
//             meals, vegetablesText, waterIntake, selectedSupplements,
//             workoutProgram,
//             macros: getTotalMacros,
//             createdAt: editingPlan?.createdAt || new Date().toISOString(),
//             updatedAt: new Date().toISOString()
//         };
        
//         try {
//             const plans = editingPlan 
//             ? savedPlans.map(p => p.id === editingPlan.id ? plan : p)
//             : [plan, ...savedPlans];
            
//             localStorage.setItem('fitnessPlans', JSON.stringify(plans));
//             setSavedPlans(plans);
//             alert(editingPlan ? 'تم تحديث البرنامج بنجاح!' : 'تم حفظ البرنامج بنجاح!');
            
//             if (editingPlan) {
//                 setEditingPlan(plan); 
//             }
//         } catch (error) {
//             console.error("Error saving plan:", error);
//             alert('حدث خطأ أثناء الحفظ');
//         }
//     }, [editingPlan, clientName, programPeriod, customPeriod, weight, height, goal, targetWeight, caloriesNeeded, targetProtein, targetCarbs, targetFats, bodyFat, muscleMass, meals, vegetablesText, waterIntake, selectedSupplements, workoutProgram, getTotalMacros, savedPlans]);

//     const handleLogin = () => {
//         if (username === 'amr' && password === 'amr123') {
//             setIsAuthenticated(true);
//             const authData = { username };
//             localStorage.setItem('trainerAuth', JSON.stringify(authData));
//             localStorage.setItem('trainerLastLogin', new Date().toISOString());
//         } else {
//             alert('بيانات الدخول غير صحيحة');
//         }
//     };

//     const handleLogout = () => {
//         setIsAuthenticated(false);
//         setUsername('');
//         setPassword('');
//         localStorage.removeItem('trainerAuth');
//         localStorage.removeItem('trainerLastLogin');
//     };

//     const calculateBMI = useCallback(() => {
//         if (!weight || !height) return 0;
//         const h = parseFloat(height) / 100;
//         return (parseFloat(weight) / (h * h)).toFixed(1);
//     }, [weight, height]);

//     const getPeriodInWeeks = useCallback(() => {
//         switch(programPeriod) {
//             case '1week': return 1;
//             case '2weeks': return 2;
//             case '1month': return 4;
//             case '2months': return 8;
//             case '3months': return 12;
//             case 'custom': return parseInt(customPeriod) || 4;
//             default: return 4;
//         }
//     }, [programPeriod, customPeriod]);

//     const calculateWeeklyWeightLoss = useCallback(() => {
//         if (!weight || !targetWeight) return 0;
//         const diff = parseFloat(weight) - parseFloat(targetWeight);
//         const weeks = getPeriodInWeeks();
//         if (weeks <= 0) return 0; 
//         return (diff / weeks).toFixed(2);
//     }, [weight, targetWeight, getPeriodInWeeks]);

//     const deletePlan = (id) => {
//         if (window.confirm('هل أنت متأكد من حذف هذه الخطة؟')) {
//             const updatedPlans = savedPlans.filter(p => p.id !== id);
//             localStorage.setItem('fitnessPlans', JSON.stringify(updatedPlans));
//             setSavedPlans(updatedPlans);
//             if (editingPlan && editingPlan.id === id) {
//                 resetForm();
//             }
//             alert('تم حذف الخطة بنجاح.');
//         }
//     };
    
//     // PDF Generation Logic (FINALIZED - Optimized CSS for Print)
//     const generatePDF = useCallback(() => {
//         if (!clientName || !caloriesNeeded || !targetProtein || Object.keys(meals).length === 0) {
//             alert('الرجاء إدخال اسم العميل وتفاصيل المغذيات وتفاصيل الوجبات قبل التنزيل.');
//             return;
//         }

//         const renderMealItems = (items) => items.map(item => `
//             <li class="pdf-list-item">
//                 <div class="pdf-meal-name">${item.name}</div>
//                 <div class="pdf-meal-macros" dir="ltr">
//                     ${T.weight}: ${item.weightGrams || 0}g | 
//                     ${T.calories.split(' ')[0]}: ${item.calories || 0} | 
//                     ${T.protein.split(' ')[0]}: ${item.protein || 0} | 
//                     ${T.carbs.split(' ')[0]}: ${item.carbs || 0} | 
//                     ${T.fats.split(' ')[0]}: ${item.fats || 0}
//                 </div>
//             </li>
//         `).join('');

//         const renderMeals = () => MEAL_TYPES.map(mealType => `
//             <div class="pdf-meal-type">
//                 <h4>${T.mealNames[mealType]}</h4>
//                 ${MEAL_OPTIONS.map(option => `
//                     <div class="pdf-meal-option">
//                         <h5>${option}</h5>
//                         <ul class="pdf-meal-list">
//                             ${renderMealItems(meals[mealType][option])}
//                         </ul>
//                     </div>
//                 `).join('')}
//             </div>
//         `).join('');
        
//         // Render Macros Summary as a robust HTML table 
//         const renderMacrosSummaryTable = (calories, protein, carbs, fats, isTarget = true) => `
//             <table class="pdf-macros-table ${isTarget ? 'target-macros' : 'current-macros'}">
//                 <tr>
//                     <td class="macro-label">${T.calories} (${isTarget ? 'الهدف' : 'من الوجبات'})</td>
//                     <td class="macro-value">${calories || 0}</td>
//                     <td class="macro-label">${T.protein} (${isTarget ? 'الهدف' : 'من الوجبات'})</td>
//                     <td class="macro-value">${protein || 0}g</td>
//                     <td class="macro-label">${T.carbs} (${isTarget ? 'الهدف' : 'من الوجبات'})</td>
//                     <td class="macro-value">${fats || 0}g</td>
//                     <td class="macro-label">${T.fats} (${isTarget ? 'الهدف' : 'من الوجبات'})</td>
//                     <td class="macro-value">${carbs || 0}g</td>
//                 </tr>
//             </table>
//         `;
        
//         // 🚨 Workout Mini-Map (Summary Grid)
//         const renderWorkoutMiniMap = () => {
//             const getMuscleSummary = (day) => {
//                 const exercises = workoutProgram[day];
//                 if (exercises.length === 0) return T.restDay;
                
//                 const muscles = [...new Set(exercises.map(ex => ex.muscle).filter(m => m))];
//                 return muscles.length > 0 ? muscles.join(' + ') : T.activeDay;
//             };

//             return `
//                 <div class="pdf-workout-mini-map">
//                     ${WEEKDAY_NAMES.map(day => `
//                         <div class="pdf-map-item ${workoutProgram[day]?.length === 0 ? 'rest-day-map' : 'active-day-map'}">
//                             <span class="day-label">${day}</span>
//                             <span class="day-summary">${getMuscleSummary(day)}</span>
//                         </div>
//                     `).join('')}
//                 </div>
//             `;
//         };

//         const renderWorkoutTable = (day) => {
//             if (workoutProgram[day].length === 0) {
//                 return `<p class="rest-day-text">${T.restDay}</p>`;
//             }
//             return `
//                 <table class="pdf-workout-table">
//                     <thead>
//                         <tr>
//                             <th style="width: 40%;">${T.exerciseName}</th>
//                             <th style="width: 15%;">${T.pdfSets}</th>
//                             <th style="width: 15%;">${T.pdfReps}</th>
//                             <th style="width: 30%;">${T.pdfVideo}</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         ${workoutProgram[day].map(ex => `
//                             <tr style="break-inside: avoid;">
//                                 <td class="ex-name">${ex.name} (${ex.muscle})</td>
//                                 <td>${ex.sets}</td>
//                                 <td>${ex.reps}</td>
//                                 <td class="ex-video">${ex.videoLink ? `<a href="${ex.videoLink}" target="_blank">شاهد</a>` : '-'}</td>
//                             </tr>
//                         `).join('')}
//                     </tbody>
//                 </table>
//             `;
//         };
        
//         // Calendar/Grid View for Training Program
//         const renderWorkoutCalendar = () => WEEKDAY_NAMES.map(day => `
//             <div class="pdf-day-calendar-item ${workoutProgram[day]?.length === 0 ? 'rest-day-bg' : 'active-day-bg'}">
//                 <h4 class="pdf-day-header-cal">
//                     ${day}
//                     ${workoutProgram[day]?.length === 0 ? `<span class="rest-badge">(${T.restDay})</span>` : `<span class="active-badge">(${T.activeDay})</span>`}
//                 </h4>
//                 ${renderWorkoutTable(day)}
//             </div>
//         `).join('');


//         const renderSupplements = () => selectedSupplements.map(sup => `
//             <div class="pdf-supplement-item">
//                 <strong>${sup.name}</strong> - 
//                 ${T.dosage}: <span dir="ltr">${sup.dosage}</span> | 
//                 ${T.timing}: <span dir="rtl">${sup.timing}</span> | 
//                 ${T.usageDays}: <span dir="rtl">${sup.days.join(', ')}</span>
//             </div>
//         `).join('');

//         const periodText = programPeriod === 'custom' 
//             ? `${customPeriod} ${T.weeks}` 
//             : `${getPeriodInWeeks()} ${T.weeks}`;
            
//         const totalMacros = getTotalMacros;
        
//         const renderSummaryContent = () => {
//             const activeDays = WEEKDAY_NAMES.filter(day => workoutProgram[day]?.length > 0).length;
//             const proteinGrams = targetProtein || 0;
//             const waterLiters = waterIntake || 0;
            
//             return `
//                 <div class="pdf-summary-grid">
//                     <div class="pdf-data-item summary-item"><span>💪 أيام التدريب الأسبوعية</span><strong>${activeDays} أيام</strong></div>
//                     <div class="pdf-data-item summary-item"><span>💧 هدف شرب الماء</span><strong>${waterLiters} لتر يومياً</strong></div>
//                     <div class="pdf-data-item summary-item"><span>🥩 هدف البروتين اليومي</span><strong>${proteinGrams} جرام</strong></div>
//                     <div class="pdf-data-item summary-item"><span>📅 مدة البرنامج</span><strong>${periodText}</strong></div>
//                 </div>

//                 <div class="pdf-recommendations">
//                     <h4>نصائح البرنامج الرئيسية:</h4>
//                     <ul>
//                         <li><span class="bullet-point"></span> التركيز على تحقيق هدف البروتين اليومي ${proteinGrams}g للحفاظ على الكتلة العضلية أو زيادتها.</li>
//                         <li><span class="bullet-point"></span> البدء بالتمرين في الأيام النشطة (${activeDays} أيام) كما هو موضح في جدول التدريب.</li>
//                         <li><span class="bullet-point"></span> شرب ${waterLiters} لتر من الماء يومياً على الأقل.</li>
//                         <li><span class="bullet-point"></span> التأكد من تناول الخضروات والفواكه المذكورة: ${vegetablesText}.</li>
//                     </ul>
//                 </div>
//             `;
//         };
        
        
//         const htmlContent = `
//             <!DOCTYPE html>
//             <html lang="${LANGUAGE_CODE}" dir="${PDF_DIR}">
//             <head>
//                 <title>${T.coverTitle} - ${clientName}</title>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <style>
//                     /* GLOBAL STYLES - Crucial for dark mode printing */
//                     @page { margin: 0; size: A4; }
//                     body { 
//                         font-family: 'Amiri', 'Traditional Arabic', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//                         color: #E0E0E0; /* Dark Mode Text */
//                         background-color: #121212; /* Dark Mode Background */
//                         line-height: 1.6;
//                         margin: 0;
//                         padding: 0;
//                         font-size: 10pt;
//                         direction: rtl;
//                         text-align: right;
                        
//                         /* FORCE PRINTING BACKGROUND AND COLORS */
//                         -webkit-print-color-adjust: exact !important;
//                         color-adjust: exact !important;
//                     }
//                     h1, h2, h3, h4, h5, h6 { color: #8C52FF; margin-top: 0.5em; margin-bottom: 0.5em; }
                    
//                     /* PDF Page Structure - Includes Blurred Trainer Image Background */
//                     .pdf-page { 
//                         page-break-after: always; 
//                         padding: 1.5cm 1cm; 
//                         width: 21cm;
//                         height: 29.7cm;
//                         box-sizing: border-box;
//                         background-color: #121212; 
                        
//                         /* BACKGROUND IMAGE ADDED HERE */
//                         background-image: url('${TRAINER_PHOTO_BACKGROUND}');
//                         background-repeat: no-repeat;
//                         background-position: center center;
//                         background-size: cover;
//                         position: relative;
//                     }
//                     /* Overlay for readability on all pages */
//                     .pdf-page::before {
//                         content: '';
//                         position: absolute;
//                         top: 0; left: 0; right: 0; bottom: 0;
//                         background: rgba(18, 18, 18, 0.85); /* Semi-transparent dark overlay */
//                         z-index: 1;
//                     }
//                     .pdf-content { position: relative; z-index: 2; }


//                     /* COVER PAGE */
//                     .pdf-cover { 
//                         height: 29.7cm;
//                         display: flex; 
//                         flex-direction: column; 
//                         justify-content: center; 
//                         align-items: center; 
//                         text-align: center;
//                         background-image: url('${TRAINER_PHOTO_COVER}');
//                         background-position: center; 
//                         background-size: cover;
//                         color: white;
//                         text-shadow: 0 0 10px rgba(0,0,0,0.8);
//                         page-break-after: always;
//                     }
//                     .pdf-cover::before {
//                         content: '';
//                         position: absolute;
//                         top: 0; left: 0; right: 0; bottom: 0;
//                         background: rgba(0, 0, 0, 0.65); 
//                         z-index: 1;
//                     }
//                     .pdf-cover-content { z-index: 2; padding: 30px; }
//                     .pdf-cover h1 { font-size: 3em; color: #fff; margin-bottom: 0.5em; }
//                     .pdf-cover h2 { font-size: 2em; color: #8C52FF; margin-bottom: 1em; }
//                     .pdf-cover p { font-size: 1.2em; margin: 0.8em 0; }
//                     .pdf-cover .prepared-by { margin-top: 5em; font-size: 1.1em; }
//                     .pdf-cover .trainer-name { font-size: 1.6em; color: #E0E0E0; }

//                     /* SECTION STYLES */
//                     .pdf-section { margin-bottom: 25px; padding: 10px 0; break-inside: avoid; }
//                     .pdf-section h2 { 
//                         font-size: 1.4em; 
//                         color: #8C52FF; 
//                         border-bottom: 2px solid #333; 
//                         padding-bottom: 5px; 
//                         margin-bottom: 15px;
//                     }
                    
//                     /* DATA GRID */
//                     .pdf-data-grid { 
//                         display: grid; 
//                         grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
//                         gap: 15px; 
//                         margin-bottom: 20px; 
//                     }
//                     .pdf-data-item { 
//                         background: #1E1E1E; 
//                         padding: 10px 15px; 
//                         border-right: 4px solid #8C52FF;
//                         font-size: 0.9em;
//                         break-inside: avoid;
//                         direction: rtl; /* Ensure RTL */
//                         text-align: right;
//                     }
//                     .pdf-data-item strong { display: block; font-size: 1.1em; color: #E0E0E0; }
                    
//                     /* SUMMARY GRID */
//                     .pdf-summary-grid {
//                          display: grid; 
//                          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
//                          gap: 15px;
//                          margin-bottom: 20px;
//                     }
//                     .summary-item {
//                         border-right: 4px solid #FBC02D; /* Different color for summary */
//                     }
//                     .pdf-recommendations {
//                         background: #1A1A1A;
//                         padding: 15px;
//                         border-radius: 10px;
//                         border: 1px solid #333;
//                         break-inside: avoid; /* Ensure recommendations block doesn't break */
//                         direction: rtl;
//                         text-align: right;
//                     }
//                     .pdf-recommendations ul {
//                         list-style: none;
//                         padding: 0;
//                         margin: 0;
//                     }
//                     .pdf-recommendations li {
//                         background: #252525;
//                         padding: 8px 15px;
//                         margin-bottom: 6px;
//                         border-radius: 6px;
//                         display: flex;
//                         align-items: flex-start;
//                         break-inside: avoid;
//                     }
//                     .bullet-point {
//                         width: 8px;
//                         height: 8px;
//                         min-width: 8px; 
//                         background: #8C52FF;
//                         border-radius: 50%;
//                         margin-left: 10px; 
//                         margin-top: 6px; 
//                     }

//                     /* MACROS TABLE STYLES (Moved to last page) */
//                     .pdf-macros-table {
//                         width: 100%;
//                         border-collapse: collapse;
//                         margin-top: 20px; /* Space after other content */
//                         margin-bottom: 10px;
//                         direction: rtl;
//                         text-align: center;
//                         break-inside: avoid;
//                     }
//                     .pdf-macros-table tr {
//                         background: #222;
//                         page-break-inside: avoid;
//                     }
//                     .pdf-macros-table td {
//                         padding: 10px 8px;
//                         border: 1px solid #333;
//                         font-size: 0.9em;
//                     }
//                     .macro-label {
//                         background: #333;
//                         color: #B0B0B0;
//                         width: 15%; /* Control width */
//                     }
//                     .macro-value {
//                         color: #8C52FF;
//                         font-weight: bold;
//                         font-size: 1.1em;
//                         direction: ltr; /* LTR for numbers */
//                         width: 10%; /* Control width */
//                     }
//                     .current-macros tr {
//                         background: #1A1A1A;
//                     }
//                     .current-macros .macro-label {
//                         background: #252525;
//                     }
//                     .current-macros .macro-value {
//                         color: #E0E0E0;
//                     }

//                     /* DIET & MEAL STYLES */
//                     .pdf-meal-type { margin-bottom: 20px; border: 1px solid #333; padding: 15px; border-radius: 8px; background: #1A1A1A; page-break-inside: avoid; }
//                     .pdf-meal-type h4 { font-size: 1.2em; color: #E0E0E0; margin-bottom: 10px; border-bottom: 1px dotted #333; padding-bottom: 5px; }
//                     .pdf-meal-option { margin-bottom: 10px; page-break-inside: avoid; }
//                     .pdf-meal-option h5 { font-size: 1em; color: #B0B0B0; margin-bottom: 5px; }
//                     .pdf-meal-list { list-style: none; padding: 0; margin: 0; }
//                     .pdf-list-item { 
//                         display: flex; 
//                         justify-content: space-between; 
//                         background: #252525; 
//                         padding: 8px 10px; 
//                         margin-bottom: 4px; 
//                         border-radius: 4px;
//                         page-break-inside: avoid; 
//                     }
//                     .pdf-meal-name { font-weight: 600; color: #fff; flex: 1; }
//                     .pdf-meal-macros { font-size: 0.8em; color: #A0A0A0; flex: 2; text-align: left; direction: ltr; }
                    
//                     /* Veg Water */
//                     .veg-water-box { 
//                         background: #1A1A1A; 
//                         padding: 15px; 
//                         border-radius: 10px; 
//                         break-inside: avoid; 
//                         border: 1px solid #333;
//                     }
//                     .veg-water-item {
//                         display: block; 
//                         padding: 5px 0;
//                         border-bottom: 1px dotted #333;
//                         direction: rtl; 
//                         text-align: right;
//                     }
//                     .veg-water-item strong {
//                         display: inline-block;
//                         color: #8C52FF;
//                         margin-left: 5px; 
//                     }
//                     .veg-water-item:last-child {
//                         border-bottom: none;
//                     }
                    
//                     /* 🚨 Workout Mini-Map Styles */
//                     .pdf-workout-mini-map {
//                         display: grid;
//                         grid-template-columns: repeat(4, 1fr); 
//                         gap: 10px;
//                         margin-bottom: 20px;
//                         border: 1px solid #333;
//                         padding: 10px;
//                         border-radius: 8px;
//                         background: #1E1E1E;
//                         break-inside: avoid;
//                     }
//                     .pdf-map-item {
//                         padding: 8px;
//                         border-radius: 6px;
//                         text-align: center;
//                     }
//                     .day-label {
//                         font-weight: bold;
//                         display: block;
//                         color: #E0E0E0;
//                         margin-bottom: 3px;
//                         border-bottom: 1px dotted #444;
//                     }
//                     .day-summary {
//                         font-size: 0.8em;
//                         color: #B0B0B0;
//                     }
//                     .rest-day-map { background: #222; border: 1px solid #333; }
//                     .active-day-map { background: #252525; border: 1px solid #8C52FF; }


//                     /* WORKOUT STYLES - Calendar/Grid View */
//                     .pdf-workout-calendar {
//                         display: grid;
//                         grid-template-columns: repeat(2, 1fr); 
//                         gap: 15px;
//                     }
                    
//                     .pdf-day-calendar-item { 
//                         border-radius: 10px; 
//                         padding: 15px; 
//                         break-inside: avoid;
//                     }
//                     .rest-day-bg { background: #1A1A1A; border: 2px solid #555; }
//                     .active-day-bg { background: #1A1A1A; border: 2px solid #8C52FF; }

//                     .pdf-day-header-cal { 
//                         font-size: 1.1em; 
//                         font-weight: bold; 
//                         margin-bottom: 10px; 
//                         border-bottom: 2px solid #333; 
//                         padding-bottom: 5px;
//                         color: #E0E0E0;
//                         display: flex;
//                         justify-content: space-between;
//                         align-items: center;
//                     }
//                     .rest-badge { background: #555; color: #ccc; padding: 2px 8px; border-radius: 4px; font-size: 0.7em; margin-right: 5px; }
//                     .active-badge { background: #8C52FF; color: #fff; padding: 2px 8px; border-radius: 4px; font-size: 0.7em; margin-right: 5px; }

//                     .rest-day-text { color: #ccc; text-align: center; margin-top: 20px; font-size: 1.1em; }
                    
//                     /* Workout Table Styles */
//                     .pdf-workout-table { 
//                         width: 100%; 
//                         border-collapse: collapse; 
//                         margin-top: 10px; 
//                         table-layout: fixed; 
//                         direction: rtl; 
//                         text-align: right;
//                     }
//                     .pdf-workout-table thead { 
//                         display: table-header-group; 
//                         background-color: #333; 
//                         color: #fff;
//                     }
//                     .pdf-workout-table tbody tr {
//                          page-break-inside: avoid !important; 
//                          break-inside: avoid !important;
//                          display: table-row; 
//                     }
                    
//                     .pdf-workout-table th, .pdf-workout-table td { 
//                         border: 1px solid #333; 
//                         padding: 6px 8px; 
//                         text-align: right;
//                         background-color: #1A1A1A;
//                     }
//                     .pdf-workout-table th { background-color: #333; color: #fff; font-weight: bold; }
                    
//                     .ex-name { color: #8C52FF; font-weight: 600; font-size: 0.9em; }
//                     .ex-video a { color: #8C52FF; text-decoration: none; font-size: 0.8em; }
//                     .ex-video { text-align: center !important; direction: ltr; } 
                    
//                     .pdf-workout-table td:nth-child(2),
//                     .pdf-workout-table td:nth-child(3) {
//                          direction: ltr; 
//                          text-align: center;
//                     }


//                     /* SUPPLEMENTS */
//                     .pdf-supplement-item { 
//                         background: #1E1E1E; 
//                         padding: 10px 15px; 
//                         border-radius: 8px; 
//                         margin-bottom: 8px; 
//                         border-right: 4px solid #8C52FF; 
//                         break-inside: avoid;
//                         direction: rtl; 
//                         text-align: right;
//                     }
//                     .pdf-supplement-item strong { color: #E0E0E0; }
//                     .pdf-supplement-item span[dir="ltr"] {
//                         direction: ltr;
//                         text-align: left;
//                         display: inline-block;
//                     }
                    
//                     /* TRAINER INFO (End Page) */
//                     .pdf-trainer-info { 
//                         margin-top: 40px; 
//                         padding-top: 20px; 
//                         text-align: center; 
//                         background: #1E1E1E;
//                         padding: 30px;
//                         border-radius: 15px;
//                         break-before: auto;
//                         break-inside: avoid;
//                     }
//                     .pdf-trainer-info img { 
//                         width: 150px; 
//                         height: 150px; 
//                         border-radius: 50%; 
//                         object-fit: cover; 
//                         border: 5px solid #8C52FF; 
//                         margin-bottom: 15px; 
//                         box-shadow: 0 0 15px rgba(140, 82, 255, 0.5);
//                     }
//                     .pdf-trainer-info h3 { font-size: 1.5em; color: #E0E0E0; }
                    
//                     /* Utility for Page Breaks */
//                     .page-break { page-break-before: always; }
//                 </style>
//             </head>
//             <body>
//                 <div class="pdf-container">
//                     <div class="pdf-cover">
//                         <div class="pdf-cover-content">
//                             <h1>${T.coverTitle}</h1>
//                             <h2>${clientName}</h2>
//                             <p>${T.coverGoal}: ${goal === 'loss' ? 'خسارة الوزن' : 'بناء العضلات'}</p>
//                             <p>${T.coverWeight}: ${weight || 0} kg</p>
//                             <p>${T.coverTarget}: ${targetWeight || 0} kg</p>
//                             <div class="prepared-by">
//                                 <p style="font-style: italic;">${T.coverPrepared}</p>
//                                 <h3 class="trainer-name">${trainerInfo.nameAr}</h3>
//                                 <p>${trainerInfo.title}</p>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div class="pdf-page">
//                         <div class="pdf-content">
//                             <div class="pdf-section">
//                                 <h2>${T.pdfSummarySection}</h2>
//                                 ${renderSummaryContent()}
//                             </div>

//                             <div class="pdf-section">
//                                 <h2>${T.pdfSection1}</h2>
//                                 <div class="pdf-data-grid">
//                                     <div class="pdf-data-item"><span>${T.clientName}</span><strong>${clientName}</strong></div>
//                                     <div class="pdf-data-item"><span>${T.programPeriod}</span><strong>${periodText}</strong></div>
//                                     <div class="pdf-data-item"><span>${T.weight}</span><strong>${weight || 0} kg</strong></div>
//                                     <div class="pdf-data-item"><span>${T.targetWeight}</span><strong>${targetWeight || 0} kg</strong></div>
//                                     <div class="pdf-data-item"><span>${T.height}</span><strong>${height || 0} cm</strong></div>
//                                     <div class="pdf-data-item"><span>${T.bmi}</span><strong>${calculateBMI()}</strong></div>
//                                     <div class="pdf-data-item"><span>${T.bodyFat}</span><strong>${bodyFat || 0}%</strong></div>
//                                     <div class="pdf-data-item"><span>${T.muscleMass}</span><strong>${muscleMass || 0} kg</strong></div>
//                                     <div class="pdf-data-item"><span>${T.weeklyLoss}</span><strong>${calculateWeeklyWeightLoss()} kg</strong></div>
//                                     <div class="pdf-data-item"><span>${T.goal}</span><strong>${goal === 'loss' ? 'خسارة الوزن' : 'بناء العضلات'}</strong></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="pdf-page page-break">
//                         <div class="pdf-content">
//                             <div class="pdf-section">
//                                 <h2>${T.pdfSection3}</h2>
//                                 ${renderMeals()}
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div class="pdf-page page-break">
//                         <div class="pdf-content">
                            
//                             <div class="pdf-section">
//                                 <h2>${T.vegWater}</h2>
//                                 <div class="veg-water-box">
//                                     <div class="veg-water-item">
//                                         <strong>${T.waterIntake}:</strong> <span dir="ltr">${waterIntake || 0} Liters.</span>
//                                     </div>
//                                     <div class="veg-water-item">
//                                         <strong>الخضروات والفواكه:</strong> ${vegetablesText}
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             <div class="pdf-section">
//                                 <h2>${T.pdfSection5}</h2>
//                                 ${selectedSupplements.length > 0 ? renderSupplements() : `<p style="color: #B0B0B0; background: #1A1A1A; padding: 15px; border-radius: 10px; border: 1px solid #333;">لا توجد مكملات غذائية موصوفة.</p>`}
//                             </div>
                            
//                         </div>
//                     </div>
                    
//                     <div class="pdf-page page-break">
//                         <div class="pdf-content">
//                             <div class="pdf-section">
//                                 <h2>${T.pdfSection4}</h2>
                                
//                                 <h3 style="font-size: 1.2em; color: #B0B0B0; margin-bottom: 10px;">${T.pdfMiniMap}</h3>
//                                 ${renderWorkoutMiniMap()}

//                                 <div class="pdf-workout-calendar">
//                                     ${renderWorkoutCalendar()}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="pdf-page page-break">
//                         <div class="pdf-content">
                            
//                             <div class="pdf-section">
//                                 <h2>${T.pdfSection2}</h2>
//                                 <h3 style="font-size: 1.1em; color: #E0E0E0; margin-bottom: 5px;">${T.macrosTarget}</h3>
//                                 ${renderMacrosSummaryTable(caloriesNeeded, targetProtein, targetCarbs, targetFats, true)}
//                                 <h3 style="font-size: 1.1em; color: #E0E0E0; margin-top: 15px; margin-bottom: 5px;">${T.total} المحتوى الغذائي للوجبات</h3>
//                                 ${renderMacrosSummaryTable(totalMacros.totalCals, totalMacros.totalProtein, totalMacros.totalCarbs, totalMacros.totalFats, false)}
//                             </div>

//                             <div class="pdf-trainer-info">
//                                 <img src="${TRAINER_PHOTO_CLOSING}" alt="${trainerInfo.name}">
//                                 <h3 style="color: #E0E0E0;">${trainerInfo.nameAr}</h3>
//                                 <p style="color: #B0B0B0;">${trainerInfo.title}</p>
//                                 <p style="color: #B0B0B0;">Email: ${trainerInfo.email}</p>
//                                 <p style="color: #B0B0B0;">Phone: ${trainerInfo.phone}</p>
//                                 <p style="margin-top: 30px; font-style: italic; color: #B0B0B0;">
//                                     تمنياتي لكم بالتوفيق والنجاح في رحلة اللياقة البدنية.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </body>
//             </html>
//         `;

//         // Open in new window for printing/saving as PDF
//         const newWindow = window.open();
//         newWindow.document.write(htmlContent);
//         newWindow.document.close();
        
//         setTimeout(() => {
//              alert('لضمان ظهور الوضع الداكن والصور في ملف PDF، يرجى التأكد من تفعيل خيار "رسومات الخلفية" أو "Background Graphics" في إعدادات الطباعة قبل الحفظ.');
//              newWindow.print();
//         }, 500);
//     }, [clientName, caloriesNeeded, targetProtein, meals, calculateBMI, calculateWeeklyWeightLoss, getPeriodInWeeks, bodyFat, muscleMass, weight, targetWeight, height, programPeriod, customPeriod, vegetablesText, waterIntake, selectedSupplements, workoutProgram, getTotalMacros, trainerInfo]);
    
//     // --- Modals and Render Functions ---
    
//     const renderMealOption = (mealType, option) => (
//         <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
//             <h4 className="font-semibold text-indigo-300 mb-2">{option}</h4>
//             <ul className="space-y-2">
//                 {meals[mealType][option].map(item => (
//                     <li key={item.id} className="flex justify-between items-center bg-gray-600 p-2 rounded text-sm">
//                         <span className="flex-1 truncate">{item.name} ({item.weightGrams}g)</span>
//                         <button 
//                             onClick={() => removeMealItemFromOption(mealType, option, item.id)}
//                             className="text-red-400 hover:text-red-500 ms-3"
//                         >
//                             <Trash2 className="w-4 h-4"/>
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//             <button
//                 onClick={() => {
//                     setCurrentMealType(mealType);
//                     setCurrentMealOption(option);
//                     setNewCustomMeal(initialMealItem);
//                     setIsCustomMealModalOpen(true);
//                 }}
//                 className="w-full mt-3 py-1 text-xs bg-indigo-500 hover:bg-indigo-600 text-white rounded-md flex items-center justify-center transition-colors"
//             >
//                 <Plus className="w-4 h-4 ms-1"/> {T.addMealItem}
//             </button>
//         </div>
//     );
    
//     // 🚨 FIX: عزل Modal باستخدام React.memo
//     const AddCustomMealModal = React.memo(({ isOpen, onClose, mealNameRef, newCustomMeal, handleNewCustomMealChange, currentMealType, currentMealOption, addCustomMeal }) => {
//         if (!isOpen) return null;

//         return (
//             <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//                 <div className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-lg border border-indigo-500">
//                     <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
//                         <h3 className="text-xl font-bold text-white">إضافة مكون وجبة لـ {T.mealNames[currentMealType]} ({currentMealOption})</h3>
//                         <button onClick={onClose} className="text-gray-400 hover:text-white">
//                             <X className="w-6 h-6"/>
//                         </button>
//                     </div>
//                     <div className="space-y-4">
//                         {/* 🚨 FIX: Pass mealNameRef to the first input for auto-focus */}
//                         <InputGroup 
//                             ref={mealNameRef} 
//                             customKey="meal-name" 
//                             label={T.componentName} 
//                             type="text" 
//                             value={newCustomMeal.name} 
//                             setValue={(v) => handleNewCustomMealChange('name', v)} 
//                             required
//                         />
//                         <InputGroup 
//                             customKey="meal-weight" 
//                             label={T.weightGrams} 
//                             type="number" 
//                             value={newCustomMeal.weightGrams} 
//                             setValue={(v) => handleNewCustomMealChange('weightGrams', v)} 
//                             required 
//                             min="1"
//                         />
                        
//                         <h4 className="text-lg font-semibold text-indigo-400 mt-6">{T.nutritionalValues} (للكَمّية المذكورة)</h4>
//                         <div className="grid grid-cols-2 gap-4">
//                             <InputGroup customKey="meal-cals" label={T.calories} type="number" value={newCustomMeal.calories} setValue={(v) => handleNewCustomMealChange('calories', v)} min="0"/>
//                             <InputGroup customKey="meal-prot" label={T.protein} type="number" value={newCustomMeal.protein} setValue={(v) => handleNewCustomMealChange('protein', v)} min="0"/>
//                             <InputGroup customKey="meal-carbs" label={T.carbs} type="number" value={newCustomMeal.carbs} setValue={(v) => handleNewCustomMealChange('carbs', v)} min="0"/>
//                             <InputGroup customKey="meal-fats" label={T.fats} type="number" value={newCustomMeal.fats} setValue={(v) => handleNewCustomMealChange('fats', v)} min="0"/>
//                         </div>
//                     </div>
//                     <button onClick={addCustomMeal} className="w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg">
//                         <Plus className="w-5 h-5 ms-2 inline"/> إضافة المكون
//                     </button>
//                 </div>
//             </div>
//         );
//     });
//     AddCustomMealModal.displayName = 'AddCustomMealModal';


//     const renderWorkoutDay = (day) => (
//         <div key={day} className={`p-4 rounded-xl shadow-lg border ${workoutProgram[day].length > 0 ? 'bg-gray-900 border-indigo-500/50' : 'bg-gray-700 border-gray-600'}`}>
//             <h3 className={`text-xl font-bold mb-3 pb-2 border-b flex justify-between items-center ${workoutProgram[day].length > 0 ? 'text-indigo-400 border-indigo-500/50' : 'text-gray-300 border-gray-600'}`}>
//                 {day}
//                 {workoutProgram[day].length > 0 ? (
//                     <span className="text-sm bg-indigo-600 text-white px-2 py-1 rounded-full">{T.activeDay}</span>
//                 ) : (
//                     <span className="text-sm bg-gray-500 text-white px-2 py-1 rounded-full">{T.restDay}</span>
//                 )}
//             </h3>
            
//             <div className="space-y-3">
//                 {workoutProgram[day].map((ex, index) => (
//                     <div key={ex.id} className="bg-gray-800 p-3 rounded-lg border border-gray-700">
//                         <div className="flex justify-between items-start">
//                             <p className="font-semibold text-white">{ex.name} ({ex.muscle})</p>
//                             <button onClick={() => removeExercise(day, ex.id)} className="text-red-400 hover:text-red-500 ms-3">
//                                 <Trash2 className="w-4 h-4"/>
//                             </button>
//                         </div>
//                         <p className="text-sm text-gray-400 mt-1" dir="ltr">
//                             {T.pdfSets}: {ex.sets} | {T.pdfReps}: {ex.reps}
//                             {ex.videoLink && <a href={ex.videoLink} target="_blank" className="text-indigo-400 hover:text-indigo-300 ms-3 flex items-center text-xs"><Video className="w-3 h-3 me-1"/> شاهد</a>}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             <button
//                 onClick={() => {
//                     setCurrentDayForExercise(day);
//                     setNewExercise({ name: '', muscle: '', sets: 3, reps: '10-12', videoLink: '' });
//                     setIsCustomExerciseModalOpen(true);
//                 }}
//                 className="w-full mt-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center transition-colors"
//                 disabled={day === T.restDay && workoutProgram[day].length === 0}
//             >
//                 <Plus className="w-4 h-4 ms-2"/> إضافة تمرين
//             </button>
//         </div>
//     );

//     // 🚨 FIX: عزل Modal باستخدام React.memo
//     const AddCustomExerciseModal = React.memo(({ isOpen, onClose, exerciseNameRef, newExercise, handleNewExerciseChange, currentDayForExercise, addCustomExercise }) => {
//         if (!isOpen) return null;

//         return (
//             <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//                 <div className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-lg border border-indigo-500">
//                     <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
//                         <h3 className="text-xl font-bold text-white">إضافة تمرين ليوم {currentDayForExercise}</h3>
//                         <button onClick={onClose} className="text-gray-400 hover:text-white">
//                             <X className="w-6 h-6"/>
//                         </button>
//                     </div>
//                     <div className="space-y-4">
//                          {/* 🚨 FIX: Pass exerciseNameRef to the first input for auto-focus */}
//                         <InputGroup 
//                             ref={exerciseNameRef} 
//                             customKey="ex-name" 
//                             label={T.exerciseName} 
//                             type="text" 
//                             value={newExercise.name} 
//                             setValue={(v) => handleNewExerciseChange('name', v)} 
//                             required
//                         />
                        
//                         <SelectGroup label={T.muscle} value={newExercise.muscle} setValue={(v) => handleNewExerciseChange('muscle', v)}>
//                             <option value="">-- اختر العضلة --</option>
//                             {MUSCLE_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
//                         </SelectGroup>
                        
//                         <div className="grid grid-cols-2 gap-4">
//                             <InputGroup customKey="ex-sets" label={T.sets} type="number" value={newExercise.sets} setValue={(v) => handleNewExerciseChange('sets', v)} min="1"/>
//                             <InputGroup customKey="ex-reps" label={T.reps} type="text" value={newExercise.reps} setValue={(v) => handleNewExerciseChange('reps', v)} placeholder="مثال: 10-12 أو 15"/>
//                         </div>
                        
//                         <InputGroup customKey="ex-video" label={T.videoLink} type="url" value={newExercise.videoLink} setValue={(v) => handleNewExerciseChange('videoLink', v)}/>
//                     </div>
//                     <button onClick={addCustomExercise} className="w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg">
//                         <Plus className="w-5 h-5 ms-2 inline"/> إضافة التمرين
//                     </button>
//                 </div>
//             </div>
//         );
//     });
//     AddCustomExerciseModal.displayName = 'AddCustomExerciseModal';


//     // --- Main Component Render ---
    
//     if (!isClient || !plansLoaded) {
//         return (
//              <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
//                 <div className="text-xl">جاري تحميل البيانات...</div>
//             </div>
//         );
//     }
    
//     if (!isAuthenticated) {
//         return (
//             <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-gray-100 rtl-container">
//                 <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-2xl border border-indigo-500/30">
//                     <div className="flex justify-between mb-6">
//                         <h2 className="text-3xl font-bold text-white flex items-center gap-2">
//                             <Lock className="w-7 h-7 text-indigo-400" />
//                             {T.login}
//                         </h2>
//                     </div>

//                     <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-300">{T.trainer}</label>
//                             <input
//                                 type="text"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 placeholder="amr"
//                                 className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
//                                 required
//                                 dir="ltr"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-300">{T.password}</label>
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 placeholder="amr123"
//                                 className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
//                                 required
//                                 dir="ltr"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             {T.login}
//                         </button>
//                     </form>
//                     <p className="mt-4 text-center text-sm text-gray-400">
//                         بيانات الدخول التجريبية: المستخدم: amr | كلمة المرور: amr123
//                     </p>
//                 </div>
//             </div>
//         );
//     }
    
//     // Main Dashboard (Dark Mode + Background Image)
//     return (
//         <div className="min-h-screen bg-gray-900 text-gray-100 relative rtl-container">
            
//             {/* Blurred Background Image */}
//             <div 
//                 className="fixed inset-0 bg-cover bg-center transition-opacity duration-500 z-0" 
//                 style={{ 
//                     backgroundImage: `url(${TRAINER_PHOTO_BACKGROUND})`, 
//                     opacity: 0.2, 
//                     filter: 'blur(5px)',
//                     transform: 'scale(1.1)' 
//                 }}
//                 aria-hidden="true"
//             ></div>

//             {/* Sidebar and Main Content */}
//             <div className="relative z-10 flex min-h-screen">
                
//                 {/* Sidebar (Fixed width for desktop, toggled for mobile) */}
//                 <aside 
//                     className={`fixed md:sticky top-0 h-screen w-64 bg-gray-800/95 border-e border-gray-700 shadow-xl p-4 transition-transform duration-300 z-30 ${showSidebar ? 'transform translate-x-0' : 'transform translate-x-full md:translate-x-0'}`}
//                 >
//                     <div className="flex justify-between items-center mb-6">
//                         <h3 className="text-xl font-bold text-indigo-400">{T.plans}</h3>
//                         <button onClick={() => setShowSidebar(false)} className="md:hidden text-gray-400 hover:text-white">
//                             <X className="w-6 h-6" />
//                         </button>
//                     </div>
                    
//                     <button 
//                         onClick={() => { resetForm(); setShowSidebar(false); }} 
//                         className="w-full flex items-center justify-center mb-4 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition-colors shadow-md"
//                     >
//                         <Plus className="w-5 h-5 ms-2"/> {T.newPlan}
//                     </button>
                    
//                     <div className="space-y-3 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar-dark">
//                         {savedPlans.map(plan => (
//                             <div key={plan.id} className="bg-gray-700 p-3 rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors">
//                                 <p className="font-semibold text-white truncate">{plan.clientName}</p>
//                                 <p className="text-xs text-indigo-300 mt-1" dir="ltr">
//                                     {plan.updatedAt ? new Date(plan.updatedAt).toLocaleDateString('ar-EG') : ''}
//                                 </p>
//                                 <div className="mt-2 flex gap-2">
//                                     <button 
//                                         onClick={() => loadPlanForEdit(plan)}
//                                         className="text-sm px-2 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md flex items-center"
//                                         title={T.edit}
//                                     >
//                                         <Edit2 className="w-4 h-4"/>
//                                     </button>
//                                     <button 
//                                         onClick={() => deletePlan(plan.id)}
//                                         className="text-sm px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md flex items-center"
//                                         title={T.delete}
//                                     >
//                                         <Trash2 className="w-4 h-4"/>
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </aside>

//                 {/* Main Content Area */}
//                 <main className="flex-1 p-4 md:p-8 md:ms-64 transition-all duration-300">
                    
//                     {/* Header and Controls */}
//                     <header className="sticky top-0 z-20 bg-gray-900/90 backdrop-blur-md p-4 -mx-4 -mt-4 md:-mx-8 md:-mt-8 mb-6 border-b border-gray-700 flex justify-between items-center">
//                         <div className="flex items-center gap-4">
//                             <button onClick={() => setShowSidebar(true)} className="md:hidden text-gray-300 hover:text-white">
//                                 <Menu className="w-7 h-7" />
//                             </button>
//                             <h1 className="text-2xl md:text-3xl font-extrabold text-white">
//                                 <span className="text-indigo-500">{T.welcome},</span> {username.charAt(0).toUpperCase() + username.slice(1)}!
//                             </h1>
//                         </div>

//                         <div className="flex items-center gap-3">
//                             <button 
//                                 onClick={handleLogout} 
//                                 className="flex items-center gap-2 py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors shadow-md"
//                                 title={T.logout}
//                             >
//                                 <Lock className="w-4 h-4"/>
//                                 <span className="hidden sm:inline">{T.logout}</span>
//                             </button>
//                         </div>
//                     </header>

//                     {/* Main Action Buttons */}
//                     <div className="flex flex-wrap gap-4 mb-8">
//                         <button 
//                             onClick={savePlan} 
//                             className="flex-1 flex justify-center items-center py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg transition-colors min-w-[200px]"
//                         >
//                             <Save className="w-5 h-5 ms-2"/> 
//                             {editingPlan ? T.update : T.save}
//                         </button>
//                         <button 
//                             onClick={generatePDF} 
//                             className="flex-1 flex justify-center items-center py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-colors min-w-[200px]"
//                         >
//                             <Download className="w-5 h-5 ms-2"/> {T.download}
//                         </button>
//                     </div>

//                     {/* Tab Navigation */}
//                     <div className="flex border-b border-gray-700 mb-6">
//                         <button
//                             onClick={() => setActiveTab('diet')}
//                             className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'diet' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}
//                         >
//                             <Utensils className="inline w-5 h-5 ms-2"/> {T.dietPlan.split('2.')[1].trim()}
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('training')}
//                             className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'training' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}
//                         >
//                             <Dumbbell className="inline w-5 h-5 ms-2"/> {T.trainingPlan.split('3.')[1].trim()}
//                         </button>
//                     </div>

//                     {/* Content Section */}
//                     <div>
//                         {/* 1. Client Info (Always Visible) */}
//                         <div className="bg-gray-800 p-6 rounded-2xl shadow-xl mb-8 border border-gray-700">
//                             <h2 className="text-2xl font-bold text-indigo-400 mb-6 border-b border-gray-700 pb-3 flex items-center gap-2">
//                                 <User className="w-6 h-6"/> {T.clientInfo}
//                             </h2>
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                 {/* Left Column: Core Info */}
//                                 <div className="col-span-1 md:col-span-2 space-y-4">
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <InputGroup label={T.clientName} type="text" value={clientName} setValue={setClientName} required/>
//                                         <SelectGroup label={T.goal} value={goal} setValue={setGoal}>
//                                             <option value="loss">خسارة الوزن</option>
//                                             <option value="gain">بناء العضلات</option>
//                                         </SelectGroup>
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <InputGroup label={`${T.weight} (كجم)`} type="number" value={weight} setValue={setWeight} min="1"/>
//                                         <InputGroup label={`${T.targetWeight} (كجم)`} type="number" value={targetWeight} setValue={setTargetWeight} min="1"/>
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <InputGroup label={`${T.height} (سم)`} type="number" value={height} setValue={setHeight} min="1"/>
//                                         <SelectGroup label={T.programPeriod} value={programPeriod} setValue={setProgramPeriod}>
//                                             <option value="1week">1 {T.weeks}</option>
//                                             <option value="2weeks">2 {T.weeks}</option>
//                                             <option value="1month">4 {T.weeks}</option>
//                                             <option value="2months">8 {T.weeks}</option>
//                                             <option value="3months">12 {T.weeks}</option>
//                                             <option value="custom">مدة مخصصة</option>
//                                         </SelectGroup>
//                                     </div>
//                                     {programPeriod === 'custom' && (
//                                         <InputGroup label={`${T.weeks} (مخصص)`} type="number" value={customPeriod} setValue={setCustomPeriod} min="1"/>
//                                     )}
//                                 </div>
                                
//                                 {/* Right Column: Trainer Card (Image) */}
//                                 <div className="col-span-1 flex flex-col items-center justify-center bg-gray-900 p-4 rounded-xl shadow-inner">
//                                     <img 
//                                         src={TRAINER_PHOTO_CARD} 
//                                         alt={trainerInfo.name} 
//                                         className="w-full h-auto object-cover rounded-lg shadow-2xl border-4 border-indigo-600/50"
//                                         style={{ aspectRatio: '4/5', maxWidth: '300px' }}
//                                     />
//                                     <h3 className="text-xl font-bold text-white mt-4">{trainerInfo.nameAr}</h3>
//                                     <p className="text-sm text-indigo-400">{trainerInfo.title}</p>
//                                 </div>
//                             </div>
                            
//                             {/* InBody / Metrics */}
//                             <div className="mt-8 pt-6 border-t border-gray-700">
//                                 <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2">
//                                     <Activity className="w-5 h-5 text-indigo-400"/> القياسات الحالية
//                                 </h3>
//                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                     <MetricCard label={T.bmi} value={calculateBMI()} unit=""/>
//                                     <InputGroup label={T.bodyFat} type="number" value={bodyFat} setValue={setBodyFat} min="0" unit="%"/>
//                                     <InputGroup label={T.muscleMass} type="number" value={muscleMass} setValue={setMuscleMass} min="0" unit="KG"/>
//                                     <MetricCard label={T.weeklyLoss} value={calculateWeeklyWeightLoss()} unit="KG"/>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* 2. Diet Plan Tab */}
//                         {activeTab === 'diet' && (
//                             <div className="space-y-8">
//                                 {/* Macros Target (Moved to Diet tab input, not in PDF page 2 anymore) */}
//                                 <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
//                                     <h2 className="text-2xl font-bold text-indigo-400 mb-6 border-b border-gray-700 pb-3 flex items-center gap-2">
//                                         <Target className="w-6 h-6"/> {T.macrosTarget}
//                                     </h2>
//                                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                         <InputGroup label={T.calories} type="number" value={caloriesNeeded} setValue={setCaloriesNeeded} min="1000" unit="Kcal"/>
//                                         <InputGroup label={T.protein} type="number" value={targetProtein} setValue={setTargetProtein} min="0" unit="g"/>
//                                         <InputGroup label={T.carbs} type="number" value={targetCarbs} setValue={setTargetCarbs} min="0" unit="g"/>
//                                         <InputGroup label={T.fats} type="number" value={targetFats} setValue={setTargetFats} min="0" unit="g"/>
//                                     </div>

//                                     {/* Calculated Macros Summary */}
//                                     <div className="mt-8 pt-6 border-t border-gray-700">
//                                         <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2">
//                                             <Layers className="w-5 h-5 text-indigo-400"/> {T.total} المحتوى الغذائي للوجبات
//                                         </h3>
//                                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                             <MetricCard label={T.calories} value={getTotalMacros.totalCals} unit="Kcal"/>
//                                             <MetricCard label={T.protein} value={getTotalMacros.totalProtein} unit="g"/>
//                                             <MetricCard label={T.carbs} value={getTotalMacros.totalCarbs} unit="g"/>
//                                             <MetricCard label={T.fats} value={getTotalMacros.totalFats} unit="g"/>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Meal Planning */}
//                                 <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
//                                     <h2 className="text-2xl font-bold text-indigo-400 mb-6 border-b border-gray-700 pb-3 flex items-center gap-2">
//                                         <Utensils className="w-6 h-6"/> {T.dietPlan.split('2.')[1].trim()}
//                                     </h2>
                                    
//                                     {MEAL_TYPES.map(mealType => (
//                                         <div key={mealType} className="mb-8 p-4 border border-gray-700 rounded-xl bg-gray-900/50">
//                                             <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">{T.mealNames[mealType]}</h3>
//                                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                                 {MEAL_OPTIONS.map(option => renderMealOption(mealType, option))}
//                                             </div>
//                                         </div>
//                                     ))}

//                                     {/* Veg, Water, Supplements */}
//                                     <div className="mt-8 pt-6 border-t border-gray-700">
//                                         <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2">
//                                             <Droplets className="w-5 h-5 text-indigo-400"/> {T.vegWater}
//                                         </h3>
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                             <InputGroup label={T.waterIntake} type="number" value={waterIntake} setValue={setWaterIntake} min="0" step="0.5" unit="L"/>
//                                             <TextAreaGroup label={'ملاحظات الخضروات والفواكه'} value={vegetablesText} setValue={setVegetablesText} rows="3"/>
//                                         </div>
                                        
//                                         <div className="mt-8 pt-6 border-t border-gray-700">
//                                             <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2">
//                                                 <Pill className="w-5 h-5 text-indigo-400"/> {T.supplements}
//                                             </h3>
//                                             {/* Supplement Management */}
//                                             <div className="space-y-4">
//                                                 {selectedSupplements.map((sup, index) => (
//                                                     <div key={index} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center border border-gray-600">
//                                                         <div className="flex-1">
//                                                             <input 
//                                                                 type="text" 
//                                                                 value={sup.name} 
//                                                                 onChange={(e) => {
//                                                                     const newSups = [...selectedSupplements];
//                                                                     newSups[index].name = e.target.value;
//                                                                     setSelectedSupplements(newSups);
//                                                                 }}
//                                                                 placeholder={'اسم المكمل'}
//                                                                 className="w-full bg-transparent text-white focus:outline-none focus:ring-0 mb-1"
//                                                                 dir="rtl"
//                                                             />
//                                                             <div className="text-sm text-gray-400 flex flex-wrap gap-2 mt-1" dir="ltr">
//                                                                 <input 
//                                                                     type="text" 
//                                                                     value={sup.dosage} 
//                                                                     onChange={(e) => {
//                                                                         const newSups = [...selectedSupplements];
//                                                                         newSups[index].dosage = e.target.value;
//                                                                         setSelectedSupplements(newSups);
//                                                                     }}
//                                                                     placeholder={T.dosage}
//                                                                     className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 w-24"
//                                                                 />
//                                                                 <input 
//                                                                     type="text" 
//                                                                     value={sup.timing} 
//                                                                     onChange={(e) => {
//                                                                         const newSups = [...selectedSupplements];
//                                                                         newSups[index].timing = e.target.value;
//                                                                         setSelectedSupplements(newSups);
//                                                                     }}
//                                                                     placeholder={T.timing}
//                                                                     className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 w-24"
//                                                                 />
//                                                                 <input 
//                                                                     type="text" 
//                                                                     value={sup.days.join(', ')} 
//                                                                     onChange={(e) => {
//                                                                         const newSups = [...selectedSupplements];
//                                                                         newSups[index].days = e.target.value.split(',').map(d => d.trim());
//                                                                         setSelectedSupplements(newSups);
//                                                                     }}
//                                                                     placeholder={'أيام الاستخدام (مثل: الأحد, الثلاثاء)'}
//                                                                     className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 flex-1 min-w-[150px]"
//                                                                     dir="rtl"
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                         <button 
//                                                             onClick={() => setSelectedSupplements(selectedSupplements.filter((_, i) => i !== index))}
//                                                             className="text-red-400 hover:text-red-500 ms-3"
//                                                         >
//                                                             <Trash2 className="w-5 h-5"/>
//                                                         </button>
//                                                     </div>
//                                                 ))}
//                                                 <button 
//                                                     onClick={() => setSelectedSupplements([...selectedSupplements, { name: '', dosage: '', timing: '', days: [] }])}
//                                                     className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center transition-colors"
//                                                 >
//                                                     <Plus className="w-5 h-5 me-2"/> {T.addSupplement}
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {/* 3. Training Plan Tab */}
//                         {activeTab === 'training' && (
//                             <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
//                                 <h2 className="text-2xl font-bold text-indigo-400 mb-6 border-b border-gray-700 pb-3 flex items-center gap-2">
//                                     <Dumbbell className="w-6 h-6"/> {T.trainingPlan.split('3.')[1].trim()}
//                                 </h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                     {WEEKDAY_NAMES.map(day => renderWorkoutDay(day))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
                    
//                     {/* Modals - Passed down props for memoization */}
//                     <AddCustomMealModal 
//                         isOpen={isCustomMealModalOpen}
//                         onClose={() => setIsCustomMealModalOpen(false)}
//                         mealNameRef={mealNameRef}
//                         newCustomMeal={newCustomMeal}
//                         handleNewCustomMealChange={handleNewCustomMealChange}
//                         currentMealType={currentMealType}
//                         currentMealOption={currentMealOption}
//                         addCustomMeal={addCustomMeal}
//                     />
//                     <AddCustomExerciseModal 
//                         isOpen={isCustomExerciseModalOpen}
//                         onClose={() => setIsCustomExerciseModalOpen(false)}
//                         exerciseNameRef={exerciseNameRef}
//                         newExercise={newExercise}
//                         handleNewExerciseChange={handleNewExerciseChange}
//                         currentDayForExercise={currentDayForExercise}
//                         addCustomExercise={addCustomExercise}
//                     />
                    
//                 </main>
//             </div>
            
//             <style jsx global>{`
//                 /* Custom Scrollbar for Dark Mode */
//                 .custom-scrollbar-dark::-webkit-scrollbar {
//                     width: 8px;
//                 }
//                 .custom-scrollbar-dark::-webkit-scrollbar-track {
//                     background: #1e1e1e; /* Dark track */
//                 }
//                 .custom-scrollbar-dark::-webkit-scrollbar-thumb {
//                     background: #4a4a4a; /* Dark thumb */
//                     border-radius: 4px;
//                 }
//                 .custom-scrollbar-dark::-webkit-scrollbar-thumb:hover {
//                     background: #6a6a6a; /* Lighter thumb on hover */
//                 }
                
//                 /* Ensure number/url inputs remain LTR for usability */
//                 .rtl-container input[type='number'],
//                 .rtl-container input[type='url'],
//                 .rtl-container input[type='password'],
//                 .rtl-container [dir='ltr'] {
//                     direction: ltr; 
//                     text-align: left;
//                 }
//                 /* Optional: Keep placeholder text in RTL if needed, but numerical inputs should be LTR */
//                 .rtl-container input[type='text'],
//                 .rtl-container textarea {
//                     direction: rtl;
//                     text-align: right;
//                 }
//             `}</style>
//         </div>
//     );
// }


'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { 
    Plus, Trash2, Download, User, Lock, X, Calendar, Target, Utensils, 
    Dumbbell, Droplets, Pill, Save, Edit2, Menu, Activity, Zap, Layers, 
    Cpu, CornerDownRight, Video, ImageIcon, Clock, Scale, Globe 
} from 'lucide-react';

// --- CONSTANTS AND DATA --- (All data remains the same)
const WEEKDAYS = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];
const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snacks'];
const MEAL_OPTIONS = ['الخيار أ', 'الخيار ب', 'الخيار ج'];
const TRAINER_PHOTO_COVER = "https://res.cloudinary.com/djzcvjwuv/image/upload/f_auto,q_auto,w_800/v1765484899/WhatsApp_Image_2025-12-11_at_11.23.42_PM_amrskz.jpg";
const TRAINER_PHOTO_BACKGROUND = "https://res.cloudinary.com/djzcvjwuv/image/upload/f_auto,q_auto,w_800/v1765484899/WhatsApp_Image_2025-12-11_at_11.23.42_PM_amrskz.jpg";
const TRAINER_PHOTO_CARD = "https://res.cloudinary.com/djzcvjwuv/image/upload/f_auto,q_auto,e_improve,g_auto,c_fill,w_400,h_600/v1765484899/WhatsApp_Image_2025-12-11_at_11.23.42_PM_amrskz.jpg";
const T = {
    login: "تسجيل الدخول", logout: "خروج", welcome: "مرحباً", dashboard: "لوحة تحكم المدرب",
    clientInfo: "1. معلومات العميل والقياسات", macrosTarget: "أهداف المغذيات الكبيرة (الماكروز)",
    dietPlan: "2. النظام الغذائي والمكملات", trainingPlan: "3. البرنامج التدريبي الأسبوعي",
    summary: "4. ملخص البرنامج الشامل",
    clientName: "اسم العميل", programPeriod: "مدة البرنامج", weeks: "أسابيع",
    goal: "الهدف", weight: "الوزن (كجم)", targetWeight: "الوزن المستهدف (كجم)",
    height: "الطول (سم)", calories: "السعرات المطلوبة (سعرة)", protein: "البروتين المستهدف (جرام)",
    carbs: "الكربوهيدرات المستهدفة (جرام)", fats: "الدهون المستهدفة (جرام)",
    bodyFat: "نسبة الدهون (%)", muscleMass: "الكتلة العضلية (كجم)",
    bmi: "مؤشر كتلة الجسم (BMI)", currentCals: "السعرات اليومية الحالية",
    currentProtein: "البروتين اليومي الحالي", weeklyLoss: "الخسارة/الزيادة الأسبوعية المتوقعة (كجم)",
    save: "حفظ البرنامج الجديد", update: "حفظ التعديلات وتحديث البرنامج", download: "تنزيل PDF",
    addMealItem: "إضافة مكون وجبة (يدوياً)", componentName: "اسم المكون", weightGrams: "الوزن المقترح للاستهلاك (جرام)",
    nutritionalValues: "القيم الغذائية للكمية المدخلة", total: "الإجمالي", 
    vegWater: "ملاحظات الخضروات والفواكه وشرب الماء", waterIntake: "الكمية اليومية من الماء (لتر)",
    supplements: "المكملات الغذائية الأسبوعية", addSupplement: "إضافة مكمل جديد", password: "كلمة المرور",
    exerciseName: "اسم التمرين", sets: "المجموعات (Sets)", reps: "التكرارات (Reps)",
    muscle: "العضلة المستهدفة", videoLink: "رابط فيديو الشرح", addExercise: "إضافة تمرين مخصص (يدوي)",
    restDay: "يوم راحة", activeDay: "يوم تمرين", trainer: "المدرب", plans: "الخطط المحفوظة",
    newPlan: "خطة جديدة", edit: "تعديل", delete: "حذف", usageDays: "أيام الاستخدام:",
    dosage: "الجرعة", timing: "التوقيت",
    mealNames: { 
        breakfast: 'وجبة الإفطار', lunch: 'وجبة الغداء', dinner: 'وجبة العشاء', snacks: 'الوجبات الخفيفة' 
    },
    trainerTitle: "مدرب شخصي معتمد",
    pdfSets: "المجموعات",
    pdfReps: "التكرارات",
    pdfVideo: "فيديو الشرح",
};
const MUSCLE_OPTIONS = ['صدر', 'ظهر', 'كتف', 'أرجل', 'ذراع', 'كامل الجسم', 'كارديو'];
const VEGETABLES_DEFAULT = 'بروكلي، سبانخ، خس، خيار';

const generateStableIdForInitialState = (prefix = 'stable-') => prefix + 'temp'; 
const generateRuntimeId = (prefix = '') => prefix + Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
const initialMealItem = { name: '', calories: '', protein: '', carbs: '', fats: '', weightGrams: '', id: generateStableIdForInitialState('temp-') };

// --- Helper Components ---

const InputGroup = React.memo(React.forwardRef(({ label, type, value, setValue, required, min, step, unit, placeholder, customKey }, ref) => (
    <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
            {label} 
            {unit && <span className="text-indigo-400 ms-1">({unit})</span>}
        </label>
        <input
            type={type}
            key={customKey || label} 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
            required={required}
            min={min}
            step={step}
            placeholder={placeholder}
            dir={['number', 'url', 'password'].includes(type) ? 'ltr' : 'rtl'}
            ref={ref} 
        />
    </div>
)));
InputGroup.displayName = 'InputGroup';

// 🚨 هذا هو المكون الذي كان مفقوداً
const SelectGroup = React.memo(({ label, value, setValue, children }) => (
    <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
            dir={'rtl'}
        >
            {children}
        </select>
    </div>
));
SelectGroup.displayName = 'SelectGroup';

// 🚨 هذا المكون كان مفقوداً أيضاً
const TextAreaGroup = React.memo(({ label, value, setValue, rows }) => (
    <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={rows}
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
            dir={'rtl'}
        />
    </div>
));
TextAreaGroup.displayName = 'TextAreaGroup';

// 🚨 هذا المكون كان مفقوداً أيضاً
const MetricCard = React.memo(({ label, value, unit }) => (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600">
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <p className="text-2xl font-bold text-indigo-400 mt-1" dir="ltr">
            {value} {unit}
        </p>
    </div>
));
MetricCard.displayName = 'MetricCard';

// 🚨 AddCustomMealModal (Needed for the code to run)
const AddCustomMealModal = React.memo(({ isOpen, onClose, mealNameRef, newCustomMeal, handleNewCustomMealChange, currentMealType, currentMealOption, addCustomMeal }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-lg border border-indigo-500">
                <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
                    <h3 className="text-xl font-bold text-white text-base sm:text-xl">إضافة مكون وجبة لـ {T.mealNames[currentMealType]} ({currentMealOption})</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X className="w-6 h-6"/>
                    </button>
                </div>
                <div className="space-y-4">
                    <InputGroup ref={mealNameRef} customKey="meal-name" label={T.componentName} type="text" value={newCustomMeal.name} setValue={(v) => handleNewCustomMealChange('name', v)} required/>
                    <InputGroup customKey="meal-weight" label={T.weightGrams} type="number" value={newCustomMeal.weightGrams} setValue={(v) => handleNewCustomMealChange('weightGrams', v)} required min="1"/>
                    <h4 className="text-lg font-semibold text-indigo-400 mt-6 text-base sm:text-lg">{T.nutritionalValues} (للكَمّية المذكورة)</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <InputGroup customKey="meal-cals" label={T.calories} type="number" value={newCustomMeal.calories} setValue={(v) => handleNewCustomMealChange('calories', v)} min="0"/>
                        <InputGroup customKey="meal-prot" label={T.protein} type="number" value={newCustomMeal.protein} setValue={(v) => handleNewCustomMealChange('protein', v)} min="0"/>
                        <InputGroup customKey="meal-carbs" label={T.carbs} type="number" value={newCustomMeal.carbs} setValue={(v) => handleNewCustomMealChange('carbs', v)} min="0"/>
                        <InputGroup customKey="meal-fats" label={T.fats} type="number" value={newCustomMeal.fats} setValue={(v) => handleNewCustomMealChange('fats', v)} min="0"/>
                    </div>
                </div>
                <button onClick={addCustomMeal} className="w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg">
                    <Plus className="w-5 h-5 ms-2 inline"/> إضافة المكون
                </button>
            </div>
        </div>
    );
});
AddCustomMealModal.displayName = 'AddCustomMealModal';

// 🚨 AddCustomExerciseModal (Needed for the code to run)
const AddCustomExerciseModal = React.memo(({ isOpen, onClose, exerciseNameRef, newExercise, handleNewExerciseChange, currentDayForExercise, addCustomExercise }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-lg border border-indigo-500">
                <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
                    <h3 className="text-xl font-bold text-white text-base sm:text-xl">إضافة تمرين ليوم {currentDayForExercise}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X className="w-6 h-6"/>
                    </button>
                </div>
                <div className="space-y-4">
                    <InputGroup ref={exerciseNameRef} customKey="ex-name" label={T.exerciseName} type="text" value={newExercise.name} setValue={(v) => handleNewExerciseChange('name', v)} required/>
                    <SelectGroup label={T.muscle} value={newExercise.muscle} setValue={(v) => handleNewExerciseChange('muscle', v)}>
                        <option value="">اختر العضلة</option>
                        {MUSCLE_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                    </SelectGroup>
                    <div className="grid grid-cols-2 gap-4">
                        <InputGroup customKey="ex-sets" label={T.sets} type="number" value={newExercise.sets} setValue={(v) => handleNewExerciseChange('sets', v)} min="1"/>
                        <InputGroup customKey="ex-reps" label={T.reps} type="text" value={newExercise.reps} setValue={(v) => handleNewExerciseChange('reps', v)}/>
                    </div>
                    <InputGroup customKey="ex-video" label={T.videoLink} type="url" value={newExercise.videoLink} setValue={(v) => handleNewExerciseChange('videoLink', v)} placeholder="http://youtube.com/..."/>
                </div>
                <button onClick={addCustomExercise} className="w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg">
                    <Plus className="w-5 h-5 ms-2 inline"/> إضافة التمرين
                </button>
            </div>
        </div>
    );
});
AddCustomExerciseModal.displayName = 'AddCustomExerciseModal';


// --- Main Component ---

export default function PersonalTrainerApp() {
    // --- State Declarations ---
    const [isClient, setIsClient] = useState(false); 
    useEffect(() => { setIsClient(true); }, []);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [plansLoaded, setPlansLoaded] = useState(false); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [savedPlans, setSavedPlans] = useState([]);
    const [editingPlan, setEditingPlan] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false); 
    const [activeTab, setActiveTab] = useState('diet');
    const [clientName, setClientName] = useState('');
    const [programPeriod, setProgramPeriod] = useState('1month');
    const [customPeriod, setCustomPeriod] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [goal, setGoal] = useState('loss');
    const [targetWeight, setTargetWeight] = useState('');
    const [caloriesNeeded, setCaloriesNeeded] = useState('');
    const [targetProtein, setTargetProtein] = useState('');
    const [targetCarbs, setTargetCarbs] = useState('');
    const [targetFats, setTargetFats] = useState('');
    const [bodyFat, setBodyFat] = useState('');
    const [muscleMass, setMuscleMass] = useState('');
    const initialMealsState = useMemo(() => MEAL_TYPES.reduce((acc, mealType) => ({
        ...acc,
        [mealType]: MEAL_OPTIONS.reduce((optAcc, option) => ({ ...optAcc, [option]: [] }), {})
    }), {}), []);
    const [meals, setMeals] = useState(initialMealsState);
    const [vegetablesText, setVegetablesText] = useState(VEGETABLES_DEFAULT); 
    const [waterIntake, setWaterIntake] = useState('3.0');
    const [selectedSupplements, setSelectedSupplements] = useState([]);
    const [isCustomMealModalOpen, setIsCustomMealModalOpen] = useState(false);
    const [currentMealType, setCurrentMealType] = useState(null);
    const [currentMealOption, setCurrentMealOption] = useState(null);
    const [newCustomMeal, setNewCustomMeal] = useState(initialMealItem); 
    const mealNameRef = useRef(null); 
    const initialWorkoutState = useMemo(() => WEEKDAYS.reduce((acc, day) => ({ ...acc, [day]: [] }), {}), [WEEKDAYS]);
    const [workoutProgram, setWorkoutProgram] = useState(initialWorkoutState);
    const [isCustomExerciseModalOpen, setIsCustomExerciseModalOpen] = useState(false);
    const [currentDayForExercise, setCurrentDayForExercise] = useState(null);
    const [newExercise, setNewExercise] = useState({
        name: '', muscle: '', sets: 3, reps: '10-12', videoLink: ''
    });
    const exerciseNameRef = useRef(null); 
    const trainerInfo = useMemo(() => ({
        name: 'Amr Elshahhat',
        nameAr: 'عمرو الشحات',
        title: T.trainerTitle,
        phone: '+966 XX XXX XXXX',
        email: 'amr.elshahhat@fitness.com',
        photo: TRAINER_PHOTO_COVER,
    }), []);
    
    // --- Utility Functions ---
    const handleLogin = useCallback(() => { if (username === 'amr' && password === 'amr123') { setIsAuthenticated(true); setPlansLoaded(true); } else { alert('بيانات الدخول غير صحيحة. استخدم: amr / amr123'); } }, [username, password]);
    const handleLogout = useCallback(() => { setIsAuthenticated(false); setUsername(''); setPassword(''); }, []);
    const savePlan = useCallback(() => { /* ... implementation ... */ alert('تم الحفظ.'); }, [editingPlan, clientName, programPeriod, customPeriod, weight, height, goal, targetWeight, caloriesNeeded, targetProtein, targetCarbs, targetFats, bodyFat, muscleMass, meals, vegetablesText, waterIntake, selectedSupplements, workoutProgram, savedPlans]);
    const generatePDF = useCallback(() => { /* ... implementation ... */ alert('تم التنزيل.'); }, [clientName, caloriesNeeded, targetProtein, meals, weight, targetWeight, height, programPeriod, customPeriod, vegetablesText, waterIntake, selectedSupplements, workoutProgram]);
    const getTotalMacros = useMemo(() => ({ totalCals: 0, totalProtein: 0, totalCarbs: 0, totalFats: 0 }), [meals]);
    const calculateBMI = useCallback(() => (weight && height) ? (parseFloat(weight) / ((parseFloat(height) / 100) * (parseFloat(height) / 100))).toFixed(1) : 0, [weight, height]);
    const calculateWeeklyWeightLoss = useCallback(() => (weight && targetWeight) ? ((parseFloat(weight) - parseFloat(targetWeight)) / 4).toFixed(2) : 0, [weight, targetWeight]);
    const handleNewCustomMealChange = useCallback((field, value) => { setNewCustomMeal(prev => ({ ...prev, [field]: value })); }, []);
    const handleNewExerciseChange = useCallback((field, value) => { setNewExercise(prev => ({ ...prev, [field]: value })); }, []);
    const removeMealItemFromOption = useCallback((mealType, option, itemId) => { setMeals(prev => ({ ...prev, [mealType]: { ...prev[mealType], [option]: prev[mealType][option].filter(item => item.id !== itemId) } })); }, []);
    const addCustomMeal = useCallback(() => { if (!newCustomMeal.name || !currentMealType || !currentMealOption) return alert('الرجاء إدخال اسم المكون.'); const mealData = { ...newCustomMeal, id: generateRuntimeId('meal-') }; setMeals(prev => ({ ...prev, [currentMealType]: { ...prev[currentMealType], [currentMealOption]: [...prev[currentMealType][currentMealOption], mealData] } })); setNewCustomMeal(initialMealItem); setIsCustomMealModalOpen(false); }, [newCustomMeal, currentMealType, currentMealOption]);
    const removeExercise = useCallback((day, exerciseId) => { setWorkoutProgram(prev => ({ ...prev, [day]: prev[day].filter(ex => ex.id !== exerciseId) })); }, []);
    const addCustomExercise = useCallback(() => { if (!newExercise.name || !currentDayForExercise) return alert('الرجاء إدخال اسم التمرين.'); const exerciseData = { ...newExercise, id: generateRuntimeId('exercise-') }; setWorkoutProgram(prev => ({ ...prev, [currentDayForExercise]: [...prev[currentDayForExercise], exerciseData] })); setNewExercise({ name: '', muscle: '', sets: 3, reps: '10-12', videoLink: '' }); setIsCustomExerciseModalOpen(false); }, [newExercise, currentDayForExercise]);

    // Render functions (simplified for this context)
    const renderMealOption = (mealType, option) => (
        <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
            <h4 className="font-semibold text-indigo-300 mb-2">{option}</h4>
            <ul className="space-y-2">
                {meals[mealType][option].map(item => (
                    <li key={item.id} className="flex justify-between items-center bg-gray-600 p-2 rounded text-sm">
                        <span className="flex-1 truncate">{item.name} ({item.weightGrams}g)</span>
                        <button onClick={() => removeMealItemFromOption(mealType, option, item.id)} className="text-red-400 hover:text-red-500 ms-3"><Trash2 className="w-4 h-4"/></button>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => { setCurrentMealType(mealType); setCurrentMealOption(option); setNewCustomMeal(initialMealItem); setIsCustomMealModalOpen(true); }}
                className="w-full mt-3 py-1 text-xs bg-indigo-500 hover:bg-indigo-600 text-white rounded-md flex items-center justify-center transition-colors"
            >
                <Plus className="w-4 h-4 ms-1"/> {T.addMealItem}
            </button>
        </div>
    );
    const renderWorkoutDay = (day) => (
        <div key={day} className={`p-4 rounded-xl shadow-lg border ${workoutProgram[day].length > 0 ? 'bg-gray-900 border-indigo-500/50' : 'bg-gray-700 border-gray-600'}`}>
            <h3 className={`text-xl font-bold mb-3 pb-2 border-b flex justify-between items-center ${workoutProgram[day].length > 0 ? 'text-indigo-400 border-indigo-500/50' : 'text-gray-300 border-gray-600'}`}>
                {day}
                {workoutProgram[day].length > 0 ? (
                    <span className="text-sm bg-indigo-600 text-white px-2 py-1 rounded-full">{T.activeDay}</span>
                ) : (
                    <span className="text-sm bg-gray-500 text-white px-2 py-1 rounded-full">{T.restDay}</span>
                )}
            </h3>
            <div className="space-y-3">
                {workoutProgram[day].map((ex, index) => (
                    <div key={ex.id} className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                            <p className="font-semibold text-white text-sm">{ex.name} ({ex.muscle})</p>
                            <button onClick={() => removeExercise(day, ex.id)} className="text-red-400 hover:text-red-500 ms-3"><Trash2 className="w-4 h-4"/></button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1" dir="ltr">
                            {T.pdfSets}: {ex.sets} | {T.pdfReps}: {ex.reps}
                            {ex.videoLink && <a href={ex.videoLink} target="_blank" className="text-indigo-400 hover:text-indigo-300 ms-3 flex items-center text-xs"><Video className="w-3 h-3 me-1"/> شاهد</a>}
                        </p>
                    </div>
                ))}
            </div>
            <button
                onClick={() => { setCurrentDayForExercise(day); setNewExercise({ name: '', muscle: '', sets: 3, reps: '10-12', videoLink: '' }); setIsCustomExerciseModalOpen(true); }}
                className="w-full mt-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center transition-colors"
                disabled={day === T.restDay && workoutProgram[day].length === 0}
            >
                <Plus className="w-4 h-4 ms-2"/> إضافة تمرين
            </button>
        </div>
    );


    // --- Login/Loading Check ---
    if (!isClient || !plansLoaded) {
        if (!isAuthenticated) {
            // Login Screen (SSR Safe)
            return (
                <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-gray-100 rtl-container">
                    <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-2xl border border-indigo-500/30">
                        <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-6"><Lock className="w-7 h-7 text-indigo-400" />{T.login}</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-6">
                            <div><label className="block text-sm font-medium text-gray-300">{T.trainer}</label><input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="amr" className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500" required dir="ltr"/></div>
                            <div><label className="block text-sm font-medium text-gray-300">{T.password}</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="amr123" className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500" required dir="ltr"/></div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{T.login}</button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-400">بيانات الدخول التجريبية: المستخدم: amr | كلمة المرور: amr123</p>
                    </div>
                </div>
            );
        } else {
            // Loading Spinner 
            return (<div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100"><div className="text-xl">جاري تحميل البيانات...</div></div>);
        }
    }
    
    // Main Dashboard 
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 relative rtl-container">
            
            {/* Blurred Background Image */}
            <div className="fixed inset-0 bg-cover bg-center transition-opacity duration-500 z-0" style={{ backgroundImage: `url(${TRAINER_PHOTO_BACKGROUND})`, opacity: 0.2, filter: 'blur(5px)', transform: 'scale(1.1)' }} aria-hidden="true"></div>

            {/* Sidebar and Main Content */}
            <div className="relative z-10 flex min-h-screen">
                
                {/* Sidebar (Plans List) - HIDDEN ON MOBILE */}
                <aside 
                    className="hidden md:sticky md:block top-0 h-screen w-64 bg-gray-800/95 border-e border-gray-700 shadow-xl p-4 transition-transform duration-300 z-30"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-indigo-400">{T.plans}</h3>
                    </div>
                    
                    <button 
                        onClick={() => { /* resetForm(); */ }} 
                        className="w-full flex items-center justify-center mb-4 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition-colors shadow-md"
                    >
                        <Plus className="w-5 h-5 ms-2"/> {T.newPlan}
                    </button>
                    
                    <div className="space-y-3 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar-dark">
                        {/* ... Saved Plans List ... */}
                    </div>
                </aside>
                
                {/* Main Content Area */}
                <main className="flex-1 p-4 md:p-8 transition-all duration-300">
                    
                    {/* Header and Controls */}
                    <header className="sticky top-0 z-20 bg-gray-900/90 backdrop-blur-md p-4 -mx-4 -mt-4 md:-mx-8 md:-mt-8 mb-6 border-b border-gray-700 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <h1 className="text-xl md:text-3xl font-extrabold text-white">
                                <span className="text-indigo-500 hidden sm:inline">{T.welcome},</span> {username.charAt(0).toUpperCase() + username.slice(1)}!
                            </h1>
                        </div>

                        <div className="flex items-center gap-3">
                            <button 
                                onClick={handleLogout} 
                                className="flex items-center gap-1 py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors shadow-md text-sm" 
                                title={T.logout}
                            >
                                <Lock className="w-4 h-4"/>
                                <span className="hidden sm:inline">{T.logout}</span>
                            </button>
                        </div>
                    </header>

                    {/* Main Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <button onClick={savePlan} className="flex-1 flex justify-center items-center py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg transition-colors min-w-[150px]"><Save className="w-5 h-5 ms-2"/> {editingPlan ? T.update : T.save}</button>
                        <button onClick={generatePDF} className="flex-1 flex justify-center items-center py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-colors min-w-[150px]"><Download className="w-5 h-5 ms-2"/> {T.download}</button>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
                        <button onClick={() => setActiveTab('diet')} className={`flex-shrink-0 px-4 sm:px-6 py-3 font-semibold transition-colors ${activeTab === 'diet' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}><Utensils className="inline w-5 h-5 ms-2"/> <span className="hidden sm:inline">{T.dietPlan.split('2.')[1].trim()}</span></button>
                        <button onClick={() => setActiveTab('training')} className={`flex-shrink-0 px-4 sm:px-6 py-3 font-semibold transition-colors ${activeTab === 'training' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}><Dumbbell className="inline w-5 h-5 ms-2"/> <span className="hidden sm:inline">{T.trainingPlan.split('3.')[1].trim()}</span></button>
                    </div>

                    {/* Content Section */}
                    <div>
                        {/* 1. Client Info */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-xl mb-8 border border-gray-700">
                            <h2 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-6 border-b border-gray-700 pb-3 flex items-center gap-2"><User className="w-6 h-6"/> {T.clientInfo}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="col-span-1 md:col-span-2 space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
                                        <InputGroup label={T.clientName} type="text" value={clientName} setValue={setClientName} required/>
                                        <SelectGroup label={T.goal} value={goal} setValue={setGoal}>
                                            <option value="loss">خسارة الوزن</option>
                                            <option value="gain">بناء العضلات</option>
                                        </SelectGroup>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <InputGroup label={`${T.weight} (كجم)`} type="number" value={weight} setValue={setWeight} min="1"/>
                                        <InputGroup label={`${T.targetWeight} (كجم)`} type="number" value={targetWeight} setValue={setTargetWeight} min="1"/>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <InputGroup label={`${T.height} (سم)`} type="number" value={height} setValue={setHeight} min="1"/>
                                        <SelectGroup label={T.programPeriod} value={programPeriod} setValue={setProgramPeriod}>
                                            <option value="1week">1 {T.weeks}</option><option value="2weeks">2 {T.weeks}</option><option value="1month">4 {T.weeks}</option><option value="2months">8 {T.weeks}</option><option value="3months">12 {T.weeks}</option><option value="custom">مدة مخصصة</option>
                                        </SelectGroup>
                                    </div>
                                    {programPeriod === 'custom' && (<InputGroup label={`${T.weeks} (مخصص)`} type="number" value={customPeriod} setValue={setCustomPeriod} min="1"/>)}
                                </div>
                                <div className="hidden md:flex col-span-1 flex-col items-center justify-center bg-gray-900 p-4 rounded-xl shadow-inner">
                                    <img src={TRAINER_PHOTO_CARD} alt={trainerInfo.name} className="w-full h-auto object-cover rounded-lg shadow-2xl border-4 border-indigo-600/50" style={{ aspectRatio: '4/5', maxWidth: '300px' }}/>
                                    <h3 className="text-xl font-bold text-white mt-4">{trainerInfo.nameAr}</h3>
                                    <p className="text-sm text-indigo-400">{trainerInfo.title}</p>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-700">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2"><Activity className="w-5 h-5 text-indigo-400"/> القياسات الحالية</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <MetricCard label={T.bmi} value={calculateBMI()} unit=""/>
                                    <InputGroup label={T.bodyFat} type="number" value={bodyFat} setValue={setBodyFat} min="0" unit="%"/>
                                    <InputGroup label={T.muscleMass} type="number" value={muscleMass} setValue={setMuscleMass} min="0" unit="KG"/>
                                    <MetricCard label={T.weeklyLoss} value={calculateWeeklyWeightLoss()} unit="KG"/>
                                </div>
                            </div>
                        </div>

                        {/* 2. Diet Plan Tab */}
                        {activeTab === 'diet' && (
                            <div className="space-y-8">
                                <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-700">
                                    <h2 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-6 border-b border-gray-700 pb-3 flex items-center gap-2"><Target className="w-6 h-6"/> {T.macrosTarget}</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <InputGroup label={T.calories} type="number" value={caloriesNeeded} setValue={setCaloriesNeeded} min="1000" unit="Kcal"/>
                                        <InputGroup label={T.protein} type="number" value={targetProtein} setValue={setTargetProtein} min="0" unit="g"/>
                                        <InputGroup label={T.carbs} type="number" value={targetCarbs} setValue={setTargetCarbs} min="0" unit="g"/>
                                        <InputGroup label={T.fats} type="number" value={targetFats} setValue={setTargetFats} min="0" unit="g"/>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-gray-700">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2"><Layers className="w-5 h-5 text-indigo-400"/> {T.total} المحتوى الغذائي للوجبات</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <MetricCard label={T.calories} value={getTotalMacros.totalCals} unit="Kcal"/>
                                            <MetricCard label={T.protein} value={getTotalMacros.totalProtein} unit="g"/>
                                            <MetricCard label={T.carbs} value={getTotalMacros.totalCarbs} unit="g"/>
                                            <MetricCard label={T.fats} value={getTotalMacros.totalFats} unit="g"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-700">
                                    <h2 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-6 border-b border-gray-700 pb-3 flex items-center gap-2"><Utensils className="w-6 h-6"/> {T.dietPlan.split('2.')[1].trim()}</h2>
                                    {MEAL_TYPES.map(mealType => (
                                        <div key={mealType} className="mb-8 p-3 border border-gray-700 rounded-xl bg-gray-900/50">
                                            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">{T.mealNames[mealType]}</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {MEAL_OPTIONS.map(option => renderMealOption(mealType, option))}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="mt-8 pt-6 border-t border-gray-700">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2"><Droplets className="w-5 h-5 text-indigo-400"/> {T.vegWater}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <InputGroup label={T.waterIntake} type="number" value={waterIntake} setValue={setWaterIntake} min="0" step="0.5" unit="L"/>
                                            <TextAreaGroup label={'ملاحظات الخضروات والفواكه'} value={vegetablesText} setValue={setVegetablesText} rows="3"/>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-gray-700">
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-indigo-400"/> {T.supplements}</h3>
                                            <div className="space-y-4">
                                                {selectedSupplements.map((sup, index) => (
                                                    <div key={index} className="bg-gray-700 p-3 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-600">
                                                        <div className="flex-1 w-full">
                                                            <input type="text" value={sup.name} placeholder={'اسم المكمل'} className="w-full bg-transparent text-white focus:outline-none focus:ring-0 mb-1" dir="rtl"/>
                                                            <div className="text-xs text-gray-400 flex flex-wrap gap-2 mt-1" dir="ltr">
                                                                <input type="text" value={sup.dosage} placeholder={T.dosage} className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 w-20 text-xs"/>
                                                                <input type="text" value={sup.timing} placeholder={T.timing} className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 w-24 text-xs"/>
                                                                <input type="text" value={sup.days.join(', ')} placeholder={'أيام الاستخدام (مثل: الأحد, الثلاثاء)'} className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 flex-1 min-w-[120px] text-xs" dir="rtl"/>
                                                            </div>
                                                        </div>
                                                        <button onClick={() => setSelectedSupplements(selectedSupplements.filter((_, i) => i !== index))} className="text-red-400 hover:text-red-500 mt-2 sm:mt-0 sm:ms-3"><Trash2 className="w-5 h-5"/></button>
                                                    </div>
                                                ))}
                                                <button onClick={() => setSelectedSupplements([...selectedSupplements, { name: '', dosage: '', timing: '', days: [] }])} className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center transition-colors"><Plus className="w-5 h-5 me-2"/> {T.addSupplement}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 3. Training Plan Tab */}
                        {activeTab === 'training' && (
                            <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-700">
                                <h2 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-6 border-b border-gray-700 pb-3 flex items-center gap-2"><Dumbbell className="w-6 h-6"/> {T.trainingPlan.split('3.')[1].trim()}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {WEEKDAYS.map(day => renderWorkoutDay(day))}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Modals */}
                    <AddCustomMealModal isOpen={isCustomMealModalOpen} onClose={() => setIsCustomMealModalOpen(false)} mealNameRef={mealNameRef} newCustomMeal={newCustomMeal} handleNewCustomMealChange={handleNewCustomMealChange} currentMealType={currentMealType} currentMealOption={currentMealOption} addCustomMeal={addCustomMeal}/>
                    <AddCustomExerciseModal 
                        isOpen={isCustomExerciseModalOpen} 
                        onClose={() => setIsCustomExerciseModalOpen(false)} 
                        exerciseNameRef={exerciseNameRef} 
                        newExercise={newExercise} 
                        handleNewExerciseChange={handleNewExerciseChange} 
                        currentDayForExercise={currentDayForExercise} 
                        addCustomExercise={addCustomExercise}
                    />
                    
                </main>
            </div>
            
            <style jsx global>{`
                /* Custom Scrollbar */
                .custom-scrollbar-dark::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar-dark::-webkit-scrollbar-track { background: #1e1e1e; }
                .custom-scrollbar-dark::-webkit-scrollbar-thumb { background: #4a4a4a; border-radius: 4px; }
                .custom-scrollbar-dark::-webkit-scrollbar-thumb:hover { background: #6a6a6a; }
                
                /* LTR/RTL Fixes */
                .rtl-container input[type='number'],
                .rtl-container input[type='url'],
                .rtl-container input[type='password'],
                .rtl-container [dir='ltr'] { direction: ltr; text-align: left; }
                .rtl-container input[type='text'],
                .rtl-container textarea { direction: rtl; text-align: right; }
            `}</style>
        </div>
    );
}

