import productos from "@/assets/productos";
import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";
import { useRouter } from "next/router";

const DetalleProducto = () => {
    const router = useRouter();
    let producto = {};

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == router.query.id) producto=productos[i];
    }

    return (
        <MainLayout title="SpyInv | Recuperar contraseña" content="Página para poder enviar un correo y recuperar la contraseña">
            <BreadCrumb categorias={['det-producto']}/>
            <div className="grid grid-cols-2">
                <section className="text-center content-center">
                    <h1 className="font-bold text-4xl my-6">{producto.nombre} ({producto.stock})</h1>
                    <img className="w-1/2 mb-4 mx-auto" alt={`Primera imagen de ${producto.nombre}`} src={producto.imagen1}/>
                    <div className="grid grid-cols-3 gap-3 w-1/2 mx-auto">
                        <img alt={`Segunda imagen de ${producto.nombre}`} src={producto.imagen1}/>
                        <img alt={`Tercera imagen de ${producto.nombre}`} src={producto.imagen2}/>
                        <img alt={`Cuarta imagen de ${producto.nombre}`} src={producto.imagen3}/>
                    </div>
                </section>
                <section>
                    <div className="grid grid-cols-2 my-6">
                        <p className="font-bold text-3xl">{producto.precio}$</p>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-10 h-10" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725"></path></svg>
                            <button type="button"  class="mx-32 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">AÑADIR A CARRITO</button>
                        </div>
                    </div>
                    <div className="flex-box">
                        {
                            Array.from({ length: producto.calif }, (_, i) => (
                            <span  key={i}>⭐</span>
                            ))
                        }
                    </div>
                    <h2 className="font-bold text-3xl my-4">Detalle</h2>
                    <p className="pe-8">{producto.descripcion}</p>
                    <div className="grid grid-cols-2">
                        <div className="grid grid-rows-2">
                            <h2 className="font-bold text-3xl my-4">Garantía</h2>
                            <p className="pe-8">{producto.garantia}</p>
                            <h2 className="font-bold text-3xl my-4">Ética</h2>
                            <p className="pe-8">{producto.etica}</p>
                        </div>
                        <div className="text-center content-center">
                            <p className="font-bold text-3xl px-8">Instalar versión de firmware:</p>
                            <p>{producto.firmware}</p>
                            <button type="button" class="my-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">DESCARGAR</button>
                        </div>
                    </div>
                </section>
            </div>
            
        </MainLayout>
    );
}

export default DetalleProducto;