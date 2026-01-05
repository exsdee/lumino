import Navbar from "@/components/navbar";
import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />
      <div className="pt-16">
        <Contact standalone={true} />
      </div>
    </div>
  );
}