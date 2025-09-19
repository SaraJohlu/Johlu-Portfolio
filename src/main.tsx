import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainApp from './wireframes/MainApp'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
