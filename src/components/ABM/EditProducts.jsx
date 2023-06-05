import axios from "axios";
import { useState, useEffect, memo, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { AppContext } from "../../context/AppContext";

const URI = "https://server-mastin-abm.vercel.app/products";
const URIport = "https://server-mastin-abm.vercel.app/productsPort";

const EditProducts = () => {
  const [producto, setProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [segmento, setSegmento] = useState("");
  const { userLogged, language, text } = useContext(AppContext);

  const navigate = useNavigate();

  const { id } = useParams();

  //Procedimiento para editar

  const update = async (e) => {
    e.preventDefault();
    if (language === "ESP") {
      await axios.put(`${URI}/${id}`, {
        PRODUCTO: producto,
        DESCRIPCION: descripcion,
        PRESENTACI_N: presentacion,
        SEGMENTO: segmento,
      });
      swal("Listo!", "Tu producto ha sido editado!", "success");
      navigate("/admin");
    } else {
      await axios.put(`${URIport}/${id}`, {
        PRODUCTO: producto,
        DESCRIPCION: descripcion,
        PRESENTACI_N: presentacion,
        SEGMENTO: segmento,
      });
      swal("Listo!", "Tu producto ha sido editado!", "success");
      navigate("/admin");
    }
  };

  useEffect(() => {
    if (userLogged) {
      getProductById();
    } else {
      navigate("/login");
    }
  }, []);

  const getProductById = async () => {
    if (language === "ESP") {
      const res = await axios.get(`${URI}/${id}`);
      setProducto(res.data.PRODUCTO);
      setDescripcion(res.data.DESCRIPCION);
      setPresentacion(res.data.PRESENTACI_N);
      setSegmento(res.data.SEGMENTO);
    } else {
      const res = await axios.get(`${URIport}/${id}`);
      setProducto(res.data.PRODUCTO);
      setDescripcion(res.data.DESCRIPCION);
      setPresentacion(res.data.PRESENTACI_N);
      setSegmento(res.data.SEGMENTO);
    }
  };

  return (
    <>
      {userLogged ? (
        <div className="row">
          <h3 className="mt-5 mb-3 m-auto d-flex justify-content-center">
            Editar Producto
          </h3>
          <form onSubmit={update}>
            <div className="d-flex flex-column w-75 m-auto justify-content-center mb-3 mt-3">
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
      ) : null}
    </>
  );
};

export default memo(EditProducts);
