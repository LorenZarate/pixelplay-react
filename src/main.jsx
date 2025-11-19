import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from "react-router-dom"
import { CartProvider } from './context/CartContext.jsx'
import { FavoritosProvider } from './context/FavoritosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <CartProvider>
            <FavoritosProvider>
                <App />
            </FavoritosProvider>
        </CartProvider>
    </HashRouter>
)
