import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import  "../public/service-worker-registration"
import  "./index.css"
import { Canvas } from '@react-three/fiber'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas
    orthographic
      camera={{fov:45,position:[3,2,6],near:0.1,far:200,zoom:100}}
    >
      <Home/>
    </Canvas>
  </StrictMode>,
);


