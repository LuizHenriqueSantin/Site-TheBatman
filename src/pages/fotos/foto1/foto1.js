import "./styles.css"
import { Link } from "react-router-dom";

function Foto1(){
    return (
        <>
            <Link to='/fotos'>
                <div className="containerphoto">                   
                    <div className="previous"></div>
                    <div className="photo"></div>
                    <Link to="/foto2">
                        <div className="next"></div>
                    </Link>
                </div>
            </Link>
        </>
    )
}

export default Foto1