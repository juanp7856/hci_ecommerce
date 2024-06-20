import MainLayout from "../components/main_layout"
import { Inter } from "next/font/google";
import BreadCrumb from "@/components/breadcrumb";
import productos from "@/assets/productos";
import Producto from "@/components/producto";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Busqueda() {
    const router = useRouter();
    const busqueda = router.query.qry || "";

    const prodsFiltrados = productos.filter(elemento => elemento.nombre.toUpperCase().includes(busqueda.toString().toUpperCase()))

    console.log(prodsFiltrados)

    return (
        <MainLayout title='SpyInv | Búsqueda' content='Pantalla de búsqueda de productos por texto.'>
            <BreadCrumb categorias={[]} />
            <section className="p-4">
                <h1 className="text-3xl my-4 font-bold">Resultados para “{busqueda}”</h1>
                <div className="grid grid-cols-4 gap-4">
                {
                    prodsFiltrados.map((producto) => {
                        return <Producto producto={producto}/>
                    })
                }
                </div>
            </section>
        </MainLayout>
    );
}
