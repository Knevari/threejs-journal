import cn from "@/utils/cn";

export interface TextProps extends React.ComponentPropsWithoutRef<"p"> {}

export const Text = ({ children, className = "", ...props }: TextProps) => {
  return (
    <p className={cn("font-normal text-base", className)} {...props}>
      {children}
    </p>
  );
};
