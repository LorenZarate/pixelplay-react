import { useCart } from "../context/CartContext.jsx"
import "../styles/global.css"

function Carrito() {

    const { cart, removeFromCart, clearCart } = useCart();

    // Calcular total
    const total = cart.reduce((acc, item) => acc + Number(item.price), 0);

    return (
        <div className="container text-white text-center my-4">

            <h1>Carrito</h1>

            {cart.length === 0 && <p>No hay productos en el carrito.</p>}

            <div className="row justify-content-center">
                {cart.map(item => (
                    <div key={item.id} className="col-12 col-sm-4 my-2">
                        <div className="carrito-card">

                            <img src={item.img} className="carrito-img" />

                            <h5 className="mt-2">{item.title}</h5>
                            <p>US${item.price}</p>

                            <button className="btn btn-danger mt-2"
                                onClick={() => removeFromCart(item.id)}>
                                Quitar
                            </button>

                        </div>
                    </div>
                ))}
            </div>

            {cart.length > 0 && (
                <div className="mt-4">

                    {/* TOTAL */}
                    <h3>Total: <span className="text-success">US${total.toFixed(2)}</span></h3>
                    <p>{cart.length} juego(s) en el carrito</p>

                    {/* BOTÓN VACIAR */}
                    <button className="btn btn-primary mt-3 me-2" onClick={clearCart}>
                        Vaciar carrito
                    </button>

                    {/* NUEVO: BOTÓN FINALIZAR COMPRA (MAQUETA) */}
                    <button
                        className="btn btn-success mt-3"
                        onClick={() => alert("Esta es una función de demostración. El proceso de compra se añadirá en futuras versiones.")}
                    >
                        Finalizar compra
                    </button>
                </div>
            )}

        </div>
    )
}

export default Carrito
