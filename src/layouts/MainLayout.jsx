import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const MainLayout = () => (
  <div className="min-h-screen flex flex-col bg-sand">
    <Navbar />
    <main className="flex-1 pt-20 pb-16">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
