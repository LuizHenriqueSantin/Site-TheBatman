import './styles.css';
import Header from '../../components/header/header';
import Video from '../../assets/trailer.mp4'
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Header />
        <div>
            <div className="banner"></div>
            <div className="containerhome">
                <div className="trailer">
                    <video src={Video} controls type="video/mp4" className="video"></video>
                </div>
                <div className="sinopse">
                    <p>Apos dois anos espreitando as ruas como Batman, Bruce wayne se encontra nas profundezas mais sombrias de Gotham city.<br />Com poucos aliados confiaveis, o vigilante solitario se estabelece como a personificacao da vinganca para a populacao.</p>
                    <Link to='/compra'> 
                        <button className="botao">Comprar Ingresso</button>
                    </Link>
                </div>
            </div>
            <div className="actors">
                <div className="batman">Batman - Robert Pattinson</div>
                <div className="catwoman">Mulher Gato - Zoe Kravitz</div>
                <div className="gordon">Gordon - Jeffrey Wright</div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Home;