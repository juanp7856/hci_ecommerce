const BarraP = (props) => {
    return (
        <>
            <div id="barra" className="absolute left-0 right-0 ms-72 mt-1.5 bg-white border-black border-2 rounded-lg h-6 max-w-2xl w-full" aria-hidden="true"></div>
            <div className="max-w-xl mx-auto relative z-10">
                <div className="flex items-center justify-between">
                <div className="relative flex items-center">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-black"></div>
                    </div>
                    <div className={`relative flex items-center justify-center w-10 h-10 ${props.prog=='/cart' ? 'bg-gray-300' : 'bg-white'} border-black border-2 rounded-full`}>
                    <span className="text-black">1</span>
                    </div>
                </div>
                <div className="relative flex items-center">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-black"></div>
                    </div>
                    <div className={`relative flex items-center justify-center w-10 h-10 ${props.prog=='/payment' ? 'bg-gray-300' : 'bg-white'} border-black border-2 rounded-full`}>
                    <span className="text-black">2</span>
                    </div>
                </div>
                <div className="relative flex items-center">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-black"></div>
                    </div>
                    <div className={`relative flex items-center justify-center w-10 h-10 ${props.prog=='/success' ? 'bg-gray-300' : 'bg-white'} border-black border-2 rounded-full`}>
                    <span className="text-black">3</span>
                    </div>
                </div>
                </div>
            </div>
        </>
        
    );
}

export default BarraP;