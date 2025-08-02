import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls,TransformControls } from "@react-three/drei";

import CustomObject from "./customObject";

export default function Home(){
    const groupRef = useRef();
    useFrame((state)=>{
        // const angle = state.clock.elapsedTime;
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0,0,0)
    })


    return (
                <>
                    <OrbitControls/>
                    <directionalLight position={[1,2,3]} intensity={1} />
                    <ambientLight intensity={0.5} />
                    <group ref={groupRef} >
                        <ASphere/>
                        <ABox/>
                    </group>
                    <CustomObject/>
                    <Floor/>
                </>
    )
}


function ASphere(){
    return  <mesh  position-x = {-1.8} >
                <sphereGeometry/>
                <meshStandardMaterial color={"orange"}  />
            </mesh>
}

function ABox(){


    return  <TransformControls>
                <mesh scale={1.2}>
                            <boxGeometry />
                            <meshStandardMaterial color={"mediumpurple"}/>
                </mesh>
            </TransformControls>


}

function Floor(){
    return <mesh position-y={-1} scale={10} rotation-x={-Math.PI/2} >
                <planeGeometry  />
                <meshStandardMaterial color={"greenyellow"} />
    </mesh>
}
