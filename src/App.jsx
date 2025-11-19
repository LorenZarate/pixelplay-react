import { Routes, Route } from "react-router-dom";

import Navegacion from "./components/navegacion.jsx";
import Footer from "./components/footer.jsx";

import Inicio from "./pages/inicio.jsx";
import Juegos from "./pages/juegos.jsx";
import Detallejuego from "./pages/detallejuego.jsx";
import Contacto from "./pages/contacto.jsx";
import Nosotros from "./pages/nosotros.jsx";
import Favoritos from "./pages/favoritos.jsx";
import Carrito from "./pages/carrito.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./styles/global.css";

function App() {
  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <Navegacion />

      <div className="flex-fill">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/juego/:id" element={<Detallejuego />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* 🔥 Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
