import {
  CarSimpleIcon,
  MapPinIcon,
  NavigationArrowIcon,
  PhoneCallIcon,
  TrainIcon,
} from "@phosphor-icons/react/ssr";
import { CrossPattern } from "./CrossPattern";

const ADDRESS = "서울특별시 송파구 백제고분로 187 3층";
const PHONE_NUMBER = "02-997-9988";
const NAVER_MAP_URL = `https://map.naver.com/p/search/${encodeURIComponent(
  "초록이비인후과의원 " + ADDRESS
)}`;

export default function Location() {
  return (
    <section
      id="location"
      className="bg-background-soft"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-semibold text-primary">오시는 길</p>
        <h2
          id="location-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          찾아오시는 길
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
          <div
            aria-hidden
            className="relative flex min-h-[260px] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-border bg-primary-light text-primary"
          >
            <CrossPattern
              id="location-cross-pattern"
              className="pointer-events-none absolute inset-0 h-full w-full text-primary/10"
            />
            <MapPinIcon size={48} weight="fill" className="relative" />
            <p className="relative text-sm font-medium">
              9호선 삼전역 1번 출구 인근
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-3xl border border-border bg-white p-6 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <MapPinIcon size={22} weight="bold" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">주소</p>
                <p className="mt-1 text-base font-medium text-foreground">
                  {ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <TrainIcon size={22} weight="bold" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">지하철</p>
                <p className="mt-1 text-base font-medium text-foreground">
                  9호선 삼전역 1번 출구
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <CarSimpleIcon size={22} weight="bold" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">주차</p>
                <p className="mt-1 text-base font-medium text-foreground">
                  본 건물 뒷편에 지하주차장 입구
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <PhoneCallIcon size={22} weight="bold" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">전화</p>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
                  className="mt-1 block text-base font-medium text-foreground hover:text-primary"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <a
              href={NAVER_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:gap-2 sm:px-6 sm:py-3.5 sm:text-base"
            >
              <NavigationArrowIcon size={18} weight="fill" aria-hidden className="shrink-0" />
              네이버 지도에서 길찾기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
