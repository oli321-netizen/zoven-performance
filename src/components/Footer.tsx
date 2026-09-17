import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 sm:py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-semibold tracking-tight">ZOVEN</p>
          <p className="mt-2 text-[11px] tracking-[0.46em] text-muted uppercase">
            {site.line}
          </p>
          <p className="mt-6 text-sm text-muted">
            © {new Date().getFullYear()} ZOVEN. {site.country}.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p>Contact (placeholder)</p>
          <a
            href={`mailto:${site.emailPlaceholder}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            {site.emailPlaceholder}
          </a>
          <p className="pt-2 text-xs leading-5">
            Contains caffeine. Product in development — not for sale yet.
          </p>
        </div>
      </div>
    </footer>
  );
}
