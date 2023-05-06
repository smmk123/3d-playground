import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

export default function F35() {
  const materials = useLoader(MTLLoader, "/f35.mtl");
  const obj = useLoader(OBJLoader, "/f35.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return <primitive object={obj}scale={[120,120,120]} />;
}
