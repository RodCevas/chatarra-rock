function BannerHome() {
  return (
    <section id="header">
        <div className="row justify-content-around align-items-center bg-blur">
            <div className="col-md-4 m-5">
                <img src="/public/home-banner.jpg" alt="Chatarra Banner Home" className="img-fluid" />
            </div>
            <div className="col-md-4 text-center mb-5">            
                <a href="https://chatarra.fanlink.tv/rock-duro" role="button" className="btn btn-dark px-lg-5 py-lg-3 font-weight-bold" target="_blank" rel="noreferrer">Play Álbum</a>
            </div>
        </div> 
    </section>
  );
}

export default BannerHome;