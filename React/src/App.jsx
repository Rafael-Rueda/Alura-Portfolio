import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Main } from './Components/Main'
import { Navbar } from './Components/Navbar'
import { Filme } from './Components/Filme'
import { Favoritos } from './Components/Favoritos'
import './Global.scss'
import apijson from './Common/Data.json'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<><Navbar /> <Outlet/></>}>

            <Route index element={<Main />} />

            <Route path="filmes">
              {apijson.map(filme => {
                return (
                  <Route key={filme.id} path={`${filme.id}`} element={<Filme filme={filme}/>}/>
                )
              })}
            </Route>

            <Route path="favoritos" element={<Favoritos />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
