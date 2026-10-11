
const SERVICES = [
  {
    title: "Portrait Photography",
    text: "Natural, honest portraits shot in flattering light that reflect who you really are.",
  },
  {
    title: "Landscape Photography",
    text: "Mountains, lakes and open skies, framed with patience and printed to be lived with.",
  },
  {
    title: "Travel Photography",
    text: "Visual stories from the places you go, from quiet coastlines to busy old cities.",
  },
  {
    title: "Street Photography",
    text: "Candid moments and city life captured as they unfold, in colour or black and white.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B0B0B] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1032px] px-5 sm:px-6">

        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <p className="mb-4 text-[9px] tracking-[0.35em] text-[#B8A17A]">
            WHAT I DO
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-[32px] leading-tight tracking-[-0.025em] text-[#F2F0EC] sm:text-[38px] md:text-[42px]">
            Photography Services
          </h2>

          <p className="mt-4 max-w-[360px] text-[12px] leading-[1.9] text-[#929292] sm:text-[13px]">
            Thoughtfully captured moments, meaningful stories, and
            photographs made to last.
          </p>
        </div>

        {/* Services */}
        <ul className="border-t border-white/[0.13]">
          {SERVICES.map((service, i) => (
            <li
              key={service.title}
              className="group grid grid-cols-[30px_1fr] gap-x-4 border-b border-white/[0.13] py-6 transition-colors duration-300 hover:bg-white/[0.015] sm:grid-cols-[48px_1fr_1fr] sm:items-center sm:gap-x-6 sm:py-7 lg:grid-cols-[60px_1.05fr_1fr]"
            >
              <span className="pt-1 text-[9px] tracking-[0.12em] text-[#B8A17A] sm:pt-0">
                0{i + 1}
              </span>

              <h3 className="font-[family-name:var(--font-serif)] text-[20px] leading-snug text-[#EAE8E4] transition-colors duration-300 group-hover:text-[#C8B28B] sm:text-[23px] lg:text-[25px]">
                {service.title}
              </h3>

              <div className="col-start-2 mt-3 flex items-center justify-between gap-4 sm:col-start-auto sm:mt-0">
                <p className="max-w-[340px] text-[11px] leading-[1.9] text-[#929292] sm:text-[12px]">
                  {service.text}
                </p>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-base text-[#B8A17A] opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  ↗
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer note */}
        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[8px] tracking-[0.25em] text-[#737373]">
            AVAILABLE FOR SELECT PROJECTS
          </p>

          <a
            href="#contact"
            className="w-fit border-b border-[#B8A17A]/50 pb-2 text-[9px] tracking-[0.18em] text-[#C8B28B] transition-colors duration-300 hover:border-white hover:text-white"
          >
            DISCUSS A PROJECT <span className="ml-2">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
