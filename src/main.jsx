import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routers/Approuter.jsx'
import "./styles/styles.scss";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppRouter />
  </StrictMode>,
)