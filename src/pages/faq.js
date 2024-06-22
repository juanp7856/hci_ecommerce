import BreadCrumb from "@/components/breadcrumb";
import MainLayout from "@/components/main_layout";

const FAQ = () => {
    return (
        <MainLayout title="SpyInv | Preguntas frecuentes" content="Página para poder visualizar las preguntas frecuentes de productos">
            <BreadCrumb categorias={['faq']}/>
            <article className="m-4">
                <h1 className="font-bold text-5xl mb-8">Preguntas Frecuentes</h1>
                <h2 className="font-bold text-4xl my-2">Invisibilidad</h2>
                <h3 className="font-semibold text-xl mt-4">¿Cómo funciona un producto de invisibilidad?</h3>
                <p className="mx-2">El producto utiliza tecnología avanzada de camuflaje adaptativo para reflejar el entorno y hacer que el usuario sea prácticamente invisible a simple vista.</p>
                <h3 className="font-semibold text-xl mt-4">¿Es seguro?</h3>
                <p className="mx-2">Sí, el producto está diseñado con materiales seguros y cumple con todas las regulaciones de seguridad. Además, incluye controles para desactivar la invisibilidad de forma rápida en caso de emergencia.</p>
                
                <h2 className="font-bold text-4xl mb-2 mt-8">Espionaje</h2>
                <h3 className="font-semibold text-xl mt-4">¿Cómo funciona un producto de espionaje?</h3>
                <p className="mx-2">El producto utiliza tecnología avanzada de camuflaje adaptativo para reflejar el entorno y hacer que el usuario sea prácticamente invisible a simple vista.</p>
                <h3 className="font-semibold text-xl mt-4">¿Es seguro?</h3>
                <p className="mx-2">Sí, el producto está diseñado con materiales seguros y cumple con todas las regulaciones de seguridad. Además, incluye controles para desactivar la invisibilidad de forma rápida en caso de emergencia.</p>
            </article>
        </MainLayout>
    )
}

export default FAQ;