import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Note: no Bootstrap here on purpose — the resume is a standalone document
// and loading a 300 kB framework for it would only slow the print view down.
import './styles/resume.css'

import ResumePage from './components/ResumePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumePage />
  </StrictMode>
)
