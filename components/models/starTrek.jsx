import { GLTFLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";

const Constitution =() =>{
  const mesh =useLoader(GLTFLoader, "./static/constitution_class.glb",)
      return <primitive object={mesh.scene} scale={[1,1,1]}/>;
}
  
  
export {Constitution};