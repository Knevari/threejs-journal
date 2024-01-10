import { Subtitle, Title } from "@/components/Typography";
import scenes from "@/examples/scenes";

export default function Examples() {
  return (
    <>
      <Title>Examples</Title>
      <Subtitle className="mt-2">Graphics Lab</Subtitle>
      <div className="mt-8 grid grid-cols-3 gap-8" id="examples">
        {scenes.map(({ name, scene: Scene }) => (
          <div key={name}>
            <div className="shadow-pink-100 shadow-lg rounded-lg border border-neutral-400/20">
              <Scene />
            </div>
            <h5 className="text-sm mt-2 text-center text-pink-600/50">
              {name}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
}
