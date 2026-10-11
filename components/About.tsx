import { SITE } from "./siteData";

const rows = [
  { icon: "📍", text: SITE.location },
  { icon: "📷", text: "Portraits · Landscapes · Travel · Street" },
  { icon: "✉", text: SITE.email },
  { icon: "◎", text: SITE.instagramUser },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/[0.035] bg-[#0B0C0C] py-9 sm:py-10 lg:py-9"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-8 px-6 sm:px-8 md:grid-cols-[1fr_1.08fr_1.15fr] md:gap-8 lg:gap-12">

        {/* Camera image */}

      <div className="w-full overflow-hidden">
      <img
       src="/images/camera.jpg"
       alt="Black and white photograph of a professional camera"
       className="aspect-[16/10] w-full object-cover grayscale brightness-[0.88]"
  />
</div>
 


        {/* About text */}
        <div className="min-w-0">
          <p className="text-[9px] font-medium tracking-[0.3em] text-[#B9B9B9]">
            ABOUT ME
          </p>

          <h2 className="mt-2 font-[family-name:var(--font-serif)] text-[22px] leading-[1.2] tracking-[-0.02em] text-[#F0EEEC] sm:text-[24px]">
            Hi, I&apos;m {SITE.fullName}.
          </h2>

          <p className="mt-3 text-[12px] leading-[1.8] text-[#B8B8B8]">
            I&apos;m a passionate photographer with a keen eye for detail and
            a love for storytelling. Whether it&apos;s a candid portrait, a
            breathtaking landscape, or a vibrant cityscape, I aim to capture
            moments that feel real and last forever.
          </p>
        </div>

        {/* Contact information */}
        <div className="min-w-0 border-t border-white/[0.08] pt-6 md:border-l md:border-t-0 md:py-1 md:pl-7 lg:pl-8">
          <ul className="space-y-3.5">
            {rows.map((row) => (
              <li
                key={row.text}
                className="flex items-start gap-3 text-[11px] leading-[1.7] text-[#B8B8B8]"
              >
                <span
                  aria-hidden="true"
                  className="w-4 shrink-0 text-center text-[13px] text-[#E6E6E6]"
                >
                  {row.icon}
                </span>

                <span className="break-words">{row.text}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="group mt-5 inline-flex items-center justify-center gap-3 border border-white/60 px-5 py-3 text-[9px] tracking-[0.12em] text-[#F0EEEC] transition-colors duration-300 hover:border-white hover:bg-white/[0.04] sm:px-5"
          >
            LET&apos;S WORK TOGETHER
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