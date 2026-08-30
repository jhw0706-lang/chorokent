import { ArticleIcon, PhoneCallIcon } from "@phosphor-icons/react/ssr";

const PHONE_NUMBER = "02-997-9988";
const BLOG_URL = "https://blog.naver.com/chorok-ent";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:hidden">
      <a
        href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
        aria-label={`전화 문의 ${PHONE_NUMBER}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
      >
        <PhoneCallIcon size={24} weight="fill" aria-hidden />
      </a>
      <a
        href={BLOG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="초록이비인후과의원 블로그"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
      >
        <ArticleIcon size={24} weight="fill" aria-hidden />
      </a>
    </div>
  );
}
