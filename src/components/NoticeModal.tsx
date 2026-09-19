"use client";

import { useEffect, useState } from "react";
import { XIcon } from "@phosphor-icons/react";

const DISMISS_KEY = "chorokent-notice-dismissed-date";

export default function NoticeModal() {
  const [open, setOpen] = useState(false);
  const [hideToday, setHideToday] = useState(false);

  useEffect(() => {
    try {
      const today = new Date().toDateString();
      if (localStorage.getItem(DISMISS_KEY) !== today) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    if (hideToday) {
      try {
        localStorage.setItem(DISMISS_KEY, new Date().toDateString());
      } catch {}
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-modal-heading"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border-[6px] border-accent-dark bg-white p-7 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="팝업 닫기"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-background-soft hover:text-foreground"
        >
          <XIcon size={18} weight="bold" aria-hidden />
        </button>

        <div className="flex items-center justify-between">
          <p className="text-base font-bold text-foreground">접종 안내</p>
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            NOTICE
          </p>
        </div>
        <div className="mt-3 h-px bg-accent-dark" />

        <h2
          id="notice-modal-heading"
          className="mt-6 text-3xl font-black tracking-tight text-foreground"
        >
          어린이 국가 독감
        </h2>

        <p className="mt-4 inline-block bg-yellow-200 px-2 py-1 text-xl font-bold text-foreground">
          생후 6개월~14세
        </p>
        <p className="mt-2 text-[15px] text-muted-foreground">
          (2012.1.1. ~ 2026.8.31. 출생자)
        </p>

        <div className="mt-6 h-px bg-border" />

        <div className="mt-6 rounded-md bg-accent-dark px-5 py-3 text-center text-lg font-extrabold text-white">
          9월 21일부터
        </div>

        <label className="mt-6 flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={hideToday}
            onChange={(e) => setHideToday(e.target.checked)}
            className="h-4 w-4 rounded border-border accent-accent-dark"
          />
          오늘 하루 동안 보지 않기
        </label>

        <button
          type="button"
          onClick={handleClose}
          className="mt-4 w-full rounded-full border border-border py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-background-soft"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
