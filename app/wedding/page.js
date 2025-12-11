
'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { Plus, Trash2, Download, User, Lock, X, Calendar, Target, Utensils, Dumbbell, Droplets, Pill, Save, Edit2, Menu, Activity, Zap, Layers, Cpu, CornerDownRight, Video, ImageIcon } from 'lucide-react';

// --- DATA STRUCTURES ---

const WEEKDAYS = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];
const MEAL_OPTIONS = ['Option A', 'Option B', 'Option C'];

// Pre-configured meals database (Saudi Arabia focused)
const MEALS_DATABASE = {
  breakfast: [
    { name: 'شوفان بالحليب والعسل', nameEn: 'Oatmeal with Milk & Honey', calories: 350, protein: 12, carbs: 58, fats: 8, image: '🥣' },
    { name: 'بيض مسلوق مع خبز أسمر', nameEn: 'Boiled Eggs with Brown Bread', calories: 320, protein: 18, carbs: 35, fats: 12, image: '🥚' },
    { name: 'فول مدمس بالزيت', nameEn: 'Foul Medames', calories: 280, protein: 14, carbs: 38, fats: 8, image: '🍲' },
    { name: 'بان كيك بروتين', nameEn: 'Protein Pancakes', calories: 380, protein: 25, carbs: 45, fats: 10, image: '🥞' }
  ],
  lunch: [
    { name: 'صدر دجاج مشوي مع أرز بني', nameEn: 'Grilled Chicken with Brown Rice', calories: 520, protein: 45, carbs: 55, fats: 12, image: '🍗' },
    { name: 'سمك مشوي مع خضار', nameEn: 'Grilled Fish with Vegetables', calories: 450, protein: 40, carbs: 35, fats: 15, image: '🐟' },
    { name: 'لحم بقري مع بطاطس مشوية', nameEn: 'Beef with Roasted Potatoes', calories: 580, protein: 48, carbs: 50, fats: 18, image: '🥩' },
    { name: 'كبسة دجاج صحية', nameEn: 'Healthy Chicken Kabsa', calories: 550, protein: 42, carbs: 60, fats: 14, image: '🍚' }
  ],
  dinner: [
    { name: 'سلطة تونة مع خضار', nameEn: 'Tuna Salad', calories: 320, protein: 35, carbs: 20, fats: 12, image: '🥗' },
    { name: 'دجاج مشوي مع سلطة', nameEn: 'Grilled Chicken with Salad', calories: 380, protein: 40, carbs: 25, fats: 14, image: '🥙' },
    { name: 'شوربة عدس مع خبز', nameEn: 'Lentil Soup with Bread', calories: 290, protein: 16, carbs: 45, fats: 6, image: '🍜' },
    { name: 'سمك سلمون مع خضار بخار', nameEn: 'Salmon with Steamed Vegetables', calories: 420, protein: 38, carbs: 28, fats: 18, image: '🍱' }
  ],
  snacks: [
    { name: 'تفاحة مع زبدة فول سوداني', nameEn: 'Apple with Peanut Butter', calories: 180, protein: 6, carbs: 22, fats: 8, image: '🍎' },
    { name: 'زبادي يوناني مع عسل', nameEn: 'Greek Yogurt with Honey', calories: 150, protein: 15, carbs: 18, fats: 3, image: '🥛' },
    { name: 'مكسرات مشكلة', nameEn: 'Mixed Nuts', calories: 200, protein: 8, carbs: 12, fats: 16, image: '🥜' },
    { name: 'شيك بروتين', nameEn: 'Protein Shake', calories: 220, protein: 30, carbs: 15, fats: 5, image: '🥤' }
  ]
};

const VEGETABLES = [
  { name: 'بروكلي', nameEn: 'Broccoli', calories: 55, protein: 4, carbs: 11, fats: 0.5, image: '🥦' },
  { name: 'سبانخ', nameEn: 'Spinach', calories: 23, protein: 3, carbs: 4, fats: 0.4, image: '🥬' },
  { name: 'خيار', nameEn: 'Cucumber', calories: 16, protein: 1, carbs: 4, fats: 0.1, image: '🥒' },
  { name: 'طماطم', nameEn: 'Tomato', calories: 18, protein: 1, carbs: 4, fats: 0.2, image: '🍅' },
  { name: 'جزر', nameEn: 'Carrots', calories: 41, protein: 1, carbs: 10, fats: 0.2, image: '🥕' }
];

const SUPPLEMENTS = [
  { name: 'كرياتين مونوهيدرات', nameEn: 'Creatine Monohydrate', dosage: '5g', timing: 'بعد التمرين' },
  { name: 'بروتين واي', nameEn: 'Whey Protein', dosage: '25-30g', timing: 'بعد التمرين أو كوجبة خفيفة' },
  { name: 'BCAA', nameEn: 'BCAA', dosage: '5-10g', timing: 'أثناء التمرين' },
  { name: 'أوميغا 3', nameEn: 'Omega-3', dosage: '1-2g', timing: 'مع الوجبات' },
  { name: 'فيتامين د', nameEn: 'Vitamin D', dosage: '1000-2000 IU', timing: 'صباحاً مع الطعام' }
];

// Exercise structure updated
const EXERCISES_DATABASE = {
  chest: [
    { name: 'ضغط بنش مستوي', nameEn: 'Flat Bench Press', muscle: 'صدر', image: '💪', sets: 4, reps: '8-12', videoLink: 'https://example.com/flat_bench', gifLink: 'https://example.com/flat_bench.gif' },
    { name: 'ضغط بنش مائل', nameEn: 'Incline Bench Press', muscle: 'صدر علوي', image: '💪', sets: 3, reps: '10-12', videoLink: 'https://example.com/incline_bench', gifLink: 'https://example.com/incline_bench.gif' }
  ],
  back: [
    { name: 'سحب أمامي', nameEn: 'Lat Pulldown', muscle: 'ظهر', image: '💪', sets: 4, reps: '8-12', videoLink: 'https://example.com/lat_pulldown', gifLink: 'https://example.com/lat_pulldown.gif' },
    { name: 'تجديف بار', nameEn: 'Barbell Row', muscle: 'ظهر', image: '💪', sets: 4, reps: '8-12', videoLink: 'https://example.com/barbell_row', gifLink: 'https://example.com/barbell_row.gif' }
  ],
  shoulders: [
    { name: 'ضغط كتف أمامي', nameEn: 'Military Press', muscle: 'كتف أمامي', image: '💪', sets: 4, reps: '8-12', videoLink: 'https://example.com/military_press', gifLink: 'https://example.com/military_press.gif' },
    { name: 'رفرفة جانبي', nameEn: 'Lateral Raises', muscle: 'كتف جانبي', image: '💪', sets: 3, reps: '12-15', videoLink: 'https://example.com/lateral_raises', gifLink: 'https://example.com/lateral_raises.gif' }
  ],
  arms: [
    { name: 'تبديل دامبل', nameEn: 'Bicep Curls', muscle: 'باي', image: '💪', sets: 3, reps: '10-12', videoLink: 'https://example.com/bicep_curls', gifLink: 'https://example.com/bicep_curls.gif' },
    { name: 'ضغط فرنسي', nameEn: 'Tricep Extensions', muscle: 'تراي', image: '💪', sets: 3, reps: '10-12', videoLink: 'https://example.com/tricep_extensions', gifLink: 'https://example.com/tricep_extensions.gif' }
  ],
  legs: [
    { name: 'سكوات', nameEn: 'Squats', muscle: 'أرجل', image: '💪', sets: 4, reps: '8-12', videoLink: 'https://example.com/squats', gifLink: 'https://example.com/squats.gif' },
    { name: 'ضغط رجل', nameEn: 'Leg Press', muscle: 'أرجل', image: '💪', sets: 4, reps: '10-12', videoLink: 'https://example.com/leg_press', gifLink: 'https://example.com/leg_press.gif' }
  ]
};

