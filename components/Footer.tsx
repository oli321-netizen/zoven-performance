import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-site flex-col gap-10 px-5 py-14 sm:px-8 sm:py-16">
        <Wordmark size="sm" className="w-[7.5rem]" />
        <div className="grid gap-8 text-sm text-mute sm:grid-cols-3">
          <p>© {new Date().getFullYear()} ZOVEN</p>
          <p>United Kingdom</p>
          <p>
            <a
              href="mailto:hello@zoven.example"
              className="underline decoration-hairline underline-offset-4 transition-colors hover:text-ink"
            >
              hello@zoven.example
            </a>
            <span className="block text-xs">Contact placeholder</span>
          </p>
        </div>
        <p className="max-w-xl text-xs leading-relaxed text-mute">
          Contains caffeine. High caffeine content. Not recommended for
          children or pregnant or breast-feeding women. ZOVEN PERFORMANCE is
          a clear caffeine–electrolyte water, not an energy drink.
        </p>
      </div>
    </footer>
  );
}
