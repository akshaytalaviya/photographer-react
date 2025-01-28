import React from "react";
import Nevbar from "./components/Nevbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Funfact from "./components/Funfact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection"; // Importing the Blog section
import ContactSection from './components/ContactSection';



function App() {
  return (
    <div>
      {/* Navbar Section */}
      <header className="container mx-auto">
        
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto">
        <Nevbar />
        <Home />
        <About />
        <Service />
        <Funfact />                       
        <Portfolio /> {/* Added Portfolio Section */}
        <Resume />
        <Testimonials />
        <BlogSection /> {/* Added Blog Section */}
        <ContactSection />

      </main>
      
    </div>
  );
}

export default App;



