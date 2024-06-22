import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";

const Profile = () => {
    
    return (
        <MainLayout title="SpyInv | Perfil" content="Página para visualizar tu perfil">
            <BreadCrumb categorias={['profile']}/>
            <div className="grid grid-cols-3 gap-8">
                <section className="col-span-2">
                    <h1 className="font-bold text-4xl my-6 text-center">Mi perfil</h1>
                    <div className="grid grid-cols-3 gap-8">
                        <img className="px-6 w-full rounded-lg" src="https://i1.wp.com/images.binaryfortress.com/General/UnknownUser1024.png?ssl=1" alt=""/>
                        <div className="flex-col">
                            <h3 className="font-bold">Nombre de usuario</h3>
                            <p>pepe.grillo42</p>
                            <h3 className="font-bold mt-4">Nombres</h3>
                            <p>Pepe Emmanuel</p>
                            <h3 className="font-bold mt-4">Apellidos</h3>
                            <p>Grillo Ozuna</p>
                            <h3 className="font-bold mt-4">Dirección</h3>
                            <p>Caras de Atahualpa 135, Callao</p>
                            <h3 className="font-bold mt-4">Teléfono</h3>
                            <p>944001922</p>
                        </div>
                        <div className="content-end text-end">
                            <button type="button" class="mt-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">EDITAR CUENTA</button>
                        </div>
                    </div>
                </section>
                <aside className="border-l-4 border-gray-900 text-center">
                    <h2 className="font-semibold text-xl">Últimos pedidos</h2>
                    <div className="border rounded-lg m-10 p-6 text-start">
                        <p className="text-xl">Pedido #1234 - Fecha: 10/01/1001 - 3000$</p>
                        <p className="text-xl">Estado: [Enviado]</p>
                    </div>
                    <div className="border rounded-lg m-10 p-6 text-start">
                        <p className="text-xl">Pedido #1234 - Fecha: 10/01/1001 - 3000$</p>
                        <p className="text-xl">Estado: [Enviado]</p>
                    </div>
                    <div className="border rounded-lg m-10 p-6 text-start">
                        <p className="text-xl">Pedido #1234 - Fecha: 10/01/1001 - 3000$</p>
                        <p className="text-xl">Estado: [Enviado]</p>
                    </div>
                    <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Ver historial</button>
                </aside>
            </div>
        </MainLayout>
    );
}

export default Profile;