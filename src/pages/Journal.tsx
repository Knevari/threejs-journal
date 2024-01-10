import { Link } from "react-router-dom";
import { SceneContainer } from "@/components/SceneContainer";
import { Title, Subtitle, Text } from "@/components/Typography";

import Cubes from "@/examples/scenes/Cubes";

export default function Journal() {
  return (
    <>
      <Title>ThreeJS Journal</Title>
      <Subtitle className="mt-2">
        Trying to understand things a bit better
      </Subtitle>
      <SceneContainer legend="Intro">
        <Cubes />
      </SceneContainer>
      <Text className="mt-8">
        ThreeJS is a small 600KB graphics library used to create stunning
        applications in the browser. Having heard only but good things about it,
        and looking for a way to improve the quality of my projects. Seemed like
        the perfect moment to give it a try and learn even if a little bit of
        it. This is my attempt at documenting <b>anything</b> I find of
        interesting materials, articles, examples, tutorials and whatnot. From
        time to time I&apos;ll be spitting more content here and coming back to
        update on my progress. This is not a blog, it&apos;s not an article,
        it&apos;s a sort of journal to keep me motivated on my journey to learn
        ThreeJS and React Three Fiber (R3F).
      </Text>
      <Subtitle className="font-bold mt-8">Summary so far</Subtitle>

      <ul className="mt-4 flex flex-col">
        <Link to="/geometries">1 - Geometries</Link>
        <Link to="/examples"># - Examples</Link>
      </ul>

      <div className="mt-8" id="journey">
        <Subtitle>ThreeJS Journey</Subtitle>
        <Text className="mt-4">
          My first course of action to learn ThreeJS was enroll into{" "}
          <a href="https://threejs-journey.com/">
            Bruno Simon&apos;s ThreeJS Journey corse
          </a>
          , this was definitely the right choice, Bruno has such an intuitive
          way of explaining things and made it so much easier for me to grasp
          concepts that otherwise would take longer to understand. Going over
          geometries, materials, lighting and shadows was a breeze, with a
          plethora of projects to implement every different concept I learned,
          for that I&apos;m truly grateful to his lessons and have to give its
          credits.
        </Text>
        {/* I can use THREE.MathUtils.randFloatSpread(n) to get a random number
          between -n / 2 and n / 2 */}
      </div>

      <div className="mt-8" id="refs-&-links">
        <Subtitle>References & Links</Subtitle>
        <ul className="mt-4">
          <li>
            <a href="https://discoverthreejs.com/book/first-steps/responsive-design/">
              Responsive Design
            </a>
          </li>
          <li>
            <a href="https://discoverthreejs.com/book/first-steps/transformations/">
              Transformations, Coordinate Systems, and the Scene Graph
            </a>
          </li>
          <li>
            <a href="https://www.pbr-book.org/">
              Physically Based Rendering:From Theory To Implementation
            </a>
          </li>
          <li>
            <a href="https://discoverthreejs.com/book/first-steps/physically-based-rendering/">
              Phisically Based Rendering
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
