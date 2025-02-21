import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from 'Pages/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
