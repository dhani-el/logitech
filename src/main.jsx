import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import  "../public/service-worker-registration"
import  "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
);


