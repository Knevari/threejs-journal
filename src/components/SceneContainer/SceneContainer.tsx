import cn from "@/utils/cn";

export interface SceneContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  legend?: string;
}

export function SceneContainer({
  children,
  className = "",
  legend,
  ...props
}: SceneContainerProps) {
  return (
    <div>
      <div
        className={cn(
          "bg-neutral-400/20 rounded-2xl h-[500px] mt-8 shadow-xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
      {legend && (
        <small className="block mt-1 text-center text-gray-300 text-xs">
          {legend}
        </small>
      )}
    </div>
  );
}
