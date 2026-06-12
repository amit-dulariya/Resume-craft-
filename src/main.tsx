import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ResumeProvider } from './context/ResumeContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ResumeProvider>
        <App />
      </ResumeProvider>
    </BrowserRouter>
  </StrictMode>,
)
