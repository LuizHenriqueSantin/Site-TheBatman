import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import "./styles.css"

function Contato(){
    return(
        <>
            <Header />
            <div className="bodycontato">
            <div className="grid-container">
                    <div className="containercontato">
                        <div className="warnerimg"></div>
                        <Link to='https://www.instagram.com/wbpictures/' target={"_blank"}>
                            <div className="linkinsta"></div>
                        </Link>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="containercontato">
                        <div className="robertimg"></div>
                        <Link to='https://www.instagram.com/robertpattinsonofficial/' target={"_blank"}>
                            <div className="linkinsta"></div>
                        </Link>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="containercontato">
                        <div className="zoeimg"></div>
                        <Link to='https://www.instagram.com/zoeisabellakravitz/' target={"_blank"}>
                            <div className="linkinsta"></div>
                        </Link>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="containercontato">
                        <div className="jeffreyimg"></div>
                        <Link to='https://www.instagram.com/jfreewright/' target={"_blank"}>
                            <div className="linkinsta"></div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato