import { useState } from "react";

const TarjetaCarrito = (props) => {
    const prod = props.producto
    const [input, setInput] = useState('1')

    return <tr role="row">
        <td role="cell" className="p-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8  mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13zm5 7.9l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"></path></svg></td>
        <td role="cell" className="p-4"><img className="w-20 h-20" alt="" src={prod.imagen1}/></td>
        <td role="cell" className="py-4 px-8">{prod.nombre}</td>
        <td role="cell" className="p-4 text-center">${prod.precio}</td>
        <td role="cell" className="p-4 text-center">
            <div className="flex">
                <input type="number" className="text-center text-black w-16 h-full border-t border-b border-gray-300" value={input} onChange={(e)=>setInput(e.target.value)}/>
            </div>
        </td> 
        <td role="cell" className="p-4 text-center">${prod.precio}</td>
    </tr>
}

export default TarjetaCarrito;