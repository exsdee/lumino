import Navbutton from "./navbutton";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-16 bg-[var(--color-cream)] text-white px-8">
      <div className="flex items-center space-x-4">
        <img
          src="images\Lumino.jpg"
          alt="Logo"
          className="object-contain h-12"
        />
        <h1 className="text-[var(--color-brown)] font-title text-5xl">
          Lumino
        </h1>
      </div>

      <div className="space-x-4">
        <Navbutton text="Home" />
        <Navbutton text="Client Work" />
        <Navbutton text="Personal Projects" />
        <Navbutton text="Contact" />
      </div>
    </div>
  );
}
