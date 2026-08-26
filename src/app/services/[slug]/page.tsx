import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRightIcon,
  CaretRightIcon,
  HouseIcon,
  PhoneCallIcon,
  WarningIcon,
} from "@phosphor-icons/react/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { SERVICES, getServiceBySlug, getRelatedServices } from "@/lib/services";

const PHONE_NUMBER = "02-997-9988";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | 초록이비인후과의원`,
    description: service.shortDescription,
  };
}

type InfoSection = {
  heading: string;
  items: string[];
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const ServiceIcon = service.icon;
  const related = getRelatedServices(service);

  const sections: InfoSection[] = [
    { heading: "주요 증상", items: service.symptoms },
    { heading: "원인", items: service.causes },
    { heading: "진단 방법", items: service.diagnosis },
    { heading: "치료 방법", items: service.treatment },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-primary-tint">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
            <nav aria-label="이동 경로" className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Link href="/" className="inline-flex items-center gap-1 hover:text-primary">
                <HouseIcon size={16} aria-hidden />홈
              </Link>
              <CaretRightIcon size={12} aria-hidden />
              <Link href="/#services" className="hover:text-primary">
                진료과목
              </Link>
              <CaretRightIcon size={12} aria-hidden />
              <span className="font-medium text-foreground">{service.title}</span>
            </nav>

            <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
              <ServiceIcon size={28} weight="bold" aria-hidden />
            </div>
            <h1 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {service.tagline}
            </p>

            <a
              href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <PhoneCallIcon size={18} weight="fill" aria-hidden />
              {PHONE_NUMBER}
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
          {service.urgent && (
            <div className="mb-10 flex gap-4 rounded-2xl border border-destructive/25 bg-destructive/5 p-6">
              <WarningIcon
                size={24}
                weight="fill"
                aria-hidden
                className="mt-0.5 shrink-0 text-destructive"
              />
              <div>
                <p className="font-bold text-destructive">응급에 가까운 증상입니다</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/85">
                  {service.urgent}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {sections.map(({ heading, items }) => (
              <div key={heading} className="rounded-2xl border border-border bg-white p-7">
                <h2 className="text-lg font-bold text-foreground">{heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-primary-light p-7">
            <h2 className="text-lg font-bold text-primary">이런 경우 내원을 권장합니다</h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-foreground/85">
              {service.visitGuide}
            </p>
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-lg font-bold text-foreground">관련 진료과목</h2>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((r) => {
                  const RelatedIcon = r.icon;
                  return (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                          <RelatedIcon size={22} weight="bold" aria-hidden />
                        </div>
                        <span className="flex-1 font-semibold text-foreground">
                          {r.title}
                        </span>
                        <ArrowRightIcon
                          size={16}
                          weight="bold"
                          aria-hidden
                          className="shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <p className="mt-14 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            본 페이지의 정보는 일반적인 안내를 위한 참고용이며, 정확한 진단과
            치료 방향은 내원 후 전문의 상담을 통해 결정됩니다.
          </p>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
