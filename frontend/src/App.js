import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Media from "./components/Media";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Media />
                <Testimonials />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;