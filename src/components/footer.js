const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-gray-900 p-4">
                <div className="flex grid grid-cols-4 justify-between">
                    <div className="grid grid-rows-2">
                        <div className="flex grid grid-rows-2">
                            <p className="font-semibold text-white mr-2">Contacto</p>
                            <div>
                                <div className="relative">
                                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo electrónico"/>
                                        <button type="button" className="absolute inset-y-0 right-0 flex items-center pe-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"><path fill="currentColor" d="m12.2 13l-.9.9q-.275.275-.275.7t.275.7t.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l.9.9H9q-.425 0-.712.288T8 12t.288.713T9 13zm-.2 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
                                        </button>
                                </div>
                                <textarea type="text" rows="4" class="mt-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mensaje"/>
                            </div> 
                        </div>  
                    </div>
                    <div className="">
                        <p>asd</p>
                    </div>
                    <div className="">
                        <p>asd</p>
                    </div>
                    <div className="">
                        <p>asd</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;