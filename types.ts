export interface Job {
  id: string;
  title: string;
  employer: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Ausbildung' | 'Minijob';
  category: 'Pflegefachkraft' | 'Pflegehelfer' | 'Betreuungskraft' | 'Assistenz' | 'Leitung';
  description: string;
  datePosted: string;
  tags: string[];
}

export interface FilterState {
  keyword: string;
  location: string;
  category: string;
}

export enum NavigationPaths {
  HOME = '/',
  JOBS = '/stellenangebote',
  EMPLOYERS = '/arbeitgeber',
  CANDIDATES = '/bewerber',
  ABOUT = '/ueber-uns',
  CONTACT = '/kontakt',
}