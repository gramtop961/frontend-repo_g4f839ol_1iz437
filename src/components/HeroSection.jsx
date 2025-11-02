import Spline from '@splinetool/react-spline';

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability; does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-28 flex flex-col items-start">
        <span className="text-xs font-semibold tracking-widest text-neutral-600 uppercase">Live Loading Monitor</span>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black">
          Is the website loading?
        </h1>
        <p className="mt-4 max-w-xl text-neutral-700">
          An interactive hero shows a minimalist black & white LOADING animation. Move your mouse or tap to play with the scene while the page content appears.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="#status" className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-90 transition">
            Check Status
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-black/5 transition">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
