function IntegrantesHome() {
  return (
    <div id="integrantes" className="row justify-content-around py-5 my-5">
      <div className="col-lg-2 col-md-3 col-sm-4">
        <div className="card border-dark bg-dark text-light text-center m-sm-0 m-5">          
          <img src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fguitarrista.jpg?alt=media&token=937eba0c-0100-45d5-bae5-3905de35bb57" class="card-img-top" alt="Guitarrista"></img>
          <div className="text-band pt-3">
            <h4>Chusaco</h4>
            <p>Voz y guitarra </p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4">
        <div className="card border-dark bg-dark text-light text-center m-sm-0 m-5">
          <img src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fbaterista.png?alt=media&token=f0f37886-7994-4a0c-b925-88047e847103" class="card-img-top" alt="Baterista"></img>
          <div className="text-band pt-3">
            <h4>RodMetaL</h4>
            <p>Batería</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4">
        <div className="card border-dark bg-dark text-light text-center m-sm-0 m-5">
          <img src="https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fbajista.jpg?alt=media&token=ea96f120-8dd0-44c1-80ec-02af2c46258f" class="card-img-top" alt="Bajista"></img>
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
