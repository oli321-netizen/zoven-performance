import Image from "next/image";

export function Product() {
  return (
    <section
      id="product"
      className="border-b border-hairline"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-24">
        <p className="section-label">01 — Product</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2
              id="product-heading"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Clarity is the format.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
              ZOVEN is a ready-to-drink caffeine–electrolyte water. The
              production pack is a 500&nbsp;ml clear PET/rPET can with an
              aluminium easy-open lid — liquid first, colour last.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="border-t border-hairline pt-4">
                <dt className="text-[11px] uppercase tracking-section text-mute">
                  Format
                </dt>
                <dd className="mt-2 text-sm text-ink">
                  500 ml clear can, aluminium lid
                </dd>
              </div>
              <div className="border-t border-hairline pt-4">
                <dt className="text-[11px] uppercase tracking-section text-mute">
                  Liquid
                </dt>
                <dd className="mt-2 text-sm text-ink">
                  Still water. No juice haze.
                </dd>
              </div>
              <div className="border-t border-hairline pt-4">
                <dt className="text-[11px] uppercase tracking-section text-mute">
                  Caffeine
                </dt>
                <dd className="mt-2 text-sm text-ink">
                  Contains caffeine. See formula.
                </dd>
              </div>
              <div className="border-t border-hairline pt-4">
                <dt className="text-[11px] uppercase tracking-section text-mute">
                  Colour
                </dt>
                <dd className="mt-2 text-sm text-ink">
                  Flavour accents only. Never neon.
                </dd>
              </div>
            </dl>
          </div>
          <figure className="relative aspect-[4/5] bg-paper">
            <Image
              src="/flavours/lemon-lime-alt.png"
              alt="ZOVEN PERFORMANCE clear pack — bottle-style product photograph"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain p-6 sm:p-10"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
