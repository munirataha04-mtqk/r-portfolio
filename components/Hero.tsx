
export default function Hero() {
  return (
    <section
      id="home"
      className="relative mt-[73px] overflow-hidden bg-[#090A0A]"
    >
      <div className="relative h-[405px] md:h-[405px] lg:h-[405px]">

        {/* Background photograph */}
        <img
          src="/images/hero (2).png"
          alt="Photographer capturing a sunset over distant mountains"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
        />

        {/* Cinematic dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0A] via-[#090A0A]/85 to-[#090A0A]/5" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0A]/65 via-transparent to-[#090A0A]/10" />

        {/* Hero content */}
        <div className="relative mx-auto flex h-full max-w-[1032px] flex-col justify-center px-5 sm:px-6 md:px-0">

          <p className="text-[9px] tracking-[0.32em] text-[#B8B8B8]">
            CAPTURING REAL MOMENTS
          </p>

          <h1 className="mt-[13px] max-w-[430px] font-[family-name:var(--font-serif)] text-[32px] leading-[1.29] text-[#F4F2F0] sm:text-[35px] md:text-[36px]">
            <span className="text-[#B8B8C5]">
              Photography is not just
            </span>
            <br />
            what I do, it&apos;s how I see
            <br />
            the world.
          </h1>

          <p className="mt-[13px] max-w-[300px] text-[12px] leading-[1.8] text-[#BDBDBD]">
            I&apos;m a photographer based in Karachi, capturing
            people, places and stories through natural light,
            meaningful moments and timeless frames.
          </p>

          <a
            href="#portfolio"
            className="group mt-[24px] inline-flex h-[39px] w-[176px] items-center justify-center gap-3 border border-white/70 bg-black/10 text-[9px] tracking-[0.15em] text-[#F4F2F0] transition-colors duration-300 hover:border-[#D4B078] hover:text-[#D4B078]"
          >
            VIEW MY WORK
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
