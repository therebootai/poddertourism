import { cn } from "@/utils/cn";

export default function FlightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 25"
      fill="none"
      className={cn(className, "text-site-primary")}
    >
      <path
        d="M31.6556 1.71741C30.9363 0.456863 29.334 0.0402223 28.1033 0.79382L21.3668 4.91875L13.9699 0L9.47075 2.59465L15.1793 8.70747L8.24563 12.9531L4.92256 11.4332L1.83088 13.2394L6.46144 16.436L10.3344 16.614L30.67 5.29207C31.9302 4.59039 32.3748 2.97796 31.6556 1.71741ZM0 23.1027H28.4394V25H0V23.1027Z"
        fill="currentColor"
      />
    </svg>
  );
}
