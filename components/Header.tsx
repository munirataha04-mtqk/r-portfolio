
"use client";

import { useEffect, useState } from "react";
import { NAV, SITE } from "./siteData";

export default function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    NAV.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[73px] border-b border-white/[0.06] bg-[#090A0A]">
      <div className="mx-auto flex h-full max-w-[1032px] items-center justify-between px-5 md:px-0">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="shrink-0"
        >
          <span className="block text-[15px] leading-none tracking-[0.38em] text-[#F4F2F0]">
            {SITE.name}
          </span>
          <span className="mt-[9px] block text-[8px] leading-none tracking-[0.48em] text-[#A6A6A6]">
            PHOTOGRAPHER
          </span>
        </a>

        <nav
          className="hidden items-center gap-[33px] md:flex"
          aria-label="Main navigation"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`border-b pb-[8px] pt-[8px] text-[10px] tracking-[0.04em] transition-colors duration-300 ${
                active === item.id
                  ? "border-white text-white"
                  : "border-transparent text-[#B0B0B0] hover:text-white"
              }`}
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          className="text-[10px] tracking-widest text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "CLOSE ×" : "MENU ☰"}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/[0.06] bg-[#090A0A] px-6 pb-5 pt-2 md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`block border-b border-white/[0.05] py-3 text-[11px] tracking-[0.12em] ${
                active === item.id
                  ? "text-white"
                  : "text-[#A6A6A6]"
              }`}
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
