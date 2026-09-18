export const site = {
  name: "ZOVEN",
  line: "PERFORMANCE",
  title: "ZOVEN PERFORMANCE — Clear caffeine water",
  description:
    "Clear caffeine–electrolyte water in a 500 ml transparent can. Lemon-Lime, Cucumber-Mint, Berry, and Pure. Coming soon in the UK. Contains caffeine.",
  emailPlaceholder: "hello@zoven.co.uk",
  country: "United Kingdom",
} as const;

export const caffeine = {
  amountMg: 120,
  perCan: "120 mg per 500 ml",
  perLitre: "240 mg/L",
  per100ml: "24 mg/100 ml",
  warning:
    "High caffeine content. Not recommended for children or pregnant or breastfeeding women. 120 mg per 500 ml (240 mg/L; 24 mg/100 ml).",
} as const;

export type Flavour = {
  name: "Lemon-Lime" | "Cucumber-Mint" | "Berry" | "Pure";
  slug: string;
  accent: string;
  note: string;
  image: string;
  sweetener: string;
};

export const flavours: Flavour[] = [
  {
    name: "Lemon-Lime",
    slug: "lemon-lime",
    accent: "#B4AE55",
    note: "Citrus, kept quiet.",
    image: "/flavours/lemon-lime.png",
    sweetener: "Stevia sweetened",
  },
  {
    name: "Cucumber-Mint",
    slug: "cucumber-mint",
    accent: "#6F8A6F",
    note: "Cool, still clear.",
    image: "/flavours/cucumber-mint.png",
    sweetener: "Stevia sweetened",
  },
  {
    name: "Berry",
    slug: "berry",
    accent: "#8A5360",
    note: "Soft fruit, no haze.",
    image: "/flavours/berry.png",
    sweetener: "Stevia sweetened",
  },
  {
    name: "Pure",
    slug: "pure",
    accent: "#6B6B6B",
    note: "Unflavoured. Nothing added for taste.",
    image: "/flavours/pure.png",
    sweetener: "Unsweetened",
  },
];
