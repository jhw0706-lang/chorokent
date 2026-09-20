"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ListIcon, PhoneCallIcon, XIcon } from "@phosphor-icons/react";

const NAV_ITEMS = [
  { href: "#about", label: "병원소개" },
  { href: "#services", label: "진료과목" },
  { href: "#iv-clinic", label: "수액 클리닉" },
  { href: "#hours", label: "진료시간" },
  { href: "#location", label: "오시는길" },
];

const PHONE_NUMBER = "02-997-9988";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href="/" aria-label="초록이비인후과의원 홈" className="shrink-0">
          <Logo markSize={38} wordmarkClassName="text-base sm:text-lg" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            <PhoneCallIcon size={18} weight="fill" aria-hidden />
            {PHONE_NUMBER}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-primary-light md:hidden"
          >
            {open ? <XIcon size={24} /> : <ListIcon size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="모바일 메뉴"
          className="border-t border-border bg-background px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-primary-light hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-base font-semibold text-white"
              >
                <PhoneCallIcon size={20} weight="fill" aria-hidden />
                {PHONE_NUMBER}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
