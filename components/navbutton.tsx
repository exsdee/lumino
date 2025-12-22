interface NavbuttonProps {
  text: string;
}

export default function Navbutton({ text }: NavbuttonProps) {
  return (
    <button className="border-solid border-2 border-[var(--color-brown)] text-[var(--color-brown)] px-4 py-2 rounded hover:bg-[var(--color-brown)] hover:text-[var(--color-cream)] transition-colors duration-300">
      {text}
    </button>
  );
}
