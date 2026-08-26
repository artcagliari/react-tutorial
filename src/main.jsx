import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppTarefas from './AppTarefas.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppTarefas /> */}
    <App />
  </StrictMode>,
)
