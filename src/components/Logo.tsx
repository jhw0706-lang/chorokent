type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 40, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="초록이비인후과의원 로고"
    >
      <rect width="100" height="100" rx="22" className="fill-primary" />
      <g transform="rotate(-8 42 50)">
        <rect x="12" y="40" width="52" height="20" rx="10" fill="white" />
      </g>
      <g>
        <rect x="50" y="27" width="16" height="46" rx="8" fill="white" />
        <rect x="35" y="42" width="46" height="16" rx="8" fill="white" />
      </g>
    </svg>
  );
}

type LogoProps = {
  markSize?: number;
  className?: string;
  wordmarkClassName?: string;
};

export function Logo({ markSize = 40, className, wordmarkClassName }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={markSize} />
      <span
        className={`font-bold tracking-tight text-primary ${wordmarkClassName ?? "text-lg"}`}
      >
        초록이비인후과의원
      </span>
    </div>
  );
}
