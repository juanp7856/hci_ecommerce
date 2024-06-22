import Barra from "@/components/barra_compra";
import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";
import { useRouter } from "next/router";

const Success = () => {
    const router = useRouter();

    return (
        <MainLayout title="SpyInv | Carrito" content="Página para poder ver tus items que vas a comprar">
            <BreadCrumb categorias={['cart','payment','success']}/>
            <section className="w-full">
                <Barra prog={router.pathname}/>
                <section className="mx-auto w-1/3">
                    <div className="border flex-col my-16 text-center">
                        <h1 className="text-3xl mt-20 font-bold">Compra exitosa</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-56 h-56 mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"></path></svg>
                        <p className="mb-20">Un comprobante electrónico ha sido enviado a su correo.</p>
                    </div>
                </section>
            </section>
        </MainLayout>
    )
}

export default Success;