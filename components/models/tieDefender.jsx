import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from "@react-three/fiber";

export default function TieFighter() {
    const materials = useLoader(MTLLoader, "/TieDefender.mtl");
    const fbx = useLoader(FBXLoader, "/TieDefender.fbx");
    const obj = useLoader(OBJLoader, "/TieDefender.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
    return <primitive object={fbx} scale={[8,8,8]}/>;
  }
  