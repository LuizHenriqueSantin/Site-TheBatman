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
                            <div className="comentario-texto">Filme sensacional. Foi um dos melhores filmes de heróis que já assisti. Robert Pattinson ficou incrível e combina muito bem com o personagem. Parabéns Matt Reeves!!</div>
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="fotocoment"></div>
                        <div className="avaliacao">
                            <div className="nota"></div>
                            <div className="comentario-texto">Maravilhoso. Superou todas as expectativas. O Batman que sempre quisemos ver no cinema, diferente de todos os outros, profundo, almático, detetive, triste. Enfim, sem palavras. De longe um dos melhores filmes de super herói. Batman mais uma vez sendo arte.</div>
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="fotocoment"></div>
                        <div className="avaliacao">
                            <div className="nota"></div>
                            <div className="comentario-texto">Gostei muito do filme, o Batman volta a origens do maior investigador do mundo.
Nesse filme o Batman não é visto como um herói.</div>
                        </div>
                    </div>  
                </div>
            <Footer />
        </>
    )
}

export default Comentarios