function Contacto() {
    return (
        <div className="text-white my-3 mx-3">
            <form>
                <h1>Contacto</h1>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Direccion de correo electronico</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Comentario</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="comentario"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto