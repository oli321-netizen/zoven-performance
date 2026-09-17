import Image from "next/image";
import { EmailCapture } from "./EmailCapture";
import { Wordmark } from "./Wordmark";

export function Hero() {
  return (
    <section
      id="top"
      className="border-b border-hairline"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-site items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="section-label mb-8">Coming soon · United Kingdom</p>
          <Wordmark size="lg" priority className="mb-10 w-[min(100%,22rem)]" />
          <h1
            id="hero-heading"
            className="max-w-xl text-4xl font-medium tracking-tight text-ink sm:text-5xl"
          >
            Clear caffeine water.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-mute sm:text-lg">
            Caffeine and electrolytes in a 500&nbsp;ml clear can. Not an energy
            drink. Water you can see.
          </p>
          <div className="mt-10">
            <EmailCapture />
          </div>
        </div>
        <figure className="relative mx-auto aspect-[4/5] w-full max-w-md bg-paper lg:max-w-none">
          <Image
            src="/flavours/lemon-lime.png"
            alt="ZOVEN PERFORMANCE Lemon-Lime, 500 ml clear caffeine water"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-contain p-6 sm:p-10"
          />
        </figure>
      </div>
    </section>
  );
}
