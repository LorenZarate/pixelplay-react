import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useFavoritos } from "../context/FavoritosContext.jsx";
import "../styles/global.css";

function Detallejuego() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { addFavorito } = useFavoritos();

    const [game, setGame] = useState(null);
    const [precio, setPrecio] = useState(null);

    const proxy = "https://api.allorigins.win/get?url=";

    // ---------------------------------------------------
    // 1) FETCH DETALLES DE STEAM
    // ---------------------------------------------------
    useEffect(() => {
        async function fetchSteam() {
            try {
                const url = encodeURIComponent(
                    `https://store.steampowered.com/api/appdetails?appids=${id}`
                );

                const res = await fetch(`${proxy}${url}`);
                const data = await res.json();

                const parsed = JSON.parse(data.contents);
                const gameData = parsed[id]?.data;

                if (gameData) {
                    setGame({
                        titulo: gameData.name,
                        img: gameData.header_image,
                        desc: gameData.short_description,
                        lanzamiento: gameData.release_date?.date,
                        desarrollador: gameData.developers?.[0],
                        publisher: gameData.publishers?.[0],
                        generos: gameData.genres?.map(g => g.description).join(", "),
                        tags: gameData.categories
                            ?.map(c => c.description)
                            .slice(0, 5)
                            .join(", "),
                        rating: gameData.metacritic?.score
                            ? gameData.metacritic.score
                            : null
                    });
                }
            } catch (err) {
                console.error("Error Steam:", err);
            }
        }

        fetchSteam();
    }, [id]);

    // ---------------------------------------------------
    // 2) FETCH PRECIO DE CHEAPSHARK
    // ---------------------------------------------------
    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/games?steamAppID=${id}`)
            .then(res => res.json())
            .then(data => {
                if (data[0]) {
                    setPrecio(data[0].cheapest);
                }
            });
    }, [id]);

    // ---------------------------------------------------
    // 3) LOADING
    // ---------------------------------------------------
    if (!game) {
        return (
            <div className="text-white text-center my-5">
                <h2>Cargando detalles...</h2>
            </div>
        );
    }

    // ---------------------------------------------------
    // 4) RENDER
    // ---------------------------------------------------
    return (
        <div className="container text-white my-5 detalle-container text-center">

            <img src={game.img} className="detalle-img" />

            <h1 className="detalle-titulo my-3">{game.titulo}</h1>

            <p className="detalle-precio">
                {precio ? `US$${precio}` : "Precio no disponible"}
            </p>

            <p className="text-center mx-auto">{game.desc}</p>

            <div className="text-start mx-auto" style={{ maxWidth: "700px" }}>
                <p><b>Desarrollador:</b> {game.desarrollador || "No disponible"}</p>
                <p><b>Publisher:</b> {game.publisher || "No disponible"}</p>
                <p><b>Géneros:</b> {game.generos || "No disponible"}</p>
                <p><b>Tags:</b> {game.tags || "No disponible"}</p>
                <p><b>Lanzamiento:</b> {game.lanzamiento || "No disponible"}</p>
                <p><b>Metacritic:</b> {game.rating ? `${game.rating}/100` : "Sin score"}</p>
            </div>

            {/* BOTONES */}
            <div className="mt-4 d-flex justify-content-center gap-3">
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        addToCart({
                            id,
                            title: game.titulo,
                            img: game.img,
                            price: precio || "0.00"
                        })
                    }
                >
                    Agregar al carrito
                </button>

                <button
                    className="btn-favorito"
                    onClick={() =>
                        addFavorito({
                            id,
                            title: game.titulo,
                            img: game.img
                        })
                    }
                >
                    Agregar a favoritos
                </button>
            </div>

        </div>
    );
}

export default Detallejuego;
