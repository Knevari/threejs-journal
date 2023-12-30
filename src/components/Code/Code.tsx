import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface CodeProps extends React.ComponentPropsWithoutRef<"div"> {
  children: string;
}

export function Code({ children, ...props }: CodeProps) {
  return (
    <div {...props}>
      <SyntaxHighlighter language="javascript" style={prism}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
