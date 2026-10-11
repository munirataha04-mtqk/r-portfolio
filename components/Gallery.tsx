"use client";

import { useCallback, useEffect, useState } from "react";
import { CATEGORIES, PHOTOS } from "./siteData";

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const shown =
    category === "All"
      ? PHOTOS
      : PHOTOS.filter((p) => p.categories.includes(category));

  const isAll = category === "All";

  const close = useCallback(() => setOpenIndex(null), []);

  const next = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null || shown.length === 0 ? i : (i + 1) % shown.length
      ),
    [shown.length]
  );

  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null || shown.length === 0
          ? i
          : (i - 1 + shown.length) % shown.length
      ),
    [shown.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  return (
    <section
      id="portfolio"
      className="border-t border-white/[0.04] bg-[#0B0C0C] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1100px] px-6 sm:px-8">

        {/* Section heading */}
        <div>
          <p className="text-[9px] font-medium tracking-[0.32em] text-[#B8B8B8]">
            SELECTED PHOTOGRAPHS
          </p>

          <h2 className="mt-2 font-[family-name:var(--font-serif)] text-[25px] leading-tight tracking-[-0.02em] text-[#F0EEEC] sm:text-[29px]">
            My Work
          </h2>
        </div>

        {/* Category filters */}
        <div
          className="mt-5 flex flex-wrap gap-x-7 gap-y-3"
          role="tablist"
          aria-label="Filter photos"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => {
                setCategory(c);
                setOpenIndex(null);
              }}
              className={`border-b pb-2 text-[11px] transition-colors duration-300 ${
                category === c
                  ? "border-white/80 text-[#F0EEEC]"
                  : "border-transparent text-[#929292] hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div
          className={`mt-5 grid grid-cols-2 gap-2 sm:gap-2.5 ${
            isAll
              ? "lg:h-[440px] lg:grid-cols-[1fr_1.3fr_1.05fr_1fr] lg:grid-rows-[repeat(20,minmax(0,1fr))]"
              : "lg:grid-cols-3"
          }`}
        >
          {shown.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open photo: ${p.alt}`}
              className={`group relative block overflow-hidden bg-[#111212] text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/70 ${
                p.wide
                  ? "col-span-2 aspect-[16/9]"
                  : "aspect-[4/5]"
              } ${
                isAll
                  ? `lg:col-span-1 lg:aspect-auto ${p.area}`
                  : "lg:col-span-1 lg:aspect-[4/5]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover brightness-[0.88] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-105"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-black/[0.04] transition-colors duration-500 group-hover:bg-transparent"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen photo viewer */}
      {openIndex !== null && shown[openIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050606]/[0.97] p-5 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 border border-white/20 px-4 py-2 text-[9px] tracking-[0.2em] text-[#F0EEEC] transition-colors hover:border-white/60 hover:text-white"
            aria-label="Close photo viewer"
          >
            CLOSE ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 p-3 text-3xl text-[#B8B8B8] transition-colors hover:text-white sm:left-6"
            aria-label="Previous photo"
          >
            ‹
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shown[openIndex].src}
            alt={shown[openIndex].alt}
            className="max-h-[82vh] max-w-[85vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 p-3 text-3xl text-[#B8B8B8] transition-colors hover:text-white sm:right-6"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
