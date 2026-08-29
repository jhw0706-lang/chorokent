import { ClockClockwiseIcon, PhoneCallIcon } from "@phosphor-icons/react/ssr";
import { CrossPattern } from "./CrossPattern";

const PHONE_NUMBER = "02-997-9988";

const SCHEDULE = [
  { days: "월·화·목·금", time: "09:30 – 18:00", note: "점심시간 13:00 – 14:00" },
  { days: "수·토", time: "09:30 – 13:00", note: "점심시간 없음" },
  { days: "일요일·공휴일", time: "휴진", note: "" },
];

export default function Hours() {
  return (
    <section
      id="hours"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="hours-heading"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold text-primary">진료시간</p>
          <h2
            id="hours-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            진료 시간 안내
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">초록이비인후과의원 진료시간</caption>
              <thead>
                <tr className="bg-primary-light">
                  <th scope="col" className="px-3 py-3 text-xs font-semibold text-primary sm:px-5 sm:py-3.5 sm:text-sm">
                    요일
                  </th>
                  <th scope="col" className="px-3 py-3 text-xs font-semibold text-primary sm:px-5 sm:py-3.5 sm:text-sm">
                    진료시간
                  </th>
                  <th scope="col" className="px-3 py-3 text-xs font-semibold text-primary sm:px-5 sm:py-3.5 sm:text-sm">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((row, i) => (
                  <tr
                    key={row.days}
                    className={i !== SCHEDULE.length - 1 ? "border-b border-border" : ""}
                  >
                    <th
                      scope="row"
                      className="px-3 py-3 text-sm font-semibold text-foreground sm:px-5 sm:py-4 sm:text-[15px]"
                    >
                      {row.days}
                    </th>
                    <td className="px-3 py-3 text-sm tabular-nums text-foreground sm:px-5 sm:py-4 sm:text-[15px]">
                      {row.time}
                    </td>
                    <td className="px-3 py-3 text-xs text-muted-foreground sm:px-5 sm:py-4 sm:text-sm">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-white sm:p-10">
          <CrossPattern
            id="hours-card-cross-pattern"
            className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.08]"
          />
          <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
            <ClockClockwiseIcon size={26} aria-hidden />
          </div>
          <h3 className="relative mt-6 text-xl font-bold">진료 문의</h3>
          <p className="relative mt-3 text-[15px] leading-relaxed text-white/80">
            전화로 진료 문의가 가능합니다. 진료시간 내에 연락 주시면
            안내해 드리겠습니다.
          </p>
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <PhoneCallIcon size={20} weight="fill" aria-hidden />
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
}
