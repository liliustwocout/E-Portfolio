import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollCanvas3D from "./components/ScrollCanvas3D";
import ScrollProgressBar from "./components/ScrollProgressBar";
import MouseSpotlight from "./components/MouseSpotlight";

function App() {
  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Scroll Progress Bar at the top edge */}
      <ScrollProgressBar />

      {/* Dynamic Cursor Spotlight Effect */}
      <MouseSpotlight />

      {/* 3D Scroll Interactive Background Scene */}
      <ScrollCanvas3D />

      {/* Cyber Grid Pattern Background Overlay */}
      <div className="fixed inset-0 pointer-events-none cyber-bg-grid opacity-30 z-[1]" />

      {/* Main Page Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;