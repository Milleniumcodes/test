import { Clock, Salad, Euro, Phone, UtensilsCrossed } from 'lucide-react';
import MenuDisplay from '../components/MenuDisplay';

export default function MenuPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8 text-center">
          Unsere Speisekarte
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <p className="text-lg text-stone-700 leading-relaxed">
              Unsere Speisekarte umfasst eine vielfältige Auswahl an deutsch-kroatischen Spezialitäten.
              Von traditionellen deutschen Schnitzel-Klassikern bis hin zu mediterranen kroatischen Grillspezialitäten –
              bei uns ist für jeden Geschmack etwas dabei.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-700">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-amber-700" size={28} />
                <h2 className="text-xl font-bold text-stone-800">Öffnungszeiten</h2>
              </div>
              <div className="space-y-2 text-sm text-stone-700">
                <div>
                  <p className="font-semibold">Mo–Sa: 11:30–23:00 Uhr</p>
                  <p className="text-xs text-stone-600">Warme Küche bis 21:30 Uhr</p>
                </div>
                <div>
                  <p className="font-semibold">So & Feiertage: 11:30–21:00 Uhr</p>
                  <p className="text-xs text-stone-600">Warme Küche bis 20:30 Uhr</p>
                </div>
                <p className="text-xs font-semibold text-amber-700 mt-2">Dienstag Ruhetag</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-700">
              <div className="flex items-center space-x-3 mb-4">
                <UtensilsCrossed className="text-blue-700" size={28} />
                <h2 className="text-xl font-bold text-stone-800">Spezial-Angebote</h2>
              </div>
              <div className="space-y-1 text-sm text-stone-700">
                <p><span className="font-semibold">Mi:</span> Grilltag</p>
                <p><span className="font-semibold">Do:</span> Schnitzeltag</p>
                <p><span className="font-semibold">Fr:</span> Pljeskavica Tag</p>
                <p className="text-xs text-stone-600 mt-2">*Außer an Feiertagen</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-700">
              <div className="flex items-center space-x-3 mb-4">
                <Salad className="text-green-700" size={28} />
                <h2 className="text-xl font-bold text-stone-800">Salatbar</h2>
              </div>
              <div className="space-y-1 text-sm text-stone-700">
                <p>Frische Salate</p>
                <p>Verschiedene Dressings</p>
                <p>Zu vielen Gerichten inklusive</p>
                <p className="text-xs text-stone-600 mt-2">Täglich frisch zubereitet</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 rounded-lg p-8 mb-8">
          <MenuDisplay />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Phone className="text-amber-700" />
                Reservierung & Kontakt
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-stone-600">Telefon</p>
                  <p className="text-xl font-bold text-stone-800">069 30 05 95 68</p>
                </div>
                <div>
                  <p className="text-sm text-stone-600">Fax</p>
                  <p className="text-lg font-semibold text-stone-800">069 34 82 58 94</p>
                </div>
                <div>
                  <p className="text-sm text-stone-600">Adresse</p>
                  <p className="text-lg font-semibold text-stone-800">
                    Gelnhäuser Straße 2<br />
                    60435 Frankfurt am Main
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200">
                  <p className="text-sm font-semibold text-stone-700 mb-2">Folgen Sie uns:</p>
                  <p className="text-stone-700">
                    Facebook & Instagram: <span className="font-semibold">Haus Ronneburg</span> / <span className="font-semibold">@haus_ronneburg</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-4">
                <Euro className="inline text-amber-700 mr-2" size={28} />
                Preisinformation
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-stone-700 leading-relaxed">
                  Unsere Speisekarte bietet große Vielfalt für jeden Geschmack und jedes Budget:
                </p>
                <ul className="space-y-2 text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold mt-1">•</span>
                    <span><strong>Vorspeisen:</strong> ab 6,50 €</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold mt-1">•</span>
                    <span><strong>Schnitzel & Grillgerichte:</strong> 11,00–17,80 €</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold mt-1">•</span>
                    <span><strong>Internationale Spezialitäten:</strong> 15,10–25,20 € (p.P.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold mt-1">•</span>
                    <span><strong>Premium Steaks:</strong> 26,50–36,50 € (250–300g)</span>
                  </li>
                </ul>
                <p className="text-sm text-stone-600 pt-4 border-t border-stone-200">
                  Alle Preise inklusive gesetzlicher Mehrwertsteuer und Bedienung.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="h-72 bg-cover bg-center rounded-lg shadow-md hover:shadow-lg transition-shadow"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800)',
            }}
          />
          <div
            className="h-72 bg-cover bg-center rounded-lg shadow-md hover:shadow-lg transition-shadow"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3956679/pexels-photo-3956679.jpeg?auto=compress&cs=tinysrgb&w=800)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
