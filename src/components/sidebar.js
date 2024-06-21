import { useRouter } from "next/router";
import BreadCrumb from "./breadcrumb";
import Link from "next/link";
import { useState } from "react";

const Sidebar = (props) => {
    const router = useRouter();
    console.log(router.pathname)
    let valLow = router.query.lp || false;
    let valHigh = router.query.hp || false;

    const [lowPrice, setLowPrice] = useState(valLow);
    const [highPrice, setHighPrice] = useState(valHigh);

    const toggleLow = () => {
        if (router.pathname.includes("lp") && lowPrice=="true") {
            router.push(router.pathname.replace("&lp=true",""))
        } else if (!router.pathname.includes("?cat") || !router.pathname.includes("?hp")) {
            router.push(router.pathname + "?lp=true")
        } else {
            router.push(router.pathname + "&lp=true")
        }

        setLowPrice(!lowPrice)
    };
    const toggleHigh = () => {
        if (router.pathname.includes("hp") && lowPrice=="true") {
            router.push(router.pathname.replace("&hp=true",""))
        } else if (!router.pathname.includes("?cat") || !router.pathname.includes("?lp")) {
            router.push(router.pathname + "?hp=true")
        } else {
            router.push(router.pathname + "&hp=true")
        }

        setHighPrice(!highPrice)

    };

    return (
    <div id="drawer-navigation" class={`fixed top-30 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`} 
        tabindex="-1" aria-labelledby="drawer-navigation-label">
        <BreadCrumb categorias={router != "/" ? [router.pathname.replace("/","")] : []}/>
        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
            onClick={() => props.toggleSidebar()}>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close menu</span>
        </button>
        <div class="py-4 overflow-y-auto">
            <p className="font-semibold text-xl my-2">Categorías</p>
            <ul class="space-y-2 font-medium">
                <li>
                    <Link href="/category?catf=Espionaje" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Espionaje (3)</span>
                    </Link>
                </li>
                <li>
                    <Link href="/category?catf=Invisibilidad" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Invisibilidad (3)</span>
                    </Link>
                </li>
            </ul>
            <p className="font-semibold text-xl mb-2">Precio</p>
            <ul class="space-y-2 font-medium">
                <li>
                    <label class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" checked={lowPrice} onChange={() => toggleLow()}/>
                        <span class="ml-3 flex-1 whitespace-nowrap">{'< 1200$'}</span>
                    </label>
                </li>
                <li>
                    <label class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" checked={highPrice} onChange={() => toggleHigh()}/>
                        <span class="ml-3 flex-1 whitespace-nowrap">{'> 1200$'}</span>
                    </label>
                </li>
            </ul>
        </div>
    </div>)
}

export default Sidebar;