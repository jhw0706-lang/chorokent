import type { Metadata } from "next";
import Link from "next/link";
import { CaretRightIcon, HouseIcon } from "@phosphor-icons/react/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { FEE_ITEMS, FEE_NOTICE_DATE } from "@/lib/fees";

export const metadata: Metadata = {
  title: "비급여 진료비용 안내 | 초록이비인후과의원",
  description: "초록이비인후과의원의 비급여 진료 항목 및 비용 안내입니다.",
};

export default function FeesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
          <nav aria-label="이동 경로" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-primary">
              <HouseIcon size={16} aria-hidden />홈
            </Link>
            <CaretRightIcon size={12} aria-hidden />
            <span className="font-medium text-foreground">비급여 진료비용</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
            <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              비급여 진료비용 안내
            </h1>
            <span className="rounded-full bg-primary-light px-3.5 py-1.5 text-sm font-semibold text-primary">
              {FEE_NOTICE_DATE} 기준
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            의료법 제45조에 따라 건강보험이 적용되지 않는 비급여 진료 항목의 비용을
            안내해 드립니다. 실제 진료 내용과 환자 상태에 따라 항목 및 금액이 달라질
            수 있으며, 정확한 비용은 진료 시 다시 안내해 드립니다.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[420px] border-collapse text-left">
              <caption className="sr-only">
                초록이비인후과의원 비급여 진료비용 ({FEE_NOTICE_DATE} 기준)
              </caption>
              <thead>
                <tr className="bg-primary-light">
                  <th scope="col" className="px-5 py-3.5 text-sm font-semibold text-primary">
                    항목
                  </th>
                  <th scope="col" className="px-5 py-3.5 text-sm font-semibold text-primary">
                    비용
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEE_ITEMS.map((item, i) => (
                  <tr
                    key={item.name}
                    className={
                      i !== FEE_ITEMS.length - 1
                        ? "border-b border-border odd:bg-background-soft/60"
                        : "odd:bg-background-soft/60"
                    }
                  >
                    <th scope="row" className="px-5 py-3.5 text-[15px] font-medium text-foreground">
                      {item.name}
                    </th>
                    <td className="px-5 py-3.5 text-[15px] tabular-nums text-foreground">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            위 금액은 {FEE_NOTICE_DATE} 기준이며 사전 고지 없이 변경될 수 있습니다.
            비급여 항목에 대해 궁금하신 점은 전화로 문의해 주세요.
          </p>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
