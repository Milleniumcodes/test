import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function ContactPage() {
  const openingHours = [
    { day: 'Montag', hours: '11:30–14:30 & 17:30–23:00' },
    { day: 'Dienstag', hours: 'Geschlossen', closed: true },
    { day: 'Mittwoch', hours: '11:30–14:30 & 17:30–23:00' },
    { day: 'Donnerstag', hours: '11:30–14:30 & 17:30–23:00' },
    { day: 'Freitag', hours: '11:30–14:30 & 17:30–23:00' },
    { day: 'Samstag', hours: '11:30–14:30 & 17:30–23:00' },
    { day: 'Sonntag', hours: '11:30–21:00' },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8 text-center">
          Reservierung & Kontakt
        </h1>

        <div className="bg-amber-700 text-white rounded-lg shadow-xl p-8 md:p-12 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Reservieren Sie jetzt telefonisch
          </h2>
          <a
            href="tel:+4969300595680"
            className="inline-flex items-center space-x-3 bg-white text-amber-700 hover:bg-amber-50 px-10 py-5 rounded-lg text-2xl md:text-3xl font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone size={36} />
            <span>069 30059568</span>
          </a>
          <p className="mt-6 text-amber-100 text-lg">
            Wir freuen uns auf Ihren Anruf und Ihren Besuch!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="text-amber-700" size={32} />
              <h2 className="text-2xl font-bold text-stone-800">Adresse</h2>
            </div>
            <div className="text-stone-700 space-y-2 mb-6">
              <p className="text-lg font-semibold">Restaurant Haus Ronneburg</p>
              <p>im SAALBAU Ronneburg</p>
              <p>Gelnhäuser Straße 2</p>
              <p>60435 Frankfurt am Main</p>
              <p className="mt-4 text-stone-600">Stadtteil: Eckenheim</p>
            </div>
            <div className="flex items-center space-x-3 mb-4 pt-4 border-t border-stone-200">
              <Phone className="text-amber-700" size={24} />
              <div>
                <p className="text-sm text-stone-600">Telefon</p>
                <a
                  href="tel:+4969300595680"
                  className="text-lg font-semibold text-amber-700 hover:text-amber-600"
                >
                  069 30059568
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="text-amber-700" size={32} />
              <h2 className="text-2xl font-bold text-stone-800">Öffnungszeiten</h2>
            </div>
            <div className="space-y-3">
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-2 border-b border-stone-100 ${
                    item.closed ? 'text-stone-400' : 'text-stone-700'
                  }`}
                >
                  <span className="font-semibold">{item.day}</span>
                  <span className={item.closed ? 'text-red-600 font-medium' : ''}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border-2 border-amber-700">
              <p className="text-sm font-semibold text-stone-800 mb-1">Mittagstisch</p>
              <p className="text-stone-700">
                Montag bis Samstag: 11:30–14:30 Uhr
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-stone-800 text-white">
            <h2 className="text-2xl font-bold">So finden Sie uns</h2>
          </div>
          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.8!2d8.69!3d50.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0e1234567890%3A0x1234567890abcdef!2sGelnh%C3%A4user%20Str.%202%2C%2060435%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Haus Ronneburg"
            />
          </div>
        </div>

        <div className="mt-12 bg-green-50 border-2 border-green-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-stone-800 mb-4 text-center">
            Anfahrt & Parkmöglichkeiten
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-stone-700">
            <div>
              <h3 className="font-bold mb-2">Öffentliche Verkehrsmittel</h3>
              <p>
                Das Restaurant ist gut mit öffentlichen Verkehrsmitteln zu erreichen.
                Verschiedene Bus- und Straßenbahnlinien halten in der Nähe.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Mit dem Auto</h3>
              <p>
                Kostenlose Parkplätze sind direkt am SAALBAU Ronneburg verfügbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
