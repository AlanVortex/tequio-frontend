import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Explorar from './pages/Explorar.jsx';
import Comunidad from './pages/Comunidad.jsx';
import Simulador from './pages/Simulador.jsx';
import Perfil from './pages/Perfil.jsx';
import Terminos from './pages/legal/Terminos.jsx';
import Privacidad from './pages/legal/Privacidad.jsx';
import Riesgos from './pages/legal/Riesgos.jsx';
import Aviso from './pages/legal/Aviso.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="explorar" element={<Explorar />} />
      <Route path="comunidad" element={<Comunidad />} />
      <Route path="simulador" element={<Simulador />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="terminos" element={<Terminos />} />
      <Route path="privacidad" element={<Privacidad />} />
      <Route path="riesgos" element={<Riesgos />} />
      <Route path="aviso" element={<Aviso />} />
    </Route>
  </Routes>
);

export default App;
