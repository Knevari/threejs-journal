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
        <Text className="mt-4">
          ThreeJS has a huge number of primitives that may be used to define
          different kinds of objects in your scene. Geometries are used to
          create shapes like cubes, spheres, cilinders, planes, etc... Each
          different geometry in your scene may have a varying number of faces
          and vertices, for example, cubes have 8 verticles and 6 faces.
        </Text>
        <Text className="mt-4">
          The library itself gives us a few default geometries to play around
          and experiment, <b>e.g.</b> CubeGeometry, SphereGeometry,
          TorusGeometry, TorusKnotGeometry, etc...
        </Text>
        <Code className="mt-4">{geometryCode}</Code>
      </div>
    </>
  );
}
