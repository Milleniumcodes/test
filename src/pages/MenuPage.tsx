import { Clock, Salad, Euro, Phone } from 'lucide-react';

export default function MenuPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8 text-center">
          Unsere Speisekarte
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <p className="text-lg text-stone-700 leading-relaxed">
              Unsere Speisekarte umfasst eine vielfältige Auswahl an deutsch-kroatischen Spezialitäten.
              Von traditionellen deutschen Gerichten bis hin zu mediterranen kroatischen Köstlichkeiten –
              bei uns ist für jeden Geschmack etwas dabei.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-700">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-amber-700" size={32} />
                <h2 className="text-2xl font-bold text-stone-800">Mittagstisch</h2>
              </div>
              <div className="space-y-2 text-stone-700">
                <p className="font-semibold">Montag bis Samstag</p>
                <p className="text-lg">11:30 - 14:30 Uhr</p>
                <p className="mt-4">
                  Täglich wechselnde Gerichte mit frischen Zutaten zu attraktiven Preisen.
                </p>
                <p className="text-xl font-bold text-amber-700 mt-4">
                  Beispiel: Schnitzel ab €10,-
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-700">
              <div className="flex items-center space-x-3 mb-4">
                <Salad className="text-green-700" size={32} />
                <h2 className="text-2xl font-bold text-stone-800">Salatbar</h2>
              </div>
              <div className="space-y-2 text-stone-700">
                <p className="font-semibold">Große Auswahl</p>
                <p>
                  Unsere beliebte Salatbar bietet Ihnen eine vielfältige Auswahl an frischen Salaten
                  und Zutaten. Stellen Sie sich Ihren Lieblingssalat selbst zusammen!
                </p>
                <ul className="mt-4 space-y-1 list-disc list-inside">
                  <li>Frische, saisonale Zutaten</li>
                  <li>Verschiedene Dressings</li>
                  <li>Täglich frisch zubereitet</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-stone-100 p-6 rounded-lg mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Euro className="text-stone-700" size={32} />
              <h2 className="text-2xl font-bold text-stone-800">Preisinformation</h2>
            </div>
            <p className="text-lg text-stone-700">
              Durchschnittliche Preisspanne: <span className="font-bold text-amber-700">20–30 € pro Person</span>
            </p>
            <p className="text-stone-600 mt-2">
              Bekannt für faire Preise und großzügige Portionen
            </p>
          </div>

          <div className="text-center border-t-2 border-stone-200 pt-8">
            <h3 className="text-xl font-bold text-stone-800 mb-4">
              Aktuelle Speisekarte & Reservierung
            </h3>
            <p className="text-stone-700 mb-6">
              Für unsere aktuelle Speisekarte und Tagesempfehlungen kontaktieren Sie uns gerne telefonisch.
            </p>
            <a
              href="tel:+4969300595680"
              className="inline-flex items-center space-x-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone size={24} />
              <span>069 30059568</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="h-64 bg-cover bg-center rounded-lg shadow-md"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800)',
            }}
          />
          <div
            className="h-64 bg-cover bg-center rounded-lg shadow-md"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
