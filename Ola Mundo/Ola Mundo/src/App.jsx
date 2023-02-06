import { BrowserRouter, Routes, Route, useLocation, Link, NavLink, Outlet } from 'react-router-dom'

import './App.css'
import { Home } from './componentes/HomePage'
import { SobreMim } from './componentes/SobreMim'
import { NavBar } from './componentes/NavBar'
import { E404 } from './componentes/E404'
import { Banner } from './componentes/Banner'
import { Post } from './componentes/Post'

function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<><NavBar /> <Banner /> <Outlet/></>}>
          <Route path="/" element={<Home />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<E404 />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes
