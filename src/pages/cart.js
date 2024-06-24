import productos from "@/assets/productos";
import Barra from "@/components/barra_compra";
import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";
import TarjetaCarrito from "@/components/tarjeta_carrito";
import { useRouter } from "next/router";

const Cart = () => {
    const router = useRouter();

    return (
        <MainLayout title="SpyInv | Carrito" content="Página para poder ver tus items que vas a comprar">
            <BreadCrumb categorias={['cart']}/>
            <section className="w-full">
                <Barra prog={router.pathname}/>
                <table role="table" className="auto mx-auto border-spacing-2 mt-8">
                    <thead role="rowgroup">
                        <tr role="row" className="border">
                            <th role="columnheader" className="p-4">Quitar</th>
                            <th role="columnheader" className="p-4">Imagen</th>
                            <th role="columnheader" className="py-4 px-8">Nombre de producto</th>
                            <th role="columnheader" className="p-4">Precio por unidad</th>
                            <th role="columnheader" className="p-4">Cantidad</th>
                            <th role="columnheader" className="p-4">Precio total</th>
                        </tr>
                    </thead>
                    <tbody role="rowgroup" className="border">
                        {
                            productos.map((producto, i) => {
                                return <TarjetaCarrito producto={producto} key={i}/>
                            })
                        }
                    </tbody>
                </table>
                <div className="flex justify-end mt-4 pe-16 w-1/2 mx-auto">
                    <p className="mx-2">Subtotal</p>
                    <p className="mx-2">$192.00</p>
                </div>
                <div className="flex justify-end mt-4 pe-16 w-1/2 mx-auto">
                    <p className="mx-2">Envío</p>
                    <p className="mx-2">$15.00</p>
                </div>
                <div className="flex justify-end mt-4 pe-16 w-1/2 mx-auto">
                    <p className="mx-2">Total</p>
                    <p className="mx-2">$207.00</p>
                </div>
                <div className="mx-auto w-1/2 text-center">
                    <button type="button" onClick={()=>router.push('/payment')} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">IR A PAGAR</button>
                </div>
            </section>
        </MainLayout>
    )
}

export default Cart;