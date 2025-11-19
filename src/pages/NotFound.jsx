import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="text-center text-white my-5">
            <h1 className="display-4">404</h1>
            <p className="lead">La página que buscás no existe.</p>

            <Link to="/" className="btn btn-primary mt-3">
                Volver al inicio
            </Link>
        </div>
    );
}
