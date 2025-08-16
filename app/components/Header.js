"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [nextPrayer, setNextPrayer] = useState('');
  const [timeToPrayer, setTimeToPrayer] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    
    // Update date and prayer times
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const updateDateTime = () => {
    // Update current date
    const now = new Date();
    const dateOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(now.toLocaleDateString('ar-SA', dateOptions));

    // Calculate next prayer time (simplified calculation)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Prayer times (you can adjust these or fetch from an API)
    const prayerTimes = {
      fajr: { hour: 5, minute: 30, name: 'الفجر' },
      dhuhr: { hour: 12, minute: 30, name: 'الظهر' },
      asr: { hour: 15, minute: 45, name: 'العصر' },
      maghrib: { hour: 18, minute: 15, name: 'المغرب' },
      isha: { hour: 19, minute: 45, name: 'العشاء' }
    };

    let nextPrayerInfo = null;
    let minDiff = Infinity;

    Object.entries(prayerTimes).forEach(([prayer, time]) => {
      let prayerTime = new Date();
      prayerTime.setHours(time.hour, time.minute, 0, 0);
      
      // If prayer time has passed today, check tomorrow
      if (prayerTime < now) {
        prayerTime.setDate(prayerTime.getDate() + 1);
      }
      
      const diff = prayerTime - now;
      if (diff < minDiff && diff > 0) {
        minDiff = diff;
        nextPrayerInfo = { ...time, name: time.name };
      }
    });

    if (nextPrayerInfo) {
      setNextPrayer(nextPrayerInfo.name);
      
      // Calculate time until prayer
      const hours = Math.floor(minDiff / (1000 * 60 * 60));
      const minutes = Math.floor((minDiff % (1000 * 60 * 60)) / (1000 * 60));
      
      if (hours > 0) {
        setTimeToPrayer(`${hours} ساعة و ${minutes} دقيقة`);
      } else {
        setTimeToPrayer(`${minutes} دقيقة`);
      }
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/dwn/Logo.svg"
                alt="Nebras Al Arab Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Nebras Al Arab
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 arabic-font-bold">
                مطابع نبراس العرب
              </p>
            </div>
          </Link>

          {/* Date and Prayer Time Display */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Calendar size={16} />
              <span className="arabic-font">{currentDate}</span>
            </div>
            {nextPrayer && (
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Clock size={16} />
                <span className="arabic-font">الوقت المتبقي لصلاة {nextPrayer}: {timeToPrayer}</span>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/billing"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Billing
            </Link>
            <Link
              href="/qr-codes"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              QR Codes
            </Link>
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

        {/* Mobile Date and Prayer Display */}
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
              <Calendar size={16} />
              <span className="arabic-font">{currentDate}</span>
            </div>
            {nextPrayer && (
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm">
                <Clock size={16} />
                <span className="arabic-font">{nextPrayer}: {timeToPrayer}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/billing"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Billing
            </Link>
            <Link
              href="/qr-codes"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              QR Codes
            </Link>
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-300"
            >
              {isDarkMode ? (
                <>
                  <Sun size={18} /> Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} /> Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
