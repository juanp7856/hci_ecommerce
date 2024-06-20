import MainLayout from "../components/main_layout"
import { Inter } from "next/font/google";
import BreadCrumb from "@/components/breadcrumb";
import productos from "@/assets/productos";
import Producto from "@/components/producto";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout title='SpyInv | Inicio' content='Pantalla principal de productos y noticias'>
      <BreadCrumb categorias={[]} />
      <div className="grid grid-cols-4 gap-3">
        <section className="col-span-3">
          <h1 className="text-center text-3xl my-4 font-bold">Productos</h1>
          <div className="grid grid-cols-3 gap-4">
            {
              productos.map((producto) => {
                return <Producto producto={producto}/>
              })
            }
          </div>
        </section>
        <aside className="text-center relative  border-l-4 border-gray-800">
          <div className="sticky top-6">
            <h2 className="text-3xl my-4 font-semibold">Oferta del día</h2>
            <Producto producto={productos[3]}/>
          </div>
        </aside>
      </div>
    </MainLayout>
  );
}
