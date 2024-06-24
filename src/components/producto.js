import Link from "next/link";

const Producto = (props) => {
    let prod = props.producto

    return (
        <Link href={`/det-producto?id=${prod.id}`} className="flex-col text-center mb-10">
            <img className="w-full h-auto p-6" alt={`Imagen de ${prod.nombre}`} src={prod.imagen1}/>
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
        </Link>
    )
}

export default Producto;