import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FavoritoProvider } from './Common/Favorito'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritoProvider>
      <App />
    </FavoritoProvider>
  </React.StrictMode>,
)
