import Link from "next/link";

type OrbitLabel = {
  slug: string;
  label: string;
  top: string;
  left: string;
};

const LABELS: OrbitLabel[] = [
  { slug: "rhinitis", label: "비염", top: "22%", left: "58%" },
  { slug: "vertigo", label: "이석증", top: "52%", left: "10%" },
  { slug: "hearing-loss", label: "난청·이명", top: "78%", left: "48%" },
  { slug: "allergy", label: "알레르기", top: "38%", left: "96%" },
  { slug: "immunotherapy", label: "면역치료", top: "74%", left: "88%" },
];

export function OrbitGraphic() {
  return (
    <div
      role="group"
      aria-label="주요 진료과목 바로가기"
      className="relative mx-auto aspect-square w-full max-w-[440px]"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
      />

      {LABELS.map(({ slug, label, top, left }) => (
        <Link
          key={slug}
          href={`/services/${slug}`}
          className="absolute inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-white/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:border-primary/30 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          style={{ top, left }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          {label}
        </Link>
      ))}
    </div>
  );
}
