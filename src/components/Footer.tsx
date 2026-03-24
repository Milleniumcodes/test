import { Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-stone-800 text-amber-50 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">im SAALBAU Ronneburg</p>
                  <p>Gelnhäuser Str. 2</p>
                  <p>60435 Frankfurt am Main</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0" />
                <a href="tel:+4969300595680" className="hover:text-amber-400 transition-colors">
                  069 30059568
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Montag:</span>
                <span>11:30–14:30 & 17:30–23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Dienstag:</span>
                <span className="text-amber-400">Geschlossen</span>
              </div>
              <div className="flex justify-between">
                <span>Mittwoch–Samstag:</span>
                <span>11:30–14:30 & 17:30–23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sonntag:</span>
                <span>11:30–21:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Rechtliches</h3>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('impressum')}
                className="block hover:text-amber-400 transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => onNavigate('datenschutz')}
                className="block hover:text-amber-400 transition-colors"
              >
                Datenschutzerklärung
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 text-center text-sm text-amber-200">
          <p>&copy; {new Date().getFullYear()} Haus Ronneburg. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
