import { cn } from "@/utils/cn";

export default function CustomSiteHeader({
  normal,
  highlighted,
  className,
}: {
  normal: string;
  highlighted: string;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        className,
        "xlg:text-4xl lg:text-3xl text-2xl font-bold text-site-black"
      )}
    >
      <span className="text-site-primary">{highlighted}</span> {normal}
    </h1>
  );
}
