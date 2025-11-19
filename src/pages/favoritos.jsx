import { useEffect, useState } from "react"
import "../styles/global.css"

function Favoritos() {

    const [favoritos, setFavoritos] = useState(() => {
        const saved = localStorage.getItem("favoritos");
        return saved ? JSON.parse(saved) : [];
    });

    const quitarFavorito = (id) => {
        const nuevos = favoritos.filter(f => f.id !== id);
        setFavoritos(nuevos);
        localStorage.setItem("favoritos", JSON.stringify(nuevos));
    };

    return (
        <div className="container text-white text-center my-4">

            <h1>Favoritos</h1>

            {favoritos.length === 0 && <p>No has agregado favoritos.</p>}

            <div className="row justify-content-center">
                {favoritos.map(f => (
                    <div key={f.id} className="col-12 col-sm-4 my-2">
                        <div className="favorito-card">

                            <img src={f.img} className="favorito-img" />

                            <h5 className="mt-2">{f.title}</h5>

                            <button className="btn btn-danger mt-2"
                                onClick={() => quitarFavorito(f.id)}>
                                Quitar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Favoritos
