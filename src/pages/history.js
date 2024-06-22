import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";
import { useState } from "react";

const History = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <MainLayout title="SpyInv | Historial de pedidos" content="Página para poder ver el historial de compras">
            <BreadCrumb categorias={['history']}/>
            <div className="grid grid-cols-3 gap-8">
                <section className={`text-center w-full ${isOpen ? 'col-span-2' : 'col-span-3'}`}>
                    <table className="mx-auto border-spacing-8 mt-8">
                        <thead>
                            <tr className="border">
                                <th className="px-20">N° Recibo</th>
                                <th className="py-8 px-16">Fecha</th>
                                <th className="px-20">Monto</th>
                                <th className="px-20">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-8">#0006</td>
                                <td>04 jun. 2024 13:33</td>
                                <td>$125.50</td>
                                <td>
                                    <button onClick={() => toggleSidebar()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8">#0006</td>
                                <td>04 jun. 2024 13:33</td>
                                <td>$125.50</td>
                                <td>
                                    <button onClick={() => toggleSidebar()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8">#0006</td>
                                <td>04 jun. 2024 13:33</td>
                                <td>$125.50</td>
                                <td>
                                    <button onClick={() => toggleSidebar()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8">#0006</td>
                                <td>04 jun. 2024 13:33</td>
                                <td>$125.50</td>
                                <td>
                                    <button onClick={() => toggleSidebar()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8">#0006</td>
                                <td>04 jun. 2024 13:33</td>
                                <td>$125.50</td>
                                <td>
                                    <button onClick={() => toggleSidebar()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8">#0006</td>
                                <td>04 jun. 2024 13:33</td>
                                <td>$125.50</td>
                                <td>
                                    <button onClick={() => toggleSidebar()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <aside className={isOpen ? '' : `hidden`}>
                    <div>
                        <div id="drawer-navigation" className={`top-36 right-0 z-40 h-screen py-4 overflow-y-auto transition-transform border-l ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                            tabIndex="-1" aria-labelledby="drawer-navigation-label">
                            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 left-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                                onClick={toggleSidebar}>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close menu</span>
                            </button>
                            <div className="py-4 overflow-y-auto">
                                <div className="flex justify-center p-8 border-b">
                                    <p className="mx-4 font-bold">Compra #0001</p>
                                    <p className="mx-4 font-bold">22 ene. 2024 13:33</p>
                                </div>
                                <div className="p-10">
                                    <p className="font-semibold">Capa de Invisibilidad Azul</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <img className="my-2 rounded-lg w-5/6" src="/imagenes/cloak1.jpeg" alt=""/>
                                        <div className="flex-col mt-2">
                                            <div className="grid grid-cols-2">
                                                <div>
                                                    <p>Unidades:</p>
                                                    <p>Costo unitario:</p>
                                                    <p>Costo total:</p>
                                                </div>
                                                <div>
                                                    <p>01</p>
                                                    <p>$60</p>
                                                    <p>$60</p>
                                                </div>
                                            </div>
                                            <table className="border mt-4">
                                                <thead className="border">
                                                    <span>⭐</span>
                                                    <span>⭐</span>
                                                    <span>⭐</span>
                                                    <span>⭐</span>
                                                    <span>⭐</span>
                                                </thead>
                                                <tbody className="border">
                                                    <input type="text" className="bg-transparent font-sm" placeholder="Escribe un comentario"></input>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <p className="font-semibold mt-4">Traje clásico de espía negro</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <img className="my-2 rounded-lg w-5/6" src="/imagenes/cloak1.jpeg" alt=""/>
                                        <div className="flex-col mt-2">
                                            <div className="grid grid-cols-2">
                                                <div>
                                                    <p>Unidades:</p>
                                                    <p>Costo unitario:</p>
                                                    <p>Costo total:</p>
                                                </div>
                                                <div>
                                                    <p>01</p>
                                                    <p>$60</p>
                                                    <p>$60</p>
                                                </div>
                                            </div>
                                            <table className="border mt-4">
                                                <thead className="border">
                                                    <span>⭐</span>
                                                    <span>⭐</span>
                                                    <span>⭐</span>
                                                    <span>⭐</span>
                                                    <span>⭐</span>
                                                </thead>
                                                <tbody className="border">
                                                    <input type="text" className="bg-transparent font-sm" placeholder="Escribe un comentario"></input>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <p className="text-center mt-8 font-semibold">IMPORTE TOTAL: $120.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            
        </MainLayout>
    )
}

export default History;