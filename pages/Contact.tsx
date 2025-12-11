import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="bg-warm-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-deep-900 mb-4">Wir sind für Sie da</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ob Bewerber oder Arbeitgeber – wir unterstützen Sie gerne. Fragen, Feedback oder Kooperationswünsche? Schreiben Sie uns.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-deep-900 text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mint-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-8">Kontaktieren Sie uns</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="text-mint-400 mt-1" />
                  <div>
                    <p className="text-sm text-warm-400 font-medium uppercase tracking-wider mb-1">E-Mail</p>
                    <p className="text-lg">hallo@pflegefachkraft-stellen.de</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-mint-400 mt-1" />
                  <div>
                    <p className="text-sm text-warm-400 font-medium uppercase tracking-wider mb-1">Telefon</p>
                    <p className="text-lg">+49 (0) 30 123 456 78</p>
                    <p className="text-sm text-warm-400 mt-1">Mo-Fr, 09:00 - 17:00 Uhr</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-mint-400 mt-1" />
                  <div>
                    <p className="text-sm text-warm-400 font-medium uppercase tracking-wider mb-1">Büro</p>
                    <p className="text-lg">Gesundheitscampus 1<br/>10115 Berlin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <p className="text-warm-300 italic">"Wir freuen uns darauf, von Ihnen zu hören und gemeinsam Lösungen zu finden."</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-10 md:p-14">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-mint-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="text-mint-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-deep-900 mb-2">Nachricht gesendet!</h3>
                <p className="text-slate-600 mb-8">
                  Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird sich schnellstmöglich bei Ihnen melden.
                </p>
                <Button onClick={() => setIsSent(false)} variant="outline">
                  Neue Nachricht schreiben
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Ihr Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-warm-50 border-transparent focus:bg-white focus:border-mint-300 focus:ring-2 focus:ring-mint-100 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Ihre E-Mail</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl bg-warm-50 border-transparent focus:bg-white focus:border-mint-300 focus:ring-2 focus:ring-mint-100 outline-none transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Betreff</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-warm-50 border-transparent focus:bg-white focus:border-mint-300 focus:ring-2 focus:ring-mint-100 outline-none transition-all">
                    <option>Allgemeine Anfrage</option>
                    <option>Support für Arbeitgeber</option>
                    <option>Technische Frage</option>
                    <option>Presse & Kooperation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Ihre Nachricht</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-warm-50 border-transparent focus:bg-white focus:border-mint-300 focus:ring-2 focus:ring-mint-100 outline-none transition-all resize-none"></textarea>
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Nachricht absenden
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;