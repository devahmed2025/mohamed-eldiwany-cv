// components/ServiceModal.js
"use client";
import Image from "next/image";
import { useState } from "react";

export default function ServiceModal({ service, isOpen, onClose }) {
  if (!isOpen) return null;

  const whatsappMessage = `مرحبًا، أنا مهتم بخدمة ${service.titleEn}. يرجى تزويدي بالمزيد من التفاصيل.`;

  const whatsappUrl = `https://wa.me/966540584952?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {service.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="mb-6">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {service.description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Features:
            </h3>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
            >
              <span>📱</span>
              WhatsApp Order
            </a>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
