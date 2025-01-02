"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Shapes() {
  return (
    <div className="flex justify-cnter items-center">
      <Canvas
        className="z-10"
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
        style={{ height: "480px", width: "100%", position: "absolute", top: "0", left: "0" }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </div>
  );
}

function Geometries() {
    const geometries = [
        {
          position: [0, 0, 0],
          r: 0.5,
          geometry: new THREE.TorusKnotGeometry(3, 1, 300, 20, 2, 5), // Reduced size donut
        },
        
      ];
      

  const soundEffects = [
    new Audio("/sounds/hit2.ogg"),
    new Audio("/sounds/hit3.ogg"),
    new Audio("/sounds/hit4.ogg"),
  ];

  const materials = [
    new THREE.MeshPhysicalMaterial({
      roughness: 0,         // Smooth surface for shininess
      metalness: 1,         // Metallic effect
      transmission: 1,      // For glass-like transparency
      thickness: 0.5,       // Thickness of the glass
      reflectivity: 1,      // Highly reflective
      clearcoat: 1,         // Adds an extra reflective layer
      clearcoatRoughness: 0, // Ensures the clear coat is smooth
      color: new THREE.Color(0x2980b9), // Base color (pink)
      sheen: 1,             // Adds sheen (for materials like velvet)
      sheenColor: new THREE.Color(0x2980b9), // Secondary color for gradient effect (purple)
      ior: 1.5,             // Index of Refraction (for glass-like refraction)
    }),
  ];
  

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)} // Unique key
      position={position.map((p) => p * 2)}
      geometry={geometry}
      soundEffects={soundEffects}
      materials={materials}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, soundEffects, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;

    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        ></mesh>
      </Float>
    </group>
  );
}