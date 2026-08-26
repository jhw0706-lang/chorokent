import Link from "next/link";
import { LogoMark } from "./Logo";

const ADDRESS = "서울특별시 송파구 백제고분로 187 3층 (9호선 삼전역 1번 출구)";
const PHONE_NUMBER = "02-997-9988";

const LEGAL_LINKS = [
  { href: "/fees", label: "비급여 진료비용" },
  { href: "/privacy", label: "개인정보처리방침" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-soft">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2.5">
            <LogoMark size={32} />
            <span className="text-base font-bold text-primary">
              초록이비인후과의원
            </span>
          </div>

          <div className="text-sm leading-relaxed text-muted-foreground">
            <p>{ADDRESS}</p>
            <p className="mt-1">
              대표전화{" "}
              <a
                href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
                className="font-medium text-foreground hover:text-primary"
              >
                {PHONE_NUMBER}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-6">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          본 홈페이지에 게재된 정보는 진료 안내를 위한 일반적인 내용이며,
          개별 환자의 치료 효과나 결과를 보장하지 않습니다.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} 초록이비인후과의원. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
