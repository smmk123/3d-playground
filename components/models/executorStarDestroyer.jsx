import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";

export default function ExecutorClassStarDestroyer() {
    // const materials = useLoader(MTLLoader, "/executorClassStarDestroyer.mtl");
    // const obj = useLoader(OBJLoader, "/executorClassStarDestroyer.obj", (loader) => {
    //   materials.preload();
    //   loader.setMaterials(materials);
    // });
    const fbx = useLoader(FBXLoader, "/executorClassStarDestroyer.fbx");
    return <primitive object={fbx} scale={[0.08,0.08,0.08]}/> ;
  }
  