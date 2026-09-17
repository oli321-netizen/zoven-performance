import Image from "next/image";

type WordmarkProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 140, height: 48 },
  md: { width: 220, height: 76 },
  lg: { width: 420, height: 145 },
};

export function Wordmark({
  className = "",
  priority = false,
  size = "md",
}: WordmarkProps) {
  const { width, height } = sizes[size];

  return (
    <Image
      src="/brand/logo-lockup.png"
      alt="ZOVEN PERFORMANCE"
      width={width}
      height={height}
      priority={priority}
      className={`h-auto ${className}`}
    />
  );
}
