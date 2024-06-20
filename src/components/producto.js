const Producto = (props) => {
    let prod = props.producto
    console.log(prod.imagen1)

    return (
        <div className="flex-col text-center mb-10">
            <img className="w-full h-auto p-6" alt="" src={prod.imagen1}/>
            <p className="my-2">{prod.nombre}</p>
            <p className="mb-2">{prod.precio}$</p>
            <div className="flex-box mb-2">
                {
                    Array.from({ length: prod.calif }, (_, i) => (
                    <span  key={i}>⭐</span>
                    ))
                }
            </div>
            <p className="px-6">{prod.descripcion}</p>
        </div>
    )
}

export default Producto;