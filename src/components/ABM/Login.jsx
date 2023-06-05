import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import md5 from "blueimp-md5";
import { AppContext } from "../../context/AppContext";

const URI = "https://server-mastin-abm.vercel.app/auth";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { setUserLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault;
    try {
      const res = await axios.post(URI, {
        user,
        pass: md5(pass),
      });

      setUserLogged(res.data.isUserLogged);

      if (res.data.isUserLogged) {
        navigate("/admin");
      } else {
        swal("Error!", "Tu Usuario o Contraseña son incorrectos", "warning");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3 className="text-center mt-3 mb-3">
        Ingresar a administracion de productos
      </h3>
      <div className="col-3 mx-auto mt-5 mb-5">
        <form>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              className="form-control"
              name="user"
            />
            <label className="form-label">Contraseña</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              className="form-control"
              name="pass"
            />
          </div>
        </form>
        <button onClick={login} className="btn btn-primary">
          Ingresar
        </button>
      </div>
    </>
  );
};

export default Login;
