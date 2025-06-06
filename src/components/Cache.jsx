import { Link } from "react-router-dom";
import estrella from "../assets/images/logo-estrella-sm.png";

function Cache() {
  return (
    <section className="bg-contacto-cache">
      <div className="row">
        <div className="col-lg-12 my-5 text-center">
          <img
            src={estrella}
            alt="estrella chatarra"
            className="img-fluid estrella"
          />
          <h3 className="d-inline mx-4">Cache</h3>
          <img
            src={estrella}
            alt="estrella chatarra"
            className="img-fluid estrella"
          />
        </div>
      </div>
      <div className="row justify-content-center py-5">
        <div className="col-12 col-md-8">
          <table className="table table-striped gira-table">
            <thead>
              <tr>
                <th scope="col">Localización</th>
                <th scope="col">Cache</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Barcelona ciudad (50km radio)</td>
                <td>&euro; 300</td>
              </tr>
              <tr>
                <td>Resto de España</td>
                <td>&euro; 600</td>
              </tr>
              <tr>
                <td>Fuera de España</td>
                <td>
                  Por favor contactar al email{" "}
                  <a href="mailto:chatarrarock@protonmail.com">
                    chatarrarock@protonmail.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <small>
              Ver{" "}
              <Link to="/rider" target="_blank" rel="noreferrer">
                Rider técnico
              </Link>{" "}
              &#32; para mas especificaciones.
            </small>
          </p>
          <p>
            <small>Última actualización: 20/05/2024</small>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cache;
