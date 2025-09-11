import HA_img from "../../assets/HA_img.png";
import BZ_img from "../../assets/BZ_img.png";
import PN_img from "../../assets/PN_img.png";
import AM_img from "../../assets/AM_img.jpg";
import "./Sec3_Style.css";

const Sec3 = () => {
  return (
    <div className="sec3">
      <h1 className="var-h1 offset-1">Proyectos recientes</h1>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap gap-4">
        <div className="card col-10 col-md-4">
          <div className="img_card_container HA_bg text-center align-content-center">
            <img src={HA_img} className="card-img-top shadow" alt="sitio web" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Humanos Akasha</h5>
            <div className="d-flex gap-2">
              <p className="lng_card">WordPress</p>
              <p className="lng_card">Amelia</p>
              <p className="lng_card">WooCommerce</p>
            </div>
            <a
              href="https://humanosakasha.com/"
              className="btn btn-primary me-2"
              target="_blank"
            >
              Ir al sitio
            </a>
          </div>
        </div>
        <div className="card col-10 col-md-4">
          <div className="img_card_container BZ_bg text-center align-content-center">
            <img
              src={BZ_img}
              className="card-img-top shadow"
              alt="desarrollo web"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Bz Print</h5>
            <div className="d-flex gap-2">
              <p className="lng_card">React Js</p>
              <p className="lng_card">Firebase</p>
              <p className="lng_card">Bootstrap</p>
              <p className="lng_card">Css</p>
            </div>
            <a
              href="https://bzprints.com/"
              className="btn btn-primary me-2"
              target="_blank"
            >
              Ir al sitio
            </a>
            <a
              href="https://github.com/Agustin-Lovera04/BzPrint-Web"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div className="card col-10 col-md-4">
          <div className="img_card_container PN_bg text-center align-content-center">
            <img src={PN_img} className="card-img-top shadow" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Puerto Norte</h5>
            <div className="d-flex gap-2">
              <p className="lng_card">ReactJs</p>
              <p className="lng_card">JavaScript</p>
              <p className="lng_card">Vite</p>
            </div>
            <a
              href="https://puertonorteviajes.com/"
              className="btn btn-primary me-2"
              target="_blank"
            >
              Ir al sitio
            </a>
            <a
              href="https://github.com/Agustin-Lovera04/PuertoNorte/tree/master/DISE%C3%91O%202/Puerto%20Norte"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div className="card col-10 col-md-4">
          <div className="img_card_container AM_bg text-center align-content-center">
            <img
              src={AM_img}
              className="card-img-top img_AMORATTO shadow"
              alt="programacion"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Bot de WhatsApp</h5>
            <div className="d-flex flex-wrap gap-2">
              <p className="lng_card">Builder Bot</p>
              <p className="lng_card">Mongo DB</p>
              <p className="lng_card">JavaScript</p>
              <p className="lng_card">Express Js</p>
              <p className="lng_card">Handlebars</p>
              <p className="lng_card">Css</p>
            </div>
            <a
              href="https://github.com/Agustin-Lovera04/amoratto-proyect"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
