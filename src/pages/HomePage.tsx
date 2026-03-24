import { Utensils, Salad, Users, CircleDot, Star, Phone } from 'lucide-react';

export default function HomePage() {
  const highlights = [
    {
      icon: Utensils,
      title: 'Mittagstisch',
      description: 'Mo-Sa 11:30-14:30 Uhr mit täglich wechselnden Gerichten',
    },
    {
      icon: Salad,
      title: 'Salatbar',
      description: 'Große Auswahl an frischen Salaten und Zutaten',
    },
    {
      icon: Users,
      title: 'Familienfeiern',
      description: 'Verschiedene Säle für Ihre besonderen Anlässe',
    },
    {
      icon: CircleDot,
      title: 'Kegelbahnen',
      description: 'Kegeln und genießen im SAALBAU Ronneburg',
    },
  ];

  const reviews = [
    {
      text: 'Freundlicher Service, leckere Küche und faire Preise bei großen Portionen',
      author: 'Google Rezension',
    },
    {
      text: 'Die Speisekarte ist sehr vielfältig — für jeden Geschmack etwas dabei',
      author: 'Google Rezension',
    },
    {
      text: 'Immer wieder die gleiche Adresse — super Atmosphäre und aufmerksame Bedienung',
      author: 'Google Rezension',
    },
  ];

  return (
    <div>
      <section
        className="relative h-[70vh] min-h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Herzlich Willkommen im Haus Ronneburg
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Deutsch-kroatische Küche mitten in Frankfurt
          </p>
          <a
            href="tel:+4969300595680"
            className="inline-flex items-center space-x-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone size={24} />
            <span>Jetzt reservieren</span>
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
            Unser Restaurant
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            Willkommen im Haus Ronneburg – Ihrem gemütlichen Restaurant mit vielfältiger Speisekarte,
            freundlichem Service und fairen Preisen. Wir sind bekannt für unsere großen Portionen,
            frische Zutaten und eine Salatbar mit großer Auswahl. Genießen Sie deutsch-kroatische
            Spezialitäten in entspannter Atmosphäre.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-12 text-center">
            Unsere Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 text-white rounded-full mb-4">
                  <highlight.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-stone-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-800 text-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Das sagen unsere Gäste
          </h2>
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-stone-700 p-6 rounded-lg shadow-lg"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-amber-100 mb-4 italic leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-amber-400 text-sm font-medium">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-amber-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reservieren Sie jetzt Ihren Tisch
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Wir freuen uns auf Ihren Besuch im Haus Ronneburg!
          </p>
          <a
            href="tel:+4969300595680"
            className="inline-flex items-center space-x-3 bg-white text-amber-700 hover:bg-amber-50 px-10 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone size={28} />
            <span>069 30059568</span>
          </a>
        </div>
      </section>
    </div>
  );
}
