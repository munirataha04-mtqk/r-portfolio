import { SITE } from "./siteData";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#0B0C0C] py-6">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-6 text-center sm:px-8 md:flex-row md:gap-6 md:text-left">

        {/* Branding */}
        <a
          href="#home"
          className="text-[10px] font-medium tracking-[0.24em] text-[#F0EEEC] transition-colors duration-300 hover:text-white"
        >
          {SITE.name}
          <span className="text-[#777777]"> · PHOTOGRAPHER</span>
        </a>

        {/* Copyright */}
        <p className="text-[9px] tracking-[0.08em] text-[#858585]">
          © 2026 {SITE.fullName}. All rights reserved.
        </p>

        {/* Footer links */}
        <div className="flex items-center gap-6 text-[9px] tracking-[0.16em] text-[#AFAFAF]">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-white"
          >
            INSTAGRAM
          </a>

          <a
            href="#home"
            className="transition-colors duration-300 hover:text-white"
          >
            BACK TO TOP ↑
          </a>
        </div>

      </div>
    </footer>
  );
}