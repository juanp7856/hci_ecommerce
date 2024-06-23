const BarraP = ({ prog }) => {
    return (
        <div className="relative w-full max-w-2xl mx-auto mt-4 px-4 sm:px-8">
            {/* Barra de fondo */}
            <div className="absolute left-0 right-0 top-1.5 bg-white border-black border-2 rounded-lg h-6 w-full" aria-hidden="true"></div>
            
            {/* Barra de progreso */}
            <div className="relative z-10 flex justify-between items-center">
                {/* Paso 1 */}
                <div className="flex items-center">
                    <div className={`relative flex items-center justify-center w-10 h-10 ${prog === '/cart' ? 'bg-gray-300' : 'bg-white'} border-black border-2 rounded-full`}>
                        <span className="text-black">1</span>
                    </div>
                </div>
                
                {/* Paso 2 */}
                <div className="flex items-center">
                    <div className={`relative flex items-center justify-center w-10 h-10 ${prog === '/payment' ? 'bg-gray-300' : 'bg-white'} border-black border-2 rounded-full`}>
                        <span className="text-black">2</span>
                    </div>
                </div>
                
                {/* Paso 3 */}
                <div className="flex items-center">
                    <div className={`relative flex items-center justify-center w-10 h-10 ${prog === '/success' ? 'bg-gray-300' : 'bg-white'} border-black border-2 rounded-full`}>
                        <span className="text-black">3</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BarraP;
