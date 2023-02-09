import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./styles.css";

function Comentarios(){
    return(
        <>
            <Header />
                <div className="bodycomentarios">
                    <div className="comentario">
                        <div className="fotocoment"></div>
                        <div className="avaliacao">
                            <div className="nota"></div>
                            <div className="comentario-texto">Texto aleatorio sendo escrito para testar o css dessa div fingindo ser um comentario sobre o filme</div>
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="fotocoment"></div>
                        <div className="avaliacao">
                            <div className="nota"></div>
                            <div className="comentario-texto">Texto aleatorio 2 sendo escrito para testar o css dessa div fingindo ser um comentario sobre o filme</div>
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="fotocoment"></div>
                        <div className="avaliacao">
                            <div className="nota"></div>
                            <div className="comentario-texto">Texto aleatorio 3 sendo escrito para testar o css dessa div fingindo ser um comentario sobre o filme</div>
                        </div>
                    </div>  
                </div>
            <Footer />
        </>
    )
}

export default Comentarios