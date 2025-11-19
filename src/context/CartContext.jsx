import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = useCallback((item) => {
        setCart((prev) => {
            const existente = prev.find((i) => i.id === item.id);
            if (existente) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                );
            } else {
                return [...prev, { ...item, qty: 1 }];
            }
        });
    }, []);

    const removeFromCart = useCallback((id) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
    }, []);

    const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

    const value = useMemo(() => ({
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount
    }), [cart, addToCart, removeFromCart, clearCart, cartCount]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
