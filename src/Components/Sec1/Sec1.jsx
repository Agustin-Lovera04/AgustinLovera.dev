import perfil from "../../assets/img_perfil.png";
import "./Sec1_Style.css";
const Sec1 = () => {
  return (
    <div className="sec1 d-flex flex-md-row flex-column justify-content-center align-items-center">
      <div className="col-10 col-md-2 text-center text-md-end">
        <img src={perfil} alt="" className="perfil_img" />
      </div>
      <div className="col-10 col-md-8 text-center">
        <h1 className="var-h1 text-light">
          Hola! Soy <span className="text-warning">Agustin Lovera</span>
        </h1>
        <h4 className="var-h4 fw-bold text-light position-relative">
          Full Stack Developer
        </h4>
        <svg
          className="icon-click"
          width="110px"
          height="110px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z"
            stroke="#ffc107"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sec1;
