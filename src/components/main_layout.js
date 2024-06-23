import Head from "next/head"
import Header from "./header.js"
import Footer from "./footer.js"
import { Inter } from 'next/font/google'
import { useState } from "react";
import Sidebar from "./sidebar.js";
import Modal from "./modal.js";
const inter = Inter({ subsets: ["latin"] });


const MainLayout = ({title, content, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType,setModalType] = useState('');


    // Función para abrir el modal
    const openModal = (tipo) => {
        setIsModalOpen(true);
        setModalType(tipo);
        console.log('asd')
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content}
                />
            </Head>

            <Header toggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            {
                isModalOpen && (
                    <Modal closeModal={closeModal} type={modalType}/>
                )
            }
            <main className={`flex-grow min-h-screen pt-4 pb-4 ${inter.className}`}>
                {children}
            </main>

            <Footer openModal={openModal}/>
        </>
        

    )
}

export default MainLayout;