import { Suspense, useState } from "react";
import Box from "./box.jsx";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Float,
  RandomizedLight,
} from "@react-three/drei";

export default function SelectionPanel() {
  const [selections, setSelections] = useState({
    fruit: "",
    color: "white",
    rotate: false,
    lightLevel: "3",
    textArea: "",
    float: false,
    model:"executor",
  });

  const models= [
    {name:"tiefighter",
     credit:"https://sketchfab.com/DanielAndersson/models"},
    {name:"tiedefender"},
    {name:"executor"},
    {name:"f35"}, 
    ]

  const colorOptions = [
    "green",
    "grey",
    "red",
    "royalblue",
    "gold",
    "purple",
    "white",
    "#00f3ff",
  ];

  const radioOptions = ["3", "6", "9", "12", "100"];

  const handleColorChange = (e) => {
    setSelections((values) => ({ ...values, color: e.target.value }));
  };

  const handleModelChange = (e) => {
    setSelections((values) => ({ ...values, model: e.target.value}));
  };

  const handleRotateBox = (e) => {
    setSelections((values) => ({
      ...values,
      rotate: selections.rotate ? false : true,
    }));
  };
  const handleFloatBox = (e) => {
    setSelections((values) => ({
      ...values,
      float: selections.float ? false : true,
    }));
  };

  const handleRadioButton = (e) => {
    setSelections((values) => ({
      ...values,
      lightLevel: e.target.value,
    }));
  };

  return (
    <>
      <form>
        <div className="form-element">
          <span>Color </span>
          <select value={selections.color} onChange={handleColorChange}>
            {colorOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>

          <span>Model </span>
          <select value={selections.model} onChange={handleModelChange}>
            {models.map(({name}) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <label className="form-element">
            Light Level
            {radioOptions.map((radio) => (
              <label key={radio}>
                <input
                  type="radio"
                  value={radio}
                  checked={selections.lightLevel === radio}
                  onChange={handleRadioButton}
                />
                {radio}
              </label>
            ))}
          </label>
        </div>

        <label className="form-element">
          <input
            type="checkbox"
            checked={selections.rotate}
            onChange={handleRotateBox}
          />
          Rotate
        </label>

        <label className="form-element">
          <input
            type="checkbox"
            checked={selections.float}
            onChange={handleFloatBox}
          />
          Float
        </label>
              
        
      </form>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Canvas
          camera={{ position: [500, -200, 850], zoom: 1.5, far: 4000 }}
          onCreated={(state) => state.gl.setClearColor("black")}
        >
          
          <OrbitControls />
          <ambientLight intensity={0.08} position={[10, 600, 1]}></ambientLight>
          <spotLight
            intensity={selections.lightLevel}
            position={[50, -600, 80]}
            color={selections.color}
          />
                    <spotLight
            intensity={selections.lightLevel}
            position={[50, 600, 80]}
            color={selections.color}
          />

          <Float
            speed={selections.float ? 5 : 0}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[1, 10]}
          >
            <Box rotate={selections.rotate} model={selections.model} />
          </Float>
          <Stars
            radius={700}
            depth={90}
            count={50000}
            factor={10}
            saturation={5}
            fade={true}
            speed={3}
          />
        </Canvas>
        
      </Suspense>
      <p>model by {selections.model === "executor" && "DanielAndersson https://sketchfab.com/DanielAndersson/models"}</p>
    </>
  );
}
