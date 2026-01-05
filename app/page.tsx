import ClientCarousel from "@/components/client-carousell";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ClientCarousel
        dataFile="client-work"
        title="Client Work"
        showLinks={true}
      />
      <ClientCarousel
        dataFile="personal-work"
        title="Personal Work"
        showLinks={true}
      />
      <Contact />
    </div>
  );
}
