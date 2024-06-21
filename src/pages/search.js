import MainLayout from "../components/main_layout"
import { Inter } from "next/font/google";
import BreadCrumb from "@/components/breadcrumb";
import productos from "@/assets/productos";
import ProductoSearch from "@/components/producto_search";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Busqueda() {
    const router = useRouter();
    const busqueda = router.query.qry || "";

    const prodsFiltrados = productos.filter(elemento => elemento.nombre.toUpperCase().includes(busqueda.toString().toUpperCase()))

    return (
        <MainLayout title='SpyInv | Búsqueda' content='Pantalla de búsqueda de productos por texto.'>
            <BreadCrumb categorias={[]} />
            <section className="p-4">
                <h1 className="text-3xl my-4 font-bold">Resultados para “{busqueda}”</h1>
                <div className="grid grid-cols-6 gap-4">
                {
                    prodsFiltrados.map((producto) => {
                        return <ProductoSearch producto={producto}/>
                    })
                }
                </div>
            </section>
        </MainLayout>
    );
}
