import axios from "axios";
import { memo, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AppContext } from "../../context/AppContext";

const URI = "https://server-mastin-abm.vercel.app/products";

const CreateProduct = () => {
  const [producto, setProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [segmento, setSegmento] = useState("");
  const { userLogged } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogged) {
      navigate("/login");
    }
  }, []);
  //Procedimiento guardar

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      PRODUCTO: producto,
      DESCRIPCION: descripcion,
      PRESENTACI_N: presentacion,
      SEGMENTO: segmento,
    });
    swal("Listo!", "Tu producto ha sido guardado!", "success");
    navigate("/admin");
  };

  return (
    <div>
      <h3>Crear Producto</h3>
      <form onSubmit={store}>
        <div className="mb-3">
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
            <option value="-">-</option>
            <option value="FILTROS">FILTROS</option>
            <option value="CONSTRUCCION">CONSTRUCCION</option>
            <option value="INDUSTRIA">INDUSTRIA</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default memo(CreateProduct);
