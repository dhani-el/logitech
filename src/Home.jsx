import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Home(){
    const groupRef = useRef();

    // useFrame((state,delta)=>{
    //     // groupRef.current.rotation.y += delta
    // })

    return (
                <>
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
                <meshBasicMaterial color={"orange"}  />
            </mesh>
}

function ABox(){


    return <mesh scale={1.2}>
                <boxGeometry />
                <meshBasicMaterial color={"mediumpurple"}/>
    </mesh>
}

function Floor(){
    return <mesh position-y={-1} scale={10} rotation-x={-Math.PI/2} >
                <planeGeometry  />
                <meshBasicMaterial color={"greenyellow"} />
    </mesh>
}
