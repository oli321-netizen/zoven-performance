import { caffeine } from "@/lib/content";

const facts = [
  {
    label: "Format",
    value: "500 ml clear PET/rPET can, aluminium easy-open lid",
  },
  {
    label: "Caffeine anhydrous",
    value: `${caffeine.perCan} (${caffeine.perLitre})`,
    notice: true,
  },
  {
    label: "Electrolytes",
    value: "Sodium, potassium, magnesium",
  },
  {
    label: "Magnesium",
    value: "~60 mg elemental magnesium per 500 ml — a source of magnesium",
  },
  {
    label: "Sweetener",
    value: "Stevia (Pure is unsweetened)",
  },
  {
    label: "Character",
    value: "Clear caffeine–electrolyte water. Contains caffeine.",
  },
];

export function Formula() {
  return (
    <section
      id="formula"
      className="scroll-mt-24 border-t border-line bg-soft"
      aria-labelledby="formula-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="mb-4 text-[11px] tracking-[0.42em] text-muted uppercase">
          Per 500 ml
        </p>
        <h2
          id="formula-heading"
          className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          The facts, unstyled.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
          A short read of what is in the can. No unauthorised health claims —
          just the formula and the caffeine notice the amount requires.
        </p>
        <dl className="mt-12 divide-y divide-line border-y border-line bg-white">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="grid gap-2 px-5 py-5 sm:grid-cols-[13rem_1fr] sm:items-baseline sm:px-6"
            >
              <dt className="text-[11px] tracking-[0.2em] text-muted uppercase">
                {fact.label}
              </dt>
              <dd className="text-base leading-7 text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
        <aside
          className="mt-8 border border-foreground/15 bg-white px-5 py-5 sm:px-6"
          aria-label="High caffeine notice"
        >
          <p className="text-[11px] tracking-[0.28em] text-foreground uppercase">
            High caffeine
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            {caffeine.warning}
          </p>
        </aside>
      </div>
    </section>
  );
}
