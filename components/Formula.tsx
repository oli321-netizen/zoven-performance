import { formula } from "@/lib/flavours";

const rows = [
  {
    label: "Caffeine anhydrous",
    value: `${formula.caffeineMg} mg per ${formula.serve}`,
    detail: `${formula.caffeinePerLitreMg} mg/L · ${formula.caffeinePer100mlMg} mg/100 ml`,
  },
  {
    label: "Electrolytes",
    value: formula.electrolytes.join(", "),
    detail: `Source of magnesium — about ${formula.magnesiumElementalMg} mg elemental Mg per ${formula.serve}`,
  },
  {
    label: "Sweetener",
    value: formula.sweetener,
    detail: "Lemon-Lime, Cucumber-Mint, and Berry. Pure has none.",
  },
  {
    label: "Serve",
    value: `${formula.serve} clear can`,
    detail: "Ready to drink. Contains caffeine.",
  },
];

export function Formula() {
  return (
    <section
      id="formula"
      className="border-b border-hairline"
      aria-labelledby="formula-heading"
    >
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-24">
        <p className="section-label">03 — Formula</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2
              id="formula-heading"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Facts, not flavouring.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mute">
              A short formula for a clear caffeine water. Ingredients only —
              no unauthorised health claims.
            </p>
          </div>
          <div>
            <dl className="divide-y divide-hairline border-y border-hairline">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
                >
                  <dt className="text-[11px] uppercase tracking-section text-mute">
                    {row.label}
                  </dt>
                  <dd>
                    <p className="text-base text-ink">{row.value}</p>
                    <p className="mt-1 text-sm text-mute">{row.detail}</p>
                  </dd>
                </div>
              ))}
            </dl>
            <aside
              className="mt-8 border border-ink px-5 py-4 text-sm leading-relaxed text-ink"
              aria-label="High caffeine notice"
            >
              <p className="text-[11px] font-medium uppercase tracking-section">
                High caffeine content
              </p>
              <p className="mt-2">
                Not recommended for children or pregnant or breast-feeding
                women. Caffeine: {formula.caffeinePer100mlMg} mg/100 ml (
                {formula.caffeineMg} mg per {formula.serve}).
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
