import ClientCarousel from "@/components/client-carousell";
import Footer from "@/components/footer";
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
      <Footer />
    </div>
  );
}
