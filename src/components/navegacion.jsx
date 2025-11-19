import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import "../styles/global.css"

function Navegacion() {
    const { cartCount } = useCart();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">PixelPlay</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ms-3" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item"><Link to="/" className="nav-link text-white">Inicio</Link></li>
                        <li className="nav-item"><Link to="/juegos" className="nav-link text-white">Juegos</Link></li>
                        <li className="nav-item"><Link to="/favoritos" className="nav-link text-white">Favoritos</Link></li>
                        <li className="nav-item"><Link to="/nosotros" className="nav-link text-white">Nosotros</Link></li>
                        <li className="nav-item"><Link to="/contacto" className="nav-link text-white">Contacto</Link></li>

                        <li className="nav-item">
                            <Link to="/carrito" className="nav-link text-white">
                                🛒 Carrito {cartCount > 0 && <span className="badge bg-dark ms-1">{cartCount}</span>}
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navegacion
