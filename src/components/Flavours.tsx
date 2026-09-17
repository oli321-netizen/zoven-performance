import Image from "next/image";
import { flavours } from "@/lib/content";

export function Flavours() {
  return (
    <section
      id="flavours"
      className="scroll-mt-24 border-t border-line"
      aria-labelledby="flavours-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="mb-4 text-[11px] tracking-[0.42em] text-muted uppercase">
          Four SKUs
        </p>
        <h2
          id="flavours-heading"
          className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Flavour as an accent. Never the whole page.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          Colour is reserved for a cap ring, a name, a small mark. The water
          stays clear.
        </p>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {flavours.map((flavour) => (
            <li key={flavour.slug} className="border border-line bg-white">
              <div className="bg-soft">
                <Image
                  src={flavour.image}
                  alt={`ZOVEN PERFORMANCE ${flavour.name}`}
                  width={1280}
                  height={720}
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="px-6 py-6">
                <div
                  className="mb-4 h-1 w-8"
                  style={{ backgroundColor: flavour.accent }}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-semibold tracking-tight">
                  {flavour.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {flavour.note}
                </p>
                <p className="mt-3 text-xs tracking-[0.16em] text-foreground/70 uppercase">
                  {flavour.sweetener}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
