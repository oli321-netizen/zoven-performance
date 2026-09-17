export type Flavour = {
  slug: "lemon-lime" | "cucumber-mint" | "berry" | "pure";
  name: "Lemon-Lime" | "Cucumber-Mint" | "Berry" | "Pure";
  line: string;
  note: string;
  accent: string;
  image: string;
};

export const flavours: Flavour[] = [
  {
    slug: "lemon-lime",
    name: "Lemon-Lime",
    line: "Citrus, kept quiet.",
    note: "Stevia sweetened.",
    accent: "#C4C44A",
    image: "/flavours/lemon-lime.png",
  },
  {
    slug: "cucumber-mint",
    name: "Cucumber-Mint",
    line: "Cool, almost still.",
    note: "Stevia sweetened.",
    accent: "#6B8F74",
    image: "/flavours/cucumber-mint.png",
  },
  {
    slug: "berry",
    name: "Berry",
    line: "Soft fruit. No haze.",
    note: "Stevia sweetened.",
    accent: "#8A3F4C",
    image: "/flavours/berry.png",
  },
  {
    slug: "pure",
    name: "Pure",
    line: "Unflavoured. Unsweetened.",
    note: "No sweetener.",
    accent: "#8A8A8A",
    image: "/flavours/pure.png",
  },
];

export const formula = {
  serve: "500 ml",
  caffeineMg: 120,
  caffeinePerLitreMg: 240,
  caffeinePer100mlMg: 24,
  electrolytes: ["Sodium", "Potassium", "Magnesium"],
  magnesiumElementalMg: 60,
  sweetener: "Stevia (Pure is unsweetened)",
} as const;
