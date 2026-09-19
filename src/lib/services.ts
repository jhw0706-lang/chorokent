import {
  DropIcon,
  SyringeIcon,
  WindIcon,
  ThermometerIcon,
  MicrophoneIcon,
  WavesIcon,
  EarIcon,
  TargetIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";

export type ServiceDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: Icon;
  tagline: string;
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  treatment: string[];
  visitGuide: string;
  urgent?: string;
  related: string[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "allergy",
    title: "알레르기",
    shortDescription: "비염, 결막염 등 알레르기 질환의 원인을 검사하고 관리합니다.",
    icon: DropIcon,
    tagline: "반복되는 코·눈 증상, 원인부터 정확히 찾습니다",
    symptoms: [
      "재채기, 맑은 콧물, 코막힘",
      "눈·코 가려움, 눈물",
      "특정 계절이나 환경에서 반복되는 증상",
    ],
    causes: [
      "집먼지진드기, 꽃가루, 동물 털, 곰팡이 등 알레르겐에 대한 면역 과민반응",
      "특정 음식이나 자극 물질에 대한 반응",
    ],
    diagnosis: [
      "문진 및 증상 패턴 확인",
      "피부반응검사(스킨프릭테스트)",
      "혈액검사(특이 IgE 검사)로 원인 알레르겐 확인",
    ],
    treatment: [
      "원인 알레르겐 회피 및 환경 관리",
      "항히스타민제 등 약물치료",
      "증상이 반복되는 경우 면역치료(알레르겐 면역요법) 고려",
    ],
    visitGuide:
      "계절이나 특정 환경에서 코막힘, 재채기, 눈 가려움 등이 반복적으로 나타난다면 원인 검사를 받아보시는 것이 좋습니다.",
    related: ["immunotherapy", "rhinitis"],
  },
  {
    slug: "immunotherapy",
    title: "면역치료",
    shortDescription: "알레르기 원인 물질에 대한 신체 반응을 조절하는 근본 치료입니다.",
    icon: SyringeIcon,
    tagline: "약물치료로 조절이 어려운 알레르기, 근본 원인을 다룹니다",
    symptoms: [
      "약물치료에도 계속 반복되는 알레르기 증상",
      "특정 알레르겐이 명확히 확인된 경우",
    ],
    causes: [
      "집먼지진드기, 꽃가루 등 특정 알레르겐에 대한 지속적인 면역 과민반응",
    ],
    diagnosis: [
      "알레르기 피부반응검사 또는 혈액검사로 원인 알레르겐 확인",
      "면역치료 적합성에 대한 전문의 상담",
    ],
    treatment: [
      "히스토불린(정기적 병원 방문) 또는 설하치료법(자가 투여)",
      "일반적으로 3~5년의 꾸준한 치료 과정이 필요(1-2주 후부터 즉각 반응)",
    ],
    visitGuide:
      "알레르기 검사에서 원인이 명확히 확인되고, 약물치료만으로 증상 조절이 어려운 경우 상담을 통해 적합성을 확인해 보세요.",
    related: ["allergy", "rhinitis"],
  },
  {
    slug: "rhinitis",
    title: "비염",
    shortDescription: "코막힘, 콧물, 재채기 등 비염 증상을 정밀하게 진단합니다.",
    icon: WindIcon,
    tagline: "만성 코막힘과 콧물, 원인에 맞는 치료가 중요합니다",
    symptoms: [
      "코막힘, 맑은 콧물, 재채기",
      "코 가려움, 후비루(콧물이 목뒤로 넘어가는 느낌)",
      "냄새를 잘 못 맡는 후각 저하",
    ],
    causes: [
      "알레르기성: 집먼지진드기, 꽃가루, 동물 털 등",
      "비알레르기성: 온도·습도 변화, 자극성 물질, 호르몬 변화",
      "구조적 원인: 비중격 만곡, 비후성 비염 등",
    ],
    diagnosis: [
      "문진 및 비내시경 검사",
      "필요 시 알레르기 피부반응검사 또는 혈액검사",
    ],
    treatment: [
      "항히스타민제, 비강 스테로이드 스프레이 등 약물치료",
      "생활습관 및 환경 관리",
      "알레르기성인 경우 면역치료 병행 고려",
      "약물치료로 호전이 없는 구조적 문제는 수술적 치료 고려",
    ],
    visitGuide:
      "코막힘이나 콧물이 2주 이상 지속되거나 일상생활에 지장을 준다면 검사를 받아보시는 것이 좋습니다.",
    related: ["sinusitis", "throat"],
  },
  {
    slug: "sinusitis",
    title: "부비동염",
    shortDescription: "안면통, 누런 콧물 등 부비동염 증상을 검사하고 치료합니다.",
    icon: ThermometerIcon,
    tagline: "오래가는 감기 같은 증상, 부비동염일 수 있습니다",
    symptoms: [
      "코막힘과 누런(황록색) 콧물",
      "안면 통증·압박감, 두통",
      "후각 저하, 급성기에는 발열 동반 가능",
    ],
    causes: [
      "감기 후 이어지는 세균·바이러스 감염",
      "알레르기 비염 동반",
      "비중격 만곡 등 해부학적 요인으로 인한 배출 장애",
    ],
    diagnosis: ["비내시경 검사", "증상이 반복되거나 만성인 경우 부비동 CT 검사"],
    treatment: [
      "급성: 항생제 등 약물치료",
      "만성: 비강 스테로이드, 비강 세척",
      "약물치료로 호전이 없는 경우 부비동 내시경 수술 고려",
    ],
    visitGuide:
      "감기 증상이 10일 이상 이어지거나, 얼굴 통증·고열이 동반된다면 내원해 검사를 받아보세요.",
    related: ["rhinitis", "throat"],
  },
  {
    slug: "throat",
    title: "인후두질환",
    shortDescription: "목의 통증, 쉰 목소리 등 인두·후두 질환을 검사하고 치료합니다.",
    icon: MicrophoneIcon,
    tagline: "목이 아프거나 목소리가 쉬었다면, 원인을 정확히 확인하세요",
    symptoms: [
      "목이 붓고 아픔(인두염·편도염), 삼킬 때 이물감이나 통증",
      "목소리가 쉬거나 잘 안 나옴(후두염, 음성장애)",
      "마른기침, 목 이물감이 계속되는 느낌",
    ],
    causes: [
      "바이러스·세균 감염(감기, 편도염, 후두염)",
      "과도한 음성 사용, 흡연·자극 물질 노출",
      "위산 역류로 인한 역류성 인후두염",
    ],
    diagnosis: ["인후두 내시경 검사", "필요 시 목 안 배양검사"],
    treatment: [
      "급성 감염: 항생제·소염제 등 약물치료",
      "음성 안정 및 충분한 수분 섭취",
      "역류성인 경우 생활습관 교정과 위산분비억제제 병행",
      "만성적으로 반복되는 경우 정밀 검사 후 치료 방향 결정",
    ],
    visitGuide:
      "목 통증이나 쉰 목소리가 2주 이상 지속되거나, 삼킴 곤란·이물감이 계속된다면 내원해 검사를 받아보세요.",
    related: ["sinusitis", "rhinitis"],
  },
  {
    slug: "vertigo",
    title: "이석증 · 어지럼증",
    shortDescription: "갑작스러운 어지럼증의 원인을 찾아 이석정복술 등으로 치료합니다.",
    icon: WavesIcon,
    tagline: "자세를 바꿀 때 핑 도는 어지럼증, 이석증일 수 있습니다",
    symptoms: [
      "눕거나 일어날 때, 고개를 돌릴 때 갑자기 시작되는 회전성 어지럼증",
      "수초에서 수십초간 지속되는 짧은 어지럼증",
      "구역감이나 구토 동반 가능",
    ],
    causes: [
      "귀 속 반고리관의 이석(칼슘 결정)이 제자리를 벗어나 발생",
      "노화, 두부 외상, 특별한 원인 없이도 발생 가능",
    ],
    diagnosis: [
      "안진 검사(Dix-Hallpike 검사 등)로 이석의 위치 확인",
      "다른 원인 감별을 위한 청력검사·전정기능검사",
    ],
    treatment: [
      "이석정복술(체위 변환 치료, Epley 술식 등)",
      "필요 시 어지럼증 완화를 위한 약물치료 병행",
    ],
    visitGuide:
      "자세를 바꿀 때마다 반복적으로 핑 도는 어지럼증이 있다면 내원해 정확한 원인을 확인해 보세요.",
    related: ["hearing-loss"],
  },
  {
    slug: "hearing-loss",
    title: "난청·이명",
    shortDescription: "청력 검사를 통해 난청과 이명(귀 울림)의 정도와 원인을 확인하고 관리합니다.",
    icon: EarIcon,
    tagline: "잘 안 들리거나 귀가 울린다면, 방치하지 말고 검사받아보세요",
    symptoms: [
      "특정 소리나 주파수가 잘 들리지 않음",
      "되묻는 일이 잦아지고 TV·전화 소리를 키우게 됨",
      "한쪽 귀가 갑자기 안 들리는 경우(돌발성 난청 의심)",
      "외부 소리 없이 귀나 머리에서 들리는 '삐-', '웅웅' 등의 이명",
      "한쪽 또는 양쪽 귀에서 지속적이거나 간헐적으로 발생하는 귀 울림",
    ],
    causes: [
      "노화성 난청, 소음 노출로 인한 소음성 난청",
      "중이염 등 염증성 질환, 귀지·이물질",
      "돌발성 난청(원인 불명, 응급 치료가 필요한 경우)",
      "스트레스·피로 등으로 인한 이명(원인이 명확하지 않은 경우도 많음)",
    ],
    diagnosis: [
      "순음청력검사, 고막운동성검사",
      "이명도 검사",
      "필요 시 영상검사로 다른 원인 감별",
    ],
    treatment: [
      "원인에 따른 약물치료",
      "필요 시 보청기 상담 및 처방",
      "돌발성 난청은 조기 스테로이드 치료(경구 또는 고실 주사)가 예후에 중요",
      "이명 재훈련 치료",
      "증상이 심한 경우 고실 주사 등 추가 치료 고려",
    ],
    urgent:
      "한쪽 귀가 갑자기 안 들린다면 돌발성 난청일 수 있습니다. 치료 시기가 예후에 큰 영향을 미치므로 가능한 한 빨리 내원해 주세요.",
    visitGuide:
      "소리가 잘 안 들리거나 이명이 계속된다면, 특히 한쪽 귀에서 갑자기 시작되었다면 청력검사를 받아보시는 것이 좋습니다.",
    related: ["vertigo", "tympanic-injection"],
  },
  {
    slug: "tympanic-injection",
    title: "고실 주사",
    shortDescription: "고막을 통해 약물을 직접 전달하는 정밀 치료법입니다.",
    icon: TargetIcon,
    tagline: "약물을 병변 가까이, 더 정확하게 전달하는 치료법",
    symptoms: [
      "경구 약물 치료만으로 호전이 부족한 경우",
      "전신 스테로이드 사용이 부담스러운 경우",
    ],
    causes: [
      "돌발성 난청, 메니에르병, 심한 이명 등에서 보조·대체 치료로 활용",
    ],
    diagnosis: ["담당의와의 상담을 통해 치료 필요성과 적합성을 판단"],
    treatment: [
      "국소 마취 후 가는 바늘로 고막을 통해 중이강 내에 약물(주로 스테로이드) 주입",
      "시술 시간이 짧고 통원 치료로 진행",
      "증상에 따라 반복 시행이 필요할 수 있음",
    ],
    visitGuide:
      "시술 후 일시적인 어지럼증이 있을 수 있습니다. 돌발성 난청, 메니에르병, 이명 등으로 치료 중이라면 담당의와 상담해 진행 여부를 결정합니다.",
    related: ["hearing-loss"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(service: ServiceDetail) {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceDetail => Boolean(s));
}
