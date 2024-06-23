const Modal = (props) => {
    return (
        <div id="small-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-center justify-between md:p-2 rounded-t dark:border-gray-600">

                        <button type="button" onClick={props.closeModal} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Cerrar pop-up</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">
                        <h3 class="text-2xl font-semibold text-center text-gray-900 dark:text-white">
                            {props.type=='contacto' ? 'Se ha enviado el mensaje' : 'Se ha suscrito correctamente'}
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 mx-auto" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"></path></svg>
                        <p class="text-center p-8 leading-relaxed">
                        Recuerde revisar su correo constantemente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;