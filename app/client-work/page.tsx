import ClientCarousel from "@/components/client-carousell";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ClientCarousel
        dataFile="client-work"
        title="Client Work"
        showLinks={true}
      />
      <Contact />
    </div>
  );
}
