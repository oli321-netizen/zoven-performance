import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  size?: "nav" | "hero";
};

export function BrandMark({
  className = "",
  priority = false,
  size = "nav",
}: BrandMarkProps) {
  const dimensions =
    size === "hero"
      ? { width: 693, height: 211, sizes: "(min-width: 768px) 420px, 280px" }
      : { width: 220, height: 67, sizes: "160px" };

  return (
    <Image
      src="/logo.png"
      alt="ZOVEN PERFORMANCE"
      width={dimensions.width}
      height={dimensions.height}
      sizes={dimensions.sizes}
      priority={priority}
      className={`h-auto w-auto ${className}`}
    />
  );
}
