import ClientCarousel from "@/components/client-carousell";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ClientCarousel
        dataFile="personal-work"
        title="Personal Work"
        showLinks={true}
      />
    </div>
  );
}
