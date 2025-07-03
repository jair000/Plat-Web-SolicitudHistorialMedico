// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import FeaturedServices from './components/FeaturedServices';
import Carrusel from './components/Carrusel';
import Contacto from './components/Contacto';
import SolicitarHistorial from './components/SolicitarHistorial';
import ConsultaEstado from './components/ConsultaEstado';
import MiHistorial from './components/MiHistorial';
import Doctores from './components/Doctores';

// layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// react-router
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import Home from './pages/Home';


function App() {
  return (
    <Routes>

      {/* Redirección del inicio "/" hacia la ruta deseada */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Layout principal con Header y Footer */}
      <Route element={<MainLayout />}>

        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          element={
            <>
              <Carrusel />
              <Doctores />
              {/* <FeaturedServices /> */}
              <SolicitarHistorial />
              <ConsultaEstado />
              <MiHistorial />
              <Contacto />
              <Perfil />
            </>
          }
        />
        <Route path="/solicitar" element={<SolicitarHistorial />} />
        <Route path="/consulta-estado" element={<ConsultaEstado />} />
        <Route path="/mi-historial" element={<MiHistorial />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* <Route path="/perfil" element={<Perfil />} /> */}
      </Route>

      {/* Layout para login sin Header/Footer */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Route>

    </Routes>
  );
}

export default App;




//  SIN ROUTER - RESPALDO
// function App() {
  

//   return (
//     <>
//       {/* app-container, main-content, para poner el footer siempre abajo con flex: 1 */}
//       <div className="app-container">
//         <Header/>
//         <div className="main-content">
//           <Carrusel />
//           <FeaturedServices />
//           <SolicitarHistorial />
//           <ConsultaEstado />
//           <MiHistorial />
//           <Contacto />
//         </div>
//         <Footer /> 
//       </div>
//     </>
//   );
// }

// export default App
