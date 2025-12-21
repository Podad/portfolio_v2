import Terminal from "@/components/Terminal/Terminal";
import CustomCursor from "@/components/Cursor/CustomCursor";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import HackerBackground from "@/components/HackerBackground/HackerBackground";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <HackerBackground />
      <main className="relative bg-transparent text-white">
        {/* Hero Section - Terminal */}
        <Terminal />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center text-sm text-zinc-500">
            <p>© 2025 Portfolio Cloud & DevOps Engineer. Tous droits réservés.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
