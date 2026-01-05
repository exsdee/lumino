export default function Hero() {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-120 object-cover hidden lg:block "
      >
        <source src="\videos\hero-background-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-96 object-cover lg:hidden "
      >
        <source src="\videos\hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <h1 className="text-[var(--color-cream)] text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Crafting Visual Stories
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl">
          Over 19+ million views
        </p>
        <a href="https://ytjobs.co/talent/vitrine/1785">
          <button className="bg-[var(--color-brown)] hover:bg-[var(--color-brown)]/80 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">
            YT Jobs
          </button>
        </a>
      </div>
    </div>
  );
}
