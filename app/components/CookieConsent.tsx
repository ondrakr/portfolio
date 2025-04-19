"use client";

import { useState, useEffect } from 'react';
import Button from './Button';

// Deklarace typu pro window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Kontrola, zda už uživatel dříve nastavil cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    } else if (consent === 'accepted') {
      initializeGTM();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
    initializeGTM();
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  const initializeGTM = () => {
    if (localStorage.getItem('cookieConsent') === 'accepted') {
      // Inicializace Google Tag Manager
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      // Zde můžeš přidat inicializaci Google Analytics nebo jiných skriptů
    }
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto bg-[#0B0D22] border border-03 rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-6">
          <div className="text-white text-center md:text-left w-full md:w-auto">
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Používáme cookies 🍪</h3>
            <p className="text-xs sm:text-sm opacity-70 max-w-[500px]">
              Tyto stránky používají cookies pro zlepšení vašeho uživatelského zážitku a analýzu návštěvnosti.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 sm:gap-4 items-center w-full md:w-auto justify-center md:justify-end">
            <Button 
              content="Přijmout" 
              color={true}
              onClick={acceptCookies}
              className="w-full sm:w-auto"
            />
            <Button 
              content="Odmítnout" 
              color={false}
              onClick={declineCookies}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
