import { Code } from "@/components/Code";
import { Subtitle, Title, Text } from "@/components/Typography";
import useSnippet from "@/hooks/useSnippet";

export default function Geometries() {
  const geometryCode = useSnippet("geometries", "1-1");
  return (
    <>
      <Title>Geometries</Title>
      <Subtitle className="mt-2">Some very cool subtitle indeed</Subtitle>
      <div className="mt-8" id="geometries">
        <Subtitle>Geometries</Subtitle>
        <Text className="mt-4">Some beautiful geometry text</Text>
        <Code className="mt-4">{geometryCode}</Code>
      </div>
    </>
  );
}
