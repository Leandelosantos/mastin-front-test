import axios from "axios";
import { useState, useEffect, memo, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { AppContext } from "../../context/AppContext";

const URI = "https://server-mastin-abm.vercel.app/products";

const EditProducts = () => {
  const [producto, setProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [segmento, setSegmento] = useState("");
  const { userLogged } = useContext(AppContext);

  const navigate = useNavigate();

  const { id } = useParams();

  //Procedimiento para editar

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URI}/${id}`, {
      PRODUCTO: producto,
      DESCRIPCION: descripcion,
      PRESENTACI_N: presentacion,
      SEGMENTO: segmento,
    });
    swal("Listo!", "Tu producto ha sido editado!", "success");
    navigate("/admin");
  };

  useEffect(() => {
    if (userLogged) {
      getProductById();
    } else {
      navigate("/login");
    }
  }, []);

  const getProductById = async () => {
    const res = await axios.get(`${URI}/${id}`);
    setProducto(res.data.PRODUCTO);
    setDescripcion(res.data.DESCRIPCION);
    setPresentacion(res.data.PRESENTACI_N);
    setSegmento(res.data.SEGMENTO);
  };

  return (
    <>
      {userLogged ? (
        <div>
          <h3>Editar Producto</h3>
          <form onSubmit={update}>
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
                value={segmento}
                className="form-select"
                onChange={(e) => setSegmento(e.target.value)}
              >
                <option value="FILTROS">FILTROS</option>
                <option value="CONSTRUCCION">CONSTRUCCION</option>
                <option value="INDUSTRIA">INDUSTRIA</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="btn btn-danger me-5"
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default memo(EditProducts);
