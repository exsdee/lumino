interface ContactProps {
  standalone?: boolean;
}

export default function Contact({ standalone = false }: ContactProps) {
  return (
    <section
      className={`py-16 ${
        standalone ? "bg-transparent" : "bg-[var(--color-brown)]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-8 ${
              standalone
                ? "text-[var(--color-brown)]"
                : "text-[var(--color-cream)]"
            }`}
          >
            Let's Work Together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email Contact */}
            <div
              className={`rounded-lg p-6 shadow-lg ${
                standalone ? "bg-white" : "bg-[var(--color-cream)]"
              }`}
            >
              <div className="text-[var(--color-brown)] mb-4">
                <svg
                  className="w-8 h-8 mx-auto mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-brown)] mb-2">
                Email Me
              </h3>
              <a
                href="mailto:luminobusiness@gmail.com"
                className="text-[var(--color-brown)] hover:text-[var(--color-brown)]/80 transition-colors duration-200 text-lg font-medium"
              >
                luminobusiness@gmail.com
              </a>
            </div>

            {/* YT Jobs Link */}
            <div
              className={`rounded-lg p-6 shadow-lg ${
                standalone ? "bg-white" : "bg-[var(--color-cream)]"
              }`}
            >
              <div className="text-[var(--color-brown)] mb-4">
                <svg
                  className="w-8 h-8 mx-auto mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 8v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-2 0l-7 4.5L5 8h14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-brown)] mb-2">
                Hire Me
              </h3>
              <a
                href="https://ytjobs.co/talent/vitrine/1785"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--color-brown)] hover:bg-[var(--color-brown)]/80 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              >
                YT Jobs Profile
              </a>
            </div>

            {/* Twitter Contact */}
            <div
              className={`rounded-lg p-6 shadow-lg ${
                standalone ? "bg-white" : "bg-[var(--color-cream)]"
              }`}
            >
              <div className="text-[var(--color-brown)] mb-4">
                <svg
                  className="w-8 h-8 mx-auto mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-brown)] mb-2">
                Follow Me
              </h3>
              <a
                href="https://x.com/25Lumino"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--color-brown)] hover:bg-[var(--color-brown)]/80 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-12">
            <p
              className={`text-sm ${
                standalone
                  ? "text-[var(--color-brown)]/60"
                  : "text-[var(--color-cream)]/60"
              }`}
            >
              Available for freelance projects • Quick response time •
              Professional quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
