import MainLayout from "../components/main_layout"
import { Inter } from "next/font/google";
import BreadCrumb from "@/components/breadcrumb";
import productos from "@/assets/productos";
import noticias from "@/assets/noticias";
import Producto from "@/components/producto";
import Noticia from "@/components/noticia";

export default function Home() {

  return (
    <MainLayout title='SpyInv | Inicio' content='Pantalla principal de productos y noticias'>
      <BreadCrumb categorias={[]} />
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3">
          <section aria-labelledby="productos-heading">
            <h1 id="productos-heading" className="text-center text-3xl my-4 font-bold">Productos</h1>
            <div className="grid grid-cols-3 gap-4">
              {
                productos.map((producto, i) => {
                  return <div key={i}> 
                    <Producto producto={producto}/>
                  </div>
                })
              }
            </div>
          </section>
          <section aria-labelledby="noticias-heading">
            <h1 id="noticias-heading" className="text-center text-3xl my-4 font-bold">Noticias</h1>
            <div className="grid grid-cols-3 gap-4">
              {
                noticias.map((noticia, i) => {
                  return <div key={i}>
                    <Noticia noticia={noticia}/>
                  </div>
                })
              }
            </div>
          </section>
        </div>
        
        <aside aria-labelledby="oferta-heading" className="text-center relative  border-l-4 border-gray-800">
          <div className="sticky top-6">
            <h2 id="oferta-heading" className="text-3xl my-4 font-semibold">Oferta del día</h2>
            <Producto producto={productos[3]}/>
          </div>
        </aside>
      </div>
    </MainLayout>
  );
}
