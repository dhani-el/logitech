import { useFrame,useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Home(){
    const groupRef = useRef();
    const {camera,gl,} = useThree()


    return (
                <>
                    <directionalLight position={[1,2,3]} intensity={1} />
                    <ambientLight intensity={0.5} />
                    <group ref={groupRef} >
                        <ASphere/>
                        <ABox/>
                    </group>
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


    return <mesh scale={1.2}>
                <boxGeometry />
                <meshStandardMaterial color={"mediumpurple"}/>
    </mesh>
}

function Floor(){
    return <mesh position-y={-1} scale={10} rotation-x={-Math.PI/2} >
                <planeGeometry  />
                <meshStandardMaterial color={"greenyellow"} />
    </mesh>
}
