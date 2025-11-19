import { createContext, useContext, useState, useEffect } from "react";

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState(() => {
        const saved = localStorage.getItem("favoritos");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]);

    const addFavorito = (item) => {
        if (!favoritos.some(f => f.id === item.id)) {
            setFavoritos([...favoritos, item]);
        }
    };

    const removeFavorito = (id) => {
        setFavoritos(favoritos.filter(f => f.id !== id));
    };

    return (
        <FavoritosContext.Provider value={{ favoritos, addFavorito, removeFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
}

export function useFavoritos() {
    return useContext(FavoritosContext);
}
