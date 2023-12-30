import cn from "@/utils/cn";

export interface SubtitleProps extends React.ComponentPropsWithoutRef<"h2"> {}

export const Subtitle = ({
  children,
  className = "",
  ...props
}: SubtitleProps) => {
  return (
    <h2 className={cn("font-light text-2xl", className)} {...props}>
      {children}
    </h2>
  );
};
