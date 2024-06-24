const Noticia = (props) => {
    let noti = props.noticia

    return (
        <div className="flex-col text-center mb-10">
            <img className="w-full h-auto p-6" alt={`Imagen de ${noti.titulo}`} src={noti.imagen}/>
            <p className="my-2 font-bold">{noti.titulo}</p>
            <p className="px-6">{noti.descripcion}</p>
        </div>
    )
}

export default Noticia;