import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import  "../public/service-worker-registration"
import  "./index.css"
import { Canvas } from '@react-three/fiber'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas>
      <Home/>
    </Canvas>
  </StrictMode>,
);


