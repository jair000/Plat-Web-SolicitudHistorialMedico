//layout principal que envuelve las páginas

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
