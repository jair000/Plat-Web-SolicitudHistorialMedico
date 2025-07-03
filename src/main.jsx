import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

import './css/Global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import '@fortawesome/fontawesome-free/css/all.min.css'

import { BrowserRouter } from 'react-router-dom'; 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* <-- ENVOLVER App AQUÍ */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
