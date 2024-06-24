const TarjetaWishlit = (props) => {
    const prod = props.producto

    return <tr role="row">
        <td role="cell" className="p-4"><img className="w-20 h-20" src={prod.imagen1}/></td>
        <td role="cell" className="py-4 px-8">{prod.nombre}</td>
        <td role="cell" className="p-4 text-center">${prod.precio}</td>
        <td role="cell" className="p-4 text-center">
            <div className="flex">
                <input type="number" className="text-center w-16 h-full border-t border-b border-gray-300" value="1"/>
            </div>
        </td> 
        <td role="cell" className="p-4 text-center">En stock</td>
        <td role="cell" className="p-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg></td>
        <td role="cell" className="p-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8  mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13zm5 7.9l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"></path></svg></td>
    </tr>
}

export default TarjetaWishlit;