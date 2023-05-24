import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Empresa,
  Catalogo,
  Contacto,
  Navbar,
  Footer,
  MainContainer,
  Segmento,
  ShowProducts,
  CreateProduct,
  EditProducts,
  Login,
} from "./components";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <>
      {/* Proveedor de conexto para usar variables de almacenamiento global y rapido acceso */}
      <AppContextProvider>
        <MainContainer>
          <BrowserRouter>
            {/* Se agregar el Navbar en App, de este modo es accesible y compartido por los componentes ruteados abajo */}
            <Navbar />
            {/* Este es el Router que se encarga de mapear las URLs con el Componente que se debe renderizar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/empresa" element={<Empresa />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/segmento/:categoria" element={<Segmento />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<ShowProducts />} />
              <Route path="/create" element={<CreateProduct />} />
              <Route path="/edit/:id" element={<EditProducts />} />
            </Routes>
            {/* Se agregar el Footer en App, de este modo es accesible y compartido por los componentes ruteados arriba */}
            <Footer />
          </BrowserRouter>
        </MainContainer>
      </AppContextProvider>
    </>
  );
}

export default App;
