import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";

export default function TieFighter() {
   const materials = useLoader(MTLLoader, "/tie_fighter.mtl");
  const fbx = useLoader(FBXLoader, "/tie_fighter.fbx");
  // const obj = useLoader(OBJLoader, "/tie_fighter.obj", (loader) => {
  //   materials.preload();
  //   loader.setMaterials(materials);
  // });
  return <primitive object={fbx} />;
}
