import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";

const Policies = () => {
    return (
        <MainLayout title="SpyInv | Políticas" content="Página para poder visualizar todas las políticas de la página">
            <BreadCrumb categorias={['policies']}/>
            <article className="m-4">
                <h1 className="font-bold text-5xl mb-8">Políticas de la página</h1>
                <ol className="list-decimal list-inside">
                    <li className="font-bold text-4xl my-2">
                        Política de privacidad
                        <ol className="list-decimal list-inside ml-6">
                            <li className="font-semibold text-2xl my-2">
                                Uso de datos
                                <p className="font-normal text-base mt-2">
                                En SpyInv, nos comprometemos a proteger la privacidad de nuestros usuarios. Recopilamos y utilizamos datos personales únicamente para mejorar su experiencia de compra, proporcionar servicios personalizados y mantener la seguridad de nuestro sitio web. Los datos recopilados incluyen información como nombre, dirección, correo electrónico, y detalles de pago. Estos datos son almacenados de manera segura y no se comparten con terceros sin su consentimiento, excepto cuando sea necesario para completar una transacción o cumplir con requisitos legales.
                                </p>
                            </li>
                            <li className="font-semibold text-2xl my-2">
                                Uso de cookies
                                <p className="font-normal text-base mt-2">
                                Nuestro sitio web utiliza cookies para mejorar la funcionalidad y personalizar la experiencia del usuario. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio. Utilizamos cookies para recordar sus preferencias, realizar un seguimiento de su actividad de navegación y analizar el tráfico del sitio web. Usted puede controlar el uso de cookies a través de la configuración de su navegador, aunque desactivar las cookies puede afectar la funcionalidad del sitio. Para más información sobre cómo gestionamos las cookies, consulte nuestra Política de Cookies.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li className="font-bold text-4xl my-2">
                        Política de uso
                        <ol className="list-decimal list-inside ml-6">
                            <li className="font-semibold text-2xl my-2">
                                Uso de dispositivos
                                <p className="font-normal text-base mt-2">
                                Los productos de SpyInv están diseñados para ser utilizados de manera responsable y en conformidad con todas las leyes y regulaciones aplicables. Al adquirir y utilizar nuestros dispositivos de invisibilidad y espionaje, los usuarios aceptan utilizar estos productos únicamente para fines legítimos y éticos. Está estrictamente prohibido utilizar nuestros dispositivos para invadir la privacidad de otros, realizar actividades ilegales o comprometer la seguridad de individuos o entidades.
                                </p>
                                <p className="font-normal text-base mt-2">
                                Los usuarios son responsables de asegurarse de que el uso de nuestros dispositivos no infrinja los derechos de terceros ni viole ninguna ley local, estatal o federal. InvisTech no se hace responsable del uso indebido o ilegal de sus productos. Nos reservamos el derecho de tomar medidas legales contra aquellos que utilicen nuestros dispositivos de manera inapropiada o ilegal.
                                </p>
                                <p className="font-normal text-base mt-2">
                                Para obtener más información sobre el uso adecuado de nuestros dispositivos, consulte nuestros términos y condiciones de uso o póngase en contacto con nuestro equipo de soporte.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol> 
            </article>
        </MainLayout>
    )
}

export default Policies;