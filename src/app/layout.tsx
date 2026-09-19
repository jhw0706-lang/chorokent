import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import "./globals.css";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "초록이비인후과의원",
  description:
    "송파구 삼전역 초록이비인후과의원 — 알레르기, 면역치료, 비염, 이석증/어지럼증, 난청·이명 진료. 정확한 진단과 신뢰할 수 있는 진료를 약속합니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
