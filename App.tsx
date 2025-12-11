import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Employers from './pages/Employers';
import Candidates from './pages/Candidates';
import About from './pages/About';
import Contact from './pages/Contact';
import { NavigationPaths } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={NavigationPaths.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={NavigationPaths.JOBS} element={<Jobs />} />
          <Route path={NavigationPaths.EMPLOYERS} element={<Employers />} />
          <Route path={NavigationPaths.CANDIDATES} element={<Candidates />} />
          <Route path={NavigationPaths.ABOUT} element={<About />} />
          <Route path={NavigationPaths.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;