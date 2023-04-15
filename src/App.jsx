import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Empresa, Catalogo, Contacto } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
