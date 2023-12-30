import { useCallback, useEffect, useState } from "react";
import { readToString } from "@/utils/file";

export default function useSnippet(category: string, id: string) {
  const [snippet, setSnippet] = useState("");

  const loadSnippet = useCallback(
    () => readToString(`src/examples/codes/${category}/${id}.ts`),
    [category, id]
  );

  useEffect(() => {
    loadSnippet()
      .then((snippet) => setSnippet(snippet))
      .catch((err) => console.log({ err }));
  }, [category, id]);

  return snippet;
}
