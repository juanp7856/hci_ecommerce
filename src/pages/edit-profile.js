import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";

const EditProfile = () => {
    
    return (
        <MainLayout title="SpyInv | Configurar perfil " content="Página para poder configurar los datos de tu perfil">
            <BreadCrumb categorias={['profile', 'edit-profile']}/>
            <section>
                <h1 className="text-center font-bold text-3xl">Configuración de cuenta</h1>
                <div className="grid grid-cols-5 gap-4 mt-8">
                    <div className="text-center">
                        <img className="px-6 w-full rounded-lg" src="https://i1.wp.com/images.binaryfortress.com/General/UnknownUser1024.png?ssl=1" alt=""/>
                        <button type="button" class="my-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">CAMBIAR FOTO DE PERFIL</button>
                    </div>
                    <div className="col-span-2">
                        <div class="mb-5">
                            <label for="user" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Nombre de usuario</label>
                            <input type="text" id="user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="pepe.grillo42" required />
                        </div>
                        <h2 className="font-bold text-xl">Información personal</h2>
                        <div className="flex my-2">
                            <div className="w-1/2">
                                <label for="name" class="block text-md font-medium text-gray-900 dark:text-white">Nombres</label>
                                <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pepe Emmanuel" required />
                            </div>
                            <div className="w-1/2">
                                <label for="lastn" class="block text-md font-medium text-gray-900 dark:text-white">Apellidos</label>
                                <input type="text" id="lastn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Grillo Ozuna" required />
                            </div>
                        </div>
                        <label for="direc" class="block my-2 text-md font-medium text-gray-900 dark:text-white">Dirección</label>
                        <input type="text" id="direc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Caras de Atahualpa 135, Callao" required />
                        <label for="telef" class="block my-2 text-md font-medium text-gray-900 dark:text-white">Teléfono</label>
                        <input type="text" id="telef" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="944001922" required />
                    </div>
                    <div className="col-span-2">
                        <h2 className="font-bold text-xl text-center">Cambio de contraseña</h2>
                        <div className="mx-40 py-2">
                            <label for="conta" class="my-2 text-md font-medium text-gray-900 dark:text-white">Contraseña actual</label>
                            <input type="password" id="conta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mx-40 py-2">
                            <label for="contan" class="my-2 text-md font-medium text-gray-900 dark:text-white">Nueva contraseña</label>
                            <input type="password" id="contan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mx-40 py-2">
                            <label for="contnr" class="my-2 text-md font-medium text-gray-900 dark:text-white">Repetir nueva contraseña</label>
                            <input type="password" id="contnr" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-80 text-end mx-20">
                            <button type="button" class="my-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">GUARDAR CAMBIOS</button>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default EditProfile;