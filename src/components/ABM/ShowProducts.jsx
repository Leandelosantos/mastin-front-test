import axios from "axios";
import { useEffect, memo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AppContext } from "../../context/AppContext";

const URI = "https://server-mastin-abm.vercel.app/products";
const URIport = "https://server-mastin-abm.vercel.app/productsPort";

const ShowProducts = () => {
  const {
    userLogged,
    updateItems,
    updateItemsPort,
    items,
    itemsPort,
    text,
    language,
  } = useContext(AppContext);

  const navigate = useNavigate();

  /* const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("isUserLogged="))
    ?.split("=")[1];

  console.log(cookieValue); */

  useEffect(() => {
    if (userLogged) {
      getProducts();
    } else {
      navigate("/login");
    }
  }, []);

  // Procedimiento para mostrar todos los productos

  const getProducts = async () => {
    if (language === "ESP") {
      const res = await axios.get(URI);
      updateItems(res.data);
    } else {
      const res = await axios.get(URIport);
      updateItemsPort(res.data);
    }
  };

  // Procedimiento para eliminar un producto

  const deleteProduct = async (id) => {
    if (language === "ESP") {
      await axios.delete(`${URI}/${id}`);
      getProducts();
      swal("Listo!", "Tu producto ha sido eliminado!", "success");
    } else {
      await axios.delete(`${URIport}/${id}`);
      getProducts();
      swal("Listo!", "Tu producto ha sido eliminado!", "success");
    }
  };

  return (
    <>
      {userLogged ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to={"/create"} className="btn btn-primary mt-3 mb-5">
                Agregar Producto
              </Link>
              <table className="table">
                <thead className="table-primary">
                  <tr>
                    <th>PRODUCTO</th>
                    <th>DESCRIPCION</th>
                    <th>PRESENTACION</th>
                    <th>SEGMENTO</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {(language === "ESP" ? items : itemsPort).map((product) => (
                    <tr key={product.id}>
                      <td>{product.PRODUCTO}</td>
                      <td>{product.DESCRIPCION}</td>
                      <td>{product.PRESENTACI_N}</td>
                      <td>{product.SEGMENTO}</td>
                      <td>
                        <Link
                          to={`/edit/${product.id}`}
                          className="btn btn-info w-75 mb-5"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="btn btn-danger w-75"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(ShowProducts);
