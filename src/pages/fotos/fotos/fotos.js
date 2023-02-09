import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { Link } from "react-router-dom";
import "./styles.css"

function Fotos(){
    return(
        <>
            <Header />
            <div className="bodyfotos">
                <Link to='/foto1'>
                    <div className="foto1"></div>
                </Link>
                <Link to='/foto2'>
                    <div className="foto2"></div>
                </Link>
                <Link to='/foto3'>
                    <div className="foto3"></div>
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default Fotos