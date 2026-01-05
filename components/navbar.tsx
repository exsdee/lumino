"use client";

import { useState } from "react";
import Link from "next/link";
import Navbutton from "./navbutton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Client Work", href: "/client-work" },
    { text: "Personal Projects", href: "/personal-projects" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between h-16 bg-[var(--color-cream)] text-white px-8 relative">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img
            src="/images/Lumino.png"
            alt="Logo"
            className="object-contain h-12 cursor-pointer"
          />
        </Link>
        <Link href="/">
          <h1 className="text-[var(--color-brown)] font-title text-5xl cursor-pointer">
            Lumino
          </h1>
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-[var(--color-brown)] text-2xl cursor-pointer"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[var(--color-cream)] shadow-lg lg:hidden z-50">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="px-8 py-3 text-[var(--color-brown)] hover:bg-[var(--color-brown)] hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation Buttons */}
      <div className="hidden lg:flex space-x-4">
        {navItems.map((item) => (
          <Link key={item.text} href={item.href}>
            <Navbutton text={item.text} />
          </Link>
        ))}
      </div>
    </nav>
  );
}