// --- AI LOGIC FUNCTION ---
const generateAIPrescription = (goal, weight, height, targetWeight) => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h)) return {};

    const BMR = 10 * w + 6.25 * h - 5 * 30 + 5; 
    const TDEE = BMR * 1.55; 

    let suggestedCals;
    let autoTargetWeight = targetWeight;

    if (goal === 'loss') {
        suggestedCals = Math.round(TDEE - 500); 
        if (!autoTargetWeight) autoTargetWeight = (w - 5).toFixed(1); 
    } else if (goal === 'gain') {
        suggestedCals = Math.round(TDEE + 300); 
        if (!autoTargetWeight) autoTargetWeight = (w + 5).toFixed(1); 
    } else { 
        suggestedCals = Math.round(TDEE);
        autoTargetWeight = w;
    }

    const distributeMeals = () => {
        const autoMeals = {
            breakfast: {
                'Option A': [MEALS_DATABASE.breakfast[0]],
                'Option B': [MEALS_DATABASE.breakfast[1]],
                'Option C': [MEALS_DATABASE.breakfast[3]],
            },
            lunch: {
                'Option A': [MEALS_DATABASE.lunch[0]],
                'Option B': [MEALS_DATABASE.lunch[1]],
                'Option C': [MEALS_DATABASE.lunch[3]],
            },
            dinner: {
                'Option A': [MEALS_DATABASE.dinner[0]],
                'Option B': [MEALS_DATABASE.dinner[1]],
                'Option C': [MEALS_DATABASE.dinner[3]],
            },
            snacks: {
                'Option A': [MEALS_DATABASE.snacks[0]],
                'Option B': [MEALS_DATABASE.snacks[1]],
                'Option C': [MEALS_DATABASE.snacks[3]],
            }
        };
        
        return autoMeals;
    };
    
    const autoSupplements = goal === 'gain' ? [
      { ...SUPPLEMENTS[1], id: Math.random(), days: WEEKDAYS },
      { ...SUPPLEMENTS[0], id: Math.random(), days: WEEKDAYS.filter(d => d !== 'الجمعة') },
    ] : [
      { ...SUPPLEMENTS[1], id: Math.random(), days: WEEKDAYS.slice(0, 5) },
      { ...SUPPLEMENTS[3], id: Math.random(), days: WEEKDAYS },
    ];

    const autoWaterIntake = goal === 'gain' ? '3.5' : '3.0'; 
    
    // Using Math.random() for IDs to avoid Hydration errors when running SSR
    const autoWorkout = {
        'السبت': [{ ...EXERCISES_DATABASE.chest[0], id: Math.random() * 100000 }, { ...EXERCISES_DATABASE.arms[1], id: Math.random() * 100000 + 1 }], 
        'الأحد': [{ ...EXERCISES_DATABASE.back[0], id: Math.random() * 100000 + 2 }, { ...EXERCISES_DATABASE.arms[0], id: Math.random() * 100000 + 3 }],
        'الاثنين': [{ ...EXERCISES_DATABASE.legs[0], id: Math.random() * 100000 + 4 }, { ...EXERCISES_DATABASE.legs[1], id: Math.random() * 100000 + 5 }],
        'الثلاثاء': [], // Rest
        'الأربعاء': [{ ...EXERCISES_DATABASE.chest[1], id: Math.random() * 100000 + 6 }, { ...EXERCISES_DATABASE.shoulders[1], id: Math.random() * 100000 + 7 }],
        'الخميس': [{ ...EXERCISES_DATABASE.back[1], id: Math.random() * 100000 + 8 }, { ...EXERCISES_DATABASE.shoulders[0], id: Math.random() * 100000 + 9 }],
        'الجمعة': [], // Rest
    };

    return {
        suggestedCals: suggestedCals.toString(),
        meals: distributeMeals(),
        selectedVegetables: VEGETABLES.slice(0, 4),
        selectedSupplements: autoSupplements,
        waterIntake: autoWaterIntake,
        targetWeight: autoTargetWeight,
        workoutProgram: autoWorkout,
    };
};
// --- END AI LOGIC FUNCTION ---


