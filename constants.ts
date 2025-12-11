import { Job } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Examinierte Pflegefachkraft (m/w/d)',
    employer: 'Seniorenresidenz Am Park',
    location: 'Hamburg',
    type: 'Vollzeit',
    category: 'Pflegefachkraft',
    description: 'Wir suchen eine empathische Fachkraft für unsere moderne Residenz. Ein wertschätzendes Team erwartet Sie.',
    datePosted: '2023-10-25',
    tags: ['Unbefristet', 'Weihnachtsgeld', 'Fortbildung'],
  },
  {
    id: '2',
    title: 'Pflegehelfer mit Herz (m/w/d)',
    employer: 'Ambulanter Pflegedienst Sonnenschein',
    location: 'München',
    type: 'Teilzeit',
    category: 'Pflegehelfer',
    description: 'Unterstützen Sie uns bei der liebevollen Versorgung unserer Klienten in deren häuslichem Umfeld.',
    datePosted: '2023-10-24',
    tags: ['Dienstwagen', 'Flexible Zeiten', 'Familiär'],
  },
  {
    id: '3',
    title: 'Ausbildung zur Pflegefachfrau / zum Pflegefachmann',
    employer: 'Klinikum Nord',
    location: 'Berlin',
    type: 'Ausbildung',
    category: 'Pflegefachkraft',
    description: 'Starten Sie Ihre Karriere in einem der führenden Häuser der Stadt. Wir begleiten Sie professionell.',
    datePosted: '2023-10-26',
    tags: ['Übernahmegarantie', 'Mentor-Programm', 'Tablet zum Lernen'],
  },
  {
    id: '4',
    title: 'Wohnbereichsleitung (m/w/d)',
    employer: 'Haus Waldfrieden',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    category: 'Leitung',
    description: 'Führen Sie Ihr Team mit Kompetenz und Herz. Wir bieten Gestaltungsspielraum und Top-Vergütung.',
    datePosted: '2023-10-22',
    tags: ['Führungsposition', 'Boni', 'Weiterbildung'],
  },
  {
    id: '5',
    title: 'Betreuungskraft nach § 43b (m/w/d)',
    employer: 'Sozialstation West',
    location: 'Köln',
    type: 'Teilzeit',
    category: 'Betreuungskraft',
    description: 'Schenken Sie Zeit und Freude. Gestalten Sie den Alltag unserer Senioren aktiv mit.',
    datePosted: '2023-10-23',
    tags: ['Kreativität', 'Keine Schichtarbeit', 'Jobticket'],
  },
];

export const IMAGES = {
  HERO: 'https://picsum.photos/id/1084/1600/900', // Walrus? No, let's trust abstract IDs or use generic sizes
  NURSE_PATIENT: 'https://picsum.photos/800/600?random=1',
  TEAM: 'https://picsum.photos/800/600?random=2',
  MODERN_CLINIC: 'https://picsum.photos/800/600?random=3',
  TRUST: 'https://picsum.photos/800/600?random=4',
};