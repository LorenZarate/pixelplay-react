import "../styles/global.css";

function Nosotros() {
    return (
        <div className="container text-white my-5 nosotros-container">

            <h1 className="text-center mb-4">Sobre PixelPlay</h1>

            <section className="nosotros-section mb-5">
                <h2>¿Quiénes somos?</h2>
                <p>
                    PixelPlay es una plataforma digital dedicada exclusivamente al universo de los videojuegos indie.
                    Nuestro objetivo es conectar a jugadores con proyectos independientes de alta calidad, ofreciendo
                    una experiencia accesible, moderna y centrada en la creatividad.
                </p>
            </section>

            <section className="nosotros-section mb-5">
                <h2>¿Qué hacemos?</h2>
                <p>En PixelPlay reunimos un catálogo curado de juegos independientes. Nuestra tienda permite:</p>
                <ul>
                    <li>Explorar títulos actuales.</li>
                    <li>Ver detalles, datos técnicos y puntaje del juego en metacritic.</li>
                    <li>Agregar juegos a favoritos.</li>
                    <li>Gestionar un carrito de compras sencillo e intuitivo.</li>
                </ul>
            </section>

            <section className="nosotros-section mb-5">
                <h2>Nuestra misión</h2>
                <p>
                    Impulsar a los desarrolladores independientes, brindando visibilidad a proyectos creativos y
                    ayudando a que sus juegos lleguen a más personas.
                </p>
            </section>

            <section className="nosotros-section mb-5">
                <h2>Nuestra visión</h2>
                <p>
                    Convertirnos en una plataforma de referencia para juegos indie en el mundo hispanohablante,
                    destacando innovación, arte y jugabilidad.
                </p>
            </section>

            <section className="nosotros-section mb-5">
                <h2>Valores</h2>
                <ul>
                    <li><strong>Creatividad:</strong> juegos con identidad y propuestas originales.</li>
                    <li><strong>Independencia:</strong> apoyo a estudios pequeños y nuevos desarrolladores.</li>
                    <li><strong>Accesibilidad:</strong> experiencia clara, rápida y sin complicaciones.</li>
                    <li><strong>Transparencia:</strong> información real y precios actualizados.</li>
                </ul>
            </section>

            <section className="nosotros-section mb-5">
                <h2>¿Por qué elegir PixelPlay?</h2>
                <ul>
                    <li>Catálogo seleccionado a mano.</li>
                    <li>Página rápida, ligera y optimizada.</li>
                    <li>Integración con APIs de precios y Steam.</li>
                    <li>Navegación amigable y adaptable a celulares.</li>
                    <li>Diseño centrado en la experiencia del usuario.</li>
                </ul>
            </section>

        </div>
    );
}

export default Nosotros;
