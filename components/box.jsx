import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import TieFighter from "./models/tieFighter";
import F35 from "./models/f35";
import TieDefender from "./models/tieDefender";
import ExecutorClassStarDestroyer from "./models/executorStarDestroyer";

export default function Box(props) {
  let rotate = 0;
  if (props.rotate) rotate = 0.01;
  // console.log(rotate);
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += rotate));

  const texture = new THREE.TextureLoader().load("/skin.jpeg");
  const normal_map = new THREE.TextureLoader().load("/skin.jpeg");
  const env_map = new THREE.TextureLoader().load("/canary_wharf_4k.hdr");

  return (
    
    <mesh {...props} ref={mesh}>
      {console.log(props.model)}
      {props.model==="f35" && <F35 position={[0, 0, 0]} />}
      {props.model==="tiedefender" && <TieDefender position={[0, 0, 0]} />}
      {props.model==="executor" && <ExecutorClassStarDestroyer position={[0, 0, 0]} />}
      {/* <torusKnotGeometry args={[6, 3, 100]} /> */}
      {props.model==="tiefighter" && <TieFighter position={[0, -500, 0]} />}
      {/* <meshStandardMaterial color={props.color} /> */}
      {/* <meshPhysicalMaterial
        color={props.color}
        clearcoat={1}
        clearcoatRoughness={1}
        normalMap={texture}
      /> */}
      {/* <meshNormalMaterial map={normal_map} color={props.radio} /> */}
      {/* <meshPhongMaterial
        map={texture}
        envMap={env_map}
        color={props.color}
        shininess={"500"}
        reflectivity={"1"}
        attach="material"
      /> */}
    </mesh>
  );
}
