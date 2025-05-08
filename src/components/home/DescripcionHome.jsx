import chatarraHeader from "../../assets/images/chatarra-header.png";

function DescripcionHome() {
  return (
    <section>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <img
            src={chatarraHeader}
            alt="chatarra band"
            className="img-fluid logo-bio"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center my-5">
          <p>
            Somos una banda de Rock Duro de Barcelona. Somos un Power Trio con
            cultura de calle. Las raíces del grupo se forman en los lejanos
            finales de los noventa, y a lo largo de más de veinte años nos hemos
            ido transformado con la contribución de varios músicos que nos han
            permitido crear nuestro propio estilo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DescripcionHome;
