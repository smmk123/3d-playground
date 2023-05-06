import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";

const ExecutorClassStarDestroyer= () => {
    const fbx = useLoader(FBXLoader, "./static/executorClassStarDestroyer.fbx");
    return <primitive object={fbx} scale={[0.1,0.1,0.1]}/> ;
  }
const  StarDestroyer = () => {
    const fbx = useLoader(FBXLoader, "./static/starDestroyer.fbx");
    return <primitive object={fbx} scale={[0.008,0.008,0.008]}/>;
  }
const  MauraderCorvette = () => {
    const fbx = useLoader(FBXLoader, "./static/marauderCorvette.fbx");
    return <primitive object={fbx} scale={[0.08,0.08,0.08]}/>;
  }
const  C90 = () => {
    const fbx = useLoader(FBXLoader, "./static/c90.fbx");
    return <primitive object={fbx} scale={[0.5,0.5,0.5]}/>;
  }

  const  Immobilizer = () => {
    const fbx = useLoader(FBXLoader, "./static/immobilizer.fbx");
    return <primitive object={fbx} scale={[0.3,0.3,0.3]}/>;
  }

  const  TieDefender = () => {
    const fbx = useLoader(FBXLoader, "./static/tieDefender.fbx");
    return <primitive object={fbx} scale={[8,8,8]}/>;
  }

function Xwing() {
    const fbx = useLoader(FBXLoader, "./static/xwing.fbx");
    return <primitive object={fbx} scale={[0.5,0.5,0.5]}/>;
  }

function MC80() {
    const fbx = useLoader(FBXLoader, "./static/MC80.fbx");
    return <primitive object={fbx} scale={[0.08,0.08,0.08]}/>;
  }

  function TieFighter() {
    const fbx = useLoader(FBXLoader, "./static/tieFighter.fbx");
    return <primitive object={fbx} scale={[0.5,0.5,0.5]}/>;
  }
  
  
export {ExecutorClassStarDestroyer, C90, Xwing, MC80, TieFighter, Immobilizer, TieDefender, StarDestroyer, MauraderCorvette};