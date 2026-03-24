import { Heart, Users, Award, Home } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8 text-center">
          Über uns
        </h1>

        <div
          className="h-96 bg-cover bg-center rounded-lg shadow-xl mb-12"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          }}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center">
            Deutsch-kroatische Küche seit 2003
          </h2>
          <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed space-y-4">
            <p>
              Das Haus Ronneburg in Frankfurt-Eckenheim heißt Sie willkommen! Seit 2003 verwöhnen wir
              unsere Gäste mit traditioneller deutsch-kroatischer Küche in familiärer Atmosphäre.
              Unser erfahrenes Team empfängt Sie mit persönlichem und aufmerksamem Service.
            </p>
            <p>
              Wir legen größten Wert auf frische, hochwertige Zutaten und bereiten alle Speisen mit viel
              Liebe zum Detail zu. Von klassischen deutschen Schnitzeln über kroatische Grillspezialitäten
              bis hin zu internationalen Gerichten – unsere vielfältige Speisekarte bietet für jeden Geschmack
              etwas. Unsere großzügigen Portionen und fairen Preise haben uns zu einer beliebten Adresse
              in Frankfurt gemacht.
            </p>
            <p>
              Das Restaurant ist Teil des SAALBAU Ronneburg und bietet neben dem gastronomischen Angebot
              auch verschiedene Säle für Familienfeiern, Hochzeiten, Firmenfeiern und besondere Anlässe.
              Zudem verfügen wir über Kegelbahnen für gesellige Stunden mit Familie und Freunden.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center border-2 border-amber-700">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 text-white rounded-full mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">
              Mit Herzblut
            </h3>
            <p className="text-stone-600">
              Familiäre Atmosphäre und persönlicher Service
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-md text-center border-2 border-green-700">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">
              Qualität
            </h3>
            <p className="text-stone-600">
              Frische, hochwertige Zutaten in allen Gerichten
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center border-2 border-blue-700">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 text-white rounded-full mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">
              Vielfalt
            </h3>
            <p className="text-stone-600">
              Deutsch-kroatische Küche mit großer Auswahl
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center border-2 border-orange-700">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-700 text-white rounded-full mb-4">
              <Home size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">
              Tradition
            </h3>
            <p className="text-stone-600">
              Seit Jahren Ihre Adresse in Frankfurt
            </p>
          </div>
        </div>

        <div className="bg-stone-800 text-amber-50 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            SAALBAU Ronneburg
          </h2>
          <div className="space-y-4 text-amber-100 leading-relaxed">
            <p>
              Das Restaurant Haus Ronneburg befindet sich im SAALBAU Ronneburg, einem vielseitigen
              Veranstaltungsort in Frankfurt-Eckenheim. Hier bieten wir Ihnen nicht nur kulinarische
              Genüsse, sondern auch:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Verschiedene Säle für Familienfeiern, Hochzeiten und Firmenfeiern</li>
              <li>Kegelbahnen für gesellige Runden mit Freunden und Kollegen</li>
              <li>Flexible Raumgestaltung für Events jeder Größe</li>
              <li>Professionelle Betreuung Ihrer Veranstaltung</li>
            </ul>
            <p className="mt-6 font-semibold text-amber-400">
              Kontaktieren Sie uns gerne für eine individuelle Beratung zu Ihrem Event!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
