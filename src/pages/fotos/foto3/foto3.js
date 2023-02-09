import "./styles.css"
import { Link } from "react-router-dom";

function Foto3(){
    return (
        <>
            <Link to='/fotos'>
                <div className="containerphoto3">
                    <Link to='/foto2'>
                        <div className="previous3"></div>
                    </Link>
                    <div className="photo3"></div>
                    <div className="next3"></div>
                </div>
            </Link>
        </>
    )
}

export default Foto3