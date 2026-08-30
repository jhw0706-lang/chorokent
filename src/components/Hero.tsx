import { OrbitGraphic } from "./OrbitGraphic";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/video/hero-background.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/85 to-primary-tint/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 32%, var(--primary-light), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-4 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pb-24 lg:pt-24">
        <div>
          <h1
            id="hero-heading"
            className="max-w-md text-4xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-5xl"
          >
            정확한 진단을 위한
            <br />
            믿을 수 있는 진료
          </h1>
          <p className="mt-6 max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
            알레르기, 비염, 이석증부터 난청·이명까지 — 초록이비인후과의원이
            원인을 정확히 찾아 꾸준히 함께 관리해 드립니다.
          </p>

        </div>

        <div className="relative mt-4 lg:mt-0">
          <OrbitGraphic />
        </div>
      </div>
    </section>
  );
}
