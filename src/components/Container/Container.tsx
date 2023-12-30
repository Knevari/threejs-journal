import cn from "@/utils/cn";

export interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

export function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("max-w-[120ch] mx-auto py-4 px-4 md:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
