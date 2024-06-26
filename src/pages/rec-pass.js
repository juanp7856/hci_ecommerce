import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";
import { useRouter } from "next/router";

const RecPass = () => {
    const router = useRouter();
    return (
        <MainLayout title="SpyInv | Recuperar contraseña" content="Página para poder enviar un correo y recuperar la contraseña">
            <BreadCrumb categorias={['rec-pass']}/>
            <section className="text-center content-center w-full">
                    <img src="favicon.ico" alt="Logo de SpyInv" className="mx-auto my-20"/>
                    <h1 className="font-bold text-3xl mb-4">Ingresa tu correo electrónico</h1>
                    <form class="max-w-sm mx-auto"> 
                        <input type="email" id="email" aria-describedby="helper-text-explanation" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Correo electrónico" />
                        <button onClick={()=>router.push('/conf-rec-pass')} type="submit"  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Enviar</button>
                    </form>
            </section>
        </MainLayout>
    )
}

export default RecPass;