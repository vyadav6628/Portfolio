import { About } from "@/components/sections/About";
import { Architecture } from "@/components/sections/Architecture";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { ResumeUpload } from "@/components/sections/ResumeUpload";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { profile } from "@/data/profile";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vipin Yadav",
  jobTitle: "Associate Full Stack .NET Software Engineer",
  url: "https://vipin-yadav-portfolio.vercel.app",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaunpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Architecture />
          {/* <Testimonials />
          <ResumeUpload /> */}
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
