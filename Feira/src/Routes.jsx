import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PaginaInicial } from "./Components/PaginaIncial"
import { Compras } from "./Components/Compras"
import { Default } from "./Components/Default"
import { UsuarioProvider } from "./common/Usuario.jsx"
import { CarrinhoProvider } from "./common/Carrinho"
import { Carrinho } from "./Components/Carrinho"
import { PagamentoProvider } from "./common/Pagamento"

function App() {

  return (
    <BrowserRouter>
      <UsuarioProvider>
      <CarrinhoProvider>
      <PagamentoProvider>
          <Routes>

            <Route path="/" element={<PaginaInicial />} />

            <Route path="/feira" element={<Default />}>

              <Route index element={<Compras />} />
              
            </Route>

            <Route path="/carrinho" element={<Carrinho />} />

          </Routes>
      </PagamentoProvider>
      </CarrinhoProvider>
      </UsuarioProvider>

    </BrowserRouter>

  )
}

export default App
