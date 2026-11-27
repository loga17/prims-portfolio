import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash'; // <-- Nouvel import
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ScrollToHash /> {/* <-- On l'ajoute ici */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/merci" element={<ThankYou />} />
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<AllProjects />} />
          <Route path="/projets/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;