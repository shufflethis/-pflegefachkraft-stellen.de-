import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, Calendar, Filter, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import ApplicationModal from '../components/ApplicationModal';
import { MOCK_JOBS } from '../constants';
import { Job } from '../types';

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const filteredJobs = MOCK_JOBS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.employer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-warm-50 min-h-screen pb-20">
      {/* Header Area */}
      <div className="bg-white border-b border-warm-200 pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-900 mb-6">
              Stellenangebote
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Entdecken Sie Stellenangebote in Pflegeheimen, Kliniken und ambulanten Diensten. Finden Sie den Ort, an dem Ihre Arbeit wertgeschätzt wird.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Search Bar - Floating */}
        <div className="bg-white p-3 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-3 border border-warm-100 mb-12">
          <div className="flex-1 flex items-center px-4 h-14 bg-warm-50 rounded-xl focus-within:ring-2 focus-within:ring-mint-200 transition-shadow">
            <Search className="text-slate-400 mr-3" size={20} />
            <input 
              type="text" 
              placeholder="Wonach suchen Sie? (z.B. Pflegefachkraft, Berlin)" 
              className="bg-transparent w-full outline-none text-deep-900 placeholder-slate-400 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="relative group hidden md:block">
               <button className="h-14 px-6 bg-warm-50 rounded-xl text-slate-700 font-medium hover:bg-warm-100 transition-colors flex items-center gap-2">
                  <Filter size={18} />
                  <span>Kategorie</span>
                  <ChevronDown size={16} className="opacity-50" />
               </button>
               {/* Dropdown placeholder */}
            </div>
            <Button className="h-14 px-8 rounded-xl shadow-lg shadow-mint-500/30">
              Jobs finden
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Filters (Desktop) */}
          <div className="hidden lg:block w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="font-serif font-bold text-deep-900 mb-4 text-lg">Kategorien</h3>
              <div className="space-y-2">
                {['Pflegefachkraft', 'Pflegehelfer', 'Leitungspositionen', 'Ausbildung', 'Betreuung'].map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded border-2 border-warm-300 group-hover:border-mint-500 transition-colors flex items-center justify-center">
                      {/* Checkbox simulated */}
                    </div>
                    <span className="text-slate-600 group-hover:text-mint-700 transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
               <h3 className="font-serif font-bold text-deep-900 mb-4 text-lg">Anstellungsart</h3>
               <div className="space-y-2">
                {['Vollzeit', 'Teilzeit', 'Minijob'].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded border-2 border-warm-300 group-hover:border-mint-500 transition-colors"></div>
                    <span className="text-slate-600 group-hover:text-mint-700 transition-colors">{type}</span>
                  </label>
                ))}
               </div>
            </div>
          </div>

          {/* Job List */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center text-sm text-slate-500">
              <p>{filteredJobs.length} Stellenangebote gefunden</p>
              <select className="bg-transparent border-none outline-none font-medium cursor-pointer hover:text-deep-900">
                <option>Neueste zuerst</option>
                <option>Relevanz</option>
              </select>
            </div>

            <div className="space-y-4">
              {filteredJobs.length > 0 ? filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-mint-900/5 transition-all duration-300 border border-warm-100 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-mint-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="bg-mint-50 text-mint-700 text-xs px-3 py-1.5 rounded-full font-bold tracking-wide uppercase">
                          {job.type}
                        </span>
                        <span className="text-slate-400 text-xs flex items-center font-medium">
                          <Calendar size={12} className="mr-1.5" /> {job.datePosted}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-deep-900 mb-2 group-hover:text-mint-600 transition-colors">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-500 text-sm mb-5">
                        <span className="flex items-center font-medium">
                          <Briefcase size={16} className="mr-2 text-mint-500" />
                          {job.employer}
                        </span>
                        <span className="flex items-center font-medium">
                          <MapPin size={16} className="mr-2 text-mint-500" />
                          {job.location}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 mb-5 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <span key={tag} className="text-xs bg-warm-50 border border-warm-200 text-slate-600 px-3 py-1.5 rounded-lg font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-between gap-4 border-t md:border-t-0 md:border-l border-warm-100 pt-4 md:pt-0 md:pl-6 md:w-48">
                      <div className="hidden md:block">
                         {/* Logo placeholder if we had logos */}
                         <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center text-warm-400 font-serif font-bold text-xl">
                            {job.employer.charAt(0)}
                         </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Button onClick={() => handleApplyClick(job)} className="w-full">
                          Bewerben
                        </Button>
                        <button className="text-sm font-medium text-slate-500 hover:text-deep-900 transition-colors text-center">
                          Merken
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )) : (
                 <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-warm-200">
                   <div className="w-20 h-20 bg-warm-50 rounded-full flex items-center justify-center mx-auto mb-6">
                     <Search size={32} className="text-warm-400" />
                   </div>
                   <h3 className="text-xl font-serif font-bold text-deep-900 mb-2">Keine Jobs gefunden</h3>
                   <p className="text-slate-500">Versuchen Sie es mit anderen Filtern oder Suchbegriffen.</p>
                 </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        job={selectedJob} 
      />
    </div>
  );
};

export default Jobs;