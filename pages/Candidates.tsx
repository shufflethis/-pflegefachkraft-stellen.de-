import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import { NavigationPaths } from '../types';
import { IMAGES } from '../constants';

const Candidates: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-warm-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-900 mb-8">
            Mehr als nur ein Job.<br/>Eine Herzensangelegenheit.
          </h1>
          <div className="w-24 h-1 bg-mint-500 mx-auto rounded-full"></div>
        </div>

        {/* Flowing Text Content */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm space-y-8 text-lg text-slate-600 leading-relaxed text-justify hyphens-auto">
          <p>
            Pflege ist das Rückgrat unserer Gesellschaft. Ohne Menschen wie Sie – die hinsehen, wenn andere wegsehen, die Hände halten, Wunden versorgen und Trost spenden – würde unser Zusammenleben nicht funktionieren. Wir wissen, wie anspruchsvoll, aber auch wie unglaublich wertvoll Ihre tägliche Arbeit ist. Deshalb haben wir pflegefachkraft-stellen.de entwickelt: um Ihnen den Respekt und die Unterstützung zu bieten, die Sie verdienen.
          </p>
          
          <img src={IMAGES.TRUST} alt="Vertrauensvolle Pflege" className="w-full h-64 md:h-80 object-cover rounded-3xl my-8 shadow-md" />

          <p>
            Als Pflegefachkraft oder Pflegehelfer leisten Sie täglich Großartiges. Die Aufgaben sind vielfältig und fordern sowohl hohe fachliche Kompetenz als auch tiefes menschliches Einfühlungsvermögen. Von der medizinischen Behandlungspflege über die genaue Dokumentation bis hin zur psychosozialen Betreuung von Patienten und Angehörigen – Sie sind Manager, Seelsorger und medizinischer Experte in einer Person. Diese Verantwortung muss wertgeschätzt werden.
          </p>

          <p>
            Auf unserer Plattform finden Sie Arbeitgeber, die genau das verstehen. Wir legen großen Wert darauf, Stellenangebote zu präsentieren, die nicht nur ein Gehalt bieten, sondern echte Perspektiven. Teamarbeit auf Augenhöhe, moderne Arbeitszeitmodelle, Möglichkeiten zur Weiterbildung und Spezialisierung sowie ein sicheres Arbeitsumfeld stehen im Fokus. Der Pflegeberuf bietet heute mehr Chancen als je zuvor – sei es durch die Weiterbildung zur Praxisanleitung, zur Wohnbereichsleitung oder durch die Spezialisierung in Bereichen wie Wundmanagement oder Palliativpflege.
          </p>

          <p>
            Wir möchten Sie stärken und ermutigen, Ihren beruflichen Weg selbstbewusst zu gehen. pflegefachkraft-stellen.de ist Ihr Werkzeug dafür: einfach, menschlich und unterstützend. Finden Sie hier nicht einfach nur eine Stelle, sondern einen Ort, an dem Sie wachsen können und an dem Ihre Menschlichkeit zählt.
          </p>

          <div className="pt-8 text-center">
             <Button size="lg" onClick={() => navigate(NavigationPaths.JOBS)}>
               Zu den Stellenangeboten
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;