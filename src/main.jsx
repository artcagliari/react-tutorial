import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppTarefas from './AppTarefas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTarefas />
  </StrictMode>,
)
