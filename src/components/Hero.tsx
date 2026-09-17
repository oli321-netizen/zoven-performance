import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";
import { EmailCapture } from "@/components/EmailCapture";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28"
    >
      <div className="flex flex-col items-start">
        <BrandMark size="hero" priority className="mb-10 h-auto w-[min(100%,22rem)]" />
        <p className="mb-3 text-[11px] tracking-[0.46em] text-muted uppercase">
          Performance
        </p>
        <h1 className="max-w-xl text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Clear caffeine water.
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Ready-to-drink caffeine–electrolyte water in a 500&nbsp;ml clear can.
          Water you can see. A formula you can read. Contains caffeine.
        </p>
        <div id="notify" className="mt-10 w-full scroll-mt-28">
          <EmailCapture />
        </div>
      </div>
      <div className="relative bg-soft">
        <Image
          src="/flavours/pure.png"
          alt="ZOVEN PERFORMANCE Pure — clear caffeine water, 500 ml"
          width={1280}
          height={720}
          priority
          sizes="(min-width: 1024px) 540px, 100vw"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
