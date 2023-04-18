import { PointLight } from "three";

export default function Light({
  intensity,
  brightness1,
  brightness2,
  color1,
  color2,
}) {
  return (
    <>
      <ambientLight intensity={intensity} />
      <pointLight
        color={color1}
        intensity={brightness1}
        distance={90}
        decay={2}
        position={[10, 15, 10]}
      />
      <pointLight
        color={color2}
        intensity={brightness2}
        distance={50}
        decay={2}
        position={[10, 45, 10]}
      />
    </>
  );
}
