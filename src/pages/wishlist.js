import MainLayout from "../components/main_layout"
import BreadCrumb from "@/components/breadcrumb";
import productos from "@/assets/productos";
import TarjetaWishlit from "@/components/tarjeta_wishlist";

const WishList = () => {

  return (
    <MainLayout title='SpyInv | Lista de deseos' content='Pantalla principal de productos y noticias'>
      <BreadCrumb categorias={[]} />
      <h1 className="text-center my-8 font-bold text-3xl">Lista de deseos</h1>
      <table className="auto mx-auto border-spacing-2">
        <thead>
            <tr className="border">
                <th className="p-4">Imagen</th>
                <th className="py-4 px-8">Nombre de producto</th>
                <th className="p-4">Precio por unidad</th>
                <th className="p-4">Cantidad</th>
                <th className="p-4">Estado</th>
                <th className="p-4">Añadir a carrito</th>
                <th className="p-4">Quitar</th>
            </tr>
        </thead>
        <tbody>
            {
                productos.map((producto, i) => {
                    return <TarjetaWishlit producto={producto} key={i}/>
                })
            }
        </tbody>
      </table>
    </MainLayout>
  );
}

export default WishList;