import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Receitas from './pages/Receitas';
import Erro from './pages/Erro';
import Header from './componets/Header';


function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/receitas/:id" element={ <Receitas/> } />

        <Route path="*" element={ <Erro/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;