import type { Metadata } from "next";
import Link from "next/link";
import { CaretRightIcon, HouseIcon } from "@phosphor-icons/react/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 초록이비인후과의원",
  description: "초록이비인후과의원 개인정보처리방침입니다.",
};

const EFFECTIVE_DATE = "2026년 8월 26일";
const PHONE_NUMBER = "02-997-9988";
const ADDRESS = "서울특별시 송파구 백제고분로 187 3층";

type Section = {
  heading: string;
  body: React.ReactNode;
};

const SECTIONS: Section[] = [
  {
    heading: "1. 수집하는 개인정보 항목 및 수집 방법",
    body: (
      <p>
        현재 초록이비인후과의원 홈페이지는 별도의 온라인 예약·문의 양식을
        운영하지 않으며, 홈페이지에 게시된 전화번호를 통해 직접 통화로
        상담·예약을 진행합니다. 이 경우 홈페이지 자체는 이름, 연락처 등의
        개인정보를 수집·저장하지 않습니다. 향후 온라인 예약, 문의 게시판 등
        개인정보를 입력받는 기능이 추가되는 경우, 수집 항목·목적·보유기간을
        이 방침에 구체적으로 명시하고 이용자의 동의 절차를 마련한 뒤
        운영합니다.
      </p>
    ),
  },
  {
    heading: "2. 개인정보의 처리 목적 및 보유·이용 기간",
    body: (
      <p>
        내원 및 진료 과정에서 수집되는 진료기록 등 개인정보는 홈페이지가 아닌
        병원 내부 진료 시스템을 통해 의료법 등 관계 법령에서 정한 기간 동안
        보관되며, 해당 처리에 대해서는 내원 시 별도로 안내드립니다. 홈페이지를
        통해 별도로 수집·보유하는 개인정보는 현재 없습니다.
      </p>
    ),
  },
  {
    heading: "3. 개인정보의 제3자 제공",
    body: (
      <p>
        본원은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만
        법령에 특별한 규정이 있거나 수사 목적으로 법령에서 정한 절차와 방법에
        따라 수사기관의 요구가 있는 경우 등 예외적인 경우에 한하여 관련
        법령에 따라 제공할 수 있습니다.
      </p>
    ),
  },
  {
    heading: "4. 정보주체의 권리와 행사 방법",
    body: (
      <p>
        이용자는 개인정보 처리 현황에 대해 언제든지 열람, 정정, 삭제, 처리정지
        등을 요청할 수 있습니다. 아래 개인정보 보호책임자에게 전화 또는
        서면으로 문의해 주시면 관계 법령에 따라 지체 없이 조치합니다.
      </p>
    ),
  },
  {
    heading: "5. 쿠키(Cookie)의 운영",
    body: (
      <p>
        본 홈페이지는 별도의 방문자 추적·광고 목적의 쿠키나 분석 스크립트를
        사용하지 않습니다. 향후 이용 통계 분석 등을 위해 쿠키를 사용하게 될
        경우, 그 목적과 거부 방법을 이 방침에 안내합니다.
      </p>
    ),
  },
  {
    heading: "6. 개인정보의 안전성 확보 조치",
    body: (
      <p>
        본원은 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 관리적,
        기술적 보호조치를 취하고 있으며, 온라인으로 개인정보를 수집하는 기능이
        추가될 경우 해당 조치 내용을 구체적으로 갱신합니다.
      </p>
    ),
  },
  {
    heading: "7. 개인정보 보호책임자",
    body: (
      <p>
        본원은 개인정보 처리에 관한 업무를 총괄하고 이용자의 불만 처리 및
        피해 구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고
        있습니다.
        <br />
        <span className="mt-2 block">
          담당: 초록이비인후과의원 원장
          <br />
          연락처: {PHONE_NUMBER}
          <br />
          주소: {ADDRESS}
        </span>
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <nav aria-label="이동 경로" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-primary">
              <HouseIcon size={16} aria-hidden />홈
            </Link>
            <CaretRightIcon size={12} aria-hidden />
            <span className="font-medium text-foreground">개인정보처리방침</span>
          </nav>

          <h1 className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            개인정보처리방침
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            초록이비인후과의원(이하 &lsquo;본원&rsquo;)은 개인정보보호법 등
            관계 법령을 준수하며, 이용자의 개인정보를 안전하게 보호하기 위해
            다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>

          <div className="mt-10 space-y-9">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-bold text-foreground">
                  {section.heading}
                </h2>
                <div className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {section.body}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
            시행일자: {EFFECTIVE_DATE}
          </p>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
