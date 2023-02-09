import "./styles.css"
import { Link } from "react-router-dom";

function Foto2(){
    return (
        <>
            <Link to='/fotos'>
                <div className="containerphoto2">
                    <Link to='/foto1'>
                        <div className="previous2"></div>
                    </Link>
                    <div className="photo2"></div>
                    <Link to="/foto3">
                        <div className="next2"></div>
                    </Link>
                </div>
            </Link>
        </>
    )
}

export default Foto2