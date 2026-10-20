import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";
import gsap from "gsap";

export function Planet(props) {
    const shapeContainer = useRef(null);
    const shperesContainer = useRef(null);
    const ringTiltRef = useRef(null);
    const ringMeshRef = useRef(null);
    const { nodes, materials } = useGLTF("/model/Planet.glb");

    useGSAP(() => {
        if (!shapeContainer.current || !shperesContainer.current || !ringTiltRef.current) return;

        const tl = gsap.timeline();
        tl.from(shapeContainer.current.position, {
            y: 2,
            duration: 2.5,
            ease: "power2.out",
        });
        tl.from(
            shperesContainer.current.rotation,
            {
                x: 0,
                y: Math.PI,
                z: -Math.PI,
                duration: 6,
                ease: "power1.inOut",
            },
            "-=50%"
        );
        tl.from(
            ringTiltRef.current.rotation,
            {
                x: 0.8,
                y: 0,
                z: 0,
                duration: 6,
                ease: "power1.inOut",
            },
            "<"
        );
    }, []);

    useFrame((state, delta) => {
        // Continuous smooth spin of the golden ring on its local plane axis
        if (ringMeshRef.current) {
            ringMeshRef.current.rotation.y += delta * 0.25;
        }
        // Continuous orbit of the golden moon around the planet
        if (shperesContainer.current) {
            shperesContainer.current.rotation.y += delta * 0.12;
        }
        // Subtle responsive mouse parallax tilt
        if (shapeContainer.current) {
            shapeContainer.current.rotation.y = THREE.MathUtils.lerp(
                shapeContainer.current.rotation.y,
                state.pointer.x * 0.35,
                0.05
            );
            shapeContainer.current.rotation.x = THREE.MathUtils.lerp(
                shapeContainer.current.rotation.x,
                -state.pointer.y * 0.25,
                0.05
            );
        }
    });

    return (
        <group ref={shapeContainer} {...props} dispose={null}>
            <group ref={shperesContainer}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere.geometry}
                    material={materials["Material.002"]}
                    rotation={[0, 0, 0.741]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere2.geometry}
                    material={materials["Material.001"]}
                    position={[0.647, 1.03, -0.724]}
                    rotation={[0, 0, 0.741]}
                    scale={0.223}
                />
            </group>
            <group ref={ringTiltRef} rotation={[-0.124, 0.123, -0.778]}>
                <mesh
                    ref={ringMeshRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Ring.geometry}
                    material={materials["Material.001"]}
                    scale={2}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/model/Planet.glb");