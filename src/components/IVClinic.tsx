import {
  ThermometerIcon,
  FaceMaskIcon,
  VirusIcon,
  PillIcon,
  EarIcon,
  WavesIcon,
  HeartbeatIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";

type IVItem = {
  title: string;
  description: string;
  icon: Icon;
};

const IV_ITEMS: IVItem[] = [
  {
    title: "감기몸살수액",
    description: "몸살감기로 인한 근육통, 발열, 피로감 완화에 도움을 줍니다.",
    icon: ThermometerIcon,
  },
  {
    title: "기침가래수액",
    description: "기침과 가래로 불편한 증상 완화와 회복을 돕습니다.",
    icon: FaceMaskIcon,
  },
  {
    title: "코로나19수액",
    description: "코로나19로 인한 발열, 근육통, 탈수 등 증상 완화를 돕습니다.",
    icon: VirusIcon,
  },
  {
    title: "독감치료수액",
    description:
      "독감(인플루엔자)으로 인한 고열, 근육통 등 증상 완화와 체력 회복을 도우며, 경구 약물보다 빠른 사회 복귀를 기대할 수 있습니다.",
    icon: PillIcon,
  },
  {
    title: "난청이명수액",
    description: "난청·이명 증상 완화를 위한 순환 개선에 도움을 줍니다.",
    icon: EarIcon,
  },
  {
    title: "어지럼수액",
    description: "어지럼증 완화와 컨디션 회복을 돕습니다.",
    icon: WavesIcon,
  },
  {
    title: "각종 영양면역수액",
    description: "비타민·미네랄 등 영양 성분을 보충해 면역력과 컨디션 관리를 돕습니다.",
    icon: HeartbeatIcon,
  },
];

export default function IVClinic() {
  return (
    <section
      id="iv-clinic"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="iv-clinic-heading"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-primary">수액 클리닉</p>
        <h2
          id="iv-clinic-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          증상과 컨디션에 맞는 수액 처방
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          내원 후 증상과 상태를 확인하여 적합한 수액을 상담받으실 수 있습니다.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {IV_ITEMS.map(({ title, description, icon: ItemIcon }) => (
          <li
            key={title}
            className="flex h-full flex-col rounded-2xl border border-border bg-white p-7"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
              <ItemIcon size={26} weight="bold" aria-hidden />
            </div>
            <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
