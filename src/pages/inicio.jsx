import { Link } from "react-router-dom"
import "../styles/global.css"

function Home() {
    return (
        <div className="inicio-container text-white">

            {/* HERO PRINCIPAL */}
            <section className="hero-section text-center">
                <h1 className="hero-title">Bienvenido a PixelPlay</h1>
                <p className="hero-subtitle">
                    Descubrí los mejores juegos indie, elegidos y curados especialmente para vos.
                </p>

                <div className="hero-buttons">
                    <Link to="/juegos" className="btn btn-primary btn-lg mx-2">
                        Explorar Juegos
                    </Link>
                    <Link to="/favoritos" className="btn btn-outline-light btn-lg mx-2">
                        Ver Favoritos
                    </Link>
                </div>
            </section>

            {/* SECCIÓN DESTACADA */}
            <section className="inicio-features container text-center mt-5">
                <div className="row">

                    <div className="col-12 col-md-4 mb-4">
                        <div className="feature-card">
                            <h3 className="feature-title">Catálogo Indie</h3>
                            <p>
                                Juegos cuidadosamente seleccionados para ofrecerte lo mejor del mundo independiente.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <div className="feature-card">
                            <h3 className="feature-title">Carrito y Favoritos</h3>
                            <p>
                                Guardá tus títulos preferidos y gestioná tus compras fácilmente.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <div className="feature-card">
                            <h3 className="feature-title">Actualizaciones Futuras</h3>
                            <p>
                                Próximamente nuevas funciones, reseñas, recomendaciones y más.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Home
