import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, BarChart3, Zap } from 'lucide-react';
import Button from '../components/Button';
import { NavigationPaths } from '../types';
import { IMAGES } from '../constants';

const Employers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-warm-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-900 mb-6">
            Finden Sie die Besten für Ihr Team
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            pflegefachkraft-stellen.de ist der ideale Partner für Pflegeeinrichtungen, Kliniken und ambulante Dienste. Modern, reichweitenstark und kostenfrei.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={IMAGES.TEAM} alt="Teammeeting in der Pflege" className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-900/90 to-transparent p-8">
                  <p className="text-white font-serif italic text-lg">"Endlich Bewerbungen, die wirklich passen."</p>
                </div>
             </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="prose prose-lg text-slate-600">
              <p>
                Der Mangel an qualifiziertem Pflegepersonal ist eine der größten Herausforderungen unserer Zeit. Umso wichtiger ist es, dort präsent zu sein, wo Fachkräfte sich wohlfühlen. Unsere Plattform bietet Ihnen genau diesen Raum. Wir haben pflegefachkraft-stellen.de nicht als klassisches Jobboard konzipiert, sondern als modernes Recruiting-Werkzeug, das die Bedürfnisse der Branche versteht.
              </p>
              <p>
                Sie können Ihre offenen Stellen jederzeit, unkompliziert und vollständig kostenlos veröffentlichen. Dank unserer fortschrittlichen React-basierten Technologie laden Ihre Anzeigen blitzschnell und sehen auf jedem Endgerät – vom Smartphone bis zum Desktop – hervorragend aus. Das bedeutet für Sie: Geringere Abbruchraten bei Bewerbern und eine professionelle Darstellung Ihrer Arbeitgebermarke.
              </p>
              <p>
                In einem Umfeld, das Menschlichkeit, Kompetenz und Professionalität ausstrahlt, erreichen Sie genau die Kandidaten, die diese Werte teilen. Nutzen Sie die Chance, Ihr Team zu verstärken, ohne Budgethürden und ohne technische Barrieren.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-mint-50 rounded-2xl">
                <div className="mt-1 bg-white p-2 rounded-full text-mint-600 shadow-sm">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-900">Maximale Geschwindigkeit</h4>
                  <p className="text-sm text-slate-600">Technologisch führend für beste Performance und SEO-Rankings.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-warm-50 rounded-2xl">
                <div className="mt-1 bg-white p-2 rounded-full text-warm-600 shadow-sm">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-900">Kostenlose Inserate</h4>
                  <p className="text-sm text-slate-600">Keine versteckten Gebühren. Volle Transparenz.</p>
                </div>
              </div>
            </div>

            <Button size="lg" onClick={() => navigate(NavigationPaths.CONTACT)}>
              Jetzt Stelle inserieren
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;