import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={IMAGES.MODERN_CLINIC} alt="Modernes Gesundheitszentrum" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-900/70 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Unsere Vision</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg prose-slate mx-auto text-justify">
          <p className="lead text-xl md:text-2xl font-serif text-deep-800 mb-8 border-l-4 border-mint-500 pl-6">
            Wir haben pflegefachkraft-stellen.de mit einem klaren Ziel gegründet: Wir wollen dem Fachkräftemangel in Deutschland aktiv und konstruktiv begegnen, indem wir Hürden abbauen und Menschen verbinden.
          </p>
          
          <p className="text-slate-600 mb-6">
            Der Pflegebereich steht vor enormen Herausforderungen. Doch anstatt nur über Probleme zu sprechen, wollen wir Teil der Lösung sein. Unsere Plattform ist aus der Überzeugung entstanden, dass Technologie dem Menschen dienen muss – nicht umgekehrt. Wir sind ein unabhängiges Team aus Entwicklern und Pflege-Enthusiasten, die erkannt haben, dass der Bewerbungsprozess im Gesundheitswesen oft zu kompliziert, zu teuer und zu unpersönlich ist.
          </p>

          <p className="text-slate-600 mb-6">
            Unsere Vision ist ein transparenter Arbeitsmarkt, auf dem Pflegekräfte ihre Traumstelle finden, ohne sich durch unübersichtliche Portale kämpfen zu müssen. Gleichzeitig möchten wir Einrichtungen jeder Größe – vom kleinen ambulanten Pflegedienst bis zum großen Klinikverbund – die Möglichkeit geben, sich professionell und authentisch zu präsentieren. Deshalb ist und bleibt die Basisfunktion unserer Plattform für alle Beteiligten kostenlos. Wir finanzieren uns nicht durch Barrieren, sondern setzen auf Kooperation und Qualität.
          </p>

          <p className="text-slate-600 mb-6">
            Technologisch setzen wir auf REACT, eine der modernsten Webtechnologien der Welt. Warum? Weil Pflegekräfte keine Zeit zu verlieren haben. Die Seite muss schnell laden, auch bei schlechtem Empfang im Pausenraum funktionieren und absolut zuverlässig sein. Durch diesen zukunftssicheren Ansatz garantieren wir eine Performance, die dem hohen Tempo des Pflegealltags gerecht wird. Wir sind stolz darauf, den digitalen Wandel in der Pflege mitzugestalten – mit Herz, Verstand und technischer Exzellenz.
          </p>
        </div>
        
        <div className="mt-16 bg-mint-50 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 justify-center text-center md:text-left">
           <div className="p-4 bg-white rounded-full shadow-sm text-mint-600">
             <HeartHandshake size={48} />
           </div>
           <div>
             <h3 className="text-xl font-bold text-deep-900">Gemeinsam stark</h3>
             <p className="text-slate-600">Lassen Sie uns zusammen die Zukunft der Pflege gestalten.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;