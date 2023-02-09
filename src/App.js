import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Fotos from './pages/fotos/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';
import Contato from './pages/contato/contato';
import Compra from './pages/compra/compra/compra';
import Foto1 from './pages/fotos/foto1/foto1';
import Foto2 from './pages/fotos/foto2/foto2';
import Foto3 from './pages/fotos/foto3/foto3';
import Fim from './pages/compra/realizada/fim';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/fotos' element={<Fotos />} />
      <Route path='/comentarios' element={<Comentarios />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/compra' element={<Compra />} />
      <Route path='/foto1' element={<Foto1 />} />
      <Route path='/foto2' element={<Foto2 />} />
      <Route path='/foto3' element={<Foto3 />} />
      <Route path='/fim' element={<Fim />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
