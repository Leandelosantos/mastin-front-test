import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {
  Home,
  Empresa,
  Catalogo,
  Contacto,
  Navbar,
  Footer,
} from "./components";

function App() {
  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:8800/items");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* Se agregar el Navbar en App, de este modo es accesible y compartido por los componentes ruteados abajo */}
        <Navbar />
        {/* Este es el Router que se encarga de mapear las URLs con el Componente que se debe renderizar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        {/* Se agregar el Footer en App, de este modo es accesible y compartido por los componentes ruteados arriba */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
