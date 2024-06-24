import MainLayout from "../components/main_layout"
import BreadCrumb from "@/components/breadcrumb";
import productos from "@/assets/productos";
import TarjetaWishlit from "@/components/tarjeta_wishlist";

const WishList = () => {

  return (
    <MainLayout title='SpyInv | Lista de deseos' content='Pantalla principal de productos y noticias'>
      <BreadCrumb categorias={[]} />
      <h1 className="text-center my-8 font-bold text-3xl">Lista de deseos</h1>
      <table role="table" className="auto mx-auto border-spacing-2">
        <thead role="rowgroup">
            <tr className="border" role="row">
                <th role="columnheader" className="p-4">Imagen</th>
                <th role="columnheader" className="py-4 px-8">Nombre de producto</th>
                <th role="columnheader" className="p-4">Precio por unidad</th>
                <th role="columnheader" className="p-4">Cantidad</th>
                <th role="columnheader" className="p-4">Estado</th>
                <th role="columnheader" className="p-4">Añadir a carrito</th>
                <th role="columnheader" className="p-4">Quitar</th>
            </tr>
        </thead>
        <tbody role="rowgroup">
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