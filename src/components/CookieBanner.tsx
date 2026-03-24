import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-800 text-amber-50 p-4 md:p-6 shadow-2xl z-50 border-t-4 border-amber-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Cookie-Hinweis</h3>
            <p className="text-sm text-amber-100">
              Diese Website verwendet nur technisch notwendige Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten.
              Wir verwenden keine Tracking- oder Analyse-Cookies. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Akzeptieren
            </button>
            <button
              onClick={declineCookies}
              className="flex-1 md:flex-none bg-stone-600 hover:bg-stone-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Ablehnen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
