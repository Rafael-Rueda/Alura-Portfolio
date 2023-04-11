import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import {Inicio} from './pages/Inicio';
import Cardapio from './pages/Cardapio';
import Menu from 'Components/Menu';
import Header from 'Components/Header';
import { Sobre } from 'pages/Sobre';
import { Footer } from 'Components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

export function AppRouter() {
  return (
    <main className='container'>
      <BrowserRouter>

        <Routes>
          
          <Route path='/' element={<><Menu /> <Outlet/> <Footer/></>}>

            <Route path='/' element={<Header/>}> 
              <Route index element={<Inicio/>}/>
              <Route path='cardapio' element={<Cardapio/>} />
              <Route path='sobre' element={<Sobre></Sobre>} />
            </Route>

            <Route path='prato/:id' element={<Prato/>}/>
            <Route path='*' element={<NotFound/>}/>

          </Route>

        </Routes>

      </BrowserRouter>
    </main>
  );
}