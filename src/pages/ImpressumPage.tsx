export default function ImpressumPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8">
          Impressum
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-stone max-w-none">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Angaben gemäß § 5 TMG</h2>

          <div className="mb-6">
            <p className="font-semibold">Restaurant Haus Ronneburg</p>
            <p>im SAALBAU Ronneburg</p>
            <p>Gelnhäuser Straße 2</p>
            <p>60435 Frankfurt am Main</p>
          </div>

          <h3 className="text-xl font-bold text-stone-800 mb-3">Kontakt</h3>
          <div className="mb-6">
            <p>Telefon: 069 30059568</p>
            <p>E-Mail: [E-Mail-Adresse einfügen]</p>
          </div>

          <h3 className="text-xl font-bold text-stone-800 mb-3">Vertreten durch</h3>
          <div className="mb-6">
            <p>Inhaber: Tomo [Nachname einfügen]</p>
          </div>

          <h3 className="text-xl font-bold text-stone-800 mb-3">Umsatzsteuer-ID</h3>
          <div className="mb-6">
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p>[Steuernummer einfügen]</p>
          </div>

          <h3 className="text-xl font-bold text-stone-800 mb-3">Aufsichtsbehörde</h3>
          <div className="mb-6">
            <p>Gesundheitsamt Frankfurt am Main</p>
            <p>Veterinär- und Lebensmittelüberwachung</p>
          </div>

          <h3 className="text-xl font-bold text-stone-800 mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
          <div className="mb-6">
            <p>Berufsbezeichnung: Gastronomiebetrieb</p>
            <p>Zuständige Kammer: IHK Frankfurt am Main</p>
          </div>

          <h3 className="text-xl font-bold text-stone-800 mb-3">Streitschlichtung</h3>
          <div className="mb-6">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-600 ml-1">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <h3 className="text-xl font-bold text-stone-800 mb-3">Haftung für Inhalte</h3>
          <div className="mb-6">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <h3 className="text-xl font-bold text-stone-800 mb-3">Haftung für Links</h3>
          <div className="mb-6">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
              zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
              der Verlinkung nicht erkennbar.
            </p>
          </div>

          <h3 className="text-xl font-bold text-stone-800 mb-3">Urheberrecht</h3>
          <div className="mb-6">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>

          <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-700">
            <p className="text-sm text-stone-700">
              Hinweis: Bitte ergänzen Sie die Platzhalter mit den tatsächlichen Daten des Inhabers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
