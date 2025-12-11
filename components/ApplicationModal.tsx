import React, { useState } from 'react';
import { X, Upload, CheckCircle, Heart } from 'lucide-react';
import Button from './Button';
import { Job } from '../types';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, job }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 rounded-full"
        >
          <X size={20} />
        </button>

        {step === 'form' ? (
          <div className="p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-mint-100 text-mint-700 text-xs font-semibold rounded-full mb-2">
                Schnellbewerbung
              </span>
              <h2 className="text-2xl font-serif text-deep-900 mb-1">Bewerbung starten</h2>
              {job && (
                <p className="text-slate-500 text-sm">
                  für die Stelle <span className="font-medium text-mint-700">{job.title}</span>
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 ml-1">Vorname</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-warm-50 border-transparent focus:bg-white focus:border-mint-300 focus:ring-2 focus:ring-mint-100 outline-none transition-all"
                    placeholder="Max"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 ml-1">Nachname</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-warm-50 border-transparent focus:bg-white focus:border-mint-300 focus:ring-2 focus:ring-mint-100 outline-none transition-all"
                    placeholder="Mustermann"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 ml-1">E-Mail Adresse</label>
                <input 
                  required 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-warm-50 border-transparent focus:bg-white focus:border-mint-300 focus:ring-2 focus:ring-mint-100 outline-none transition-all"
                  placeholder="max.mustermann@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 ml-1">Qualifikation</label>
                <select className="w-full px-4 py-3 rounded-xl bg-warm-50 border-transparent focus:bg-white focus:border-mint-300 focus:ring-2 focus:ring-mint-100 outline-none transition-all">
                  <option>Examinierte Pflegefachkraft</option>
                  <option>Pflegehelfer/in</option>
                  <option>Medizinische Fachangestellte/r</option>
                  <option>In Ausbildung</option>
                  <option>Quereinsteiger/in</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 ml-1">Nachricht (Optional)</label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-warm-50 border-transparent focus:bg-white focus:border-mint-300 focus:ring-2 focus:ring-mint-100 outline-none transition-all resize-none"
                  placeholder="Wann sind Sie am besten erreichbar?"
                />
              </div>

              <div className="border-2 border-dashed border-mint-200 rounded-xl p-4 text-center cursor-pointer hover:bg-mint-50 transition-colors group">
                <Upload className="mx-auto h-6 w-6 text-mint-400 group-hover:text-mint-600 mb-2" />
                <p className="text-sm text-slate-500">Lebenslauf hier ablegen oder klicken</p>
                <p className="text-xs text-slate-400 mt-1">(PDF, JPG, max 5MB)</p>
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full">
                  Jetzt kostenlos bewerben
                </Button>
                <p className="text-center text-xs text-slate-400 mt-3">
                  Mit dem Absenden stimmen Sie unseren Datenschutzbestimmungen zu.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center bg-mint-50/50 h-full flex flex-col items-center justify-center">
             <div className="w-20 h-20 bg-mint-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <Heart className="h-10 w-10 text-mint-600" fill="currentColor" />
             </div>
             <h3 className="text-2xl font-serif text-deep-900 mb-2">Vielen Dank!</h3>
             <p className="text-slate-600 mb-8 max-w-xs mx-auto">
               Ihre Bewerbung wurde erfolgreich an den Arbeitgeber übermittelt. Wir drücken Ihnen die Daumen!
             </p>
             <Button onClick={onClose} variant="outline">
               Zurück zu den Stellenangeboten
             </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;