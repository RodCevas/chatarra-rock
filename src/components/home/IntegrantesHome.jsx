import guitarrista from "../../assets/images/guitarrista.jpg";
import baterista from "../../assets/images/baterista.png";
import bajista from "../../assets/images/bajista.jpg";

function IntegrantesHome() {
  return (
    <div id="integrantes" className="row justify-content-around py-5 my-5">
      <div className="col-lg-2 col-md-3 col-sm-4">
        <div className="card border-dark bg-dark text-light text-center m-sm-0 m-5">
          <img src={guitarrista} class="card-img-top" alt="Guitarrista"></img>
          <div className="text-band pt-3">
            <h4>Chusaco</h4>
            <p>Voz y guitarra </p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4">
        <div className="card border-dark bg-dark text-light text-center m-sm-0 m-5">
          <img src={baterista} class="card-img-top" alt="Baterista"></img>
          <div className="text-band pt-3">
            <h4>RodMetaL</h4>
            <p>Batería</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4">
        <div className="card border-dark bg-dark text-light text-center m-sm-0 m-5">
          <img src={bajista} class="card-img-top" alt="Bajista"></img>
          <div className="text-band pt-3">
            <h4>Amur</h4>
            <p>Bajo y coros</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrantesHome;
