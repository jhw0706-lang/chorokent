import { PhoneCallIcon } from "@phosphor-icons/react/ssr";

const PHONE_NUMBER = "02-997-9988";

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
      aria-label={`전화 문의 ${PHONE_NUMBER}`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none sm:hidden"
    >
      <PhoneCallIcon size={24} weight="fill" aria-hidden />
    </a>
  );
}
