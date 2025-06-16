import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RoundProvider } from './Components/HomePage/RoundContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RoundProvider>
          <App />
      </RoundProvider>
    </BrowserRouter>
  </StrictMode>,
)
