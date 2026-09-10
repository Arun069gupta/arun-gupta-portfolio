import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Research from '@/components/sections/Research';
import Certificates from '@/components/sections/Certificates';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-900 text-gray-100 overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-700/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-accent-500/5 rounded-full blur-[180px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Research />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
