import Image from "next/image";

export function Product() {
  return (
    <section
      id="product"
      className="scroll-mt-24 border-t border-line bg-soft"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="order-2 bg-white lg:order-1">
          <Image
            src="/product-clarity.png"
            alt="ZOVEN PERFORMANCE clear can photography — Lemon-Lime development shot"
            width={1280}
            height={720}
            sizes="(min-width: 1024px) 540px, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-4 text-[11px] tracking-[0.42em] text-muted uppercase">
            The can
          </p>
          <h2
            id="product-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Clarity is the product.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-7 text-muted">
            <p>
              ZOVEN PERFORMANCE is clear caffeine–electrolyte water — not an
              energy drink. No tinted haze. No neon cues. The liquid stays on
              show.
            </p>
            <p>
              The pack is a 500&nbsp;ml transparent PET/rPET can with an
              aluminium easy-open lid — the liquid stays visible from the
              shelf to the last sip.
            </p>
            <p>
              Made for everyday hydration: water, electrolytes, and caffeine,
              stated plainly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
