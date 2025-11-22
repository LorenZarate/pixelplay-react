import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext.jsx"
import { useFavoritos } from "../context/FavoritosContext.jsx"
import "../styles/global.css"

function Juegos() {
    const { addToCart } = useCart();
    const { addFavorito } = useFavoritos();
    const [juegos, setJuegos] = useState([]);

    // Estados para el filtro
    const [precioInput, setPrecioInput] = useState(""); // lo que escribe el usuario
    const [precioMax, setPrecioMax] = useState(null);   // filtro aplicado solo cuando toca el botón

    const indieGames = [
        "hollow knight",
        "hollow knight: silk song",
        "celeste",
        "hades",
        "dead cells",
        "stardew",
        "cuphead",
        "inside",
        "limbo",
        "spire",
        "ori",
        "shovel"
    ];

    useEffect(() => {
        Promise.all(
            indieGames.map(word =>
                fetch("https://www.cheapshark.com/api/1.0/games?title=" + word)
                    .then(res => res.json())
                    .then(results => results[0])
            )
        ).then(data => setJuegos(data.filter(j => j)));
    }, []);

    // 🔥 Aplicar filtro solo si precioMax tiene un valor
    const juegosFiltrados = precioMax
        ? juegos.filter(j => Number(j.cheapest) <= precioMax)
        : juegos;

    return (
        <div>
            <div className="text-center text-white my-3">
                <h1>Juegos Indie</h1>
            </div>

            {/* 🔥 Filtro con botón */}
            <div className="text-center text-white mb-4">
                <label className="me-2">Precio máximo:</label>

                <input
                    type="number"
                    className="form-control d-inline-block"
                    style={{ width: "120px" }}
                    value={precioInput}
                    onChange={(e) => setPrecioInput(e.target.value)}
                    min="0"
                />

                <button
                    className="btn btn-primary ms-2"
                    onClick={() => setPrecioMax(Number(precioInput))}
                >
                    Aplicar filtro
                </button>

                {precioMax !== null && (
                    <button
                        className="btn btn-secondary ms-2"
                        onClick={() => {
                            setPrecioMax(null);
                            setPrecioInput("");
                        }}
                    >
                        Limpiar filtro
                    </button>
                )}
            </div>

            <div className="container text-black text-center">
                <div className="row">

                    {juegosFiltrados.map(j => (
                        <div key={j.gameID} className="col-12 col-sm-3 my-3">
                            <div className="card card-indie mx-3">

                                <img src={j.thumb} className="indie-img" />

                                <div className="card-body">
                                    <h5 className="card-title">{j.external}</h5>

                                    <p>Precio: US${j.cheapest}</p>

                                    <button
                                        className="btn btn-primary btn-carrito mb-2"
                                        onClick={() => addToCart({
                                            id: j.gameID,
                                            title: j.external,
                                            img: j.thumb,
                                            price: j.cheapest
                                        })}
                                    >
                                        Agregar al carrito
                                    </button>

                                    <button
                                        className="btn-favorito mb-2"
                                        onClick={() => addFavorito({
                                            id: j.gameID,
                                            title: j.external,
                                            img: j.thumb
                                        })}
                                    >
                                        Agregar a favoritos
                                    </button>

                                    {j.steamAppID && (
                                        <Link
                                            to={`/juego/${j.steamAppID}`}
                                            className="btn btn-secondary mt-2"
                                        >
                                            Ver detalles
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Juegos
