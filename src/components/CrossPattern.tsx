type CrossPatternProps = {
  id: string;
  className?: string;
};

/**
 * Decorative, non-photographic texture echoing the logo's cross motif.
 * Purely ornamental — always aria-hidden and pointer-events-none at the call site.
 */
export function CrossPattern({ id, className }: CrossPatternProps) {
  return (
    <svg aria-hidden className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M10 4v12M4 10h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
