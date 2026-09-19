import Image from "next/image";
import {
  HandHeartIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  TrophyIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";

type Value = {
  icon: Icon;
  title: string;
  description: string;
};

const VALUES: Value[] = [
  {
    icon: StethoscopeIcon,
    title: "정확한 진단",
    description:
      "증상만 듣고 넘어가지 않고, 언제부터 어떻게 시작됐는지 충분히 여쭤본 뒤 필요한 검사로 원인을 확인합니다.",
  },
  {
    icon: ShieldCheckIcon,
    title: "이해할 수 있는 진료",
    description:
      "검사 결과와 치료가 필요한 이유를 이해하실 수 있도록 설명해 드리고, 당장 필요하지 않은 진료는 권하지 않습니다.",
  },
  {
    icon: HandHeartIcon,
    title: "꾸준한 관리",
    description:
      "한 번의 진료로 끝내지 않고, 증상 변화를 지켜보며 다음 진료 시기와 관리 방법을 함께 정합니다.",
  },
];

type CredentialGroup = {
  icon: Icon;
  heading: string;
  items: string[];
};

const CREDENTIALS: CredentialGroup[] = [
  {
    icon: GraduationCapIcon,
    heading: "학력",
    items: ["인제대학교 의과대학 졸업"],
  },
  {
    icon: BriefcaseIcon,
    heading: "경력",
    items: ["前 인제대학교 일산백병원", "前 국립경찰병원 이비인후과"],
  },
  {
    icon: TrophyIcon,
    heading: "수상",
    items: [
      "보건복지부 장관상",
      "해군교육사령관 중장 표창",
      "국군의무사령관 준장 표창",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-background-soft"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">병원소개</p>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            초록이비인후과의원이 진료하는 방식
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {VALUES.map(({ icon: ValueIcon, title, description }) => (
            <div key={title}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <ValueIcon size={24} weight="bold" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-white p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:items-start">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-2xl bg-background-soft">
              <Image
                src="/images/director-portrait.png"
                alt="초록이비인후과의원 대표원장"
                fill
                sizes="(min-width: 1024px) 240px, 60vw"
                className="object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-primary">대표원장</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                원장 약력
              </h3>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {CREDENTIALS.map(({ icon: CredentialIcon, heading, items }) => (
                  <div key={heading}>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <CredentialIcon size={22} weight="bold" aria-hidden />
                    </div>
                    <h4 className="mt-4 text-base font-bold text-foreground">
                      {heading}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[15px] leading-relaxed text-muted-foreground"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
