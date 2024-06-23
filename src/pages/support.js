import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";

const Policies = () => {
    return (
        <MainLayout title="SpyInv | Soporte" content="Página para poder ver soporte de la tienda.">
            <BreadCrumb categorias={['policies']}/>
            <article className="m-4">
                <h1 className="font-bold text-5xl mt-4 mb-8">Soporte técnico</h1>
                <ol className="list-decimal list-inside">
                    <li className="font-bold text-2xl my-6">
                        ¿Cómo puedo detectar si hay dispositivos de espionaje en mi hogar?
                        <p className="font-normal text-base ms-4 mt-2">Utiliza un detector de señales de radiofrecuencia o cámaras ocultas para revisar tu hogar regularmente.</p>
                    </li>
                    <li className="font-bold text-2xl my-6">
                        ¿Qué hago si encuentro un dispositivo de espionaje en mi propiedad?
                        <p className="font-normal text-base ms-4 mt-2">No lo manipules directamente. Contacta a las autoridades locales y reporta el hallazgo para que ellos puedan manejar la situación adecuadamente.</p>
                    </li>
                    <li className="font-bold text-2xl my-6">
                        ¿Pueden los dispositivos de espionaje interferir con otros dispositivos electrónicos?
                        <p className="font-normal text-base ms-4 mt-2">Sí, algunos dispositivos de espionaje pueden causar interferencias. Si notas problemas inusuales, puede ser una señal de que hay un dispositivo espía cerca.</p>
                    </li>
                    <li className="font-bold text-2xl my-6">
                        ¿Cómo puedo proteger mi red WiFi contra el espionaje?
                        <p className="font-normal text-base ms-4 mt-2">Usa contraseñas fuertes, habilita la encriptación WPA3 y actualiza regularmente tu router y dispositivos conectados.</p>
                    </li>
                    <li className="font-bold text-2xl my-6">
                    ¿Qué precauciones debo tomar al comprar dispositivos de espionaje?
                        <p className="font-normal text-base ms-4 mt-2">Compra solo a proveedores confiables y asegúrate de que los dispositivos cumplan con las leyes locales. Verifica las reseñas y la política de devoluciones del vendedor.</p>
                    </li>
                </ol> 
            </article>
        </MainLayout>
    )
}

export default Policies;