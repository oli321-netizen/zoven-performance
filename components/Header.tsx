import { Wordmark } from "./Wordmark";

const links = [
  { href: "#product", label: "Product" },
  { href: "#flavours", label: "Flavours" },
  { href: "#formula", label: "Formula" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="shrink-0" aria-label="ZOVEN PERFORMANCE home">
          <Wordmark size="sm" priority className="w-[7.5rem] sm:w-[8.5rem]" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide text-mute transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#notify"
          className="border border-ink px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Coming soon
        </a>
      </div>
    </header>
  );
}