export default function PersonalTrainerApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [savedPlans, setSavedPlans] = useState([]);
  const [editingPlan, setEditingPlan] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState('diet');

  // Client Information, InBody Data, Meals, Supplements (States)
  const [clientName, setClientName] = useState('');
  const [programPeriod, setProgramPeriod] = useState('1month');
  const [customPeriod, setCustomPeriod] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [caloriesNeeded, setCaloriesNeeded] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [muscleMass, setMuscleMass] = useState('');
  const [goal, setGoal] = useState('loss');
  const [targetWeight, setTargetWeight] = useState('');
  
  const initialMealsState = {
    breakfast: { 'Option A': [], 'Option B': [], 'Option C': [] },
    lunch: { 'Option A': [], 'Option B': [], 'Option C': [] },
    dinner: { 'Option A': [], 'Option B': [], 'Option C': [] },
    snacks: { 'Option A': [], 'Option B': [], 'Option C': [] }
  };
  const [meals, setMeals] = useState(initialMealsState);
  
  const [selectedVegetables, setSelectedVegetables] = useState([]);
  const [waterIntake, setWaterIntake] = useState('3.0');
  const [selectedSupplements, setSelectedSupplements] = useState([]);
  const [currentSupplement, setCurrentSupplement] = useState({ name: '', dosage: '', timing: '', days: [] });
  
  // Training
  const initialWorkoutState = WEEKDAYS.reduce((acc, day) => ({ ...acc, [day]: [] }), {});
  const [workoutProgram, setWorkoutProgram] = useState(initialWorkoutState);
  
  // State for adding custom exercises
  const [isCustomExerciseModalOpen, setIsCustomExerciseModalOpen] = useState(false);
  const [currentDayForExercise, setCurrentDayForExercise] = useState(null);
  const [newExercise, setNewExercise] = useState({
    name: '', nameEn: '', muscle: '', sets: 3, reps: '10-12', videoLink: '', gifLink: ''
  });

  const trainerInfo = {
    name: 'Amr Elshahhat',
    nameAr: 'عمرو الشحات',
    title: 'مدرب شخصي معتمد',
    titleEn: 'Certified Personal Trainer',
    phone: '+966 XX XXX XXXX',
    email: 'amr.elshahhat@fitness.com'
  };

  // --- Utility Functions ---

  useEffect(() => {
    // Auth and Plan loading logic
    const saved = localStorage.getItem('trainerAuth');
    const lastLogin = localStorage.getItem('trainerLastLogin');
    
    if (saved && lastLogin) {
      const authData = JSON.parse(saved);
      if (Date.now() - new Date(lastLogin).getTime() < 24 * 60 * 60 * 1000) {
        if (authData.username === 'amr') {
          setIsAuthenticated(true);
          setUsername(authData.username);
        }
      } else {
        localStorage.removeItem('trainerAuth');
        localStorage.removeItem('trainerLastLogin');
      }
    }

    try {
      const plans = JSON.parse(localStorage.getItem('fitnessPlans') || '[]');
      setSavedPlans(plans);
    } catch (e) { console.error("Error loading plans:", e); }
  }, []);
  
  // --- Core Form Management Functions ---
  
  const resetForm = () => {
    setClientName('');
    setProgramPeriod('1month');
    setCustomPeriod('');
    setWeight('');
    setHeight('');
    setCaloriesNeeded('');
    setBodyFat('');
    setMuscleMass('');
    setGoal('loss');
    setTargetWeight('');
    setMeals(initialMealsState);
    setSelectedVegetables([]);
    setWaterIntake('3.0');
    setSelectedSupplements([]);
    setWorkoutProgram(initialWorkoutState);
    setEditingPlan(null); // مهم لإنهاء وضع التحرير
    setActiveTab('diet');
  };
  
  const loadPlanForEdit = (plan) => {
    setClientName(plan.clientName);
    setProgramPeriod(plan.programPeriod);
    setCustomPeriod(plan.customPeriod);
    setWeight(plan.weight);
    setHeight(plan.height);
    setCaloriesNeeded(plan.caloriesNeeded);
    setBodyFat(plan.bodyFat);
    setMuscleMass(plan.muscleMass);
    setGoal(plan.goal);
    setTargetWeight(plan.targetWeight);
    setMeals(plan.meals);
    setSelectedVegetables(plan.selectedVegetables);
    setWaterIntake(plan.waterIntake);
    setSelectedSupplements(plan.selectedSupplements || []);
    setWorkoutProgram(plan.workoutProgram || initialWorkoutState);
    setEditingPlan(plan);
    setShowSidebar(false);
  };
  
  const deletePlan = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا البرنامج؟')) {
      const updatedPlans = savedPlans.filter(p => p.id !== id);
      localStorage.setItem('fitnessPlans', JSON.stringify(updatedPlans));
      setSavedPlans(updatedPlans);
      if (editingPlan && editingPlan.id === id) {
        resetForm();
      }
    }
  };
  
  const handleAISuggestion = () => {
    if (!weight || !height || !goal) {
        alert('الرجاء إدخال الوزن، الطول، والهدف أولاً.');
        return;
    }
    const result = generateAIPrescription(goal, weight, height, targetWeight);

    if (result.suggestedCals) {
        // Update states based on AI suggestion
        setCaloriesNeeded(result.suggestedCals);
        setTargetWeight(result.targetWeight);
        setMeals(result.meals);
        setSelectedVegetables(result.selectedVegetables);
        setWaterIntake(result.waterIntake);
        setSelectedSupplements(result.selectedSupplements);
        setWorkoutProgram(result.workoutProgram);
        alert('تم تطبيق اقتراحات الذكاء الاصطناعي بنجاح!');
    } else {
        alert('فشل توليد الاقتراحات. تأكد من صحة البيانات.');
    }
  };

  const handleLogin = () => {
    if (username === 'amr' && password === 'amr123') {
      setIsAuthenticated(true);
      const authData = { username };
      localStorage.setItem('trainerAuth', JSON.stringify(authData));
      localStorage.setItem('trainerLastLogin', new Date().toISOString());
    } else {
      alert('بيانات الدخول غير صحيحة');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    localStorage.removeItem('trainerAuth');
    localStorage.removeItem('trainerLastLogin');
  };

  const calculateBMI = () => {
    if (!weight || !height) return 0;
    const h = parseFloat(height) / 100;
    return (parseFloat(weight) / (h * h)).toFixed(1);
  };

  const getPeriodInWeeks = () => {
    switch(programPeriod) {
      case '1week': return 1;
      case '2weeks': return 2;
      case '1month': return 4;
      case '2months': return 8;
      case '3months': return 12;
      case 'custom': return parseInt(customPeriod) || 4;
      default: return 4;
    }
  };

  const calculateWeeklyWeightLoss = () => {
    if (!weight || !targetWeight) return 0;
    const diff = parseFloat(weight) - parseFloat(targetWeight);
    const weeks = getPeriodInWeeks();
    return (diff / weeks).toFixed(2);
  };

  // --- Meal Functions ---
  const handleMealChange = (mealType, option, newMeal) => {
    setMeals(prev => ({
        ...prev,
        [mealType]: {
            ...prev[mealType],
            [option]: newMeal ? [newMeal] : [] 
        }
    }));
  };
  
  // --- Supplement Functions (Fixed missing references) ---
  const addSupplement = (supplement) => {
    if (supplement.name && supplement.days.length > 0) {
        setSelectedSupplements(prev => [...prev, { 
            ...supplement, 
            id: Math.random() // Using random ID to avoid hydration issues
        }]);
        setCurrentSupplement({ name: '', dosage: '', timing: '', days: [] });
    }
  };

  const removeSupplement = (id) => {
      setSelectedSupplements(prev => prev.filter(s => s.id !== id));
  };

  const toggleSuppDay = (day) => {
      setCurrentSupplement(prev => ({
          ...prev,
          days: prev.days.includes(day) 
              ? prev.days.filter(d => d !== day) 
              : [...prev.days, day]
      }));
  };

  // --- Workout functions ---
  const addExercise = (day, exercise) => {
    setWorkoutProgram(prev => ({
      ...prev,
      [day]: [...prev[day], { 
          ...exercise, 
          // Using Math.random() for IDs to avoid Hydration errors
          id: Math.random() * 1000000000, 
          sets: exercise.sets || 3, 
          reps: exercise.reps || '10-12' 
      }]
    }));
  };
  
  const handleAddNewCustomExercise = () => {
    if (newExercise.name && currentDayForExercise) {
        addExercise(currentDayForExercise, newExercise);
        // Reset and close modal
        setNewExercise({ name: '', nameEn: '', muscle: '', sets: 3, reps: '10-12', videoLink: '', gifLink: '' });
        setIsCustomExerciseModalOpen(false);
        setCurrentDayForExercise(null);
    } else {
        alert('الرجاء إدخال اسم التمرين على الأقل.');
    }
  };

  const removeExercise = (day, exerciseId) => {
    setWorkoutProgram(prev => ({
      ...prev,
      [day]: prev[day].filter(e => e.id !== exerciseId)
    }));
  };
  
  // Macro calculation
  const getTotalMacros = useMemo(() => {
    let totalCals = 0, totalProtein = 0, totalCarbs = 0, totalFats = 0;
    
    Object.values(meals).forEach(mealType => {
      // We calculate macros based ONLY on Option A for simplicity in the summary
      mealType['Option A'].forEach(meal => {
        totalCals += meal.calories || 0;
        totalProtein += meal.protein || 0;
        totalCarbs += meal.carbs || 0;
        totalFats += meal.fats || 0;
      });
    });

    selectedVegetables.forEach(veg => {
      // Estimate 1 serving of vegetables (example: 100g)
      totalCals += veg.calories || 0; 
      totalProtein += veg.protein || 0;
      totalCarbs += veg.carbs || 0;
      totalFats += veg.fats || 0;
    });

    return { totalCals, totalProtein, totalCarbs, totalFats };
  }, [meals, selectedVegetables]);


  const savePlan = () => {
    const plan = {
      id: editingPlan?.id || Math.random() * 1000000000, // Use Math.random for new plans
      clientName, programPeriod, customPeriod, weight, height, caloriesNeeded,
      bodyFat, muscleMass, goal, targetWeight,
      bmi: calculateBMI(),
      weeklyLoss: calculateWeeklyWeightLoss(),
      meals, selectedVegetables, waterIntake, selectedSupplements,
      workoutProgram,
      macros: getTotalMacros,
      createdAt: editingPlan?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    try {
      const plans = editingPlan 
        ? savedPlans.map(p => p.id === editingPlan.id ? plan : p)
        : [plan, ...savedPlans];
      
      localStorage.setItem('fitnessPlans', JSON.stringify(plans));
      setSavedPlans(plans);
      alert(editingPlan ? 'تم تحديث البرنامج بنجاح!' : 'تم حفظ البرنامج بنجاح!');
      
      if (editingPlan) {
        setEditingPlan(null);
      }
    } catch (error) {
      alert('حدث خطأ أثناء الحفظ');
    }
  };

  // --- Components for Rendering ---
  
  const renderMealSelector = (mealType, title) => (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h4 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
            <Utensils className="w-5 h-5" />
            {title}
        </h4>
        {MEAL_OPTIONS.map(option => (
            <div key={option} className="mb-4 p-3 border rounded-lg bg-gray-50">
                <label className="block text-sm font-bold text-gray-800 mb-2">
                    {option}
                </label>
                <select 
                    value={meals[mealType][option][0]?.name || ''} 
                    onChange={(e) => 
                        handleMealChange(
                            mealType, 
                            option, 
                            MEALS_DATABASE[mealType].find(m => m.name === e.target.value)
                        )}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-pointer text-gray-900"
                >
                    <option value="">-- اختر وجبة --</option>
                    {MEALS_DATABASE[mealType].map((meal) => (
                        <option key={meal.nameEn} value={meal.name}>
                            {meal.image} {meal.name} ({meal.calories} سعرة)
                        </option>
                    ))}
                </select>
                {meals[mealType][option][0] && (
                    <div className="mt-2 text-sm text-gray-600 p-2 bg-indigo-50 rounded-md">
                        <span className="font-semibold text-indigo-800">السعرات:</span> {meals[mealType][option][0].calories} | 
                        <span className="font-semibold text-indigo-800"> بروتين:</span> {meals[mealType][option][0].protein}g
                    </div>
                )}
            </div>
        ))}
    </div>
  );
  
  // --- PDF Generation Function (Major Update) ---
  const generatePDF = () => {
    const macros = getTotalMacros;
    const workouts = workoutProgram;

    // Helper to render meal options
    const renderMealOptionsPDF = (mealType) => {
        return MEAL_OPTIONS.map(option => {
            if (meals[mealType][option].length === 0) return '';
            return `
                <div class="meal-option-group">
                    <h5><i class="fas fa-arrow-alt-circle-left"></i> ${option}</h5>
                    ${meals[mealType][option].map((meal) => `
                        <div class="meal-option">
                            <div class="meal-name">
                                <span>${meal.image}</span>
                                <div>
                                    <div>${meal.name}</div>
                                    <div style="font-size: 10px; color: #718096; direction: ltr;">${meal.nameEn}</div>
                                </div>
                            </div>
                            <div class="meal-macros">
                                <span>🔥 ${meal.calories} سعرة</span>
                                <span>🥩 ${meal.protein}g بروتين</span>
                                <span>🌾 ${meal.carbs}g كارب</span>
                                <span>🥑 ${meal.fats}g دهون</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }).join('');
    };
    
    // Helper to render the weekly workout summary
    const renderWeeklySummary = () => {
        return `
            <div class="section weekly-summary">
                <h3>🗓️ جدول الأسبوع الملخص</h3>
                <div class="summary-grid">
                    ${WEEKDAYS.map(day => {
                        const exercises = workouts[day];
                        // Filter unique muscle groups for the summary card
                        const muscleGroups = exercises.map(ex => ex.muscle).filter((value, index, self) => self.indexOf(value) === index);
                        const workoutType = muscleGroups.length > 0 ? muscleGroups.join(' / ') : 'راحة';
                        const bgColor = exercises.length > 0 ? '#e0f7fa' : '#ffebee';
                        const color = exercises.length > 0 ? '#00796b' : '#c62828';
                        
                        return `
                            <div class="summary-day-card" style="background: ${bgColor}; border-left: 5px solid ${color};">
                                <h4>${day}</h4>
                                <p style="color: ${color}; font-weight: bold; font-size: 14px;">${exercises.length > 0 ? '💪 ' + workoutType : '😴 راحة تامة'}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    };

    const pdfContent = `
      <!DOCTYPE html>
      <html dir="rtl">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>برنامج تدريبي - ${clientName}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <style>
          /* Base Styles */
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Arial', sans-serif; padding: 20px; }
          .page {
            background: white;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            border-radius: 15px;
          }
          
          /* Headers & Layout */
          .header {
            text-align: center;
            border-bottom: 4px solid #667eea;
            padding-bottom: 30px;
            margin-bottom: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
          }
          .header h1 { font-size: 36px; margin-bottom: 10px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
          .header h2 { font-size: 24px; margin-bottom: 5px; opacity: 0.95; }
          .section {
            margin-bottom: 35px;
            background: #f8f9fa;
            padding: 25px;
            border-radius: 10px;
            border-left: 5px solid #667eea;
            page-break-inside: avoid; /* Added for better page breaking */
          }
          .section h3 {
            font-size: 24px;
            color: #667eea;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 15px;
          }
          .info-item {
            background: white;
            padding: 15px;
            border-radius: 8px;
            border: 2px solid #e9ecef;
          }
          .info-item strong { display: block; color: #667eea; font-size: 14px; margin-bottom: 5px; }
          .info-item span { font-size: 20px; font-weight: bold; color: #2d3748; }
          
          /* DIET STYLES */
          .meal-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
            border: 2px solid #e9ecef;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            page-break-inside: avoid; /* Prevent meal card from splitting */
          }
          .meal-card h4 {
            font-size: 20px;
            color: #667eea;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 2px dashed #e9ecef;
            padding-bottom: 10px;
          }
          .meal-option-group h5 {
              font-size: 16px;
              color: #764ba2;
              margin: 15px 0 10px 0;
              font-weight: bold;
              padding: 5px;
              background: #f0f3ff;
              border-radius: 4px;
          }
          .meal-option {
            background: #ffffff;
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 8px;
            border: 1px solid #e9ecef;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            page-break-inside: avoid; /* Prevent meal item from splitting */
          }
          .meal-name, .exercise-name {
            font-weight: bold;
            color: #2d3748;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .meal-macros {
            display: flex;
            gap: 15px;
            font-size: 13px;
            color: #718096;
            flex-wrap: wrap;
          }
          
          /* TRAINING STYLES */
          .workout-day-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
            border: 2px solid #e9ecef;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            page-break-inside: avoid; /* Prevent day card from splitting */
          }
          .workout-day-card h4 {
            font-size: 20px;
            color: white;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 15px;
          }
          .exercise {
            background: #f0f3ff;
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            page-break-inside: avoid; /* Prevent exercise item from splitting */
          }
          .exercise-details {
            display: flex;
            gap: 15px;
            font-size: 13px;
            color: #718096;
            flex-wrap: wrap;
          }
          .media-links a {
            font-size: 12px;
            color: #667eea;
            text-decoration: none;
            margin-right: 10px;
            direction: ltr; /* Ensure links read correctly */
          }
          
          /* SUPPLEMENT STYLES */
          .supplement-item {
            background: #fff3cd;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 10px;
            border-left: 4px solid #ffc107;
            page-break-inside: avoid;
          }
          .supplement-item .days {
            margin-top: 10px;
            font-size: 14px;
            font-weight: bold;
            color: #856404;
          }
          .supplement-item .day-tag {
            display: inline-block;
            background: #ffe082;
            padding: 3px 8px;
            border-radius: 4px;
            margin-left: 5px;
            font-size: 12px;
          }
          
          /* MACROS STYLES */
          .macros-summary {
            background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            padding: 25px;
            border-radius: 10px;
            color: white;
            text-align: center;
            margin-bottom: 35px;
            page-break-inside: avoid;
          }
          .macros-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
          .macro-item {
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 8px;
          }
          .macro-item strong { display: block; font-size: 14px; margin-bottom: 8px; opacity: 0.9; }
          .macro-item span { font-size: 24px; font-weight: bold; }
          
          /* WEEKLY SUMMARY STYLES (Calendar) */
          .weekly-summary {
              background: #f0f3ff;
              border-left: 5px solid #764ba2;
              page-break-inside: avoid;
          }
          .summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
            gap: 10px;
          }
          .summary-day-card {
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            page-break-inside: avoid;
          }
          .summary-day-card h4 {
            font-size: 18px;
            color: #2d3748;
            margin-bottom: 5px;
          }
          
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #e9ecef;
            color: #718096;
            page-break-before: always; /* New page for footer/notes is usually good practice */
          }
          
          /* Print Optimization (Critical for good PDF output) */
          @media print {
            body { background: white; padding: 0; }
            .page { box-shadow: none; padding: 20px; }
            .no-print { display: none; }
            .section, .meal-card, .workout-day-card, .exercise, .supplement-item, .macros-summary, .weekly-summary {
                page-break-inside: avoid !important; /* Forces components to stay whole */
            }
            .page-break {
                page-break-before: always; /* Forces a new page */
            }
            /* Set font size for print to avoid text scaling issues */
            body, .meal-option, .exercise { font-size: 12pt; }
            .info-item span { font-size: 14pt; }
          }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="header">
            <h1>📋 برنامج تدريبي شامل</h1>
            <h2>Comprehensive Fitness Plan</h2>
            <p>تم إعداده خصيصاً لـ: ${clientName}</p>
          </div>

          <div class="section">
            <h3>📊 معلومات العميل والقياسات</h3>
            <div class="info-grid">
              <div class="info-item"><strong>الاسم</strong><span>${clientName}</span></div>
              <div class="info-item"><strong>مدة البرنامج</strong><span>${getPeriodInWeeks()} أسابيع</span></div>
              <div class="info-item"><strong>الوزن الحالي</strong><span>${weight} كجم</span></div>
              <div class="info-item"><strong>الطول</strong><span>${height} سم</span></div>
              <div class="info-item"><strong>مؤشر كتلة الجسم (BMI)</strong><span>${calculateBMI()}</span></div>
              <div class="info-item"><strong>نسبة الدهون</strong><span>${bodyFat}%</span></div>
              <div class="info-item"><strong>الكتلة العضلية</strong><span>${muscleMass} كجم</span></div>
              <div class="info-item"><strong>الهدف</strong><span>${goal === 'loss' ? 'خسارة وزن' : goal === 'gain' ? 'زيادة وزن' : 'تثبيت وزن'}</span></div>
              <div class="info-item"><strong>الوزن المستهدف</strong><span>${targetWeight} كجم</span></div>
              <div class="info-item"><strong>خسارة أسبوعية متوقعة</strong><span>${calculateWeeklyWeightLoss()} كجم</span></div>
              <div class="info-item"><strong>السعرات المطلوبة</strong><span>${caloriesNeeded} سعرة</span></div>
            </div>
          </div>

          <div class="macros-summary">
            <h3 style="margin-bottom: 15px; color: white;">📈 ملخص المغذيات اليومية (بناءً على خيار A)</h3>
            <div class="macros-grid">
              <div class="macro-item"><strong>السعرات</strong><span>${macros.totalCals}</span></div>
              <div class="macro-item"><strong>بروتين</strong><span>${macros.totalProtein}g</span></div>
              <div class="macro-item"><strong>كربوهيدرات</strong><span>${macros.totalCarbs}g</span></div>
              <div class="macro-item"><strong>دهون</strong><span>${macros.totalFats}g</span></div>
            </div>
          </div>

          ${renderWeeklySummary()}

          <div class="page-break"></div> <div class="section">
            <h3>🍽️ النظام الغذائي (وجبات متناوبة)</h3>
            
            <div class="meal-card">
              <h4>🍴 الإفطار</h4>
              ${renderMealOptionsPDF('breakfast')}
            </div>
            
            <div class="meal-card">
              <h4>🍴 الغداء</h4>
              ${renderMealOptionsPDF('lunch')}
            </div>
            
            <div class="meal-card">
              <h4>🍴 العشاء</h4>
              ${renderMealOptionsPDF('dinner')}
            </div>
            
            <div class="meal-card">
              <h4>🍴 الوجبات الخفيفة</h4>
              ${renderMealOptionsPDF('snacks')}
            </div>

            ${selectedVegetables.length > 0 ? `
              <div class="meal-card">
                <h4>🥗 الخضروات الموصى بها (غير محدودة)</h4>
                <div style="padding: 15px; background: #e6f7e9; border-radius: 8px;">
                  ${selectedVegetables.map(veg => `
                    <span style="display: inline-block; background: #d0f0d6; padding: 5px 10px; border-radius: 5px; margin: 5px;">
                      ${veg.image} ${veg.name} (${veg.nameEn})
                    </span>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="meal-card">
              <h4>💧 شرب الماء</h4>
              <div style="font-size: 20px; font-weight: bold; color: #667eea; text-align: center; padding: 15px; background: #e0f7fa; border-radius: 8px;">
                ${waterIntake} لتر يومياً
              </div>
            </div>
          </div>
          
          <div class="page-break"></div> <div class="section">
            <h3>💪 البرنامج التدريبي الأسبوعي - التفاصيل</h3>
            
            ${WEEKDAYS.map(day => {
              const exercises = workouts[day];
              return `
                <div class="workout-day-card">
                  <h4>🗓️ ${day} - ${exercises.length > 0 ? 'يوم تمرين' : 'يوم راحة'}</h4>
                  ${exercises.length > 0 ? exercises.map(ex => `
                    <div class="exercise">
                      <div>
                        <div class="exercise-name">
                            <span>${ex.image || '💪'}</span>
                            <div>
                                <div>${ex.name}</div>
                                <div style="font-size: 12px; color: #718096; direction: ltr;">${ex.nameEn}</div>
                            </div>
                        </div>
                        <div class="media-links" style="margin-top: 5px;">
                            ${ex.videoLink ? `<a href="${ex.videoLink}" target="_blank" style="color:#e94560;">🎥 فيديو الشرح</a>` : ''}
                            ${ex.gifLink ? `<a href="${ex.gifLink}" target="_blank" style="color:#00b894;">🖼️ GIF المتحرك</a>` : ''}
                        </div>
                      </div>
                      <div class="exercise-details">
                        <span><strong>المجموعات:</strong> ${ex.sets}</span>
                        <span><strong>التكرارات:</strong> ${ex.reps}</span>
                        <span><strong>العضلة:</strong> ${ex.muscle}</span>
                      </div>
                    </div>
                  `).join('') : '<p style="padding: 10px; background: #ffebee; border-radius: 4px; text-align: center; color: #c62828;">راحة تامة - لا يوجد تمارين مبرمجة</p>'}
                </div>
              `;
            }).join('')}
          </div>

          ${selectedSupplements.length > 0 ? `
            <div class="section">
              <h3>💊 المكملات الغذائية</h3>
              ${selectedSupplements.map(supp => `
                <div class="supplement-item">
                  <div style="font-weight: bold; margin-bottom: 5px;">${supp.name} (${supp.nameEn})</div>
                  <div style="font-size: 14px; color: #856404;">
                    <strong>الجرعة:</strong> ${supp.dosage} | 
                    <strong>التوقيت:</strong> ${supp.timing}
                  </div>
                  <div class="days">
                    الأيام: 
                    ${supp.days.map(day => `<span class="day-tag">${day}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div class="footer">
            <p style="font-size: 18px; font-weight: bold; color: #667eea; margin-bottom: 10px;">
              ملاحظات مهمة
            </p>
            <p style="margin-bottom: 20px;">
              يرجى التناوب بين خيارات الوجبات (A, B, C) على مدار الأسبوع لضمان التغذية المتوازنة وعدم الشعور بالملل.
            </p>
            <p style="font-weight: bold; color: #2d3748;">
              تم إعداد هذا البرنامج بواسطة: ${trainerInfo.nameAr}<br>
              ${trainerInfo.name} - ${trainerInfo.titleEn}
            </p>
          </div>
        </div>

        <div class="no-print" style="text-align: center; margin-top: 30px;">
          <button onclick="window.print()" style="background: #10b981; color: white; border: none; padding: 15px 30px; border-radius: 8px; font-size: 20px; cursor: pointer;">
            طباعة/تنزيل (PDF)
          </button>
        </div>
      </body>
      </html>
    `;
    
    // Create a Blob and open in new window for printing/saving
    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.onload = () => {
        // newWindow.print(); // Uncomment this line if you want the print dialog to open automatically
      };
    } else {
      alert('الرجاء السماح بفتح النوافذ المنبثقة لإنشاء ملف PDF.');
    }
  };

  // --- Exercise Customization Modal Component ---
  const CustomExerciseModal = () => {
    if (!isCustomExerciseModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4">
            <div dir="rtl" className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h3 className="text-xl font-bold text-indigo-700">إضافة تمرين مخصص ليوم {currentDayForExercise}</h3>
                    <button onClick={() => setIsCustomExerciseModalOpen(false)} className="text-gray-500 hover:text-gray-700 cursor-pointer">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="space-y-4">
                    {/* Exercise Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">اسم التمرين (عربي)</label>
                        <input type="text" value={newExercise.name} onChange={(e) => setNewExercise(prev => ({ ...prev, name: e.target.value }))}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">اسم التمرين (إنجليزي)</label>
                        <input type="text" value={newExercise.nameEn} onChange={(e) => setNewExercise(prev => ({ ...prev, nameEn: e.target.value }))}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">العضلة المستهدفة</label>
                        <input type="text" placeholder="مثل: صدر / أرجل" value={newExercise.muscle} onChange={(e) => setNewExercise(prev => ({ ...prev, muscle: e.target.value }))}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" />
                    </div>
                    
                    {/* Sets & Reps */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">المجموعات (Sets)</label>
                            <input type="number" min="1" value={newExercise.sets} onChange={(e) => setNewExercise(prev => ({ ...prev, sets: parseInt(e.target.value) || 0 }))}
                                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">التكرارات (Reps)</label>
                            <input type="text" placeholder="مثل: 10-12 أو 15" value={newExercise.reps} onChange={(e) => setNewExercise(prev => ({ ...prev, reps: e.target.value }))}
                                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" />
                        </div>
                    </div>
                    
                    {/* Video/GIF Links */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 flex items-center gap-1"><Video className="w-4 h-4" /> رابط فيديو الشرح (Youtube/Vimeo)</label>
                        <input type="url" value={newExercise.videoLink} onChange={(e) => setNewExercise(prev => ({ ...prev, videoLink: e.target.value }))}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 flex items-center gap-1"><ImageIcon className="w-4 h-4" /> رابط GIF متحرك (اختياري)</label>
                        <input type="url" value={newExercise.gifLink} onChange={(e) => setNewExercise(prev => ({ ...prev, gifLink: e.target.value }))}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" />
                    </div>
                </div>

                <div className="mt-6">
                    <button 
                        type="button"
                        onClick={handleAddNewCustomExercise}
                        className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        disabled={!newExercise.name}
                    >
                        <Plus className="w-5 h-5" />
                        إضافة التمرين للبرنامج
                    </button>
                </div>
            </div>
        </div>
    );
  };
  
  // --- Main Dashboard Render ---
  const macros = getTotalMacros;
  
  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
        <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6 flex items-center justify-center gap-2">
                    <Lock className="w-8 h-8" />
                    تسجيل الدخول
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">اسم المستخدم (amr)</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-gray-900"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">كلمة المرور (amr123)</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-gray-900"
                        />
                    </div>
                </div>
                <button 
                    onClick={handleLogin} 
                    className="w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 cursor-pointer"
                >
                    دخول
                </button>
            </div>
        </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 flex">
      <CustomExerciseModal />
      
      {/* Sidebar (Saved Plans) */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 bg-white w-64 lg:w-72 shadow-xl transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
                <Layers className="w-6 h-6" />
                الخطط المحفوظة
            </h2>
            <button 
                onClick={() => setShowSidebar(false)}
                className="lg:hidden p-1 rounded-full text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
                <X className="w-5 h-5" />
            </button>
        </div>
        {/* Saved Plans List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedPlans.length === 0 && (
            <div className="text-center py-4 text-gray-500 italic">
              لا توجد خطط محفوظة بعد.
            </div>
          )}
          {savedPlans.map((plan) => (
            <div key={plan.id} className="bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 truncate">
                {plan.clientName || 'عميل غير مسمى'}
              </h3>
              <p className="text-xs text-indigo-600 mb-2">
                {plan.goal === 'loss' ? 'خسارة وزن' : plan.goal === 'gain' ? 'زيادة وزن' : 'تثبيت وزن'} | {plan.programPeriod}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => loadPlanForEdit(plan)}
                  className="flex-1 text-xs py-1 px-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Edit2 className="w-3 h-3" />
                  تعديل
                </button>
                <button
                  onClick={() => deletePlan(plan.id)}
                  className="w-1/4 text-xs py-1 px-2 bg-red-500 hover:bg-red-600 text-white rounded-md flex items-center justify-center cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* New Plan Button (Fixed ReferenceError) */}
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={resetForm}
            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            خطة جديدة
          </button>
        </div>
      </div>

      
      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-300">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <User className="w-8 h-8 text-indigo-600" />
            لوحة تحكم المدرب
          </h1>
          <div className="flex items-center gap-4">
            <button 
                onClick={() => setShowSidebar(!showSidebar)}
                className="p-2 rounded-full text-indigo-600 hover:bg-indigo-100 cursor-pointer lg:hidden"
            >
                <Menu className="w-6 h-6" />
            </button>
            <div className="text-sm text-gray-600 hidden lg:block">مرحباً, **{trainerInfo.nameAr}**</div>
            <button 
              onClick={handleLogout} 
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Lock className="w-5 h-5" />
              خروج
            </button>
          </div>
        </header>

        {/* --- AI SUGGESTION BUTTON --- */}
        <div className="mb-8 p-6 bg-indigo-50 border-r-4 border-indigo-500 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-indigo-700 mb-3 flex items-center gap-2">
                <Cpu className="w-6 h-6" />
                مساعد الذكاء الاصطناعي (AI)
            </h3>
            <p className="text-gray-600 mb-4">
                توليد خطة مبدئية متوازنة تلقائياً (السعرات، الوجبات، المكملات، البرنامج التدريبي) بناءً على قياسات العميل وهدفه.
            </p>
            <button 
                type="button"
                onClick={handleAISuggestion}
                disabled={!weight || !height || !goal}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
            >
                <Zap className="w-5 h-5" />
                توليد الخطة تلقائياً
            </button>
            <p className="text-xs text-red-500 mt-2">
                * يجب إدخال **الوزن، الطول، والهدف** قبل التوليد.
            </p>
        </div>
        {/* --- END AI SUGGESTION BUTTON --- */}

        <form onSubmit={(e) => { e.preventDefault(); savePlan(); }}>
          
          {/* --- Section 1: Client Info and Goals --- */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-6 border-b pb-2 flex items-center gap-2">
              <User className="w-6 h-6" />
              1. معلومات العميل والقياسات
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Client Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">اسم العميل</label>
                <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} required 
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" />
              </div>
              
              {/* Program Period */}
              <div>
                <label className="block text-sm font-medium text-gray-700">مدة البرنامج</label>
                <select value={programPeriod} onChange={(e) => { setProgramPeriod(e.target.value); setCustomPeriod(''); }} 
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-pointer text-gray-900">
                  <option value="1week">أسبوع واحد</option>
                  <option value="2weeks">أسبوعان</option>
                  <option value="1month">شهر (4 أسابيع)</option>
                  <option value="2months">شهران (8 أسابيع)</option>
                  <option value="3months">3 أشهر (12 أسبوع)</option>
                  <option value="custom">تحديد بالأسابيع</option>
                </select>
                {programPeriod === 'custom' && (
                  <input type="number" placeholder="عدد الأسابيع" value={customPeriod} onChange={(e) => setCustomPeriod(e.target.value)}
                    className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" min="1" />
                )}
              </div>

              {/* Goal */}
              <div>
                <label className="block text-sm font-medium text-gray-700">الهدف</label>
                <select value={goal} onChange={(e) => setGoal(e.target.value)} 
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-pointer text-gray-900">
                  <option value="loss">خسارة وزن / دهون</option>
                  <option value="gain">زيادة وزن / كتلة عضلية</option>
                  <option value="maintain">تثبيت وزن</option>
                </select>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-gray-700">الوزن (كجم)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required 
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" min="1" />
              </div>

              {/* Target Weight */}
              <div>
                <label className="block text-sm font-medium text-gray-700">الوزن المستهدف (كجم)</label>
                <input type="number" value={targetWeight} onChange={(e) => setTargetWeight(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" />
              </div>

              {/* Height */}
              <div>
                <label className="block text-sm font-medium text-gray-700">الطول (سم)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required 
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" min="1" />
              </div>

              {/* Body Fat % */}
              <div>
                <label className="block text-sm font-medium text-gray-700">نسبة الدهون (%)</label>
                <input type="number" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} 
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" min="0" max="100" />
              </div>

              {/* Muscle Mass */}
              <div>
                <label className="block text-sm font-medium text-gray-700">الكتلة العضلية (كجم)</label>
                <input type="number" value={muscleMass} onChange={(e) => setMuscleMass(e.target.value)} 
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" min="0" />
              </div>

              {/* Calories Needed (Manual or AI suggested) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">السعرات الحرارية المطلوبة (سعرة)</label>
                <input type="number" value={caloriesNeeded} onChange={(e) => setCaloriesNeeded(e.target.value)} 
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 cursor-text text-gray-900" min="500" />
              </div>

            </div>
          </div>
          
          {/* --- Summary Cards --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 p-4 rounded-lg shadow-md border-r-4 border-indigo-500">
              <p className="text-sm font-medium text-indigo-700">مؤشر كتلة الجسم (BMI)</p>
              <p className="text-2xl font-bold text-gray-800">{calculateBMI()}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md border-r-4 border-green-500">
              <p className="text-sm font-medium text-green-700">الخسارة/الزيادة الأسبوعية المتوقعة (كجم)</p>
              <p className="text-2xl font-bold text-gray-800">{calculateWeeklyWeightLoss()}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg shadow-md border-r-4 border-yellow-500">
              <p className="text-sm font-medium text-yellow-700">إجمالي السعرات اليومية الحالية</p>
              <p className="text-2xl font-bold text-gray-800">{macros.totalCals} سعرة</p>
              <p className="text-xs text-gray-600">المستهدف: {caloriesNeeded || 'غير محدد'} سعرة</p>
            </div>
          </div>
          
          {/* --- Tabs --- */}
          <div className="flex mb-6">
                <button
                    type="button"
                    onClick={() => setActiveTab('diet')}
                    className={`flex-1 py-3 px-4 text-lg font-semibold rounded-t-lg transition duration-150 flex items-center justify-center gap-2 ${
                        activeTab === 'diet' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-200 border-b-2 border-indigo-600'
                    } cursor-pointer`}
                >
                    <Utensils className="w-5 h-5" />
                    2. النظام الغذائي والمكملات
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab('training')}
                    className={`flex-1 py-3 px-4 text-lg font-semibold rounded-t-lg transition duration-150 flex items-center justify-center gap-2 ${
                        activeTab === 'training' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-200 border-b-2 border-indigo-600'
                    } cursor-pointer`}
                >
                    <Dumbbell className="w-5 h-5" />
                    3. البرنامج التدريبي الأسبوعي
                </button>
            </div>


            {/* --- Section 2: Diet Plan (Meals, Vegetables, Water, Supplements) --- */}
            <div className={`${activeTab !== 'diet' ? 'hidden' : ''} bg-white p-6 rounded-xl shadow-lg mb-8`}>
                
                <h2 className="text-2xl font-bold text-indigo-600 mb-6 border-b pb-2 flex items-center gap-2">
                    <Utensils className="w-6 h-6" />
                    2. تفاصيل النظام الغذائي (خيارات A, B, C)
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {renderMealSelector('breakfast', 'وجبة الإفطار')}
                    {renderMealSelector('lunch', 'وجبة الغداء')}
                    {renderMealSelector('dinner', 'وجبة العشاء')}
                    {renderMealSelector('snacks', 'الوجبات الخفيفة')}
                </div>
                
                {/* Vegetables and Water & Supplements sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                    {/* Vegetables & Water */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h4 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
                            <Droplets className="w-5 h-5" />
                            الخضروات وشرب الماء
                        </h4>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الخضروات المسموحة (اختيار عدة خيارات)</label>
                        <div className="flex gap-2 flex-wrap mb-6">
                            {VEGETABLES.map((veg, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => setSelectedVegetables(prev => 
                                        prev.includes(veg) ? prev.filter(v => v !== veg) : [...prev, veg]
                                    )}
                                    className={`text-xs py-1 px-3 rounded-full transition duration-150 ${
                                        selectedVegetables.includes(veg) ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    } cursor-pointer`}
                                >
                                    {veg.image} {veg.name}
                                </button>
                            ))}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">الكمية اليومية من الماء (لتر)</label>
                            <input type="number" step="0.5" min="1" max="5" value={waterIntake} onChange={(e) => setWaterIntake(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-lg cursor-text text-gray-900" />
                            <p className="mt-2 text-sm text-gray-500">
                                الموصى به: {waterIntake} لتر.
                            </p>
                        </div>
                    </div>
                    
                    {/* Supplements */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h4 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
                            <Pill className="w-5 h-5" />
                            المكملات الغذائية الأسبوعية
                        </h4>
                        
                        <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50 mb-4">
                            <h5 className="font-bold text-yellow-800 mb-3">إضافة مكمل جديد</h5>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <select 
                                    value={currentSupplement.name} 
                                    onChange={(e) => setCurrentSupplement(prev => ({ ...prev, name: e.target.value, dosage: SUPPLEMENTS.find(s => s.name === e.target.value)?.dosage || '', timing: SUPPLEMENTS.find(s => s.name === e.target.value)?.timing || '' }))}
                                    className="block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-sm cursor-pointer text-gray-900"
                                >
                                    <option value="">اختر مكمل...</option>
                                    {SUPPLEMENTS.map((supp, index) => (
                                        <option key={index} value={supp.name}>{supp.name}</option>
                                    ))}
                                </select>
                                <input 
                                    type="text" 
                                    placeholder="الجرعة (مثل 5g)" 
                                    value={currentSupplement.dosage} 
                                    onChange={(e) => setCurrentSupplement(prev => ({ ...prev, dosage: e.target.value }))}
                                    className="block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-sm cursor-text text-gray-900"
                                />
                                <input 
                                    type="text" 
                                    placeholder="التوقيت (مثل بعد التمرين)" 
                                    value={currentSupplement.timing} 
                                    onChange={(e) => setCurrentSupplement(prev => ({ ...prev, timing: e.target.value }))}
                                    className="col-span-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-sm cursor-text text-gray-900"
                                />
                            </div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">أيام الاستخدام:</label>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {WEEKDAYS.map(day => (
                                    <button
                                        type="button"
                                        key={day}
                                        onClick={() => toggleSuppDay(day)}
                                        className={`text-xs py-1 px-3 rounded-full transition duration-150 ${
                                            currentSupplement.days.includes(day) ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-yellow-100'
                                        } cursor-pointer`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                            <button 
                                type="button"
                                onClick={() => addSupplement(currentSupplement)}
                                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-sm cursor-pointer flex items-center justify-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                إضافة المكمل
                            </button>
                        </div>
                        
                        {/* Selected Supplements View */}
                        <div className="space-y-3 pt-4 border-t">
                            <h5 className="font-bold text-gray-800">المكملات المضافة:</h5>
                            {selectedSupplements.map((supp) => (
                                <div key={supp.id} className="p-3 bg-yellow-50 rounded-lg border border-yellow-300">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-bold text-gray-900">{supp.name}</div>
                                            <div className="text-xs text-gray-600">
                                                {supp.dosage} | {supp.timing}
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => removeSupplement(supp.id)}
                                            className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="mt-2 text-xs font-semibold text-yellow-800 flex flex-wrap gap-1">
                                        الأيام: 
                                        {supp.days.map((day, index) => (
                                            <span key={index} className="bg-yellow-200 py-0.5 px-2 rounded-full">{day}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {selectedSupplements.length === 0 && (
                                <p className="text-sm text-gray-500 italic">لا توجد مكملات مضافة.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            {/* --- Section 3: Training Plan (Custom by Day) --- */}
            <div className={`${activeTab !== 'training' ? 'hidden' : ''} bg-white p-6 rounded-xl shadow-lg mb-8`}>
                <h2 className="text-2xl font-bold text-indigo-600 mb-6 border-b pb-2 flex items-center gap-2">
                    <Dumbbell className="w-6 h-6" />
                    3. البرنامج التدريبي الأسبوعي (لكل يوم)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {WEEKDAYS.map(day => (
                        <div key={day} className="bg-gray-50 p-4 rounded-lg border border-indigo-200 shadow-md">
                            <h4 className="text-xl font-bold text-indigo-800 mb-3 flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                يوم: {day}
                            </h4>

                            <div className="space-y-3 mb-4">
                                {workoutProgram[day].map(exercise => (
                                    <div key={exercise.id} className="flex justify-between items-start bg-white p-3 rounded-md border border-gray-200">
                                        <div>
                                            <div className="font-medium text-gray-900 text-sm">{exercise.name}</div>
                                            <div className="text-xs text-gray-600">
                                                **{exercise.sets} مجموعات** | **{exercise.reps} تكرارات** | {exercise.muscle}
                                            </div>
                                            <div className="mt-1 text-xs space-x-2 space-x-reverse">
                                                {exercise.videoLink && <a href={exercise.videoLink} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer"><Video className="w-3 h-3"/> فيديو</a>}
                                                {exercise.gifLink && <a href={exercise.gifLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 flex items-center gap-1 cursor-pointer"><ImageIcon className="w-3 h-3"/> GIF</a>}
                                            </div>
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={() => removeExercise(day, exercise.id)}
                                            className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                                {workoutProgram[day].length === 0 && (
                                    <p className="text-sm text-gray-500 italic p-3 bg-red-50 rounded-md text-center">يوم راحة أو أضف تمارين</p>
                                )}
                            </div>

                            <details className="pt-2 border-t">
                                <summary className="cursor-pointer text-indigo-600 font-medium flex items-center gap-2">
                                    <Plus className="w-4 h-4" />
                                    إضافة تمرين من قاعدة البيانات
                                </summary>
                                <div className="mt-3 space-y-3">
                                    {Object.keys(EXERCISES_DATABASE).map(muscleGroup => (
                                        <div key={muscleGroup} className="border p-3 rounded-lg bg-indigo-50">
                                            <p className="font-bold text-sm mb-2 text-indigo-800">{EXERCISES_DATABASE[muscleGroup][0]?.muscle}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {EXERCISES_DATABASE[muscleGroup].map(exercise => (
                                                    <button 
                                                        type="button"
                                                        key={exercise.nameEn}
                                                        onClick={() => addExercise(day, exercise)}
                                                        className="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-800 py-1 px-3 rounded-full cursor-pointer"
                                                    >
                                                        {exercise.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </details>
                            
                            <button
                                type="button"
                                onClick={() => { setCurrentDayForExercise(day); setNewExercise({ name: '', nameEn: '', muscle: '', sets: 3, reps: '10-12', videoLink: '', gifLink: '' }); setIsCustomExerciseModalOpen(true); }}
                                className="w-full mt-3 py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg text-sm flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Plus className="w-4 h-4" />
                                إضافة تمرين مخصص (يدوي)
                            </button>
                        </div>
                    ))}
                </div>
            </div>
          
          {/* --- Final Actions --- */}
          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className={`flex-1 py-4 px-6 rounded-lg text-xl font-bold text-white transition duration-200 ${
                editingPlan ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-green-600 hover:bg-green-700'
              } flex items-center justify-center gap-3 cursor-pointer`}
            >
              <Save className="w-6 h-6" />
              {editingPlan ? 'حفظ التعديلات وتحديث البرنامج' : 'حفظ البرنامج الجديد'}
            </button>
            <button
              type="button"
              onClick={generatePDF}
              className="w-48 py-4 px-6 rounded-lg text-lg font-bold text-white bg-red-600 hover:bg-red-700 transition duration-200 flex items-center justify-center gap-3 cursor-pointer"
              disabled={!clientName || !weight || meals.breakfast['Option A'].length === 0}
            >
              <Download className="w-6 h-6" />
              تنزيل PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
