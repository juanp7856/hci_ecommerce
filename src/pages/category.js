import productos from "@/assets/productos";
import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";
import ProductoSearch from "@/components/producto_search";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";

export default function Category() {
    const router = useRouter();
    const categoria = router.query.catf || "";
    const lowP = router.query.lp || "";
    const highP = router.query.hp || "";

    let nuevos_prods = []

    for (let i = 0; i < productos.length; i++) {
        if (categoria == productos[i].categoria) {
            nuevos_prods.push(productos[i])
        }
        if (lowP == "true" && productos[i].precio >= 1200) {
            nuevos_prods.push(productos[i])
        }
        if (highP == "true" && productos[i].precio <= 1200) {
            nuevos_prods.push(productos[i])
        }
    }

    return (
        <MainLayout title='SpyInv | Búsqueda' content='Pantalla de búsqueda de productos por texto.'>
            <BreadCrumb categorias={[]} />
            <Sidebar />
            <div className="grid grid-cols-4 gap-3">
                {
                    nuevos_prods.map((prod) => {
                        return  <ProductoSearch producto={prod} key={prod.id}/>
                        
                    })
                }
            </div>
            
        </MainLayout>
    );
}