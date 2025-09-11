import graphElementSec4 from '../../assets/elemento_sc4.png'
import './Sec4_Style.css'
const Sec4 = () => {
  return (
    <div className='d-flex flex-column-reverse flex-md-row justify-content-center align-items-center sec4'>
        <div className="col-10 col-md-5 text-center">
            <img src={graphElementSec4} alt="" className='graphElementSec4'/>
        </div>
        <div className="col-10 col-md-5">
            <h1 className="var-h1">
                Hagamos que las ideas <mark>funcionen</mark>
            </h1>
        </div>
    </div>
  )
}

export default Sec4