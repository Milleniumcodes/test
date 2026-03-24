import { useEffect } from 'react';

const pageTitles: Record<string, string> = {
  home: 'Haus Ronneburg - Deutsch-Kroatisches Restaurant Frankfurt Eckenheim',
  menu: 'Speisekarte - Haus Ronneburg Restaurant Frankfurt',
  about: 'Über uns - Haus Ronneburg Restaurant Frankfurt',
  contact: 'Reservierung & Kontakt - Haus Ronneburg Frankfurt',
  impressum: 'Impressum - Haus Ronneburg',
  datenschutz: 'Datenschutzerklärung - Haus Ronneburg',
};

export function usePageTitle(page: string) {
  useEffect(() => {
    document.title = pageTitles[page] || pageTitles.home;
  }, [page]);
}
