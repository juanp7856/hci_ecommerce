const Barra = (props) => {
    console.log(props.prog)
    return (
        <>
            <div id="barra" class="absolute left-0 right-0 mx-auto mt-1.5 bg-white border-black border-2 rounded-lg h-6 max-w-2xl w-full" aria-hidden="true"></div>
            <div class="max-w-xl mx-auto relative z-10">
                <div class="flex items-center justify-between">
                <div class="relative flex items-center">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-black"></div>
                    </div>
                    <div class={`relative flex items-center justify-center w-10 h-10 ${props.prog=='/cart' ? 'bg-gray-300' : 'bg-white'} border-black border-2 rounded-full`}>
                    <span class={props.prog=='/cart' ? 'text-white' : 'text-black'}>1</span>
                    </div>
                </div>
                <div class="relative flex items-center">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-black"></div>
                    </div>
                    <div class={`relative flex items-center justify-center w-10 h-10 ${props.prog=='/payment' ? 'bg-gray-300' : 'bg-white'} border-black border-2 rounded-full`}>
                    <span class={props.prog=='/payment' ? 'text-white' : 'text-black'}>2</span>
                    </div>
                </div>
                <div class="relative flex items-center">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-black"></div>
                    </div>
                    <div class={`relative flex items-center justify-center w-10 h-10 ${props.prog=='/success' ? 'bg-gray-300' : 'bg-white'} border-black border-2 rounded-full`}>
                    <span class={props.prog=='/success' ? 'text-white' : 'text-black'}>3</span>
                    </div>
                </div>
                </div>
            </div>
        </>
        
    );
}

export default Barra;