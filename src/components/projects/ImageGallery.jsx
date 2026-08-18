import { useCallback, useEffect, useMemo, useState } from "react";
import { LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Reveal from "../ui/Reveal";

const spanClass = {
  full: "sm:col-span-12",
  wide: "sm:col-span-8",
  standard: "sm:col-span-4",
};

const aspectClass = {
  full: "aspect-[16/9]",
  wide: "aspect-[16/10]",
  standard: "aspect-[4/3]",
};

export default function ImageGallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = (index) => setActiveIndex(index);
  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (dir) => {
      setActiveIndex((current) =>
        current === null ? current : (current + dir + items.length) % items.length
      );
    },
    [items.length]
  );

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, step]);

  const active = useMemo(
    () => (activeIndex !== null ? items[activeIndex] : null),
    [activeIndex, items]
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
        {items.map((item, index) => (
          <Reveal
            key={`${item.src}-${index}`}
            className={`${spanClass[item.span] || "sm:col-span-6"} group`}
          >
            <button
              type="button"
              onClick={() => open(index)}
              className={`block w-full overflow-hidden bg-[#f0f0f0] text-left ${aspectClass[item.span] || "aspect-[4/3]"}`}
              aria-label={`View larger: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
            {item.caption && (
              <p className="mt-2.5 text-sm text-ink/60">
                {item.caption}
                <span className="ml-2 text-xs text-ink/40">{item.type}</span>
              </p>
            )}
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="flex items-center justify-between px-5 py-4 text-white">
            <p className="text-sm text-white/70">
              {active.caption || active.alt}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="p-2 text-white/80 hover:text-white"
            >
              <LuX className="h-6 w-6" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-4 pb-6">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-3 text-white/70 hover:text-white"
            >
              <LuChevronLeft className="h-8 w-8" />
            </button>
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-full max-w-full object-contain"
            />
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-3 text-white/70 hover:text-white"
            >
              <LuChevronRight className="h-8 w-8" />
            </button>
          </div>
          <p className="pb-5 text-center text-xs text-white/50">
            {activeIndex + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}