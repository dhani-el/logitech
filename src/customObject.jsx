
import * as THREE from "three";
import { useEffect, useMemo,useRef } from "react";





export default function CustomObject(){
    const geometryRef = useRef()
    const numberOfGeometry = 10;
    const verticesPerGeometry = 3;
    const verticesCount = numberOfGeometry * verticesPerGeometry;
    // a triangle has 3 vertices but each vertex os somewhere in a 3d location hence the multiplication of all the vertices by 
    // 3 to account for their position below
    const numberOfVerticesPoint  = verticesCount * 3
    const position = useMemo(()=>{
        const position = new Float32Array(numberOfVerticesPoint);

        for(let i = 0 ; i < numberOfVerticesPoint; i++){
            position[i] = (Math.random() - 0.5) * 3;
        }
        return position
    },[])

    useEffect(()=>{
        geometryRef.current.computeVertexNormals()
    },[])

    return <mesh  position-x={2}>
                    <bufferGeometry ref={geometryRef} >
                        <bufferAttribute attach={"attributes-position"} 
                        count={verticesCount} 
                        itemSize={verticesPerGeometry}
                        array={position} />
                    </bufferGeometry>
                    <meshStandardMaterial color={"cyan"} side={THREE.DoubleSide} />
                </mesh>
}