import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Heart, ShieldCheck, Users, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { NavigationPaths } from '../types';
import { IMAGES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center bg-warm-50 pt-10 md:pt-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-mint-50/50 rounded-bl-[10rem] z-0 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-mint-100 shadow-sm text-mint-700 text-sm font-medium">
                <Sparkles size={16} />
                <span>Die moderne Plattform für Pflegeberufe</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-deep-900 leading-[1.1] tracking-tight">
                Arbeiten, wo <br/>
                <span className="text-mint-600 italic relative inline-block">
                  Menschlichkeit
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-mint-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> <br/>
                zählt.
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Ihre Zukunft in der Pflege beginnt hier. Wir verbinden qualifizierte Fachkräfte und Arbeitgeber in ganz Deutschland – einfach, transparent und herzlich.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={() => navigate(NavigationPaths.JOBS)} className="h-14 px-8 text-lg shadow-mint-300/50">
                  Stellen finden
                </Button>
                <Button size="lg" variant="secondary" onClick={() => navigate(NavigationPaths.EMPLOYERS)} className="h-14 px-8 text-lg bg-white border border-warm-200 shadow-sm">
                  Für Arbeitgeber
                </Button>
              </div>

              <div className="pt-8 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p>Bereits über <span className="font-bold text-deep-900">5.000+</span> vermittelte Pflegekräfte.</p>
              </div>
            </div>

            {/* Image Visual */}
            <div className="lg:w-1/2 w-full relative animate-fade-in delay-200">
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-mint-900/10">
                <img 
                  src={IMAGES.HERO} 
                  alt="Glückliche Pflegekraft" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-900/40 via-transparent to-transparent"></div>
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hidden sm:block">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-mint-100 rounded-full text-mint-600">
                      <Heart fill="currentColor" size={24} />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-deep-900 text-lg">Unser Versprechen</p>
                      <p className="text-slate-600 text-sm">Kostenlos, fair und auf Augenhöhe für alle Pflegehelden.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decor Elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-mint-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Text Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-mint-600 font-medium tracking-wider uppercase text-sm">Unsere Mission</span>
            <h2 className="text-3xl md:text-5xl font-serif text-deep-900 mt-3 mb-6">Ein Zuhause für Ihre Karriere</h2>
            <div className="w-24 h-1 bg-mint-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg prose-slate mx-auto text-justify leading-loose">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-mint-600 first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px]">
              Willkommen auf pflegefachkraft-stellen.de, der digitalen Heimat für alle, die Pflege nicht nur als Beruf, sondern als Berufung verstehen. Diese Plattform wurde geschaffen, um eine Brücke zu bauen – zwischen engagierten Pflegekräften, die nach einem Arbeitsumfeld suchen, das ihre Werte teilt, und Arbeitgebern, die dringend qualifizierte Unterstützung benötigen.
            </p>
            <p>
              Wir wissen, dass Pflege mehr ist als medizinische Versorgung. Es ist Zuwendung, Trost und Sicherheit. Deshalb haben wir eine Jobbörse entwickelt, die genau diese Werte widerspiegelt. Dank modernster Technologie finden Sie hier nicht nur schnell und präzise passende Angebote, sondern erleben eine Plattform, die so reibungslos funktioniert, wie gute Teamarbeit auf der Station. Ob mobil am Smartphone nach der Schicht oder entspannt am Tablet – Ihre nächste berufliche Chance ist nur wenige Klicks entfernt.
            </p>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Search, 
                color: 'bg-mint-100 text-mint-700', 
                title: 'Smarte Suche', 
                text: 'Unsere intelligente Suche filtert präzise nach Ihren Wünschen. Finden Sie Jobs, die zu Ihrer Qualifikation passen.' 
              },
              { 
                icon: ShieldCheck, 
                color: 'bg-blue-100 text-blue-700', 
                title: 'Geprüfte Qualität', 
                text: 'Wir arbeiten nur mit vertrauenswürdigen Einrichtungen zusammen. Seriosität steht für uns an erster Stelle.' 
              },
              { 
                icon: Users, 
                color: 'bg-rose-100 text-rose-700', 
                title: 'Direkter Draht', 
                text: 'Keine Umwege, keine Gebühren. Bewerben Sie sich direkt und starten Sie den Dialog auf Augenhöhe.' 
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-warm-100">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-deep-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Split Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 relative order-2 md:order-1">
               <div className="absolute -inset-4 bg-mint-50 rounded-[3rem] -z-10 transform -rotate-3"></div>
               <img 
                 src={IMAGES.NURSE_PATIENT} 
                 alt="Pflegekraft im Gespräch" 
                 className="w-full h-auto rounded-[2.5rem] shadow-xl transform rotate-0 hover:rotate-1 transition-transform duration-500"
               />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <span className="text-mint-600 font-bold tracking-wide uppercase text-sm mb-2 block">Warum wir?</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-900 mb-8 leading-tight">
                Weil Pflege <br/>Vertrauenssache ist.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Jeder Tag in der Pflege ist eine neue Geschichte. Es sind die kleinen Momente des Lächelns, die Hand auf der Schulter, die professionelle Hilfe in schwierigen Situationen.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Wir bei pflegefachkraft-stellen.de verstehen das. Deshalb haben wir eine Umgebung geschaffen, die so respektvoll ist wie Ihre Arbeit. Unsere Technologie tritt in den Hintergrund, damit das Menschliche im Vordergrund steht.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => navigate(NavigationPaths.CANDIDATES)} className="group">
                  Für Bewerber <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-deep-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute w-96 h-96 bg-mint-500 rounded-full blur-[100px] -top-20 -left-20"></div>
             <div className="absolute w-96 h-96 bg-warm-500 rounded-full blur-[100px] bottom-0 right-0"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Bereit für den nächsten Schritt?</h2>
            <p className="text-warm-200 text-xl mb-10 leading-relaxed">
              Finden Sie den Job, der Sie glücklich macht. Tausende offene Stellen warten auf Ihre Expertise und Ihr Herz.
            </p>
            <Button size="lg" className="bg-white text-deep-900 hover:bg-mint-50 border-none shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 transition-all" onClick={() => navigate(NavigationPaths.JOBS)}>
              Jetzt Stellenangebote ansehen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;