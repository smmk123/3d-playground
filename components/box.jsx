import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import {ExecutorClassStarDestroyer, C90, Xwing, MC80, TieFighter, Immobilizer, TieDefender, StarDestroyer, MauraderCorvette} from './models/starWars'
import { Constitution } from "./models/starTrek";

export default function Box(props) {
  let rotate = 0;
  if (props.rotate) rotate = 0.01;
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += rotate));

  return (
    
    <mesh {...props} ref={mesh}>
      {props.model==="tiefighter" && <TieFighter/>}
      {props.model==="tiedefender" && <TieDefender/>}
      {props.model==="executor" && <ExecutorClassStarDestroyer/>}
      {props.model==="xwing" && <Xwing/>}
      {props.model==="c90" && <C90/>}
      {props.model==="mc80" && <MC80/>}
      {props.model==="immobilizer" && <Immobilizer/>}
      {props.model==="starDestroyer" && <StarDestroyer/>}
      {props.model==="marauder" && <MauraderCorvette/>}
      {props.model==="constitution" && <Constitution/>}
      
      {/* <torusKnotGeometry args={[6, 3, 100]} /> */}
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
