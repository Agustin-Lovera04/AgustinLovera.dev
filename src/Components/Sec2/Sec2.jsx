import graphElementSc2 from "../../assets/elemento_sc2.png";
import './Sec2_Style.css'
const Sec2 = () => {
  return (
    <div className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
      <div className="col-10 col-md-5">
        <img src={graphElementSc2} alt="" className="graphElementSc2" />
      </div>
      <div className="col-10 col-md-5">
        <p className="var-txt text-center text-md-left">
          Hace 3 años que recorro este increíble oficio de la programación.
          Trabajé y asesoré a distancia y de manera presencial, para agencias,
          startups, particulares, etc. <br />
          Me gusta ir más allá del código, integrarme al proyecto, generar un
          sentido de pertenencia, y construir soluciones que funcionan.
        </p>
      </div>
    </div>
  );
};

export default Sec2;
