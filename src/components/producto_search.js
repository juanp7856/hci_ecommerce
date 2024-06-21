const ProductoSearch = (props) => {
    let prod = props.producto

    return (
        <div className="flex-col mb-10">
            <img className="w-full h-96 object-cover p-6" alt={prod.descripcion} src={prod.imagen1}/>
            <p className="my-2 pl-6">{prod.nombre}</p>
            <div className="flex-box mb-2 pl-6">
                {
                    Array.from({ length: prod.calif }, (_, i) => (
                    <span  key={i}>⭐</span>
                    ))
                }
            </div>
            <p className="mb-2 pl-6">{prod.precio}$</p>
        </div>
    )
}

export default ProductoSearch;