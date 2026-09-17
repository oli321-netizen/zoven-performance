import Image from "next/image";
import { flavours } from "@/lib/flavours";

export function Flavours() {
  return (
    <section
      id="flavours"
      className="border-b border-hairline"
      aria-labelledby="flavours-heading"
    >
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-xl">
          <p className="section-label">02 — Flavours</p>
          <h2
            id="flavours-heading"
            className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Four SKUs. One clear liquid.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mute">
            Colour stays on the lid and a single mark on the label. The water
            stays water.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {flavours.map((flavour) => (
            <li key={flavour.slug}>
              <article className="flex h-full flex-col border border-hairline bg-white">
                <div className="relative aspect-[4/5] bg-paper">
                  <Image
                    src={flavour.image}
                    alt={`ZOVEN PERFORMANCE ${flavour.name}`}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-contain p-4"
                  />
                </div>
                <div
                  className="h-0.5 w-full"
                  style={{ backgroundColor: flavour.accent }}
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-medium tracking-tight">
                    {flavour.name}
                  </h3>
                  <p className="mt-2 text-sm text-mute">{flavour.line}</p>
                  <p className="mt-4 text-[11px] uppercase tracking-section text-mute">
                    {flavour.note}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
