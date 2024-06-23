import BarraP from "@/components/barra_payment";
import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";
import { useRouter } from "next/router";
import { useState } from "react";

const Payment = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('option2');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <MainLayout title="SpyInv | Carrito" content="Página para poder ver tus items que vas a comprar">
            <BreadCrumb categorias={['cart','payment']}/>
            <div className="grid grid-cols-3 mx-4 gap-8">
                <section className="col-span-2">
                    <BarraP prog={router.pathname}/>
                    <div className="grid grid-cols-2 gap-8 my-4">
                        <div className="flex-col">
                            <h2 className="border p-4 text-center text-2xl font-semibold">Información de envío</h2>
                            <div className="flex">
                                <div className="w-1/2">
                                    <label for="conta" class="my-2 text-md font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-5/6 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="w-1/2">
                                    <label for="conta" class="my-2 text-md font-medium text-gray-900 dark:text-white">Apellidos</label>
                                    <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-5/6 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <label for="conta" class="text-md font-medium text-gray-900 dark:text-white">Dirección</label>
                            <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-9/12 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <label for="conta" class="text-md font-medium text-gray-900 dark:text-white">Ciudad</label>
                            <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-9/12 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <label for="conta" class="text-md font-medium text-gray-900 dark:text-white">País</label>
                            <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-9/12 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <label for="conta" class="text-md font-medium text-gray-900 dark:text-white">Correo</label>
                            <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-9/12 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <label for="conta" class="text-md font-medium text-gray-900 dark:text-white">Celular</label>
                            <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-9/12 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="flex-col">
                            <h2 className="border p-4 text-center text-2xl font-semibold">Información de pago</h2>
                            <div class="flex items-center mb-4 mt-8 ms-4">
                                <input id="default-radio-1" type="radio"  name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    value="option1" checked={selectedOption === 'option1'} onChange={(e) => handleOptionChange(e)}/>
                                <label for="default-radio-1" class="ms-2 font-medium text-gray-900 dark:text-gray-300">Tarjeta de crédito / débito</label>
                            </div>
                            {
                                selectedOption == 'option1' ? 
                                    <div className="ms-4 mb-8">
                                        <label for="conta" class="my-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                        <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        <div className="grid-cols-3 grid">
                                            <div className="col-span-2">
                                                <label for="conta" class="my-2 text-sm font-medium text-gray-900 dark:text-white">Número de tarjeta</label>
                                                <input type="text" id="conta" class="w-9/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div>
                                                <label for="conta" class="my-2 text-sm font-medium text-gray-900 dark:text-white">CVV</label>
                                                <input type="password" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 w-1/4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="conta" class="my-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de vencimiento</label>
                                            <div className="flex">
                                                <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 w-1/12 me-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <input type="text" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 w-1/12 ms-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                            <div class="flex items-center ms-4">
                                <input id="default-radio-2" type="radio" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    value="option2" checked={selectedOption === 'option2'} onChange={(e) => handleOptionChange(e)}/>
                                <label for="default-radio-2" class="ms-2 font-medium text-gray-900 dark:text-gray-300">Yape / Plin</label>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={()=>router.push('/success')} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">EMITIR PAGO</button>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="border-l-4 border-gray-800">
                    <h2 className="text-2xl font-semibold text-center">Resumen</h2>
                    <table className="auto mx-auto border border-white border-spacing-2 mt-8">
                        <thead>
                            <tr>
                                <th className="p-8">Productos</th>
                                <th className="p-8">Cantidad</th>
                                <th className="p-8">Precio</th>
                            </tr>
                        </thead>
                        <tbody className="p-8 text-center">
                            <tr>
                                <td className="p-4">Producto</td>
                                <td className="p-4">10</td>
                                <td className="py-4 px-8">$420</td>
                            </tr>
                            <tr>
                                <td className="p-4">Producto</td>
                                <td className="p-4">10</td>
                                <td className="py-4 px-8">$420</td>
                            </tr>
                            <tr>
                                <td className="p-4">Producto</td>
                                <td className="p-4">10</td>
                                <td className="py-4 px-8">$420</td>
                            </tr>
                            <tr className="border text-start flex-col">
                                <td className="ps-2 py-2">
                                    <p>Subtotal: $X.XX</p>
                                    <p>Envío: $X.XX</p>
                                    <p>Impuestos: $X.XX</p>
                                </td>
                            </tr>
                            <tr className="border text-start">
                                <td className="ps-2 py-2">TOTAL: $X.XX</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
            
        </MainLayout>
    )
}

export default Payment;