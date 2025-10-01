import logoUrl from "./logo.svg";

type LogoSize = "sm" | "md" | "lg";

const sizeMap: Record<
  LogoSize,
  { w: number; h: number; className: string; titleClassName: string }
> = {
  sm: { w: 24, h: 24, className: "w-6 h-6", titleClassName: "text-base" },
  md: { w: 32, h: 32, className: "w-8 h-8", titleClassName: "text-xl" },
  lg: { w: 40, h: 40, className: "w-10 h-10", titleClassName: "text-2xl" },
};

export default function Logo({
  size = "sm",
  showTitle = false,
  title,
}: {
  size?: LogoSize;
  showTitle?: boolean;
  title?: string;
}) {
  const { w, h, className, titleClassName } = sizeMap[size];

  return (
    <div className="flex items-center gap-2">
      <img
        src={logoUrl}
        alt="SnapIter Logo"
        width={w}
        height={h}
        className={className}
      />
      {showTitle && (
        <h1 className={`${titleClassName} font-bold text-foreground`}>
          {title ?? (
            <>
              <span className="text-primary">S</span>nap
              <span className="text-primary">I</span>ter
            </>
          )}
        </h1>
      )}
    </div>
  );
}
