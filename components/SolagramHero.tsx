import Image from "next/image";

/**
 * The main Solagram astronaut hero artwork. Displayed on the left side of the
 * landing hero on lg+, gently floating up and down on a slow keyframe.
 * The PNG itself is pure black background, so it blends into the page bg
 * without any visible seam.
 */
export function SolagramHero() {
  return (
    <div className="pointer-events-none relative">
      {/* Soft purple halo behind the figure */}
      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
        <div className="mx-auto h-full w-full bg-plum-500/25" />
      </div>

      {/* Twinkling ambient stars at the corners */}
      <span className="pointer-events-none absolute left-2 top-6 h-1 w-1 animate-twinkle rounded-full bg-plum-200 [animation-delay:0.2s]" />
      <span className="pointer-events-none absolute right-2 top-2 h-1 w-1 animate-twinkle rounded-full bg-plum-300 [animation-delay:1.4s]" />
      <span className="pointer-events-none absolute -right-3 top-32 h-1 w-1 animate-twinkle rounded-full bg-plum-400 [animation-delay:2.1s]" />
      <span className="pointer-events-none absolute left-4 bottom-12 h-1 w-1 animate-twinkle rounded-full bg-plum-300 [animation-delay:0.8s]" />
      <span className="pointer-events-none absolute right-8 bottom-6 h-1 w-1 animate-twinkle rounded-full bg-plum-200 [animation-delay:1.7s]" />

      {/* Slow vertical float */}
      <div className="animate-float-hero will-change-transform">
        <Image
          src="/solagram-astronaut.png"
          alt="Solagram astronaut hologram"
          width={1536}
          height={1024}
          priority
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 340px, 260px"
          className="h-auto w-[260px] drop-shadow-[0_0_60px_rgba(168,85,247,0.55)] sm:w-[340px] lg:w-[420px]"
        />
      </div>
    </div>
  );
}
