import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { SERVICES } from "@/lib/services";
import { CrossPattern } from "./CrossPattern";

const FEATURED_SLUGS = ["allergy", "immunotherapy"];

export default function Services() {
  const featuredServices = SERVICES.filter((s) => FEATURED_SLUGS.includes(s.slug));
  const otherServices = SERVICES.filter((s) => !FEATURED_SLUGS.includes(s.slug));

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-primary">진료과목</p>
        <h2
          id="services-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          이런 증상, 정확히 진료합니다
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          경험 많은 전문의가 충분한 검사와 상담을 바탕으로 원인을 찾고
          꾸준히 관리할 수 있도록 돕습니다. 카드를 눌러 증상과 치료
          방법을 자세히 확인해 보세요.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {featuredServices.map(({ slug, icon: ServiceIcon, title, tagline }) => (
          <li key={slug}>
            <Link
              href={`/services/${slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-primary p-8 text-white transition duration-200 ease-out hover:z-10 hover:scale-[1.03] hover:shadow-lg motion-reduce:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:p-9"
            >
              <CrossPattern
                id={`services-featured-${slug}`}
                className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.08]"
              />
              <span className="relative inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                대표 진료
              </span>
              <div className="relative mt-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
                <ServiceIcon size={28} weight="bold" aria-hidden />
              </div>
              <h3 className="relative mt-5 text-xl font-bold">{title}</h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-white/80">
                {tagline}
              </p>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                자세히 보기
                <ArrowRightIcon
                  size={16}
                  weight="bold"
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {otherServices.map(({ slug, icon: ServiceIcon, title, shortDescription }) => (
          <li key={slug}>
            <Link
              href={`/services/${slug}`}
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition duration-200 ease-out hover:z-10 hover:scale-[1.03] hover:shadow-md motion-reduce:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <ServiceIcon size={26} weight="bold" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                자세히 보기
                <ArrowRightIcon
                  size={16}
                  weight="bold"
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
