import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/1-header/Header';
import Hero from './Components/2-hero/Hero';
import Main from './Components/3-main/Main'; 
import Contact from './Components/4-contact/Contact';
import Footer from './Components/5-footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [scrollbutn, setScrollButn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollButn(true);
      } else {
        setScrollButn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    <div className="container mx-auto px-4" id="up">
      <Router basename="/MyPortfolio">
        <Header />
        <div id="hero">
          <Hero />
        </div>
        <div className="h-px bg-gray-200 my-8" />
        <div id="main">
          <Main />
        </div>
        <div className="h-px bg-gray-200 my-8" />
        <div id="contact">
          <Contact />
        </div>
        <Footer />
        <a 
          style={{ opacity: scrollbutn ? 1 : 0, transition: "0.5s" }} 
          href="#up" 
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
          }}
        >
          <button className='icon-arrow-thin-up scroll2top'></button>
        </a>
      </Router>
    </div>
  );
}

export default App;
