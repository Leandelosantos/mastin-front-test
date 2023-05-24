import axios from "axios";
import { useState, useEffect, memo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import logo from "../../assets/img/logo-mas-tin.png";
import Imagen from "../Imagen/index";
import { AppContext } from "../../context/AppContext";

const URI = "https://server-mastin-abm.vercel.app/products";

const ShowProducts = () => {
  const { userLogged, updateItems, items } = useContext(AppContext);
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
    const res = await axios.get(URI);
    updateItems(res.data);
  };

  // Procedimiento para eliminar un producto

  const deleteProduct = async (id) => {
    await axios.delete(`${URI}/${id}`);
    getProducts();
    swal("Listo!", "Tu producto ha sido eliminado!", "success");
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
                  {items.map((product) => (
                    <tr key={product.id}>
                      <td>{product.PRODUCTO}</td>
                      <td>{product.DESCRIPCION}</td>
                      <td>{product.PRESENTACI_N}</td>
                      <td>{product.SEGMENTO}</td>
                      <td>
                        <Link
                          to={`/edit/${product.id}`}
                          className="btn btn-info mb-5"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="btn btn-danger"
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
