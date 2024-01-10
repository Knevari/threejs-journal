import { Subtitle, Title } from "@/components/Typography";
import scenes from "@/examples/scenes";

export default function Examples() {
  return (
    <>
      <Title>Examples</Title>
      <Subtitle className="mt-2">Graphics Lab</Subtitle>
      <div className="mt-8 grid grid-cols-3" id="examples">
        {scenes.map(({ scene: Scene }) => (
          <div className="shadow-lg rounded-lg border border-neutral-400/20">
            <Scene />
          </div>
        ))}
      </div>
    </>
  );
}
