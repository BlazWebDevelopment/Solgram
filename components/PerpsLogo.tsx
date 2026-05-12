import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * The Solana Perps brand mark — the gradient "P" rendered from
 * /public/perps-logo.png. Use this anywhere the logo is shown.
 */
export function PerpsLogo({ size = 36, className, priority = false }: Props) {
  return (
    <Image
      src="/perps-logo.png"
      alt="Solana Perps"
      width={size}
      height={size}
      priority={priority}
      className={className}
      sizes={`${size}px`}
    />
  );
}
