import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Proof } from "@/components/sections/proof";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { site } from "@/lib/content";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Full-stack Product Engineer",
  url: "https://harrymiller.vercel.app",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  sameAs: [site.links.github, site.links.linkedin],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "SwiftUI",
    "Firebase",
    "Supabase",
    "Stripe",
    "Full-stack development",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Proof />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
    </>
  );
}
