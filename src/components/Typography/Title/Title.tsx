import cn from "@/utils/cn";

export interface TitleProps extends React.ComponentPropsWithoutRef<"h1"> {}

export const Title = ({ children, className = "", ...props }: TitleProps) => {
  return (
    <h1 className={cn("font-bold text-5xl", className)} {...props}>
      {children}
    </h1>
  );
};
