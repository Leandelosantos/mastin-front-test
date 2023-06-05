import axios from "axios";
import { memo, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AppContext } from "../../context/AppContext";

const URI = "https://server-mastin-abm.vercel.app/products";
const URIport = "https://server-mastin-abm.vercel.app/productsPort";

const CreateProduct = () => {
  const [producto, setProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [segmento, setSegmento] = useState("");
  const { userLogged, language, text } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogged) {
      navigate("/login");
    }
  }, []);

  //Procedimiento guardar

  const store = async (e) => {
    e.preventDefault();
    if (language === "ESP") {
      await axios.post(URI, {
        PRODUCTO: producto,
        DESCRIPCION: descripcion,
        PRESENTACI_N: presentacion,
        SEGMENTO: segmento,
      });
      swal("Listo!", "Tu producto ha sido guardado!", "success");
      navigate("/admin");
    } else {
      await axios.post(URIport, {
        PRODUCTO: producto,
        DESCRIPCION: descripcion,
        PRESENTACI_N: presentacion,
        SEGMENTO: segmento,
      });
      swal("Listo!", "Tu producto ha sido guardado!", "success");
      navigate("/admin");
    }
  };

  return (
    <div className="row">
      <h3 className="mt-5 mb-3 m-auto d-flex justify-content-center">
        Crear Producto
      </h3>
      <form onSubmit={store}>
        <div className="d-flex flex-column w-75 m-auto justify-content-center mb-3">
          <label className="form-label">PRODUCTO</label>
          <input
            value={producto}
            onChange={
              (e) =>
                setProducto(
                  e.target.value
                ) /* captura el valor que se escribe en el input */
            }
            type="text"
            className="form-control"
          />
          <label className="form-label">DESCRIPCION</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form-control p-5"
          />
          <label className="form-label">PRESENTACION</label>
          <input
            value={presentacion}
            onChange={(e) => setPresentacion(e.target.value)}
            type="text"
            className="form-control"
          />
          <label className="form-label">SEGMENTO</label>
          <select
            className="form-select"
            onChange={(e) => setSegmento(e.target.value)}
          >
            <option value={null}>-</option>
            <option value={text.navbar.catalogo.item4}>
              {text.navbar.catalogo.item4}
            </option>
            <option value={text.navbar.catalogo.item5}>
              {text.navbar.catalogo.item5}
            </option>
            <option value={text.navbar.catalogo.item2}>
              {text.navbar.catalogo.item2}
            </option>
            <option value={text.navbar.catalogo.item3}>
              {text.navbar.catalogo.item3}
            </option>
          </select>
        </div>
        <div className="d-flex row justify-content-center m-auto mb-5 mt-5">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="btn btn-danger w-25 me-5"
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary w-25">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(CreateProduct);
