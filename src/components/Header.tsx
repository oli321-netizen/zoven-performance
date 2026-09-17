import { BrandMark } from "@/components/BrandMark";

const links = [
  { href: "#product", label: "Product" },
  { href: "#flavours", label: "Flavours" },
  { href: "#formula", label: "Formula" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="shrink-0" aria-label="ZOVEN PERFORMANCE home">
          <BrandMark className="h-8 w-auto sm:h-9" priority />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.18em] text-muted uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#notify"
          className="border border-foreground px-3 py-2 text-[11px] tracking-[0.2em] text-foreground uppercase sm:px-4"
        >
          Coming soon
        </a>
      </div>
      <nav
        aria-label="Sections"
        className="flex justify-center gap-6 border-t border-line/70 px-5 py-2 md:hidden"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[11px] tracking-[0.18em] text-muted uppercase"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
