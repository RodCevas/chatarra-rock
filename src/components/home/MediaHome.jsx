import youtube from "../../assets/images/youtube.png";
import spotify from "../../assets/images/spotify.png";
import soundcloud from "../../assets/images/soundcloud.png";
import bandcamp from "../../assets/images/bandcamp.png";

function MediaHome() {
  return (
    <div className="row bg-light py-5 my-5">
      <div className="col-12 text-center text-info">
        <h3 className="align-middle">¡¡Escuchanos en!!</h3>
      </div>
      <div className="col-12 social-logos text-center">
        <a href="https://appurl.io/3r7LfdDgjo" target="_blank" rel="noreferrer">
          <img
            src={youtube}
            className="img-fluid mx-5"
            alt="youtube logo"
          ></img>
        </a>
        <a href="https://appurl.io/TzLcAIS-kx" target="_blank" rel="noreferrer">
          <img
            src={spotify}
            className="img-fluid mx-5 mt-5 mt-sm-0"
            alt="spotify logo"
          ></img>
        </a>
        <a href="https://appurl.io/KSHH6WkWci" target="_blank" rel="noreferrer">
          <img
            src={soundcloud}
            className="img-fluid mx-5 mt-5 mt-sm-0"
            alt="Soundcloud logo"
          ></img>
        </a>
        <a href="https://appurl.io/x1MbsXtvao" target="_blank" rel="noreferrer">
          <img
            src={bandcamp}
            className="img-fluid mx-5 mt-5 mt-sm-0"
            alt="bandcamp logo"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default MediaHome;
