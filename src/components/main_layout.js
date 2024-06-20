import Head from "next/head"
import Header from "./header.js"
import Footer from "./footer.js"

const MainLayout = ({title, content, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content}
                />
            </Head>

            <Header />

            <main className="flex-grow min-h-screen pt-4 pb-4">
                {children}
            </main>

            <Footer />
        </>
        

    )
}

export default MainLayout;