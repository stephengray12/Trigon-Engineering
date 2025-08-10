import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/components/Home';
import About from './assets/components/About';
import './index.css';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
